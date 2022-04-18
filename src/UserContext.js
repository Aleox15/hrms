import React from "react";

const UserContext = React.createContext({
    id:null,
    userAuth: null,
    setUserAuth : ()=>{},
    token : null,
    setUserAuth : ()=>{},
    // setUser: () => {}
});

export default UserContext;