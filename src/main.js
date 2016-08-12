const React = require('react');
const ReactDOM = require('react-dom');

import StudentList from './studentList'

ReactDOM.render(
  <div>
    <h1>Student Picker</h1>
    <StudentList/>
  </div>,
  document.getElementById('root')
);
