import { useState } from 'react'

const Headline = (props) =>{
  return(
    <h1>{props.heading_text[props.kind]}</h1>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.button_text[props.kind]}</button>
  )
}

const StatisticLine = (props) => {
  return(
    <> 
      <td>{props.text}</td><td>{props.value}</td>
    </>
  )
}

const Statistics = (props) => {
  if (props.hasData){
  return(
    <div>
      <Headline heading_text={props.heading_text} kind={props.kind}/>
      <table>
        <tbody>
        <tr><StatisticLine text="good" value ={props.value.good} /></tr>
        <tr><StatisticLine text="neutral" value ={props.value.neutral} /></tr>
        <tr><StatisticLine text="bad" value ={props.value.bad} /></tr>
        <tr><StatisticLine text="all" value ={props.value.all} /></tr>
        <tr><StatisticLine text="average" value ={props.value.average} /></tr>
        <tr><StatisticLine text="positive" value ={props.value.positive} /></tr>
        </tbody>
      </table>
    </div>
  );}else{
    return(
      <div>
      <p>No feedback given</p>
      </div>
    );
  } 
}


const App = () => {
  const [data, setData] = useState({"good": 0,
                                    "neutral": 0,
                                    "bad": 0,
                                    "all": 0,
                                    "average": 0,
                                    "positive": ""
                                  });

  const button_text = ["good", "neutral", "bad"];
  const heading_text = ["give feedback", "statistics"];

  const hasData = () => {
    const calData = {...data};
    const result = calData.good + calData.neutral + calData.bad;
    console.log(result);
    if (result === 0){
      return false;
    };
    return result;
  };


  const sumAll = (g, n, b) => {
    return g + n + b;
  };

  const calAverage = (g, n , b) => {
    const denominator = g + n + b;
    if (denominator === 0){
      return 0;
    }else{
      return (g - b) / denominator;
    };
  };

  const calPosPercentage = (g, n, b) => {
    const denominator = g + n + b;
    if (denominator === 0){
      return "0%";
    }else{
      return g * 100 / denominator + "%";
    };
  };

  const calculator = (g, n, b) => {
    const result = [].concat(sumAll(g, n, b), 
                             calAverage(g, n, b), 
                             calPosPercentage(g, n, b));
    
    return result;
  };


  const addGood = () => {
    const newData = {...data, good: data.good + 1};
    const temp = calculator(newData.good, newData.neutral, newData.bad);
    const nData = {...newData, all: temp[0], average: temp[1], positive:temp[2]};
    setData(nData);
    console.log("newdata", nData);
  };

  const addBad = () => {
    const newData = {...data, bad: data.bad + 1};
    const temp = calculator(newData.good, newData.neutral, newData.bad);
    const nData = {...newData, all: temp[0], average: temp[1], positive:temp[2]};
    setData(nData);
    console.log("newdata", nData);
  };

  const addNeutral = () => {
    const newData = {...data, neutral: data.neutral + 1};
    const temp = calculator(newData.good, newData.neutral, newData.bad);
    const nData = {...newData, all: temp[0], average: temp[1], positive:temp[2]};
    setData(nData);
    console.log("newdata", nData);
  };

  return (
    <div>
      <Headline heading_text={heading_text} kind={0}/>
        <Button button_text={button_text} kind={0} onClick={addGood}/>
        <Button button_text={button_text} kind={1} onClick={addNeutral}/>
        <Button button_text={button_text} kind={2} onClick={addBad}/>
      <Statistics heading_text={heading_text} kind={1} value={data} hasData={hasData()}/>
    </div>
  )
}

export default App;
