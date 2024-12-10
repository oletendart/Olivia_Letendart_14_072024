import Navbar from '../../components/Navbar/Navbar.jsx';
import './Home.scss';
import InputForm from "../../components/InputForm/InputForm.jsx";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu.jsx";
import dataState from '../../data/dataState.json';
import dataDepartment from '../../data/dataDepartment.json';
import DateSelection from "../../components/DateSelection/DateSelection.jsx";
import { useState } from 'react';
import DateRange from "../../components/DateRange/DateRange.jsx";
import ModalWindow from "../../components/ModalWindow/ModalWindow.jsx";
import {useDispatch} from "react-redux";
import {setValue} from "../../features/storeData.js";

export default function Home() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [state, setState] = useState(dataState[0]);
    const [department, setDepartment] = useState(dataDepartment[0]);
    const [birthDate, setBirthDate] = useState(new Date());
    const [startDate, setStartDate] = useState([null, null]);
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();

    const toggleModal = () => {
        setModal(!modal);
    }

    const retrieveData = () => {
        const employeeData = {
            firstName,
            lastName,
            street,
            city,
            zipCode,
            state,
            department,
            birthDate: birthDate.toLocaleDateString(),
            startDate: startDate.map(date => date?.toLocaleDateString() || null),
        }

        dispatch(setValue(employeeData));

        console.log("Data sent to Redux:", employeeData);
    }

    const resetData = () => {
        setFirstName('');
        setLastName('');
        setStreet('');
        setCity('');
        setZipCode('');
        setState(dataState[0]);
        setDepartment(dataDepartment[0]);
        setBirthDate(new Date());
        setStartDate([null, null]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!startDate[0] || !startDate[1]) {
            alert("Please select both start and end dates.");
            return;
        }

        retrieveData();

        toggleModal();

        resetData();


    };

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <h1>Create employee</h1>
                    <InputForm
                        htmlFor="firstName"
                        text="First Name :"
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <InputForm
                        htmlFor="lastName"
                        text="Last Name :"
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <div className="dateFlex">
                        <DateSelection
                            htmlFor="birthdate"
                            text="Birth Date :"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                        <DateRange
                            htmlFor="stardate"
                            text="Start Date :"
                            value={startDate}
                            onChange={setStartDate}
                        />
                    </div>
                    <InputForm
                        htmlFor="street"
                        text="Street :"
                        type="text"
                        id="street"
                        name="street"
                        required
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                    <InputForm
                        htmlFor="city"
                        text="City :"
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <InputForm
                        htmlFor="zipCode"
                        text="Zip Code :"
                        type="number"
                        id="zipCode"
                        name="zipCode"
                        required
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                    <div className="flexStateDepartment">
                        <DropdownMenu
                            htmlFor="dropdownMenuState"
                            text="State :"
                            id="dropdownMenuState"
                            item={dataState}
                            value={state}
                            onChange={(e) => {
                                setState(e.target.value);
                            }}
                        />

                        <DropdownMenu
                            htmlFor="dropdownMenuDepartment"
                            text="Department :"
                            id="dropdownMenuDepartment"
                            item={dataDepartment}
                            value={department}
                            onChange={(e) => {
                                setDepartment(e.target.value);
                            }}
                        />
                    </div>
                    <button type="submit">Save</button>
                </form>
                {modal && (
                    <ModalWindow toggleModal={toggleModal} />
                )}
            </main>
        </>
    );
}
