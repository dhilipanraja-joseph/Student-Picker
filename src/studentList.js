import React from 'react'

import AddFrom from './addForm'
import StudentsShow from './studentsShow'

const StudentList= React.createClass({
  getInitialState(){
    return {
      students : []
    }
  },
  addStudent(){
    console.log("add student");
  },
  render(){
    return (
      <div>
        <AddFrom addStudent={this.addStudent}/>
        <StudentsShow students={this.state.students}/>
      </div>
    );
  }
});

export default StudentList;
