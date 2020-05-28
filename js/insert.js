function getAllLinks () {
  var res = document.getElementsByTagName('a')
  var arr = [].slice.call(res)

  for (let i=0; i<arr.length; i++) {
    if (!arr[i].hasOwnProperty('href')) {
     arr.splice(i, 1)
    }
  }

  return arr
}

var msg = getAllLinks()

var hrefs = []

for (let i=0; i<msg.length; i++) {
  if (msg[i].href.indexOf('javascript') === -1) {
    hrefs.push(msg[i].href)
  }
}
console.log(hrefs)

chrome.runtime.sendMessage(
  hrefs,
  function (res) {
    console.log(res)
  }
)