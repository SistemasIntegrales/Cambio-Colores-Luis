/*
/////////////////////////////////
Funciones de Branding del sistema
/////////////////////////////////
*/

//Seteo el boton para cambiar el color
const previewBrandingConfig = document.getElementById('previewBrandConfig');

//Seteo de inputs de archivos para cambiar el value
document.getElementById('customLogo').addEventListener('change', (event) => {
    document.getElementById('customLogoLabel').innerText = event.target.value;
    document.getElementById('customLogoLabel').style.color = "green";
});

document.getElementById('customBackground').addEventListener('change', (event) => {
    document.getElementById('customBackgroundLabel').innerText = event.target.value;
    document.getElementById('customBackgroundLabel').style.color = "green";
});

//Selecciono el contenedor que cambiara de color
const brandingNavbar = document.getElementById('NavBar');

//Creo la función que cambiará el color
const GradientBrandNavbar = previewBrandingConfig.addEventListener('click', (e) => {
    //Saco el valor del input Color1
    const primaryBrandingColor = document.getElementById('colorPrincipal').value;
    const secondaryBrandingColor = document.getElementById('colorSecundario').value;
    brandingNavbar.style.background = `linear-gradient(0deg, ${primaryBrandingColor}, ${secondaryBrandingColor})`;
    console.log(brandingNavbar);
});