import {BrowserRouter, Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./components/Home"
import Main from "./components/Main"
import Footer from "./components/Footer"
import English from "./components/English"

import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      
      <Header/>

      <Switch>
        <Route exact path="/">
          
          <Home/>

          <Footer/>

        </Route>

        <Route path="/Blogs">
        
          <Main/>
          <Footer/>

        </Route>

        <Route path="/English">
          
          <English/>
          <Footer/>

        </Route>

      </Switch>

      {/* <Header/>

      <Slider/>
      
      

      <Main/>
      <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
