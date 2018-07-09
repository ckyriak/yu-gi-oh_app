describe('Child component detail', function() {

	var $componentController;

	beforeEach(angular.mock.module('app'));

	beforeEach(inject(function (_$componentController_) {
	  $componentController = _$componentController_;
	}));


	it('should init', function () {
		var ctrl = $componentController('cardDetail');
		ctrl.$onInit();

		expect(ctrl.initialMsg).toBe('Please select a card to view its details!!');
	});
});