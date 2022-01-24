window.addEventListener('load',()=>{
    let errores = [];
    const form = document.querySelector("form.login-form");
    const email = document.querySelector(".email");
    const password = document.querySelector(".password");
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    form.addEventListener('submit', (e) => {
        errores = [];
    if(email.value == ''){
        errores.push('El e-mail no puede estar vacio');
    }else if(!emailRegex.test(email.value)){
        errores.push('Ingrese un formato de e-mail válido por favor');
    };
    
    if(password.value == ''){
        errores.push('La contraseña no puede estar vacía')
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

//register js 9 a 13
    /*const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const minuscula = /[a-z]/;
    const mayuscula = /[A-Z]/;
    const numero = /[0-9]/;
    const caracterEspecial = /[@$.!%#?&]/;*/