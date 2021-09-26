import React from 'react';
import moment from 'moment';

const ForecastCard = ({dayForcaste}) => {
    
    const {Date,Day,Temperature} = dayForcaste;
    const {Icon,IconPhrase} = Day;
    const {Maximum} = Temperature;
    
    var weekDayName =  moment(Date).format('dddd');
 
        return (
            <div className='col-md'>
                <h2 className="">
                    {Math.floor((Maximum.Value-32)*0.5556)}°C
                    <img src={`https://www.accuweather.com/images/weathericons/${Icon}.svg`} className="offset-md-1"  style={{width:'6vw'}}  alt="weather" />
                </h2>
                <h4 className="">{weekDayName}</h4>
                <p>{IconPhrase}</p>
            </div>
        );
    }
 
export default ForecastCard;