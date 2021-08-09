const Product = require('../models/products');

exports.create = async function create(data) {
  return await Product.create(data);
};

exports.read = async function read() {
  return await Product.find();
};

exports.update = async function update(_id, newData) {
  return await Product.findByIdAndUpdate(_id, newData, { new: true });
};

exports.del = async function del(_id) {
  return await Product.findByIdAndDelete(_id);
};
