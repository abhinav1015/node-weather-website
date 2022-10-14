const request = require('request')
const forecast = (longitude, latitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=acd9304b5df7ef0d7934fe5c5ab15f77&query=' + encodeURIComponent(longitude)+','+encodeURIComponent(latitude)+'&units=f';
    request({url, json:true}, (error, {body}) => {
        if (error){
          callback('Unable to connect to weather services', undefined)
        }else if (body.error){
          callback('Unable to find location', undefined)
        }else{
          // const weatherData = response.body.current
          callback(undefined, body.current.weather_descriptions + '. Its currently ' + body.current.temperature + ' degrees out.' + ' The wind speed is ' + body.current.wind_speed + ' km/h and direction is ' + body.current.wind_degree + ' degree ' + '. However humidity is ' + body.current.humidity)
        }
    })
}

module.exports = forecast


