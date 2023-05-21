setInterval(() => {
    chrome.storage.local.get('whatsappCheckbox', function (result) {
        if(result.whatsappCheckbox === "true"){
            hideWhatsappCounters();
        }
    });
}, 5000);

function hideWhatsappCounters(){
    // Contact counters 
    let counters = document.querySelectorAll('[data-testid="icon-unread-count"]');
    counters.forEach(c => { c.style.display = 'none'; });

    // Status counter
    document.querySelector('[data-testid="menu-bar-status"]').querySelectorAll('path')[1].style.display = 'none';

    // Page title and favicon
    document.querySelector('title').textContent = 'WhatsApp';
    document.getElementById('favicon').href = 'favicon-64x64.ico';
    document.getElementById('favicon').src = 'favicon-64x64.ico';
}