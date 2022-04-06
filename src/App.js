import './App.css';
import React from 'react'

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

/*Pages */
import Home from './pages/Home'
import Cats from './pages/Cats'
import Dogs from './pages/Dogs'
import Faq from './pages/Faq'
import NotFound from './pages/NotFound'
/* Components*/
import Nav from './components/Nav'
import Footer from './components/Footer'
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoteles: []
    }
  }
  async request() {
    await axios("https://pruebagcd.herokuapp.com/hoteles")
      .then(res => {
        this.setState({
          hoteles: res.data
        }
        )
      }
      )
  }
  componentDidMount() {
    this.request();
    
  }
  render() {
    
    return (
      <div className="row">

        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path='/'>

              <Home />
            </Route>
           
              <Route path='/negocios/hoteles'>
                 {/* <Hoteles data={this.state.hoteles}/> */}
            </Route>
            <Route path='/cats'>
              <Cats />
            </Route>
            <Route path='/dogs'>
              <Dogs title="Nuestros Perros" />
            </Route>
            <Route path='/faq'>
              <Faq />
            </Route>
            
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
          <Footer />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
