// import React from 'react';
// import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const appId = '62747048-d8dc-42d6-9058-edb09bdc05ff';
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

// const Dictaphone = () => {

//   const fetchWeather = async () => {
//     const input = document.querySelector('.input');
//     const h1 = document.querySelector('#btc');
//     console.log(transcript);
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${transcript}&appid=51060af077c6188bf71470fe92fb7d5d`)
//         .then((res) => {
//             h1.innerText = "Enter the City name :-";
//             return res.json();
//         })
//         .then((data) => {
//             const span1 = document.querySelector('#span1');
//             const span2 = document.querySelector('#span2');
//             const span3 = document.querySelector('#span3');

//             span1.innerHTML = `${data.weather[0].description}`;
//             span2.innerHTML = `Avg: ${data.main.temp} Max: ${data.main.temp_max} Min: ${data.main.temp_min}`;
//             span3.innerHTML = `Longitude: ${data.coord.lon}   Latitude: ${data.coord.lat}`;
//         })
//         .catch((e) => {

//             h1.innerText = "Error !!";
//             h1.style.color = 'red';
//         })
// }

//   const {
//     transcript,
//     listening,
//     browserSupportsSpeechRecognition
//   } = useSpeechRecognition();
//   const startListening = () => SpeechRecognition.startListening({ continuous: true });

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   return (
//     <div>
//       <p>Microphone: {listening ? 'on' : 'off'}</p>
//       <button
//         onTouchStart={startListening}
//         onMouseDown={startListening}
//         onTouchEnd={SpeechRecognition.stopListening}
//         onMouseUp={SpeechRecognition.stopListening}
//       >Hold to talk</button>
//       <p>{transcript}</p>

//       <h1 id="btc">Enter the City name :-</h1>
//             <input className="input"></input>
//             <button onClick={fetchWeather}>get</button>

//             <h2 id="btc">Weather : <span id="span1"></span></h2>
//             <h2 id="btc">Temperature : <span id="span2"></span></h2>
//             <h2 id="btc">Coordinates : <span id="span3"></span></h2>
//     </div>
//   );
// };
// export default Dictaphone;
