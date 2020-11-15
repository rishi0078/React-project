import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core";
import Search from './Search'


function Home() {
    return (
       
          <div className='home_body'>
               
           
           <div className="home_inputContainer">
               {/* <Search /> */}
             <Search  />
           </div>

          </div>

        
    )
}

export default Home;
