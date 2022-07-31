//import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";
import React from "react";
import Welcome from "./class_component/Welcome";
import AcceptCom from "./components/AcceptCom";
import Counter from "./class_component/Counter";
import ApiLoader from "./class_component/ApiLoader";
import Greeting from "./class_component/Greeting";
import EventComponent from "./class_component/EventComponent";
import Loader from "./class_component/Loader";
import ListItem from "./class_component/ListItem";
import FormDemo from "./form/FormDemo";
import BasicForm from "./formik/BasicForm";
import YupForm from "./formik/YupForm";
import Tab from "./tab/Tab";
import FragmentDemo from "./tab/FragmentDemo";
import FocusDemo from "./FocusDemo";
import LazyDemo from "./lazy/LazyDemo";
import UpdateContext from "./context/UpdateContext";
function App() {
    let user = {
        name : "Hein",
        age : 23
    };
    let WelcomeCom = <Welcome text={"Welcome to React"}/>;
    let data = ["Orange","Apple","Banana"];
    return (
        <div className="App">
            {/*<Hello user = {user}*/}
            {/*        isAdmin = {true}>*/}
            {/*    <div>Hello from the children</div>*/}
            {/*</Hello>*/}
            {/*{WelcomeCom}*/}
            {/*<AcceptCom child={WelcomeCom}/>*/}
            {/*<Counter inc={2}/>*/}
            {/*/!*<ApiLoader/>*!/*/}
            {/*<Greeting isAdmin={true}/>*/}
            {/*<EventComponent/>*/}
            {/*<Loader data={"Data"}/>*/}
            {/*<ListItem data={data}/>*/}
            {/*<FormDemo/>*/}
            {/*<BasicForm/>*/}
            {/*<YupForm/>*/}
            {/*<Tab headers={data}>*/}
            {/*    <div>Tab Body 1</div>*/}
            {/*    <div>Tab Body 2</div>*/}
            {/*    <div>Tab Body 3</div>*/}
            {/*</Tab>*/}
            {/*<FragmentDemo/>*/}
            {/*<FocusDemo/>*/}
            {/*<LazyDemo/>*/}
            <UpdateContext/>
        </div>

    );
}


export default App;
