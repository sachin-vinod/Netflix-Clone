import React from 'react';
import CardSlider from './CardSlider';

export default React.memo(
    function Slider({ movies }) {

        const getMoviesFromRange = (from,to) => {
            return movies.slice(from,to);
        };
    
        //console.log(movies);
    
        return ( 
            <div>
                <CardSlider title="Trending Now" data={getMoviesFromRange(0,9)}/>
                <CardSlider title="New Releases" data={getMoviesFromRange(10,19)}/>
                <CardSlider title="Blockbuster Movie" data={getMoviesFromRange(20,29)}/>
                <CardSlider title="Popular On Netflix" data={getMoviesFromRange(30,39)}/>
                <CardSlider title="Action Movies" data={getMoviesFromRange(40,49)}/>
                <CardSlider title="Epic" data={getMoviesFromRange(50,59)}/>
            </div>
         );
    }
);

