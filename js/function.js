// When document is loaded this adds a click EventListener to the add button
// chrome does not allow inline JS events

    document.addEventListener('DOMContentLoaded', function(){
      document.getElementById('add-button').addEventListener("click", add);
      // document.getElementById('test-button').addEventListener("change", checkBox);
      document.getElementById('txt').addEventListener("mouseout", save)
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
// this changes te color on click
      // $('.bold, .italic, .underline').click(function() {
      //   $(this).toggleClass("clicked");
      // })

        $("#bold").click(function() {
          document.execCommand('bold', false, null);
          $(this).toggleClass("clicked");
        });

        $("#italic").click(function() {
          document.execCommand('italic', false, null);
          $(this).toggleClass("clicked");
        });

        $("#underline").click(function() {
          document.execCommand('underline', false, null);
          $(this).toggleClass("clicked");
        });
    });


// Read it using the storage API
    chrome.storage.sync.get(null, function(items) {
      Object.keys(items).forEach((key) => {
        if (key  !=['text']) {
          render(items[key]);
        }
      })
    });

    chrome.storage.sync.get("text", function(items) {
      if(!chrome.runtime.error) {
        document.getElementById("txt").innerText = items.text;
      }
    })

// Function to set up the list items
    function render(value){
      let list = document.getElementById('list');
      let toDoValue =  value;
      let toDoItem = document.createElement('li');
      let input = document.createElement('input');
      let itemLabel = document.createElement('label');
      let deleteButton = document.createElement('button')
      let listLe = document.getElementsByTagName('li').length;
      if (toDoValue == "") {
        return;
      }
       else {
        input.setAttribute('type','checkbox');
        input.setAttribute('id', 'check '+listLe);
        input.setAttribute('class', 'css-checkbox '+listLe);
        input.onclick = done;
        itemLabel.setAttribute('for', 'check');
        itemLabel.setAttribute('class', 'css-label');
        toDoItem.setAttribute('class', 'list-item');
        toDoItem.setAttribute('id', listLe);
        deleteButton.setAttribute('id', listLe);
        deleteButton.onclick = trashIt;
        toDoItem.appendChild(input);
        toDoItem.appendChild(itemLabel);
        toDoItem.appendChild(document.createTextNode(toDoValue));
        toDoItem.appendChild(deleteButton);
        list.appendChild(toDoItem);
      }

    }
// Event Function: Add to-do item to list

    function add() {
      let listLe = document.getElementsByTagName('li').length;
      let toDoValue = document.getElementById('entry-field').value;
      chrome.storage.sync.set({[listLe]: toDoValue}, function() {
      render(toDoValue)
      });

    }

// Event Function: save note text to storage on change
    function save() {
      let saveText = document.getElementById('txt').textContent;
      chrome.storage.sync.set({"text" : saveText}, function() {
      });
    }

// Event Function: save note text to storage on change

    function trashIt(e) {
      let id = e.target.id;
      let li = e.target.parentElement;
      let key = id;
      let ul = document.getElementById('list')
      chrome.storage.sync.remove(key);
      ul.removeChild(li);
    }

    function done(e) {
      var id = e.target.id;
      var li = e.target.parentElement;
      let check = document.getElementById(id).checked;
      console.log(check);
      if (check == false) {
        li.style.color = "black";
      } else {
        li.style.color = "#CCCCCC";
      }
    }
