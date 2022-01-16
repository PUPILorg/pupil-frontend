import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./AccountCard.css";
import {useNavigate} from "react-router-dom";

export default function AccountCard(){
    let navigate = useNavigate();

    return(
        <div
            className="account-card-container"
            onClick={() => {
                navigate("/account");
            }}
        >
            <FontAwesomeIcon icon="user-circle" size="2x" className="user-icon"/>
            <p className="account-card-text">Account</p>
        </div>
    )
}
