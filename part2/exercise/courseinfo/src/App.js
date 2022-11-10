const Header = (props) => {return <h1>{props.course.name}</h1>}

const Total = (props) => {
  const parts = props.course.parts;
  const total = parts.map((element) => element.exercises).reduce((p, c) => p + c);;
  return (<p><strong>total of {total} exercises</strong></p>)
}

const Part = (props) => {
  const parts = props.course.parts;
  return parts.map((element, index) => <p key={index}>{element.name} {element.exercises}</p>)
}

const Content = (props) => {return <Part course={props.course}/>}

const Course = (props) => {
  return(
    <div>
      <Header course={props.course}/>
      <Content course={props.course}/>
      <Total course={props.course}/>
    </div>
  )
}

const App = () => {
  const course = [{
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },

  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }

];

  return (
  <div>
    {course.map((c) => <Course key={c.id} course={c}/>)}
  </div>)
}

export default App
