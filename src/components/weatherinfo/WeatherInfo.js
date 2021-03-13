import React from 'react';

const WeatherInfo = ({state}) => {
    console.log(state)

    return (
        <div>
          <h2>{state.name}</h2>
        </div>

    )
}

export default WeatherInfo;