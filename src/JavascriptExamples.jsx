import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import './JavascriptExamples.css';

const timeFormatter = new Intl.DateTimeFormat("en-US", {"timeStyle": "short"});

function AgeGuesser() {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);

  function guessAge(name) {
    fetch(`https://api.agify.io/?name=${name}`)
      .then(response => response.json())
      .then(result => setAge(result.age));
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    guessAge(name);
  }

  return (
    <>
      <input type="text" id="name" onChange={handleNameChange}/>
      <Button variant="primary" size="lg" onClick={handleSubmit} disabled={!Boolean(name)}>
        Guess Your Age
      </Button>
      <span id="age-guess">{age !== null ? `We guess your age to be ${age}` : ""}</span>
    </>
  )
}

function DigitalClock() {
  const [time, setTime] = useState(timeFormatter.format(new Date()));

  useEffect(
    () => {
      let interval = setInterval(() => setTime(timeFormatter.format(new Date())), 60000);
      return () => clearInterval(interval);
    },
    []
  );

  return <div className="digital-clock">{time}</div>
}


function JokeContainer() {
  const [joke, setJoke] = useState("loading...");

  function updateJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
     .then(response => response.json())
     .then(response_json => setJoke(response_json.joke))
  }

  useEffect(
    () => {
      updateJoke();
      let interval = setInterval(updateJoke, 60000);
      return () => clearInterval(interval);
    },
    []
  );

  return <div id="joke-container">Random joke from jokeapi.dev: {joke}</div>
}


function RandomDogPicture() {
  const [url, setUrl] = useState(null);

  useEffect(
    () => {
      fetch("https://random.dog/woof.json")
        .then(response => response.json())
        .then(data => setUrl(data.url))

      return () => setUrl(null);
    },
    []
  );

  if (url) {
    return (
      <>
        <div className="random-dog-picture">
          <div>Here &apos;s a random dog picture from dog.random</div>
          <img id="dog-picture" width="350" height="350" src={url} alt={"A random picture of a dog"}/>
        </div>
      </>
    );
  } else {
    return <div>Loading dog picture</div>;
  }
}


export default function JavascriptExamples() {
  return (
    <>
      <div className="centered" id="js-topbar">
        <div id="clocks">
          <canvas id="analog-clock" width="350" height="350"></canvas>
          <DigitalClock/>
        </div>
        <RandomDogPicture/>
      </div>
      <JokeContainer/>
      <AgeGuesser/>
      <aside>Please note: The content contained here was generated by external sites and is not my work.</aside>
    </>
  )
}
