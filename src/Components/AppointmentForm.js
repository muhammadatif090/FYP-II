import React from 'react';
import './AppointmentForm.css'
import {Link} from 'react-router-dom';


function Appointmentform() {
  return (
  
    <div id="container" class="body5">
    
        <div id="body_header">
        <br/><br/><Link class="backbtn5" to="/diabetes">Back</Link>
                  <Link class="homebtn5" to="/home">MedTech</Link>
                <h1 class="apph1">Patient Appointment Form</h1>

        </div>
        <form action="index.html" method="post" class="form5">
      <fieldset class="fldset5">
        
        <label class="label5" for="name"> Patient Name</label>
        <input class="inp5" type="text" id="name" name="user_name"  required pattern="[a-zA-Z0-9]+"/>

        <label class="label5" for="mail">Email</label>
        <input class="inp5" type="email" id="mail" name="user_email"  required/>

        <label class="label5" for="tel">Contact No</label>
        <input class="inp5" type="tel" id="tel" name="user_num"/>
        
        <label class="label5" for="appointment_for"> Gender</label>
        <select class="slct5" id="appointment_for" name="appointment_for" required>
          <option value="Sex">Select Your Gender</option>
		   <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label class="label5" for="appointment_description">Symptoms</label>
        <textarea class="textarea5" id="appointment_description" name="appointment_description" ></textarea>
        <label class="label5" for="date">Date</label>
        <input class="inp5" type="date" name="date" value="" requir
        ed/>
     
        <label class="label5" for="appointment_for"> Time</label>
        <select class="slct5" id="appointment_for" name="appointment_for" required>
          <option value="time">Select Appointment Time</option>
		   <option value="ten">10:00 AM</option>
          <option value="one">1:00 PM</option>
          <option value="eight">8:00 PM</option>
      
        </select>
      
       
  </fieldset>
      <Link to="/patientdashboard"> <button class="bttn5" type="submit">Request For Appointment</button> </Link>
    </form>
    
       
    </div>



   
  );
}

export default Appointmentform;