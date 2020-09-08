import React from 'react'

function Checkboxes({ checkedId, checkedName, checkedYear, checkedColor, checkedPantoneValue, handleIdCheckbox, handleNameCheckbox, handleYearCheckbox, handleColorCheckbox, handlePantoneValueCheckbox }) {
  return (
    <div className="checkboxes">
      {checkedId &&
        <div className="checkboxes__checkbox checkbox-id" >
          <input
            type="checkbox"
            name="idCheckbox"
            onClick={e => handleIdCheckbox(e.target.checked)}
            defaultChecked="true"
          />
          <span>ID</span>
        </div>}
      {checkedName &&
        <div className="checkboxes__checkbox checkbox-name">
          <input
            type="checkbox"
            name="nameCheckbox"
            onClick={e => handleNameCheckbox(e.target.checked)}
            defaultChecked="true"
          />
          <span>NAME</span>
        </div>}
      {checkedYear &&
        <div className="checkboxes__checkbox checkbox-year">
          <input
            type="checkbox"
            name="yearCheckbox"
            onClick={e => handleYearCheckbox(e.target.checked)}
            defaultChecked="true"
          />
          <span>YEAR</span>
        </div>}
      {checkedColor &&
        <div className="checkboxes__checkbox checkbox-color">
          <input
            type="checkbox"
            name="colorCheckbox"
            onClick={e => handleColorCheckbox(e.target.checked)}
            defaultChecked="true"
          />
          <span>COLOR</span>
        </div>}
      {checkedPantoneValue &&
        <div className="checkboxes__checkbox checkbox-value">
          <input
            type="checkbox"
            name="pantoneValueCheckbox"
            onClick={e => handlePantoneValueCheckbox(e.target.checked)}
            defaultChecked="true"
          />
          <span>Pantone value</span>
        </div>}
    </div>
  )
}

export default Checkboxes