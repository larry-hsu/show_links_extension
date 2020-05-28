var allLinkArr = [];

chrome.runtime.onMessage.addListener(
  function (req, sender, sendRes) {
    sendRes(req.length)
    allLinkArr = req
  }
)

function getLinks () {
  return allLinkArr
}

