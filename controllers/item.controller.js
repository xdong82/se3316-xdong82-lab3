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
        res.send(item);
    })
};


exports.all_item_details = function (req, res, next) {
    //res.send('Greetings from the itemList controller!');
    Item.find({}, function(err, items) {
        var itemMap = {};
    
        items.forEach(function(item) {
          itemMap[item._id] = item;
        });

    
        res.send(itemMap);  
      });
};



exports.item_update = function (req, res, next) {
    Item.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, item) {
        if (err) return next(err);
        res.send('Item udpated.');
    });
};

exports.item_delete = function (req, res, next) {
    Item.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.name_select = function (req, res, next){
    Item.find({"name": req.body.name}, function(err, item){
        if(err) return next(err);
        res.send(item)
    })
}

