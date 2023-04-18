import React from 'react';

const AddReservation = () => (
  <div>
    <h2>Reserve</h2>
    <form>
      <label htmlFor="doctor">
        Doctor:
        <select name="doctor" id="doctor">
          <option value="1">Dr. John Doe</option>
          <option value="2">Dr. Jane Doe</option>
        </select>
      </label>
      <label htmlFor="date">
        Date:
        <input type="date" name="date" id="date" />
      </label>
      <label htmlFor="city">
        City:
        <input type="text" name="city" id="city" />
      </label>
      <button type="submit">Reserve</button>
    </form>
  </div>
);

export default AddReservation;
