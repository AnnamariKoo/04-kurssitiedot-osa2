const Course = (props) => {
  return (
    <>
      {props.courses.map((course) => (
        <div className="borderline" key={course.name}>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </>
  );
};

const Header = (props) => {
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

export default Course;
