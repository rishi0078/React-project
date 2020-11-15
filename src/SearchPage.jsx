import React from 'react'
import './SearchPage.css'
import {useStateValue} from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response"
import { Link } from 'react-router-dom';
import Search from "./pages/Search";
import "./pages/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";




function SearchPage() {
    const [{term},dispatch]=useStateValue();
  // const{ data }=useGoogleSearch(term);
    //LIVE API CALL
    const {data}=useGoogleSearch(term);

    // Mock API CALL
    // const data = Respone;
    


   console.log(data)
    return (
     
        <div className='SearchPage'>
            <div className='searchPage_header'>
               

                <div className="searchPage_headerBody">
                    <Search hideButtons />


                    <div className="searchPage_option">
                     
                    </div>

                </div>

            </div>

            {term && (

            <div className="searchPage_results">
                <p className="searchPage_resultCount">
                     About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                </p>


                 { data?.items.map(item=>(
                     <div className='searchPage_result'>
                     <a className="searchPage_resultLink" href={item.link}>
                     {item.pagemap?.cse_image?.
                     length > 0 && item.pagemap?.cse_image[0]?.src && (
                         <img 
                         className="searchPage_resultImage" src={
                              item.pagemap?.cse_image?.length > 0 && 
                              item.pagemap?.cse_image[0]?.src
                         }
                         alt=""
                         
                          />
                     )}
                     {item.displayLink}
                     </a>
                      <a className="searchPage_resultTitle" href={item.link}>
                           <h2>{item.title}</h2>
                      </a>  
                      <p className="searchPage_resultSnippet">{item.snippet}</p>   

                     </div>

                 ))}

            </div>
            )}
        </div>
    )
}

export default SearchPage
