const express = require('express');
const router = express.Router();


const item_controller = require('../controllers/item.controller');


// routes to backend

router.get('/itemList', item_controller.all_item_details);
router.get('/test', item_controller.test);
router.get('/name_select', item_controller.name_select);
router.post('/create', item_controller.item_create);
router.get('/:id', item_controller.item_details);
router.put('/:id/update', item_controller.item_update);
router.delete('/:id/delete', item_controller.item_delete);

// frontend routes =========================================================
// route to handle all angular requests
router.get('', function(req, res) {
    res.sendFile('/home/xinyu/3316/se3316-xdong82-lab3/views/index.html'); // load our public/index.html file
});

module.exports = router;

//password: 3bAkrvlTsXCHWqVD