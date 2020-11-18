import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core";
import Search from './Search'


function Home() {
    return (
       <div className='home'>
             
          <div className='home_header'>
               <div className='home_headerLeft'>
                  <Link to='/about'>About</Link>   {/* Link*/}
                  <Link to='/Store'>Store</Link>   {/* Link*/}
               </div>

               <div className='home_headerRight'>
                     
                      <Link to='/Gmail'>Gmail</Link> 
                      <Link to='/Images'>Images</Link> 
                      <AppsIcon />
                      <Avatar />

               </div>
          </div>   
          <div className='home_body'>
               
           <img src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
           <div className="home_inputContainer">
               {/* <Search /> */}
             <Search  />
           </div>

          </div>

        
    )
}

export default Home;
