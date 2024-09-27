import "./App.css";

const Course = (props) => {
  console.log("props", props);

  return (
    <>
      {props.courses.map((course) => (
        <>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
          <div id="borderline"></div>
        </>
      ))}
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
  const totalExcercises = props.parts.reduce(
    (summa, part) => summa + part.exercises,
    0
  );

  return (
    <>
      <p>Total of exercises {totalExcercises}</p>
    </>
  );
};

const App = () => {
  const courses = [
    {
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
    {
      name: "Anskun sirkuskurssi",
      id: 3,
      parts: [
        {
          name: "Käsinseisonta",
          exercises: 2,
          id: 1,
        },
        {
          name: "Jongleeraus",
          exercises: 1,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Course courses={courses} />
    </div>
  );
};

export default App;
