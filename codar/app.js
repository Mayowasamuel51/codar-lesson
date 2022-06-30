function Currency() {
    let input_currency = document.querySelector('.input_currency').value;
    let percent = document.querySelector('#percent').value;
    let complete = document.querySelector('.complete')

    convert = (input_currency / percent)
    if (percent == 414.945) {
        complete.innerHTML = `<p> &#8358  ${input_currency} = $ ${convert} </p>`
    } else if (percent ==  3.0331) {
        complete.innerHTML = `<p>  &#8358  ${input_currency} =&#165  ${convert} </p>`
    }
    else if (percent == 435.4929) {
        complete.innerHTML = `<p>  &#8358  ${input_currency} =  	&#8356  ${convert} </p>`
    }
    else if (percent == 503.4753 ) {
        complete.innerHTML = `<p>   &#8358  ${input_currency} =  &#163   ${convert} </p>`
    }
    else if (percent == 	5.2621) {
        complete.innerHTML = `<p> &#8358   ${input_currency} =  &#x20B9 ${convert} </p>`
    } else {
        console.log('nothing works')
    }

    
}
const btn = document.querySelector('.btn');
btn.addEventListener('click', Currency)

// let num_1 = 3;
// if (num_1 > 1) {
//     console.log('ture')
// } else {
//     console.log('false')
// }

// let tag = document.querySelector('.tag')

// const color = 'red';

// switch (color) {
//     case 'red':
//     // console.log('color is red')
//         tag.innerHTML = 'color is red'
//         break;
//     case 'blue':
//         console.log('color is blue')
//         break;
//     default:
//         console.log('nothing is set')

// }