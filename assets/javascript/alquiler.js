const propiedadesAlquiler = [
    {
        id: "card",
        nombre: "Apartamento en el centro de la ciudad",
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: "$2000",
        smoke: false,
        pets: true
    },
    {
        id: "card",
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: "$2500",
        smoke: true,
        pets: true
    },
    {
        id: "card",
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: "$4500",
        smoke: false,
        pets: false
    }
]

let dum = ""
for (let alquiler of propiedadesAlquiler) {
    let smokes = ""
    if (alquiler.smoke === true) {
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

    if (alquiler.pets === true) {
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
        <div id="${alquiler.id}" class="card">
            <div class="vnd">
                <img src="${alquiler.src}" alt="">
                <h2>${alquiler.nombre}</h2>
                <h5>${alquiler.descripcion}</h5>
            </div>

            <div class="u-hb">
                <div class="u">
                    <img src="./assets/img/google-maps.svg" alt="">
                    <h5>${alquiler.ubicacion}</h5>
                </div>
                
                <div class="hb">
                    <img src="./assets/img/habitacion.svg" alt="">
                    <h6 class="m-0">Habitaciones: ${alquiler.habitaciones}</h6>
                    <img src="./assets/img/baño.svg" alt="">
                    <h6 class="m-0">Baños: ${alquiler.baños}</h6>
                </div>
            </div>
            <div class="costo">
                <h2>Costo: ${alquiler.costo}</h2>
            </div>
            <div class="condiciones">
                ${smokes}
                ${petss}
            </div>
        </div>`;
}
const product = document.querySelector("#alquilerPropiedades")
product.innerHTML = dum 
