const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}


const Part = (props) => {
  return (
    <p>
      {props.part["name"]}
      {props.part["exercises"]}
    </p>
  )
}


const Content = (props) => {
  const parts1 = props.course.parts[0];
  const parts2 = props.course.parts[1];
  const parts3 = props.course.parts[2];
  return (
    <div>
      <Part part={parts1} />
      <Part part={parts2} />
      <Part part={parts3} />
    </div>
  )
}


const Total = (props)=>{
  const total = props.course.parts[0].exercises + 
                props.course.parts[1].exercises +
                props.course.parts[2].exercises;
  return (
    <p>Number of exercises {total}</p>
  )
}


const App = () => {
  // const-definitions
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: 'Fundamentals of React ',
        exercises: 10},
    
      {
        name: 'Using props to pass data ',
        exercises: 7},
    
      {
        name: 'State of a component ',
        exercises: 14}
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App;