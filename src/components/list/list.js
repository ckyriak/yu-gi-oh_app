(function() {
  'use strict';
  	
	function ListController(httpService) {
		var ctrl = this;

    ctrl.list = [
        { name: "Burial from a Different Dimension" },
        { name: "Charge of the Light Brigade" },
        { name: "Infernoid Antra" },
        { name: "Infernoid Attondel" },
        { name: "Infernoid Decatron" },
        { name: "Infernoid Devyaty" },
        { name: "Infernoid Harmadik" },
        { name: "Infernoid Onuncu" },
        { name: "Infernoid Patrulea" },
        { name: "Infernoid Pirmais" },
        { name: "Infernoid Seitsemas" },
        { name: "Lyla, Lightsworn Sorceress" },
        { name: "Monster Gate" },
        { name: "One for One" },
        { name: "Raiden, Hand of the Lightsworn" },
        { name: "Reasoning" },
        { name: "Time-Space Trap Hole" },
        { name: "Torrential Tribute" },
        { name: "Upstart Goblin" },
        { name: "Void Seer" }
      ];

    ctrl.list.forEach(function(item){
      httpService.fetch(item.name).then((rsp) => {
        Object.assign(item, {card_type: rsp.data.card_type || null});
      }, (err) => console.log("An error occured on fetching card!"))
    });
   
  	ctrl.selectCard = function(itemName) {
      ctrl.selectedCardName = itemName;
  		ctrl.card.getSelectedItem(itemName);
  	}
	}  	

  angular.module('app').component('list', {
    templateUrl: '../src/components/list/list.html',
    controller: ['httpService', ListController]
  });
})();