var Backbone = require('backbone');
var donationModel = require('../models/donationModel.js');
module.exports = Backbone.Collection.extend({
	model: donationModel,
	url: 'https://nonprofit-dashboard.herokuapp.com/donations'
});
