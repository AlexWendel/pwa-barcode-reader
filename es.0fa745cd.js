// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"6OGej":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "99d57a760fa745cd";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"lxAJT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BarcodeDetector", ()=>(0, _ponyfillJs.BarcodeDetector));
parcelHelpers.export(exports, "ZXING_CPP_COMMIT", ()=>(0, _ponyfillJs.ZXING_CPP_COMMIT));
parcelHelpers.export(exports, "ZXING_WASM_SHA256", ()=>(0, _ponyfillJs.ZXING_WASM_SHA256));
parcelHelpers.export(exports, "ZXING_WASM_VERSION", ()=>(0, _ponyfillJs.ZXING_WASM_VERSION));
parcelHelpers.export(exports, "prepareZXingModule", ()=>(0, _ponyfillJs.prepareZXingModule));
parcelHelpers.export(exports, "purgeZXingModule", ()=>(0, _ponyfillJs.purgeZXingModule));
parcelHelpers.export(exports, "setZXingModuleOverrides", ()=>(0, _ponyfillJs.setZXingModuleOverrides));
var _polyfillJs = require("./polyfill.js");
var _ponyfillJs = require("./ponyfill.js");

},{"./polyfill.js":"6ZSBN","./ponyfill.js":"4PZfe","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6ZSBN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZXING_CPP_COMMIT", ()=>(0, _ponyfillJs.ZXING_CPP_COMMIT));
parcelHelpers.export(exports, "ZXING_WASM_SHA256", ()=>(0, _ponyfillJs.ZXING_WASM_SHA256));
parcelHelpers.export(exports, "ZXING_WASM_VERSION", ()=>(0, _ponyfillJs.ZXING_WASM_VERSION));
parcelHelpers.export(exports, "prepareZXingModule", ()=>(0, _ponyfillJs.prepareZXingModule));
parcelHelpers.export(exports, "purgeZXingModule", ()=>(0, _ponyfillJs.purgeZXingModule));
parcelHelpers.export(exports, "setZXingModuleOverrides", ()=>(0, _ponyfillJs.setZXingModuleOverrides));
var _ponyfillJs = require("./ponyfill.js");
var e;
(e = globalThis.BarcodeDetector) != null || (globalThis.BarcodeDetector = (0, _ponyfillJs.BarcodeDetector));

},{"./ponyfill.js":"4PZfe","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4PZfe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BarcodeDetector", ()=>Eo);
parcelHelpers.export(exports, "ZXING_CPP_COMMIT", ()=>bo);
parcelHelpers.export(exports, "ZXING_WASM_SHA256", ()=>Po);
parcelHelpers.export(exports, "ZXING_WASM_VERSION", ()=>$o);
parcelHelpers.export(exports, "prepareZXingModule", ()=>Be);
parcelHelpers.export(exports, "purgeZXingModule", ()=>Co);
parcelHelpers.export(exports, "setZXingModuleOverrides", ()=>To);
var global = arguments[3];
var Ae = (o)=>{
    throw TypeError(o);
};
var Se = (o, f, c)=>f.has(o) || Ae("Cannot " + c);
var Ie = (o, f, c)=>(Se(o, f, "read from private field"), c ? c.call(o) : f.get(o)), De = (o, f, c)=>f.has(o) ? Ae("Cannot add the same private member more than once") : f instanceof WeakSet ? f.add(o) : f.set(o, c), Me = (o, f, c, T)=>(Se(o, f, "write to private field"), T ? T.call(o, c) : f.set(o, c), c);
const Dt = [
    [
        "Aztec",
        "M"
    ],
    [
        "Codabar",
        "L"
    ],
    [
        "Code39",
        "L"
    ],
    [
        "Code93",
        "L"
    ],
    [
        "Code128",
        "L"
    ],
    [
        "DataBar",
        "L"
    ],
    [
        "DataBarExpanded",
        "L"
    ],
    [
        "DataMatrix",
        "M"
    ],
    [
        "EAN-8",
        "L"
    ],
    [
        "EAN-13",
        "L"
    ],
    [
        "ITF",
        "L"
    ],
    [
        "MaxiCode",
        "M"
    ],
    [
        "PDF417",
        "M"
    ],
    [
        "QRCode",
        "M"
    ],
    [
        "UPC-A",
        "L"
    ],
    [
        "UPC-E",
        "L"
    ],
    [
        "MicroQRCode",
        "M"
    ],
    [
        "rMQRCode",
        "M"
    ],
    [
        "DXFilmEdge",
        "L"
    ],
    [
        "DataBarLimited",
        "L"
    ]
], Mt = Dt.map(([o])=>o), La = Mt.filter((o, f)=>Dt[f][1] === "L"), Ba = Mt.filter((o, f)=>Dt[f][1] === "M");
function Yt(o) {
    switch(o){
        case "Linear-Codes":
            return La.reduce((f, c)=>f | Yt(c), 0);
        case "Matrix-Codes":
            return Ba.reduce((f, c)=>f | Yt(c), 0);
        case "Any":
            return (1 << Dt.length) - 1;
        case "None":
            return 0;
        default:
            return 1 << Mt.indexOf(o);
    }
}
function Wa(o) {
    if (o === 0) return "None";
    const f = 31 - Math.clz32(o);
    return Mt[f];
}
function Ua(o) {
    return o.reduce((f, c)=>f | Yt(c), 0);
}
const Va = [
    "LocalAverage",
    "GlobalHistogram",
    "FixedThreshold",
    "BoolCast"
];
function ka(o) {
    return Va.indexOf(o);
}
const Fe = [
    "Unknown",
    "ASCII",
    "ISO8859_1",
    "ISO8859_2",
    "ISO8859_3",
    "ISO8859_4",
    "ISO8859_5",
    "ISO8859_6",
    "ISO8859_7",
    "ISO8859_8",
    "ISO8859_9",
    "ISO8859_10",
    "ISO8859_11",
    "ISO8859_13",
    "ISO8859_14",
    "ISO8859_15",
    "ISO8859_16",
    "Cp437",
    "Cp1250",
    "Cp1251",
    "Cp1252",
    "Cp1256",
    "Shift_JIS",
    "Big5",
    "GB2312",
    "GB18030",
    "EUC_JP",
    "EUC_KR",
    "UTF16BE",
    /**
   * UnicodeBig [[deprecated]]
   */ "UTF16BE",
    "UTF8",
    "UTF16LE",
    "UTF32BE",
    "UTF32LE",
    "BINARY"
];
function Ha(o) {
    return o === "UnicodeBig" ? Fe.indexOf("UTF16BE") : Fe.indexOf(o);
}
const Na = [
    "Text",
    "Binary",
    "Mixed",
    "GS1",
    "ISO15434",
    "UnknownECI"
];
function za(o) {
    return Na[o];
}
const Ga = [
    "Ignore",
    "Read",
    "Require"
];
function Xa(o) {
    return Ga.indexOf(o);
}
const qa = [
    "Plain",
    "ECI",
    "HRI",
    "Hex",
    "Escaped"
];
function Ya(o) {
    return qa.indexOf(o);
}
const It = {
    formats: [],
    tryHarder: !0,
    tryRotate: !0,
    tryInvert: !0,
    tryDownscale: !0,
    tryDenoise: !1,
    binarizer: "LocalAverage",
    isPure: !1,
    downscaleFactor: 3,
    downscaleThreshold: 500,
    minLineCount: 2,
    maxNumberOfSymbols: 255,
    tryCode39ExtendedMode: !0,
    returnErrors: !1,
    eanAddOnSymbol: "Ignore",
    textMode: "HRI",
    characterSet: "Unknown"
};
function je(o) {
    return {
        ...o,
        formats: Ua(o.formats),
        binarizer: ka(o.binarizer),
        eanAddOnSymbol: Xa(o.eanAddOnSymbol),
        textMode: Ya(o.textMode),
        characterSet: Ha(o.characterSet)
    };
}
function Za(o) {
    return {
        ...o,
        format: Wa(o.format),
        contentType: za(o.contentType),
        eccLevel: o.ecLevel
    };
}
const $o = "2.1.2", bo = "a1516b34167cff504bf3c83698ea841e13a8f7f1", Qa = {
    locateFile: (o, f)=>{
        const c = o.match(/_(.+?)\.wasm$/);
        return c ? `https://fastly.jsdelivr.net/npm/zxing-wasm@2.1.2/dist/${c[1]}/${o}` : f + o;
    }
}, St = /* @__PURE__ */ new WeakMap();
function Ja(o, f) {
    return Object.is(o, f) || Object.keys(o).length === Object.keys(f).length && Object.keys(o).every((c)=>Object.prototype.hasOwnProperty.call(f, c) && o[c] === f[c]);
}
function Le(o, { overrides: f, equalityFn: c = Ja, fireImmediately: T = !1 } = {}) {
    var $;
    const [x, D] = ($ = St.get(o)) != null ? $ : [
        Qa
    ], R = f != null ? f : x;
    let O;
    if (T) {
        if (D && (O = c(x, R))) return D;
        const M = o({
            ...R
        });
        return St.set(o, [
            R,
            M
        ]), M;
    }
    (O != null ? O : c(x, R)) || St.set(o, [
        R
    ]);
}
function Ka(o) {
    St.delete(o);
}
async function to(o, f, c = It) {
    const T = {
        ...It,
        ...c
    }, $ = await Le(o, {
        fireImmediately: !0
    });
    let x, D;
    if ("width" in f && "height" in f && "data" in f) {
        const { data: O, data: { byteLength: M }, width: F, height: q } = f;
        D = $._malloc(M), $.HEAPU8.set(O, D), x = $.readBarcodesFromPixmap(D, F, q, je(T));
    } else {
        let O, M;
        if ("buffer" in f) [O, M] = [
            f.byteLength,
            f
        ];
        else if ("byteLength" in f) [O, M] = [
            f.byteLength,
            new Uint8Array(f)
        ];
        else if ("size" in f) [O, M] = [
            f.size,
            new Uint8Array(await f.arrayBuffer())
        ];
        else throw new TypeError("Invalid input type");
        D = $._malloc(O), $.HEAPU8.set(M, D), x = $.readBarcodesFromImage(D, O, je(T));
    }
    $._free(D);
    const R = [];
    for(let O = 0; O < x.size(); ++O)R.push(Za(x.get(O)));
    return R;
}
({
    ...It,
    formats: [
        ...It.formats
    ]
});
var Qt = async function(o = {}) {
    var f, c = o, T, $, x = new Promise((e, t)=>{
        T = e, $ = t;
    }), D = typeof window == "object", R = typeof Bun < "u", O = typeof WorkerGlobalScope < "u";
    var M = "./this.program", F = "";
    function q(e) {
        return c.locateFile ? c.locateFile(e, F) : F + e;
    }
    var rt, Y;
    (D || O || R) && (O ? F = self.location.href : typeof document < "u" && document.currentScript && (F = document.currentScript.src), F.startsWith("blob:") ? F = "" : F = F.slice(0, F.replace(/[?#].*/, "").lastIndexOf("/") + 1), O && (Y = (e)=>{
        var t = new XMLHttpRequest();
        return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
    }), rt = async (e)=>{
        var t = await fetch(e, {
            credentials: "same-origin"
        });
        if (t.ok) return t.arrayBuffer();
        throw new Error(t.status + " : " + t.url);
    });
    var st = console.log.bind(console), k = console.error.bind(console), Z, nt, Jt = !1, Q, B, ut, vt, at, P, Kt, te;
    function ee() {
        var e = nt.buffer;
        Q = new Int8Array(e), ut = new Int16Array(e), c.HEAPU8 = B = new Uint8Array(e), vt = new Uint16Array(e), at = new Int32Array(e), P = new Uint32Array(e), Kt = new Float32Array(e), te = new Float64Array(e);
    }
    function qe() {
        if (c.preRun) for(typeof c.preRun == "function" && (c.preRun = [
            c.preRun
        ]); c.preRun.length;)sr(c.preRun.shift());
        re(ae);
    }
    function Ye() {
        E.ya();
    }
    function Ze() {
        if (c.postRun) for(typeof c.postRun == "function" && (c.postRun = [
            c.postRun
        ]); c.postRun.length;)ir(c.postRun.shift());
        re(ne);
    }
    var J = 0, ct = null;
    function Qe(e) {
        var t;
        J++, (t = c.monitorRunDependencies) === null || t === void 0 || t.call(c, J);
    }
    function Je(e) {
        var t;
        if (J--, (t = c.monitorRunDependencies) === null || t === void 0 || t.call(c, J), J == 0 && ct) {
            var r = ct;
            ct = null, r();
        }
    }
    function Ft(e) {
        var t;
        (t = c.onAbort) === null || t === void 0 || t.call(c, e), e = "Aborted(" + e + ")", k(e), Jt = !0, e += ". Build with -sASSERTIONS for more info.";
        var r = new WebAssembly.RuntimeError(e);
        throw $(r), r;
    }
    var yt;
    function Ke() {
        return q("zxing_reader.wasm");
    }
    function tr(e) {
        if (e == yt && Z) return new Uint8Array(Z);
        if (Y) return Y(e);
        throw "both async and sync fetching of the wasm failed";
    }
    async function er(e) {
        if (!Z) try {
            var t = await rt(e);
            return new Uint8Array(t);
        } catch  {}
        return tr(e);
    }
    async function rr(e, t) {
        try {
            var r = await er(e), n = await WebAssembly.instantiate(r, t);
            return n;
        } catch (a) {
            k(`failed to asynchronously prepare wasm: ${a}`), Ft(a);
        }
    }
    async function nr(e, t, r) {
        if (!e && typeof WebAssembly.instantiateStreaming == "function") try {
            var n = fetch(t, {
                credentials: "same-origin"
            }), a = await WebAssembly.instantiateStreaming(n, r);
            return a;
        } catch (i) {
            k(`wasm streaming compile failed: ${i}`), k("falling back to ArrayBuffer instantiation");
        }
        return rr(t, r);
    }
    function ar() {
        return {
            a: Hn
        };
    }
    async function or() {
        function e(i, u) {
            return E = i.exports, nt = E.xa, ee(), pe = E.Ba, Je(), E;
        }
        Qe();
        function t(i) {
            return e(i.instance);
        }
        var r = ar();
        if (c.instantiateWasm) return new Promise((i, u)=>{
            c.instantiateWasm(r, (s, l)=>{
                i(e(s));
            });
        });
        yt != null || (yt = Ke());
        try {
            var n = await nr(Z, yt, r), a = t(n);
            return a;
        } catch (i) {
            return $(i), Promise.reject(i);
        }
    }
    var re = (e)=>{
        for(; e.length > 0;)e.shift()(c);
    }, ne = [], ir = (e)=>ne.push(e), ae = [], sr = (e)=>ae.push(e), y = (e)=>Xn(e), m = ()=>qn(), mt = [], gt = 0, ur = (e)=>{
        var t = new jt(e);
        return t.get_caught() || (t.set_caught(!0), gt--), t.set_rethrown(!1), mt.push(t), Zn(e), zn(e);
    }, H = 0, cr = ()=>{
        v(0, 0);
        var e = mt.pop();
        Yn(e.excPtr), H = 0;
    };
    class jt {
        constructor(t){
            this.excPtr = t, this.ptr = t - 24;
        }
        set_type(t) {
            P[this.ptr + 4 >> 2] = t;
        }
        get_type() {
            return P[this.ptr + 4 >> 2];
        }
        set_destructor(t) {
            P[this.ptr + 8 >> 2] = t;
        }
        get_destructor() {
            return P[this.ptr + 8 >> 2];
        }
        set_caught(t) {
            t = t ? 1 : 0, Q[this.ptr + 12] = t;
        }
        get_caught() {
            return Q[this.ptr + 12] != 0;
        }
        set_rethrown(t) {
            t = t ? 1 : 0, Q[this.ptr + 13] = t;
        }
        get_rethrown() {
            return Q[this.ptr + 13] != 0;
        }
        init(t, r) {
            this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(r);
        }
        set_adjusted_ptr(t) {
            P[this.ptr + 16 >> 2] = t;
        }
        get_adjusted_ptr() {
            return P[this.ptr + 16 >> 2];
        }
    }
    var wt = (e)=>Gn(e), Rt = (e)=>{
        var t = H;
        if (!t) return wt(0), 0;
        var r = new jt(t);
        r.set_adjusted_ptr(t);
        var n = r.get_type();
        if (!n) return wt(0), t;
        for (var a of e){
            if (a === 0 || a === n) break;
            var i = r.ptr + 16;
            if (Qn(a, n, i)) return wt(a), t;
        }
        return wt(n), t;
    }, lr = ()=>Rt([]), fr = (e)=>Rt([
            e
        ]), dr = (e, t)=>Rt([
            e,
            t
        ]), hr = ()=>{
        var e = mt.pop();
        e || Ft("no exception to throw");
        var t = e.excPtr;
        throw e.get_rethrown() || (mt.push(e), e.set_rethrown(!0), e.set_caught(!1), gt++), H = t, H;
    }, pr = (e, t, r)=>{
        var n = new jt(e);
        throw n.init(t, r), H = e, gt++, H;
    }, vr = ()=>gt, yr = (e)=>{
        throw H || (H = e), H;
    }, mr = ()=>Ft(""), $t = {}, Lt = (e)=>{
        for(; e.length;){
            var t = e.pop(), r = e.pop();
            r(t);
        }
    };
    function lt(e) {
        return this.fromWireType(P[e >> 2]);
    }
    var ot = {}, K = {}, bt = {}, gr = c.InternalError = class extends Error {
        constructor(e){
            super(e), this.name = "InternalError";
        }
    }, Ct = (e)=>{
        throw new gr(e);
    }, tt = (e, t, r)=>{
        e.forEach((s)=>bt[s] = t);
        function n(s) {
            var l = r(s);
            l.length !== e.length && Ct("Mismatched type converter count");
            for(var d = 0; d < e.length; ++d)V(e[d], l[d]);
        }
        var a = new Array(t.length), i = [], u = 0;
        t.forEach((s, l)=>{
            K.hasOwnProperty(s) ? a[l] = K[s] : (i.push(s), ot.hasOwnProperty(s) || (ot[s] = []), ot[s].push(()=>{
                a[l] = K[s], ++u, u === i.length && n(a);
            }));
        }), i.length === 0 && n(a);
    }, wr = (e)=>{
        var t = $t[e];
        delete $t[e];
        var r = t.rawConstructor, n = t.rawDestructor, a = t.fields, i = a.map((u)=>u.getterReturnType).concat(a.map((u)=>u.setterArgumentType));
        tt([
            e
        ], i, (u)=>{
            var s = {};
            return a.forEach((l, d)=>{
                var h = l.fieldName, p = u[d], w = u[d].optional, b = l.getter, _ = l.getterContext, S = u[d + a.length], A = l.setter, I = l.setterContext;
                s[h] = {
                    read: (X)=>p.fromWireType(b(_, X)),
                    write: (X, L)=>{
                        var W = [];
                        A(I, X, S.toWireType(W, L)), Lt(W);
                    },
                    optional: w
                };
            }), [
                {
                    name: t.name,
                    fromWireType: (l)=>{
                        var d = {};
                        for(var h in s)d[h] = s[h].read(l);
                        return n(l), d;
                    },
                    toWireType: (l, d)=>{
                        for(var h in s)if (!(h in d) && !s[h].optional) throw new TypeError(`Missing field: "${h}"`);
                        var p = r();
                        for(h in s)s[h].write(p, d[h]);
                        return l !== null && l.push(n, p), p;
                    },
                    argPackAdvance: N,
                    readValueFromPointer: lt,
                    destructorFunction: n
                }
            ];
        });
    }, $r = (e, t, r, n, a)=>{}, br = ()=>{
        for(var e = new Array(256), t = 0; t < 256; ++t)e[t] = String.fromCharCode(t);
        oe = e;
    }, oe, j = (e)=>{
        for(var t = "", r = e; B[r];)t += oe[B[r++]];
        return t;
    }, ft = c.BindingError = class extends Error {
        constructor(e){
            super(e), this.name = "BindingError";
        }
    }, C = (e)=>{
        throw new ft(e);
    };
    function Cr(e, t) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var n = t.name;
        if (e || C(`type "${n}" must have a positive integer typeid pointer`), K.hasOwnProperty(e)) {
            if (r.ignoreDuplicateRegistrations) return;
            C(`Cannot register type '${n}' twice`);
        }
        if (K[e] = t, delete bt[e], ot.hasOwnProperty(e)) {
            var a = ot[e];
            delete ot[e], a.forEach((i)=>i());
        }
    }
    function V(e, t) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return Cr(e, t, r);
    }
    var N = 8, Tr = (e, t, r, n)=>{
        t = j(t), V(e, {
            name: t,
            fromWireType: function(a) {
                return !!a;
            },
            toWireType: function(a, i) {
                return i ? r : n;
            },
            argPackAdvance: N,
            readValueFromPointer: function(a) {
                return this.fromWireType(B[a]);
            },
            destructorFunction: null
        });
    }, Pr = (e)=>({
            count: e.count,
            deleteScheduled: e.deleteScheduled,
            preservePointerOnDelete: e.preservePointerOnDelete,
            ptr: e.ptr,
            ptrType: e.ptrType,
            smartPtr: e.smartPtr,
            smartPtrType: e.smartPtrType
        }), Bt = (e)=>{
        function t(r) {
            return r.$$.ptrType.registeredClass.name;
        }
        C(t(e) + " instance already deleted");
    }, Wt = !1, ie = (e)=>{}, Er = (e)=>{
        e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
    }, se = (e)=>{
        e.count.value -= 1;
        var t = e.count.value === 0;
        t && Er(e);
    }, dt = (e)=>typeof FinalizationRegistry > "u" ? (dt = (t)=>t, e) : (Wt = new FinalizationRegistry((t)=>{
            se(t.$$);
        }), dt = (t)=>{
            var r = t.$$, n = !!r.smartPtr;
            if (n) {
                var a = {
                    $$: r
                };
                Wt.register(t, a, t);
            }
            return t;
        }, ie = (t)=>Wt.unregister(t), dt(e)), _r = ()=>{
        let e = Tt.prototype;
        Object.assign(e, {
            isAliasOf (r) {
                if (!(this instanceof Tt) || !(r instanceof Tt)) return !1;
                var n = this.$$.ptrType.registeredClass, a = this.$$.ptr;
                r.$$ = r.$$;
                for(var i = r.$$.ptrType.registeredClass, u = r.$$.ptr; n.baseClass;)a = n.upcast(a), n = n.baseClass;
                for(; i.baseClass;)u = i.upcast(u), i = i.baseClass;
                return n === i && a === u;
            },
            clone () {
                if (this.$$.ptr || Bt(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
                var r = dt(Object.create(Object.getPrototypeOf(this), {
                    $$: {
                        value: Pr(this.$$)
                    }
                }));
                return r.$$.count.value += 1, r.$$.deleteScheduled = !1, r;
            },
            delete () {
                this.$$.ptr || Bt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && C("Object already scheduled for deletion"), ie(this), se(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
            },
            isDeleted () {
                return !this.$$.ptr;
            },
            deleteLater () {
                return this.$$.ptr || Bt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && C("Object already scheduled for deletion"), this.$$.deleteScheduled = !0, this;
            }
        });
        const t = Symbol.dispose;
        t && (e[t] = e.delete);
    };
    function Tt() {}
    var Ut = (e, t)=>Object.defineProperty(t, "name", {
            value: e
        }), ue = {}, ce = (e, t, r)=>{
        if (e[t].overloadTable === void 0) {
            var n = e[t];
            e[t] = function() {
                for(var a = arguments.length, i = new Array(a), u = 0; u < a; u++)i[u] = arguments[u];
                return e[t].overloadTable.hasOwnProperty(i.length) || C(`Function '${r}' called with an invalid number of arguments (${i.length}) - expects one of (${e[t].overloadTable})!`), e[t].overloadTable[i.length].apply(this, i);
            }, e[t].overloadTable = [], e[t].overloadTable[n.argCount] = n;
        }
    }, le = (e, t, r)=>{
        c.hasOwnProperty(e) ? ((r === void 0 || c[e].overloadTable !== void 0 && c[e].overloadTable[r] !== void 0) && C(`Cannot register public name '${e}' twice`), ce(c, e, e), c[e].overloadTable.hasOwnProperty(r) && C(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`), c[e].overloadTable[r] = t) : (c[e] = t, c[e].argCount = r);
    }, Or = 48, xr = 57, Ar = (e)=>{
        e = e.replace(/[^a-zA-Z0-9_]/g, "$");
        var t = e.charCodeAt(0);
        return t >= Or && t <= xr ? `_${e}` : e;
    };
    function Sr(e, t, r, n, a, i, u, s) {
        this.name = e, this.constructor = t, this.instancePrototype = r, this.rawDestructor = n, this.baseClass = a, this.getActualType = i, this.upcast = u, this.downcast = s, this.pureVirtualFunctions = [];
    }
    var Vt = (e, t, r)=>{
        for(; t !== r;)t.upcast || C(`Expected null or instance of ${r.name}, got an instance of ${t.name}`), e = t.upcast(e), t = t.baseClass;
        return e;
    };
    function Ir(e, t) {
        if (t === null) return this.isReference && C(`null is not a valid ${this.name}`), 0;
        t.$$ || C(`Cannot pass "${embindRepr(t)}" as a ${this.name}`), t.$$.ptr || C(`Cannot pass deleted object as a pointer of type ${this.name}`);
        var r = t.$$.ptrType.registeredClass, n = Vt(t.$$.ptr, r, this.registeredClass);
        return n;
    }
    function Dr(e, t) {
        var r;
        if (t === null) return this.isReference && C(`null is not a valid ${this.name}`), this.isSmartPointer ? (r = this.rawConstructor(), e !== null && e.push(this.rawDestructor, r), r) : 0;
        (!t || !t.$$) && C(`Cannot pass "${embindRepr(t)}" as a ${this.name}`), t.$$.ptr || C(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && t.$$.ptrType.isConst && C(`Cannot convert argument of type ${t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name} to parameter type ${this.name}`);
        var n = t.$$.ptrType.registeredClass;
        if (r = Vt(t.$$.ptr, n, this.registeredClass), this.isSmartPointer) switch(t.$$.smartPtr === void 0 && C("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy){
            case 0:
                t.$$.smartPtrType === this ? r = t.$$.smartPtr : C(`Cannot convert argument of type ${t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name} to parameter type ${this.name}`);
                break;
            case 1:
                r = t.$$.smartPtr;
                break;
            case 2:
                if (t.$$.smartPtrType === this) r = t.$$.smartPtr;
                else {
                    var a = t.clone();
                    r = this.rawShare(r, G.toHandle(()=>a.delete())), e !== null && e.push(this.rawDestructor, r);
                }
                break;
            default:
                C("Unsupporting sharing policy");
        }
        return r;
    }
    function Mr(e, t) {
        if (t === null) return this.isReference && C(`null is not a valid ${this.name}`), 0;
        t.$$ || C(`Cannot pass "${embindRepr(t)}" as a ${this.name}`), t.$$.ptr || C(`Cannot pass deleted object as a pointer of type ${this.name}`), t.$$.ptrType.isConst && C(`Cannot convert argument of type ${t.$$.ptrType.name} to parameter type ${this.name}`);
        var r = t.$$.ptrType.registeredClass, n = Vt(t.$$.ptr, r, this.registeredClass);
        return n;
    }
    var fe = (e, t, r)=>{
        if (t === r) return e;
        if (r.baseClass === void 0) return null;
        var n = fe(e, t, r.baseClass);
        return n === null ? null : r.downcast(n);
    }, Fr = {}, jr = (e, t)=>{
        for(t === void 0 && C("ptr should not be undefined"); e.baseClass;)t = e.upcast(t), e = e.baseClass;
        return t;
    }, Rr = (e, t)=>(t = jr(e, t), Fr[t]), Pt = (e, t)=>{
        (!t.ptrType || !t.ptr) && Ct("makeClassHandle requires ptr and ptrType");
        var r = !!t.smartPtrType, n = !!t.smartPtr;
        return r !== n && Ct("Both smartPtrType and smartPtr must be specified"), t.count = {
            value: 1
        }, dt(Object.create(e, {
            $$: {
                value: t,
                writable: !0
            }
        }));
    };
    function Lr(e) {
        var t = this.getPointee(e);
        if (!t) return this.destructor(e), null;
        var r = Rr(this.registeredClass, t);
        if (r !== void 0) {
            if (r.$$.count.value === 0) return r.$$.ptr = t, r.$$.smartPtr = e, r.clone();
            var n = r.clone();
            return this.destructor(e), n;
        }
        function a() {
            return this.isSmartPointer ? Pt(this.registeredClass.instancePrototype, {
                ptrType: this.pointeeType,
                ptr: t,
                smartPtrType: this,
                smartPtr: e
            }) : Pt(this.registeredClass.instancePrototype, {
                ptrType: this,
                ptr: e
            });
        }
        var i = this.registeredClass.getActualType(t), u = ue[i];
        if (!u) return a.call(this);
        var s;
        this.isConst ? s = u.constPointerType : s = u.pointerType;
        var l = fe(t, this.registeredClass, s.registeredClass);
        return l === null ? a.call(this) : this.isSmartPointer ? Pt(s.registeredClass.instancePrototype, {
            ptrType: s,
            ptr: l,
            smartPtrType: this,
            smartPtr: e
        }) : Pt(s.registeredClass.instancePrototype, {
            ptrType: s,
            ptr: l
        });
    }
    var Br = ()=>{
        Object.assign(Et.prototype, {
            getPointee (e) {
                return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
            },
            destructor (e) {
                var t;
                (t = this.rawDestructor) === null || t === void 0 || t.call(this, e);
            },
            argPackAdvance: N,
            readValueFromPointer: lt,
            fromWireType: Lr
        });
    };
    function Et(e, t, r, n, a, i, u, s, l, d, h) {
        this.name = e, this.registeredClass = t, this.isReference = r, this.isConst = n, this.isSmartPointer = a, this.pointeeType = i, this.sharingPolicy = u, this.rawGetPointee = s, this.rawConstructor = l, this.rawShare = d, this.rawDestructor = h, !a && t.baseClass === void 0 ? n ? (this.toWireType = Ir, this.destructorFunction = null) : (this.toWireType = Mr, this.destructorFunction = null) : this.toWireType = Dr;
    }
    var de = (e, t, r)=>{
        c.hasOwnProperty(e) || Ct("Replacing nonexistent public symbol"), c[e].overloadTable !== void 0 && r !== void 0 ? c[e].overloadTable[r] = t : (c[e] = t, c[e].argCount = r);
    }, he = [], pe, g = (e)=>{
        var t = he[e];
        return t || (he[e] = t = pe.get(e)), t;
    }, Wr = function(e, t) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        if (e.includes("j")) return dynCallLegacy(e, t, r);
        var n = g(t), a = n(...r);
        return a;
    }, Ur = function(e, t) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
        return function() {
            for(var n = arguments.length, a = new Array(n), i = 0; i < n; i++)a[i] = arguments[i];
            return Wr(e, t, a, r);
        };
    }, U = function(e, t) {
        e = j(e);
        function r() {
            if (e.includes("j")) return Ur(e, t);
            var a = g(t);
            return a;
        }
        var n = r();
        return typeof n != "function" && C(`unknown function pointer with signature ${e}: ${t}`), n;
    };
    class Vr extends Error {
    }
    var ve = (e)=>{
        var t = Nn(e), r = j(t);
        return et(t), r;
    }, _t = (e, t)=>{
        var r = [], n = {};
        function a(i) {
            if (!n[i] && !K[i]) {
                if (bt[i]) {
                    bt[i].forEach(a);
                    return;
                }
                r.push(i), n[i] = !0;
            }
        }
        throw t.forEach(a), new Vr(`${e}: ` + r.map(ve).join([
            ", "
        ]));
    }, kr = (e, t, r, n, a, i, u, s, l, d, h, p, w)=>{
        h = j(h), i = U(a, i), s && (s = U(u, s)), d && (d = U(l, d)), w = U(p, w);
        var b = Ar(h);
        le(b, function() {
            _t(`Cannot construct ${h} due to unbound types`, [
                n
            ]);
        }), tt([
            e,
            t,
            r
        ], n ? [
            n
        ] : [], (_)=>{
            _ = _[0];
            var S, A;
            n ? (S = _.registeredClass, A = S.instancePrototype) : A = Tt.prototype;
            var I = Ut(h, function() {
                if (Object.getPrototypeOf(this) !== X) throw new ft(`Use 'new' to construct ${h}`);
                if (L.constructor_body === void 0) throw new ft(`${h} has no accessible constructor`);
                for(var Oe = arguments.length, xt = new Array(Oe), At = 0; At < Oe; At++)xt[At] = arguments[At];
                var xe = L.constructor_body[xt.length];
                if (xe === void 0) throw new ft(`Tried to invoke ctor of ${h} with invalid number of parameters (${xt.length}) - expected (${Object.keys(L.constructor_body).toString()}) parameters instead!`);
                return xe.apply(this, xt);
            }), X = Object.create(A, {
                constructor: {
                    value: I
                }
            });
            I.prototype = X;
            var L = new Sr(h, I, X, w, S, i, s, d);
            if (L.baseClass) {
                var W, Ot;
                (Ot = (W = L.baseClass).__derivedClasses) !== null && Ot !== void 0 || (W.__derivedClasses = []), L.baseClass.__derivedClasses.push(L);
            }
            var Ra = new Et(h, L, !0, !1, !1), Ee = new Et(h + "*", L, !1, !1, !1), _e = new Et(h + " const*", L, !1, !0, !1);
            return ue[e] = {
                pointerType: Ee,
                constPointerType: _e
            }, de(b, I), [
                Ra,
                Ee,
                _e
            ];
        });
    }, kt = (e, t)=>{
        for(var r = [], n = 0; n < e; n++)r.push(P[t + n * 4 >> 2]);
        return r;
    };
    function Hr(e) {
        for(var t = 1; t < e.length; ++t)if (e[t] !== null && e[t].destructorFunction === void 0) return !0;
        return !1;
    }
    function Ht(e, t, r, n, a, i) {
        var u = t.length;
        u < 2 && C("argTypes array size mismatch! Must at least get return value and 'this' types!");
        var s = t[1] !== null && r !== null, l = Hr(t), d = t[0].name !== "void", h = u - 2, p = new Array(h), w = [], b = [], _ = function() {
            b.length = 0;
            var S;
            w.length = s ? 2 : 1, w[0] = a, s && (S = t[1].toWireType(b, this), w[1] = S);
            for(var A = 0; A < h; ++A)p[A] = t[A + 2].toWireType(b, A < 0 || arguments.length <= A ? void 0 : arguments[A]), w.push(p[A]);
            var I = n(...w);
            function X(L) {
                if (l) Lt(b);
                else for(var W = s ? 1 : 2; W < t.length; W++){
                    var Ot = W === 1 ? S : p[W - 2];
                    t[W].destructorFunction !== null && t[W].destructorFunction(Ot);
                }
                if (d) return t[0].fromWireType(L);
            }
            return X(I);
        };
        return Ut(e, _);
    }
    var Nr = (e, t, r, n, a, i)=>{
        var u = kt(t, r);
        a = U(n, a), tt([], [
            e
        ], (s)=>{
            s = s[0];
            var l = `constructor ${s.name}`;
            if (s.registeredClass.constructor_body === void 0 && (s.registeredClass.constructor_body = []), s.registeredClass.constructor_body[t - 1] !== void 0) throw new ft(`Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${s.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
            return s.registeredClass.constructor_body[t - 1] = ()=>{
                _t(`Cannot construct ${s.name} due to unbound types`, u);
            }, tt([], u, (d)=>(d.splice(1, 0, null), s.registeredClass.constructor_body[t - 1] = Ht(l, d, null, a, i), [])), [];
        });
    }, ye = (e)=>{
        e = e.trim();
        const t = e.indexOf("(");
        return t === -1 ? e : e.slice(0, t);
    }, zr = (e, t, r, n, a, i, u, s, l, d)=>{
        var h = kt(r, n);
        t = j(t), t = ye(t), i = U(a, i), tt([], [
            e
        ], (p)=>{
            p = p[0];
            var w = `${p.name}.${t}`;
            t.startsWith("@@") && (t = Symbol[t.substring(2)]), s && p.registeredClass.pureVirtualFunctions.push(t);
            function b() {
                _t(`Cannot call ${w} due to unbound types`, h);
            }
            var _ = p.registeredClass.instancePrototype, S = _[t];
            return S === void 0 || S.overloadTable === void 0 && S.className !== p.name && S.argCount === r - 2 ? (b.argCount = r - 2, b.className = p.name, _[t] = b) : (ce(_, t, w), _[t].overloadTable[r - 2] = b), tt([], h, (A)=>{
                var I = Ht(w, A, p, i, u);
                return _[t].overloadTable === void 0 ? (I.argCount = r - 2, _[t] = I) : _[t].overloadTable[r - 2] = I, [];
            }), [];
        });
    }, Nt = [], z = [], zt = (e)=>{
        e > 9 && --z[e + 1] === 0 && (z[e] = void 0, Nt.push(e));
    }, Gr = ()=>z.length / 2 - 5 - Nt.length, Xr = ()=>{
        z.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1), c.count_emval_handles = Gr;
    }, G = {
        toValue: (e)=>(e || C(`Cannot use deleted val. handle = ${e}`), z[e]),
        toHandle: (e)=>{
            switch(e){
                case void 0:
                    return 2;
                case null:
                    return 4;
                case !0:
                    return 6;
                case !1:
                    return 8;
                default:
                    {
                        const t = Nt.pop() || z.length;
                        return z[t] = e, z[t + 1] = 1, t;
                    }
            }
        }
    }, me = {
        name: "emscripten::val",
        fromWireType: (e)=>{
            var t = G.toValue(e);
            return zt(e), t;
        },
        toWireType: (e, t)=>G.toHandle(t),
        argPackAdvance: N,
        readValueFromPointer: lt,
        destructorFunction: null
    }, qr = (e)=>V(e, me), Yr = (e, t)=>{
        switch(t){
            case 4:
                return function(r) {
                    return this.fromWireType(Kt[r >> 2]);
                };
            case 8:
                return function(r) {
                    return this.fromWireType(te[r >> 3]);
                };
            default:
                throw new TypeError(`invalid float width (${t}): ${e}`);
        }
    }, Zr = (e, t, r)=>{
        t = j(t), V(e, {
            name: t,
            fromWireType: (n)=>n,
            toWireType: (n, a)=>a,
            argPackAdvance: N,
            readValueFromPointer: Yr(t, r),
            destructorFunction: null
        });
    }, Qr = (e, t, r, n, a, i, u, s)=>{
        var l = kt(t, r);
        e = j(e), e = ye(e), a = U(n, a), le(e, function() {
            _t(`Cannot call ${e} due to unbound types`, l);
        }, t - 1), tt([], l, (d)=>{
            var h = [
                d[0],
                null
            ].concat(d.slice(1));
            return de(e, Ht(e, h, null, a, i), t - 1), [];
        });
    }, Jr = (e, t, r)=>{
        switch(t){
            case 1:
                return r ? (n)=>Q[n] : (n)=>B[n];
            case 2:
                return r ? (n)=>ut[n >> 1] : (n)=>vt[n >> 1];
            case 4:
                return r ? (n)=>at[n >> 2] : (n)=>P[n >> 2];
            default:
                throw new TypeError(`invalid integer width (${t}): ${e}`);
        }
    }, Kr = (e, t, r, n, a)=>{
        t = j(t);
        var i = (h)=>h;
        if (n === 0) {
            var u = 32 - 8 * r;
            i = (h)=>h << u >>> u;
        }
        var s = t.includes("unsigned"), l = (h, p)=>{}, d;
        s ? d = function(h, p) {
            return l(p, this.name), p >>> 0;
        } : d = function(h, p) {
            return l(p, this.name), p;
        }, V(e, {
            name: t,
            fromWireType: i,
            toWireType: d,
            argPackAdvance: N,
            readValueFromPointer: Jr(t, r, n !== 0),
            destructorFunction: null
        });
    }, tn = (e, t, r)=>{
        var n = [
            Int8Array,
            Uint8Array,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array
        ], a = n[t];
        function i(u) {
            var s = P[u >> 2], l = P[u + 4 >> 2];
            return new a(Q.buffer, l, s);
        }
        r = j(r), V(e, {
            name: r,
            fromWireType: i,
            argPackAdvance: N,
            readValueFromPointer: i
        }, {
            ignoreDuplicateRegistrations: !0
        });
    }, en = Object.assign({
        optional: !0
    }, me), rn = (e, t)=>{
        V(e, en);
    }, nn = (e, t, r, n)=>{
        if (!(n > 0)) return 0;
        for(var a = r, i = r + n - 1, u = 0; u < e.length; ++u){
            var s = e.charCodeAt(u);
            if (s >= 55296 && s <= 57343) {
                var l = e.charCodeAt(++u);
                s = 65536 + ((s & 1023) << 10) | l & 1023;
            }
            if (s <= 127) {
                if (r >= i) break;
                t[r++] = s;
            } else if (s <= 2047) {
                if (r + 1 >= i) break;
                t[r++] = 192 | s >> 6, t[r++] = 128 | s & 63;
            } else if (s <= 65535) {
                if (r + 2 >= i) break;
                t[r++] = 224 | s >> 12, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | s & 63;
            } else {
                if (r + 3 >= i) break;
                t[r++] = 240 | s >> 18, t[r++] = 128 | s >> 12 & 63, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | s & 63;
            }
        }
        return t[r] = 0, r - a;
    }, it = (e, t, r)=>nn(e, B, t, r), ge = (e)=>{
        for(var t = 0, r = 0; r < e.length; ++r){
            var n = e.charCodeAt(r);
            n <= 127 ? t++ : n <= 2047 ? t += 2 : n >= 55296 && n <= 57343 ? (t += 4, ++r) : t += 3;
        }
        return t;
    }, we = typeof TextDecoder < "u" ? new TextDecoder() : void 0, $e = function(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : NaN;
        for(var n = t + r, a = t; e[a] && !(a >= n);)++a;
        if (a - t > 16 && e.buffer && we) return we.decode(e.subarray(t, a));
        for(var i = ""; t < a;){
            var u = e[t++];
            if (!(u & 128)) {
                i += String.fromCharCode(u);
                continue;
            }
            var s = e[t++] & 63;
            if ((u & 224) == 192) {
                i += String.fromCharCode((u & 31) << 6 | s);
                continue;
            }
            var l = e[t++] & 63;
            if ((u & 240) == 224 ? u = (u & 15) << 12 | s << 6 | l : u = (u & 7) << 18 | s << 12 | l << 6 | e[t++] & 63, u < 65536) i += String.fromCharCode(u);
            else {
                var d = u - 65536;
                i += String.fromCharCode(55296 | d >> 10, 56320 | d & 1023);
            }
        }
        return i;
    }, an = (e, t)=>e ? $e(B, e, t) : "", on = (e, t)=>{
        t = j(t), V(e, {
            name: t,
            fromWireType (r) {
                for(var n = P[r >> 2], a = r + 4, i, s, u = a, s = 0; s <= n; ++s){
                    var l = a + s;
                    if (s == n || B[l] == 0) {
                        var d = l - u, h = an(u, d);
                        i === void 0 ? i = h : (i += "\0", i += h), u = l + 1;
                    }
                }
                return et(r), i;
            },
            toWireType (r, n) {
                n instanceof ArrayBuffer && (n = new Uint8Array(n));
                var a, i = typeof n == "string";
                i || ArrayBuffer.isView(n) && n.BYTES_PER_ELEMENT == 1 || C("Cannot pass non-string to std::string"), i ? a = ge(n) : a = n.length;
                var u = Pe(4 + a + 1), s = u + 4;
                return P[u >> 2] = a, i ? it(n, s, a + 1) : B.set(n, s), r !== null && r.push(et, u), u;
            },
            argPackAdvance: N,
            readValueFromPointer: lt,
            destructorFunction (r) {
                et(r);
            }
        });
    }, be = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, sn = (e, t)=>{
        for(var r = e, n = r >> 1, a = n + t / 2; !(n >= a) && vt[n];)++n;
        if (r = n << 1, r - e > 32 && be) return be.decode(B.subarray(e, r));
        for(var i = "", u = 0; !(u >= t / 2); ++u){
            var s = ut[e + u * 2 >> 1];
            if (s == 0) break;
            i += String.fromCharCode(s);
        }
        return i;
    }, un = (e, t, r)=>{
        if (r != null || (r = 2147483647), r < 2) return 0;
        r -= 2;
        for(var n = t, a = r < e.length * 2 ? r / 2 : e.length, i = 0; i < a; ++i){
            var u = e.charCodeAt(i);
            ut[t >> 1] = u, t += 2;
        }
        return ut[t >> 1] = 0, t - n;
    }, cn = (e)=>e.length * 2, ln = (e, t)=>{
        for(var r = 0, n = ""; !(r >= t / 4);){
            var a = at[e + r * 4 >> 2];
            if (a == 0) break;
            if (++r, a >= 65536) {
                var i = a - 65536;
                n += String.fromCharCode(55296 | i >> 10, 56320 | i & 1023);
            } else n += String.fromCharCode(a);
        }
        return n;
    }, fn = (e, t, r)=>{
        if (r != null || (r = 2147483647), r < 4) return 0;
        for(var n = t, a = n + r - 4, i = 0; i < e.length; ++i){
            var u = e.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
                var s = e.charCodeAt(++i);
                u = 65536 + ((u & 1023) << 10) | s & 1023;
            }
            if (at[t >> 2] = u, t += 4, t + 4 > a) break;
        }
        return at[t >> 2] = 0, t - n;
    }, dn = (e)=>{
        for(var t = 0, r = 0; r < e.length; ++r){
            var n = e.charCodeAt(r);
            n >= 55296 && n <= 57343 && ++r, t += 4;
        }
        return t;
    }, hn = (e, t, r)=>{
        r = j(r);
        var n, a, i, u;
        t === 2 ? (n = sn, a = un, u = cn, i = (s)=>vt[s >> 1]) : t === 4 && (n = ln, a = fn, u = dn, i = (s)=>P[s >> 2]), V(e, {
            name: r,
            fromWireType: (s)=>{
                for(var l = P[s >> 2], d, h = s + 4, p = 0; p <= l; ++p){
                    var w = s + 4 + p * t;
                    if (p == l || i(w) == 0) {
                        var b = w - h, _ = n(h, b);
                        d === void 0 ? d = _ : (d += "\0", d += _), h = w + t;
                    }
                }
                return et(s), d;
            },
            toWireType: (s, l)=>{
                typeof l != "string" && C(`Cannot pass non-string to C++ string type ${r}`);
                var d = u(l), h = Pe(4 + d + t);
                return P[h >> 2] = d / t, a(l, h + 4, d + t), s !== null && s.push(et, h), h;
            },
            argPackAdvance: N,
            readValueFromPointer: lt,
            destructorFunction (s) {
                et(s);
            }
        });
    }, pn = (e, t, r, n, a, i)=>{
        $t[e] = {
            name: j(t),
            rawConstructor: U(r, n),
            rawDestructor: U(a, i),
            fields: []
        };
    }, vn = (e, t, r, n, a, i, u, s, l, d)=>{
        $t[e].fields.push({
            fieldName: j(t),
            getterReturnType: r,
            getter: U(n, a),
            getterContext: i,
            setterArgumentType: u,
            setter: U(s, l),
            setterContext: d
        });
    }, yn = (e, t)=>{
        t = j(t), V(e, {
            isVoid: !0,
            name: t,
            argPackAdvance: 0,
            fromWireType: ()=>{},
            toWireType: (r, n)=>{}
        });
    }, Gt = [], mn = (e, t, r, n)=>(e = Gt[e], t = G.toValue(t), e(null, t, r, n)), gn = {}, wn = (e)=>{
        var t = gn[e];
        return t === void 0 ? j(e) : t;
    }, Ce = ()=>{
        if (typeof globalThis == "object") return globalThis;
        function e(t) {
            t.$$$embind_global$$$ = t;
            var r = typeof $$$embind_global$$$ == "object" && t.$$$embind_global$$$ == t;
            return r || delete t.$$$embind_global$$$, r;
        }
        if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && e(global) ? $$$embind_global$$$ = global : typeof self == "object" && e(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
        throw Error("unable to get global object.");
    }, $n = (e)=>e === 0 ? G.toHandle(Ce()) : (e = wn(e), G.toHandle(Ce()[e])), bn = (e)=>{
        var t = Gt.length;
        return Gt.push(e), t;
    }, Te = (e, t)=>{
        var r = K[e];
        return r === void 0 && C(`${t} has unknown type ${ve(e)}`), r;
    }, Cn = (e, t)=>{
        for(var r = new Array(e), n = 0; n < e; ++n)r[n] = Te(P[t + n * 4 >> 2], `parameter ${n}`);
        return r;
    }, Tn = (e, t, r)=>{
        var n = [], a = e.toWireType(n, r);
        return n.length && (P[t >> 2] = G.toHandle(n)), a;
    }, Pn = Reflect.construct, En = (e, t, r)=>{
        var n = Cn(e, t), a = n.shift();
        e--;
        var i = new Array(e), u = (l, d, h, p)=>{
            for(var w = 0, b = 0; b < e; ++b)i[b] = n[b].readValueFromPointer(p + w), w += n[b].argPackAdvance;
            var _ = r === 1 ? Pn(d, i) : d.apply(l, i);
            return Tn(a, h, _);
        }, s = `methodCaller<(${n.map((l)=>l.name).join(", ")}) => ${a.name}>`;
        return bn(Ut(s, u));
    }, _n = (e)=>{
        e > 9 && (z[e + 1] += 1);
    }, On = (e)=>{
        var t = G.toValue(e);
        Lt(t), zt(e);
    }, xn = (e, t)=>{
        e = Te(e, "_emval_take_value");
        var r = e.readValueFromPointer(t);
        return G.toHandle(r);
    }, An = (e, t, r, n)=>{
        var a = /* @__PURE__ */ new Date().getFullYear(), i = new Date(a, 0, 1), u = new Date(a, 6, 1), s = i.getTimezoneOffset(), l = u.getTimezoneOffset(), d = Math.max(s, l);
        P[e >> 2] = d * 60, at[t >> 2] = +(s != l);
        var h = (b)=>{
            var _ = b >= 0 ? "-" : "+", S = Math.abs(b), A = String(Math.floor(S / 60)).padStart(2, "0"), I = String(S % 60).padStart(2, "0");
            return `UTC${_}${A}${I}`;
        }, p = h(s), w = h(l);
        l < s ? (it(p, r, 17), it(w, n, 17)) : (it(p, n, 17), it(w, r, 17));
    }, Sn = ()=>2147483648, In = (e, t)=>Math.ceil(e / t) * t, Dn = (e)=>{
        var t = nt.buffer, r = (e - t.byteLength + 65535) / 65536 | 0;
        try {
            return nt.grow(r), ee(), 1;
        } catch  {}
    }, Mn = (e)=>{
        var t = B.length;
        e >>>= 0;
        var r = Sn();
        if (e > r) return !1;
        for(var n = 1; n <= 4; n *= 2){
            var a = t * (1 + 0.2 / n);
            a = Math.min(a, e + 100663296);
            var i = Math.min(r, In(Math.max(e, a), 65536)), u = Dn(i);
            if (u) return !0;
        }
        return !1;
    }, Xt = {}, Fn = ()=>M || "./this.program", ht = ()=>{
        if (!ht.strings) {
            var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", t = {
                USER: "web_user",
                LOGNAME: "web_user",
                PATH: "/",
                PWD: "/",
                HOME: "/home/web_user",
                LANG: e,
                _: Fn()
            };
            for(var r in Xt)Xt[r] === void 0 ? delete t[r] : t[r] = Xt[r];
            var n = [];
            for(var r in t)n.push(`${r}=${t[r]}`);
            ht.strings = n;
        }
        return ht.strings;
    }, jn = (e, t)=>{
        var r = 0, n = 0;
        for (var a of ht()){
            var i = t + r;
            P[e + n >> 2] = i, r += it(a, i, 1 / 0) + 1, n += 4;
        }
        return 0;
    }, Rn = (e, t)=>{
        var r = ht();
        P[e >> 2] = r.length;
        var n = 0;
        for (var a of r)n += ge(a) + 1;
        return P[t >> 2] = n, 0;
    }, Ln = (e)=>52;
    function Bn(e, t, r, n, a) {
        return 70;
    }
    var Wn = [
        null,
        [],
        []
    ], Un = (e, t)=>{
        var r = Wn[e];
        t === 0 || t === 10 ? ((e === 1 ? st : k)($e(r)), r.length = 0) : r.push(t);
    }, Vn = (e, t, r, n)=>{
        for(var a = 0, i = 0; i < r; i++){
            var u = P[t >> 2], s = P[t + 4 >> 2];
            t += 8;
            for(var l = 0; l < s; l++)Un(e, B[u + l]);
            a += s;
        }
        return P[n >> 2] = a, 0;
    }, kn = (e)=>e;
    br(), _r(), Br(), Xr(), c.noExitRuntime && c.noExitRuntime, c.print && (st = c.print), c.printErr && (k = c.printErr), c.wasmBinary && (Z = c.wasmBinary), c.arguments && c.arguments, c.thisProgram && (M = c.thisProgram);
    var Hn = {
        s: ur,
        w: cr,
        a: lr,
        j: fr,
        m: dr,
        N: hr,
        p: pr,
        da: vr,
        d: yr,
        _: mr,
        sa: wr,
        Z: $r,
        na: Tr,
        qa: kr,
        pa: Nr,
        F: zr,
        la: qr,
        R: Zr,
        S: Qr,
        y: Kr,
        t: tn,
        ra: rn,
        ma: on,
        O: hn,
        K: pn,
        ta: vn,
        oa: yn,
        V: mn,
        ua: zt,
        wa: $n,
        $: En,
        T: _n,
        va: On,
        ka: xn,
        aa: An,
        ea: Mn,
        ba: jn,
        ca: Rn,
        fa: Ln,
        X: Bn,
        Q: Vn,
        I: ba,
        C: Ta,
        U: oa,
        P: Sa,
        q: ma,
        b: ea,
        D: $a,
        ia: Ea,
        c: na,
        ha: _a,
        h: aa,
        i: la,
        r: da,
        M: wa,
        v: pa,
        E: ya,
        J: ga,
        A: Pa,
        H: Ia,
        W: Fa,
        k: sa,
        f: ia,
        e: ra,
        g: ta,
        L: Aa,
        l: ca,
        ja: Ca,
        o: ha,
        x: fa,
        u: va,
        ga: xa,
        B: Oa,
        n: ua,
        G: Da,
        Y: Ma,
        z: kn
    }, E = await or();
    E.ya;
    var Nn = E.za, et = c._free = E.Aa, Pe = c._malloc = E.Ca, zn = E.Da, v = E.Ea, Gn = E.Fa, Xn = E.Ga, qn = E.Ha, Yn = E.Ia, Zn = E.Ja, Qn = E.Ka;
    c.dynCall_viijii = E.La;
    var Jn = c.dynCall_vij = E.Ma;
    c.dynCall_jiji = E.Na;
    var Kn = c.dynCall_jiiii = E.Oa;
    c.dynCall_iiiiij = E.Pa, c.dynCall_iiiiijj = E.Qa, c.dynCall_iiiiiijj = E.Ra;
    function ta(e, t, r, n) {
        var a = m();
        try {
            g(e)(t, r, n);
        } catch (i) {
            if (y(a), i !== i + 0) throw i;
            v(1, 0);
        }
    }
    function ea(e, t) {
        var r = m();
        try {
            return g(e)(t);
        } catch (n) {
            if (y(r), n !== n + 0) throw n;
            v(1, 0);
        }
    }
    function ra(e, t, r) {
        var n = m();
        try {
            g(e)(t, r);
        } catch (a) {
            if (y(n), a !== a + 0) throw a;
            v(1, 0);
        }
    }
    function na(e, t, r) {
        var n = m();
        try {
            return g(e)(t, r);
        } catch (a) {
            if (y(n), a !== a + 0) throw a;
            v(1, 0);
        }
    }
    function aa(e, t, r, n) {
        var a = m();
        try {
            return g(e)(t, r, n);
        } catch (i) {
            if (y(a), i !== i + 0) throw i;
            v(1, 0);
        }
    }
    function oa(e, t, r, n, a) {
        var i = m();
        try {
            return g(e)(t, r, n, a);
        } catch (u) {
            if (y(i), u !== u + 0) throw u;
            v(1, 0);
        }
    }
    function ia(e, t) {
        var r = m();
        try {
            g(e)(t);
        } catch (n) {
            if (y(r), n !== n + 0) throw n;
            v(1, 0);
        }
    }
    function sa(e) {
        var t = m();
        try {
            g(e)();
        } catch (r) {
            if (y(t), r !== r + 0) throw r;
            v(1, 0);
        }
    }
    function ua(e, t, r, n, a, i, u, s, l, d, h) {
        var p = m();
        try {
            g(e)(t, r, n, a, i, u, s, l, d, h);
        } catch (w) {
            if (y(p), w !== w + 0) throw w;
            v(1, 0);
        }
    }
    function ca(e, t, r, n, a) {
        var i = m();
        try {
            g(e)(t, r, n, a);
        } catch (u) {
            if (y(i), u !== u + 0) throw u;
            v(1, 0);
        }
    }
    function la(e, t, r, n, a) {
        var i = m();
        try {
            return g(e)(t, r, n, a);
        } catch (u) {
            if (y(i), u !== u + 0) throw u;
            v(1, 0);
        }
    }
    function fa(e, t, r, n, a, i, u) {
        var s = m();
        try {
            g(e)(t, r, n, a, i, u);
        } catch (l) {
            if (y(s), l !== l + 0) throw l;
            v(1, 0);
        }
    }
    function da(e, t, r, n, a, i) {
        var u = m();
        try {
            return g(e)(t, r, n, a, i);
        } catch (s) {
            if (y(u), s !== s + 0) throw s;
            v(1, 0);
        }
    }
    function ha(e, t, r, n, a, i) {
        var u = m();
        try {
            g(e)(t, r, n, a, i);
        } catch (s) {
            if (y(u), s !== s + 0) throw s;
            v(1, 0);
        }
    }
    function pa(e, t, r, n, a, i, u) {
        var s = m();
        try {
            return g(e)(t, r, n, a, i, u);
        } catch (l) {
            if (y(s), l !== l + 0) throw l;
            v(1, 0);
        }
    }
    function va(e, t, r, n, a, i, u, s) {
        var l = m();
        try {
            g(e)(t, r, n, a, i, u, s);
        } catch (d) {
            if (y(l), d !== d + 0) throw d;
            v(1, 0);
        }
    }
    function ya(e, t, r, n, a, i, u, s) {
        var l = m();
        try {
            return g(e)(t, r, n, a, i, u, s);
        } catch (d) {
            if (y(l), d !== d + 0) throw d;
            v(1, 0);
        }
    }
    function ma(e) {
        var t = m();
        try {
            return g(e)();
        } catch (r) {
            if (y(t), r !== r + 0) throw r;
            v(1, 0);
        }
    }
    function ga(e, t, r, n, a, i, u, s, l) {
        var d = m();
        try {
            return g(e)(t, r, n, a, i, u, s, l);
        } catch (h) {
            if (y(d), h !== h + 0) throw h;
            v(1, 0);
        }
    }
    function wa(e, t, r, n, a, i, u) {
        var s = m();
        try {
            return g(e)(t, r, n, a, i, u);
        } catch (l) {
            if (y(s), l !== l + 0) throw l;
            v(1, 0);
        }
    }
    function $a(e, t, r, n) {
        var a = m();
        try {
            return g(e)(t, r, n);
        } catch (i) {
            if (y(a), i !== i + 0) throw i;
            v(1, 0);
        }
    }
    function ba(e, t, r, n) {
        var a = m();
        try {
            return g(e)(t, r, n);
        } catch (i) {
            if (y(a), i !== i + 0) throw i;
            v(1, 0);
        }
    }
    function Ca(e, t, r, n, a, i, u, s) {
        var l = m();
        try {
            g(e)(t, r, n, a, i, u, s);
        } catch (d) {
            if (y(l), d !== d + 0) throw d;
            v(1, 0);
        }
    }
    function Ta(e, t, r, n, a, i) {
        var u = m();
        try {
            return g(e)(t, r, n, a, i);
        } catch (s) {
            if (y(u), s !== s + 0) throw s;
            v(1, 0);
        }
    }
    function Pa(e, t, r, n, a, i, u, s, l, d) {
        var h = m();
        try {
            return g(e)(t, r, n, a, i, u, s, l, d);
        } catch (p) {
            if (y(h), p !== p + 0) throw p;
            v(1, 0);
        }
    }
    function Ea(e, t, r) {
        var n = m();
        try {
            return g(e)(t, r);
        } catch (a) {
            if (y(n), a !== a + 0) throw a;
            v(1, 0);
        }
    }
    function _a(e, t, r, n, a) {
        var i = m();
        try {
            return g(e)(t, r, n, a);
        } catch (u) {
            if (y(i), u !== u + 0) throw u;
            v(1, 0);
        }
    }
    function Oa(e, t, r, n, a, i, u, s, l, d) {
        var h = m();
        try {
            g(e)(t, r, n, a, i, u, s, l, d);
        } catch (p) {
            if (y(h), p !== p + 0) throw p;
            v(1, 0);
        }
    }
    function xa(e, t, r, n, a, i, u, s, l) {
        var d = m();
        try {
            g(e)(t, r, n, a, i, u, s, l);
        } catch (h) {
            if (y(d), h !== h + 0) throw h;
            v(1, 0);
        }
    }
    function Aa(e, t, r, n, a, i, u) {
        var s = m();
        try {
            g(e)(t, r, n, a, i, u);
        } catch (l) {
            if (y(s), l !== l + 0) throw l;
            v(1, 0);
        }
    }
    function Sa(e, t, r, n) {
        var a = m();
        try {
            return g(e)(t, r, n);
        } catch (i) {
            if (y(a), i !== i + 0) throw i;
            v(1, 0);
        }
    }
    function Ia(e, t, r, n, a, i, u, s, l, d, h, p) {
        var w = m();
        try {
            return g(e)(t, r, n, a, i, u, s, l, d, h, p);
        } catch (b) {
            if (y(w), b !== b + 0) throw b;
            v(1, 0);
        }
    }
    function Da(e, t, r, n, a, i, u, s, l, d, h, p, w, b, _, S) {
        var A = m();
        try {
            g(e)(t, r, n, a, i, u, s, l, d, h, p, w, b, _, S);
        } catch (I) {
            if (y(A), I !== I + 0) throw I;
            v(1, 0);
        }
    }
    function Ma(e, t, r, n) {
        var a = m();
        try {
            Jn(e, t, r, n);
        } catch (i) {
            if (y(a), i !== i + 0) throw i;
            v(1, 0);
        }
    }
    function Fa(e, t, r, n, a) {
        var i = m();
        try {
            return Kn(e, t, r, n, a);
        } catch (u) {
            if (y(i), u !== u + 0) throw u;
            v(1, 0);
        }
    }
    function qt() {
        if (J > 0) {
            ct = qt;
            return;
        }
        if (qe(), J > 0) {
            ct = qt;
            return;
        }
        function e() {
            var t;
            c.calledRun = !0, !Jt && (Ye(), T(c), (t = c.onRuntimeInitialized) === null || t === void 0 || t.call(c), Ze());
        }
        c.setStatus ? (c.setStatus("Running..."), setTimeout(()=>{
            setTimeout(()=>c.setStatus(""), 1), e();
        }, 1)) : e();
    }
    function ja() {
        if (c.preInit) for(typeof c.preInit == "function" && (c.preInit = [
            c.preInit
        ]); c.preInit.length > 0;)c.preInit.shift()();
    }
    return ja(), qt(), f = x, f;
};
function Be(o) {
    return Le(Qt, o);
}
function Co() {
    return Ka(Qt);
}
function To(o) {
    Be({
        overrides: o,
        equalityFn: Object.is,
        fireImmediately: !1
    });
}
async function eo(o, f) {
    return to(Qt, o, f);
}
const Po = "3c07027dbfd6da47330ac18e74e6924019d9ac9a4c1e161b800666f9e3c925ca", We = [
    [
        "aztec",
        "Aztec"
    ],
    [
        "code_128",
        "Code128"
    ],
    [
        "code_39",
        "Code39"
    ],
    [
        "code_93",
        "Code93"
    ],
    [
        "codabar",
        "Codabar"
    ],
    [
        "databar",
        "DataBar"
    ],
    [
        "databar_expanded",
        "DataBarExpanded"
    ],
    [
        "databar_limited",
        "DataBarLimited"
    ],
    [
        "data_matrix",
        "DataMatrix"
    ],
    [
        "dx_film_edge",
        "DXFilmEdge"
    ],
    [
        "ean_13",
        "EAN-13"
    ],
    [
        "ean_8",
        "EAN-8"
    ],
    [
        "itf",
        "ITF"
    ],
    [
        "maxi_code",
        "MaxiCode"
    ],
    [
        "micro_qr_code",
        "MicroQRCode"
    ],
    [
        "pdf417",
        "PDF417"
    ],
    [
        "qr_code",
        "QRCode"
    ],
    [
        "rm_qr_code",
        "rMQRCode"
    ],
    [
        "upc_a",
        "UPC-A"
    ],
    [
        "upc_e",
        "UPC-E"
    ],
    [
        "linear_codes",
        "Linear-Codes"
    ],
    [
        "matrix_codes",
        "Matrix-Codes"
    ],
    [
        "any",
        "Any"
    ]
], ro = [
    ...We,
    [
        "unknown"
    ]
].map((o)=>o[0]), Zt = new Map(We);
function no(o) {
    for (const [f, c] of Zt)if (o === c) return f;
    return "unknown";
}
function ao(o) {
    if (Ue(o)) return {
        width: o.naturalWidth,
        height: o.naturalHeight
    };
    if (Ve(o)) return {
        width: o.width.baseVal.value,
        height: o.height.baseVal.value
    };
    if (ke(o)) return {
        width: o.videoWidth,
        height: o.videoHeight
    };
    if (Ne(o)) return {
        width: o.width,
        height: o.height
    };
    if (Ge(o)) return {
        width: o.displayWidth,
        height: o.displayHeight
    };
    if (He(o)) return {
        width: o.width,
        height: o.height
    };
    if (ze(o)) return {
        width: o.width,
        height: o.height
    };
    throw new TypeError("The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.");
}
function Ue(o) {
    var f, c;
    try {
        return o instanceof ((c = (f = o == null ? void 0 : o.ownerDocument) == null ? void 0 : f.defaultView) == null ? void 0 : c.HTMLImageElement);
    } catch  {
        return !1;
    }
}
function Ve(o) {
    var f, c;
    try {
        return o instanceof ((c = (f = o == null ? void 0 : o.ownerDocument) == null ? void 0 : f.defaultView) == null ? void 0 : c.SVGImageElement);
    } catch  {
        return !1;
    }
}
function ke(o) {
    var f, c;
    try {
        return o instanceof ((c = (f = o == null ? void 0 : o.ownerDocument) == null ? void 0 : f.defaultView) == null ? void 0 : c.HTMLVideoElement);
    } catch  {
        return !1;
    }
}
function He(o) {
    var f, c;
    try {
        return o instanceof ((c = (f = o == null ? void 0 : o.ownerDocument) == null ? void 0 : f.defaultView) == null ? void 0 : c.HTMLCanvasElement);
    } catch  {
        return !1;
    }
}
function Ne(o) {
    try {
        return o instanceof ImageBitmap || Object.prototype.toString.call(o) === "[object ImageBitmap]";
    } catch  {
        return !1;
    }
}
function ze(o) {
    try {
        return o instanceof OffscreenCanvas || Object.prototype.toString.call(o) === "[object OffscreenCanvas]";
    } catch  {
        return !1;
    }
}
function Ge(o) {
    try {
        return o instanceof VideoFrame || Object.prototype.toString.call(o) === "[object VideoFrame]";
    } catch  {
        return !1;
    }
}
function oo(o) {
    try {
        return o instanceof Blob || Object.prototype.toString.call(o) === "[object Blob]";
    } catch  {
        return !1;
    }
}
function io(o) {
    try {
        return o instanceof ImageData || Object.prototype.toString.call(o) === "[object ImageData]";
    } catch  {
        return !1;
    }
}
function so(o, f) {
    try {
        const c = new OffscreenCanvas(o, f);
        if (c.getContext("2d") instanceof OffscreenCanvasRenderingContext2D) return c;
        throw void 0;
    } catch  {
        const c = document.createElement("canvas");
        return c.width = o, c.height = f, c;
    }
}
async function Xe(o) {
    if (Ue(o) && !await fo(o)) throw new DOMException("Failed to load or decode HTMLImageElement.", "InvalidStateError");
    if (Ve(o) && !await ho(o)) throw new DOMException("Failed to load or decode SVGImageElement.", "InvalidStateError");
    if (Ge(o) && po(o)) throw new DOMException("VideoFrame is closed.", "InvalidStateError");
    if (ke(o) && (o.readyState === 0 || o.readyState === 1)) throw new DOMException("Invalid element or state.", "InvalidStateError");
    if (Ne(o) && yo(o)) throw new DOMException("The image source is detached.", "InvalidStateError");
    const { width: f, height: c } = ao(o);
    if (f === 0 || c === 0) return null;
    const $ = so(f, c).getContext("2d");
    $.drawImage(o, 0, 0);
    try {
        return $.getImageData(0, 0, f, c);
    } catch  {
        throw new DOMException("Source would taint origin.", "SecurityError");
    }
}
async function uo(o) {
    let f;
    try {
        f = await createImageBitmap(o);
    } catch  {
        try {
            if (globalThis.Image) {
                f = new Image();
                let $ = "";
                try {
                    $ = URL.createObjectURL(o), f.src = $, await f.decode();
                } finally{
                    URL.revokeObjectURL($);
                }
            } else return o;
        } catch  {
            throw new DOMException("Failed to load or decode Blob.", "InvalidStateError");
        }
    }
    return await Xe(f);
}
function co(o) {
    const { width: f, height: c } = o;
    if (f === 0 || c === 0) return null;
    const T = o.getContext("2d");
    try {
        return T.getImageData(0, 0, f, c);
    } catch  {
        throw new DOMException("Source would taint origin.", "SecurityError");
    }
}
async function lo(o) {
    if (oo(o)) return await uo(o);
    if (io(o)) {
        if (vo(o)) throw new DOMException("The image data has been detached.", "InvalidStateError");
        return o;
    }
    return He(o) || ze(o) ? co(o) : await Xe(o);
}
async function fo(o) {
    try {
        return await o.decode(), !0;
    } catch  {
        return !1;
    }
}
async function ho(o) {
    var f;
    try {
        return await ((f = o.decode) == null ? void 0 : f.call(o)), !0;
    } catch  {
        return !1;
    }
}
function po(o) {
    return o.format === null;
}
function vo(o) {
    return o.data.buffer.byteLength === 0;
}
function yo(o) {
    return o.width === 0 && o.height === 0;
}
function Re(o, f) {
    return mo(o) ? new DOMException(`${f}: ${o.message}`, o.name) : go(o) ? new o.constructor(`${f}: ${o.message}`) : new Error(`${f}: ${o}`);
}
function mo(o) {
    return o instanceof DOMException || Object.prototype.toString.call(o) === "[object DOMException]";
}
function go(o) {
    return o instanceof Error || Object.prototype.toString.call(o) === "[object Error]";
}
var pt;
class Eo {
    constructor(f = {}){
        De(this, pt);
        var c;
        try {
            const T = (c = f == null ? void 0 : f.formats) == null ? void 0 : c.filter(($)=>$ !== "unknown");
            if ((T == null ? void 0 : T.length) === 0) throw new TypeError("Hint option provided, but is empty.");
            for (const $ of T != null ? T : [])if (!Zt.has($)) throw new TypeError(`Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '${$}' is not a valid enum value of type BarcodeFormat.`);
            Me(this, pt, T != null ? T : []), Be({
                fireImmediately: !0
            }).catch(()=>{});
        } catch (T) {
            throw Re(T, "Failed to construct 'BarcodeDetector'");
        }
    }
    static async getSupportedFormats() {
        return ro.filter((f)=>f !== "unknown");
    }
    async detect(f) {
        try {
            const c = await lo(f);
            if (c === null) return [];
            let T;
            const $ = {
                tryCode39ExtendedMode: !1,
                textMode: "Plain",
                formats: Ie(this, pt).map((x)=>Zt.get(x))
            };
            try {
                T = await eo(c, $);
            } catch (x) {
                throw console.error(x), new DOMException("Barcode detection service unavailable.", "NotSupportedError");
            }
            return T.map((x)=>{
                const { topLeft: { x: D, y: R }, topRight: { x: O, y: M }, bottomLeft: { x: F, y: q }, bottomRight: { x: rt, y: Y } } = x.position, st = Math.min(D, O, F, rt), k = Math.min(R, M, q, Y), Z = Math.max(D, O, F, rt), nt = Math.max(R, M, q, Y);
                return {
                    boundingBox: new DOMRectReadOnly(st, k, Z - st, nt - k),
                    rawValue: x.text,
                    format: no(x.format),
                    cornerPoints: [
                        {
                            x: D,
                            y: R
                        },
                        {
                            x: O,
                            y: M
                        },
                        {
                            x: rt,
                            y: Y
                        },
                        {
                            x: F,
                            y: q
                        }
                    ]
                };
            });
        } catch (c) {
            throw Re(c, "Failed to execute 'detect' on 'BarcodeDetector'");
        }
    }
}
pt = new WeakMap();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["6OGej"], null, "parcelRequirea202", {})

//# sourceMappingURL=es.0fa745cd.js.map
