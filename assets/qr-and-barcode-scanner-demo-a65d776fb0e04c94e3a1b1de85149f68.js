"use strict"
define("qr-and-barcode-scanner-demo/app",["exports","qr-and-barcode-scanner-demo/resolver","ember-load-initializers","qr-and-barcode-scanner-demo/config/environment"],function(e,n,r,a){Object.defineProperty(e,"__esModule",{value:!0})
var o=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default});(0,r.default)(o,a.default.modulePrefix),e.default=o}),define("qr-and-barcode-scanner-demo/components/code-scanner",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Component,r=Ember.set,a=Ember.$
e.default=n.extend({classNames:["centered"],didInsertElement:function(){var e=this,n=function(n){r(e,"error",n.name+" "+(n.message?"-":"")+" "+n.message)},o={resultFunction:function(n){r(e,"result","Format: "+n.format+" - Value: "+n.code)},getDevicesError:n,getUserMediaError:n,cameraError:n,cameraSuccess:function(){}}
a("canvas#camera-view").WebCodeCamJQuery(o).data().plugin_WebCodeCamJQuery.play()}})}),define("qr-and-barcode-scanner-demo/helpers/app-version",["exports","qr-and-barcode-scanner-demo/config/environment","ember-cli-app-version/utils/regexp"],function(e,n,r){function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return n.hideSha?o.match(r.versionRegExp)[0]:n.hideVersion?o.match(r.shaRegExp)[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=a
var o=n.default.APP.version
e.default=Ember.Helper.helper(a)}),define("qr-and-barcode-scanner-demo/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","qr-and-barcode-scanner-demo/config/environment"],function(e,n,r){Object.defineProperty(e,"__esModule",{value:!0})
var a=void 0,o=void 0
r.default.APP&&(a=r.default.APP.name,o=r.default.APP.version),e.default={name:"App Version",initialize:(0,n.default)(a,o)}}),define("qr-and-barcode-scanner-demo/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("qr-and-barcode-scanner-demo/initializers/export-application-global",["exports","qr-and-barcode-scanner-demo/config/environment"],function(e,n){function r(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var a,o=n.default.exportApplicationGlobal
a="string"==typeof o?o:Ember.String.classify(n.default.modulePrefix),r[a]||(r[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("qr-and-barcode-scanner-demo/resolver",["exports","ember-resolver"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("qr-and-barcode-scanner-demo/router",["exports","qr-and-barcode-scanner-demo/config/environment"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL})
r.map(function(){}),e.default=r}),define("qr-and-barcode-scanner-demo/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("qr-and-barcode-scanner-demo/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"3RHtFyVg",block:'{"symbols":[],"statements":[[6,"h2"],[9,"class","centered"],[7],[0,"Bar code and QR code scanning demo"],[8],[0,"\\n\\n"],[1,[18,"code-scanner"],false]],"hasEval":false}',meta:{moduleName:"qr-and-barcode-scanner-demo/templates/application.hbs"}})}),define("qr-and-barcode-scanner-demo/templates/components/code-scanner",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"9WUSo/JY",block:'{"symbols":[],"statements":[[6,"canvas"],[9,"id","camera-view"],[7],[8],[0,"\\n\\n"],[4,"if",[[20,["result"]]],null,{"statements":[[0,"  "],[6,"h3"],[7],[1,[18,"result"],false],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[20,["error"]]],null,{"statements":[[0,"  "],[6,"h3"],[7],[0,"Error: "],[1,[18,"error"],false],[8],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"qr-and-barcode-scanner-demo/templates/components/code-scanner.hbs"}})}),define("qr-and-barcode-scanner-demo/config/environment",[],function(){try{var e="qr-and-barcode-scanner-demo/config/environment",n=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(unescape(n))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("qr-and-barcode-scanner-demo/app").default.create({name:"qr-and-barcode-scanner-demo",version:"0.0.0+a1211531"})