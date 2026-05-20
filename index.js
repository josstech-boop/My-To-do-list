
let data = [
    { id: 1, texto: 'Holaaa', estadoConpletado: false },
    { id: 2, texto: 'Joselyn', estadoConpletado: false }
]

let input = document.querySelector('#inputTarea')
let boton = document.querySelector('#btnTarea')
let tareas = document.querySelector('#tareas')

if (data.length > 0) {
    for (let i = 0; i <= data.length - 1; i++) {
        //Dibujar div de tarea
        let div = document.createElement('div')
        div.className = 'd-flex w-50 justify-content-between align-items-baseline border-bottom border-light-subtle p-2'

        //Dibujar checkbox
        let checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('id', data[i].id)
        if (data[i].estadoConpletado) {
            checkbox.checked = true
        }
        checkbox.className = 'me-2 fs-3'

        //Dibujando el label
        let label = document.createElement('label')
        label.className = 'fs-3'
        //Pendienye algo ... (insertar texto en el label)

        if (data[i].estadoConpletado) {
            checkbox.checked = true;
            label.classList.add('text-decoration-line-through')
        } else {
            label.classList.remove('text-decoration-line-through')


        }

        checkbox.addEventListener('click', (event) => {
            // console.log(event.target.id)
            let tareaAbuscar = data.find(item => item.id == event.target.id)
            tareaAbuscar.estadoConpletado = !tareaAbuscar.estadoConpletado
            //.toggle colocamos no colocamos

            if (tareaAbuscar.estadoConpletado) {
                checkbox.checked = true;
                label.classList.add('text-decoration-line-through')
            } else {
                label.classList.remove('text-decoration-line-through')


            }

        })

        //Dibujar el sup
        let sup = document.createElement('sup')
        sup.insertAdjacentHTML('afterbegin', '<i class="bi bi-trash-fill"></i>')
        // sup.textContent = 'X'
        sup.className = 'text-danger fs-3 '

        sup.addEventListener('click', () => {
            div.remove()
        })


        //Se coloco aqui osea colocar el texto para que tenga un valor
        label.textContent = data[i].texto
        div.append(checkbox)
        div.append(label)
        div.append(sup)
        // console.log(input.value)
        tareas.append(div)

    }

}


//Agregar elementos al div
boton.addEventListener('click', () => {

    //Dibujar div de tarea
    let div = document.createElement('div')
    div.className = 'd-flex w-50 justify-content-between align-items-baseline border-bottom border-light-subtle p-2'

    //Dibujar checkbox
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.className = 'me-2 fs-3'



    //Dibujando el label
    let label = document.createElement('label')
    label.className = 'fs-3'
    //Pendienye algo ... (insertar texto en el label)

    checkbox.addEventListener('click', (event) => {
        //.toggle colocamos no colocamos
        label.classList.toggle('text-decoration-line-through')


    })

    //Dibujar el sup
    let sup = document.createElement('sup')
    sup.insertAdjacentHTML('afterbegin', '<i class="bi bi-trash-fill"></i>')
    // sup.textContent = 'X'
    sup.className = 'text-danger fs-3 '

    sup.addEventListener('click', () => {
        div.remove()

    })


    //Se coloco aqui osea colocar el texto para que tenga un valor
    label.textContent = input.value
    div.append(checkbox)
    div.append(label)
    div.append(sup)
    data.push({ id: data.length + 1, texto: input.value, estadoConpletado: false })
    // console.log(input.value)
    tareas.append(div)
    input.value = ''


})