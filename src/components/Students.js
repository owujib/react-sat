import React from 'react';
import { Description } from './Description';

export function Students(props) {
  console.log(props.student);

  let { student } = props;

  const studentList = student.map(function (item) {
    return (
      <div style={cardStyle}>
        <h4>
          student name: {item.firstname} {item.lastname}
        </h4>
        <p>student occupation: {item.occupation}</p>
      </div>
    );
  });

  return (
    <div className="students">
      <h1>{props.classTitle}</h1>

      <div style={{ display: 'flex' }}>{studentList}</div>
    </div>
  );
}

let cardStyle = {
  margin: '10px',
  border: '1px solid black',
  borderRadius: '10px',
  padding: '10px',
  boxShadow: '2px 2px 10px #ccc',
};
