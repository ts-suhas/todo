function create(data){
    var table = document.getElementById("table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    c1 = newRow.insertCell(0);
    c1.innerHTML = data.name;

    c2 = newRow.insertCell(1);
    c2.innerHTML = data.date;

    c3 = newRow.insertCell(2);
    c3.innerHTML = data.description;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button onClick="onEdit(this)">UPDATE</button>
                         <button onClick="onDelete(this)">DONE</button>`;
}

function readData(){
    var data={};
    data["name"] = document.getElementById("name").value;
    data["date"] = document.getElementById("date").value;
    data["description"] = document.getElementById("description").value;
    return data;
}

function onCreate(){
    var data = readData();
    create(data);
}

function onDelete(td){
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
}

function onEdit(td){
    row = td.parentElement.parentElement;
    row.cells[0].innerHTML=document.getElementById("name").value;
    row.cells[1].innerHTML=document.getElementById("date").value ;
    row.cells[2].innerHTML=document.getElementById("description").value ;
}

