!function(){"use strict";var n,e={5008:function(n,e,t){var r=gform.utils,o=function(){(0,r.consoleInfo)("Gravity Forms Common: Initialized all javascript that targeted document ready.")},i=function(){(0,r.ready)(o)},u=window.gform_theme_config,a={},d=function(n){var e=n.target;if((w(e)||c(e))&&!f()){var t='<input type="hidden" name="version_hash" value="'.concat(u.common.form.honeypot.version_hash,'" />');e.insertAdjacentHTML("beforeend",t)}},c=function(n){var e=n.dataset.formid,t=(0,r.getNodes)("#gform_save_".concat(e),!0,n,!0);return t.length>0&&"1"===t[0].value},w=function(n){var e=n.dataset.formid,t=(0,r.getNodes)('input[name = "gform_target_page_number_'.concat(e,'"]'),!0,n,!0)[0];return void 0!==t&&0===parseInt(t.value)},f=function(){return window._phantom||window.callPhantom||window.__phantomas||window.Buffer||window.emit||window.spawn||window.webdriver||window._selenium||window._Selenium_IDE_Recorder||window.callSelenium||window.__nightmare||window.domAutomation||window.domAutomationController||window.document.__webdriver_evaluate||window.document.__selenium_evaluate||window.document.__webdriver_script_function||window.document.__webdriver_script_func||window.document.__webdriver_script_fn||window.document.__fxdriver_evaluate||window.document.__driver_unwrapped||window.document.__webdriver_unwrapped||window.document.__driver_evaluate||window.document.__selenium_unwrapped||window.document.__fxdriver_unwrapped||window.document.documentElement.getAttribute("selenium")||window.document.documentElement.getAttribute("webdriver")||window.document.documentElement.getAttribute("driver")},m=function(){a.forms=(0,r.getNodes)(".gform_wrapper form",!0,document,!0),a.forms.forEach((function(n){return jQuery(document).on("submit",n,d)})),(0,r.consoleInfo)("Gravity Forms Honeypot: Initialized."),(0,r.consoleInfo)("Gravity Forms Form JS: Initialized..")},l=function(){i(),m(),console.info("Gravity Forms Theme: Initialized all javascript that targeted document ready.")},s=gform_theme_config,_=t.n(s);t.p=_().public_path,(0,r.ready)(l)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,n=[],r.O=function(e,t,o,i){if(!t){var u=1/0;for(w=0;w<n.length;w++){t=n[w][0],o=n[w][1],i=n[w][2];for(var a=!0,d=0;d<t.length;d++)(!1&i||u>=i)&&Object.keys(r.O).every((function(n){return r.O[n](t[d])}))?t.splice(d--,1):(a=!1,i<u&&(u=i));if(a){n.splice(w--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var w=n.length;w>0&&n[w-1][2]>i;w--)n[w]=n[w-1];n[w]=[t,o,i]},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,{a:e}),e},r.d=function(n,e){for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n}(),function(){var n={415:0};r.O.j=function(e){return 0===n[e]};var e=function(e,t){var o,i,u=t[0],a=t[1],d=t[2],c=0;if(u.some((function(e){return 0!==n[e]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(d)var w=d(r)}for(e&&e(t);c<u.length;c++)i=u[c],r.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return r.O(w)},t=self.webpackChunkgravityforms=self.webpackChunkgravityforms||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}(),r.O(void 0,[499],(function(){return r(8868)}));var o=r.O(void 0,[499],(function(){return r(5008)}));o=r.O(o)}();
//# sourceMappingURL=scripts-theme.js.map