const mongoose = require('mongoose');

const URI = 'mongodb://localhost/ContruCal';
mongoose.connect(URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
    .then((db)=>console.log('Databse conected'))
    .catch((err)=>console.log('Databse don´t conected'))
;