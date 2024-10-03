import './DataTable.scss';
import DataTable from 'react-data-table-component';

export default function DataTableComponent() {
    const columns = [
        {
            name: 'First Name',
            selector: row => row.title,
        },
        {
            name: 'Last Name',
            selector: row => row.year,
        },
        {
            name: 'Street',
            selector: row => row.year,
        },
        {
            name: 'City',
            selector: row => row.year,
        },
        {
            name: 'Zip code',
            selector: row => row.year,
        },
        {
            name: 'State',
            selector: row => row.year,
        },
        {
            name: 'Department',
            selector: row => row.year,
        },
        {
            name: 'Birthdate',
            selector: row => row.year,
        },
        {
            name: 'Start Date',
            selector: row => row.year,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                className="dataTable"
            />
        </>
    )
}