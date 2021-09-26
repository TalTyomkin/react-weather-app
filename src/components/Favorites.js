import React, {useState,useEffect} from 'react';
import { uuid } from 'uuidv4';
import { useSelector, useDispatch } from 'react-redux';
import {removeFavorite} from '../redux/slices/FavoritesSlices';
import { Link } from 'react-router-dom';


const Favorites = () => {

    const dispatch = useDispatch();
    const [favorites, setFavorites] = useState([]);
    const {myFavorites} = useSelector((state) => state.favoritesState);
    const weatherCastState = useSelector((state) => state.weatherCastState);

    const {Day, Temperature} = weatherCastState.weather.DailyForecasts[0];
    const {Icon,IconPhrase} = Day;
    const {Maximum} = Temperature;
 
    useEffect(() => {
        setFavorites(() =>myFavorites)
    },[favorites])

    const handleRemove = (id) => {
        //return an empty obj with "proxy" cause of am high order object... cant resolve :(
        const updateState = favorites.filter(r => id !== r.id);
        dispatch(removeFavorite(updateState));
    }
    
    return ( 
        <div className='container mt-5 bg' style={{height:'83vh'}}>
            <div className='row '>
                <font face="Sedgwick Ave">
                    <h1 className='mt-5 offset-md-1' style={{color:'white',fontSize:'4rem'}}>My Favorites</h1>
                </font>
            </div>
            <font face="Sedgwick Ave" className='d-flex align-content-end flex-wrap'>
                {favorites.map(f => {
                    return(
                        <Link to='/' className="nav-link active" aria-current="page" href="#" key={uuid()}>
                            <div className="card d-flex align-items-center mt-3 mx-3" style={{width: "15rem",background:'rgba(255,255,255, 0.3)',color:'white'}}>
                                <div className="card-body">
                                    <h2 className="card-title " style={{color:'DarkOrange'}}>{f.city}</h2>
                                    <h2 className="">
                                    {Math.floor((Maximum.Value-32)*0.5556)}°C
                                        <img src={`https://www.accuweather.com/images/weathericons/${Icon}.svg`} className="offset-md-1"  style={{width:'6vw'}}  alt="weather" />
                                    </h2>
                                    <button onClick={() => handleRemove(f.id)} className="btn mt-3 rounded-pill " style={{background:'DarkTurquoise'}}>remove from favorites</button>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </font>
        </div>
        
    );
}
 
export default Favorites;