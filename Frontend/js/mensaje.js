$(document).ready(function(){
    //instrucciones que se ejecutan cuando carga la página!
    })

////////////////////////////////////////////////FUNCIONES MENSAJE/////////////////////////////////////////////////////////////////////////////////////

function leerMensajes() {
    $.ajax({
        url: "",
        type: 'GET',
        dataType: 'JSON',

        success: function (respuesta) {

            pintarMensajes(respuesta.items);

            // let cs=respuesta.items;

            // for(i=0;i<cs.length;i++){
            //     $("#listaClientes").append(cs[i].name);

            // }
        },
        error: function (xhr, status) {
            alert("error");
        }
    }

    )
}

function pintarMensajes(items) {

    $("#listaMensajes").empty();

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Mensaje</th> </tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].messagetext + "</td>";
        //myTable += "<td><button onclick='borrarMensaje(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#listaMensajes").append(myTable);
}

function guardarMensaje() {
    //Obtiene los valores de los input del formulario
    let mensaje = $("#mensaje").val();


    //guarda los datos del formulario en un arreglo
    let data = {
        messagetext: mensaje,
    };

    //convierte el arreglo en formato JSON
    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: "",
        type: 'POST',
        //dataType: 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success: function (anything) {

            $("#mensaje").val("");
        },
        error: function (xhr, status) {
            alert("error");
        }
    }

    );
}
