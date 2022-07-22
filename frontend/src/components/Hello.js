function Hello(props){
    console.log('Hello',props);
    let user = props.user;
    let isAdmin = props.isAdmin;
    return (
        <div>
            Hello Component
            <br/>
            {user.name}
            <br/>
            {isAdmin?"Admin":"User"}
            <h3>Children</h3>
            {props.children}
        </div>
    );
}
export  default Hello;