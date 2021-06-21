var data = [
    {Hospital: "Hospital vicente guerrero", Tiempo: "45 min"},
    {Hospital: "Hospital donato",  Tiempo: "9 min"},
  ];

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