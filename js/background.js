chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {

}

chrome.storage.local.set({key: value}, function() {
  console.log('Value is set to' + value);
});

chrome.storage.local.set(['key'], function(){
  console.log('Value currently is ' + result.key);
});
