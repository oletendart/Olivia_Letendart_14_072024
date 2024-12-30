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
                {/* Barre de recherche */}
                <Search data={employeeData} onSearchResults={handleSearchResults} />
                
                {/* Affichage conditionnel */}
                {filteredData.length === 0 ? (
                    <p className="error-message">No data found for the search term.</p>
                ) : (
                    <>
                        {/* Tableau des données */}
                        <DataTable
                            columns={columns}
                            data={currentPageData}
                            className="dataTable"
                        />
                        
                        {/* Pagination */}
                        <Pagination
                            itemsPerPage={10}
                            data={filteredData} // Utilisation des données filtrées
                            onPageChange={handlePageChange} // Pass the memoized function here
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
