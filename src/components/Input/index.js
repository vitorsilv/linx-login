import React from "react";
import "./styles.css";

const Input = ({placeHolder = "Padrão"}) => (
    <input type="text" className="input-default" placeholder={placeHolder} required/>
)

export default Input;