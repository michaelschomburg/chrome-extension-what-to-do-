function add() {
  let list = document.getElementById('list');
  let toDoValue =  document.getElementById('entry-field').value;
  let toDoItem = document.createElement('li');
  let input = document.createElement('input');
  let itemLabel = document.createElement('label');


  if (toDoValue == "") {
    return;
  } else {

  input.setAttribute('type','checkbox');
  input.setAttribute('id', 'check')
  input.setAttribute('class', 'checkbox')
  itemLabel.setAttribute('for', 'check')
  itemLabel.setAttribute('class', 'css-label')
  toDoItem.setAttribute('class', 'list-item');
  toDoItem.appendChild(input);
  toDoItem.appendChild(itemLabel);
  toDoItem.appendChild(document.createTextNode(toDoValue));
  toDoItem.appendChild(button);
  list.appendChild(toDoItem);
  }
}



function removeElement(parentDiv, childDiv){
     if (childDiv == parentDiv) {
          alert("The parent div cannot be removed.");
     }
     else if (document.getElementById(childDiv)) {
          var child = document.getElementById(childDiv);
          var parent = document.getElementById(parentDiv);
          parent.removeChild(child);
     }
     else {
          alert("Child div has already been removed or does not exist.");
          return false;
     }
}



$(document).ready(function(){
  $(".to-remember").hide();

  $("div.header .what-to-do").click(function(){
    $("div.header .what-to-remember a").removeClass('current');
    $("div.header .what-to-do a").addClass('current');
    $(".to-remember").hide();
    $(".to-do").show();
  })

  $("div.header .what-to-remember").click(function(){
    $("div.header .what-to-do a").removeClass('current');
    $("div.header .what-to-remember a").addClass('current');
    $(".to-do").hide();
    $(".to-remember").show();
  })
});
