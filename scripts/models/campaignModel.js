var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		name: '',
	},
	urlRoot: 'https://nonprofit-dashboard.herokuapp.com/campaigns',
	idAttribute: '_id'
})