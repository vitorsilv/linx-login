import React from "react";
import "./styles.css";

const Input = ({placeHolder = "Padrão", type = "text"}) => (
    <input type={type} className="input-default" placeholder={placeHolder} required/>
)

export default Input;