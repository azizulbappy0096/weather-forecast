import React from 'react'

function Card({ active }) {
    return (
        <div className={`px-8 py-4 cursor-pointer text-center rounded-lg ${active ? "active text-white" :""}`}>
        <h4 className="text-sm font-bold"> Today </h4>
        <img
          className="w-20 object-contain"
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="weather-icon"
        />
        <div className="text-center">
          <h3 className={` text-sm font-light ${active ? "" : "text-gray-400"}`}> Humidity </h3>
          <p className="text-base font-normal"> 75% </p>
        </div>
      </div>
    )
}

export default Card
