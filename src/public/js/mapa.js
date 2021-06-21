function initMap() {


  
//console.log(geo.position);
  const arrayHospital = []; 
  const arrayDireccion = []; 
  let hospitalNombre = document.getElementsByClassName("hospitalTiempo")
  let hospitalDireccion = document.getElementsByClassName("hospitalDireccion")

  for (var i = 0; i < hospitalNombre.length; i++) {    
      arrayHospital[i] = hospitalNombre[i].value;
    // console.log (hospitalNombre[i].value);
      }
    

      for (var i = 0; i < hospitalDireccion.length; i++) {    
          arrayDireccion[i] = hospitalDireccion[i].value;
        //console.log (hospitalDireccion[i].value);
        }  //console.log(arrayDireccion);

    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: { lat: 16.8638, lng: -99.8816 },
    });
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById("right-panel"));
    const control = document.getElementById("floating-panel");
    control.style.display = "block";
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
   

    const onChangeHandler = function () {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    //document.getElementById("start").addEventListener("change", onChangeHandler);
    document.getElementById("end").addEventListener("change", onChangeHandler);


      // initialize services
   
      const service = new google.maps.DistanceMatrixService();


      navigator.geolocation.getCurrentPosition(
        async function (position){
           var geo = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            
    
      // build request
      const origin1 = geo;
      const destinationA = "Hospital General Dr. Donato G. Alarcón, gro";
      const destinationB = "Av. Adolfo Ruiz Cortinez S/N, Alta Progreso, 39610 Acapulco de Juárez, gro";
      const destinationC = "Hospital General De Acapulco, gro";
      const destinationD = "Acapulco - Aeropuerto Acapulco 1018, Icacos, 39860 Acapulco de Juárez, Gro.";
      const destinationE = "IMSS Hospital General Regional Vicente Guerrero (HGR No. 1), gro";
    
      const request = {
        origins: [origin1],
        destinations: arrayDireccion,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
      };

      //console.log(request);
      // put request on page
     
      // get distance matrix response
      service.getDistanceMatrix(request).then((response) => {
        // put response
        //const text = response.rows[0].elements[1].duration.text;
        const arregloDir = [];
        const arreglo2 = [];
       for(let x = 0; x < arrayDireccion.length; x++){
        
        const text = response.rows[0].elements[x].duration.text;
        arregloDir[x] = text;
        //arregloDir.push(text);
        //console.log(text);
       }
       //console.log(arregloDir);
       var data = [];
       for(var y = 0; y < arrayDireccion.length; y++)
{

    data.push({ Hospital:arrayHospital[y], Tiempo: arregloDir[y] });
    //data[data.length-1].preg.push( {pid: i, preg: "Aqui pregunta" });
}
//console.log(data);



function buildTable(data) {
  var table = document.createElement("table");
  table.className = "table"

  var fields = Object.keys(data[0]);
  var trHead = document.createElement("thead");
  var tBody = document.createElement("tbody");

  var trr = document.createElement("tr");
  fields.forEach(function(field) {
    var th = document.createElement("th");
    th.scope = "col"
    th.appendChild(document.createTextNode(field));
    trr.appendChild(th);
    trHead.appendChild(trr);
  });
  table.appendChild(trHead);

  data.forEach(function(object) {
      
    var tr = document.createElement("tr");

    tr.className = "table-warning"
    fields.forEach(function(field) {
      var td = document.createElement("td");
      td.appendChild(document.createTextNode(object[field]));
      tr.appendChild(td);
    });
    tBody.appendChild(tr);
    table.appendChild(tBody);
  });

  return table;
}


document.getElementById("mountains")
   .appendChild(buildTable(data));























      });
    }
    )
      
    }

    
  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
   // const origen = { lat: 16.90360456788747, lng: -99.82193406176309 };
    const end = document.getElementById("end").value;
    
    navigator.geolocation.getCurrentPosition(
        async function (position){
            var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            //geolocate = coordenada;
            directionsService.route(
                {
                  origin: geolocate,
                  destination: end,
                  travelMode: google.maps.TravelMode.DRIVING,
                },
                (response, status) => {
                  if (status === "OK") {
                    directionsRenderer.setDirections(response);
                  } else {
                    window.alert("Directions request failed due to " + status);
                  }
                }
              );
        
        
        
        }

    )
    

  }

