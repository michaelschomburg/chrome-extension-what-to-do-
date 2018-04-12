// When document is loaded this adds a click EventListener to the add button
// chrome does not allow inline JS events

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('add-button').addEventListener("click", add);
  document.getElementById('save-text').addEventListener("click", save)
});

// when the document is ready this adds the toogle functionality to the nav background
// this hides and shows the to-do and to-remember div
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

// Save it using the Chrome extension storage API.
    chrome.storage.sync.set({'foo': 'hello', 'bar': 'he'}, function() {
      // console.log('Settings saved');
    });


// Read it using the storage API
    chrome.storage.sync.get(null, function(items) {
      // console.log('Settings retrieved' + Object.keys(items).value);

      Object.keys(items).forEach((key) => {
        render(items[key]);

      })
    });

    chrome.storage.sync.get(['text'], function(notes) {
      Object.keys(notes).forEach((key) => {
        save(function(){
          return this;
        })
      })
    });


function render(value){
  let list = document.getElementById('list');
  let toDoValue =  value;
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


function add() {
  let toDoValue = document.getElementById('entry-field').value;
  chrome.storage.sync.set({[Math.random()]: toDoValue}, function() {
   render(toDoValue)
  });

}

function save() {
  let saveText = document.getElementById('txt').value;
  chrome.storage.sync.set({'text' : saveText}, function() {
  });
}
