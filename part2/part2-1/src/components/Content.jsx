import React from 'react';
import Header from './Header';

const Content = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header name={course.name} />

          <ul>
            {course.parts.map((part) => (
              <li key={part.id}>
                {part.name} — {part.exercises} exercises
              </li>
            ))}
          </ul>

          <p>
            <strong>
              Total: {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
            </strong>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Content;
