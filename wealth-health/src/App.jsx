import './App.scss'
import DataTable from "./components/DataTable/DataTable.jsx";
import DateSelection from "./components/DateSelection/DateSelection.jsx";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu.jsx";
import ModalWindow from "./components/ModalWindow/ModalWindow.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {

  return (
    <>
        <Navbar />
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
