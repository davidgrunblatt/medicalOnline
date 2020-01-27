
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
    times: []
  }
 
  // DATE SELECTION
  onChange = async date => {
    this.setState({ date });
    const selectedYear = this.state.date.getFullYear(); 
    const selectedMonth = this.state.date.getMonth(); 
    const selectedDate = this.state.date.getDate(); 
    const selectedDay = this.state.date.getDay();
    this.setState({ selectedYear, selectedMonth, selectedDate, selectedDay });

    this.date_checker(selectedYear, selectedMonth, selectedDate); 
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
      console.log(appointments); 
      const times = appointments.data;
      this.setState({ times }, () => console.log('state times', this.state.times)); 
    })
    .catch(ex => console.log('Unable to retrieve appointments', ex)); 
  }

  // CREATE APPOINTMENT HANDLER 
  appointmentGenerator = async () => {
      await axios.post('/api/make_appointment', {
        selectedYear:this.state.selectedYear,
        selectedMonth:this.state.selectedMonth,
        selectedDate:this.state.selectedDate,
        selectedTime:this.state.selectedTime,
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
            {/* SUBMIT APPOINTMENT BUTTON  */}
            <button className = 'btn' onClick = {this.appointmentGenerator} >Select date</button>
            <div>
                <p>Available Times</p>
                <ul>
                    {this.state.times && this.state.times.map(item => {
                        return <li key = {this.state.times.indexOf(item)} onClick = {this.selectTime}
                        >
                        <span>{item}.00{item <= 5 ? 'pm' : 'am'}</span>
                        </li>
                    })}
                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default Appointments; 