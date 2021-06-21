function initMap() {
  const arrayHospital = []; 
  const arrayDireccion= []; 
  let coordenada ;
  let hospitalNombre = document.getElementsByClassName("hospitalTiempo")
  let hospitalDireccion = document.getElementsByClassName("hospitalDireccion")

  for (var i = 0; i < hospitalNombre.length; i++) {    
      arrayHospital[i] = hospitalNombre[i].value;
     console.log (hospitalNombre[i].value);
      }

      for (var i = 0; i < hospitalDireccion.length; i++) {    
          arrayDireccion[i] = hospitalDireccion[i].value;
        console.log (hospitalDireccion[i].value);
        }
  // initialize services
 
  const service = new google.maps.DistanceMatrixService();
  // build request
  const origin1 = { lat: 16.90360456788747, lng: -99.82193406176309 };
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
  // put request on page
  const arreglo = [];
  // get distance matrix response
  service.getDistanceMatrix(request).then((response) => {
    // put response
    const text2 = response.rows[0].elements[1].duration.text;
    console.log(text2);
  
    const arreglo2 = [];
   for(let a = 0; a < 5; a++){
    const text = response.rows[0].elements[a].duration.text;
    arreglo.push(text);
    console.log(text);
  
   }
   console.log(arreglo);
  });

var data = [];
for(var i = 0; i < 5; i++)
{

     data.push({ Hospital:arrayHospital[i], Tiempo:arreglo[i] });
     //data[data.length-1].preg.push( {pid: i, preg: "Aqui pregunta" });
}
//console.log(data);




















  }
