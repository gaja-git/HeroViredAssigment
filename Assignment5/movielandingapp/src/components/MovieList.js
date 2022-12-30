import React from 'react';


 const MovieList = (props) =>{
        return(
            <div className='image-container'>
                <div className='image '  > 
                    <img src={props.movies[0].Poster} width="250" height="250"></img>
                </div>
                <div className='image'> 
                    <img src={props.movies[1].Poster} width="250" height="250"></img>
                </div>
                <div className='image'> 
                    <img src={props.movies[2].Poster} width="250" height="250"></img> 
                </div>
                <div className='image'> 
                    <img src={props.movies[3].Poster} width="250" height="250"></img> 
                </div>
                <div className='image'> 
                <img src={props.movies[4].Poster} width="250" height="250"></img> 
                </div>
            </div>     
           
           
        );
}
export default MovieList;