document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    let i = 0;
    let tiempo = 0;
    const imagenes = ["arriba.jpg", "arriba2.jpg"]
    setInterval(() => {
        hero.style.backgroundPositionY = -tiempo + 'px'
        if (tiempo > 90) {
            tiempo = 0
            hero.style.backgroundImage = `url(../img/${imagenes[i]})`
            if (i == imagenes.length - 1) {
                i = 0;
            } else {
                i++
            }

        } else {

            tiempo++;
        }
        tiempo++;

    }, 100);

})

const boton = document.querySelector(".btn-flotante");
boton.addEventListener("click", agregarFooter);

function agregarFooter(e) {
    e.preventDefault();
    const footer = document.querySelector(".footer");
    if (footer.classList.contains("footer-activo")) {
        footer.classList.remove("footer-activo")
        boton.classList.remove("activo")
        boton.textContent = "Footer Visible";
    } else {
        footer.classList.add("footer-activo")
        boton.classList.add("activo")
        boton.textContent = "X Cerrar";
    }
}