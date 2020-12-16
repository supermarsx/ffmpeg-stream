/* jshint esversion: 6 */

/*
  Stream server configuration
 */
var config = {
  name: 'stream',
  url: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',
  port: 5000
};

Stream = require('./rtsp-stream-fix');
stream = new Stream({
  name: config.name, // Stream name
  streamUrl: config.url,
  wsPort: config.port,
  ffmpegOptions: { // ffmpeg flags, Options
    /*
      	Check out the documentation to use additional flags
        https://ffmpeg.org/ffmpeg.html

        Options/flags that have no value, use a blank string like (param: '')
     */
    //'-thread_queue_size': 512,
    '-stats': '', // Print encoding progress/statistics
    '-r': 20, // Set frame rate
    //'-tune': 'zerolatency',
    //'-pix_fmt': 'yuv420p', Set pixel format
    //'-rtsp_transport': 'tcp',
    //'-f': 'lavfi', // Force input or output format
    //'-vcodec': 'libx264', // Set video codec
    //'-crf': 14,
    //'-maxrate': '1200k',
    '-qscale': 4, // Fixed quality scale
    //'-bufsize': '2400k',
    //'-video_size': '1680x1050',
    '-delay': 25,
    '-filter_complex': "[0:v]scale=1280:720,fifo[scaled]; [1:v]scale=100:-1[logo]; [2:v]scale=1280:-1,fifo[mask]; [scaled][mask]alphamerge,hue=s=0[pmask]; [pmask]boxblur=1[masked]; [0:v]scale=1280:-1,fifo[bg]; [bg][masked]overlay=format=auto[video]; [video][logo]overlay=25:25", // Complex filtergraph, overlays, etc
    //'-strict': 'experimental',
    //'-vf': 'scale=w=1280:h=720:flags=experimental+full_chroma_inp',
    //'-sws_flags':'lanczos+full_chroma_inp',
  }
});
