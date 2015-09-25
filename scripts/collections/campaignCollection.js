var Backbone = require('backbone');
var campaignModel = require('../models/campaignModel.js');
module.exports = Backbone.Collection.extend({
	model: campaignModel,
	url: 'http://tiyfe.herokuapp.com/collections/hackathon-tester-campaigns'
});
