import {useContext} from "react";
import {AllContext} from "../App";
import {getUser} from "../utils/apiManager";
import "../styles/style.css";


export default function LoginScreen(){
    let username;
    let password;
    let [context, setContext] = useContext(AllContext);

    const loginUser = async () => {
        let user = {name: username.value, password: password.value};

        let userResponse = await getUser(user);

        if (userResponse.status === 200) {
            let userJSON = await userResponse.json();
            alert("Welcome Back " + userJSON.name + "!")
            context.loggedInUser = userJSON;
            context.currentScreen = "mainScreen";
            setContext({...context})
        } else {
            alert("Invalid User!")
        }
    }

    return(
        <>
            <div className="header"><h1 className="headerText">Trinkbrunnen</h1></div>
            <div className="container">

                <div className="image-container">
                    <img src={require("../images/trinkbrunnen.png")} />
                </div>

                <form>
                    <label htmlFor="loginName">Username</label>
                    <input type="text" ref={e => username = e} placeholder="Enter Username" id="loginName" required/>
                    <label htmlFor="loginPassword">Password</label>
                    <input type="password" ref={e => password = e} placeholder="Enter Password" id="loginPassword" required/>
                    <button type="button" id="loginBtn" onClick={loginUser} >Login</button>
                </form>
            </div>
        </>
    );
}