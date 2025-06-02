function dropdown(event) {
    console.log(event.target)
    const currentDiv = event.target
    const closeUl = currentDiv.nextElementSibling
    console.log(closeUl)

    if (closeUl.classList.contains('open')) {
        closeUl.classList.remove('open')
        closeUl.classList.add('hidden-ul')
    }
    else {
        closeUl.classList.remove('hidden-ul')
        closeUl.classList.add('open')

    }

}
const button = document.querySelectorAll('.layout-btn')

button.forEach(btn => {
    console.log(btn, 'current btn maybe')

    btn.addEventListener('click', (event) => {
        button.forEach(btn => btn.classList.remove('active'));
                btn.classList.add('active');

        content.forEach(content => content.classList.remove('content-active'));
        console.log(event.currentTarget, 'current idk')

        const clickedBtn = event.currentTarget
        clickedBtn.classList.add('active')
        const btnId = clickedBtn.id
        console.log(btnId, 'id')
        const contentId = btnId.replace('btn-', 'content-')
        console.log(contentId)

        const currentContent = document.getElementById(contentId)
        console.log(currentContent)
        currentContent.classList.add('content-active')
    })
})



const buttons = document.querySelectorAll('.tab-btn')
const content = document.querySelectorAll('.content')


buttons.forEach(btn => {
    console.log(btn, 'current btn maybe')

    btn.addEventListener('click', (event) => {
        buttons.forEach(btn => btn.classList.remove('btn-active'));
                btn.classList.add('btn-active');

        content.forEach(content => content.classList.remove('content-active'));
        console.log(event.currentTarget, 'current idk')

        const clickedBtn = event.currentTarget
        clickedBtn.classList.add('btn-active')
        const btnId = clickedBtn.id
        console.log(btnId, 'id')
        const contentId = btnId.replace('btn-', 'content-')
        console.log(contentId)

        const currentContent = document.getElementById(contentId)
        console.log(currentContent)
        currentContent.classList.add('content-active')
    })
})


        function sideNav() {
            const hamburger = document.getElementById('hamburger')
            const sideNav = document.getElementById('side-nav')
            console.log(hamburger, 'gfsdg  ')
            console.log(sideNav, 'sideNav  ')
            sideNav.classList.toggle('show')
        }

        function closeNav(){
            
            const sideNav = document.getElementById('side-nav')
            sideNav.classList.remove('show')
        }
//   const hamburger = document.getElementById('hamburger')
          
        // document.onclick = function(e){
        //     console.log(e.target)
        //       const sideNav = document.getElementById('side-nav')
        //     if(!sideNav.classList.contains(e.target)){
        //         console.log('ksjdfgk')
        //          sideNav.classList.remove('show')
        //     }
        // }