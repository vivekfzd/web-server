const request=require('request')
const geocode = (address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoidml2ZWttb2RhbndhbCIsImEiOiJjanl6eWpqanMwNmIxM2dsazF5bXd2dWdwIn0.Yjj8Lmg3qGaRkSsQYVogFg'
    request({url : url,json : true},(error,response)=>{
        //console.log(response.body.features)
        if(error){
            callback('Unable to connect to internet.',undefined)
        }
        else if(response.body.features.length===0){
            callback('Unable to find the location.',undefined)
        }
        else{
            callback(undefined,{
                longitude : response.body.features[0].center[1],
                latitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name
            })
        }
    })

}

module.exports=geocode