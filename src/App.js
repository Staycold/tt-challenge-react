import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {useState, useEffect, useRef, useCallback } from 'react'
import Header from './components/header';
import List from './pages/list';
import Details from './pages/details';
import './styling/style.css'


export default function App() {
  const [ pageNumber, setPageNumber] = useState(1);
  const [sites, setSites] = useState([]);
  const apiSites = `https://tracktik-challenge.staffr.com/sites`
  
  useEffect(()=>{
    axios.get(apiSites)
    .then(res => res.data)
    .then(data => setSites(data))
    .catch((e) => {
        console.log(`this ihs the {e}, `, e);
        // setError('my custom error');
      });
    
  }, [pageNumber]);

  return (
    <>
      <Router>
      <Header/>
        <Switch> 
          <Route exact path="/sites/:id" render={({match}) => (
              <Details details={sites.find(p => p.id === match.params.id)} />
            )} />
          <Route
          path='/' 
          render= {() => (
            <List sites={sites} /> 
          )}
          />
        </Switch>
      </Router>
    </>
  );
}
