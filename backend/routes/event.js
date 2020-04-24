const router = require('express').Router();
let Event = require('../models/event.model');  // mongoose model we created 


//used to return all events
router.route('/').get((req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
});
// used to create event 
router.route('/add').post( async (req,res) => {
    const eventName = req.body.eventName;
    const eventLocation = req.body.eventLocation;
    const eventTime = req.body.eventTime;
    const eventImage = Image(req.body.eventImage);
    const eventDescription = req.body.Event;
    
    const newEvent = new Event({
        eventName,
        eventLocation,
        eventTime,
        eventImage,
        eventDescription
    });
    newEvent.save()
    .then(()=> res.json('Event added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

//used to retrieve event information 
router.route('/:id').get((req, res) =>{
    Event.findById(req.params.id)
        .then(event => res.json(event))
        .catch(err => res.status(400).json('Error: ' + err));
})
//used to delete event
router.route('/:id').delete((req, res) =>{
    Event.findByIdAndDelete(req.params.id)
        .then(() => res.json('Event Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
})
//update event information
router.route('/update/:id').post((req, res) => {
    Event.findById(req.params.id)
    .then(event => {
        event.eventName = req.body.eventName;
        event.eventLocation = req.body.eventLocation;
        event.eventTime = req.body.eventTime;
        event.eventImage = Image(req.body.eventImage);
        event.eventDescription = req.body.eventDescription;

        event.save()
            .then( () => res.json('Event added!'))
            .catch(err => res.status(400).json('Error: '+ err));
    })
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;