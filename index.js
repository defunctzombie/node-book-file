
// builtin
var fs = require('fs');

module.exports = function(opt) {

    var filename = opt.filename;
    if (!filename) {
        throw new Error('filename required for book-file transport');
    }

    // dont handle renamed file
    var no_move = opt.no_move;

    var write_stream;

    (function new_log_file() {
        write_stream = fs.createWriteStream(filename, {
            flags: 'a',
            encoding: 'utf8'
        });

        if (!no_move) {
            var watcher = fs.watch(filename, function(ev) {
                if (ev === 'rename') {
                    // stop watching this fd
                    watcher.close();

                    // init new file
                    new_log_file();
                }
            });
        }
    })();

    /// actual logging work
    return function() {
        write_stream.write(JSON.stringify(this) + '\n');
    }

};
