originate-frontend-lib
======================

[loom][1] origin for creating frontend javascript libraries.

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
git init; npm i; npm run pack && npm run test; git add . && git commit -am "Initial commit"; hub create; git push origin master
```

What's inside?
--------------

* [Webpack][1] build configured to produce a [standalone][2] [UMD][3] version in `dist/standalone.js`
* [Karma][4] + [Jasmine][5] test setup (with CI integration for PhantomJS and Firefox!)
* Coverage report generated via [istanbul][6]
* NPM and bower support
* [Pre-commit hook][9] with [jshint][7] and [fixmyjs][8]
* Out-of-box integration with [travis][11] and [coveralls][12]

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

