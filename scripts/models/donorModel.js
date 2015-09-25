var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		name: '',
		email: '',
		spousename: '',
		phone: null
	},
	urlRoot: 'https://nonprofit-dashboard.herokuapp.com',
	idAttribute: '_id'
})