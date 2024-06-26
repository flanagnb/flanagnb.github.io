import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

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

  return <div id="digital-clock" style={{"font-family": "monospaced", "color": "green"}}>{time}</div>
}

function JokeContainer() {
  const [joke, setJoke] = useState("loading a joke...");

  function updateJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
     .then(response => response.json())
     .then(response_json => setJoke(response_json.joke))
  }

  useEffect(
    () => {
      let interval = setInterval(updateJoke, 60000);
      return () => clearInterval(interval);
    },
    []
  );

  return <div id="joke-container">{joke}</div>
}

export default function JavascriptExamples() {
  return (
    <>
      <div id="clocks">
        <canvas id="analog-clock" width="150" height="150" style={{"background-color": "#999"}}></canvas>
        <DigitalClock/>
      </div>
      <JokeContainer/>
      <AgeGuesser/>
    </>
  )
}
