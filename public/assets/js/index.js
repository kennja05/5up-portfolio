window.addEventListener("scroll", () => {
    let cogs = Array.from(document.getElementsByClassName('cog'))
    cogs.forEach((cog, index) => {
        let sign = index % 2 === 0 ? -1 : 1
        cog.style.transform = `rotate(${sign * pageYOffset/1.5}deg)`
    })
})