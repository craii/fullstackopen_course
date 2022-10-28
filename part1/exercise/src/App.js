import { useState } from 'react'

const App = () => {
  const [value, OK] = useState(10)

  const setToValue = (newValue) => () => {
    console.log('value now', newValue)  // print the new value to console
    OK(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}



// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }



// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>
//     </div>
//   )
// }


// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () => {
//     const newClicks = {
//       left: clicks.left + 1,
//       right: clicks.right
//     }
//     setClicks(newClicks)
//   }

//   const handleRightClick = () => {
//     const newClicks = {
//       ...clicks,  //阴间写法？？？？
//       right: clicks.right + 1
//     }
//     setClicks(newClicks)
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }



// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// };


// const Button = (props) => {
//   return (
//     <button onClick={props.onClick}>
//       {props.text}
//     </button>
//   )
// };

// const App = () => {
//   const [ counter, setCounter ] = useState(0)
//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)
  

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button
//         onClick={increaseByOne}
//         text='plus'
//       />
//       <Button
//         onClick={setToZero}
//         text='zero'
//       />
//       <Button
//         onClick={decreaseByOne}
//         text='minus'
//       />
//     </div>
//   )
// };
// const App = (props) => {
//   const [ counter, setCounter ] = useState(0);
//   const increaseByOne = () => {
//     setCounter(counter + 1);
//     console.log("clicked");
//   };

//   const setToZero = () => {
//     setCounter(0);
//     console.log("refreshed");
//   }; 

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={increaseByOne}>plus</button>
//       <button onClick={setToZero}>zero</button>
//     </div>
//   )
// }



// const App = (props) => {
//   const [ count, setCounter ] = useState(0);

//   setTimeout(
//     () => setCounter(count + 1),
//     1000
//   )

//   console.log('rendering...', count);
//   return (
//     <div>{count}</div>
//   )
// }

export default App

// const Hello = ({name, age}) => {
//   // const {name, age} = props;
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear();
//     return yearNow - age;
//   }

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Jerry';
//   const age = 12;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// const App = (props) => {
//   const {counter} = props
//   return (
//     <div>{counter}</div>
//   )
// }


// export default App;
