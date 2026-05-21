let data = []

if(JSON.parse(localStorage.getItem('data'))){
    data = JSON.parse(localStorage.getItem('data'))
}else{
    localStorage.setItem('data', JSON.stringify([]))

} 

let input = document.querySelector('#inputTarea')
let boton = document.querySelector('#btnTarea')
let tareas = document.querySelector('#tareas')
// localStorage.getItem() => Me permite traer informacion
// localStorage.setItem() => me Permite Ingresar informacion

const getNextID = () =>{

    return data.length > 0 ? data[data.length -1 ].id + 1 : 1

}

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
    sup.className = 'eliminar text-danger fs-3'

    if (info == null || i == null) {
        checkbox.setAttribute('id',getNextID())
        label.textContent = input.value
        sup.setAttribute('id',getNextID())

    } else {
        checkbox.setAttribute('id', info[i].id)
        label.textContent = info[i].texto
        sup.setAttribute('id',info[i].id)

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
        { id: getNextID(), texto: input.value, estadoConpletado: false }
    )
    localStorage.setItem('data', JSON.stringify(data))
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
    } else if (event.target.parentElement.classList.contains('eliminar')) {
        event.target.parentElement.parentElement.remove()
        data = data.filter(item => item.id != event.target.parentElement.id)
    }
})

DibujarTodo()
// target contains nextsibliling