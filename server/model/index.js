const Sequelize = require('sequelize');
const db = require('../db');

const Photo = db.define('photo', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
    allowNull: false,
  },
  display_index: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  alt_text: {
    type: Sequelize.STRING,
  },
  is_verified_photo: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  listing_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  image_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Photo.readAll = listingId => Photo.findAll({
  where: {
    listing_id: listingId,
  },
});

module.exports = Photo;
