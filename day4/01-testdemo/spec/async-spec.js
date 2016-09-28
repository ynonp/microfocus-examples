function addToArrayLater(arr, x) {
  setTimeout(function () {
    arr.push(x);
  }, 1000);  
}

describe('#addToArrayLater', function () {
  beforeEach(function () {
    jasmine.clock().install();
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  });

  it('should add to the array later', function () {
    const arr = [1,2,3];
    addToArrayLater(arr, 10);

    jasmine.clock().tick(1500);

    expect(arr[3]).toEqual(10);
  });
});
