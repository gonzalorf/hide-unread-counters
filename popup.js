// Set events
window.onload = function() {
    loadInitialState();
  }

console.log('popup.js');

// Load the initial state of the checkboxes from Local Storage
function loadInitialState() {

    console.log('loadInitialState');
    // Retrieve the stored state from Local Storage for each checkbox
    let whatsappCheckbox = document.getElementById("whatsappCheckbox");
    let facebookCheckbox = document.getElementById("facebookCheckbox");

    let whatsappState = chrome.storage.local.get(["whatsappCheckbox"]);
    let facebookState = chrome.storage.local.get(["facebookCheckbox"]);

    chrome.storage.local.get('whatsappCheckbox', function (result) {
        whatsappCheckbox.checked = result.whatsappCheckbox === "true";
    });

    chrome.storage.local.get('facebookCheckbox', function (result) {
        facebookCheckbox.checked = result.facebookCheckbox === "true";
    });

    // Update the checkbox state on the page
    whatsappCheckbox.checked = whatsappState === "true";
    facebookCheckbox.checked = facebookState === "true";

    // Button Save
    document.getElementById("btnSave").addEventListener("click", (event) => {
        let whatsappCheckbox = document.getElementById("whatsappCheckbox");
        let facebookCheckbox = document.getElementById("facebookCheckbox");
        chrome.storage.local.set({ "whatsappCheckbox": whatsappCheckbox.checked ? "true" : "false" });
        chrome.storage.local.set({ "facebookCheckbox": facebookCheckbox.checked ? "true" : "false" });
        window.close();
      });

      console.log('loadInitialState end');
}
