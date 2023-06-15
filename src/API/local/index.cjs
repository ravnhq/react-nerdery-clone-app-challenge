/* eslint-disable @typescript-eslint/no-var-requires, no-undef */
const places = require("./places.json");
const users = require("./users.json");
const wishlist = require("./wishlist.json");

module.exports = () => ({
  places,
  users,
  wishlist,
});
