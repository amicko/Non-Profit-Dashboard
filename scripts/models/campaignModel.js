var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		name: '',
	},
	urlRoot: 'http://tiyfe.herokuapp.com/collections/hackathon-tester-campaigns',
	idAttribute: '_id'
})