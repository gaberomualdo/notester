// Get Cursor position within textbox, copied from https://stackoverflow.com/questions/2897155/get-cursor-position-in-characters-within-a-text-input-field
function getPosition (oField) {

  // Initialize
  var iCaretPos = 0;

  // IE Support
  if (document.selection) {

    // Set focus on the element
    oField.focus();

    // To get cursor position, get empty selection range
    var oSel = document.selection.createRange();

    // Move selection start to 0 position
    oSel.moveStart('character', -oField.value.length);

    // The caret position is selection length
    iCaretPos = oSel.text.length;
  }

  // Firefox support
  else if (oField.selectionStart || oField.selectionStart == '0')
    iCaretPos = oField.selectionStart;

  // Return results
  return iCaretPos;
}
// Set Cursor position within textbox, copied from https://stackoverflow.com/questions/499126/jquery-set-cursor-position-in-text-area
function setSelectionRange(input, selectionStart, selectionEnd) {
  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(selectionStart, selectionEnd);
  }
  else if (input.createTextRange) {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', selectionEnd);
    range.moveStart('character', selectionStart);
    range.select();
  }
}

function setCaretToPos (input, pos) {
  setSelectionRange(input, pos, pos);
}


function checkkeys(e,input){
  if(e.keyCode == 13){
    var newinput = document.getElementsByClassName(parseInt(input.getAttribute("class"))+1)[0];
    if(newinput && newinput.value.length<=0){
      newinput.focus();
      setCaretToPos(newinput,0);
    }
  }
  if(e.keyCode == 37){
    if(getPosition(input)==0){
      var newinput = document.getElementsByClassName(parseInt(input.getAttribute("class"))-1)[0];
      if(newinput){
        e.preventDefault();
        newinput.focus();
        setCaretToPos(newinput,newinput.value.length);
      }
    }
  }
  if(e.keyCode == 39){
    if(getPosition(input)==input.value.length){
      var newinput = document.getElementsByClassName(parseInt(input.getAttribute("class"))+1)[0];
      if(newinput){
        e.preventDefault();
        newinput.focus();
        setCaretToPos(newinput,0);
      }
    }
  }
  if(e.keyCode == 40 || e.keyCode == 38){
    e.preventDefault();
  }
  if(e.keyCode == 40){
    var current = getPosition(input);
    var newinput = document.getElementsByClassName(parseInt(input.getAttribute("class"))+1)[0];
    if(newinput){
      newinput.focus();
      setCaretToPos(newinput,current);
    }
  }
  if(e.keyCode == 38){
    var current = getPosition(input);
    var newinput = document.getElementsByClassName(parseInt(input.getAttribute("class"))-1)[0];
    if(newinput){
      newinput.focus();
      setCaretToPos(newinput,current);
    }
  }
}
