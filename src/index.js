const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb+srv://maiconparra:hPPx22pW9R4MAAgI@cluster0-4avqv.mongodb.net/acessa-city-vNode?retryWrites=true&w=majority',{
 'useNewUrlParser': true,
 'useUnifiedTopology': true
 });


app.use(express.json());
app.use(routes);

app.listen(4300);

