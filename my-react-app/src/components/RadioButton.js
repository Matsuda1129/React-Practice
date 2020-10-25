import React from 'react'

const RadioButton = (props) => {
  return (
    <div>
      {props.radio.map((r) => (
        <label id="target">
          <input
            type="radio"
            checked={r.checked}
            onChange={() => props.handleRadioClick(r)}
          />{r.value}
        </label>
      ))}
    </div>
  )
}

export default RadioButton