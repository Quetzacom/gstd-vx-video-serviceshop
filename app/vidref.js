/*

GSTD: Brightcove Video Player -- Query param for ref id
GE Healthcare
cory.hanson@ge.com
CJH 20190711

*/
var videoPlayer;
var vidDiv = document.getElementById('videoPlayerID');

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    vars[key] = value;
  });
  return vars;
}

function getUrlParam(parameter) {
  var urlparameter = '';
  if (window.location.href.indexOf(parameter) > -1) {
    urlparameter = getUrlVars()[parameter];
  }
  return urlparameter;
}

function loadVideoRef() {
  var ref = getUrlParam('ref');

  videoPlayer.catalog.getVideo('ref:' + ref, function(error, video) {
    videoPlayer.catalog.load(video);
    videoPlayer.play();
    vidDiv.style.display = 'block';
  });
}

videojs.getPlayer('videoPlayerID').ready(function() {
  videoPlayer = this;
  //vidDiv.style.display = "none";
  loadVideoRef();
});
