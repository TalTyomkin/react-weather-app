import React, {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchWeatherAction} from '../redux/slices/WeatherSlices';
import {fetchInputAction} from '../redux/slices/InputSlices';
import {addFavorite} from '../redux/slices/FavoritesSlices';

const CurrentWeather = ({cityHeader}) => {

    
    const dispatch = useDispatch();
    const weatherState = useSelector((state) => state.weatherState);
    
    useEffect(() => {
        dispatch(fetchWeatherAction("215854"));
    },[]);
    
    useEffect(() => {
    },[weatherState])
            
    return ( 
        <div className='container mt-5 '>
            {weatherState.weather !== 'loading' ?
            <div className='row '>
                <div className='col-md-8'>
                    <button
                        onClick={() => dispatch(addFavorite())}
                        className='btn btn-link text-decoration-none offset-md-1 pointer-events none'
                        style={{color:'white'}}>
                        <p><img src="https://img.icons8.com/color/48/000000/like--v3.png" alt=''/>Add to favorites</p>
                    </button>
                    <font face="Sedgwick Ave">
                        <h1 className='offset-md-3 fw-bold' >Welcome to <span style={{color:'DarkOrange',fontSize:'4rem'}}> {cityHeader}</span> Forecast</h1>
                    </font>
                    <h4 className='offset-md-4'>{weatherState.weather[0].WeatherText}</h4>
                </div>
                <div className='col-md-1 '>
                    <img src={`https://www.accuweather.com/images/weathericons/${weatherState.weather[0].WeatherIcon}.svg`}
                        alt='icon' style={{width:'180px'}}
                        className='mt-5 offset-md-3'/>
                </div>
                <hr className='mt-4'/>
            </div>
             : 
             <h1>Loading...</h1> 
         } 
        </div>    
    );
}

export default CurrentWeather;

