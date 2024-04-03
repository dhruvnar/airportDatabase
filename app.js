const axios = require('axios');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

axios.get('https://www.ryanair.com/api/views/locate/5/airports/en/active')
  .then((response) => {
    console.log(response.data[1]);
    for (let i=0; i < response.data.length ; i++)
    {
      //console.log(response.data[i].code + "\t" + response.data[i].city.name + "\t" + response.data[i].region.name + ", " + response.data[i].country.code)

      console.log('<option value="' +response.data[i].code + '">' + response.data[i].city.name + '</option>'  )
    }

  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });