document.addEventListener('DOMContentLoaded', function () {
    var canvas = new fabric.Canvas('tshirtCanvas');

    function resizeCanvas() {
        var containerWidth = document.getElementById('canvas-container').offsetWidth;
        canvas.setWidth(containerWidth);
        canvas.setHeight(containerWidth * 1.2); // Ajustar la altura para mantener la proporción correcta
        canvas.renderAll();
    }

    function loadTshirtImage(url) {
        fabric.Image.fromURL(url, function(img) {
            var canvasAspect = canvas.width / canvas.height;
            var imgAspect = img.width / img.height;
            var scaleFactor;

            if (canvasAspect >= imgAspect) {
                scaleFactor = canvas.height / img.height;
            } else {
                scaleFactor = canvas.width / img.width;
            }

            img.scale(scaleFactor);
            img.set({
                left: canvas.width / 2 - img.getScaledWidth() / 2,
                top: canvas.height / 2 - img.getScaledHeight() / 2,
                selectable: false
            });
            canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
        });
    }

    document.getElementById('imageSelector').addEventListener('change', function(e) {
        loadTshirtImage(e.target.value);
    });

    document.getElementById('imageLoader').addEventListener('change', function(e) {
        var reader = new FileReader();
        reader.onload = function(event) {
            var imgObj = new Image();
            imgObj.src = event.target.result;
            imgObj.onload = function() {
                var img = new fabric.Image(imgObj);
                img.scaleToWidth(200);
                canvas.add(img).setActiveObject(img);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    });

    document.getElementById('download').addEventListener('click', function() {
        var dataURL = canvas.toDataURL({
            format: 'png',
            quality: 1.0
        });
        
        // Crea un enlace para descargar la imagen
        var link = document.createElement('a');
        link.href = dataURL;
        link.download = 'diseno_personalizado.png';

        // Forzar el clic en el enlace para iniciar la descarga
        document.body.appendChild(link); // Añadir al DOM
        link.click();
        document.body.removeChild(link); // Eliminar del DOM

        // Actualiza el enlace de WhatsApp con la URL de la imagen
        var whatsappLink = document.getElementById('whatsappLink');
        whatsappLink.href = 'https://wa.me/56961448079?text=' + encodeURIComponent('Aquí está mi diseño personalizado. Descargalo aquí: ' + dataURL);
    });

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    loadTshirtImage(document.getElementById('imageSelector').value);
});
