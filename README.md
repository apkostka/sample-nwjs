## Sample [nw.js](http://nwjs.io) app

### Installation
Run `npm install` from the root directory to install dependencies.

#### Dependencies
[node](http://nodejs.org)  
[Grunt](http://gruntjs.com): `npm install -g grunt-cli`  
[SASS](http://sass-lang.com/): `gem install sass`  
[Compass](http://compass-style.org/): `gem install compass`  
[Compass Normalize](https://github.com/ksmandersen/compass-normalize): `gem install compass-normalize`  
[Compass rgbapng](https://github.com/aaronrussell/compass-rgbapng): `gem install compass-rgbapng` 

### Structure and Build Process
===
#### Development
This boilerplate uses `requirejs` to include modular dependencies. Javascript modules are included in the `app/js` directory. Vendor libraries should be placed in `app/js/vendor` and included in the configuration file `app/js/config.js`. Vendor libraries that are not AMD-compatible should also have an entry in the `shim` section in `app/js/config.js`.

Run `grunt` to compile assets for development and start the `grunt watch` process. The project also uses `browser-sync` for live reload in the browser.

#### Production
[grunt-node-webkit-builder](https://github.com/mllrsohn/grunt-node-webkit-builder) is used to compile the nw.js executables.

These tasks will be run before the bump/commit:
 * `compass:prod` compiles and compresses SASS files into `dist/screen.css`.
 * `nodewebkit` will compile the nw.js executables.