//Lista de secciones al cargar

    //Lista de los nombres que se van a cargar en la pagina
const secciones = ['home', 'service', 'about_us','contact'];
    //Selecioamos el contenedor donde irán todas las secciones
    //Este contenedor está en el index.html como <main id="secciones">
const contenedor = document.getElementById('contenido');
    //creamos una funcion asincrona para cragar las secciones
async function cargarSecciones() {
    //recorremos la lista de secciones
    for (const nombre of secciones){
        try{
            //usamos fetch para obtener el contenido por seccion
            const response = await fetch(`sections/${nombre}.html`);
            //convertimos la respuesta a texto
            const html = await response.text();
            //agregamos el contenido al <main>
            contenedor.innerHTML += html;
        } catch (error){
            console.error(`Error al cargar la sección ${nombre}:`, error);
        }
    }
}
//llamamos a la funcion para cargar las secciones
cargarSecciones();