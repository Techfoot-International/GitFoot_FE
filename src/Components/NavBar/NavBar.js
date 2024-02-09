import "./NavBar.css"
import wolf from "./wolf2.png"
function NavBar(){
    return <nav>
            <div className="div-grid">
                <div className="grid-item grid-logo">
                    <div id="box">
                        <img src={wolf}/>
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