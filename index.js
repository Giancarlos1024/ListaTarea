
const agregarTarea = document.querySelector('#agregarTarea');

function addTarea(){
    const ingresarTarea = document.querySelector('#ingresarTarea').value;
    const listaTarea = document.querySelector('.listaTarea');
    const newDiv = document.createElement('div');
    newDiv.textContent = ingresarTarea;
    newDiv.setAttribute('class','ContenedorTareas');

    let newButton = document.createElement('button');
    newButton.textContent = 'Borrar';
    newButton.setAttribute('class','botton');
    newButton.addEventListener('click', ()=>{
        
        newDiv.remove();
        
    });
    newDiv.appendChild(newButton);
    if (ingresarTarea != "" && ingresarTarea.length > 3) {

        if (ingresarTarea.length = true) {
            alert("Tarea Creada con éxito");
        }
        listaTarea.appendChild(newDiv);
    }
    else{
        alert("Por Favor, Ingrese Palabras Mayores a 3 Caracteres");
    }

    document.querySelector('#ingresarTarea').value = "";
}

agregarTarea.addEventListener('click', addTarea)