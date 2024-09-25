const Course = (props) => {
  return (
    <>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
    </>
  );
};

const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
};

const Content = (props) => {
  console.log("props in Content (toivottavasti vainn parts?)");
  console.log(props);

  return (
    <ul>
      {props.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </ul>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <li>
      {props.part.name} {props.part.exercises}
    </li>
  );
};

const Total = (props) => {
  console.log(props);
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
