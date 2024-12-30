import './DataTable.scss';
import DataTable from 'react-data-table-component';
import { useSelector} from "react-redux";
import { useState } from 'react';
import { Pagination } from '../Pagination/Pagination';

export default function DataTableComponent() {
    const employeeData = useSelector(state => state.storeData.value);
    const [currentPageData, setCurrentPageData] = useState([]); 

    const columns = [
        {
            name: 'First Name',
            selector: row => row.firstName,
            cell: row => <div title={row.firstName}>{row.firstName}</div>
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
            cell: row => <div title={row.lastName}>{row.lastName}</div>
        },
        {
            name: 'Street',
            selector: row => row.street,
            cell: row => <div title={row.street}>{row.street}</div>
        },
        {
            name: 'City',
            selector: row => row.city,
            cell: row => <div title={row.city}>{row.city}</div>
        },
        {
            name: 'Zip code',
            selector: row => row.zipCode,
            cell: row => <div title={row.zipCode}>{row.zipCode}</div>
        },
        {
            name: 'State',
            selector: row => row.state,
            cell: row => <div title={row.state}>{row.state}</div>
        },
        {
            name: 'Department',
            selector: row => row.department,
            cell: row => <div title={row.department}>{row.department}</div>
        },
        {
            name: 'Birthdate',
            selector: row => row.birthDate,
            cell: row => <div title={row.birthDate}>{row.birthDate}</div>
        },
        {
            name: 'Start Date',
            selector: row => row.startDate[0] + ' to ' + row.startDate[1],
            cell: row => <div title={row.startDate[0] + ' to ' + row.startDate[1]}>
                {row.startDate[0] + ' to ' + row.startDate[1]}
            </div>,
        },
    ];

    return (
        <>
            {employeeData.length >= 1 ? (
                 <>
                 <DataTable
                   columns={columns}
                   data={currentPageData}
                   className="dataTable"
                 />
                 <Pagination
                   itemsPerPage={10}
                   data={employeeData}
                   onPageChange={(data) => setCurrentPageData(data)}
                 />
               </>
            ) : (
                <p>No data yet inserted in the form</p>
            )}
        </>
    )
}