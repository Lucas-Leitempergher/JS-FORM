function validartamanho(input,tamanho) {
    var nome = document.getElementById(input);
 
    if (nome.value.length<tamanho) {
        nome.classList.add("is-invalid")
        nome.classList.remove("is-valid")
        nome.focus();
       
    }
    else { 
        nome.classList.add("is-valid")
        nome.classList.remove("is-invalid")
    }

}
function validaremail() {
    var email = document.getElementById("email");
    console.log(email.value);
    console.log(email.value.indexOf("@"), email.value.indexOf("."));
    if ( email.value.indexOf("@") == -1 || email.value.indexOf(".") < email.value.indexOf("@")) {
        email.classList.add("is-invalid")
        email.classList.remove("is-valid")
        email.focus();
    }
    else {
        email.classList.add("is-valid")
        email.classList.remove("is-invalid")
    }
}    

function validarcopia() {
    var emailvalidation = document.getElementById("emailvalidation");
    if (emailvalidation.value == email.value) {
        emailvalidation.classList.add("is-valid")
        emailvalidation.classList.remove("is-invalid")
    }
    else {
        emailvalidation.classList.add("is-invalid")
        emailvalidation.classList.remove("is-valid")
    }
}

function validaridade() {
    var idade = document.getElementById("idade");
    if (idade.value.length<2 || idade.value<18) {
        idade.classList.add("is-invalid")
        idade.classList.remove("is-valid")
    }
    else {
        idade.classList.add("is-valid")
        idade.classList.remove("is-invalid")
    }

}

function validarsenha() {
    var senha = document.getElementById("senha");
      if (senha.value.match(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/

      )) {
        senha.classList.add("is-valid")
        senha.classList.remove("is-invalid")
      }
      else {
        senha.classList.add("is-invalid")
        senha.classList.remove("is-valid")
      }

}

function validarsenhacopia() {
    var senhavalidation = document.getElementById("senhavalidation");
    if (senhavalidation.value == senha.value) {
        senhavalidation.classList.add("is-valid")
        senhavalidation.classList.remove("is-invalid")
    }
    else {
        senhavalidation.classList.add("is-invalid")
        senhavalidation.classList.remove("is-valid")
    }
}

function validarfiles() {
    const meuImput = document.getElementById('arquivo');
    const reader = new FileReader();
    reader.readAsDataURL(meuImput.files[0]);
    reader.onload = function () {
        const blob = new Blob([JSON.stringify(reader.result)], {
            type: "application/json",
        });
        if(blob.size <= 1e+7){
            meuImput.classList.add("is-valid")
            meuImput.classList.remove("is-invalid")
        }else{
            meuImput.classList.add("is-invalid")
            meuImput.classList.remove("is-valid")
        }
    };

}

function fecharacachopa() {
    const form = document.getElementById('my-form');
    console.log(form);
}