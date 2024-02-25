import React from 'react';
import './Table.css';
const ElearningTable = () => {
  const tableData = [
    ['Course', 'Instructor', 'Duration', 'Level', 'Enrollment'],
    ['React Basics', 'John Doe', '4 weeks', 'Beginner', '500'],
    ['JavaScript Fundamentals', 'Jane Smith', '6 weeks', 'Intermediate', '700'],
    ['Data Science Essentials', 'Sam Johnson', '8 weeks', 'Advanced', '300'],
    ['UX Design Principles', 'Emily Brown', '5 weeks', 'Intermediate', '450'],
  ];

  const renderTableRows = () => {
    return tableData.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <td key={cellIndex}>{cell}</td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="elearning-table-container">
      <h2>E-learning Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Instructor</th>
            <th>Duration</th>
            <th>Level</th>
            <th>Enrollment</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default ElearningTable;
