const withTM = require('next-transpile-modules')(['@wpengine/headless-components']); // pass the modules you would like to see transpiled
module.exports = withTM();
