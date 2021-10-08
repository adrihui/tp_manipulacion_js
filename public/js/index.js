const $main = document.querySelector('main');
const $h2 = document.querySelector('h2');
const $a = document.querySelector('a');
const $p = document.querySelectorAll('p');
const $body = document.querySelector('body');

window.addEventListener('load', function() {

    let nombre = prompt("Ingrese su nombre");
    if(nombre !=''){
        $h2.innerHTML +=  nombre;
    }else{
        $h2.innerHTML += 'INVITADO';
    }

    $h2.style.textTransform = 'uppercase';

    $a.style.color = '#E51B3E';

    let confirmar = confirm("Desea colocar un fondo de pantalla")
    if(confirmar){
        $body.classList.add('fondo');
    }

    for(let i = 0 ; i < $p.length; i++){
        if(i % 2 == 0){
            $p[i].classList.add('destacadoPar');
        }else{
            $p[i].classList.add('destacadoImpar');
        }
    }

    $main.style.display = 'block';
  
  });