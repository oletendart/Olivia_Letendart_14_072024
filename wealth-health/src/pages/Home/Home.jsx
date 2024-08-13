import Navbar from '../../components/Navbar/Navbar.jsx';
import './Home.scss';
import InputForm from "../../components/InputForm/InputForm.jsx";


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
                        {/* mettre ici input state */}
                    {/* mettre ici input Department */}
                    <button type="submit">Save</button>
                </form>
            </main>
        </>
    )
}