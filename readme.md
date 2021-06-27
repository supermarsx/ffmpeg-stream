# ffmpeg-stream

![Stream example](https://github.com/eduardomota/ffmpeg-stream/raw/master/assets/stream.png)

Forward a RTSP stream using node and output it to a websocket with an overlay filter and top left logo,  uses jsmpeg for decoding.

This stream requires jsmpeg, ffmpeg and express.

## Quick Start

1. Edit configurations as needed inside the server folder `stream-server.js`, `stream-client.js` and at `client\js\stream.js`.
2. Edit overlays as needed inside server folder `logo.png` for the logotype and `mask.png` for darkening overlay.
3. Do `npm install` to install all dependencies
4. Install `ffmpeg` and add to `PATH` if using Windows
5. Enter `server` folder and start ffmpeg streaming `node .\stream-server.js` and web server `node .\stream-client.js`.
6. Access the stream at `http://localhost:8080` if you're using the default configuration.

## License
Distributed under MIT License. See `license.md` for more information.
