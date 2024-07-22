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

var imageModal = document.getElementById('imageModal')
        imageModal.addEventListener('show.bs.modal', function (event) {
            var button = event.relatedTarget
            var recipient = button.getAttribute('data-bs-whatever')
            var modalImage = imageModal.querySelector('#modalImage')
            modalImage.src = recipient
        })