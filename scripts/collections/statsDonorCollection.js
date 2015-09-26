var Backbone = require('backbone');
var statsDonorModel = require('../models/statsDonorModel.js');
module.exports = Backbone.Collection.extend({
	model: statsDonorModel,
	url: 'https://nonprofit-dashboard.herokuapp.com/stats/donors'
});
