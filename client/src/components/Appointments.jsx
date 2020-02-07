
import React, { Component } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios'; 
import '../styles/appointments.css'; 
 
class Appointments extends Component {
  state = {
    date: new Date(),
    token: this.props.jwt_decode,
    selectedYear: '', 
    selectedMonth: '', 
    selectedDate: '', 
    selectedDay: '',
    selectedTime: undefined, 
    patient: '', 
    notes: '', 
    times: [],
    successful: false
  }
 
  // DATE SELECTION
  onChange = async date => {
    this.setState({ date });
    const selectedYear = this.state.date.getFullYear(); 
    const selectedMonth = this.state.date.getMonth(); 
    const selectedDate = this.state.date.getDate(); 
    const selectedDay = this.state.date.getDay();
    this.setState({ selectedYear, selectedMonth, selectedDate, selectedDay }, 
      () => {
        this.date_checker(selectedYear, selectedMonth, selectedDate);
      });
  }

  // TIME SELECTION 
  selectTime = (e) => {
      this.setState({ selectedTime: parseInt(e.target.textContent) }, () => console.log(this.state.selectedTime)); 
  }

  // RETRIEVE APPOINTMENTS 
  date_checker = async (year, month, date) => {
    await axios.get('/api/get_available_appointments', {
      params: {
        selectedYear: year,
        selectedMonth: month,
        selectedDate: date
      }
    })
    .then(appointments => {
      const times = appointments.data;
      this.setState({ times }, () => console.log('state times', this.state.times)); 
    })
    .catch(ex => console.log('Unable to retrieve appointments', ex)); 
  }

  // NOTE HANDLER 
  note_handler = (e) => {
    this.setState({ [e.target.name]: e.target.value }); 
  }

  // CREATE APPOINTMENT HANDLER 
  appointmentGenerator = async () => {
    if (this.state.selectedTime && this.state.notes){
        await axios.post('/api/make_appointment', {
          selectedYear:this.state.selectedYear,
          selectedMonth:this.state.selectedMonth,
          selectedDate:this.state.selectedDate,
          selectedTime:this.state.selectedTime,
          patient:this.state.token().username,
          email:this.state.token().email,
          notes:this.state.notes
        })
        .then(appointment => {
          this.setState({ successful: true });
          setTimeout(() => this.setState({ 
            successful: false,
            notes: ''
           }), 2500);  
        })
        .catch(ex => console.log('Unable to make axios req', ex)); 
      } else {
        alert('Please select an available time and state a reason for your visit.'); 
      }
  }

  componentDidMount(){
    const dashboard = document.querySelector('#appointment_container');
    this.slide = setTimeout(() => {
        dashboard.classList.remove('slide_out_left');
        dashboard.classList.add('slide_in_right'); 
    }, 1000);
  }

  componentWillUnmount(){
      clearTimeout(this.slide); 
  }
 
  render() {
    return (
      <div id = 'appointment_container' className = 'global_size slide_transition slide_out_left'>
        {/* CALENDAR COMPONENT */}
        <Calendar className = 'calendar'
          onChange={this.onChange}
          value={this.state.date}
        />
        {/* DATE SELECTED DISPLAY */}
        <div className = 'date_container'>
          <h4>Available times</h4>
            <div className = 'date_selected'>
              <p>Year: {this.state.selectedYear}</p>
              <p>Month: {this.state.selectedMonth}</p>
              <p>Date: {this.state.selectedDate}</p>
              <p>Day: {this.state.selectedDay}</p>
              <p>Time: {this.state.selectedTime}</p>
            </div>
            {/* AVAILABLE TIMES BELOW  */}
            <div className = 'times'>
                <ul>
                    {this.state.times && this.state.times.map(item => {
                        return <li key = {this.state.times.indexOf(item)} onClick = {this.selectTime}
                        >
                        <span className = 'badge'>{item}.00{item <= 6 || item === 12 ? 'pm' : 'am'}</span>
                        </li>
                    })}
                </ul>
            </div>
            {this.state.selectedTime && 
              <div className = 'reason_for_visit'>
                <h6>What is the reason for your consultation?</h6>
                <textarea name = "notes" onChange = {this.note_handler} value = {this.state.notes}
                          placeholder = 'State the reason for your visit...'
                ></textarea>
              </div>
            }
          <button className = 'btn btn-primary btn-block' onClick = {this.appointmentGenerator} >
            {this.state.successful ? "Appointment made!" : "Confirm Appointment"}
          </button>
        </div>
      </div>
    );
  }
}

export default Appointments; 