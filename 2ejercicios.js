//Ejercicio UNO enviado por Jose Luis!

let usuarias =  [];
                   
let obtenerChatStatus = (arrayUsuarias) => {

    if (arrayUsuarias.length == 1){

        return console.log("La usuaria "+arrayUsuarias[0]+" esta conectada")

    }else if (arrayUsuarias.length == 2){

       return console.log("Las usuarias "+arrayUsuarias[0]+" y "+arrayUsuarias[1]+" estan conectadas")

     }else{
        
        let usuariasExtra = arrayUsuarias.length - 2;

        return console.log("Las usuarias "+arrayUsuarias[0]+", "+arrayUsuarias[1]+" y "+usuariasExtra+" persona(s) estan conectadas")
     }
    }

     obtenerChatStatus(["ada", "josefa", "manuela", "marisa", "luisa"]);


//-------------Ejercicio DOS

let esMatrizCuadrada = ([a1,a2,a3]) => {

if ((a1.length == 3 & a2.length == 3) && a3.length == 3) {

     return console.log(true)

}else{
    return console.log(false)
}

}

esMatrizCuadrada([[1,2,3],[1,2,3],[1,2,3]]);