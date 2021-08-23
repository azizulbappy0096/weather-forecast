import React from "react";
import Card from "../Card/Card";
import Graph from "../Graph/Graph";
import SearchBox from "../SearchBox";

function Main({ googleMapLoaded, currentPosition }) {
  return (
    <main className="container mx-auto bg-white rounded-lg">
      <section className="md:grid grid-cols-7 gap-8 mx-12 my-16">
        <div className="col-span-3 text-center">
          <SearchBox googleMapLoaded={googleMapLoaded} />
         
          <div className="mt-12">
            <div className="text-gray-400">
              {" "}
              <span> 5:05 PM, Mon, Nov 13 2020 </span>{" "}
            </div>

            <div className="flex items-center justify-center">
              <img
                className="object-contain"
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="weather-icon"
              />
              <div className="flex">
                <h3 className="text-4xl font-bold"> 72 </h3>
                <div className="pl-1">
                  <span className="text-lg font-semibold">
                    <sup>F</sup>
                  </span>
                </div>
              </div>
            </div>
            <div className="text-xl font-bold my-6">
              <p> Cloudy </p>
            </div>
            <div className="flex justify-evenly mt-12">
              <div className="text-center">
                <h3 className="text-gray-400 text-base font-light">
                  {" "}
                  Humidity{" "}
                </h3>
                <p className="text-lg font-normal"> 75% </p>
              </div>
              <div className="text-center">
                <h3 className="text-gray-400 text-base font-light">
                  {" "}
                  Wind speed{" "}
                </h3>
                <p className="text-lg font-normal"> 1.2 km/h </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="my-6 text-right text-gray-400 text-lg">
            {" "}
            <span> At Dhaka, Bangladesh </span>{" "}
          </div>
          <div className="relative h-28">
            <Graph />
          </div>
          <div className="flex gap-4 mt-8 overflow-x-auto">
            <Card active />
            <Card />
            <Card />
            <Card />
               
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
