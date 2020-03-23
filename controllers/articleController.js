const ArticleModel = require('../models/article.js');

const getDataFromController = async () => {
  try {
    const userList = await ArticleModel.find();
    return userList;
  } catch (error) {
    console.log(error);
  }
};

module.exports.getDataFromController = getDataFromController;
