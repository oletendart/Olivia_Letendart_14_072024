import Navbar from '../../components/Navbar/Navbar.jsx';
import './Home.scss';
import DataTable from "../../components/DataTable/DataTable.jsx";
import DateSelection from "../../components/DateSelection/DateSelection.jsx";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu.jsx";
import ModalWindow from "../../components/ModalWindow/ModalWindow.jsx";

export default function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <DataTable />
                <DateSelection />
                <DropdownMenu />
                <ModalWindow />
            </main>
        </>
    )
}