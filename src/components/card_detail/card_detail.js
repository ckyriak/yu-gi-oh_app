(function() {
  'use strict';

	function CardDetailController(httpService) {
		var ctrl = this;

		ctrl.$onInit = function() {
			ctrl.card = {};
			ctrl.isDataAvailable = false;
			ctrl.card.getSelectedItem = getSelectedItem;
			ctrl.initialMsg = "Please select a card to view its details!!"
		}

		function getSelectedItem(cardName) {
			ctrl.isDataAvailable = false;
			httpService.fetch(cardName).then((rsp) => {
				ctrl.cardDetail = rsp.data;
				ctrl.isDataAvailable = true;
			}, (err) => console.log("An error occured on fetching card!"))
		}
	}

	angular.module('app').component('cardDetail', {
	  templateUrl: '../src/components/card_detail/card_detail.html',
	  controller: ['httpService', CardDetailController],
	  bindings: {
	  	card: '='
	  }
	});
})();