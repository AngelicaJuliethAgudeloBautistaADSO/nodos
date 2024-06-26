"use strict";
import { usuarios } from "./modulo.js";
const $root = document.querySelector(`#root`);

usuarios().then((listado)=>{
    listado.forEach(usuario => {
        const $div = document.createElement("div");
        const $h2 = document.createElement("h2");
        $div.classList.add("box");
        $h2.textContent = usuario.name;
        $div.appendChild($h2);
        $root.appendChild($div);
    });
}).catch;