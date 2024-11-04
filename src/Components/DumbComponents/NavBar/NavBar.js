import "./NavBar.css"
import { ReactComponent as  LoginIcon} from "../Login/login.svg"
import { ReactComponent as  SettingsIcon} from "../Settings/settings.svg"

function NavBar(){
    return <nav>
                <div className="flexBox_navBar">
                    <div className="flexItem_navBar logo_navBar">
                            
                    </div>

                    <div className="flexItem_navBar middleFlexItem_navBar">

                    </div>

                    <div className="flexItem_navBar settings_navBar">
                        <div className="subFlexItems_navBar">
                            <LoginIcon width="30px" height="30px" fill="white"/>
                        </div>
                        <div className="subFlexItems_navBar">
                            <SettingsIcon width="30px" height="30px" fill="white"/>
                        </div> 
                    </div>
                   
                </div>
            </nav>
}
export default NavBar;