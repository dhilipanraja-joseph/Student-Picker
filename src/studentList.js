const uuid = require('uuid');
import React from 'react'

import AddFrom from './addForm'
import StudentsShow from './studentsShow'

const StudentList= React.createClass({
  getInitialState(){
    return {
      students : []
    }
  },
  componentWillUpdate(){
    console.log("from will update");
  },
  componentDidUpdate(){
    console.log("from did update");
  },
  addStudent(name){
    //let arrn = names.split(',');
    // console.log("names",names);
    // names.forEach(name =>{
      var student = {name,id : uuid()};
      // console.log("from for loop");
      this.setState({ students : this.state.students.concat(student) });
    // });
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
