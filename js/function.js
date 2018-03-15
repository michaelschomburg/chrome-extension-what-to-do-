// input grab function
window.addEventListener('load', function (event){
    var createButton = document.getElementById('add');
    createButton.addEventListener('click', function() { getValue(); });
});


function getValue() {
   var inputtext = document.getElementById('inputfield').value;
   var item = document.createElement("LI");
   var text = document.createTextNode(inputtext);
   item.appendChild(text);
   document.getElementById("list").appendChild(item);
   return;
};
