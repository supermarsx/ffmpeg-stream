/*
  Stream configuration
 */
var config = {
  url: 'ws://localhost:5000/'
};

var canvas = document.getElementById('video-canvas');
var url = config.url;
var player = new JSMpeg.Player(url, {
  canvas: canvas
});
