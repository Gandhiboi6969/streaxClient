import React, { useEffect, useState } from 'react'
import people from './image.png'
export default function WeatherCard(props) {


  const [temp, setTemp] = useState('');
  
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=649ef09b5a369e365022fa7ada004d68&units=metric`;
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data=>{
      setTemp(data.main.temp);
      });
  }, [props])

  return (
    <div className="col-md-6 grid-margin stretch-card weather-card">
      <div className="card tale-bg weather-card2">
        <div className="card-people mt-auto  ">

          <div className="weather-info">
            <div className="d-flex">
              <div>
                <h2 className="mb-0 font-weight-normal text"><i className="fas fa-sun"></i> {temp}<sup>c</sup></h2>
              </div>
              <div className="ml-2 text">
                <h2 className="text place">{props.city}  India</h2>
              </div>
            </div>
          </div>
          <div className="weather-image-hr1">
            <img className="weather-image-hr2" src="https://i.postimg.cc/bNnQspbT/images.jpg" alt="people" />
          </div>
        </div>
      </div>
    </div>
  )
}
