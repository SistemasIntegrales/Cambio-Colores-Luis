//Seteo el boton para cambiar el color
const setCustomGradient = document.getElementById('previewBrandConfig');

//Selecciono el contenedor que cambiara de color
const colorContenedor = document.getElementById('NavBar');

//Creo la función que cambiará el color
const GradientBrandNavbar = setCustomGradient.addEventListener('click', (e) => {
    //Saco el valor del input Color1
    const customColor1 = document.getElementById('colorPrincipal').value;
    const customColor2 = document.getElementById('colorSecundario').value;
    colorContenedor.style.background = `linear-gradient(0deg, ${customColor1}, ${customColor2})`;
    console.log(colorContenedor);
});