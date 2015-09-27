var Backbone = require('backbone');
var donationTotalModel = require('../models/donationTotalModel.js');
module.exports = Backbone.Collection.extend({
	model: donationTotalModel,
	url: 'https://nonprofit-dashboard.herokuapp.com/stats/total'
});
