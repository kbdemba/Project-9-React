import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Four0Four from "./components/Four0Four"
import Container from "./components/Container";


const App = ()=> (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" render={()=> <Container tag="trump" />} />
      <Route path="/soccer" render={()=> <Container tag="soccer" />} />
      <Route path="/cats" render={()=> <Container tag="cats" />} />
      <Route path="/dogs" render={()=> <Container tag="dogs" />} />
      <Route exact path="/search" render={(props)=> <Container
          {...props} tag="search" displaySearchForm={true}/>} />
      <Route path="/search/:query" render={(props)=> <Container
          {...props} tag={props.match.params.query} displaySearchForm={true}/>} />
    </div>

  </BrowserRouter>
)

export default App;
