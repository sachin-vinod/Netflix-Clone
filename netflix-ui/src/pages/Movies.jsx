import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { fetchMovies, getGenres } from '../store';
import { firebaseAuth } from '../utils/firebase-config';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';

function Movies() {
    const [isScrolled, setIsScrolled] = useState(false);
    const dispatch = useDispatch();
    const nevigate = useNavigate();
    const genresLoaded = useSelector((state)=> state.netflix.genresLoaded);
    const movies = useSelector((state)=> state.netflix.movies);
    const genres = useSelector((state)=> state.netflix.genres);

    useEffect(()=> {
        //render only ones when our website starts
        dispatch(getGenres());
    },[]);

    useEffect(()=> {
        if(genresLoaded) dispatch(fetchMovies({ type: "all" }));
    },[genresLoaded]);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset===0 ? false: true);
        return () => (window.onscroll = null);
    };

    onAuthStateChanged(firebaseAuth, (currUser)=>{
        if(currUser){
            //nevigate("/");
        }
    });

    //console.log(movies);

    return ( 
        <Container>
            <div className="navbar">
                <Navbar isScrolled={isScrolled}/>
            </div>
            <div className="data">
                <SelectGenre genres={genres} type="movie"/>
                {
                    movies.length ? <Slider movies={movies}/> : <NotAvailable />
                }
            </div>
        </Container>
     );
}

const Container = styled.div`
    .data{
        margin-top: 8rem;
    }
`;

export default Movies;