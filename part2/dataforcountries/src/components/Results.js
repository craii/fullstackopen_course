import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';


const Hint = ({proper}) =>{
    const hint = proper ? '' : 'Too many matches, specify another filter';
    return (
        <div><p>{hint}</p></div>
    );
};



const Many = ({result, proper, num, showdetail}) =>{
    const res = proper && num !==1 ? result : [];
    return (
        <div>
        {res.map(
                                                                   // why have to bond function this way or going wrong??? 
            (r, i) => <p key={i}>{r.name.common} <button onClick={()=>showdetail(i)}>show</button></p>
            
            )}
        </div>
    );

};


const Weather = ({capital, weatherApi}) =>{
    const weatherUrl  = 'https://api.openweathermap.org/data/2.5/weather?q=' + capital + '&ApiKey=' + weatherApi;
    const [weatherDetail, setWeather] = useState({});

    const weatherHook = () =>{
            axios.get(weatherUrl).then(
                (response) =>{
                    const weather = response;
                    const detail = {wind: weather.data.wind.speed,
                                    temperature: weather.data.main.temp - 273,
                                    pic:  'http://openweathermap.org/img/wn/' + weather.data.weather[0].icon + '@2x.png'};
                    console.log("细节",detail);
                    setWeather(detail);
                }
            );
    };
    useEffect(weatherHook, []);
    return(
        <div>
            <p>temperature {weatherDetail.temperature} Celcius </p>
            <img src={weatherDetail.pic}/>
            <p>wind {weatherDetail.wind} m/s</p>
        </div>
    )
};


const Single = ({result, num, weatherApi}) =>{
    if (num === 1){
        const name = result[0].name.common;
        const lang = result[0].languages;
        const flag = result[0].flags.png;
        const capital = result[0].capital;
        const area = result[0].area;
        return (

            <div key={1}>
                <h1>{name}</h1>
                <p>capital {capital.map(c=>c)}</p>
                <p>area {area}</p>
                <h2>languages:</h2>
                <ul>
                {
                
                    Object.keys(lang).map(

                        (k, i) => <li key={i}>
                                        {lang[k]}
                                </li>
                        )
                
                }
                </ul>

                <div key={2}>
                    <img src={flag}/>
                </div>

                <h1>Weather in {capital}</h1>
                <Weather capital={capital} weatherApi={weatherApi}/>

            </div>

        );
    }else{

        return(
            <div></div>
        )
    }

};


const Results = (props) => {
    const {result, showdetail, weatherApi} = props;
    const resultNum = result.length;
    const isProper = resultNum < 10 && resultNum > 0;

    console.log('Result组件', result);

    return (
        <div>
            <Hint proper={isProper}/>
            <Many result={result} proper={isProper} num={resultNum} showdetail={showdetail}/>
            <Single result={result}  num={resultNum} weatherApi={weatherApi}/>
        </div>
    );
};

export default Results;
