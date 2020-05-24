//Esta clase sirve para crear ordenes en forma de objetos
class NuevaOrden {
    constructor(mesa, fPBebida, fPBebidaCant, fPComida, fPComidaCant, sPBebida, sPBebidaCant, sPComida, sPComidaCant) {
        this.mesa = mesa
        this.fPBebida = fPBebida,
            this.fPBebidaCant = fPBebidaCant,
            this.fPComida = fPComida,
            this.fPComidaCant = fPComidaCant,
            this.sPBebida = sPBebida,
            this.sPBebidaCant = sPBebidaCant,
            this.sPComida = sPComida,
            this.sPComidaCant = sPComidaCant,
            this.array = [fPBebida, fPBebidaCant, fPComida, fPComidaCant, sPBebida, sPBebidaCant, sPComida, sPComidaCant];
    }
    Present() {
        return "La " + this.mesa + " Ordeno: " + this.array.join(", ");
    }
}
//Esta clase sirve para crear los perfiles de la comida
class ProductoVenta {
    constructor(nombre, precio) {
        this.nombre = nombre,
            this.precio = precio;
    }
}
//Aquí se están creando los objetos para cada consumible
var agua = new ProductoVenta("Agua", 10);
var coca = new ProductoVenta("Coca", 15);
var pepsi = new ProductoVenta("Pepsi", 15);
var fanta = new ProductoVenta("Fanta", 15);
var tlayuda = new ProductoVenta("Tlayuda", 30);
var tostada = new ProductoVenta("Tostada", 12);
var empanada = new ProductoVenta("Empnada", 14);
var pambazo = new ProductoVenta("Pambazo", 25);
var flauta = new ProductoVenta("Flauta", 18);
var huarache = new ProductoVenta("Huarache", 35);
var sope = new ProductoVenta("Sope", 13);
var gordita = new ProductoVenta("Gordita", 16);

//Aquí se crean las ordenes utilizando los valores de los consumibles
var orden1 = new NuevaOrden("mesa 1", agua.nombre, 1, tlayuda.nombre, 1, coca.nombre, 1, tostada.nombre, 3);
var orden2 = new NuevaOrden("mesa 2", agua.nombre, 1, empanada.nombre, 5, agua.nombre, 1, pambazo.nombre, 2);
var orden3 = new NuevaOrden("mesa 3", agua.nombre, 1, flauta.nombre, 3, coca.nombre, 1, tostada.nombre, 5);
var orden4 = new NuevaOrden("mesa 4", pepsi.nombre, 1, huarache.nombre, 1, coca.nombre, 1, gordita.nombre, 3);
var orden5 = new NuevaOrden("mesa 5", fanta.nombre, 1, sope.nombre, 5, agua.nombre, 1, tostada.nombre, 2);
var ordenes = [orden1, orden2, orden3, orden4, orden5];
//Este es un ejemplo de posible uso de JSON, aquí se está simulando el pedido el array de ordenes
var ordenesJSON = JSON.stringify(ordenes);
//Aquí lo estaríamos traducioendo a lenguaje de JS para poder usarlo en el código
ordenes = JSON.parse(ordenesJSON)

//Esta función nos ayuda a crear las cuentas mediante la distinción de la bebida que se haya escogido junto con su precio
function CuentaComida(comida) {
    var cantidadComida = "";
    //Se utiliza el IfElse para crear una cadena de condiciones, de igual forma se pudo haber utilizado un switch
    if (comida == tlayuda.nombre) {
        cantidadComida += tlayuda.nombre + "   " + tlayuda.precio + "<br>";
    } else {
        if (comida == tostada.nombre) {
            cantidadComida += tostada.nombre + "   " + tostada.precio + "<br>";
        } else {
            if (comida == empanada.nombre) {
                cantidadComida += empanada.nombre + "   " + empanada.precio + "<br>";
            } else {
                if (comida == pambazo.nombre) {
                    cantidadComida += pambazo.nombre + "   " + pambazo.precio + "<br>";
                } else {
                    if (comida = flauta.nombre) {
                        cantidadComida += flauta.nombre + "   " + flauta.precio + "<br>";
                    } else {
                        if (comida == huarache.nombre) {
                            cantidadComida += huarache.nombre + "   " + huarache.precio + "<br>";
                        } else {
                            if (comida == sope.nombre) {
                                cantidadComida += sope.nombre + "   " + sope.precio + "<br>";
                            } else {
                                if (commida == gordita.nombre) {
                                    cantidadComida += gordita.nombre + "   " + gordita.precio + "<br>";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    //Nos regresa la cadna de texto que será impresa y mostrada al usuario
    return cantidadComida;
}
//Esta función nos ayuda a crear las cuentas mediante la distinción de la comida que se haya escogido junto con su precio
function CuentaBebida(bebida) {
    var cantidadBebidas = "";
    //Se utiliza el IfElse para crear una cadena de condiciones, de igual forma se pudo haber utilizado un switch
    if (bebida == agua.nombre) {
        cantidadBebidas += agua.nombre + "   " + agua.precio + "<br>";
    } else {
        if (bebida == coca.nombre) {
            cantidadBebidas += coca.nombre + "   " + coca.precio + "<br>";
        } else {
            if (bebida == pepsi.nombre) {
                cantidadBebidas += pepsi.nombre + "   " + pepsi.precio + "<br>";
            } else {
                if (bebida == fanta.nombre) {
                    cantidadBebidas += fanta.nombre + "   " + fanta.precio + "<br>";
                }
            }
        }
    }
    //Nos regresa la cadna de texto que será impresa y mostrada al usuario
    return cantidadBebidas;
}