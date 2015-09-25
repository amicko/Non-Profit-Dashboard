var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		name: '',
		email: '',
		spousename: '',
		phone: null
	},
	urlRoot: 'http://tiyfe.herokuapp.com/collections/hackathon-tester',
	idAttribute: '_id'
})