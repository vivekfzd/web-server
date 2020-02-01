const request=require('request')
const weather=(longitude,latitude,callback)=>{
    url='https://api.darksky.net/forecast/7eb372317338e220c662b0785923117b/'+longitude+','+latitude+'?units=si'
    request({url : url,json : true},(error,response)=>{
        if(error){
            callback('Unable to connect to internet.',undefined)
        }
        else if(response.body.error){
            callback('Data does not found.',undefined)
        }
        else{
            callback(undefined,'It is currently '+response.body.currently.icon+'.\nCurrent temperature is '+response.body.currently.temperature+' Degree Celcius.'+'\nChances of rain are '+response.body.currently.precipProbability+' % .')
        }
    })
}

module.exports=weather