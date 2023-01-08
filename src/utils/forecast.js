const request = require('request')
const forecast = (longitude, latitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key='+ process.env.WEATHERSTACKAPI +'&query=' + encodeURIComponent(longitude)+','+encodeURIComponent(latitude);
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


