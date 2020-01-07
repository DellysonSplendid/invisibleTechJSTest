const axios = require('axios');
require('dotenv').config()  //dotenv for environment variables


const logInputCurrentTimeAndWeather = (locationsInput) =>{
  try {
    //check if input argument is empty
    if (locationsInput.lenth < 1 ) {
      console.log('Please provide location input')
    }
    locationsInput.forEach(async location => {
      const response = await axios.get(`http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=${location}`);
      
      const { location: { name, country, localtime }, current: { observation_time, temperature,  wind_speed, wind_dir, pressure, humidity } }=response.data;

      console.log(`Weather in ${name}, ${country} local time ${localtime} is \n \t Temperature : ${temperature}℃  \n \t Observation Time : ${observation_time}  \n \t Wind Speed : ${wind_speed}  \n \t Wind Direction : ${wind_dir} \n \t Pressure : ${pressure}mbar \n \t Humidity : ${humidity}% \n`)
    });    
  } catch (error) {
    console.error(error);
  }  
}




