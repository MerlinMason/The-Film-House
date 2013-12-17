#Filmhouse WordPress Theme

###Built upon the wp-starter project

wp-starter make use of the following projects:

- https://github.com/
- http://editorconfig.org/
- http://csslint.net/
- http://www.jshint.com/
- http://lesscss.org/
- http://bower.io/
- http://gruntjs.com/
- https://github.com/ai/autoprefixer

##Requirements for local dev

- node.js v0.10.21 +
- grunt.js v0.4.1 +
- Bower v1.2.7 +

##Getting Setup
Once Bower is installed, you can then install all dependencies by running:

    bower install

Once Grunt is installed you can install all dependencies by running:

    npm install

note: please see Bower/Grunt documentation for help with installation.

##Using Grunt

You can use the Grunt watch task to watch .less and .js files for changes and automatically process them.

    $ grunt watch

Alternatively, you can process them at anytime with the following commands.

    $ grunt buildcss
    $ grunt buildjs

The CSS build does the following process:
- Compiles all the .less files imported into style.less
- Autoprefixes the compiled style.css with vendor prefixes (by default it supports current browser version -2)
- Checks the prefixed file for CSS Lint errors (based on .csslintrc config)
- Minifies the file
- Optimises all images
- Mac OSX users will then receive a notification upon successful build

The JS build does the following process:
- jshints your project.js file (based on .jshintrc config)
- Concatinates all javascript files used in the site
- Minifies the concatinated file
- Mac OSX users will then receive a notification upon successful build
