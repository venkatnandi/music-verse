var express = require('express');
var router = express.Router();
var ctrlSong = require('../controllers/songs');
var ctrlReviews = require('../controllers/reviews');

router.get('/songs', ctrlSong.songsListByDistance);
router.post('/songs', ctrlSong.songsCreate);
router.get('/songs/:songid', ctrlSong.songsReadOne);
router.put('/songs/:songid', ctrlSong.songsUpdateOne);
router.delete('/songs/:songid', ctrlSong.songsDeleteOne);

// reviews
router.post('/songs/:songid/reviews', ctrlReviews.reviewsCreate);
router.get('/songs/:songid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/songs/:songid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/songs/:songid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);

module.exports = router;