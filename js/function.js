
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('add-button').addEventListener("click", add)
});

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
  input.setAttribute('class', 'css-checkbox')
  itemLabel.setAttribute('for', 'check')
  itemLabel.setAttribute('class', 'css-label')
  toDoItem.setAttribute('class', 'list-item');
  toDoItem.appendChild(input);
  toDoItem.appendChild(itemLabel);
  toDoItem.appendChild(document.createTextNode(toDoValue));
  toDoItem.appendChild(document.createElement('BUTTON'));
  list.appendChild(toDoItem);
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
