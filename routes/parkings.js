var express = require('express');
var router = express.Router();

//PARKINGS SPOTS
const parkings = [
  {
    id: 1,
    title: 'Rautatieläisenkatu 12',
    price: 5,
    rating: 4.2,
    free: true,
    coordinate: {
      latitude: 60.201136,
      longitude: 24.935004,
    },
    description: `Description about this parking lot

    Amir Dirin
    +358 440562859
    Price: 5 € per hour
    Parking place number: 10
    Available all day`,
  },
  {
    id: 2,
    title: 'Messukuja 2',
    price: 7,
    rating: 3.8,
    free: true,
    coordinate: {
      latitude: 60.202219,
      longitude: 24.933888,
    },
    description: `Description about this parking lot

    Jonh Wick
    +358 540232859
    Price: 7 € per hour
    Parking place number: 2
    Available all day
    Secure with CTV`,
  },
  {
    id: 3,
    title: 'Rautatieläisenkatu 3',
    price: 10,
    rating: 4.9,
    free: true,
    coordinate: {
      latitude: 60.201611,
      longitude: 24.937697,
    },
    description: `Description about this parking lot

    Júlíus Björnsson
    +358 770562853
    Price: 10 € per hour
    Parking place number: 6
    Available all day`,
  },
];


/* GET parking listing. */
router.get('/', function(req, res, next) {
  res.json(parkings);
});

/* GET parking by ID. */
router.get('/:id', function (req, res, next) {
  let parking = parkings.find((p) => p.id == req.params.id);
  if (parking === null || parking === undefined) {
    res.sendStatus(404);
  } else {
    res.json(parking);
  }
});

/* Reserve parking */
router.put('/reserve', function(req, res){
  let parking = parkings.find((p) => p.id == req.body.id);
  if (parking === null || parking === undefined) {
    res.sendStatus(404);
  } else {
    parking.free = req.body.free;
    res.json(parking);
  }

});

module.exports = router;
