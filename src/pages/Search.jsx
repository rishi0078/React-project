import React,{useState} from 'react'
import './Search.css'
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from '@material-ui/core';
import{ useHistory } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import {actionTypes} from "../reducer"

function Search({hideButtons=false}) {
    const[{},dispatch]=useStateValue();
 const [input,setInput]=useState("");
 const history=useHistory();

 const Search=(e)=>{
     e.preventDefault();

     console.log('You hit the search button',input)
     
     dispatch({
         type:actionTypes.SET_SEARCH_TERM,
         term:input
     })
     //doing something with input...

     history.push('/search')

 };



    return (
        <form className='search'>
            <div className='search_input'>
               <SearchIcon className="search_inputIcon" />

               <input value={input} onChange={e=>setInput(e.target.value)}/>
               <MicIcon />
               </div>

               {!hideButtons ?(
                <div className="search_button">
                      <Button type="submit" onClick={Search} variant="outlined">Google Search</Button>
                      <Button  variant="outlined">I'm feeling lucky</Button>
                 </div>

               ):(
                <div className="search_button">
                      <Button className="search_buttonHidden" type="submit" onClick={Search} variant="outlined">Google Search</Button>
                      <Button className="search_buttonHidden" variant="outlined">I'm feeling lucky</Button>
                 </div>
               )}
                 

            </form>
        );
    
}

export default Search;
