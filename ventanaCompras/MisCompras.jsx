import { Button, ButtonBase } from "@mui/material";
import React, { useState } from 'react';
import axios from 'axios'
import "./MisCompras.css"

function MisCompras(props) {
    const nombreUsuario = window.localStorage.getItem("Usuario")

    const [comprasData, setCompras] = useState([]);

    const atrasBtn = () => {
        window.open("../Legendary.html", "_self");
    }

    const obtenerListaCompras = async () => {
        try {
            const response = await axios.get("http://localhost:4567/compras", { params: { nombreUsuario: nombreUsuario } });
            console.log(response.data)
            console.log(nombreUsuario)
            setCompras(response.data);
        } catch (error) {
            console.error('Error al obtener la imagen del coche:', error);
        }
    };

    obtenerListaCompras()

    return (
        <>
            <header className="header">
                <button className='back_button' onClick={atrasBtn}>Atrás</button>
                <img src="../Imagenes/Legendary.webp" alt="" className='header_banner_img' />
                <h3 className='header_banner_title'>MIS COMPRAS</h3>
            </header>

            <div className='compras_container'>
                {comprasData.map((elemento) => (
                    <div key={elemento.nombreUsuario} className="containerInfo">
                        <h3 key={elemento.nombreAuto} className="infoStyle">Nombre Automovil: {elemento.nombreAuto}</h3>
                        <h3 key={elemento.color} className="infoStyle">Color: {elemento.color}</h3>
                        <h3 key={elemento.precio} className="infoStyle">Precio: {elemento.precio}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MisCompras;