const Item = require('../models/item');
const Category = require('../models/category');
const async = require('async');
exports.index = function (req, res) {
  async.parallel(
    {
      item_count: function (callback) {
        Item.countDocuments({}, callback);
      },
      category_count: function (callback) {
        Category.countDocuments({}, callback);
      },
    },
    function (err, results) {
      res.render('index', {
        title: 'Gameventory.GG',
        desc: 'Track your Games++',
        error: err,
        data: results,
      });
    }
  );
};

//Display list of all Items.
exports.item_list = function (req, res) {
  Item.find({}, 'title category')
    .sort({ title: 1 })
    .populate('category')
    .exec(function (err, list_items) {
      if (err) {
        return next(err);
      }
      res.render('item_list', { title: 'Item List', item_list: list_items });
    });
};
//Handle detail page fot an Item.
exports.item_detail = function (req, res) {
  res.send('Item');
};
//Display Item create form on GET.
exports.item_create_get = function (req, res) {
  res.send('Item Create GET');
};
//Handle Item create on POST.
exports.item_create_post = function (req, res) {
  res.send('Item Create POST');
};
// Display Item delete form on GET.
exports.item_delete_get = function (req, res) {
  res.send('Item Delete GET');
};
// Handle Item delete on POST.
exports.item_delete_post = function (req, res) {
  res.send('Item Delete POST');
};
// Display Item update form on GET.
exports.item_update_get = function (req, res) {
  res.send('Item Update GET');
};
// Handle Item update on POST.
exports.item_update_post = function (req, res) {
  res.send('Item Update POST');
};
