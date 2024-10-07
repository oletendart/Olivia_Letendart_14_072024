import './DataTable.scss';
import DataTable from 'react-data-table-component';
import { useSelector} from "react-redux";

export default function DataTableComponent() {
    const employeeData = useSelector(state => state.storeData.value)

    const columns = [
        {
            name: 'First Name',
            selector: row => row.firstName,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
        },
        {
            name: 'Street',
            selector: row => row.street,
        },
        {
            name: 'City',
            selector: row => row.city,
        },
        {
            name: 'Zip code',
            selector: row => row.zipCode,
        },
        {
            name: 'State',
            selector: row => row.state,
        },
        {
            name: 'Department',
            selector: row => row.department,
        },
        {
            name: 'Birthdate',
            selector: row => row.birthDate,
        },
        {
            name: 'Start Date',
            selector: row => row.startDate[0] + ' to ' + row.startDate[1],
        },
    ];

    return (
        <>
            <DataTable
                columns={columns}
                data={employeeData}
                className="dataTable"
            />
        </>
    )
}