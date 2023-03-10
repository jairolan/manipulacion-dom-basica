const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('parrafito');
// const pid = document.getElementById('pid');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo_1');
const input2 = document.querySelector('#calculo_2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);
// btn.addEventListener('click', btnOnClick);

function sumarInputValues(event) {
    event.preventDefault();
    const data = parseInt(input1.value) + parseInt(input2.value);
    // alert("virus")
    return result.innerText = "Resultado: " + data;
}

// console.log(input.value);
// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

// h1.innerHTML = "Patito";
// // innerText

// console.log(h1.getAttribute('pantalla'));
// h1.setAttribute('pantalla', 'pantallota');

// h1.classList.add('holiiiiiii');
// h1.classList.remove('holiiiiiii');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

// input.value = "123"

// const img = document.createElement('img');
// img.setAttribute('src', 'https://images.unsplash.com/photo-1677741447356-298b7ff50239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80');
// // console.log(img);

// pid.append(img);



