import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/App1" component={App1} />
        <Route exact path="/App2" component={App2} />  
        <Route exact path="/App" component={App}/>
      </Switch>
      </BrowserRouter>,
  rootElement
);
    