'use strict';

var $ = require('jquery');
var Backbone = require ('backbone');
var donorCollection = require('./collections/donorCollection.js');
var campaignCollection = require('./collections/campaignCollection.js');
var donationCollection = require('./collections/donationCollection.js');
var donationModel = require('./models/donationModel.js');
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
			$('div > ul').show();
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
			$('div > ul').show();
			$('.all_campaigns').show();
		},
		goSelectedCampaign: function(id) {
			$('.top_campaigns').hide();
			$('.top_donors').hide();
			$('.all_campaigns').hide();
			$('.selected_campaign').hide();
			$('.donor_list').hide();
			$('.selected_donor').hide();
			$('div > ul').show();
			$('.selected_campaign').show();
		},
		goDonors: function(){
			$('.top_campaigns').hide();
			$('.top_donors').hide();
			$('.all_campaigns').hide();
			$('.selected_campaign').hide();
			$('.donor_list').hide();
			$('.selected_donor').hide();
			$('div > ul').show();
			$('.donor_list').show();
		},
		goSelectedDonor: function(id) {
			$('.top_campaigns').hide();
			$('.top_donors').hide();
			$('.all_campaigns').hide();
			$('.selected_campaign').hide();
			$('.donor_list').hide();
			$('.selected_donor').show();
			$('div > ul').hide();
			$('#b' + id).show();
		}
	});
	var foo = new Router();
	Backbone.history.start();

	var donations = new donationCollection();
	var campaigns = new campaignCollection();
	var donors = new donorCollection();


	function attachMenuCampaignList(model) {
		$('.menuCampaignList').append('<li><a id="a' + model.get('id') + '" href="#campaign/' + model.get('id')+'">' + model.attributes.name + '</a></li>');
	}

	function attachMenuDonorList(model) {
		$('.menuDonorList').append('<li><a id="a' + model.get('id') + '" href="#donor/' + model.get('id')+'">' + model.attributes.name + '</a></li>');
		$('#selectedDonor').append('<ul  class="donorsNames" id="b' + model.get('id') +'"><li>' + model.get('name') + '</li>' +
									'<li>' + model.get('email') + '</li>' +
									'<li>' + model.get('spousename') + '</li>' +
									'<li>' + model.get('phone') + '</li></ul>'
								)
	}

	function attachDonationInfo(model) {
		// console.log(model.get('amount'));
	}

	campaigns.on('add', attachMenuCampaignList);
	campaigns.fetch();
	donors.on('add', attachMenuDonorList);
	donors.fetch();
	donations.on('add', attachDonationInfo);
	donations.fetch();
	
})
