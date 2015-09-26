var Backbone = require('backbone');
var statsCampaignModel = require('../models/statsCampaignModel.js');
module.exports = Backbone.Collection.extend({
	model: statsCampaignModel,
	url: 'https://nonprofit-dashboard.herokuapp.com/stats/campaigns'
});
