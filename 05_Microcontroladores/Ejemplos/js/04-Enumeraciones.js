"use strict";
var Comisiones;
(function (Comisiones) {
    Comisiones[Comisiones["alta"] = 0.15] = "alta";
    Comisiones[Comisiones["media"] = 0.1] = "media";
    Comisiones[Comisiones["baja"] = 0.05] = "baja";
})(Comisiones || (Comisiones = {}));
const ventas = 1000;
let dineroComision;
if (ventas > 10000) {
    dineroComision = ventas * Comisiones.alta;
}
else if (ventas > 5000) {
    dineroComision = ventas * Comisiones.media;
}
else {
    dineroComision = ventas * Comisiones.baja;
}
console.log(dineroComision);
var VolumenAudio;
(function (VolumenAudio) {
    VolumenAudio[VolumenAudio["bajo"] = 0] = "bajo";
    VolumenAudio[VolumenAudio["medio"] = 1] = "medio";
    VolumenAudio[VolumenAudio["alto"] = 2] = "alto";
})(VolumenAudio || (VolumenAudio = {}));
console.log(VolumenAudio.alto);
//# sourceMappingURL=04-Enumeraciones.js.map