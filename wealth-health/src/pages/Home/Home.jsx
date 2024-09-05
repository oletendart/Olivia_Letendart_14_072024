import Navbar from '../../components/Navbar/Navbar.jsx';
import './Home.scss';
import InputForm from "../../components/InputForm/InputForm.jsx";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu.jsx";
import dataState from '../../data/dataState.json';
import dataDepartment from '../../data/dataDepartment.json';


export default function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <form onSubmit={(e) => e.preventDefault()}>
                    <h1>Create employee</h1>
                    <InputForm htmlFor="firstName"
                        text="First Name :"
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                    />
                    <InputForm htmlFor="lastName"
                        text="Last Name :"
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                    />
                    {/*   mettre input birth date ici (composant correspondant) */}
                    {/*   mettre input start date ici (composant correspondant) */}
                    <InputForm htmlFor="street"
                               text="Street :"
                               type="text"
                               id="street"
                               name="street"
                               required
                    />
                    <InputForm htmlFor="city"
                               text="City :"
                               type="text"
                               id="city"
                               name="city"
                               required
                    />
                        <InputForm htmlFor="zipCode"
                                   text="Zip Code :"
                                   type="number"
                                   id="zipCode"
                                   name="zipCode"
                                   required
                        />
                    {/* dropdown menu pour les states */}
                        <DropdownMenu htmlFor="dropdownMenuState"
                                      text="State :"
                                      id="dropdownMenuState"
                                      item={dataState}
                        />
                    {/* dropdown menu pour les department */}
                    <DropdownMenu htmlFor="dropdownMenuDepartment"
                        id="dropdownMenuDepartment"
                        text="Department :"
                        item={dataDepartment}
                    />
                    <button type="submit">Save</button>
                </form>
            </main>
        </>
    )
}