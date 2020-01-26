
import React, { Component } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios'; 
 
class Appointments extends Component {
  state = {
    date: new Date(),
    selectedYear: '', 
    selectedMonth: '', 
    selectedDate: '', 
    selectedDay: '',
    selectedTime: undefined, //populate array with taken dates 
    patient: '',
    notes: '', 
    times: [1,2,3,4,5,6,7,8]
  }
 
  // DATE SELECTION
  onChange = async date => {
    this.setState({ date });
    const selectedYear = this.state.date.getFullYear(); 
    const selectedMonth = this.state.date.getMonth(); 
    const selectedDate = this.state.date.getDate(); 
    const selectedDay = this.state.date.getDay();
    this.setState({ selectedYear, selectedMonth, selectedDate, selectedDay });

    this.date_checker(selectedYear, selectedMonth); 
  }

  // TIME SELECTION 
  selectTime = (e) => {
      this.setState({ selectedTime: parseInt(e.target.textContent) }, () => console.log(this.state.selectedTime)); 
  }

  date_checker = async (year, month) => {
    await axios.get('/api/get_appointments', {
      params: {
        selectedYear: year,
        selectedMonth: month
      }
    })
    .then(appointments => {
      // if date && time match, then remove time from state times. 
      const dummy = this.state.times;
      const count = 8; 

      for(let i = 0; i < appointments.data.appointments.length; i++){
        if (appointments.data.appointments[i].date === this.state.selectedDate){
          console.log('We have matching dates!'); 
        }
      }
    })
    .catch(ex => console.log('Unable to retrieve appointments', ex)); 
  }

  // CREATE APPOINTMENT HANDLER 
  appointmentGenerator = async () => {
      await axios.post('/api/make_appointment', {
        selectedYear:2020,
        selectedMonth:1,
        selectedDate:1,
        selectedTime:4,
        patient:this.state.patient,
        notes:this.state.notes
      })
      .then(appointment => {
        console.log('Successfully made an appointment!', appointment); 
      })
      .catch(ex => console.log('Unable to make axios req', ex)); 
  }
 
  render() {

    const styles = {
        display: "flex"
    }

    return (
      <div style = {styles}>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        <div className = 'appointments'>
            <p>Year: {this.state.selectedYear}</p>
            <p>Month: {this.state.selectedMonth}</p>
            <p>Date: {this.state.selectedDate}</p>
            <p>Day: {this.state.selectedDay}</p>
            <p>Time: {this.state.selectedTime}</p>
            <button className = 'btn' onClick = {this.appointmentGenerator} >Select date</button>
            <div>
                <p>Available Times</p>
                <ul>
                    {this.state.times && this.state.times.map(item => {
                        return <li key = {this.state.times.indexOf(item)} onClick = {this.selectTime}
                        >{item}</li>
                    })}
                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default Appointments; 