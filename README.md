[![build status](https://secure.travis-ci.org/shtylman/node-book-file.png)](http://travis-ci.org/shtylman/node-book-file)
book-file is a file transport for the [book](https://github.com/shtylman/node-book) logging framework. It will write out the json contents of the log entry.

## installation ##

```
npm install book-file
```

## use ##

book-file is used like all other book middleware. Just add it to your logger object. I recommend you create a file ```log.js``` for your project where you setup the logger however you desire across your entire project.

```javascript
// some logger you have created
var log = require('book').default();

// adds the file logging middleware to the logger
log.use(require('book-file')({
    filename: '/path/to/file.log'
});

// log stuffs, it will go to the log file
log.info('hello world!');
```

file.log will contain something along the lines of:

```
{ "level": 3, "timestamp": 12345, "message": "hello world!" }
```
