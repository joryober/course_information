import React from "react";

const Header = (props) => {
  return <h2>{props.course}</h2>;
};

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      <strong>
        total of
        {" " +
          props.parts.map((part) => part.exercises).reduce((a, b) => a + b) +
          " "}
        exercises
      </strong>
    </p>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
