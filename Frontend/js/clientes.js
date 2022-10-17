$(document).ready(function(){
    //instrucciones que se ejecutan cuando carga la página!
    })

///////////////////////////////////////////////////FUNCIONES CLIENTE/////////////////////////////////////////////////////////////////////

function leerClientes() {
    $.ajax({
        url: "",
        type: 'GET',
        dataType: 'JSON',

        success: function (respuesta) {

            pintarClientes(respuesta.items);

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

function pintarClientes(items) {

    $("#listaClientes").empty();

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Nombre</th><th>Correo</th><th>Edad</th><th>Contraseña</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";;
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td>" + items[i].password + "</td>"
        //myTable += "<td><button onclick='borrarCliente(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#listaClientes").append(myTable);
}

function guardarCliente() {
    //Obtiene los valores de los input del formulario
    let nombre = $("#nameClient").val();
    let correo = $("#mailClient").val();
    let edad = $("#ageClient").val();
    let password = $("#passwordClient").val();

    //guarda los datos del formulario en un arreglo
    let data = {
        
        name: nombre,
        email: correo,
        age: edad,
        password: password
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
            $("#nameClient").val("");
            $("#mailClient").val("");
            $("#ageClient").val("");
            $("#passwordClient").val("");
        },
        error: function (xhr, status) {
            alert("error");
        }
    }

    );
}

