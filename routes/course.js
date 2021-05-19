const express = require('express');
const router = express.Router();


//Controller
const courseController = require('../controller/course')

router.get('/course', courseController.getCourse)

router.post('/course', courseController.postCourse)

router.get('/course/:id', courseController.getOneCourse)

router.post('/course/:id', courseController.postUpdateCourse)

module.exports = router;