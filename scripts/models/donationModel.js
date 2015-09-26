var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		campaign_id: null,
		donor_id: null,
		amount: 0
	},
	urlRoot: 'https://nonprofit-dashboard.herokuapp.com/donations',
	idAttribute: '_id'
})
