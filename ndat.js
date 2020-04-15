let fs = require('fs'),
    yargs = require('yargs').argv,
    path = require('path');

let opts = {
    output: path.resolve(process.cwd(), "ndat", "package.dat"),
    chunks: true,
    exclude: ["node_modules/*", "ndat/*", "dist/*"],
    temp: path.resolve(process.cwd(), "temp")
};

if (yargs.config) {
    let cfg = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), yargs.config), 'utf8'));
    for (let key in cfg) {
        opts[key] = cfg[key];
    }
} else {
    if (yargs.output) {
        opts.output = path.resolve(process.cwd(), yargs.output);
    }
    if (yargs.o) {
        opts.output = path.resolve(process.cwd(), yargs.o);
    }
    if (yargs.chunks === false) {
        opts.chunks = false;
    }
    if (yargs.n) {
        opts.chunks = false;
    }
    if (yargs.temp) {
        opts.temp = path.resolve(process.cwd(), yargs.temp)
    }
    if (yargs.t) {
        opts.temp = path.resolve(process.cwd(), yargs.t)
    }
}
