import React, {useState, useEffect} from "react";
import "./index.css";
import API from "../../utils/API";

function AllAccounts(){
    const [ accounts, setAccount ] = useState("");
    useEffect(() => {
        let id = "0";
        API.getUser(id)
        .then(res => {
            console.log(res)
            setAccount()
        })
    }, [])
    return (
        <div>

        </div>
    )
};

export default AllAccounts;