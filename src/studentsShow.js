import React from 'react'


const StudentsShow = React.createClass({
  render(){
    let studentNames = this.props.students.map(student=>{
      return (
        <li key={student.id}>
          {student.name}
          <button onClick={this.delete}>-</button>
          <button onClick={this.modify}>?</button>
        </li>
      );
    });
    return (
      <ol>
        {studentNames}
      </ol>
    );
  }
});

export default StudentsShow;
