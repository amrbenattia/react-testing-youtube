"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Counter = function () {
    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
    var _b = (0, react_1.useState)(0), amount = _b[0], setAmount = _b[1];
    return (<>
      <h1>{count}</h1>
      <button onClick={function () { return setCount(function (prevCount) { return prevCount + 1; }); }}>
        Increment
      </button>

      <input type="number" value={amount} onChange={function (event) { return setAmount(parseInt(event.target.value)); }}/>
      <button onClick={function () { return setCount(amount); }}>Set</button>

      <div>
        <label htmlFor="job-location">Job location</label>
        <select multiple id="job-location">
          <option value="">Select a country</option>
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
          <option value="CA">Canada</option>
          <option value="IN">India</option>
          <option value="AU">Australia</option>
        </select>
      </div>
      <div>
        <label htmlFor="upload-file">Upload File</label>
        <input id="upload-file" type="file"/>
      </div>
    </>);
};
exports["default"] = Counter;
