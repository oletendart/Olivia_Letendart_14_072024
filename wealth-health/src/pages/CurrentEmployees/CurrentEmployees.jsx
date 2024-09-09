import './CurrentEmployees.scss';
import Navbar from "../../components/Navbar/Navbar.jsx";
import DataTableComponent from "../../components/DataTable/DataTable.jsx";

export default function CurrentEmployees() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <DataTableComponent />
            </main>
        </>
    )
}