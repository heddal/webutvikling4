const Destinations = require('../models/DestinationSchema');
const express = require('express');
const router = express.Router();


// this is our update method
// this method overwrites existing data in our database
router.post('/updateData', (req, res) => {
    const { id, update } = req.body;
    Destinations.findByIdAndUpdate(id, update, (err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
});
  
  
// this is our get method to get data by id for destination page
router.get('/getDataFrom/:id', (req, res, next) => {
var destinatoinID = req.params.id;
Destinations.findById(destinatoinID, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
});
});

// get all data
router.get('/getData', (req, res) => {
Destinations.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    else{
        var sorted = this.sortData(data)
        return res.json({ success: true, data: sorted });
    }
});
});


//get the three most popular destinations to show at the main page
router.get('/threeMostPopular', (req, res) => {
Destinations.find().sort({popularity: -1}).limit(3).exec(function(err, data){
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
})
})

router.get('/search/:word', (req, res, next) => {
const word = req.params.word.toLowerCase()
Destinations.find({$or: [{'name': word}, {'country': word}, {'continent': word}]}, function (err, data){
    if (err) return res.json({ success: false, error: err });
    else{
        var sorted = this.sortData(data)
        return res.json({ success: true, data: sorted });
    }
})})

router.get('/search/:continent/:word', (req, res) => {
    const continent = req.params.continent.toLowerCase()
    const word = req.params.word.toLowerCase()
    Destinations.find({ $and: [ {$or: [{'name': word}, {'country': word}]}, {'continent': continent} ]} , function (err, data){
    if (err) return res.json({ success: false, error: err })
    else{
        var sorted = this.sortData(data)
        return res.json({ success: true, data: sorted });
    }
    
})})

//get the three most popular destinations to show at the main page
router.get('/wordcloudPopularity', (req, res) => {
Destinations.find().select('name popularity -_id').exec(function(err, data){
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
})
})

sortData = (data) => {
    const sorting = req.params.sort;
    if(sorting === "A-Z"){
        const sorted = data.sort((a,b) => (a.name > b.name) ? 1:-1)
        return sorted
    }
    if(sorting === "Popularity"){
        const sorted = data.sort((a,b) => (a.popularity > b.popularity) ? -1:1)
        return sorted
    }
    return data;
}


// append /api for our http requests
app.use('/api', router);