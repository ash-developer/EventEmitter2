var simpleEvents = require('nodeunit').testCase;

if(typeof require !== 'undefined') {
    EventEmitter2 = require('../../lib/eventemitter2').EventEmitter2;
} else {
    EventEmitter2 = window.EventEmitter2;
}

module.exports = simpleEvents({

    '1. delimeter at the start': function (test) {
        var emitter = new EventEmitter2({
            wildcard: true
        });

        emitter.on('.ns1.ns2', function () {
            test.ok(true, 'event was raised');
        });

        emitter.emit('.ns1.ns2');

        test.expect(1);
        test.done();
    },
    '2. delimeter at the end': function (test) {
        var emitter = new EventEmitter2({
            wildcard: true
        });

        emitter.on('ns1.ns2.', function () {
            test.ok(true, 'event was raised');
        });

        emitter.emit('ns1.ns2.');

        test.expect(1);
        test.done();
    },
    '3. custome delimeter at the start': function (test) {
        var emitter = new EventEmitter2({
            wildcard: true,
            delimeter: '/'
        });

        emitter.on('/ns1/ns2', function () {
            test.ok(true, 'event was raised');
        });

        emitter.emit('/ns1/ns2');

        test.expect(1);
        test.done();
    },
    '4. custome delimeter at the end': function (test) {
        var emitter = new EventEmitter2({
            wildcard: true
        });

        emitter.on('ns1/ns2/', function () {
            test.ok(true, 'event was raised');
        });

        emitter.emit('ns1/ns2/');

        test.expect(1);
        test.done();
    }

});