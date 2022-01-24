//validaciones del Register
window.addEventListener('load',()=>{ //Problema en esta linea
    let errores = []
    const formulario = document.querySelector("form.reg-form");
    const full_name = document.querySelector(".full_name");
    const email = document.querySelector(".email");
    const phone_number = document.querySelector(".phone_number");
    const password = document.querySelector(".password");
    const images = document.querySelector(".file");
    formulario.addEventListener('submit', function (e) { //Problema en esta linea(no se pueden leer las propiedadess)
    if(full_name.value == ''){
        errores.push('El nombre no puede estar vacío');
        
    }else if(full_name.value.length < 2){
        errores.push('El nombre debe tener al menos 2 caracteres');
        
    };    
    if(email.value == ''){
        errores.push('El e-mail no puede estar vacio');
    }else if(!campoEmail.value.includes('@')){
        errores.push('El email tiene que tener un formato válido')
    }
    if(phone_number.value == ''){
        errores.push('El numero de telefono no puede estar vacío');
        
    }else if(phone_number.value.length < 2){
        errores.push('Debe tener al menos 10 caracteres');
        
    };
    if (images.value == '') {
        errores.push('Debe seleccionar una imagen para el usuario');
    };
    if(password.value == ''){
        errores.push('La contraseña no puede estar vacía')
    }else if(password.value.length < 8){
        errores.push('La contraseña debe tener al menos 8 caracteres')
    }else{
        if(!minuscula.test(password.value)) errores.push('La contraseña debe contener al menos una minúscula')
        if(!mayuscula.test(password.value)) errores.push('La contraseña debe contener al menos una mayúscula')
        if(!numero.test(password.value)) errores.push('La contraseña debe contener al menos un número')
        if(!caracterEspecial.test(password.value)) errores.push('La contraseña debe contener al menos un caracter especial')
    }

    if (errores.length > 0) {
        e.preventDefault();
        let ulErrors = document.querySelector('.errors');
        ulErrors.classList.add('error-msg');
        ulErrors.innerHTML = '';
        for (let i = 0; i < errores.length; i++) {
            ulErrors.innerHTML += `<li >  ${errores[i]} </li>`;
        };
    }
}) ;
})
