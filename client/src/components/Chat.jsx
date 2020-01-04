import React, { Component } from 'react';
import Video from 'twilio-video';
import axios from 'axios';
import '../styles/chat.css'; 
import jwtDecode from 'jwt-decode';

export default class VideoComponent extends Component {
    constructor(props) {
        super();
        this.state = {
          token: '', 
          identity: null,  /* Will hold the fake name assigned to the client. The name is generated by faker on the server */
          roomName: '',    /* Will store the room name */
          roomNameErr: false,  /* Track error for room name TextField. This will    enable us to show an error message when this variable is true */
          previewTracks: null,
          localMediaAvailable: false, /* Represents the availability of a LocalAudioTrack(microphone) and a LocalVideoTrack(camera) */
          hasJoinedRoom: false,
          activeRoom: null, // Track the current active room,
          stayOn: true
       };
        this.joinRoom = this.joinRoom.bind(this);
        this.handleRoomNameChange = this.handleRoomNameChange.bind(this);
        this.leaveRoom = this.leaveRoom.bind(this);
        this.detachTracks = this.detachTracks.bind(this);
        this.detachParticipantTracks =this.detachParticipantTracks.bind(this);
        this.roomJoined = this.roomJoined.bind(this);
        this.getTracks = this.getTracks.bind(this); 
     }

    handleRoomNameChange(e) {
        /* Fetch room name from text field and update state */
            let roomName = e.target.value; 
            this.setState({ roomName });
        }

    joinRoom() {
            /* 
         Show an error message on room name text field if user tries         
         joining a room without providing a room name. This is 
         enabled by setting `roomNameErr` to true
           */
                if (!this.state.roomName.trim()) {
                     this.setState({ roomNameErr: true });
                     return;
                 }
         
                 console.log("Joining room '" + this.state.roomName + "'...");
                 let connectOptions = {
                     name: this.state.roomName
                 };
         
                 if (this.state.previewTracks) {
                     connectOptions.tracks = this.state.previewTracks;
                 }
        
         Video.connect(this.state.token, connectOptions).then(this.roomJoined, error => {
           alert('Could not connect to Twilio: ' + error.message);
         });
         }

         attachTracks(tracks, container) {
            tracks.forEach(track => {
              container.appendChild(track.attach());
            });
          }
          
          // Attach the Participant's Tracks to the DOM.
        attachParticipantTracks(participant, container, isLocal) {
            var tracks = this.getTracks(participant);
            console.log('attaching participant tracks'); 
            this.attachTracks(tracks, container, isLocal);
         }
         
        getTracks(participant) {
            return Array.from(participant.tracks.values()).filter(function (publication) {
               return publication.track;
            }).map(function (publication) {
               return publication.track;
            });
         }

        roomJoined(room) {
            // Called when a participant joins a room
            console.log("Joined as '" + this.state.identity + "'");
            this.setState({
              activeRoom: room,
              localMediaAvailable: true,
              hasJoinedRoom: true  // Removes ‘Join Room’ button and shows ‘Leave Room’
            });
            
          
            // Attach LocalParticipant's tracks to the DOM, if not already attached.
            var previewContainer = this.refs.localMedia;
            if (!previewContainer.querySelector('video')) {
              this.attachParticipantTracks(room.localParticipant, previewContainer);
            }
              // ... more event listeners

            // Attach the Tracks of the room's participants.
            room.participants.forEach(participant => {
                console.log("Already in Room: '" + participant.identity + "'");
                var previewContainer = this.refs.remoteMedia;
                this.attachParticipantTracks(participant, previewContainer);

                participant.tracks.forEach(publication => {
                  if (publication.isSubscribed) {
                    const track = publication.track;
                    document.getElementById('remote-media-div').appendChild(track.attach());
                  }
                });
              
                participant.on('trackSubscribed', track => {
                  document.getElementById('remote-media-div').appendChild(track.attach());
                });
            });
        
            // Participant joining room
            room.on('participantConnected', participant => {
                console.log("Joining: '" + participant.identity + "'");

                participant.tracks.forEach(publication => {
                  if (publication.isSubscribed) {
                    const track = publication.track;
                    document.getElementById('remote-media-div').appendChild(track.attach());
                  }
                });
              
                participant.on('trackSubscribed', track => {
                  document.getElementById('remote-media-div').appendChild(track.attach());

                  // delete the old video from when u disconnected
                  document.querySelector('#remote-media-div').style.display = 'block';
                  document.querySelector('#remote-media-div').onclick = ((e) => {
                    e.target.style.display = 'none';
                  })
                });
            });
        
            // Attach participant’s tracks to DOM when they add a track
            room.on('trackAdded', (track, participant) => {
                console.log(participant.identity + ' added track: ' + track.kind);
                var previewContainer = this.refs.remoteMedia;
                this.attachTracks([track], previewContainer);
            });
        
            // Detach participant’s track from DOM when they remove a track.
            room.on('trackRemoved', (track, participant) => {
                this.log(participant.identity + ' removed track: ' + track.kind);
                var previewContainer = this.refs.remoteMedia;
                this.detachTracks([track], previewContainer);
                document.getElementById('remote-media-div').style.display = 'none';
            });
        
            // Detach all participant’s track when they leave a room.
            room.on('participantDisconnected', participant => {
                console.log("Participant '" + participant.identity + "' left the room");
                this.detachParticipantTracks(participant);
                document.getElementById('remote-media-div').style.display = 'none';
            });

            room.on('disconnected', (room) => {
                if (this.state.previewTracks) {
                  this.state.previewTracks.forEach(track => {
                    track.stop(); 
                  });
                }
                this.detachParticipantTracks(room.localParticipant);
                room.participants.forEach(this.detachParticipantTracks);
                this.state.activeRoom = null;
                this.setState({ hasJoinedRoom: false, localMediaAvailable: false });
              });
        }

          // Leaving a room 
          leaveRoom(){
            this.state.activeRoom.disconnect();
            this.setState({ hasJoinedRoom: false, localMediaAvailable: false });
         }

         detachParticipantTracks(participant) {
            var tracks = this.getTracks(participant);
            this.detachTracks(tracks);
         }
         
         detachTracks(tracks) {
            for (let track of tracks) {
              const htmlElements = track.detach();
              for (let htmlElement of htmlElements) {
                 htmlElement.remove();
               }
            }
         }

         slide_transition = () => {
           const chat = document.querySelector('.chat_parent_container');
           this.slide = setTimeout(() => {
            chat.classList.remove('slide_out');
            chat.classList.add('slide_in'); 
           }, 1000); 
         }

        async componentDidMount() {
          const decoded_token = jwtDecode(localStorage.getItem('token'));
          
         await axios.get('/api/twilio', {
           params: {
             username: decoded_token.username
           }
         })
          .then(results => {
            const { identity, token } = results.data;
            console.log('twilio results', results); 
            this.setState({ identity, token });
          })
          .catch(ex => console.log('unable to get twilio key', ex)); 
  
          this.slide_transition(); 
        }
      

      render() {

        let chat_page = <div className="chat_content">
                          <h1>Chat</h1>
                          <img className = 'chat_items' src = {require('../images/doctor-icon.png')} alt = '' />
                        </div>; 
        /* 
         Controls showing of the local track
         Only show video track after user has joined a room else show nothing 
        */
        let showLocalTrack = this.state.localMediaAvailable ? (
          <div>
            <div ref="localMedia" id = 'video' className="chat_content" />
            <div id = 'remote-media-div' />
          </div> ) : chat_page;   
        /*
         Controls showing of ‘Join Room’ or ‘Leave Room’ button.  
         Hide 'Join Room' button if user has already joined a room otherwise 
         show `Leave Room` button.
        */
        let joinOrLeaveRoomButton = this.state.hasJoinedRoom ? (
        <input type = 'submit' className = 'chat_btn btn btn-primary' value="Leave Room" onClick={this.leaveRoom}  />) : (
        <input type = 'submit' className = 'chat_btn btn btn-primary' value="Join Room"  onClick={this.joinRoom} />
        );

        return (
            <div className="chat_parent_container slide_transition slide_out">
                <div className = 'chat'>
                    {showLocalTrack}
                    {!this.state.hasJoinedRoom && <input className = 'chat_items' type = 'text' placeHolder="Your Chat Key" onChange={this.handleRoomNameChange} 
                    errortext = {this.state.roomNameErr ? 'Room Name is required' : undefined} 
                    /> 
                    }
                    {joinOrLeaveRoomButton}  
                </div>
            </div>
        );
      }
}