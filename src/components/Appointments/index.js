// Write your code here
import {Component} from 'react'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Add Appointment</h1>
          <label for="title">Title</label>
          <input type="text" placeholder="Title" id="title" />
          <label for="date">Date</label>
          <input type="date" placeholder="dd/mm/yyyy" id="date" />
          <button type="button">Add</button>
          <hr />
          <div>
            <h1>Appointments</h1>
            <button type="button">starred</button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            alt="appointments"
          />
          <ul>
            <AppointmentItem />
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
