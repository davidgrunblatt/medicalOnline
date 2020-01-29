
import React, {Component} from 'react'
 
import SimpleReactCalendar from 'simple-react-calendar'
 
class Appointments2 extends Component {
  render () {
    return (
        <div>
            <SimpleReactCalendar activeMonth={new Date()} />
        </div>
    )
  }
}

export default Appointments2;  