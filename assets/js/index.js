document.addEventListener("scroll", () => {
    rotate()
})


function rotate(){
    const toggler = document.getElementById('rotate')
    toggler.style.transform = "rotate(" + window.pageYOffset/2 + "deg)"
}
