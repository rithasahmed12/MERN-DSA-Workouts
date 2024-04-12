const fs = require('fs');
const { Readable, Writable, Duplex, Transform } = require('stream');

// Readable stream example
const readableStream = new Readable({
  read() {
    this.push('Hello, ');
    this.push('world!');
    this.push(null); // Indicates end of data
  }
});

readableStream.pipe(process.stdout); // Output: Hello, world!

// Writable stream example
const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback(); // Indicates the write operation is complete
  }
});

readableStream.pipe(writableStream); // Output: Hello, world!

// Duplex stream example
const duplexStream = new Duplex({
  read() {
    // Implement read functionality
  },
  write(chunk, encoding, callback) {
    // Implement write functionality
    callback(); // Indicates the write operation is complete
  }
});

// Transform stream example
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    // Implement transformation logic
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

// Piping streams
readableStream.pipe(transformStream).pipe(process.stdout); // Output: HELLO, WORLD!
