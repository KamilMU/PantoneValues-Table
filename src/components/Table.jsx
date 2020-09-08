import React from 'react'

function Table({ colors, checkedId, checkedName, checkedYear, checkedColor, checkedPantoneValue }) {
  return (
    <table className="list">
      <tbody>
        {colors.map(color =>
          <tr className="list__item" key={color.id}>
            {checkedId && <td className="item-id">{color.id}</td>}
            {checkedName && <td className="item-name">{color.name}</td>}
            {checkedYear && <td className="item-year">{color.year}</td>}
            {checkedColor && <td className="item-color"><div style={{ backgroundColor: `${color.color}`, width: '16px', height: '16px' }}></div><span>{color.color}</span></td>}
            {checkedPantoneValue && <td className="item-value">{color.pantone_value}</td>}
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table;