$(document).ready(function(){
    //instrucciones que se ejecutan cuando carga la página!
    })

//////////////////////////////////////////////////////////////FUNCIONES RESERVA////////////////////////////////////////////////////////////////

function leerReservas() {
    $.ajax({
        url: "",
        type: 'GET',
        dataType: 'JSON',

        success: function (respuesta) {

            pintarReservas(respuesta.items);

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

function pintarReservas(items) {

    $("#listaReservas").empty();

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Carrp</th><th>Cliente</th><th>FechaInicio</th><th>FechaEntrega</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";;
        myTable += "<td>" + items[i].reservaCar + "</td>";
        myTable += "<td>" + items[i].reservaClient + "</td>";
        myTable += "<td>" + items[i].FechaInicio + "</td>";
        myTable += "<td>" + items[i].FechaEntrega + "</td>"
        //myTable += "<td><button onclick='borrarCliente(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#listaReservas").append(myTable);
}

function guardarCliente() {
    //Obtiene los valores de los input del formulario
    let carro = $("#reservaCar").val();
    let cliente = $("#reservaClient").val();
    let inicio = $("#fechaInicio").val();
    let entrega = $("#fechaEntrega").val();

    //guarda los datos del formulario en un arreglo
    let data = {
        
        car: carro,
        client: cliente,
        inicio: inicio,
        entrega: entrega
    };

    //convierte el arreglo en formato JSON
    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: "",
        type: 'POST',
        //dataType: 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success: function (algo) {
            $("#reservaCar").val("");
            $("#reservaClient").val("");
            $("#fechaInicio").val("");
            $("#fechaEntrega").val("");
        },
        error: function (xhr, status) {
            alert("error");
        }
    }

    );
}