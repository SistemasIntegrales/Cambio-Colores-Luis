//Seteo el boton para cambiar el color
const setCustomGradient = document.getElementById('setNavBarGradient');

//Selecciono el contenedor que cambiara de color
const colorContenedor = document.getElementById('Contenedor');

//Creo la función que cambiará el color
const GradientBrandNavbar = setCustomGradient.addEventListener('click', (e) => {
    //Saco el valor del input Color1
    const customColor1 = document.getElementById('color1').value;
    const customColor2 = document.getElementById('color2').value;
    colorContenedor.style.background = `linear-gradient(0deg, ${customColor1}, ${customColor2})`;
    console.log(colorContenedor);
});