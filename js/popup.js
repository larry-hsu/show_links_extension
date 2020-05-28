(function () {
  var bg = chrome.extension.getBackgroundPage()
  var links = bg.getLinks()

  var fragment = document.createDocumentFragment()
  var div = document.createElement('div')

  for (let i = 0; i < links.length; i++) {
    var a = document.createElement('a')
    var p = document.createElement('p')
    p.innerText = links[i]

    a.appendChild(p)
    a.setAttribute('href', links[i])
    fragment.appendChild(a)
  }

  div.appendChild(fragment)
  document.body.appendChild(div)
}())
