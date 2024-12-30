import './DataTable.scss';
import DataTable from 'react-data-table-component';
import { useSelector } from "react-redux";
import { useState, useCallback } from 'react';
import { Pagination } from '../Pagination/Pagination';
import { Search } from '../Search/Search';

export default function DataTableComponent() {
    const employeeData = useSelector(state => state.storeData.value);
    const [filteredData, setFilteredData] = useState(employeeData); 
    const [currentPageData, setCurrentPageData] = useState([]);

    const handlePageChange = useCallback((data) => {
        setCurrentPageData(data);
    }, []); 

    const handleSearchResults = useCallback((results) => {
        setFilteredData(results); 
    }, []);

    const columns = [
        {
            name: 'First Name',
            selector: row => row.firstName,
            sortable: true, 
            cell: row => <div title={row.firstName}>{row.firstName}</div>
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
            sortable: true,
            cell: row => <div title={row.lastName}>{row.lastName}</div>
        },
        {
            name: 'Street',
            selector: row => row.street,
            sortable: true,
            cell: row => <div title={row.street}>{row.street}</div>
        },
        {
            name: 'City',
            selector: row => row.city,
            sortable: true,
            cell: row => <div title={row.city}>{row.city}</div>
        },
        {
            name: 'Zip code',
            selector: row => row.zipCode,
            sortable: true,
            cell: row => <div title={row.zipCode}>{row.zipCode}</div>
        },
        {
            name: 'State',
            selector: row => row.state,
            sortable: true,
            cell: row => <div title={row.state}>{row.state}</div>
        },
        {
            name: 'Department',
            selector: row => row.department,
            sortable: true,
            cell: row => <div title={row.department}>{row.department}</div>
        },
        {
            name: 'Birthdate',
            selector: row => row.birthDate,
            sortable: true,
            cell: row => <div title={row.birthDate}>{row.birthDate}</div>
        },
        {
            name: 'Start Date',
            selector: row => row.startDate[0] + ' to ' + row.startDate[1],
            sortable: true,
            cell: row => <div title={row.startDate[0] + ' to ' + row.startDate[1]}>
                {row.startDate[0] + ' to ' + row.startDate[1]}
            </div>,
        },
    ];

    return (
        <>
        {employeeData.length >= 1 ? (
            <>
                <Search data={employeeData} onSearchResults={handleSearchResults} />
                
                {filteredData.length === 0 ? (
                    <p className="error-message">No data found for the search term.</p>
                ) : (
                    <>
                        <DataTable
                            columns={columns}
                            data={currentPageData}
                            className="dataTable"
                            defaultSortFieldId={1} 
                        />
                        
                        <Pagination
                            itemsPerPage={10}
                            data={filteredData} 
                            onPageChange={handlePageChange}
                        />
                    </>
                )}
            </>
        ) : (
            <p>No data yet inserted in the form</p>
        )}
    </>
    )
}
