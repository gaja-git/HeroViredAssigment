import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import React,{useState,useEffect} from 'react';
// import MovieLandingPage from './components/MovieLanding';

function App() {
  const [tamil_Movies, setTamilMovies] =useState(
  [
  {
      "Title": "ponniyin selvan",      
      "Poster": "https://www.siasat.com/wp-content/uploads/2022/10/Ponniyin-Selvan-I.jpg"
  },
  {
    "Title": "thunivu",      
    "Poster": "https://pbs.twimg.com/media/FiqqzUpacAIPDQV?format=jpg&name=medium"
  },
  {
    "Title": "Vaarisu",      
    "Poster": "https://static.toiimg.com/thumb/msid-95875669,imgsize-1455385,width-800,height-600,resizemode-75/95875669.jpg"
  }, 
  {
    "Title": "naai sekar returns",      
    "Poster": "https://assetscdn1.paytm.com/images/cinema/NaaiSekhar-min-6f711980-752b-11ed-b73d-dd421bb210f9.jpg"
  },
 
  {
      "Title": "Valimai",     
      "Poster": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2xr9qkJIPaiIYB8o4yQytx_5oBQJzUGUb7_R-gKq7lwpNmR7Z"
  }]);

  const [hindi_Movies, setHindiMovies] =useState(
    [{   "Title": "HIT:The first Case",      
        "Poster":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_k_6XjZe2QxMVtIslXrAamfoaHaW4jTuUF_EO9Soid6mGbAq-"
    },
    {
        "Title": "Bachchhan Pandey",      
        "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9cOvUisth8cXhqlt1eXvlF-NHWOCwk-5lupES23UpC-fEUI3"
    },
    {
      "Title": "Do baaraa",      
      "Poster": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR6yYmTRDuV0Yu688BX3qPoi5JcnoTAlg2a-ItuAJQeopBTSNvv"
    },
    {
      "Title": "Runway-34",      
      "Poster": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtM6x5PUaf_V36c-dy8yD2cBk4YplgQNrIiPSkajmswQw4_kLK"
    },
    {
      "Title": "Pathaan",      
      "Poster": "https://filmfare.wwmindia.com/content/2022/dec/pathaan41669878722.jpg"
    },
    {
      "Title": "topgun Maverick",      
      "Poster": "https://assetscdn1.paytm.com/images/cinema/Mavrick-8ec04890-d2c1-11ec-b804-fdbd7a64c91d.jpg"
    },
    ]);

    const [other_Movies, setOtherMovies] =useState(
      [{   "Title": "Avatar",      
          "Poster":"https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/avatar-the-way-of-water-poster.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
      },
      
      {
        "Title": "topgun Maverick",      
        "Poster": "https://assetscdn1.paytm.com/images/cinema/Mavrick-8ec04890-d2c1-11ec-b804-fdbd7a64c91d.jpg"
      },
      {
        "Title": "Cirkus",      
        "Poster": "https://assetscdn1.paytm.com/images/cinema/Circus-gallery-87ac3910-7b04-11ed-9459-3d8116f03fee.jpg"
      },
      {
        "Title": "drishyam 2",      
        "Poster": "https://assetscdn1.paytm.com/images/cinema/Drishyam-min-f607e2e0-4d39-11ed-a279-f56421cde6f2.jpg"
      },
      {
          "Title": "kantara",     
          "Poster": "https://www.financialexpress.com/wp-content/uploads/2022/10/kantara-2.jpeg"
      }]);
    
     
  
  return (
<div className='container-fluid movie-app'>
  <div className='heading'>   
    <h1>Gaja's Movie Landing Page</h1> 
  </div>
  <div className='category_heading'>   
    <h3>Tamil Movies</h3> 
 
  <div className='row'>  
         
        {/* <div className='image-container '> 
           <img src={movies[0].Poster}></img>
        </div>
        <div className='image-container d-flex flex-row justify-content-start m-3 '> 
           <img src={movies[1].Poster}></img>
        </div>
        <div className='image-container d-flex justify-content-start m-3 '> 
           <img src={movies[2].Poster}></img> 
        </div>
        <div className='image-container d-flex justify-content-start m-3 '> 
           <img src={movies[3].Poster}></img> 
        </div>
        <div className='image-container d-flex justify-content-start m-3 '> 
           <img src={movies[4].Poster}></img> 
        </div>
        <div className='image-container d-flex justify-content-start m-3 '> 
           <img src={movies[5].Poster}></img> 
        </div> */}
        
          {/* {movies.map( (movie,index) => (              
                 <div  className='image-container d-flex justify-content-start m-3 '>    
                     <img scr={movie.Poster} ></img> 
                  </div>
            ))} */}
         <MovieList movies={tamil_Movies}></MovieList> 
    </div>
    </div>
    <div className='category_heading'>   
      <h3>Hindi Movies</h3>     
      <div className='row'>  
      <MovieList movies={hindi_Movies}></MovieList> 
      </div>
    </div>
    <div className='category_heading'>   
      <h3>Other Language Movies</h3>     
      <div className='row'>  
      <MovieList movies={other_Movies}></MovieList> 
      </div>
    </div>
</div>
  );
}

export default App;
