'use strict';

var $ = require('jquery');
var Backbone = require ('backbone');
var donorCollection = require('./collections/donorCollection.js');
var donorModel = require('./models/donorModel.js');

$(document).ready(function() {

var Router = Backbone.Router.extend({
	routes:{
		'overview' : 'goOverview',
		'campaigns' : 'goCampaigns',
		'donors' : 'goDonors'
	},
	goOverview: function(){
		$('.top_campaigns').hide();
		$('.top_donors').hide();
		$('.all_campaigns').hide();
		$('.selected_campaign').hide();
		$('.donor_list').hide();
		$('.selected_donor').hide();
		$('.top_campaigns').show();
		$('.top_donors').show();

	},
	goCampaigns: function(){
		$('.top_campaigns').hide();
		$('.top_donors').hide();
		$('.all_campaigns').hide();
		$('.selected_campaign').hide();
		$('.donor_list').hide();
		$('.selected_donor').hide();
		$('.all_campaigns').show();
	},
	goDonors: function(){
		$('.top_campaigns').hide();
		$('.top_donors').hide();
		$('.all_campaigns').hide();
		$('.selected_campaign').hide();
		$('.donor_list').hide();
		$('.selected_donor').hide();
		$('.donor_list').show();

	}
});
	var foo = new Router();
	Backbone.history.start();

})
