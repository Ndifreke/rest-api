# REST API

Rest API is a simple demo nodejs server application that implements redis server.

It uses an npm package  I create [goequery](https://www.github.com/ndifreke/geoquery) to serve country data

---

## Getting started
The project uses the following techology

- [Node.js](https://nodejs.org)
- [Redis](https://redis.io)
- ExpressJs 

Refer to the documentation on how to install Redis and Nodejs on your machine

Replace the values in `/env.Examle` with your systems configuration

### Commands
```sh 
# install node packages 
npm i    

# Start the server
npm run start   

# Run unit test
npm run test
```

## End Points
The API endpoint follows the following pattern

`/country/:searchMode/:id`

Where `:searchMode` can be any of `name or phone` and `:id` is the country Identified by the search mode

If phone is used as the search mode, then the id must be the phone digit of the country and if name is used as the search mode, then the id must be the name of the country and is case insensitive.

### Example
```js
Request:

get:  /country/name/Nigeria
or
get: /country/phone/234

Response: status: 200

 { data:
    { country:
        { 
        phone: '234',
        capital: 'Abuja',
        name: 'Nigeria',
        continent: 'Africa',
        areaCode: '923768' 
        },
    status: 'ok',
    message: 'successfull'
    } 
}



```