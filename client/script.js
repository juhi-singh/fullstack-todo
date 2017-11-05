var deleteRow = function(x){
    alert('work done?');
    var l = document.getElementById(''+x+'');
    var ulE = document.getElementById('listParent');
    ulE.removeChild(l);
}

var checkForEnter = function(e) {
    if(e.keyCode == 13){
        addRow();
        clearField();
    }
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.responseText));
        document.getElementById("demo").innerHTML =
        JSON.parse(this.responseText)[3].name;
      }
    };
    xhttp.open("GET", "http://localhost:3000", true);
    xhttp.send();
  }

var addRow = function(){
    var l = document.createElement("li");
    var img = document.createElement('img');
    var task = document.getElementById('taskInput');
    var ulE = document.getElementById('listParent');
    img.src = "images/delete.png";
    l.id = ulE.childElementCount + 1;
    img.onclick = function() { deleteRow(l.id)};
    l.innerHTML = task.value;
   
    l.appendChild(img);
    ulE.appendChild(l);

}

var clearField =function(){
    document.getElementById('taskInput').value="";

}

