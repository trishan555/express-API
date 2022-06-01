const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

let countries = {
    'sri lanka':{
        'curency' : 'Sri lankan rupee',
        'capital' : 'Colombo',
        'dialingCode' : '+94'
    },
    'australia':{
        'curency' : 'Australlian dollar',
        'capital' : 'Canberra',
        'dialingCode' : '+61'
    },
    'india':{
        'curency' : 'Indian rupee',
        'capital' : 'New Delhi',
        'dialingCode' : '+91'
    },
    'china':{
        'curency' : 'Renminbi',
        'capital' : 'Beijing',
        'dialingCode' : '+86'
    },
    'japan':{
        'curency' : 'Yen',
        'capital' : 'Tokyo',
        'dialingCode' : '+81'
    },
    'unknown':{
        'curency' : 'unknown',
        'capital' : 'unknown',
        'dialingCode' : 'unknown'
    }

}
app.get('/', ( request, response) => {
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/countries/:countryName', (request, response) =>{
    const cName = request.params.countryName.toLowerCase()
    
   
    if(countries[cName]){
        response.json(countries[cName])   
    }else{
        response.json(countries['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})