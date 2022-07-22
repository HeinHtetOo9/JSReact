import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";
import React from "react";
import Welcome from "./class_component/Welcome";
import AcceptCom from "./components/AcceptCom";
import Counter from "./class_component/Counter";
import ApiLoader from "./class_component/ApiLoader";
import Greeting from "./class_component/Greeting";
import EventComponent from "./class_component/EventComponent";
function App() {
    let user = {
        name : "Hein",
        age : 23
    };
    let WelcomeCom = <Welcome text={"Welcome to React"}/>;
    let data = ["Orange","Apple","Banana"];
    return (
        <div className="App">
            <Hello user = {user}
                    isAdmin = {true}>
                <div>Hello from the children</div>
            </Hello>
            {WelcomeCom}
            <AcceptCom child={WelcomeCom}/>
            <Counter inc={2}/>
            {/*<ApiLoader/>*/}
            <Greeting isAdmin={true}/>
            <EventComponent/>
        </div>

    );
}


export default App;
