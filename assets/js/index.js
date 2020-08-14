window.addEventListener("scroll", () => {
    let cog = document.getElementById('cog')
    cog.style.transform = `rotate(${pageYOffset/2}deg)`
})