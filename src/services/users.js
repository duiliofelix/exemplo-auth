const { ItemModel } = require("../database/items");

const cadastraItem = async (data) => {
  const newItem = new ItemModel(data);

  await newItem.save();
};

module.exports = cadastraItem;
