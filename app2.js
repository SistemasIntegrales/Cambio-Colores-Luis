/*
/////////////////////////////////
Funciones de Branding del sistema
/////////////////////////////////
*/

/* Botones */
//Se define el botón de previsualización
const previewBrandingConfig = document.getElementById('previewBrandConfig');
//Se define el botón de guardar cambios
const saveBrandingConfig = document.getElementById('setBrandConfig');

/* Elementos a cambiar */
//Se define el Navbar para cambiarle el color
const brandingNavbar = document.getElementById('NavBar');

/* Funciones y lógica */
//Si el formulario cambia activamos la previsualización
document.getElementById('BrandConfig').addEventListener('change', (event) => {
  previewBrandingConfig.disabled = false;
});
//Al agregar el color principal se activa el color secundario
document.getElementById('colorPrincipal').addEventListener('change', (event) => {
  if(document.getElementById('colorPrincipal').value !== ''){
    document.getElementById('colorSecundario').disabled = false;
  } else{
    document.getElementById('colorSecundario').disabled = true;
  }
});

//Función para previsualizar los cambios
const funcPreviewBrandingConfig = previewBrandingConfig.addEventListener('click', (e) => {

  //Definimos los colores Principal y Secundario
  const primaryBrandingColor = document.getElementById('colorPrincipal').value;
  const secondaryBrandingColor = document.getElementById('colorSecundario').value;

  //Asignamos los colores al Navbar
  if(secondaryBrandingColor === ''){
     brandingNavbar.style.background = `${primaryBrandingColor}`;
  } else {
     brandingNavbar.style.background = `linear-gradient(0deg, ${primaryBrandingColor}, ${secondaryBrandingColor})`;
  }

  //Definimos la etiqueta logo para cambiarlo
  const logoBranding = document.getElementById('logoBranding');
  //Definimos el input del logo
  const customLogo = document.getElementById('customLogo');
  //Definimos la variable con el texto logo.png
  const logoPng = 'logo.png';
  //Aplicamos la imagen al elemento
  if(customLogo.value.includes(logoPng)){
     logoBranding.src = `images/${logoPng}`;
  }

  //Definimos la etiqueta body para cambiarlo
  const backgroundBranding = document.getElementById('Body');
  //Definimos el input del Background
  const customBackground = document.getElementById('customBackground');
  //Definimos la variable con el texto background.jpg
  const backgroundJpg = 'background.jpg';
  //Aplicamos la imagen al elemento
  if(customBackground.value.includes(backgroundJpg)){
     backgroundBranding.style.backgroundImage = `url('images/${backgroundJpg}')`;
  }

  //Cambiamos el estado del botón de guardar configuración
  saveBrandingConfig.disabled = false;
});

/* Estilos */
//Seteo de inputs de archivos para cambiar el value
document.getElementById('customLogo').addEventListener('change', (event) => {
  document.getElementById('customLogoLabel').innerText = event.target.value;
  document.getElementById('customLogoLabel').style.color = "green";
});

document.getElementById('customBackground').addEventListener('change', (event) => {
  document.getElementById('customBackgroundLabel').innerText = event.target.value;
  document.getElementById('customBackgroundLabel').style.color = "green";
});

