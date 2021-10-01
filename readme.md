Simple test-project for SystemJS issue [2336](https://github.com/systemjs/systemjs/issues/2336)

Problem found in another repo: [viT-1/systemjs-ts-es6-vue](https://github.com/viT-1/systemjs-ts-es6-vue)
cause: [import html](https://github.com/viT-1/systemjs-ts-es6-vue/blob/49793d558b56779f0c4a380119a223f8b76a18ee/src/common.blocks/IamInput/IamInput-conf.ts#L3) templates as js strings into ts which is implemented by
[shim typings](https://github.com/viT-1/systemjs-ts-es6-vue/blob/49793d558b56779f0c4a380119a223f8b76a18ee/src/typings/shim-html.d.ts)
and [gulp-html-to-js](https://www.npmjs.com/package/gulp-html-to-js?activeTab=versions) package in [predeploy gulp script](https://github.com/viT-1/systemjs-ts-es6-vue/blob/49793d558b56779f0c4a380119a223f8b76a18ee/gulpfile.esm.js#L34).
SystemJS v5 can resolve relative generated paths in SystemJs modules from ..config.ts to html.js, but SystemJs v6 can't.
