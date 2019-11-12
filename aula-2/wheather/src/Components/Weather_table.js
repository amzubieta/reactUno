import React from 'react'

const WeatherDate = props => {
    return (
        <div className="previsao__data">
            <h1 className="previsao__data">{promps.date}</h1>
            <p>{promps.estado}</p>
        </div>
    )
}

const WeatherImg = props => {
    return (
        <div className="previsao__img">
            <img className="previsao__img" src={props.img} />
        </div>
    )
}

const WeatherTemperatura = props => {
    return (
        <div className="previsao-temperatura">
            <p>{promps.nivelMax}</p><spam>{promps.temperaturaMax}</spam>
            <p>{promps.nivelMin}</p><spam>{promps.temperaturaMin}</spam>
        </div>
    )
}

const Weather_table = props => {
    return(
        <div className="previsao-container">
           <WeatherDate
            date={promps.date}
            estado={promps.estado}
           /> 
           <WeatherImg
           img={promps.img}
           />
           <WeatherTemperatura
           nivelMax={promps.nivelMax}
           temperaturaMax={promps.temperaturaMax}
           nivelMin={promps.nivelMin}
           temperaturaMin={promps.nivelMin}
           />
        </div>
    )
}

export default Weather_table;