var Backbone = require('backbone');
var donorModel = require('../models/donorModel.js');
module.exports = Backbone.Collection.extend({
	model: donorModel,
	url: 'https://nonprofit-dashboard.herokuapp.com'
});
