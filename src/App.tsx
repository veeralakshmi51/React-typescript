import React from 'react';
import './App.css';
import Container from './Container';
// import Sample from './components/Sample';
// import Person from './components/Person';
 import PersonList from './components/PersonList';
import LoggedIn from './States/LoggedIn';
import User from './States/User';
// //import Status from './components/Status';
// import Heading from './Heading';
// import Oscar from './Oscar';
// import Button from './components/Button';
// import { Container } from 'reactstrap';

function App() {
  // const personName={
  //   firstName:'type',
  //   lastName:'script'
  // }
  const namesList=[
    {
      first:'karthiga',
      last:'raj'
    },
    {
      first:'kausik',
      last:'raj',
    },
    {
      first:'raj',
      last:'rp'
    },
    {
      first:'gopi',
      last:'krishnan'
    }
  ]

  
  return (
    <div className="App">
      <PersonList names={namesList}/>
     <Container styles={{border:'1px solid black', padding:'1rem', fontWeight:'bolder'}}></Container>
     <LoggedIn/>
     <User name='kavi'/>
    </div>
  );
}

export default App;
