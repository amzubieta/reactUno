import React from 'react'

const WeatherDate = props => {
    return (
        <div className="previsao__data">
            <h1 className="previsao__data">{props.date}</h1>
            <p>{props.estado}</p>
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
            <p>{props.nivelMax}</p><spam>{props.temperaturaMax}</spam>
            <p>{props.nivelMin}</p><spam>{props.temperaturaMin}</spam>
        </div>
    )
}

const Weather_table = props => {
    return(
        <div className="previsao">
           <WeatherDate
            date={props.date}
            estado={props.estado}
           /> 
           <WeatherImg
           img={props.img}
           />
           <WeatherTemperatura
           nivelMax={props.nivelMax}
           temperaturaMax={props.temperaturaMax}
           nivelMin={props.nivelMin}
           temperaturaMin={props.temperaturaMin}
           />
        </div>
    )
}

export default Weather_table;