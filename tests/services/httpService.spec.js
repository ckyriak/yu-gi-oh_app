describe('httpService service', function() {
  var $httpService, $httpBackend;

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject(function(_httpService_, _$httpBackend_) {
    $httpService = _httpService_;
    $httpBackend = _$httpBackend_;
  }));


  it('should exist', function() {
    expect($httpService).toBeDefined();
  });

  it('should call and get the desired response', function() {
    var returnData = {dummy: 'dummies'};
    var result;

    $httpBackend.expectGET("http://52.57.88.137/api/card_data/Reasoning777").respond(returnData);

    $httpService.fetch('Reasoning777').then((response) => { 
      result = response;
    });

    $httpBackend.flush();

    expect(result).toEqual(returnData);
  });
});