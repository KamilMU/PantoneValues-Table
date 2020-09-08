import React from 'react';
import Checkboxes from './components/Checkboxes'
import Table from './components/Table.jsx'
import './App.css';
import useLocalStorage from './hook'
import { useState, useEffect } from 'react';


function App() {
  const [colors, fetchColorsArray] = useState([])
  const [idCheckbox, handleIdCheckbox] = useLocalStorage('idCheckbox', true)
  const [nameCheckbox, handleNameCheckbox] = useLocalStorage('nameCheckbox', true)
  const [yearCheckbox, handleYearCheckbox] = useLocalStorage('yearCheckbox', true)
  const [colorCheckbox, handleColorCheckbox] = useLocalStorage('colorCheckbox', true)
  const [pantoneValueCheckbox, handlePantoneValueCheckbox] = useLocalStorage('pantoneValueCheckbox', true)

  useEffect(() => {
    async function loadData() {
      const response = await fetch('https://reqres.in/api/unknown?per_page=12')
      const data = await response.json()
      fetchColorsArray(data.data)
    }

    loadData()
  }, [])

  function reset() {
    handleIdCheckbox(true)
    handleNameCheckbox(true)
    handleYearCheckbox(true)
    handleColorCheckbox(true)
    handlePantoneValueCheckbox(true)
  }

  return (
    <div className="app">
      <div className="content">
        <header className="header">
          <div className="header__tittle">Pantone colors</div>
          <div className="header__reset" onClick={reset}>
            <img
              alt=""
              className="image"
              src={require('./img/Icon.png')}
            />
            <span>Reset</span>
          </div>
        </header>
        <Checkboxes
          checkedId={idCheckbox}
          checkedName={nameCheckbox}
          checkedYear={yearCheckbox}
          checkedColor={colorCheckbox}
          checkedPantoneValue={pantoneValueCheckbox}
          handleIdCheckbox={handleIdCheckbox}
          handleNameCheckbox={handleNameCheckbox}
          handleYearCheckbox={handleYearCheckbox}
          handleColorCheckbox={handleColorCheckbox}
          handlePantoneValueCheckbox={handlePantoneValueCheckbox}
        />
        <Table
          colors={colors}
          checkedId={idCheckbox}
          checkedName={nameCheckbox}
          checkedYear={yearCheckbox}
          checkedColor={colorCheckbox}
          checkedPantoneValue={pantoneValueCheckbox}
        />
      </div>
    </div>
  );
}

export default App;
