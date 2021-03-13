import React from 'react';
import useForm from '../../hooks/useForm';
import { getWeather } from '../../service/service';

const WeatherForm = ({result}) => {

    const [formValues,handleInputChange] = useForm({
        city:'',
        country:''
    });
    const {city,country} = formValues;
    const getdata = (e) =>{
        e.preventDefault();
        getWeather(city,country)
    }
    return(
    
        <div className="card card-body">
            <form  onSubmit={getdata}>
                <div className="form-group">
                    <input 
                    type="text" 
                    name="city" 
                    placeholder="Coloque la Ciudad" 
                    className="form-control mb-4" 
                    autoFocus
                    value={city}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                    type="text" 
                    name="country"
                     placeholder="Seleccione el Pais" 
                     className="form-control mb-4" 
                     value={country}
                    onChange={handleInputChange}
                     />
                </div>
                <button className="btn btn-success btn-block" type='submit' onClick={() =>result(city,country)}>
                    Consultar
                </button>
            </form>
        </div>
    )
};

export default WeatherForm;