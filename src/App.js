
import axios from 'axios';
import {useState, useEffect } from 'react'
import List from './pages/list';



const apiSites ='https://tracktik-challenge.staffr.com/sites'


export default function App() {

  const [sites, setSites] = useState([]);
  
  useEffect(()=>{
    axios.get(apiSites)
    .then(function (response) {
      setSites(response.data)
    })
  },[])

  return (
    
    <div>
      <List sites={sites}/>
    </div>

  );
}
