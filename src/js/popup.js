import "../css/popup.css";
import connect from "./popup/connect";
import disconnect from "./popup/disconnect";

chrome.proxy.settings.get({'incognito': false}, (config) => {
        console.log(config)
        if (config.value.mode != "fixed_servers") {
            document.getElementById("status").textContent = "Disconnected";
            document.getElementById('socks5connect').textContent = 'Connect'
            document.getElementById('socks5connect').addEventListener('click', connect);
        }
        else if (config.value.rules.singleProxy.scheme === "socks5") {
            document.getElementById("status").textContent = "Connected";
            document.getElementById('socks5connect').textContent = 'Disconnect'
            document.getElementById('socks5connect').addEventListener('click', disconnect);
        }
        else {
            document.getElementById("status").textContent = "Unknown";
        }
    }
)