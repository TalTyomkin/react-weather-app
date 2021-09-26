import React, {useEffect,useState} from 'react';
import ForecastCard from './ForecastCard';
import { uuid } from 'uuidv4';
import { useDispatch, useSelector } from 'react-redux';
import {fetchWeatherCastAction} from '../redux/slices/WeatherCastSlices';


const Forecast = () => {

    const [forecast,setForecast] = useState('loading')
    
    const dispatch = useDispatch();
    const weatherCastState = useSelector((state) => state.weatherCastState);
   
    useEffect(() => {
        dispatch(fetchWeatherCastAction("215854"))
    },[]);
    
    useEffect(() => {
        setForecast(weatherCastState)
    },[weatherCastState]);

    return ( 
            <div className='container mt-4 p-5' style={{background:'rgba(255,255,255, 0.3)'}}>
                { weatherCastState.weather !== 'loading' ?
                    <div className='row  gx-0'>
                        {weatherCastState.weather.DailyForecasts.map(day => <ForecastCard key={uuid()} dayForcaste={day}/>)}
                    </div>
                :
                <h1>Loading...</h1>
            }
            </div>
         );
    }
     

export default Forecast;