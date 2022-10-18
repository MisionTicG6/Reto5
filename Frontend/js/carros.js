$(document).ready(function(){
    //instrucciones que se ejecutan cuando carga la página!
    });

/////////////////////////////////////////////////////FUNCIONES CAR////////////////////////////////////////////////////////////

function leerCarros() {
    $.ajax({
        url: "http://129.146.83.131:8080/api/Car/all",
        type: 'GET',
        dataType: 'JSON',

        success: function (respuesta) {

            pintarCarros(respuesta.items);

        },
        error: function (xhr, status) {
            alert("error");
        }
    }

    )
}

function pintarCarros(items) {

    //declarar variables js
    let myTable = '<div class="container"> <div class="row">';
    for (i = 0; i < items.length; i++) {
        myTable += 
        
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${items[i].brandCar}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${items[i].modelCar}</h6>
        <p class="card-text">${items[i].nameCar}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        <button class="btn btn-danger" onclick='borrarCliente(" + items[i].id + ")'>Borrar</button>";
        </div>
        </div>
    }
    myTable+= "</div></div>";
    $("#listaCarros").append(myTable);
}

function guardarCarro() {
    //Obtiene los valores de los input del formulario
    let brandCar = $("#brandCar").val();
    let nameCar = $("#nameCar").val();
    let modelCar = $("#modelCar").val();
    let descriptionCar = $("#descriptionCar").val();
    let gamaCar = $("#gamaCar").val();

    //guarda los datos del formulario en un arreglo
    let data = {
        id: brandCar,
        brand: nameCar,
        model: modelCar,
        category_id: descriptionCar,
        gamaCar: gamaCar
    };

    //convierte el arreglo en formato JSON
    let dataToSend = JSON.stringify(data);


    $.ajax({
        url: "http://localhost:8080/api/Car/save",
        type: 'POST',
        //dataType: 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success: function (anything) {
            $("#brandCar").val("");
            $("#nameCar").val("");
            $("#modelCar").val("");
            $("#descriptionCar").val("");
            $("#gamaCar").val("");
        },
        error: function (xhr, status) {
            alert("error");
        }
    }

    );
}
