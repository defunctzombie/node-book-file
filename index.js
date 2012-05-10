
// builtin
var fs = require('fs');

module.exports = function(opt) {

    var filename = opt.filename;
    if (!filename) {
        throw new Error('filename required for book-file transport');
    }

    var write_stream = fs.createWriteStream(filename, {
        flags: 'a',
        encoding: 'utf8'
    });

    /// actual logging work
    return function() {
        write_stream.write(JSON.stringify(this) + '\n');
    }

};
