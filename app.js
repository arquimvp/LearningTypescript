//ejemplo de un control de volume en una app de audio.
//Me sirve para hacer referencia a algun valor a traves de una descripcion mayormente logica.
var Volume;
(function (Volume) {
    Volume[Volume["min"] = 1] = "min";
    Volume[Volume["medio"] = 5] = "medio";
    Volume[Volume["max"] = 10] = "max";
})(Volume || (Volume = {}));
var currentVolume = Volume.medio;
console.log(currentVolume);
console.log(Volume);
