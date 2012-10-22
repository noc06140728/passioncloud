window.addEventListener('load', function() {
    button = document.querySelector("#show-password");
    button.addEventListener('click', function() {
        chrome.tabs.create({url: "chrome://chrome/settings/passwords"});
    });

    button = document.querySelector("#new-password");
    button.addEventListener('click', function() {
        chrome.tabs.create({url: "content.html"});
    });
});

