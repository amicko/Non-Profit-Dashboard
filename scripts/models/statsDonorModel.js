var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		donor: '',
		donation_count: 0
	},
	urlRoot: 'https://nonprofit-dashboard.herokuapp.com/stats/donors',
	idAttribute: '_id'
})