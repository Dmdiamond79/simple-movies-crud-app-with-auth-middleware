const express = require('express')
const router = express.Router()
const MovieController = require('../controller/movie_controller')
const auth = require('../middleware/auth')
const upload = require('../middleware/multer')
const path = require('path')

router.get('/', MovieController.getAll)
router.get('/:id', MovieController.getOne)
router.post('/', auth, MovieController.create)
router.put('/:id', auth , MovieController.update)
router.delete('/:id', auth , MovieController.delete)
router.post('/:id/upload',upload.single('photo'), MovieController.uploadImage);
router.use('/:id/upload', express.static(path.join(__dirname, 'upload')));

module.exports = router;
