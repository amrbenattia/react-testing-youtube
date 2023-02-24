"use strict";
exports.__esModule = true;
var CounterTwo = function (_a) {
    var count = _a.count, handleIncrement = _a.handleIncrement, handleDecrement = _a.handleDecrement;
    return (<>
      <div>Counter Two</div>
      <p>{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </>);
};
exports["default"] = CounterTwo;
