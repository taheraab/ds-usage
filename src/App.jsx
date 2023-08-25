import { useState } from 'react'
import Chart from './Chart'
import './App.css'
import uiAmbossData from "./reports/ui-amboss-report.json";
import { Colors } from './constants'

const componentData = Object.keys(uiAmbossData).map(component => {
  return {
    name: component,
    instances: uiAmbossData[component].instances
  }
})

function getPropData(component) {
  return Object.keys(uiAmbossData[component].props).map(prop => {
    return {
      name: prop,
      instances: uiAmbossData[component].props[prop]
    }
  }) 
}

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBarClick = (index) => {
    setActiveIndex(index)
  };

  const component = componentData[activeIndex].name;

  return (
    <div class="app-content">
     <Chart title={`Component usage in ui-amboss`} data={componentData} height={2000} yAxisWidth={160} activeBar={activeIndex} onBarClick={handleBarClick}/>
     <Chart title={`Prop usage in ${component}`} data={getPropData(component)} color={Colors.GREEN} />
    </div>
  )
}

export default App
