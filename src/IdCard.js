import React from 'react';


function IdCard(props) {
  let year = props.birth.getFullYear()
  let day = props.birth.getDate()
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let dayWord = weekday[props.birth.getDay()];

  let monthNames = new Array(12);
  monthNames[0] = "January";
  monthNames[1] = "February";
  monthNames[2] = "March";
  monthNames[3] = "April";
  monthNames[4] = "May";
  monthNames[5] = "June";
  monthNames[6] = "July";
  monthNames[7] = "August";
  monthNames[8] = "September";
  monthNames[9] = "October";
  monthNames[10] = "November";
  monthNames[11] = "December";

  let monthWord = monthNames[props.birth.getMonth()];

  return (
    <div className='IdCard'>
      <img src={props.picture} alt='Student portrait'></img>
      <p><strong>Last name:</strong> {props.lastName}</p>
      <p><strong>First name:</strong> {props.firstName}</p>
      <p><strong>Old style gender: </strong>{props.gender}</p>
      <p><strong>Height: </strong>{props.height}</p>
      <p><strong>Date of birth: </strong>{dayWord}, {day}th of {monthWord} {year}</p>
    </div>
  );
}
export default IdCard;