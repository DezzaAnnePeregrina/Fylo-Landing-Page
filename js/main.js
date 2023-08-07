document.querySelector('.submit__start1').addEventListener('click',() =>{
    let input = document.querySelector('.input1').value
    if(input.includes('@') && input.includes('.com')){
        document.querySelector('.input1').style.borderColor = 'rgb(17, 226, 17)'
        document.querySelector('.invalid1').innerText = ''
    } else{
        document.querySelector('.input1').style.borderColor = 'rgb(245, 74, 74)'
        document.querySelector('.invalid1').innerText = 'Please check your email'
    }
})

document.querySelector('.submit__start').addEventListener('click',() =>{
    let input = document.querySelector('.input').value
    if(input.includes('@') && input.includes('.com')){
        document.querySelector('.input').style.borderColor = 'rgb(17, 226, 17)'
        document.querySelector('.invalid').innerText = ''
    } else{
        document.querySelector('.input').style.borderColor = 'rgb(245, 74, 74)'
        document.querySelector('.invalid').innerText = 'Please check your email'
    }
})