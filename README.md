originate-frontend-lib
======================

[loom][1] origin for creating bulletproof javascript libraries with isomorphic packaging.

This template is based on [this project][23]. Refer to it's documentation for details.

Usage
-----

```sh
$ npm install -g loom
# now the originate program is available
$ originate frontend-lib my-lib __my-lib-global-name
$ cd my-lib
$ git init
$ npm install
# ready to go!
```

If you have [hub][10] installed, you can streamline your process like that:

```sh
originate frontend-lib my-lib __my-lib-global-name
cd my-lib
git init
npm install
npm run pack && npm run test
git add . && git commit -am "Initial commit"
hub create
git push origin master
```

Here is a copy-paste oneliner of the previous commands:
```
git init; npm i; npm run build-all && npm run test; git add . && git commit -am "Initial commit"; hub create; git push origin master
```

What's inside?
--------------

Some really nice stuff is packed:

* [6to5][13] transpiles ES6 code into ES5 code.
    *You write your code using new ES6 syntax!*

* All major and new module formats are supported: [AMD][14], [CommonJS][15], [ES6 Modules](http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts#august_24_2014_draft_rev_27)
    *Almost anyone can use your library in browser and NodeJS!*

* [Webpack][1], [RequireJS][20], [Browserify][21], [SystemJS][22] compatible!
    *You should not worry how your module will be bundle*

* Can be used in a browser directly: [Webpack][1] build configured to produce a [standalone][2] [UMD][3] version in `dist/standalone.js`
    *We got those oldschool guys covered as well.*

* [Karma][4] + [Jasmine][5] test setup (with CI integration for PhantomJS and Firefox!)
    *You can be sure that your code works as intended.*

* Coverage report generated via [istanbul][6]
    *If you like numbers, we have added some stuff.*

* [npm](https://www.npmjs.com/), [jspm][17] and [bower][18] support
    *So that your library can be easily distributed.*

* [Pre-commit hook][9] with [jshint][7] and [fixmyjs][8]
    *You cannot commit bad code and break all things.*

* Out-of-box integration with [travis][11], [coveralls][12] and [bithound][19]
    *Everything is automated! Get those cool badges!*

* Sane defaults for [`.editorconfig`][23], [`.npmignore`][24] and [`.gitignore`][25]
    *No rubbish get into the repo*


Global Name
-----------

The 3rd parameter to `originate` command is the `global` name of your library.
Global name is the string, which is added to the `window` object, if your library is used as a standalone `<script>`.


  [1]:http://webpack.github.io/
  [2]:http://webpack.github.io/docs/configuration.html#output-librarytarget
  [3]:https://github.com/umdjs/umd
  [4]:http://karma-runner.github.io/0.12/index.html
  [5]:http://jasmine.github.io/2.1/introduction.html
  [6]:http://gotwarlost.github.io/istanbul/
  [7]:http://jshint.com/about/
  [8]:https://github.com/jshint/fixmyjs
  [9]:https://github.com/typicode/husky
  [10]:https://hub.github.com
  [11]:https://travis-ci.org
  [12]:https://coveralls.io
  [13]:https://6to5.org/
  [14]:https://github.com/amdjs/amdjs-api/wiki/AMD
  [15]:http://wiki.commonjs.org/wiki/Modules/1.1
  [16]:https://www.npmjs.com/
  [17]:http://jspm.io/
  [18]:http://bower.io/
  [19]:https://www.bithound.io/
  [20]:http://requirejs.org/
  [21]:http://browserify.org/
  [22]:https://github.com/systemjs/systemjs
  [23]:https://github.com/yetu/frontend-library-starter
  [23]:http://editorconfig.org/
  [24]:https://docs.npmjs.com/misc/developers#keeping-files-out-of-your-package
  [25]:https://github.com/github/gitignore