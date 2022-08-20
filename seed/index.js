require('dotenv').config();
const mongoose = require('mongoose');
const Movies = require('../models/Movies')

const movies =[
  {
    title: 'Avengers',
    year: 2009,
    director: 'Josh Whedon',
    duration:120,
    synopsis: 'nem be pero no tan be',
    image: 'link here'
  },
  {
    title: 'Harry Potter',
    year: 2010,
    director: 'JK Rowling',
    duration:110,
    synopsis: 'en harry sen va de vacances',
    image: 'link here'
  },
  {
    title: 'Gladiator',
    year: 2019,
    director: 'Ridley Scot',
    duration:130,
    synopsis: 'all good',
    image: 'link here'
  }
]

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Movies.create(movies)
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })