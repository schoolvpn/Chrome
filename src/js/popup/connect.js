export default function () {
  document.getElementById("status").textContent = "Connected";
  document.getElementById('socks5connect').textContent = 'Disconnect'
  var config = {
    mode: "fixed_servers",
    rules: {
      singleProxy: {
        scheme: "socks5",
        host: "99.228.185.251",
        port: 1081
      }
    }
  };
  chrome.proxy.settings.set(
      {value: config, scope: 'regular'},
      function() {});
  chrome.proxy.settings.get(
    {'incognito': false},
    function(config) {console.log(JSON.stringify(config));});
};
