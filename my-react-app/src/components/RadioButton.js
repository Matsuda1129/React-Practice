import React from 'react'

const RadioButton = (props) => {
  const radio = props.radio.map((r) => {
    return(
    <label id="target">
      <input
      type="radio"
      checked={r.checked}
      onChange={() => props.handleRadioClick(r)}
      />{r.value}
    </label>

    )
    });
    return(
      <div>
        {radio}
      </div>
    )
}

export default RadioButton