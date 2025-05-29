function dropdown(event){
    console.log(event.target)
    const currentDiv = event.target
    const closeUl = currentDiv.nextElementSibling
    console.log(closeUl)

    // closeUl.classList.remove('open')
    // closeUl.classList.add('hidden-ul')

// if(closeUl.classList.contains('hidden-ul')){

//     // closeUl.classList.remove('hidden-ul')

// }
// else{
//     // closeUl.classList.add('open')

// }


if(closeUl.classList.contains('open')){
    closeUl.classList.remove('open')
    closeUl.classList.add('hidden-ul')
}
else{
    closeUl.classList.remove('hidden-ul')
    closeUl.classList.add('open')

}

}