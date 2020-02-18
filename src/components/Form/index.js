import  React from "react";
import Simbolo from "../../assets/simbolo.png"
import './styles.css'

import Button from "../Button";
import Input from "../Input";

function Form(){
    return(
        <form action="submit" className="form-default">
            <img src={Simbolo} alt="Simbolo Linx" className="simbolo-form"/>
            <Input placeHolder="Usuário"/>
            <Input placeHolder="Senha" type="password"/>
            <div className="container-options">
                <a href="#" className="link">Esqueceu sua senha?</a>
                <div className="container-remember">
                    <input type="checkbox" className="chkRemember" name="rememberme" id="rememberme"/>
                    <label className="link">Mantenha-me conectado</label>
                </div>
            </div>
            <Button buttonText="Entrar"/>
        </form> 
    );
}

export default Form;