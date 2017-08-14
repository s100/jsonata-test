/***/
var fs = require("fs");

var deleteFolderRecursive = function(path) {
    if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach(function(file){
            var curPath = path + "/" + file;
            if(fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};
deleteFolderRecursive("DUMP");

var oldit = it;
it = function() { // eslint-disable-line no-global-assign
    var oldF = arguments[1];
    arguments[1] = function() {
        var path = [];
        for(var x = this.test; x.parent; x = x.parent) {
            path.push(x.title);
        }
        global._p_a_t_h_ = ["DUMP"].concat(path.reverse());
        return oldF.apply(this, arguments);
    };
    return oldit.apply(this, arguments);
};

var oldjsonata = jsonata;
jsonata = function(expr) {

    // Build test output directories
    var x = "";
    global._p_a_t_h_.forEach(function(element) {
        x += element
            .replace(/:/g, "%3A")
            .replace(/"/g, "%22")
            .replace(/\*/g, "%2A")
            .replace(/</g, "%3C")
            .replace(/>/g, "%3E")
            .replace(/\n/g, "%0A")
            .replace(/\?/g, "%3F")
            .replace(/\t/g, "%09")
            .replace(/\\/g, "%5C")
            .replace(/\//g, "%2F")
            .replace(/\|/g, "%7C") + "/";
        if(!fs.existsSync(x)) {
            fs.mkdirSync(x);
        }
    });
    fs.writeFileSync(x + "expression.jsonata", expr);

    var expression = oldjsonata.apply(this, arguments);

    var boop = {};

    var oldassign = expression.assign;
    expression.assign = function(name, value) {
        // Several tests attempt to bind functions. We can't handle that :-/
        boop[name] = value;
        return oldassign.apply(this, arguments);
    };

    var oldevaluate = expression.evaluate;
    expression.evaluate = function(input, bindings, callback) {
        fs.writeFileSync(x + "input.json", JSON.stringify(input, null, 4));

        // Only ONE test case uses this!
        boop = Object.assign(boop, bindings);

        if(Object.keys(boop).length > 0) {
            fs.writeFileSync(x + "bindings.json", JSON.stringify(boop, null, 4));
        }

        if(typeof callback === 'function') {
            var oldcallback = callback;
            callback = function(err, value) {
                if(arguments.length >= 2) {
                    fs.writeFileSync(x + "output.json", JSON.stringify(value, null, 4));
                }
                oldcallback.apply(this, arguments);
            };
            oldevaluate.apply(this, arguments);
        } else {
            var value = oldevaluate.apply(this, arguments);
            fs.writeFileSync(x + "output.json", JSON.stringify(value, null, 4));
            return value;
        }
    };

    return expression;
};
/***/

