import * as fs from "fs";
const Speaker = require("speaker"); // tslint:disable-line:no-var-requires
import { AudioContext } from "web-audio-api";

export default class Player {
  private filename: string;
  private context: AudioContext;
  constructor(filename: string) {
    this.filename = filename;
    this.context = new AudioContext();
    this.context.outStream = new Speaker({
      bitDepth: this.context.format.bitDepth,
      channels: this.context.format.numberOfChannels,
      sampleRate: this.context.sampleRate,
    });
  }
  public play() {
    fs.readFile(this.filename, (err, buffer) => {
      if (err) {
        throw err;
      }
      this.context.decodeAudioData(buffer, (audioBuffer) => {
        const bufferNode = this.context.createBufferSource();
        bufferNode.connect(this.context.destination);
        bufferNode.buffer = audioBuffer;
        bufferNode.loop = false;
        bufferNode.start(0);
      }, (err2) => { throw(err2); });
    });
  }
}
