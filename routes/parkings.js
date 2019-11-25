var express = require('express');
var router = express.Router();

//PARKINGS SPOTS
const parkings = [
  {
    id: 1,
    title: 'Veturitori 4',
    price: 5,
    rating: 4.2,
    free: true,
    reservedDate: null,
    coordinate: {
      latitude: 60.199633,
      longitude: 24.934958,
    },
    description: `Description about this parking lot

    Josep Pedrerol: +358 440562859
    Parking place number: 10`,
  },
  {
    id: 2,
    title: 'Messukuja 2',
    price: 7,
    rating: 3.8,
    free: true,
    reservedDate: null,
    coordinate: {
      latitude: 60.202219,
      longitude: 24.933888,
    },
    description: `Description about this parking lot

    Jonh Wick: +358 540232859
    Parking place number: 2`,
  },
  {
    id: 3,
    title: 'Kirjurinkatu 3',
    price: 10,
    rating: 4.9,
    free: true,
    reservedDate: null,
    coordinate: {
      latitude: 60.199359,
      longitude: 24.938463,
    },
    description: `Description about this parking lot

    Júlíus Björnsson: +358 770562853
    Parking place number: 6`,
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
    parking.reservedDate = req.body.reservedDate;
    res.json(parking);
  }

});

module.exports = router;
