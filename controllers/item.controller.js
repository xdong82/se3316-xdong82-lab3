const Item = require('../models/item.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


exports.item_create = function (req, res, next) {
    let item = new Item(
        {
            type: req.body.type,
            name: req.body.name,
            loan_period: req.body.loan_period

        }
    );

    item.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Item Created successfully')
    })
};

exports.item_details = function (req, res, next) {
    Item.findById(req.params.id, function (err, item) {
        if (err) return next(err);
        res.json(item);
    })
};


exports.all_item_details = function (req, res, next) {
    //res.send('Greetings from the itemList controller!');
    Item.find({}, function(err, items) {
        res.json(items);  
      });
};



exports.item_update = function (req, res, next) {
    Item.findByIdAndUpdate(req.params.id, {$set: {loan_period: req.body.loan_period}}, function (err, item) {
        console.log(req.body.loan_period);
        console.log(req.params.id);               

        if (err) return next(err);
        res.send('Item updated.');
    });
};

exports.item_delete = function (req, res, next) {
    Item.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};


exports.name_select = function (req, res, next) {
    //res.send('Greetings from the itemList controller!');
    Item.find({name: req.query.name}, function(err, items) {
        console.log(items);
        res.json(items);  
      });
};

