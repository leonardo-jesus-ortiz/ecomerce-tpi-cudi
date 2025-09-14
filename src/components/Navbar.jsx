import { Link } from "react-router-dom";
import NavbarBase from "./NavbarBase";
import Dashboard from "./dashboard";
import AuthStatus from "./AuthStatus";

const Navbar = () => {
    const user = true
    const cart = ['PC', 'Teclado', 'Mouse']
    const isAdmin = true

    return (
        <nav className="flex flex-wrap items-center gap-4">
            <NavbarBase user={user} cart={cart} />
            <Dashboard isAdmin={isAdmin} />
            <AuthStatus user={user}/>
        </nav>
    );
}

export default Navbar;