document.querySelectorAll('.carousel-item img').forEach(img => {
    img.addEventListener('click', function () {
        const src = this.getAttribute('data-bs-whatever');
        document.getElementById('modalImage').src = src;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#carouselExample');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000, // Intervalo en milisegundos (2 segundos)
        ride: 'carousel'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var poleraModal = document.getElementById('poleraModal');
    
    // Escucha el evento de mostrar el modal
    poleraModal.addEventListener('show.bs.modal', function (event) {
        // Botón que disparó el modal
        var button = event.relatedTarget;

        // Extrae la información de los atributos data
        var title = button.getAttribute('data-title');
        var description = button.getAttribute('data-description');
        var image = button.getAttribute('data-image');
        
        // Actualiza el contenido del modal
        var modalTitle = poleraModal.querySelector('#modalTitle');
        var modalDescription = poleraModal.querySelector('#modalDescription');
        var modalImage = poleraModal.querySelector('#modalImage');

        // Asegúrate de que la imagen se esté seleccionando correctamente
        if (modalImage) {
            modalImage.src = image;
        }

        modalTitle.textContent = title;
        modalDescription.textContent = description;
    });
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('polera-image')) {
        const imgSrc = e.target.src;
        const title = e.target.dataset.title;
        const description = e.target.dataset.description;

        // Configurar el contenido del modal
        document.getElementById('modalImage').src = imgSrc;
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalDescription').textContent = description;

        // Configurar los enlaces de redes sociales
        const encodedMessage = encodeURIComponent(title + ': ' + description);

        // WhatsApp (para enviar un mensaje)
        document.getElementById('whatsappLink').href = `https://wa.me/56961448079?text=${encodedMessage}`;
        
        // Instagram (para visitar el perfil)
        document.getElementById('instagramLink').href = `https://www.instagram.com/jaramacolor/`;

        // Facebook (para visitar la página de Facebook)
        document.getElementById('facebookLink').href = `https://www.facebook.com/profile.php?id=61556638503592`;

        // Mostrar el modal
        const modal = new bootstrap.Modal(document.getElementById('poleraModal'));
        modal.show();
    }
});

