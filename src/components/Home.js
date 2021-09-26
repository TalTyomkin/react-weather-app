import React, {useState} from 'react';
import Input from './Input';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { useSelector } from 'react-redux';

const Home = () => {

    const [cityHeader, setCityHeader] = useState('Tel aviv');
    const inputState = useSelector((state) => state.inputState);

    const handleCityHeader = (cityHeader) => {
        setCityHeader(inputState.input[0].LocalizedName);
    }
    return ( 
        <div className='container mt-3 bg'>
            <div className='row'>
                <div className='col-md-12'>
                    <Input handleCityHeader={handleCityHeader} />
                    <CurrentWeather cityHeader={cityHeader} />
                    <Forecast />
                </div>
            </div>
        </div>
     );
}
 
export default Home;