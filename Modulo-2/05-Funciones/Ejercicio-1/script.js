const avisaUsuario = (fun,x) =>{
    alert(fun(x));
}

const saludaUsuario = (nombre) =>{
    return `hola ${nombre}`;
}

avisaUsuario(saludaUsuario,'Jenny')
