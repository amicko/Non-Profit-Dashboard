var Backbone = require('backbone');
var campaignModel = require('../models/campaignModel.js');
module.exports = Backbone.Collection.extend({
	model: campaignModel,
	url: 'https://nonprofit-dashboard.herokuapp.com/campaigns'
});
