var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		campaign: '',
		campaign_count: 0
	},
	urlRoot: 'https://nonprofit-dashboard.herokuapp.com/stats/campaigns',
	idAttribute: '_id'
})