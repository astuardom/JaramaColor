// Datos simulados del catálogo
const catalogo = [
    { img: 'assets/img/1.jpg', title: 'Polera 1', description: 'Descripción de la Polera 1' },
    { img: 'assets/img/2.jpg', title: 'Polera 2', description: 'Descripción de la Polera 2' },
    { img: 'assets/img/3.jpg', title: 'Polera 3', description: 'Descripción de la Polera 3' },
    { img: 'assets/img/4.jpg', title: 'Polera 4', description: 'Descripción de la Polera 4' },
    { img: 'assets/img/5.jpg', title: 'Polera 5', description: 'Descripción de la Polera 5' },
    { img: 'assets/img/6.jpg', title: 'Polera 5', description: 'Descripción de la Polera 5' },
    { img: 'assets/img/7.jpg', title: 'Polera 5', description: 'Descripción de la Polera 5' },
    { img: 'assets/img/8.jpg', title: 'Polera 5', description: 'Descripción de la Polera 5' },
    { img: 'assets/img/9.jpg', title: 'Polera 5', description: 'Descripción de la Polera 5' },
    { img: 'assets/img/10.jpg', title: 'Polera 5', description: 'Descripción de la Polera 5' },
    { img: 'assets/img/11.jpg', title: 'Polera 5', description: 'Descripción de la Polera 5' },
    { img: 'assets/img/12.jpg', title: 'Polera 5', description: 'Descripción de la Polera 5' },
    // Añade más objetos aquí
];

const itemsPorPagina = 9;

function cargarCatalogo(pagina) {
    const startIndex = (pagina - 1) * itemsPorPagina;
    const endIndex = pagina * itemsPorPagina;
    const items = catalogo.slice(startIndex, endIndex);

    const contenedor = document.querySelector('.row');
    contenedor.innerHTML = ''; // Limpiar contenedor

    items.forEach(item => {
        const card = `
            <div class="col">
                <div class="card border-info text-black h-100">
                    <img src="${item.img}" class="card-img-top polera-image" data-title="${item.title}" data-description="${item.description}" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += card;
    });

    // Generar paginación
    const numPaginas = Math.ceil(catalogo.length / itemsPorPagina);
    const paginacion = document.querySelector('.pagination');
    paginacion.innerHTML = '';

    for (let i = 1; i <= numPaginas; i++) {
        const paginaItem = `
            <li class="page-item ${i === pagina ? 'active' : ''}">
                <a class="page-link" href="?page=${i}">${i}</a>
            </li>
        `;
        paginacion.innerHTML += paginaItem;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pagina = parseInt(urlParams.get('page')) || 1;
    cargarCatalogo(pagina);
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('polera-image')) {
        const imgSrc = e.target.src;
        const title = e.target.dataset.title;
        const description = e.target.dataset.description;

        document.getElementById('modalImage').src = imgSrc;
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalDescription').textContent = description;

        const modal = new bootstrap.Modal(document.getElementById('poleraModal'));
        modal.show();
    }
});
