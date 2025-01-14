console.log("Service worker running !")

chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error))

chrome.runtime.onMessage.addListener(
    function (message) {
        if (message.action === "openTab" && message.url) {
            chrome.tabs.create({ url: message.url })
                .catch((error) => console.error(error))
        }
    }
)