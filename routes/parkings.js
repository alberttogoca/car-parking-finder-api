var express = require('express');
var router = express.Router();

//PARKINGS SPOTS
const parkings = [
  {
    id: 1,
    title: 'Parking 1',
    price: 5,
    rating: 4.2,
    free: false,
    coordinate: {
      latitude: 60.201136,
      longitude: 24.935004,
    },
    description: `Description about this parking lot

Open year 2018
Secure with CTV`,
  },
  {
    id: 2,
    title: 'Parking 2',
    price: 7,
    rating: 3.8,
    free: true,
    coordinate: {
      latitude: 60.202219,
      longitude: 24.933888,
    },
    description: `Description about this parking lot

Open year 2014
Secure with CTV`,
  },
  {
    id: 3,
    title: 'Parking 3',
    price: 10,
    rating: 4.9,
    free: true,
    coordinate: {
      latitude: 60.201611,
      longitude: 24.937697,
    },
    description: `Description about this parking lot

Open year 2019
Secure with CTV`,
  },
];


/* GET parking listing. */
router.get('/', function(req, res, next) {
  res.json(parkings);
});

router.get('/:id', function (req, res, next) {
  let parking = parkings.find((p) => p.id == req.params.id);
  if (parking === null || parking === undefined) {
    res.sendStatus(404);
  } else {
    res.json(parking);
  }
});

module.exports = router;
