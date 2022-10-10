import React, {useState}from 'react'
import axios from 'axios';

function News() {

const [news , setNews] =useState([])

    const Fetchnews = () => {
     axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=5a6f92769451461ebffa376cd16ca032")
    .then((response) => {
     console.log(response);
     setNews(response.data.articles)
          });
    }
  return (
    <div>
    <div>
        <button  type="button" className ="btn btn-primary btn-lg" onClick={Fetchnews}>Large button </button>
    </div>

    {
    news.map((value)=>{
     return (
        <>
        <img src = {value.urlToImage}></img>
        <h1>{value.title}</h1>
        <p>{value.description}</p>
        <a href= "#">{value.url}</a>
        </>
      ) })
    }
        
    </div>
  )
}

export default News