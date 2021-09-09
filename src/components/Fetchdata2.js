import React,{useState} from 'react';
import Image from './image.js';
export const Fetchdata2 = () => {
    const [Imageurl,setImageurl]=useState("");
    const [display,setDisplay]=useState("none");
    const fetchWeather = async () => {
        const input = document.querySelector('.input');
        const h1 = document.querySelector('#hd1');

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then((res) => {
                h1.innerText = "Enter City Name :-";
                return res.json();
            })
            .then((data) => {
                const span1 = document.querySelector('#span1');
                const span2 = document.querySelector('#span2');
                const span3 = document.querySelector('#span3');
                const span4 = document.querySelector('#span4');
                const span5 = document.querySelector('#span5');
                const span6 = document.querySelector('#span6');
                let k =data.weather[0].main;
                if(k==="Clear")
                {
                  k=data.weather[0].description;
                }
                const promise =fetch(`https://api.pexels.com/v1/search?query=${k}`,{
                headers: {
                Authorization: process.env.REACT_APP_IMAGE_API_KEY,
                }
                })
                promise.then(resp => {
                return resp.json();
                })
                .then(data => {
                console.log(data)
                if(k==="clear sky")
                {setDisplay("inline");
                setImageurl(data.photos[1].src.medium);
                }
                else{
                    setDisplay("inline");
                setImageurl(data.photos[2].src.medium);
                }
                })
                .catch(err=>{
                console.log(err);
                }) 
                span1.innerHTML = `Weather: ${data.weather[0].description}`;
                span2.innerHTML = `Temperature: &nbsp Avg: ${((data.main.temp)-273).toPrecision(4)}\xB0C`;
                span3.innerHTML= `&nbsp Max: ${(data.main.temp_max - 273).toPrecision(4)}\xB0C`;
                span4.innerHTML=`&nbsp Min: ${(data.main.temp_min - 273).toPrecision(4)}\xB0C`;
                span5.innerHTML = `Coordinates: &nbsp Long: ${(data.coord.lon).toPrecision(4)}`
                span6.innerHTML = `&nbsp Lat: ${(data.coord.lat).toPrecision(4)}`;
            })
            .catch((e) => {

                h1.innerText = "Error !!";
                h1.style.color = 'red';
            })
    }
    return (
        <>      
      <div>
      <h1 id="hd1">Enter City Name :-</h1> 
      <input className="input"></input> 
      <button className="button" onClick={fetchWeather}>Search</button>
      </div>
      <br/>
      <br/>
      <div id="imagetext">
      <Image Imageurl={Imageurl} Display={display} />
      <div className="textimage">
      <h4 id="hd4"><span id="span1"></span></h4>
      <ul id="listt"><li id="span2"></li><li id="span3"></li><li id="span4"></li></ul>
      <br/>
      <ul id="list1"><li id="span5"></li><li id="span6"></li></ul>
      </div>
      </div>
        </>
    )
}