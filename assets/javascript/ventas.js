const propiedades_venta = [
    {
        id: "card",
        nombre: "Apartamento de lujo en zona exclusiva",
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: "$500.000",
        smoke: false,
        pets: false
    },
    {
        id: "card",
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 2,
        costo: "$120.000",
        smoke: true,
        pets: true
    },
    {
        id: "card",
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: "$1.450.000",
        smoke: false,
        pets: true
    }
]

let dum = ""

for (let venta of propiedades_venta) {
    let smokes = ""
    if (venta.smoke === true) {
        smokes = `
            <p class="text-danger">
            <img src="./assets/img/smoking-off.svg" alt="" style="filter: invert(17%) sepia(84%) saturate(7438%) hue-rotate(358deg) brightness(116%) contrast(113%);">
            </i> No se permite fumar
            </p>`
    }
    else {
        smokes = `
            <p class="text-success">
            <img src="./assets/img/smoking.svg" alt="" style="filter: invert(29%) sepia(99%) saturate(1014%) hue-rotate(88deg) brightness(93%) contrast(107%);">
            </i> Permitido fumar
        </p>`
    }

    if (venta.pets === true) {
        petss = `
            <p class="text-success">
            <img src="./assets/img/pet.svg" alt="" style="filter: invert(29%) sepia(99%) saturate(1014%) hue-rotate(88deg) brightness(93%) contrast(107%);">
            </i> Mascotas permitidas
        </p>`
    }
    else {
        petss = `
            <p class="text-danger">
            <img src="./assets/img/cancel.svg" alt="" style="filter: invert(17%) sepia(84%) saturate(7438%) hue-rotate(358deg) brightness(116%) contrast(113%);">
            </i> No se permiten mascotas
        </p>`
    }
    dum += `
        <div id="${venta.id}" class="card">
            <div class="vnd">
                <img src="${venta.src}" alt="">
                <h2>${venta.nombre}</h2>
                <h5>${venta.descripcion}</h5>
            </div>

            <div class="u-hb">
                <div class="u">
                    <img src="./assets/img/google-maps.svg" alt="">
                    <h5>${venta.ubicacion}</h5>
                </div>
                <div class="hb">
                    <img src="./assets/img/habitacion.svg" alt="">
                    <h6 class="m-0">Habitaciones: ${venta.habitaciones}</h6>
                    <img src="./assets/img/baño.svg" alt="">
                    <h6 class="m-0">Baños: ${venta.baños}</h6>
                </div>
            </div>

            <div class="condiciones">
                <h2>Costo: ${venta.costo}</h2>
                ${smokes}
                ${petss}
            </div>
        </div>`;
}
const product = document.querySelector("#ventaPropiedades")
product.innerHTML = dum;