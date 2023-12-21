// import {Button, TextField, Box} from "@mui/material";
import axios from 'axios'
// import './Login.css'
import './Legendary.css'
import { useEffect, useState } from 'react';
import PantallaCoche from '../Compra_Coche/PantallaCoche';
function Legendary() {

    const [autosData, setAutosData] = useState([]);
    const [motocicletaData, setMotocicletaData] = useState([]);

    //? SE OBTIENE EL VALOR DEL LOCALSTORAGE QUE ALMACENA EL USUARIO QUE INICIÓ LA SESIÓN
    const usuarioSesion = window.localStorage.getItem('Usuario');
    const botonAutos = document.querySelectorAll(".products_category_button");
    const carsContainer = document.querySelector(".product_cars_container");
    const productsCard = document.querySelectorAll(".product_card");

    //!PETICIÓN PARA OBTENER LOS AUTOS DEL SERVIDOR
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:4567/Autos");
                // console.log(res.data);
                setAutosData(res.data);
                // console.log("Autos data: ",autosData);
            } catch (error) {
                throw error;
            }
        };
        fetchData();
    }, []);

    //!PETICIÓN PARA OBTENER LAS MOTOCICLETAS DEL SERVIDOR
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:4567/Motocicletas");
                // console.log(res.data);
                setMotocicletaData(res.data);
                // console.log("Autos data: ",autosData);
            } catch (error) {
                throw error;
            }
        };
        fetchData();
    }, []);

    //!FUNCIÓN EJECUTADA AL DARLE CLICK EN BOTON DE CERRAR SESIÓN
    const cerrarSesion = () => {
        window.open("../index.html", "_self");
    }
    //!FUNCIÓN PARA ABRIR VENTANA DEL PERFIL DEL USUARIO
    const miPerfil = () => {
        window.open("../MiPerfil.html", "_self");
    }

    const verCompras = () => {
        window.open("../misCompras.html", "_self");
    }

    return (
        <>
            <div className='header'>
                <div className='header_banner'>
                    <img src="../Imagenes/Legendary.webp" alt="" className='header_banner_img' />
                    <h3 className='header_banner_title'>CHOOSE FROM OUR TOP TO END</h3>
                    <h3 className='header_banner_subtitle'>HIGH PERFORMANCE CARS AT GREAT PRICES</h3>

                </div>
                <div className='header_logout'>
                    <button className='header_logout_button' onClick={miPerfil}>Mi Perfil</button>
                    <button className='header_logout_button' onClick={verCompras}>Mis Compras</button>
                    <button className='header_logout_button' onClick={cerrarSesion}>Cerrar Sesion</button>
                </div>
            </div>

            {/*CONTENEDOR DE LOS PRODUCTOS*/}
            <div className='products_container'>
                <div className='products_category'>
                    <button className='products_category_button products_category_button_noactive' >CARS</button>
                    <button className='products_category_button products_category_button_noactive'>MOTORCYCLES</button>
                </div>

                {
                    //!BUCLE QUE AYUDARÁ A RECORRER LOS BOTONES DEL ARAY
                }
                {
                    botonAutos.forEach((boton) => {
                        boton.addEventListener("click", (e) => {
                            if (boton.innerHTML == "MOTORCYCLES") {
                                // console.log("car");
                                carsContainer.style.zIndex = "-1";
                            }
                            if (boton.innerHTML == "CARS") {
                                // console.log("car");
                                carsContainer.style.zIndex = "1";
                            }
                        })
                    })
                }

                {
                    productsCard.forEach((container) => {
                        switch (container.querySelector(".product_card_title").innerHTML) {
                            case "Devestre Eight": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Devestre Eight")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Dewbauchee Vagner": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Dewbauchee Vagner")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Entity XF": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Entity XF")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Grotti Itali GTO": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Grotti Itali GTO")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Grotti Itali RSX": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Grotti Itali RSX")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Grotti X80 Proto": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Grotti X80 Proto")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Oceliot Pariah": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Oceliot Pariah")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Ocelot Virtue": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Ocelot Virtue")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Overflod Autarch": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Overflod Autarch")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Pegassi Torero XO": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Pegassi Torero XO")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Pegassi Zentorno": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Pegassi Zentorno")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Rapid FMJ": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Rapid FMJ")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "CarbonRS": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "CarbonRS")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Lectro": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Lectro")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Oppresor": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Oppresor")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Oppressor MK2": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Oppressor MK2")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Powersurge": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Powersurge")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Reever": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Reever")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Shinobi": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Shinobi")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Shotaro": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Shotaro")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                            case "Vindicator": container.addEventListener("click", (e) => {
                                let precio = container.querySelector(".product_card_info_button").innerHTML
                                window.localStorage.setItem("precioCoche", precio)
                                window.localStorage.setItem("nombreCoche", "Vindicator")
                                window.open("../PantallaCoches.html", "_self")
                            })
                                break;
                        }
                    })
                }

                {/*CONTENEDOR DE LAS CARDS DE LOS PRODUCTOS*/}

                <div className='product_motorcycle_container'>
                <h1 className='produdct_container_title'>Motorcycles</h1>
                    {motocicletaData.map((elemento) =>
                        <div key={elemento.nombre} className='product_card'>
                            <img src={elemento.imagen} alt="" className='product_card_img' />
                            <div className='product_card_info'>
                                <h1 key={elemento.nombre} className='product_card_title'>{elemento.nombre}</h1>
                                <button className='product_card_info_button'>${elemento.precio}.00</button>
                            </div>

                        </div>
                    )}
                </div>

                <div className='product_cars_container'>
                <h1 className='produdct_container_title'>Cars</h1>
                    {autosData.map((elemento) => (
                        <div key={elemento.nombre} className='product_card'>
                            <img src={elemento.imagen} alt="" className='product_card_img' />
                            <div className='product_card_info'>
                                <h1 key={elemento.nombre} className='product_card_title'>{elemento.nombre}</h1>
                                <button className='product_card_info_button'>${elemento.precio}.00</button>
                            </div>

                        </div>
                    ))}
                </div>


            </div>

        </>
    )
}
export default Legendary;