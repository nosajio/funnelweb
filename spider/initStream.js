const { PassThrough } = require('stream');

// Will contain all streams, to be merged into a single stream
const streams = [];

const initStream = () => {
  const stream = new PassThrough();
  return stream;
}

module.exports = initStream
