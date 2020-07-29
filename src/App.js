import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Container from "react-bootstrap/Container";
import { Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import axios from 'axios';


function App() {
  const [person, setperson] = useState({
    name: "",
    dog: "",
  });
  const [isloading, setisloading] = useState(false);
  const [items, setitems] = useState();

  // const [myvalue, setmyvalue] = useState("");

  function handleClick() {
    setperson({ name: "Daniel", dog: "Sora" });
    //   console.log(mycount);
    //  setmycount(mycount + 1);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setperson({ ...person, [name]: value });
    // setmyvalue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`submitting my value which is ${person.dog}`);
  }

  async function fetchData(){
    setisloading(true);
    console.log('fetching!')
    const result = await axios.get('https://api.rawg.io/api/games?ordering=-rating')
    console.log(result.data.results);
    setisloading(false);
    setitems(result.data.results);
  }

  let section;

  if(isloading) {
    section = <div>Loading data...</div>
  }
  else if (items) {
    section = <div>{items[0].name}</div>
  }
  else{
    section = <div>Our data will be here someday...</div>
  }

  return (
    <div className="App">
      <Header name="Daniel">I like React</Header>
      {/* <p>Counter: 0</p>
      <p>My name is {person.name} and my dog is {person.dog}</p>
      <button onClick={handleClick}>display my name!</button> */}
      <Form
        namevalue={person.name}
        dogname={person.dog}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {/* <button className='btn btn-success'>
        Success!
      </button> */}
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>

      <Container style={{border: 'solid'}}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>

      <div>
        <h1>This is our data!</h1>
        <button onClick={fetchData}>Press this to bring some data down!</button>
        {section}
      </div>
    </div>
  );
}

export default App;
