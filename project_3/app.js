function Mylist() {
    let input = document.querySelector('.input')
    const mylist = document.querySelector('.mylist');
    const error = document.querySelector('.error')
    if (input.value === '') {
        error.innerHTML = 'please input somthing';
        setTimeout(() => {
            error.remove()
        }, 2000 )
    } else { 
        const li = document.createElement('li');
        li.innerHTML = input.value;
        mylist.append(li)   
        input = '';
        
    }
}
const button = document.querySelector('.btn').addEventListener('click', Mylist   )