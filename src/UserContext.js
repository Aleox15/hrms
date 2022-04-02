import React from "react";

const UserContext = React.createContext({
    id:null,
    username: null,
    setUsername : ()=>{}
    // setUser: () => {}
});

export default UserContext;