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
router.get('/getFrom/:id', (req, res, next) => {
    const destinatoinID = req.params.id;
    Destinations.findById(destinatoinID, (err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});


//get the three most popular destinations to show at the main page
router.get('/fiveMostPopular', (req, res) => {
Destinations.find().sort({popularity: -1}).limit(5).exec(function(err, data){
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
})
})


// get all data
router.get('/getData/:sorting', (req, res) => {
    const sorting = req.params.sorting
    Destinations.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        else{
            var sorted = sortData(data, sorting)
            return res.json({ success: true, data: sorted });
        }
    });
});

router.get('/search/:word/:sorting', (req, res, next) => {
    const sorting = req.params.sorting
    const word = req.params.word.toLowerCase()
    Destinations.find({$or: [{'name': word}, {'country': word}, {'continent': word}]}, function (err, data){
        if (err) return res.json({ success: false, error: err });
        else{
            var sorted = sortData(data, sorting)
            return res.json({ success: true, data: sorted });
        }
})})

router.get('/search/:continent/:word/:sorting', (req, res) => {
    const sorting = req.params.sorting
    const continent = req.params.continent.toLowerCase()
    const word = req.params.word.toLowerCase()
    Destinations.find({ $and: [ {$or: [{'name': word}, {'country': word}]}, {'continent': continent} ]} , function (err, data){
    if (err) return res.json({ success: false, error: err })
    else{
        var sorted = this.sortData(data, sorting)
        return res.json({ success: true, data: sorted });
    }
    
})})

sortData = (data, sorting) => {
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
module.exports = router;