import {useContext} from "react";
import {AllContext} from "../App";
import LocationController from "../Views/LocationController"
import LocationComponent from "./LocationComponent";
import MapComponent from "./MapComponent";

export default function MainScreen(){
    let [context, setContext] = useContext(AllContext);

    const logoutClicked = () => {
        setContext({...context, currentScreen: "loginScreen", loggedInUser: null})
    }

    //TODO map stuff einbinden
    return (
        <>
            <div className="header"><h1 className="headerText">Trinkbrunnen</h1></div>
            <div className="topContainer">
                <div className="logoutBox">
                    <button id="logoutBtn" onClick={logoutClicked}>Logout</button>
                </div>

                    <LocationController/>

            </div>
            <div className="mapContainer">



                <div className="mapBox">
                    <LocationComponent/>
                    <MapComponent/>
                </div>
            </div>
        </>
    );


}