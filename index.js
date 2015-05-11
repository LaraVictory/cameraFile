function sacafoto(){


navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI
});


}

function onSuccess(ruta) {
    var image = document.getElementById('myImage');
    image.src = ruta;
	var parrafo = document.getElementById('texto');
	parrafo.innerHTML = ruta;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
