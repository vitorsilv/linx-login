import React from "react";
import "./styles.css";

const Button = ({buttonText="Padrão"}) =>(
  <button type="submit" className="button-default">{buttonText}</button>
);

export default Button
