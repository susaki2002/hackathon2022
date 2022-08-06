import axios from './axios';


let comment;

SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  comment = event.results[0][0].transcript;
};

// function startRecord() {
  recognition.start();
  console.log('hello');
// }
const h1 = document.getElementsByName;
const h2 = document.createElement("h2");
h2.textContent = comment;
// document.body.appendChild(h1);

const url = "./notebook7c3c0a745c.ipynb";
axios
  .post(url, {
     comment
  })
  .then(function (response) {
    console.log(response);
    const h3 = document.createElement("h3");
    h3.textContent = response;
  })
  .catch(function (error) {
    console.log(error);
  });