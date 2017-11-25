var currentPage = 1;
var data = JSON.parse(localStorage.getItem("notedata")) || [];
function resetPage(pagenum){
  var currentDataPage = data[pagenum];
  if(!currentDataPage){
    currentDataPage = [];
  }
  var notes = document.querySelectorAll(".notepad input");
  for(var i = 0;i<notes.length;i++){
    let notedata = "";
    if(currentDataPage[i]){
      notedata = currentDataPage[i];
    }
    notes[i].value = notedata;
  }
  document.getElementById("pg").innerHTML = pagenum;
}
function checkinput(input){
  if(!data[currentPage]){
    data[currentPage] = [];
  }
  data[currentPage][parseInt(input.getAttribute("class"))] = input.value;
  console.log(data);
  localStorage.setItem("notedata",JSON.stringify(data));
}
function pageChange(add){
  currentPage += add;
  if(currentPage<1){
    currentPage = 1;
  }
  resetPage(currentPage);
}
window.onload = function(){
  resetPage(currentPage);
}
