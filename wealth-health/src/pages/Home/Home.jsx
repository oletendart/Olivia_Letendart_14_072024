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

                </form>
            </main>
        </>
    )
}