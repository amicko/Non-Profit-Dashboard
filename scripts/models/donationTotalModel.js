var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		1: 0
	},
	urlRoot: 'https://nonprofit-dashboard.herokuapp.com/stats/total',
	idAttribute: '_id'
})
