
var book = require('book').default();

book.use(require('./')({
    filename: __dirname + '/test.log'
}));

book.info('hello');

