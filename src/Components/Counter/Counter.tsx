import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(0)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>

      <input
        type="number"
        value={amount}
        onChange={(event) => setAmount(parseInt(event.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>

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
        <input id="upload-file" type="file" />
      </div>
    </>
  )
}

export default Counter
