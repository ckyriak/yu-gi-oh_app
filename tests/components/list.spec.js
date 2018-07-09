describe('Parent component list', function() {

	var $componentController;

	beforeEach(angular.mock.module('app'));

	beforeEach(inject(function (_$componentController_) {
	  $componentController = _$componentController_;
	}));


	it('should init', function () {
		var ctrl = $componentController('list');
		expect(ctrl.list.length).toBe(20);
	});

});