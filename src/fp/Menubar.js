import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import { UserContext } from "./UserContext"
import logo from "./logo.png"
import { Typography } from "@material-ui/core";

const Menubar = () => {
    const [user, setUser] = useContext(UserContext);
    const history = useHistory()
    const handleLogout = () => {
        setUser("belum");
        history.push("/");
    }
    return (
        <>
            <header>
                <img className="logo" id="logo" src={logo} width="200px" alt="logo" height="10px" />
                <nav>
                    <ul>
                        <Typography>
                            {
                                user === "belum" && <>
                                    <li class="home"><Link to="/">Home</Link></li>
                                    <li class="home"><Link to="/login">Masuk</Link></li></>
                            }
                            {
                                user === "sudah" && <>
                                    <li class="navbar-menus"><Link to="/">Home</Link></li>
                                    <li class="navbar-menus"><Link to="/game">Games</Link></li>
                                    <li class="navbar-menus"><Link to="/movie">Movies</Link></li>
                                    <li class="navbar-menus"><Link to="/table">Table</Link></li>
                                    <li ><a class="navbar-menus" onClick={handleLogout}>Logout</a></li></>
                            }
                        </Typography>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Menubar