import React from 'react';
import StudentCard from './StudentCard';

class Student extends React.Component {
  render() {
    const { elements } = this.props;
    const studentList = elements.map((item) => {
      console.log('Student: ', item);
      return <StudentCard key={item.id} {...item} />;
    });

    return <div className="info">{studentList}</div>;
  }
}

export default Student;
