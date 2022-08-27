import React,{createContext} from 'react';

const WPAPI = require('./wpapi')
const wp = new WPAPI({
    endpoint: 'https://testewp.granostudio.com.br//wp-json',
    username: 'userteste',
    password: 'abrHldJT4d4UG!6*OA'
});

const config = {
    endpoint: '4',
    username: 'userteste',
    password: 'abrHldJT4d4UG!6*OA'

}

fetch(config).then((resp)=>{
    resp.json()
}).then((data)=>console.log(data))
.catch((error)=>console.log(error))

