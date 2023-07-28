/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// fibonacci implemented imperative
// using an array with the numbers 0, 1
// while loop that checks if the numbers length
// is smaller than the numbers
// if it is push the numbers array length - 2 plus the sum of array length -1
// since fibonacci returns the is the sum of the previous two numbers
// it will return in the array the elements

function imperativeFibonacci(num) {
  const numbers = [0, 1];
  while (numbers.length < num) {
    numbers.push(numbers[numbers.length - 2] + numbers[numbers.length - 1]);
  }
  return numbers;
}
console.log(imperativeFibonacci(8));
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLG1CQUFtQkEsQ0FBQ0MsR0FBRyxFQUFFO0VBQ2hDLE1BQU1DLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFFdEIsT0FBT0EsT0FBTyxDQUFDQyxNQUFNLEdBQUdGLEdBQUcsRUFBRTtJQUMzQkMsT0FBTyxDQUFDRSxJQUFJLENBQUNGLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUdELE9BQU8sQ0FBQ0EsT0FBTyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDekU7RUFDQSxPQUFPRCxPQUFPO0FBQ2hCO0FBRUFHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWJvbmFjY2kgaW1wbGVtZW50ZWQgaW1wZXJhdGl2ZVxyXG4vLyB1c2luZyBhbiBhcnJheSB3aXRoIHRoZSBudW1iZXJzIDAsIDFcclxuLy8gd2hpbGUgbG9vcCB0aGF0IGNoZWNrcyBpZiB0aGUgbnVtYmVycyBsZW5ndGhcclxuLy8gaXMgc21hbGxlciB0aGFuIHRoZSBudW1iZXJzXHJcbi8vIGlmIGl0IGlzIHB1c2ggdGhlIG51bWJlcnMgYXJyYXkgbGVuZ3RoIC0gMiBwbHVzIHRoZSBzdW0gb2YgYXJyYXkgbGVuZ3RoIC0xXHJcbi8vIHNpbmNlIGZpYm9uYWNjaSByZXR1cm5zIHRoZSBpcyB0aGUgc3VtIG9mIHRoZSBwcmV2aW91cyB0d28gbnVtYmVyc1xyXG4vLyBpdCB3aWxsIHJldHVybiBpbiB0aGUgYXJyYXkgdGhlIGVsZW1lbnRzXHJcblxyXG5mdW5jdGlvbiBpbXBlcmF0aXZlRmlib25hY2NpKG51bSkge1xyXG4gIGNvbnN0IG51bWJlcnMgPSBbMCwgMV07XHJcblxyXG4gIHdoaWxlIChudW1iZXJzLmxlbmd0aCA8IG51bSkge1xyXG4gICAgbnVtYmVycy5wdXNoKG51bWJlcnNbbnVtYmVycy5sZW5ndGggLSAyXSArIG51bWJlcnNbbnVtYmVycy5sZW5ndGggLSAxXSk7XHJcbiAgfVxyXG4gIHJldHVybiBudW1iZXJzO1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyhpbXBlcmF0aXZlRmlib25hY2NpKDgpKTtcclxuIl0sIm5hbWVzIjpbImltcGVyYXRpdmVGaWJvbmFjY2kiLCJudW0iLCJudW1iZXJzIiwibGVuZ3RoIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9