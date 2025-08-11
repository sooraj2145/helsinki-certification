import React from "react";
import Content from "./Content.jsx";

const Course = ({ courses }) => {
  return (
    <>
      <Content courses={courses} />
    </>
  );
};

export default Course;
