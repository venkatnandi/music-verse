var express = require('express');
var router = express.Router();
var ctrlCatalogue = require('../controllers/list');
var ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlCatalogue.homelist);
router.get('/songs/review/new', ctrlCatalogue.addReview);
router.get('/songs/I Wanna Be Yours', ctrlCatalogue.songsInfo); 
router.get('/songs/Starboy', ctrlCatalogue.songsInfo1); 
router.get('/songs/Levitating', ctrlCatalogue.songsInfo2); 
router.get('/songs/Sunflower-Spider-Man: Into the Spider-Verse', ctrlCatalogue.songsInfo3); 
router.get('/songs/Let Her Go', ctrlCatalogue.songsInfo4); 
router.get('/songs/songs-catalogue', ctrlCatalogue.catalogue);


/* Other pages */

router.get('/about', ctrlOthers.about);

module.exports = router;