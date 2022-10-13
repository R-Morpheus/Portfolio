function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth",
    })
}

let button = document.querySelector('.scroll_project')
let projects = document.querySelector('.headers__projects')

let button2 = document.querySelector('.scroll_technologies')
let technologies = document.querySelector('.headers__technologies')

let button3 = document.querySelector('.scroll_aboutMe')
let aboutMe= document.querySelector('.aboutMe')


button.addEventListener('click',() => {
    scrollTo(projects)
})
button2.addEventListener('click',() => {
    scrollTo(technologies)
})
button3.addEventListener('click',() => {
    scrollTo(aboutMe)
})
