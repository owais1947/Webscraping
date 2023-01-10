const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio');
const { response } = require('express');

const owais = express();


const PORT = 8000;

const url = 'https://www.theguardian.com/uk'
axios(url).then(response=>{
    const html = response.data
    const $ = cheerio.load(html)
    const art = []
    $('.fc-item__title',html).each(function(){
       const title =  $(this).text()
        const url =  $(this).find('a').attr('href')
        art.push({
            title,url
        })
    })
    console.log(art)
}).catch(err=> console.log(`server running on Port ${PORT}`))




owais.listen(PORT, ()=>console.log(`server is runing in ${PORT}`))