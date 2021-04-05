import React from 'react';

export default function StudentCard({ id, name, course, email }) {
  return (
    <div>
      <ul>
        <li>
          <strong>Name: </strong>
          {name}
        </li>
        <li>
          <strong>Email: </strong>
          {email}
        </li>
        <li>
          <strong>Class: </strong>
          {course}
        </li>
      </ul>
    </div>
  );
}
