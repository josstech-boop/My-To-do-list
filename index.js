
let data = [
    { id: 1, texto: 'Holaaa', estadoConpletado: true },
    { id: 2, texto: 'Joselyn', estadoConpletado: false }
]

let input = document.querySelector('#inputTarea')
let boton = document.querySelector('#btnTarea')
let tareas = document.querySelector('#tareas')

    
const DibujarElementos = (info = null, i = null) => {
    //Dibujar div de tarea
    let div = document.createElement('div')
    div.className = 'd-flex w-50 justify-content-between align-items-baseline border-bottom border-light-subtle p-2'

    //Dibujar checkbox
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.className = 'checkbox me-2 fs-3'

    //Dibujando el label
    let label = document.createElement('label')
    label.className = 'fs-3'
    //Pendienye algo ... (insertar texto en el label)

    //Dibujar el sup
    let sup = document.createElement('sup')
    sup.insertAdjacentHTML('afterbegin', '<i class="bi bi-trash-fill"></i>')
    // sup.textContent = 'X'
    sup.className = 'text-danger fs-3 '

    if (info == null || i == null) {
        checkbox.setAttribute('id', data.length + 1)
        label.textContent = input.value
    } else {
        checkbox.setAttribute('id', info[i].id)
        label.textContent = info[i].texto
    }
    div.append(checkbox)
    div.append(label)
    div.append(sup)

    return { div, checkbox, label, sup }
}

const DibujarTodo = () => {
    if (data.length > 0) {
        for (let i = 0; i <= data.length - 1; i++) {

            const { div, checkbox, label, sup } = DibujarElementos(data, i);

            if (data[i].estadoConpletado) {
                checkbox.checked = true;
                label.classList.add('text-decoration-line-through')
            } else {
                checkbox.checked = false
                label.classList.remove('text-decoration-line-through')
            }
            tareas.append(div)
        }
    }
}

//Agregar elementos al div
boton.addEventListener('click', () => {

    data.push(
        { id: data.length + 1, texto: input.value, estadoConpletado: false }
    )
    tareas.innerHTML = ''
    DibujarTodo();
    input.value = ''

})

tareas.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkbox')) {
        let tareaAbuscar = data.find(item => item.id == event.target.id)
        tareaAbuscar.estadoConpletado = !tareaAbuscar.estadoConpletado
        //.toggle colocamos no colocamos

        if (tareaAbuscar.estadoConpletado) {
            event.target.nextSibling.classList.add('text-decoration-line-through')
        } else {
            event.target.nextSibling.classList.remove('text-decoration-line-through')
        }
    }
})

DibujarTodo()
// target contains nextsibliling