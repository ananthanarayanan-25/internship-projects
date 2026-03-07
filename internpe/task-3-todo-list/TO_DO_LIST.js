var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

function addCloseButton(element) {
    element.insertAdjacentHTML('beforeend', '<span class="close">\u00D7</span>');
  }
  
  document.addEventListener('click', function(ev) {
    if (ev.target.matches('.close')) {
      ev.target.parentElement.style.display = "none";
    } else if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
  
function newElement() {
var inputValue = document.getElementById("myInput").value;
if (inputValue) {
    var li = document.createElement("li");
    li.textContent = inputValue;
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
    addCloseButton(li);
}
}