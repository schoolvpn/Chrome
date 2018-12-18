export default function () {
  document.getElementById("status").textContent = "Disconnected";
  document.getElementById('socks5connect').textContent = 'Connect'
  var config = {
    mode: "system"
  };
  chrome.proxy.settings.set(
      {value: config, scope: 'regular'},
      function() {});
  chrome.proxy.settings.get(
    {'incognito': false},
    function(config) {console.log(JSON.stringify(config));});
};
