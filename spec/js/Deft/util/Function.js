/*
Copyright (c) 2012 [DeftJS Framework Contributors](http://deftjs.org)
Open source under the [MIT License](http://en.wikipedia.org/wiki/MIT_License).
*/
/*
Jasmine test suite for Deft.util.Function
*/
describe('Deft.util.Function', function() {
  return describe('spread()', function() {
    it('should create a new wrapper function that spreads the passed Array over the target function arguments', function() {
      var targetFunction, wrapperFunction;
      targetFunction = jasmine.createSpy('target function');
      wrapperFunction = Deft.util.Function.spread(targetFunction);
      expect(Ext.isFunction(wrapperFunction)).toBe(true);
      wrapperFunction(['a', 'b', 'c']);
      return expect(targetFunction).toHaveBeenCalledWith('a', 'b', 'c');
    });
    return it('should create a new wrapper that fails when passed a non-Array', function() {
      var targetFunction, wrapperFunction;
      targetFunction = jasmine.createSpy('target function');
      wrapperFunction = Deft.util.Function.spread(targetFunction);
      expect(Ext.isFunction(wrapperFunction)).toBe(true);
      expect(function() {
        return wrapperFunction('value');
      }).toThrow(new Error('Error spreading passed Array over target function arguments: passed a non-Array.'));
      return expect(targetFunction).not.toHaveBeenCalled();
    });
  });
});
