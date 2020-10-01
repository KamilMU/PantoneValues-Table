import React from 'react';
import Header from './components/Header.jsx';
import Checkboxes from './components/Checkboxes';
import Table from './components/Table.jsx';
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
      fetchColorsArray(data.data.map(value => {
        return {
          ...value,
          name: value.name.charAt(0).toUpperCase() + value.name.slice(1)
        }
      }))
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
        <Header reset={reset} />
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
