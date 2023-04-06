const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public'))


app.get('/', function(req,res){    
   res.sendFile(path.resolve(__dirname, 'public/home.html'));
})
app.get('/About', function(req,res){    
    res.sendFile(path.resolve(__dirname, 'public/About.html'));
})
app.get('/Works', function(req,res){    
    res.sendFile(path.resolve(__dirname, 'public/Works.html'));
})
app.get('/Links', function(req,res){    
    res.sendFile(path.resolve(__dirname, 'public/Links.html'));
})

app.listen(3000, function(){
    console.log('serveur demaré sur le port 3000 :)')
})