import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { fetchInputAction } from '../redux/slices/InputSlices';
import { fetchWeatherAction } from '../redux/slices/WeatherSlices';
import { fetchWeatherCastAction } from '../redux/slices/WeatherCastSlices';

const Input = ({handleCityHeader}) => {

    const [value, setValue] = useState({});
    const [city, setCity] = useState([]);

    const {input} = useSelector((state) => state.inputState);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchInputAction('Tel Aviv'));
        setCity(input.map(c => c.LocalizedName));
    },[]);
   
    useEffect(() => {
        dispatch(fetchInputAction(value));
        setCity(input.map(c => c.LocalizedName));
    },[value]);


    // //handle dataList arr..............
    useEffect(() => {
            setCity(input.map(c => c.LocalizedName));
    },[input])

    const handleChange = (e) => setValue(e.target.value);
        
    const handleSubmit = (e) => {
        e.preventDefault();
        handleCityHeader(input)
        dispatch(fetchWeatherAction(input[0].Key));
        dispatch(fetchWeatherCastAction(input[0].Key));
    }

    return (
        <div className="container">
            <div className='row mt-4'>
                <font face="Sedgwick Ave">
                    <h1 className='m-5' style={{color:'white', fontSize:'4rem'}}>Always chase the weather...</h1>
                </font>
            </div>
            <form onSubmit={handleSubmit} className="mx-5">
                <div className='row'>
                    <div className='col-md-3'></div>
                    <input
                        onChange={handleChange}
                        name='city'
                        list='cityList'
                        type="text"
                        className="form-control rounded-pill col"
                        aria-describedby="emailHelp"
                    />
                    <datalist id='cityList' className='rounded-pill'>
                        {city.map(c => <option key={uuid()}>{c}</option>)}
                    </datalist>
                    <div className='col-md-3'></div>
                </div>
                <div className='row' >
                        <button type="submit" className="btn mx-auto col-md-4 mt-4 rounded-pill" style={{background:'DarkTurquoise'}}>
                        <font face="Sedgwick Ave">chase the weather</font></button>
                </div>
            </form>
        </div>
    );
}



export default Input;

