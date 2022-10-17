$(document).ready(function(){
    //instrucciones que se ejecutan cuando carga la página!
    })


////////////////////////////////////////////////////FUNCIONES GAMA/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
function leerGama() {
    $.ajax({
        url: "",
        type: 'GET',
        dataType: 'JSON',

        success: function (respuesta) {

            pintarGama(respuesta.items);

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

function pintarGama(items) {

    $("#listaGama").empty();

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Nombre</th><th>Descripción</th> </tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].nameGama + "</td>";
        myTable += "<td>" + items[i].descriptionGama + "</td>";
        //myTable += "<td><button onclick='borrarMensaje(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#listaGama").append(myTable);
}

function guardarGama() {
    //Obtiene los valores de los input del formulario
    let nameGama = $("#nameGama").val();
    let descriptionGama = $("#descriptionGama").val();


    //guarda los datos del formulario en un arreglo
    let data = {
        nameGama: nameGama,
        descriptionGama: descriptionGama,
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
            $("#nameGama").val("");
            $("#descriptionGama").val("");
        },
        error: function (xhr, status) {
            alert("error");
        }
    }

    );
}
