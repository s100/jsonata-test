/**
 * © Copyright IBM Corp. 2016 All Rights Reserved
 *   Project name: JSONata
 *   This project is licensed under the MIT License, see LICENSE
 */

'use strict';

var assert = require('assert');
var chai = require("chai");
var fs = require("fs");
var jsonata = require('jsonata');
var path = require("path");

var expect = chai.expect;

var consumeDirectory = function(p) {

    var trueName = path.basename(p)
        .replace(/%3A/g, ":")
        .replace(/%22/g, "\"")
        .replace(/%2A/g, "*")
        .replace(/%3C/g, "<")
        .replace(/%3E/g, ">")
        .replace(/%0A/g, "\n")
        .replace(/%3F/g, "\?")
        .replace(/%09/g, "\t")
        .replace(/%5C/g, "\\")
        .replace(/%2F/g, "/")
        .replace(/%7C/g, "|");

    var innerDirectories = fs.readdirSync(p)
        .map(fn => p + '/' + fn)
        .filter(fn => fs.statSync(fn).isDirectory());

    var directoryIsIt = fs.existsSync(p + '/expression.jsonata');
    var directoryIsDescribe = innerDirectories.length > 0;

    if(directoryIsIt) {
        if(directoryIsDescribe) {
            throw Error(p + " is both an it() and a describe()");
        }
        it(trueName, function() {
            var str = fs.readFileSync(p + '/expression.jsonata', 'utf8');
            if(!fs.existsSync(p + '/input.json')) {
                expect(() => jsonata(str)).to.throw();
                return;
            }

            var expression = jsonata(str);
            var input = JSON.parse(fs.readFileSync(p + '/input.json'));

            if(fs.existsSync(p + '/bindings.json')) {
                var bindings = JSON.parse(fs.readFileSync(p + '/bindings.json'));
                Object.keys(bindings).forEach(key => {
                    expression.assign(key, bindings[key]);
                });
            }

            if(!fs.existsSync(p + '/output.json')) {
                expect(() => expression.evaluate(input)).to.throw();
                return;
            }

            var actual = expression.evaluate(input);
            var expected = JSON.parse(fs.readFileSync(p + '/output.json'));
            expect(actual).to.deep.equal(expected);
        });
    } else if(directoryIsDescribe) {
        describe(trueName, function () {
            innerDirectories.forEach(consumeDirectory);
        });
    } else {
        throw Error(p + " is neither an it() nor a describe()");
    }
};

fs.readdirSync("./data").map(fn => "./data/" + fn).forEach(consumeDirectory);
