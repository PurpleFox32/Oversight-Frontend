import {React, useState} from 'react';
import NavBar3 from '../components/NavBar3';
import List from '../components/List';
import Search from '../components/search';
import NavBar1 from '../components/NavBar1';



function SearchResults() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div>
    
    <NavBar1/>
    <div className="main">
      <h1>List of Video Games</h1>
      <br/>
      <div className="search">
    <div>
      <List/>
    </div>

  
    </div>
    </div>
    </div>
    
  )
}

export default SearchResults
