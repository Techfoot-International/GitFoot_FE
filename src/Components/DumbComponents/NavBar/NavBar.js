import "./NavBar.css"
//import logo from "./wolf2.png"
//import logo from "./logo.png"
//import logo from "./logo.svg"

function NavBar(){
    return <nav>
            <div className="div-grid">
                <div className="grid-item grid-logo">
                    <div id="box">
                        <img/>
                    </div>
                </div>
                <div className="grid-item"></div>
                <div className="div-flex2 grid-item">
                    <div className="flex2-item">
                        <a>Sign-In</a>
                    </div>
                    <div className="flex2-item">
                        <a>Sign-Up</a>
                    </div>
                </div>
            </div>
            </nav>
}
export default NavBar;