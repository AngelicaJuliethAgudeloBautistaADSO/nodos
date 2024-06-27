"use strict";
import { usuarios } from "./modulo.js";
const $root = document.querySelector(`#root`);
const $template = document.querySelector("#template").content;
const $card = document.createDocumentFragment()
$root.classList.add(`container`)

usuarios().then((listado)=>{
    listado.forEach(usuario => {
        $template.querySelector("h2").textContent = usuario.name;
        $template.querySelector("div > p").textContent = usuario.email;
        $template.querySelector("div > p ~ p").textContent = usuario.username;
        let clone =document.importNode($template, true);
        $card.appendChild(clone);
        //createElement : se crea un elemento
        // const $div = document.createElement("div");
        // $div.classList.add("box", "border", "text_centrado", "espacio");  
        // const $h2 = document.createElement("h2");
        
        // const $nombre = document.createElement("h1");
        // $nombre.textContent = `nombre: ${usuario.name}`;
        // $div.appendChild($nombre);

        // const $email = document.createElement("p");
        // $email.textContent = `email: ${usuario.email}`;
        // $div.appendChild($email);

        // const $telefono = document.createElement("p");
        // $telefono.textContent = `telefono: ${usuario.phone}`;
        // $div.appendChild($telefono);

        // const $company = document.createElement("p");
        // $company.textContent = `company: ${usuario.company.name}`;
        // $div.appendChild($company);

        // const $direccion = document.createElement("p");
        // $direccion.textContent = `direccion: ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`;
        // $div.appendChild($direccion);

        // const $webside = document.createElement("p");
        // $webside.textContent = `webside: ${usuario.webside}`;
        // $div.appendChild($webside);

        // // $h2.textContent = usuario.name;
        // $div.appendChild($h2);
        // $card.appendChild($div)
        // $root.appendChild($div);
    });
    $root.appendChild($card);
}).catch;
