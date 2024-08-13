import './CurrentEmployees.scss';
import DataTable from "../../components/DataTable/DataTable.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

export default function CurrentEmployees() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <DataTable />
            </main>
        </>
    )
}