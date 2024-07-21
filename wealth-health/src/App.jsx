import './App.scss'
import DataTable from "./components/DataTable/DataTable.jsx";
import DateSelection from "./components/DateSelection/DateSelection.jsx";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu.jsx";
import ModalWindow from "./components/ModalWindow/ModalWindow.jsx";

function App() {

  return (
    <>
      <div>
          <DataTable />
          <DateSelection />
          <DropdownMenu />
          <ModalWindow />
      </div>
    </>
  )
}

export default App
