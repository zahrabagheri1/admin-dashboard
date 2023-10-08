import data from "./Data/DATA.json"
import './App.css'
import Table from "./Components/Table"

const getHeading = () =>{
  return Object.keys(data[0])
}
function App() {

  return (
    <Table theadData={getHeading()} tbodyData={data}/>
  )
}

export default App
