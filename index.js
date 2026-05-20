let input = document.querySelector('#inputTarea')
let boton = document.querySelector('#btnTarea')
let tareas = document.querySelector('#tareas')
let contador = 0




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
    label.className='fs-3'
    //Pendienye algo ... (insertar texto en el label)

    checkbox.addEventListener('click', () => {
        //.toggle colocamos no colocamos
        label.classList.toggle('text-decoration-line-through')


    })

    //Dibujar el sup
    let sup = document.createElement('sup')
    sup.insertAdjacentHTML('afterbegin','<i class="bi bi-trash-fill"></i>')
    // sup.textContent = 'X'
    sup.className= 'text-danger fs-3 '

      sup.addEventListener('click', () => {
        div.remove()

    })


    //Se coloco aqui osea colocar el texto para que tenga un valor
    label.textContent = input.value
    div.append(checkbox)
    div.append(label)
    div.append(sup)
    // console.log(input.value)
    tareas.append(div)
    input.value = ''

})