describe('spy and', function () {
  it('should work', function () {
    localStorage.setItem('foo', 10);

    const spy = spyOn(localStorage, 'getItem').and.returnValue(7);
    const result = localStorage.getItem('foo');

    // expect(spy).toHaveBeenCalled();
    // expect(result).not.toBeDefined();
    expect(result).toBe(7);
  });
});
