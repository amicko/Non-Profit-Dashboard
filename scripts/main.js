'use strict';

var $ = require('jquery');
var Backbone = require ('backbone');
var donorCollection = require('./collections/donorCollection.js');
var campaignCollection = require('./collections/campaignCollection.js')
var donorModel = require('./models/donorModel.js');
var campaignModel = require('./models/campaignModel.js');

$(document).ready(function() {

var Router = Backbone.Router.extend({
	routes:{
		'overview' : 'goOverview',
		'campaigns' : 'goCampaigns',
		'campaign/:id': 'goSelectedCampaign',
		'donors' : 'goDonors',
		'donor/:id': 'goSelectedDonor'
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
	goSelectedCampaign: function(id) {
		console.log('test');
		$('.top_campaigns').hide();
		$('.top_donors').hide();
		$('.all_campaigns').hide();
		$('.selected_campaign').hide();
		$('.donor_list').hide();
		$('.selected_donor').hide();
		$('.selected_campaign').show();
	},
	goDonors: function(){
		$('.top_campaigns').hide();
		$('.top_donors').hide();
		$('.all_campaigns').hide();
		$('.selected_campaign').hide();
		$('.donor_list').hide();
		$('.selected_donor').hide();
		$('.donor_list').show();
	},
	goSelectedDonor: function(id) {
		console.log('Donor Success');
		$('.top_campaigns').hide();
		$('.top_donors').hide();
		$('.all_campaigns').hide();
		$('.selected_campaign').hide();
		$('.donor_list').hide();
		$('.selected_donor').show();
	}
});
	var foo = new Router();
	Backbone.history.start();

	var campaigns = new campaignCollection();

	function attachMenuCampaignList(model) {
		$('.menuCampaignList').append('<li><a id="a' + model.get('id') + '" href="#campaign/' + model.get('id')+'">' + model.attributes.name + '</a></li>');
		// $('#a' + model.get('id')).on('click', function() {
			// console.log('Success');
			// $('.top_campaigns').hide();
			// $('.top_donors').hide();
			// $('.all_campaigns').hide();
			// $('.selected_campaign').hide();
			// $('.donor_list').hide();
			// $('.selected_donor').hide();
			// $('.selected_campaign').show();
		// })
	}

	campaigns.on('add', attachMenuCampaignList);
	campaigns.fetch();

	var donors = new donorCollection();

	function attachMenuDonorList(model) {
		$('.menuDonorList').append('<li><a id="a' + model.get('id') + '" href="#donor/' + model.get('id')+'">' + model.attributes.name + '</a></li>');
	}

	donors.on('add', attachMenuDonorList);
	donors.fetch();


	

})
