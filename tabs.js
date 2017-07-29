



function firstUnpinnedTab(tabs) {
  for (var tab of tabs) {
    if (!tab.pinned) {
      return tab.index;
    }
  }
}

/**
 * listTabs to switch to
 */
function listTabs() {
  getCurrentWindowTabs().then((tabs) => {
    let tabsList = document.getElementById('tabs-list');
    let currentTabs = document.createDocumentFragment();
    let limit = 5;
    let counter = 0;

    tabsList.textContent = '';

    for (let tab of tabs) {
      if (!tab.active && counter <= limit) {
        let tabLink = document.createElement('a');

        tabLink.textContent = tab.title || tab.id;
        tabLink.setAttribute('href', tab.id);
        tabLink.classList.add('switch-tabs');
        currentTabs.appendChild(tabLink);
      }

      counter += 1;
    }

    tabsList.appendChild(currentTabs);
  });
}

document.addEventListener("DOMContentLoaded", listTabs);

function getCurrentWindowTabs() {
  return browser.tabs.query({currentWindow: true});
}

document.addEventListener("click", function(e) {
  function callOnActiveTab(callback) {
    getCurrentWindowTabs().then((tabs) => {
      for (var tab of tabs) {
        if (tab.active) {
          callback(tab, tabs);
        }
      }
    });
}

/*SI LA PERSONA PRESIONA ENTER*/
 
 function wp_search_function(e){
  alert("entra");
  tecla = (e.keyCode ? e.keyCode : e.which );
  if (tecla==13) alert ('Has pulsado enter');
}

/*EN CASO DE QUE LA PERSONA LE DE AL BOTON DE BUSCAR*/  
   if (e.target.id === "tabs-create") {
    var WPFunction = document.getElementById("WPFunction").value;
    if (WPFunction == "" || WPFunction == null) {
        alert("por favor ingrese un término");
    } else {

        WPFunction = WPFunction.toLowerCase()
        var WPFunctionURL = "https://developer.wordpress.org/?s=" + WPFunction;
        browser.tabs.create({ url: WPFunctionURL });
    }
}


if (e.target.id === "tabs-wpve") {  
    var WPURL = "https://ve.wordpress.org/";
    browser.tabs.create({url: WPURL});
}
if (e.target.id === "tabs-temas") {  
    var WPURL = "https://ve.wordpress.org/themes/";
    browser.tabs.create({url: WPURL});
}
if (e.target.id === "tabs-plugins") {  
    var WPURL = "https://ve.wordpress.org/plugins/";
    browser.tabs.create({url: WPURL});
}
if (e.target.id === "tabs-meetup") {  
    var WPURL = "https://ve.wordpress.org/meetups/";
    browser.tabs.create({url: WPURL});
}
if (e.target.id === "tabs-traductor") {  
    var WPURL = "https://make.wordpress.org/polyglots/teams/?locale=es_VE";
    browser.tabs.create({url: WPURL});
}

if (e.target.id === "tabs-telegram") {  
    var WPURL = "https://t.me/WordPressVE";
    browser.tabs.create({url: WPURL});
}
if (e.target.id === "tabs-twitter") {  
    var WPURL = "https://twitter.com/wordpressvzla";
    browser.tabs.create({url: WPURL});
}



  


  e.preventDefault();
});

//onRemoved listener. fired when tab is removed
browser.tabs.onRemoved.addListener(function(tabId, removeInfo){
  console.log(`The tab with id: ${tabId}, is closing`);

  if(removeInfo.isWindowClosing) {
    console.log(`Its window is also closing.`);
  } else {
    console.log(`Its window is not closing`);
  }
});

//onMoved listener. fired when tab is moved into the same window
browser.tabs.onMoved.addListener(function(tabId, moveInfo){
  var startIndex = moveInfo.fromIndex;
  var endIndex = moveInfo.toIndex;
  console.log(`Tab with id: ${tabId} moved from index: ${startIndex} to index: ${endIndex}`);
});
