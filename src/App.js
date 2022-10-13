import './App.css';
import React from 'react'
import Home from './componants/Welcome';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portifolio from './componants/Portifolio';
import Team from './componants/Team';
import Header from './componants/Header';
import Footer from './componants/Footer';
import About from './componants/About';
import Services from './componants/Services';
import Skills from './componants/Skills';
import Cotntact from './componants/Cotntact';
import Welcome from './componants/Welcome';


function App() {
  return (
    <Router>
       <Header/>
      <Switch>
  
        <Route exact path="/" component={Home}>
        <Welcome/>
        <Services/>
        <Team/>
        <Skills/>
        <Portifolio/>
        
        <About/>
        <Cotntact/>
        <Footer/>
        </Route>
        <Route exact path="/Portifolio" component={Portifolio}>
          <Portifolio/>
        </Route>
        <Route exact path="/Team" component={Team}>
          <Team/>
        </Route>
        <Route exact path="/Services" component={Services}>
          <Services/>
        </Route>
        <Route exact path="/Skills" component={Skills}>
          <Skills/>
        </Route>
        <Route exact path="/About" component={About}>
          <About/>
        </Route>
        <Route exact path="/Cotntact" component={Cotntact}>
          <Cotntact/>
        </Route>
    </Switch>
   

    </Router>
    
  );
}

export default App;
