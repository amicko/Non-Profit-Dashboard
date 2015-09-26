'use strict';

var $ = require('jquery');
var Backbone = require ('backbone');
var donorCollection = require('./collections/donorCollection.js');
var campaignCollection = require('./collections/campaignCollection.js');
var donationCollection = require('./collections/donationCollection.js');
var donationModel = require('./models/donationModel.js');
var donorModel = require('./models/donorModel.js');
var campaignModel = require('./models/campaignModel.js');
var $campaignTab = $('.campaigns');
var $overviewTab = $('.overview');
var $donorsTab = $('.donors');

$(document).ready(function() {

	var Router = Backbone.Router.extend({
		routes:{
			'': 'goHome',
			'home': 'goHome',
			'overview' : 'goOverview',
			'campaigns' : 'goCampaigns',
			'campaign/:id': 'goSelectedCampaign',
			'donors' : 'goDonors',
			'donor/:id': 'goSelectedDonor'
		},
		goHome: function() {
			$('.top_campaigns').hide();
			$('.top_donors').hide();
			$('.all_campaigns').hide();
			$('.selected_campaign').hide();
			$('.donor_list').hide();
			$('.selected_donor').hide();
			$('div > ul').hide();
			$('.total_YTD').hide();
			$campaignTab.css({'background-color': '#C8D3C8'});
			$overviewTab.css({'background-color': '#C8D3C8'});
			$donorsTab.css({'background-color': '#C8D3C8'})

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
			$campaignTab.css({'background-color': '#C8D3C8'});
			$overviewTab.css({'background-color': '#F9F9F9'})
			$donorsTab.css({'background-color': '#C8D3C8'})
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
			$campaignTab.css({'background-color': '#F9F9F9'});
			$overviewTab.css({'background-color': '#C8D3C8'})
			$donorsTab.css({'background-color': '#C8D3C8'})
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
			$('h3 > span').hide();
			$('#c' + id).show();
			$campaignTab.css({'background-color': '#F9F9F9'});
			$overviewTab.css({'background-color': '#C8D3C8'})
			$donorsTab.css({'background-color': '#C8D3C8'})
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
			$campaignTab.css({'background-color': '#C8D3C8'});
			$overviewTab.css({'background-color': '#C8D3C8'})
			$donorsTab.css({'background-color': '#F9F9F9'})
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
			$campaignTab.css({'background-color': '#C8D3C8'});
			$overviewTab.css({'background-color': '#C8D3C8'})
			$donorsTab.css({'background-color': '#F9F9F9'})
			// if(id === (href.charAt(29))) {
				// $('#b' + id).show();
				// console.log('successful show')
			// }
			// else {
				// $('div > ul').hide();
			// }
		}
	});
	var foo = new Router();
	Backbone.history.start();

	var donations = new donationCollection();
	var campaigns = new campaignCollection();
	var donors = new donorCollection();


	function attachMenuCampaignList(model) {
		$('.menuCampaignList').append('<li><a id="a' + model.get('id') + '" href="#campaign/' + model.get('id')+'">' + model.attributes.name + '</a></li>');
		$('#campaignTitle').append('<span id="c' + model.get('id') + '">' + model.get('name') + '</span>');
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
		$('.donorsNames').append('<li>Donation Amount: $' + model.get('amount') + '</li>')
		// console.log(model.get('amount'));
	}

	campaigns.on('add', attachMenuCampaignList);
	campaigns.fetch();
	donors.on('add', attachMenuDonorList);
	donors.fetch();
	donations.on('add', attachDonationInfo);
	donations.fetch();

	function campaignFocus() {
		$campaignTab.css({'background-color': '#F9F9F9'});
		$overviewTab.css({'background-color': '#C8D3C8'});
		$donorsTab.css({'background-color': '#C8D3C8'})

	}
		$campaignTab.on('click', campaignFocus);

	function overviewFocus() {
		$campaignTab.css({'background-color': '#C8D3C8'});
		$overviewTab.css({'background-color': '#F9F9F9'})
		$donorsTab.css({'background-color': '#C8D3C8'})

	}
		$overviewTab.on('click', overviewFocus);

	function donorsFocus() {
		$campaignTab.css({'background-color': '#C8D3C8'});
		$overviewTab.css({'background-color': '#C8D3C8'});
		$donorsTab.css({'background-color': '#F9F9F9'})

	}
		$donorsTab.on('click', donorsFocus);
})














