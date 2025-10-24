import { createElementBlock as I, openBlock as _, createElementVNode as E, defineComponent as Y, mergeModels as J, useModel as Q, createVNode as Z, unref as F, toDisplayString as G, withCtx as ye, onMounted as ta, nextTick as Dn, getCurrentScope as na, onScopeDispose as ra, watch as aa, getCurrentInstance as oa, computed as me, toValue as Ge, useTemplateRef as ge, renderSlot as Ve, useSlots as vr, createBlock as ce, createCommentVNode as Fe, normalizeStyle as jn, Fragment as be, renderList as Be, ref as He, watchEffect as Sn, onWatcherCleanup as xn, isRef as ia, withKeys as Ce, withModifiers as dt, createTextVNode as $e, withDirectives as ze, vModelText as ct, resolveComponent as la, vShow as sa, resolveDynamicComponent as hr, vModelSelect as ua } from "vue";
import { CheckboxRoot as da, CheckboxIndicator as ca, PopoverRoot as fa, PopoverTrigger as pa, PopoverContent as ga, SwitchRoot as va, SwitchThumb as ha } from "reka-ui";
let ma = 0;
const ve = () => `input-${ma++}`, ya = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "15",
  height: "16",
  fill: "none"
};
function ba(e, t) {
  return _(), I("svg", ya, [...t[0] || (t[0] = [
    E("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "m2.813 8.469 3.75 3.75 5.625-8.438"
    }, null, -1)
  ])]);
}
const wa = { render: ba }, Ea = { class: "field" }, Da = ["for"], Sa = /* @__PURE__ */ Y({
  __name: "CheckboxField",
  props: /* @__PURE__ */ J({
    label: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Q(e, "modelValue"), n = ve();
    return (r, a) => (_(), I("div", Ea, [
      E("label", { for: F(n) }, G(e.label), 9, Da),
      Z(F(da), {
        modelValue: t.value,
        "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value = o),
        id: F(n),
        class: "checkbox"
      }, {
        default: ye(() => [
          Z(F(ca), { class: "indicator" }, {
            default: ye(() => [
              Z(F(wa))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "id"])
    ]));
  }
}), ae = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Os = /* @__PURE__ */ ae(Sa, [["__scopeId", "data-v-a51a346c"]]);
var Nn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ut = { exports: {} }, Ln;
function Aa() {
  return Ln || (Ln = 1, (function(e) {
    var t = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     *
     * @license MIT <https://opensource.org/licenses/MIT>
     * @author Lea Verou <https://lea.verou.me>
     * @namespace
     * @public
     */
    var n = (function(r) {
      var a = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, o = 0, l = {}, i = {
        /**
         * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
         * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
         * additional languages or plugins yourself.
         *
         * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
         *
         * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.manual = true;
         * // add a new <script> to load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        manual: r.Prism && r.Prism.manual,
        /**
         * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
         * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
         * own worker, you don't want it to do this.
         *
         * By setting this value to `true`, Prism will not add its own listeners to the worker.
         *
         * You obviously have to change this value before Prism executes. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.disableWorkerMessageHandler = true;
         * // Load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        disableWorkerMessageHandler: r.Prism && r.Prism.disableWorkerMessageHandler,
        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
          encode: function d(f) {
            return f instanceof s ? new s(f.type, d(f.content), f.alias) : Array.isArray(f) ? f.map(d) : f.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          /**
           * Returns the name of the type of the given value.
           *
           * @param {any} o
           * @returns {string}
           * @example
           * type(null)      === 'Null'
           * type(undefined) === 'Undefined'
           * type(123)       === 'Number'
           * type('foo')     === 'String'
           * type(true)      === 'Boolean'
           * type([1, 2])    === 'Array'
           * type({})        === 'Object'
           * type(String)    === 'Function'
           * type(/abc+/)    === 'RegExp'
           */
          type: function(d) {
            return Object.prototype.toString.call(d).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(d) {
            return d.__id || Object.defineProperty(d, "__id", { value: ++o }), d.__id;
          },
          /**
           * Creates a deep clone of the given object.
           *
           * The main intended use of this function is to clone language definitions.
           *
           * @param {T} o
           * @param {Record<number, any>} [visited]
           * @returns {T}
           * @template T
           */
          clone: function d(f, g) {
            g = g || {};
            var m, v;
            switch (i.util.type(f)) {
              case "Object":
                if (v = i.util.objId(f), g[v])
                  return g[v];
                m = /** @type {Record<string, any>} */
                {}, g[v] = m;
                for (var A in f)
                  f.hasOwnProperty(A) && (m[A] = d(f[A], g));
                return (
                  /** @type {any} */
                  m
                );
              case "Array":
                return v = i.util.objId(f), g[v] ? g[v] : (m = [], g[v] = m, /** @type {Array} */
                /** @type {any} */
                f.forEach(function(T, x) {
                  m[x] = d(T, g);
                }), /** @type {any} */
                m);
              default:
                return f;
            }
          },
          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function(d) {
            for (; d; ) {
              var f = a.exec(d.className);
              if (f)
                return f[1].toLowerCase();
              d = d.parentElement;
            }
            return "none";
          },
          /**
           * Sets the Prism `language-xxxx` class of the given element.
           *
           * @param {Element} element
           * @param {string} language
           * @returns {void}
           */
          setLanguage: function(d, f) {
            d.className = d.className.replace(RegExp(a, "gi"), ""), d.classList.add("language-" + f);
          },
          /**
           * Returns the script element that is currently executing.
           *
           * This does __not__ work for line script element.
           *
           * @returns {HTMLScriptElement | null}
           */
          currentScript: function() {
            if (typeof document > "u")
              return null;
            if (document.currentScript && document.currentScript.tagName === "SCRIPT")
              return (
                /** @type {any} */
                document.currentScript
              );
            try {
              throw new Error();
            } catch (m) {
              var d = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(m.stack) || [])[1];
              if (d) {
                var f = document.getElementsByTagName("script");
                for (var g in f)
                  if (f[g].src == d)
                    return f[g];
              }
              return null;
            }
          },
          /**
           * Returns whether a given class is active for `element`.
           *
           * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
           * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
           * given class is just the given class with a `no-` prefix.
           *
           * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
           * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
           * ancestors have the given class or the negated version of it, then the default activation will be returned.
           *
           * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
           * version of it, the class is considered active.
           *
           * @param {Element} element
           * @param {string} className
           * @param {boolean} [defaultActivation=false]
           * @returns {boolean}
           */
          isActive: function(d, f, g) {
            for (var m = "no-" + f; d; ) {
              var v = d.classList;
              if (v.contains(f))
                return !0;
              if (v.contains(m))
                return !1;
              d = d.parentElement;
            }
            return !!g;
          }
        },
        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
          /**
           * The grammar for plain, unformatted text.
           */
          plain: l,
          plaintext: l,
          text: l,
          txt: l,
          /**
           * Creates a deep copy of the language with the given id and appends the given tokens.
           *
           * If a token in `redef` also appears in the copied language, then the existing token in the copied language
           * will be overwritten at its original position.
           *
           * ## Best practices
           *
           * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
           * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
           * understand the language definition because, normally, the order of tokens matters in Prism grammars.
           *
           * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
           * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
           *
           * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
           * @param {Grammar} redef The new tokens to append.
           * @returns {Grammar} The new language created.
           * @public
           * @example
           * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
           *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
           *     // at its original position
           *     'comment': { ... },
           *     // CSS doesn't have a 'color' token, so this token will be appended
           *     'color': /\b(?:red|green|blue)\b/
           * });
           */
          extend: function(d, f) {
            var g = i.util.clone(i.languages[d]);
            for (var m in f)
              g[m] = f[m];
            return g;
          },
          /**
           * Inserts tokens _before_ another token in a language definition or any other grammar.
           *
           * ## Usage
           *
           * This helper method makes it easy to modify existing languages. For example, the CSS language definition
           * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
           * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
           * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
           * this:
           *
           * ```js
           * Prism.languages.markup.style = {
           *     // token
           * };
           * ```
           *
           * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
           * before existing tokens. For the CSS example above, you would use it like this:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'cdata', {
           *     'style': {
           *         // token
           *     }
           * });
           * ```
           *
           * ## Special cases
           *
           * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
           * will be ignored.
           *
           * This behavior can be used to insert tokens after `before`:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'comment', {
           *     'comment': Prism.languages.markup.comment,
           *     // tokens after 'comment'
           * });
           * ```
           *
           * ## Limitations
           *
           * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
           * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
           * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
           * deleting properties which is necessary to insert at arbitrary positions.
           *
           * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
           * Instead, it will create a new object and replace all references to the target object with the new one. This
           * can be done without temporarily deleting properties, so the iteration order is well-defined.
           *
           * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
           * you hold the target object in a variable, then the value of the variable will not change.
           *
           * ```js
           * var oldMarkup = Prism.languages.markup;
           * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
           *
           * assert(oldMarkup !== Prism.languages.markup);
           * assert(newMarkup === Prism.languages.markup);
           * ```
           *
           * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
           * object to be modified.
           * @param {string} before The key to insert before.
           * @param {Grammar} insert An object containing the key-value pairs to be inserted.
           * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
           * object to be modified.
           *
           * Defaults to `Prism.languages`.
           * @returns {Grammar} The new grammar object.
           * @public
           */
          insertBefore: function(d, f, g, m) {
            m = m || /** @type {any} */
            i.languages;
            var v = m[d], A = {};
            for (var T in v)
              if (v.hasOwnProperty(T)) {
                if (T == f)
                  for (var x in g)
                    g.hasOwnProperty(x) && (A[x] = g[x]);
                g.hasOwnProperty(T) || (A[T] = v[T]);
              }
            var P = m[d];
            return m[d] = A, i.languages.DFS(i.languages, function(N, L) {
              L === P && N != d && (this[N] = A);
            }), A;
          },
          // Traverse a language definition with Depth First Search
          DFS: function d(f, g, m, v) {
            v = v || {};
            var A = i.util.objId;
            for (var T in f)
              if (f.hasOwnProperty(T)) {
                g.call(f, T, f[T], m || T);
                var x = f[T], P = i.util.type(x);
                P === "Object" && !v[A(x)] ? (v[A(x)] = !0, d(x, g, null, v)) : P === "Array" && !v[A(x)] && (v[A(x)] = !0, d(x, g, T, v));
              }
          }
        },
        plugins: {},
        /**
         * This is the most high-level function in Prism’s API.
         * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
         * each one of them.
         *
         * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
         *
         * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
         * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
         * @memberof Prism
         * @public
         */
        highlightAll: function(d, f) {
          i.highlightAllUnder(document, d, f);
        },
        /**
         * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
         * {@link Prism.highlightElement} on each one of them.
         *
         * The following hooks will be run:
         * 1. `before-highlightall`
         * 2. `before-all-elements-highlight`
         * 3. All hooks of {@link Prism.highlightElement} for each element.
         *
         * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
         * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
         * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
         * @memberof Prism
         * @public
         */
        highlightAllUnder: function(d, f, g) {
          var m = {
            callback: g,
            container: d,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          i.hooks.run("before-highlightall", m), m.elements = Array.prototype.slice.apply(m.container.querySelectorAll(m.selector)), i.hooks.run("before-all-elements-highlight", m);
          for (var v = 0, A; A = m.elements[v++]; )
            i.highlightElement(A, f === !0, m.callback);
        },
        /**
         * Highlights the code inside a single element.
         *
         * The following hooks will be run:
         * 1. `before-sanity-check`
         * 2. `before-highlight`
         * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
         * 4. `before-insert`
         * 5. `after-highlight`
         * 6. `complete`
         *
         * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
         * the element's language.
         *
         * @param {Element} element The element containing the code.
         * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
         * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
         * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
         * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
         *
         * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
         * asynchronous highlighting to work. You can build your own bundle on the
         * [Download page](https://prismjs.com/download.html).
         * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
         * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
         * @memberof Prism
         * @public
         */
        highlightElement: function(d, f, g) {
          var m = i.util.getLanguage(d), v = i.languages[m];
          i.util.setLanguage(d, m);
          var A = d.parentElement;
          A && A.nodeName.toLowerCase() === "pre" && i.util.setLanguage(A, m);
          var T = d.textContent, x = {
            element: d,
            language: m,
            grammar: v,
            code: T
          };
          function P(L) {
            x.highlightedCode = L, i.hooks.run("before-insert", x), x.element.innerHTML = x.highlightedCode, i.hooks.run("after-highlight", x), i.hooks.run("complete", x), g && g.call(x.element);
          }
          if (i.hooks.run("before-sanity-check", x), A = x.element.parentElement, A && A.nodeName.toLowerCase() === "pre" && !A.hasAttribute("tabindex") && A.setAttribute("tabindex", "0"), !x.code) {
            i.hooks.run("complete", x), g && g.call(x.element);
            return;
          }
          if (i.hooks.run("before-highlight", x), !x.grammar) {
            P(i.util.encode(x.code));
            return;
          }
          if (f && r.Worker) {
            var N = new Worker(i.filename);
            N.onmessage = function(L) {
              P(L.data);
            }, N.postMessage(JSON.stringify({
              language: x.language,
              code: x.code,
              immediateClose: !0
            }));
          } else
            P(i.highlight(x.code, x.grammar, x.language));
        },
        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function(d, f, g) {
          var m = {
            code: d,
            grammar: f,
            language: g
          };
          if (i.hooks.run("before-tokenize", m), !m.grammar)
            throw new Error('The language "' + m.language + '" has no grammar.');
          return m.tokens = i.tokenize(m.code, m.grammar), i.hooks.run("after-tokenize", m), s.stringify(i.util.encode(m.tokens), m.language);
        },
        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function(d, f) {
          var g = f.rest;
          if (g) {
            for (var m in g)
              f[m] = g[m];
            delete f.rest;
          }
          var v = new p();
          return y(v, v.head, d), c(d, v, f, v.head, 0), b(v);
        },
        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
          all: {},
          /**
           * Adds the given callback to the list of callbacks for the given hook.
           *
           * The callback will be invoked when the hook it is registered for is run.
           * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
           *
           * One callback function can be registered to multiple hooks and the same hook multiple times.
           *
           * @param {string} name The name of the hook.
           * @param {HookCallback} callback The callback function which is given environment variables.
           * @public
           */
          add: function(d, f) {
            var g = i.hooks.all;
            g[d] = g[d] || [], g[d].push(f);
          },
          /**
           * Runs a hook invoking all registered callbacks with the given environment variables.
           *
           * Callbacks will be invoked synchronously and in the order in which they were registered.
           *
           * @param {string} name The name of the hook.
           * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
           * @public
           */
          run: function(d, f) {
            var g = i.hooks.all[d];
            if (!(!g || !g.length))
              for (var m = 0, v; v = g[m++]; )
                v(f);
          }
        },
        Token: s
      };
      r.Prism = i;
      function s(d, f, g, m) {
        this.type = d, this.content = f, this.alias = g, this.length = (m || "").length | 0;
      }
      s.stringify = function d(f, g) {
        if (typeof f == "string")
          return f;
        if (Array.isArray(f)) {
          var m = "";
          return f.forEach(function(P) {
            m += d(P, g);
          }), m;
        }
        var v = {
          type: f.type,
          content: d(f.content, g),
          tag: "span",
          classes: ["token", f.type],
          attributes: {},
          language: g
        }, A = f.alias;
        A && (Array.isArray(A) ? Array.prototype.push.apply(v.classes, A) : v.classes.push(A)), i.hooks.run("wrap", v);
        var T = "";
        for (var x in v.attributes)
          T += " " + x + '="' + (v.attributes[x] || "").replace(/"/g, "&quot;") + '"';
        return "<" + v.tag + ' class="' + v.classes.join(" ") + '"' + T + ">" + v.content + "</" + v.tag + ">";
      };
      function u(d, f, g, m) {
        d.lastIndex = f;
        var v = d.exec(g);
        if (v && m && v[1]) {
          var A = v[1].length;
          v.index += A, v[0] = v[0].slice(A);
        }
        return v;
      }
      function c(d, f, g, m, v, A) {
        for (var T in g)
          if (!(!g.hasOwnProperty(T) || !g[T])) {
            var x = g[T];
            x = Array.isArray(x) ? x : [x];
            for (var P = 0; P < x.length; ++P) {
              if (A && A.cause == T + "," + P)
                return;
              var N = x[P], L = N.inside, U = !!N.lookbehind, te = !!N.greedy, he = N.alias;
              if (te && !N.pattern.global) {
                var X = N.pattern.toString().match(/[imsuy]*$/)[0];
                N.pattern = RegExp(N.pattern.source, X + "g");
              }
              for (var oe = N.pattern || N, V = m.next, ue = v; V !== f.tail && !(A && ue >= A.reach); ue += V.value.length, V = V.next) {
                var Pe = V.value;
                if (f.length > d.length)
                  return;
                if (!(Pe instanceof s)) {
                  var Me = 1, ie;
                  if (te) {
                    if (ie = u(oe, ue, d, U), !ie || ie.index >= d.length)
                      break;
                    var wt = ie.index, Qr = ie.index + ie[0].length, _e = ue;
                    for (_e += V.value.length; wt >= _e; )
                      V = V.next, _e += V.value.length;
                    if (_e -= V.value.length, ue = _e, V.value instanceof s)
                      continue;
                    for (var Je = V; Je !== f.tail && (_e < Qr || typeof Je.value == "string"); Je = Je.next)
                      Me++, _e += Je.value.length;
                    Me--, Pe = d.slice(ue, _e), ie.index -= ue;
                  } else if (ie = u(oe, 0, Pe, U), !ie)
                    continue;
                  var wt = ie.index, Et = ie[0], zt = Pe.slice(0, wt), Mn = Pe.slice(wt + Et.length), Wt = ue + Pe.length;
                  A && Wt > A.reach && (A.reach = Wt);
                  var Dt = V.prev;
                  zt && (Dt = y(f, Dt, zt), ue += zt.length), h(f, Dt, Me);
                  var ea = new s(T, L ? i.tokenize(Et, L) : Et, he, Et);
                  if (V = y(f, Dt, ea), Mn && y(f, V, Mn), Me > 1) {
                    var Yt = {
                      cause: T + "," + P,
                      reach: Wt
                    };
                    c(d, f, g, V.prev, ue, Yt), A && Yt.reach > A.reach && (A.reach = Yt.reach);
                  }
                }
              }
            }
          }
      }
      function p() {
        var d = { value: null, prev: null, next: null }, f = { value: null, prev: d, next: null };
        d.next = f, this.head = d, this.tail = f, this.length = 0;
      }
      function y(d, f, g) {
        var m = f.next, v = { value: g, prev: f, next: m };
        return f.next = v, m.prev = v, d.length++, v;
      }
      function h(d, f, g) {
        for (var m = f.next, v = 0; v < g && m !== d.tail; v++)
          m = m.next;
        f.next = m, m.prev = f, d.length -= v;
      }
      function b(d) {
        for (var f = [], g = d.head.next; g !== d.tail; )
          f.push(g.value), g = g.next;
        return f;
      }
      if (!r.document)
        return r.addEventListener && (i.disableWorkerMessageHandler || r.addEventListener("message", function(d) {
          var f = JSON.parse(d.data), g = f.language, m = f.code, v = f.immediateClose;
          r.postMessage(i.highlight(m, i.languages[g], g)), v && r.close();
        }, !1)), i;
      var w = i.util.currentScript();
      w && (i.filename = w.src, w.hasAttribute("data-manual") && (i.manual = !0));
      function D() {
        i.manual || i.highlightAll();
      }
      if (!i.manual) {
        var O = document.readyState;
        O === "loading" || O === "interactive" && w && w.defer ? document.addEventListener("DOMContentLoaded", D) : window.requestAnimationFrame ? window.requestAnimationFrame(D) : window.setTimeout(D, 16);
      }
      return i;
    })(t);
    e.exports && (e.exports = n), typeof Nn < "u" && (Nn.Prism = n), n.languages.markup = {
      comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: !0
      },
      prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: !0
      },
      doctype: {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: !0,
            greedy: !0,
            inside: null
            // see below
          },
          string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: !0
          },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/
        }
      },
      cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: !0
      },
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                {
                  pattern: /^(\s*)["']|["']$/,
                  lookbehind: !0
                }
              ]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: [
        {
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity"
        },
        /&#x?[\da-f]{1,8};/i
      ]
    }, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, n.languages.markup.doctype.inside["internal-subset"].inside = n.languages.markup, n.hooks.add("wrap", function(r) {
      r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
    }), Object.defineProperty(n.languages.markup.tag, "addInlined", {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function(a, o) {
        var l = {};
        l["language-" + o] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: n.languages[o]
        }, l.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var i = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: l
          }
        };
        i["language-" + o] = {
          pattern: /[\s\S]+/,
          inside: n.languages[o]
        };
        var s = {};
        s[a] = {
          pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
            return a;
          }), "i"),
          lookbehind: !0,
          greedy: !0,
          inside: i
        }, n.languages.insertBefore("markup", "cdata", s);
      }
    }), Object.defineProperty(n.languages.markup.tag, "addAttribute", {
      /**
       * Adds an pattern to highlight languages embedded in HTML attributes.
       *
       * An example of an inlined language is CSS with `style` attributes.
       *
       * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addAttribute('style', 'css');
       */
      value: function(r, a) {
        n.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + r + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i"
          ),
          lookbehind: !0,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [a, "language-" + a],
                  inside: n.languages[a]
                },
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            }
          }
        });
      }
    }), n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.xml = n.languages.extend("markup", {}), n.languages.ssml = n.languages.xml, n.languages.atom = n.languages.xml, n.languages.rss = n.languages.xml, (function(r) {
      var a = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      r.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + a.source + ")*?" + /(?:;|(?=\s*\{))/.source),
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: !0,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: !0
            }
            // See rest below
          }
        },
        url: {
          // https://drafts.csswg.org/css-values-3/#urls
          pattern: RegExp("\\burl\\((?:" + a.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
          greedy: !0,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + a.source + "$"),
              alias: "url"
            }
          }
        },
        selector: {
          pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + a.source + ")*(?=\\s*\\{)"),
          lookbehind: !0
        },
        string: {
          pattern: a,
          greedy: !0
        },
        property: {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: !0
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: !0
        },
        punctuation: /[(){};:,]/
      }, r.languages.css.atrule.inside.rest = r.languages.css;
      var o = r.languages.markup;
      o && (o.tag.addInlined("style", "css"), o.tag.addAttribute("style", "css"));
    })(n), n.languages.clike = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: !0,
          greedy: !0
        }
      ],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    }, n.languages.javascript = n.languages.extend("clike", {
      "class-name": [
        n.languages.clike["class-name"],
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: !0
        }
      ],
      keyword: [
        {
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: !0
        },
        {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: !0
        }
      ],
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(
          /(^|[^\w$])/.source + "(?:" + // constant
          (/NaN|Infinity/.source + "|" + // binary integer
          /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
          /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
        ),
        lookbehind: !0
      },
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), n.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, n.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: RegExp(
          // lookbehind
          // eslint-disable-next-line regexp/no-dupe-characters-character-class
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
          // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
          // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
          // with the only syntax, so we have to define 2 different regex patterns.
          /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
          /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
          /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: n.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      parameter: [
        {
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: n.languages.javascript
        },
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: n.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: n.languages.javascript
        },
        {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: n.languages.javascript
        }
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), n.languages.insertBefore("javascript", "string", {
      hashbang: {
        pattern: /^#!.*/,
        greedy: !0,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: n.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
      }
    }), n.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property"
      }
    }), n.languages.markup && (n.languages.markup.tag.addInlined("script", "javascript"), n.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
      "javascript"
    )), n.languages.js = n.languages.javascript, (function() {
      if (typeof n > "u" || typeof document > "u")
        return;
      Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
      var r = "Loading…", a = function(w, D) {
        return "✖ Error " + w + " while fetching file: " + D;
      }, o = "✖ Error: File does not exist or is empty", l = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex"
      }, i = "data-src-status", s = "loading", u = "loaded", c = "failed", p = "pre[data-src]:not([" + i + '="' + u + '"]):not([' + i + '="' + s + '"])';
      function y(w, D, O) {
        var d = new XMLHttpRequest();
        d.open("GET", w, !0), d.onreadystatechange = function() {
          d.readyState == 4 && (d.status < 400 && d.responseText ? D(d.responseText) : d.status >= 400 ? O(a(d.status, d.statusText)) : O(o));
        }, d.send(null);
      }
      function h(w) {
        var D = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w || "");
        if (D) {
          var O = Number(D[1]), d = D[2], f = D[3];
          return d ? f ? [O, Number(f)] : [O, void 0] : [O, O];
        }
      }
      n.hooks.add("before-highlightall", function(w) {
        w.selector += ", " + p;
      }), n.hooks.add("before-sanity-check", function(w) {
        var D = (
          /** @type {HTMLPreElement} */
          w.element
        );
        if (D.matches(p)) {
          w.code = "", D.setAttribute(i, s);
          var O = D.appendChild(document.createElement("CODE"));
          O.textContent = r;
          var d = D.getAttribute("data-src"), f = w.language;
          if (f === "none") {
            var g = (/\.(\w+)$/.exec(d) || [, "none"])[1];
            f = l[g] || g;
          }
          n.util.setLanguage(O, f), n.util.setLanguage(D, f);
          var m = n.plugins.autoloader;
          m && m.loadLanguages(f), y(
            d,
            function(v) {
              D.setAttribute(i, u);
              var A = h(D.getAttribute("data-range"));
              if (A) {
                var T = v.split(/\r\n?|\n/g), x = A[0], P = A[1] == null ? T.length : A[1];
                x < 0 && (x += T.length), x = Math.max(0, Math.min(x - 1, T.length)), P < 0 && (P += T.length), P = Math.max(0, Math.min(P, T.length)), v = T.slice(x, P).join(`
`), D.hasAttribute("data-start") || D.setAttribute("data-start", String(x + 1));
              }
              O.textContent = v, n.highlightElement(O);
            },
            function(v) {
              D.setAttribute(i, c), O.textContent = v;
            }
          );
        }
      }), n.plugins.fileHighlight = {
        /**
         * Executes the File Highlight plugin for all matching `pre` elements under the given container.
         *
         * Note: Elements which are already loaded or currently loading will not be touched by this method.
         *
         * @param {ParentNode} [container=document]
         */
        highlight: function(D) {
          for (var O = (D || document).querySelectorAll(p), d = 0, f; f = O[d++]; )
            n.highlightElement(f);
        }
      };
      var b = !1;
      n.fileHighlight = function() {
        b || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), b = !0), n.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    })();
  })(Ut)), Ut.exports;
}
var _a = Aa();
const Xt = /* @__PURE__ */ xa(_a), Ta = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "22",
  height: "22",
  fill: "none"
};
function Oa(e, t) {
  return _(), I("svg", Ta, [...t[0] || (t[0] = [
    E("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.188 11.5a.687.687 0 1 1-1.375 0 .687.687 0 0 1 1.375 0m5.5 0a.687.687 0 1 1-1.375 0 .687.687 0 0 1 1.374 0m5.5 0a.687.687 0 1 1-1.375 0 .687.687 0 0 1 1.374 0"
    }, null, -1)
  ])]);
}
const mr = { render: Oa }, Ia = (e, t) => {
  const n = new Blob([t], { type: "text/plain" }), r = window.URL.createObjectURL(n), a = document.createElement("a");
  a.href = r, a.download = e, document.body.appendChild(a), a.click(), document.body.removeChild(a), window.URL.revokeObjectURL(r);
}, Is = (e) => e.split(".").slice(0, -1).join(".");
function yr(e, t) {
  return na() ? (ra(e, t), !0) : !1;
}
const br = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ca = Object.prototype.toString, ka = (e) => Ca.call(e) === "[object Object]";
function Gt(e) {
  return Array.isArray(e) ? e : [e];
}
function Fa(e) {
  return oa();
}
function $a(e, t = !0, n) {
  Fa() ? ta(e, n) : t ? e() : Dn(e);
}
function Pa(e, t, n) {
  return aa(e, t, {
    ...n,
    immediate: !0
  });
}
const Ma = br ? window : void 0, ja = br ? window.document : void 0;
function An(e) {
  var t;
  const n = Ge(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Na(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, r = (i, s, u, c) => (i.addEventListener(s, u, c), () => i.removeEventListener(s, u, c)), a = me(() => {
    const i = Gt(Ge(e[0])).filter((s) => s != null);
    return i.every((s) => typeof s != "string") ? i : void 0;
  }), o = Pa(() => {
    var i, s;
    return [
      (i = (s = a.value) === null || s === void 0 ? void 0 : s.map((u) => An(u))) !== null && i !== void 0 ? i : [Ma].filter((u) => u != null),
      Gt(Ge(a.value ? e[1] : e[0])),
      Gt(F(a.value ? e[2] : e[1])),
      Ge(a.value ? e[3] : e[2])
    ];
  }, ([i, s, u, c]) => {
    if (n(), !i?.length || !s?.length || !u?.length) return;
    const p = ka(c) ? { ...c } : c;
    t.push(...i.flatMap((y) => s.flatMap((h) => u.map((b) => r(y, h, b, p)))));
  }, { flush: "post" }), l = () => {
    o(), n();
  };
  return yr(n), l;
}
const cn = /* @__PURE__ */ Y({
  __name: "ModalDialog",
  setup(e, { expose: t }) {
    const n = ge("dialog"), r = ge("content"), a = () => n.value?.showModal(), o = () => n.value?.close(), l = () => new Promise((s) => {
      a(), Na(n, "close", () => s(n.value?.returnValue), { once: !0 });
    }), i = (s) => {
      r.value?.contains(s.target) || o();
    };
    return t({ open: a, close: o, prompt: l }), (s, u) => (_(), I("dialog", {
      ref_key: "dialog",
      ref: n,
      onMousedown: i
    }, [
      E("div", {
        ref_key: "content",
        ref: r
      }, [
        Ve(s.$slots, "default", {
          open: a,
          close: o
        })
      ], 512)
    ], 544));
  }
}), La = { class: "code-viewer" }, Ra = { class: "menu" }, Ha = { class: "code language-cpp" }, Va = ["innerHTML"], Ba = /* @__PURE__ */ Y({
  __name: "CodeViewer",
  props: {
    code: {},
    language: {},
    fileName: {}
  },
  setup(e) {
    Xt.manual = !0;
    const t = e, n = vr(), r = me(
      () => Xt.highlight(t.code, Xt.languages[t.language], t.language)
    ), a = ge("settings"), o = async () => await navigator.clipboard.writeText(t.code);
    return (l, i) => (_(), I("div", La, [
      E("div", Ra, [
        E("button", {
          style: { "margin-left": "auto" },
          onClick: o
        }, "Copy"),
        E("button", {
          onClick: i[0] || (i[0] = (s) => F(Ia)(e.fileName, e.code))
        }, "Download"),
        F(n).settings ? (_(), I("button", {
          key: 0,
          onClick: i[1] || (i[1] = (s) => a.value?.open()),
          class: "settings-trigger",
          "data-theme": "dark"
        }, [
          Z(F(mr))
        ])) : Fe("", !0)
      ]),
      E("pre", Ha, [
        E("code", { innerHTML: r.value }, null, 8, Va)
      ]),
      F(n).settings ? (_(), ce(cn, {
        key: 0,
        ref: "settings",
        class: "settings"
      }, {
        default: ye(() => [
          Ve(l.$slots, "settings", {}, void 0, !0)
        ]),
        _: 3
      }, 512)) : Fe("", !0)
    ]));
  }
}), Cs = /* @__PURE__ */ ae(Ba, [["__scopeId", "data-v-748127da"]]), za = { class: "field swatch-field" }, Wa = ["for"], Ya = { class: "label" }, Ua = { class: "swatches" }, Xa = ["onClick", "title"], Ga = /* @__PURE__ */ Y({
  __name: "ColorField",
  props: /* @__PURE__ */ J({
    swatches: {},
    label: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = Q(e, "modelValue"), r = ve(), a = me(() => t.swatches.find((o) => o.value === n.value));
    return (o, l) => (_(), I("div", za, [
      E("label", { for: F(r) }, G(e.label), 9, Wa),
      Z(F(fa), null, {
        default: ye(() => [
          Z(F(pa), {
            class: "preview",
            id: F(r)
          }, {
            default: ye(() => [
              E("div", {
                class: "swatch",
                style: jn({ backgroundColor: a.value?.color })
              }, null, 4),
              E("div", Ya, G(a.value?.label), 1)
            ]),
            _: 1
          }, 8, ["id"]),
          Z(F(ga), {
            align: "end",
            "side-offset": 5
          }, {
            default: ye(() => [
              E("div", Ua, [
                (_(!0), I(be, null, Be(e.swatches, (i) => (_(), I("button", {
                  onClick: (s) => n.value = i.value,
                  class: "swatch",
                  title: i.label,
                  style: jn({ backgroundColor: i.color })
                }, null, 12, Xa))), 256))
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}), ks = /* @__PURE__ */ ae(Ga, [["__scopeId", "data-v-002faf03"]]);
function vt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function() {
    t.forEach(function(a) {
      return a();
    });
  };
}
function fn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function qa(e) {
  if (Array.isArray(e)) return fn(e);
}
function Ka(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function wr(e, t) {
  if (e) {
    if (typeof e == "string") return fn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fn(e, t) : void 0;
  }
}
function Za() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vt(e) {
  return qa(e) || Ka(e) || wr(e) || Za();
}
var qt = {}, Qe = {}, Rn;
function Er() {
  if (Rn) return Qe;
  Rn = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.bind = void 0;
  function e(t, n) {
    var r = n.type, a = n.listener, o = n.options;
    return t.addEventListener(r, a, o), function() {
      t.removeEventListener(r, a, o);
    };
  }
  return Qe.bind = e, Qe;
}
var je = {}, Hn;
function Ja() {
  if (Hn) return je;
  Hn = 1;
  var e = je && je.__assign || function() {
    return e = Object.assign || function(o) {
      for (var l, i = 1, s = arguments.length; i < s; i++) {
        l = arguments[i];
        for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (o[u] = l[u]);
      }
      return o;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(je, "__esModule", { value: !0 }), je.bindAll = void 0;
  var t = /* @__PURE__ */ Er();
  function n(o) {
    if (!(typeof o > "u"))
      return typeof o == "boolean" ? {
        capture: o
      } : o;
  }
  function r(o, l) {
    if (l == null)
      return o;
    var i = e(e({}, o), { options: e(e({}, n(l)), n(o.options)) });
    return i;
  }
  function a(o, l, i) {
    var s = l.map(function(u) {
      var c = r(u, i);
      return (0, t.bind)(o, c);
    });
    return function() {
      s.forEach(function(c) {
        return c();
      });
    };
  }
  return je.bindAll = a, je;
}
var Vn;
function Qa() {
  return Vn || (Vn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = e.bind = void 0;
    var t = /* @__PURE__ */ Er();
    Object.defineProperty(e, "bind", { enumerable: !0, get: function() {
      return t.bind;
    } });
    var n = /* @__PURE__ */ Ja();
    Object.defineProperty(e, "bindAll", { enumerable: !0, get: function() {
      return n.bindAll;
    } });
  })(qt)), qt;
}
var Ee = /* @__PURE__ */ Qa();
function eo(e) {
  if (Array.isArray(e)) return e;
}
function to(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, o, l, i = [], s = !0, u = !1;
    try {
      if (o = (n = n.call(e)).next, t !== 0) for (; !(s = (r = o.call(n)).done) && (i.push(r.value), i.length !== t); s = !0) ;
    } catch (c) {
      u = !0, a = c;
    } finally {
      try {
        if (!s && n.return != null && (l = n.return(), Object(l) !== l)) return;
      } finally {
        if (u) throw a;
      }
    }
    return i;
  }
}
function no() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dr(e, t) {
  return eo(e) || to(e, t) || wr(e, t) || no();
}
var Sr = "data-pdnd-honey-pot";
function xr(e) {
  return e instanceof Element && e.hasAttribute(Sr);
}
function Ar(e) {
  var t = document.elementsFromPoint(e.x, e.y), n = Dr(t, 2), r = n[0], a = n[1];
  return r ? xr(r) ? a ?? null : r : null;
}
function Ze(e) {
  var t = null;
  return function() {
    if (!t) {
      for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
        a[o] = arguments[o];
      var l = e.apply(this, a);
      t = {
        result: l
      };
    }
    return t.result;
  };
}
var _r = Ze(function() {
  return process.env.NODE_ENV === "test" ? !1 : navigator.userAgent.includes("Firefox");
}), ht = Ze(function() {
  if (process.env.NODE_ENV === "test")
    return !1;
  var t = navigator, n = t.userAgent;
  return n.includes("AppleWebKit") && !n.includes("Chrome");
}), Mt = {
  isLeavingWindow: Symbol("leaving"),
  isEnteringWindow: Symbol("entering")
};
function ro(e) {
  var t = e.dragEnter;
  return ht() ? t.hasOwnProperty(Mt.isEnteringWindow) : !1;
}
function ao(e) {
  var t = e.dragLeave;
  return ht() ? t.hasOwnProperty(Mt.isLeavingWindow) : !1;
}
(function() {
  if (typeof window > "u" || process.env.NODE_ENV === "test" || !ht())
    return;
  function t() {
    return {
      enterCount: 0,
      isOverWindow: !1
    };
  }
  var n = t();
  function r() {
    n = t();
  }
  Ee.bindAll(
    window,
    [{
      type: "dragstart",
      listener: function() {
        n.enterCount = 0, n.isOverWindow = !0;
      }
    }, {
      type: "drop",
      listener: r
    }, {
      type: "dragend",
      listener: r
    }, {
      type: "dragenter",
      listener: function(o) {
        !n.isOverWindow && n.enterCount === 0 && (o[Mt.isEnteringWindow] = !0), n.isOverWindow = !0, n.enterCount++;
      }
    }, {
      type: "dragleave",
      listener: function(o) {
        n.enterCount--, n.isOverWindow && n.enterCount === 0 && (o[Mt.isLeavingWindow] = !0, n.isOverWindow = !1);
      }
    }],
    // using `capture: true` so that adding event listeners
    // in bubble phase will have the correct symbols
    {
      capture: !0
    }
  );
})();
function oo(e) {
  return "nodeName" in e;
}
function Tr(e) {
  return oo(e) && e.ownerDocument !== document;
}
function io(e) {
  var t = e.dragLeave, n = t.type, r = t.relatedTarget;
  return n !== "dragleave" ? !1 : ht() ? ao({
    dragLeave: t
  }) : r == null ? !0 : _r() ? Tr(r) : r instanceof HTMLIFrameElement;
}
function _n(e) {
  var t = e.onDragEnd;
  return [
    // ## Detecting drag ending for removed draggables
    //
    // If a draggable element is removed during a drag and the user drops:
    // 1. if over a valid drop target: we get a "drop" event to know the drag is finished
    // 2. if not over a valid drop target (or cancelled): we get nothing
    // The "dragend" event will not fire on the source draggable if it has been
    // removed from the DOM.
    // So we need to figure out if a drag operation has finished by looking at other events
    // We can do this by looking at other events
    // ### First detection: "pointermove" events
    // 1. "pointermove" events cannot fire during a drag and drop operation
    // according to the spec. So if we get a "pointermove" it means that
    // the drag and drop operations has finished. So if we get a "pointermove"
    // we know that the drag is over
    // 2. 🦊😤 Drag and drop operations are _supposed_ to suppress
    // other pointer events. However, firefox will allow a few
    // pointer event to get through after a drag starts.
    // The most I've seen is 3
    {
      type: "pointermove",
      listener: /* @__PURE__ */ (function() {
        var n = 0;
        return function() {
          if (n < 20) {
            n++;
            return;
          }
          t();
        };
      })()
    },
    // ### Second detection: "pointerdown" events
    // If we receive this event then we know that a drag operation has finished
    // and potentially another one is about to start.
    // Note: `pointerdown` fires on all browsers / platforms before "dragstart"
    {
      type: "pointerdown",
      listener: t
    }
  ];
}
function at(e) {
  return {
    altKey: e.altKey,
    button: e.button,
    buttons: e.buttons,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    shiftKey: e.shiftKey,
    clientX: e.clientX,
    clientY: e.clientY,
    pageX: e.pageX,
    pageY: e.pageY
  };
}
var lo = function(t) {
  var n = [], r = null, a = function() {
    for (var l = arguments.length, i = new Array(l), s = 0; s < l; s++)
      i[s] = arguments[s];
    n = i, !r && (r = requestAnimationFrame(function() {
      r = null, t.apply(void 0, n);
    }));
  };
  return a.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, a;
}, Kt = lo(function(e) {
  return e();
}), St = /* @__PURE__ */ (function() {
  var e = null;
  function t(r) {
    var a = requestAnimationFrame(function() {
      e = null, r();
    });
    e = {
      frameId: a,
      fn: r
    };
  }
  function n() {
    e && (cancelAnimationFrame(e.frameId), e.fn(), e = null);
  }
  return {
    schedule: t,
    flush: n
  };
})();
function so(e) {
  var t = e.source, n = e.initial, r = e.dispatchEvent, a = {
    dropTargets: []
  };
  function o(i) {
    r(i), a = {
      dropTargets: i.payload.location.current.dropTargets
    };
  }
  var l = {
    start: function(s) {
      var u = s.nativeSetDragImage, c = {
        current: n,
        previous: a,
        initial: n
      };
      o({
        eventName: "onGenerateDragPreview",
        payload: {
          source: t,
          location: c,
          nativeSetDragImage: u
        }
      }), St.schedule(function() {
        o({
          eventName: "onDragStart",
          payload: {
            source: t,
            location: c
          }
        });
      });
    },
    dragUpdate: function(s) {
      var u = s.current;
      St.flush(), Kt.cancel(), o({
        eventName: "onDropTargetChange",
        payload: {
          source: t,
          location: {
            initial: n,
            previous: a,
            current: u
          }
        }
      });
    },
    drag: function(s) {
      var u = s.current;
      Kt(function() {
        St.flush();
        var c = {
          initial: n,
          previous: a,
          current: u
        };
        o({
          eventName: "onDrag",
          payload: {
            source: t,
            location: c
          }
        });
      });
    },
    drop: function(s) {
      var u = s.current, c = s.updatedSourcePayload;
      St.flush(), Kt.cancel(), o({
        eventName: "onDrop",
        payload: {
          source: c ?? t,
          location: {
            current: u,
            previous: a,
            initial: n
          }
        }
      });
    }
  };
  return l;
}
var pn = {
  isActive: !1
};
function Or() {
  return !pn.isActive;
}
function uo(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function co(e) {
  var t = e.current, n = e.next;
  if (t.length !== n.length)
    return !0;
  for (var r = 0; r < t.length; r++)
    if (t[r].element !== n[r].element)
      return !0;
  return !1;
}
function fo(e) {
  var t = e.event, n = e.dragType, r = e.getDropTargetsOver, a = e.dispatchEvent;
  if (!Or())
    return;
  var o = po({
    event: t,
    dragType: n,
    getDropTargetsOver: r
  });
  pn.isActive = !0;
  var l = {
    current: o
  };
  Zt({
    event: t,
    current: o.dropTargets
  });
  var i = so({
    source: n.payload,
    dispatchEvent: a,
    initial: o
  });
  function s(h) {
    var b = co({
      current: l.current.dropTargets,
      next: h.dropTargets
    });
    l.current = h, b && i.dragUpdate({
      current: l.current
    });
  }
  function u(h) {
    var b = at(h), w = xr(h.target) ? Ar({
      x: b.clientX,
      y: b.clientY
    }) : h.target, D = r({
      target: w,
      input: b,
      source: n.payload,
      current: l.current.dropTargets
    });
    D.length && (h.preventDefault(), Zt({
      event: h,
      current: D
    })), s({
      dropTargets: D,
      input: b
    });
  }
  function c() {
    l.current.dropTargets.length && s({
      dropTargets: [],
      input: l.current.input
    }), i.drop({
      current: l.current,
      updatedSourcePayload: null
    }), p();
  }
  function p() {
    pn.isActive = !1, y();
  }
  var y = Ee.bindAll(
    window,
    [{
      // 👋 Note: we are repurposing the `dragover` event as our `drag` event
      // this is because firefox does not publish pointer coordinates during
      // a `drag` event, but does for every other type of drag event
      // `dragover` fires on all elements that are being dragged over
      // Because we are binding to `window` - our `dragover` is effectively the same as a `drag`
      // 🦊😤
      type: "dragover",
      listener: function(b) {
        u(b), i.drag({
          current: l.current
        });
      }
    }, {
      type: "dragenter",
      listener: u
    }, {
      type: "dragleave",
      listener: function(b) {
        io({
          dragLeave: b
        }) && (s({
          input: l.current.input,
          dropTargets: []
        }), n.startedFrom === "external" && c());
      }
    }, {
      // A "drop" can only happen if the browser allowed the drop
      type: "drop",
      listener: function(b) {
        if (l.current = {
          dropTargets: l.current.dropTargets,
          input: at(b)
        }, !l.current.dropTargets.length) {
          c();
          return;
        }
        b.preventDefault(), Zt({
          event: b,
          current: l.current.dropTargets
        }), i.drop({
          current: l.current,
          // When dropping something native, we need to extract the latest
          // `.items` from the "drop" event as it is now accessible
          updatedSourcePayload: n.type === "external" ? n.getDropPayload(b) : null
        }), p();
      }
    }, {
      // "dragend" fires when on the drag source (eg a draggable element)
      // when the drag is finished.
      // "dragend" will fire after "drop" (if there was a successful drop)
      // "dragend" does not fire if the draggable source has been removed during the drag
      // or for external drag sources (eg files)
      // This "dragend" listener will not fire if there was a successful drop
      // as we will have already removed the event listener
      type: "dragend",
      listener: function(b) {
        l.current = {
          dropTargets: l.current.dropTargets,
          input: at(b)
        }, c();
      }
    }].concat(Vt(_n({
      onDragEnd: c
    }))),
    // Once we have started a managed drag operation it is important that we see / own all drag events
    // We got one adoption bug pop up where some code was stopping (`event.stopPropagation()`)
    // all "drop" events in the bubble phase on the `document.body`.
    // This meant that we never saw the "drop" event.
    {
      capture: !0
    }
  );
  i.start({
    nativeSetDragImage: uo(t)
  });
}
function Zt(e) {
  var t, n = e.event, r = e.current, a = (t = r[0]) === null || t === void 0 ? void 0 : t.dropEffect;
  a != null && n.dataTransfer && (n.dataTransfer.dropEffect = a);
}
function po(e) {
  var t = e.event, n = e.dragType, r = e.getDropTargetsOver, a = at(t);
  if (n.startedFrom === "external")
    return {
      input: a,
      dropTargets: []
    };
  var o = r({
    input: a,
    source: n.payload,
    target: t.target,
    current: []
  });
  return {
    input: a,
    dropTargets: o
  };
}
var Bn = {
  canStart: Or,
  start: fo
}, gn = /* @__PURE__ */ new Map();
function go(e) {
  var t = e.typeKey, n = e.mount, r = gn.get(t);
  if (r)
    return r.usageCount++, r;
  var a = {
    typeKey: t,
    unmount: n(),
    usageCount: 1
  };
  return gn.set(t, a), a;
}
function vo(e) {
  var t = go(e);
  return function() {
    t.usageCount--, !(t.usageCount > 0) && (t.unmount(), gn.delete(e.typeKey));
  };
}
function ft(e) {
  "@babel/helpers - typeof";
  return ft = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ft(e);
}
function ho(e, t) {
  if (ft(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ft(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mo(e) {
  var t = ho(e, "string");
  return ft(t) == "symbol" ? t : t + "";
}
function mt(e, t, n) {
  return (t = mo(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ir(e, t) {
  var n = t.attribute, r = t.value;
  return e.setAttribute(n, r), function() {
    return e.removeAttribute(n);
  };
}
function zn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zn(Object(n), !0).forEach(function(r) {
      mt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Jt(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = yo(e)) || t) {
      n && (e = n);
      var r = 0, a = function() {
      };
      return { s: a, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(u) {
        throw u;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, l = !0, i = !1;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var u = n.next();
    return l = u.done, u;
  }, e: function(u) {
    i = !0, o = u;
  }, f: function() {
    try {
      l || n.return == null || n.return();
    } finally {
      if (i) throw o;
    }
  } };
}
function yo(e, t) {
  if (e) {
    if (typeof e == "string") return Wn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Wn(e, t) : void 0;
  }
}
function Wn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Qt(e) {
  return e.slice(0).reverse();
}
function bo(e) {
  var t = e.typeKey, n = e.defaultDropEffect, r = /* @__PURE__ */ new WeakMap(), a = "data-drop-target-for-".concat(t), o = "[".concat(a, "]");
  function l(h) {
    return r.set(h.element, h), function() {
      return r.delete(h.element);
    };
  }
  function i(h) {
    if (process.env.NODE_ENV !== "production") {
      var b = r.get(h.element);
      b && console.warn("You have already registered a [".concat(t, "] dropTarget on the same element"), {
        existing: b,
        proposed: h
      }), h.element instanceof HTMLIFrameElement && console.warn(`
            We recommend not registering <iframe> elements as drop targets
            as it can result in some strange browser event ordering.
          `.replace(/\s{2,}/g, " ").trim());
    }
    var w = vt(Ir(h.element, {
      attribute: a,
      value: "true"
    }), l(h));
    return Ze(w);
  }
  function s(h) {
    var b, w, D, O, d = h.source, f = h.target, g = h.input, m = h.result, v = m === void 0 ? [] : m;
    if (f == null)
      return v;
    if (!(f instanceof Element))
      return f instanceof Node ? s({
        source: d,
        target: f.parentElement,
        input: g,
        result: v
      }) : v;
    var A = f.closest(o);
    if (A == null)
      return v;
    var T = r.get(A);
    if (T == null)
      return v;
    var x = {
      input: g,
      source: d,
      element: T.element
    };
    if (T.canDrop && !T.canDrop(x))
      return s({
        source: d,
        target: T.element.parentElement,
        input: g,
        result: v
      });
    var P = (b = (w = T.getData) === null || w === void 0 ? void 0 : w.call(T, x)) !== null && b !== void 0 ? b : {}, N = (D = (O = T.getDropEffect) === null || O === void 0 ? void 0 : O.call(T, x)) !== null && D !== void 0 ? D : n, L = {
      data: P,
      element: T.element,
      dropEffect: N,
      // we are collecting _actual_ drop targets, so these are
      // being applied _not_ due to stickiness
      isActiveDueToStickiness: !1
    };
    return s({
      source: d,
      target: T.element.parentElement,
      input: g,
      // Using bubble ordering. Same ordering as `event.getPath()`
      result: [].concat(Vt(v), [L])
    });
  }
  function u(h) {
    var b = h.eventName, w = h.payload, D = Jt(w.location.current.dropTargets), O;
    try {
      for (D.s(); !(O = D.n()).done; ) {
        var d, f = O.value, g = r.get(f.element), m = Te(Te({}, w), {}, {
          self: f
        });
        g == null || (d = g[b]) === null || d === void 0 || d.call(
          g,
          // I cannot seem to get the types right here.
          // TS doesn't seem to like that one event can need `nativeSetDragImage`
          // @ts-expect-error
          m
        );
      }
    } catch (v) {
      D.e(v);
    } finally {
      D.f();
    }
  }
  var c = {
    onGenerateDragPreview: u,
    onDrag: u,
    onDragStart: u,
    onDrop: u,
    onDropTargetChange: function(b) {
      var w = b.payload, D = new Set(w.location.current.dropTargets.map(function(oe) {
        return oe.element;
      })), O = /* @__PURE__ */ new Set(), d = Jt(w.location.previous.dropTargets), f;
      try {
        for (d.s(); !(f = d.n()).done; ) {
          var g, m = f.value;
          O.add(m.element);
          var v = r.get(m.element), A = D.has(m.element), T = Te(Te({}, w), {}, {
            self: m
          });
          if (v == null || (g = v.onDropTargetChange) === null || g === void 0 || g.call(v, T), !A) {
            var x;
            v == null || (x = v.onDragLeave) === null || x === void 0 || x.call(v, T);
          }
        }
      } catch (oe) {
        d.e(oe);
      } finally {
        d.f();
      }
      var P = Jt(w.location.current.dropTargets), N;
      try {
        for (P.s(); !(N = P.n()).done; ) {
          var L, U, te = N.value;
          if (!O.has(te.element)) {
            var he = Te(Te({}, w), {}, {
              self: te
            }), X = r.get(te.element);
            X == null || (L = X.onDropTargetChange) === null || L === void 0 || L.call(X, he), X == null || (U = X.onDragEnter) === null || U === void 0 || U.call(X, he);
          }
        }
      } catch (oe) {
        P.e(oe);
      } finally {
        P.f();
      }
    }
  };
  function p(h) {
    c[h.eventName](h);
  }
  function y(h) {
    var b = h.source, w = h.target, D = h.input, O = h.current, d = s({
      source: b,
      target: w,
      input: D
    });
    if (d.length >= O.length)
      return d;
    for (var f = Qt(O), g = Qt(d), m = [], v = 0; v < f.length; v++) {
      var A, T = f[v], x = g[v];
      if (x != null) {
        m.push(x);
        continue;
      }
      var P = m[v - 1], N = f[v - 1];
      if (P?.element !== N?.element)
        break;
      var L = r.get(T.element);
      if (!L)
        break;
      var U = {
        input: D,
        source: b,
        element: L.element
      };
      if (L.canDrop && !L.canDrop(U) || !((A = L.getIsSticky) !== null && A !== void 0 && A.call(L, U)))
        break;
      m.push(Te(Te({}, T), {}, {
        // making it clear to consumers this drop target is active due to stickiness
        isActiveDueToStickiness: !0
      }));
    }
    return Qt(m);
  }
  return {
    dropTargetForConsumers: i,
    getIsOver: y,
    dispatchEvent: p
  };
}
function wo(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Eo(e)) || t) {
      n && (e = n);
      var r = 0, a = function() {
      };
      return { s: a, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(u) {
        throw u;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, l = !0, i = !1;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var u = n.next();
    return l = u.done, u;
  }, e: function(u) {
    i = !0, o = u;
  }, f: function() {
    try {
      l || n.return == null || n.return();
    } finally {
      if (i) throw o;
    }
  } };
}
function Eo(e, t) {
  if (e) {
    if (typeof e == "string") return Yn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Yn(e, t) : void 0;
  }
}
function Yn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Un(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Do(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Un(Object(n), !0).forEach(function(r) {
      mt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Un(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function So() {
  var e = /* @__PURE__ */ new Set(), t = null;
  function n(o) {
    t && (!o.canMonitor || o.canMonitor(t.canMonitorArgs)) && t.active.add(o);
  }
  function r(o) {
    var l = Do({}, o);
    e.add(l), n(l);
    function i() {
      e.delete(l), t && t.active.delete(l);
    }
    return Ze(i);
  }
  function a(o) {
    var l = o.eventName, i = o.payload;
    if (l === "onGenerateDragPreview") {
      t = {
        canMonitorArgs: {
          initial: i.location.initial,
          source: i.source
        },
        active: /* @__PURE__ */ new Set()
      };
      var s = wo(e), u;
      try {
        for (s.s(); !(u = s.n()).done; ) {
          var c = u.value;
          n(c);
        }
      } catch (D) {
        s.e(D);
      } finally {
        s.f();
      }
    }
    if (t) {
      for (var p = Array.from(t.active), y = 0, h = p; y < h.length; y++) {
        var b = h[y];
        if (t.active.has(b)) {
          var w;
          (w = b[l]) === null || w === void 0 || w.call(b, i);
        }
      }
      l === "onDrop" && (t.active.clear(), t = null);
    }
  }
  return {
    dispatchEvent: a,
    monitorForConsumers: r
  };
}
function Cr(e) {
  var t = e.typeKey, n = e.mount, r = e.dispatchEventToSource, a = e.onPostDispatch, o = e.defaultDropEffect, l = So(), i = bo({
    typeKey: t,
    defaultDropEffect: o
  });
  function s(p) {
    r?.(p), i.dispatchEvent(p), l.dispatchEvent(p), a?.(p);
  }
  function u(p) {
    var y = p.event, h = p.dragType;
    Bn.start({
      event: y,
      dragType: h,
      getDropTargetsOver: i.getIsOver,
      dispatchEvent: s
    });
  }
  function c() {
    function p() {
      var y = {
        canStart: Bn.canStart,
        start: u
      };
      return n(y);
    }
    return vo({
      typeKey: t,
      mount: p
    });
  }
  return {
    registerUsage: c,
    dropTarget: i.dropTargetForConsumers,
    monitor: l.monitorForConsumers
  };
}
var xo = Ze(function() {
  return navigator.userAgent.toLocaleLowerCase().includes("android");
}), kr = "pdnd:android-fallback";
function Ao(e) {
  var t = e.dragEnter, n = t.type, r = t.relatedTarget;
  return n !== "dragenter" ? !1 : ht() ? ro({
    dragEnter: t
  }) : r == null ? !0 : _r() ? Tr(r) : r instanceof HTMLIFrameElement;
}
var vn = "text/plain", Fr = "application/vnd.pdnd";
function Tn(e) {
  var t = e.type, n = e.value;
  return !(t === Fr || t === vn && n === kr);
}
function _o(e) {
  return Array.from(e.types).filter(function(t) {
    return Tn({
      type: t,
      value: e.getData(t)
    });
  });
}
function To(e) {
  return Array.from(e.items).filter(function(t) {
    return t.kind === "file" || Tn({
      type: t.type,
      value: e.getData(t.type)
    });
  });
}
var hn = !1, On = Cr({
  typeKey: "external",
  // for external drags, we are generally making a copy of something that is being dragged
  defaultDropEffect: "copy",
  mount: function(t) {
    return Ee.bind(window, {
      type: "dragenter",
      listener: function(r) {
        if (!hn) {
          if (!r.dataTransfer) {
            process.env.NODE_ENV !== "production" && console.warn(`
              It appears as though you have are not testing DragEvents correctly.

              - If you are unit testing, ensure you have polyfilled DragEvent.
              - If you are browser testing, ensure you are dispatching drag events correctly.

              Please see our testing guides for more information:
              https://atlassian.design/components/pragmatic-drag-and-drop/core-package/testing
            `.replace(/ {2}/g, ""));
            return;
          }
          if (t.canStart(r) && Ao({
            dragEnter: r
          })) {
            var a = _o(r.dataTransfer);
            if (a.length) {
              var o = {
                types: a,
                items: [],
                getStringData: function() {
                  return null;
                }
              };
              t.start({
                event: r,
                dragType: {
                  type: "external",
                  startedFrom: "external",
                  payload: o,
                  getDropPayload: function(i) {
                    if (!i.dataTransfer)
                      return o;
                    var s = To(i.dataTransfer), u = i.dataTransfer.getData.bind(i.dataTransfer);
                    return {
                      types: a,
                      items: s,
                      // return `null` if there is no result, otherwise string
                      getStringData: function(p) {
                        if (!a.includes(p))
                          return null;
                        var y = u(p);
                        return Tn({
                          type: p,
                          value: y
                        }) ? y : null;
                      }
                    };
                  }
                }
              });
            }
          }
        }
      }
    });
  }
});
function Oo(e) {
  return On.dropTarget(e);
}
function Io(e) {
  return On.monitor(e);
}
(function() {
  if (typeof window > "u")
    return;
  On.registerUsage();
  var t = {
    type: "idle"
  }, n = t;
  function r() {
    n.type === "dragging" && (hn = !1, n.cleanup(), n = t);
  }
  function a() {
    return Ee.bindAll(
      window,
      [{
        type: "dragend",
        listener: r
      }].concat(Vt(_n({
        onDragEnd: r
      }))),
      // we want to make sure we get all the events,
      // and this helps avoid not seeing events when folks stop
      // them later on the event path
      {
        capture: !0
      }
    );
  }
  Ee.bind(window, {
    type: "dragstart",
    listener: function() {
      n.type === "idle" && (hn = !0, n = {
        type: "dragging",
        cleanup: a()
      });
    },
    // binding in the capture phase so these listeners are called
    // before our listeners in the adapters `mount` function
    options: {
      capture: !0
    }
  });
})();
function Xn(e) {
  var t = e.source;
  return t.types.includes("Files");
}
function Gn(e) {
  e.defaultPrevented || (e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.preventDefault());
}
var mn = null;
function Co() {
  et(), mn = Ee.bindAll(
    window,
    [{
      type: "dragover",
      listener: Gn
    }, {
      type: "dragenter",
      listener: Gn
    }, {
      type: "drop",
      listener: function(t) {
        t.preventDefault(), et();
      }
    }, {
      type: "dragend",
      listener: et
    }].concat(Vt(_n({
      onDragEnd: et
    }))),
    // being clear that these are added in the bubble phase
    {
      capture: !1
    }
  );
}
function et() {
  var e;
  (e = mn) === null || e === void 0 || e(), mn = null;
}
function ko() {
  var e;
  if (((e = window.event) === null || e === void 0 ? void 0 : e.type) === "drop") {
    var t;
    (t = window.event) === null || t === void 0 || t.preventDefault();
  }
  et();
}
var qn = {
  start: Co,
  stop: ko
};
const Fo = { class: "file-menu" }, $o = ["data-drop-state"], Po = ["accept"], Mo = /* @__PURE__ */ Y({
  __name: "FileMenu",
  props: {
    filePickerId: {},
    fileType: {}
  },
  emits: ["open", "clear", "save"],
  setup(e, { emit: t }) {
    const n = t, r = e, a = me(
      () => [
        ...Object.keys(r.fileType.accept ?? {}),
        ...Object.values(r.fileType.accept ?? {}).flat()
      ].join(",")
    ), o = He("idle"), l = ge("dropZone"), i = ge("fileInput"), s = "showOpenFilePicker" in window, u = async (p) => {
      if (s) {
        p.preventDefault(), p.stopPropagation();
        const [y] = await window.showOpenFilePicker({
          multiple: !1,
          types: [r.fileType]
        });
        n("open", y);
      } else
        i.value?.click();
    }, c = (p) => {
      const y = p.target;
      y.files?.[0] && (n("open", y.files[0]), y.value = "");
    };
    return Sn(() => {
      if (!l.value) return;
      const p = vt(
        Oo({
          element: l.value,
          canDrop: Xn,
          onDragEnter: () => {
            o.value = "over";
          },
          onDragLeave: () => {
            o.value = "potential";
          },
          onDrop: async ({ source: y }) => {
            const [h] = y.items;
            if (h)
              if (s) {
                const b = await h.getAsFileSystemHandle();
                b && n("open", b);
              } else {
                const b = h.getAsFile();
                b && n("open", b);
              }
          }
        }),
        Io({
          canMonitor: Xn,
          onDragStart: () => {
            o.value = "potential", qn.start();
          },
          onDrop: () => {
            o.value = "idle", qn.stop();
          }
        })
      );
      xn(p);
    }), (p, y) => (_(), I("menu", Fo, [
      E("li", {
        ref_key: "dropZone",
        ref: l,
        class: "drop-zone",
        tabindex: "0",
        "data-drop-state": o.value
      }, [
        E("input", {
          ref_key: "fileInput",
          ref: i,
          type: "file",
          style: { display: "none" },
          onChange: c,
          accept: a.value
        }, null, 40, Po),
        E("button", { onClick: u }, "Open"),
        y[2] || (y[2] = E("div", { class: "drop-hint" }, "or drop file", -1))
      ], 8, $o),
      E("li", null, [
        E("button", {
          onClick: y[0] || (y[0] = (h) => n("save"))
        }, "Save")
      ]),
      E("li", null, [
        E("button", {
          onClick: y[1] || (y[1] = (h) => n("clear"))
        }, "Clear")
      ])
    ]));
  }
}), jo = /* @__PURE__ */ ae(Mo, [["__scopeId", "data-v-f907c25f"]]);
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Kn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function De(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kn(Object(n), !0).forEach(function(r) {
      No(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function It(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? It = function(t) {
    return typeof t;
  } : It = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, It(e);
}
function No(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function xe() {
  return xe = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xe.apply(this, arguments);
}
function Lo(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Ro(e, t) {
  if (e == null) return {};
  var n = Lo(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var Ho = "1.15.6";
function Se(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Ae = Se(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), yt = Se(/Edge/i), Zn = Se(/firefox/i), ot = Se(/safari/i) && !Se(/chrome/i) && !Se(/android/i), In = Se(/iP(ad|od|hone)/i), $r = Se(/chrome/i) && Se(/android/i), Pr = {
  capture: !1,
  passive: !1
};
function j(e, t, n) {
  e.addEventListener(t, n, !Ae && Pr);
}
function M(e, t, n) {
  e.removeEventListener(t, n, !Ae && Pr);
}
function jt(e, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(t);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Mr(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function pe(e, t, n, r) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && jt(e, t) : jt(e, t)) || r && e === n)
        return e;
      if (e === n) break;
    } while (e = Mr(e));
  }
  return null;
}
var Jn = /\s+/g;
function le(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var r = (" " + e.className + " ").replace(Jn, " ").replace(" " + t + " ", " ");
      e.className = (r + (n ? " " + t : "")).replace(Jn, " ");
    }
}
function C(e, t, n) {
  var r = e && e.style;
  if (r) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
    !(t in r) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), r[t] = n + (typeof n == "string" ? "" : "px");
  }
}
function qe(e, t) {
  var n = "";
  if (typeof e == "string")
    n = e;
  else
    do {
      var r = C(e, "transform");
      r && r !== "none" && (n = r + " " + n);
    } while (!t && (e = e.parentNode));
  var a = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return a && new a(n);
}
function jr(e, t, n) {
  if (e) {
    var r = e.getElementsByTagName(t), a = 0, o = r.length;
    if (n)
      for (; a < o; a++)
        n(r[a], a);
    return r;
  }
  return [];
}
function we() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function W(e, t, n, r, a) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var o, l, i, s, u, c, p;
    if (e !== window && e.parentNode && e !== we() ? (o = e.getBoundingClientRect(), l = o.top, i = o.left, s = o.bottom, u = o.right, c = o.height, p = o.width) : (l = 0, i = 0, s = window.innerHeight, u = window.innerWidth, c = window.innerHeight, p = window.innerWidth), (t || n) && e !== window && (a = a || e.parentNode, !Ae))
      do
        if (a && a.getBoundingClientRect && (C(a, "transform") !== "none" || n && C(a, "position") !== "static")) {
          var y = a.getBoundingClientRect();
          l -= y.top + parseInt(C(a, "border-top-width")), i -= y.left + parseInt(C(a, "border-left-width")), s = l + o.height, u = i + o.width;
          break;
        }
      while (a = a.parentNode);
    if (r && e !== window) {
      var h = qe(a || e), b = h && h.a, w = h && h.d;
      h && (l /= w, i /= b, p /= b, c /= w, s = l + c, u = i + p);
    }
    return {
      top: l,
      left: i,
      bottom: s,
      right: u,
      width: p,
      height: c
    };
  }
}
function Qn(e, t, n) {
  for (var r = ke(e, !0), a = W(e)[t]; r; ) {
    var o = W(r)[n], l = void 0;
    if (l = a >= o, !l) return r;
    if (r === we()) break;
    r = ke(r, !1);
  }
  return !1;
}
function Ke(e, t, n, r) {
  for (var a = 0, o = 0, l = e.children; o < l.length; ) {
    if (l[o].style.display !== "none" && l[o] !== k.ghost && (r || l[o] !== k.dragged) && pe(l[o], n.draggable, e, !1)) {
      if (a === t)
        return l[o];
      a++;
    }
    o++;
  }
  return null;
}
function Cn(e, t) {
  for (var n = e.lastElementChild; n && (n === k.ghost || C(n, "display") === "none" || t && !jt(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function de(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== k.clone && (!t || jt(e, t)) && n++;
  return n;
}
function er(e) {
  var t = 0, n = 0, r = we();
  if (e)
    do {
      var a = qe(e), o = a.a, l = a.d;
      t += e.scrollLeft * o, n += e.scrollTop * l;
    } while (e !== r && (e = e.parentNode));
  return [t, n];
}
function Vo(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      for (var r in t)
        if (t.hasOwnProperty(r) && t[r] === e[n][r]) return Number(n);
    }
  return -1;
}
function ke(e, t) {
  if (!e || !e.getBoundingClientRect) return we();
  var n = e, r = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var a = C(n);
      if (n.clientWidth < n.scrollWidth && (a.overflowX == "auto" || a.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (a.overflowY == "auto" || a.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return we();
        if (r || t) return n;
        r = !0;
      }
    }
  while (n = n.parentNode);
  return we();
}
function Bo(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function en(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var it;
function Nr(e, t) {
  return function() {
    if (!it) {
      var n = arguments, r = this;
      n.length === 1 ? e.call(r, n[0]) : e.apply(r, n), it = setTimeout(function() {
        it = void 0;
      }, t);
    }
  };
}
function zo() {
  clearTimeout(it), it = void 0;
}
function Lr(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function Rr(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
function Hr(e, t, n) {
  var r = {};
  return Array.from(e.children).forEach(function(a) {
    var o, l, i, s;
    if (!(!pe(a, t.draggable, e, !1) || a.animated || a === n)) {
      var u = W(a);
      r.left = Math.min((o = r.left) !== null && o !== void 0 ? o : 1 / 0, u.left), r.top = Math.min((l = r.top) !== null && l !== void 0 ? l : 1 / 0, u.top), r.right = Math.max((i = r.right) !== null && i !== void 0 ? i : -1 / 0, u.right), r.bottom = Math.max((s = r.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
var re = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Wo() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(a) {
          if (!(C(a, "display") === "none" || a === k.ghost)) {
            e.push({
              target: a,
              rect: W(a)
            });
            var o = De({}, e[e.length - 1].rect);
            if (a.thisAnimationDuration) {
              var l = qe(a, !0);
              l && (o.top -= l.f, o.left -= l.e);
            }
            a.fromRect = o;
          }
        });
      }
    },
    addAnimationState: function(r) {
      e.push(r);
    },
    removeAnimationState: function(r) {
      e.splice(Vo(e, {
        target: r
      }), 1);
    },
    animateAll: function(r) {
      var a = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof r == "function" && r();
        return;
      }
      var o = !1, l = 0;
      e.forEach(function(i) {
        var s = 0, u = i.target, c = u.fromRect, p = W(u), y = u.prevFromRect, h = u.prevToRect, b = i.rect, w = qe(u, !0);
        w && (p.top -= w.f, p.left -= w.e), u.toRect = p, u.thisAnimationDuration && en(y, p) && !en(c, p) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - p.top) / (b.left - p.left) === (c.top - p.top) / (c.left - p.left) && (s = Uo(b, y, h, a.options)), en(p, c) || (u.prevFromRect = c, u.prevToRect = p, s || (s = a.options.animation), a.animate(u, b, p, s)), s && (o = !0, l = Math.max(l, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(t), o ? t = setTimeout(function() {
        typeof r == "function" && r();
      }, l) : typeof r == "function" && r(), e = [];
    },
    animate: function(r, a, o, l) {
      if (l) {
        C(r, "transition", ""), C(r, "transform", "");
        var i = qe(this.el), s = i && i.a, u = i && i.d, c = (a.left - o.left) / (s || 1), p = (a.top - o.top) / (u || 1);
        r.animatingX = !!c, r.animatingY = !!p, C(r, "transform", "translate3d(" + c + "px," + p + "px,0)"), this.forRepaintDummy = Yo(r), C(r, "transition", "transform " + l + "ms" + (this.options.easing ? " " + this.options.easing : "")), C(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          C(r, "transition", ""), C(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, l);
      }
    }
  };
}
function Yo(e) {
  return e.offsetWidth;
}
function Uo(e, t, n, r) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * r.animation;
}
var We = [], tn = {
  initializeByDefault: !0
}, bt = {
  mount: function(t) {
    for (var n in tn)
      tn.hasOwnProperty(n) && !(n in t) && (t[n] = tn[n]);
    We.forEach(function(r) {
      if (r.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), We.push(t);
  },
  pluginEvent: function(t, n, r) {
    var a = this;
    this.eventCanceled = !1, r.cancel = function() {
      a.eventCanceled = !0;
    };
    var o = t + "Global";
    We.forEach(function(l) {
      n[l.pluginName] && (n[l.pluginName][o] && n[l.pluginName][o](De({
        sortable: n
      }, r)), n.options[l.pluginName] && n[l.pluginName][t] && n[l.pluginName][t](De({
        sortable: n
      }, r)));
    });
  },
  initializePlugins: function(t, n, r, a) {
    We.forEach(function(i) {
      var s = i.pluginName;
      if (!(!t.options[s] && !i.initializeByDefault)) {
        var u = new i(t, n, t.options);
        u.sortable = t, u.options = t.options, t[s] = u, xe(r, u.defaults);
      }
    });
    for (var o in t.options)
      if (t.options.hasOwnProperty(o)) {
        var l = this.modifyOption(t, o, t.options[o]);
        typeof l < "u" && (t.options[o] = l);
      }
  },
  getEventProperties: function(t, n) {
    var r = {};
    return We.forEach(function(a) {
      typeof a.eventProperties == "function" && xe(r, a.eventProperties.call(n[a.pluginName], t));
    }), r;
  },
  modifyOption: function(t, n, r) {
    var a;
    return We.forEach(function(o) {
      t[o.pluginName] && o.optionListeners && typeof o.optionListeners[n] == "function" && (a = o.optionListeners[n].call(t[o.pluginName], r));
    }), a;
  }
};
function Xo(e) {
  var t = e.sortable, n = e.rootEl, r = e.name, a = e.targetEl, o = e.cloneEl, l = e.toEl, i = e.fromEl, s = e.oldIndex, u = e.newIndex, c = e.oldDraggableIndex, p = e.newDraggableIndex, y = e.originalEvent, h = e.putSortable, b = e.extraEventProperties;
  if (t = t || n && n[re], !!t) {
    var w, D = t.options, O = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !Ae && !yt ? w = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (w = document.createEvent("Event"), w.initEvent(r, !0, !0)), w.to = l || n, w.from = i || n, w.item = a || n, w.clone = o, w.oldIndex = s, w.newIndex = u, w.oldDraggableIndex = c, w.newDraggableIndex = p, w.originalEvent = y, w.pullMode = h ? h.lastPutMode : void 0;
    var d = De(De({}, b), bt.getEventProperties(r, t));
    for (var f in d)
      w[f] = d[f];
    n && n.dispatchEvent(w), D[O] && D[O].call(t, w);
  }
}
var Go = ["evt"], ne = function(t, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.evt, o = Ro(r, Go);
  bt.pluginEvent.bind(k)(t, n, De({
    dragEl: S,
    parentEl: B,
    ghostEl: $,
    rootEl: R,
    nextEl: Re,
    lastDownEl: Ct,
    cloneEl: H,
    cloneHidden: Ie,
    dragStarted: tt,
    putSortable: q,
    activeSortable: k.active,
    originalEvent: a,
    oldIndex: Xe,
    oldDraggableIndex: lt,
    newIndex: se,
    newDraggableIndex: Oe,
    hideGhostForTarget: Wr,
    unhideGhostForTarget: Yr,
    cloneNowHidden: function() {
      Ie = !0;
    },
    cloneNowShown: function() {
      Ie = !1;
    },
    dispatchSortableEvent: function(i) {
      ee({
        sortable: n,
        name: i,
        originalEvent: a
      });
    }
  }, o));
};
function ee(e) {
  Xo(De({
    putSortable: q,
    cloneEl: H,
    targetEl: S,
    rootEl: R,
    oldIndex: Xe,
    oldDraggableIndex: lt,
    newIndex: se,
    newDraggableIndex: Oe
  }, e));
}
var S, B, $, R, Re, Ct, H, Ie, Xe, se, lt, Oe, xt, q, Ue = !1, Nt = !1, Lt = [], Ne, fe, nn, rn, tr, nr, tt, Ye, st, ut = !1, At = !1, kt, K, an = [], yn = !1, Rt = [], Bt = typeof document < "u", _t = In, rr = yt || Ae ? "cssFloat" : "float", qo = Bt && !$r && !In && "draggable" in document.createElement("div"), Vr = (function() {
  if (Bt) {
    if (Ae)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
})(), Br = function(t, n) {
  var r = C(t), a = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), o = Ke(t, 0, n), l = Ke(t, 1, n), i = o && C(o), s = l && C(l), u = i && parseInt(i.marginLeft) + parseInt(i.marginRight) + W(o).width, c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + W(l).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && i.float && i.float !== "none") {
    var p = i.float === "left" ? "left" : "right";
    return l && (s.clear === "both" || s.clear === p) ? "vertical" : "horizontal";
  }
  return o && (i.display === "block" || i.display === "flex" || i.display === "table" || i.display === "grid" || u >= a && r[rr] === "none" || l && r[rr] === "none" && u + c > a) ? "vertical" : "horizontal";
}, Ko = function(t, n, r) {
  var a = r ? t.left : t.top, o = r ? t.right : t.bottom, l = r ? t.width : t.height, i = r ? n.left : n.top, s = r ? n.right : n.bottom, u = r ? n.width : n.height;
  return a === i || o === s || a + l / 2 === i + u / 2;
}, Zo = function(t, n) {
  var r;
  return Lt.some(function(a) {
    var o = a[re].options.emptyInsertThreshold;
    if (!(!o || Cn(a))) {
      var l = W(a), i = t >= l.left - o && t <= l.right + o, s = n >= l.top - o && n <= l.bottom + o;
      if (i && s)
        return r = a;
    }
  }), r;
}, zr = function(t) {
  function n(o, l) {
    return function(i, s, u, c) {
      var p = i.options.group.name && s.options.group.name && i.options.group.name === s.options.group.name;
      if (o == null && (l || p))
        return !0;
      if (o == null || o === !1)
        return !1;
      if (l && o === "clone")
        return o;
      if (typeof o == "function")
        return n(o(i, s, u, c), l)(i, s, u, c);
      var y = (l ? i : s).options.group.name;
      return o === !0 || typeof o == "string" && o === y || o.join && o.indexOf(y) > -1;
    };
  }
  var r = {}, a = t.group;
  (!a || It(a) != "object") && (a = {
    name: a
  }), r.name = a.name, r.checkPull = n(a.pull, !0), r.checkPut = n(a.put), r.revertClone = a.revertClone, t.group = r;
}, Wr = function() {
  !Vr && $ && C($, "display", "none");
}, Yr = function() {
  !Vr && $ && C($, "display", "");
};
Bt && !$r && document.addEventListener("click", function(e) {
  if (Nt)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Nt = !1, !1;
}, !0);
var Le = function(t) {
  if (S) {
    t = t.touches ? t.touches[0] : t;
    var n = Zo(t.clientX, t.clientY);
    if (n) {
      var r = {};
      for (var a in t)
        t.hasOwnProperty(a) && (r[a] = t[a]);
      r.target = r.rootEl = n, r.preventDefault = void 0, r.stopPropagation = void 0, n[re]._onDragOver(r);
    }
  }
}, Jo = function(t) {
  S && S.parentNode[re]._isOutsideThisEl(t.target);
};
function k(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = xe({}, t), e[re] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Br(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(l, i) {
      l.setData("Text", i.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: k.supportPointer !== !1 && "PointerEvent" in window && (!ot || In),
    emptyInsertThreshold: 5
  };
  bt.initializePlugins(this, e, n);
  for (var r in n)
    !(r in t) && (t[r] = n[r]);
  zr(t);
  for (var a in this)
    a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : qo, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? j(e, "pointerdown", this._onTapStart) : (j(e, "mousedown", this._onTapStart), j(e, "touchstart", this._onTapStart)), this.nativeDraggable && (j(e, "dragover", this), j(e, "dragenter", this)), Lt.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), xe(this, Wo());
}
k.prototype = /** @lends Sortable.prototype */
{
  constructor: k,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (Ye = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, S) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, r = this.el, a = this.options, o = a.preventOnFilter, l = t.type, i = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (i || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, c = a.filter;
      if (ii(r), !S && !(/mousedown|pointerdown/.test(l) && t.button !== 0 || a.disabled) && !u.isContentEditable && !(!this.nativeDraggable && ot && s && s.tagName.toUpperCase() === "SELECT") && (s = pe(s, a.draggable, r, !1), !(s && s.animated) && Ct !== s)) {
        if (Xe = de(s), lt = de(s, a.draggable), typeof c == "function") {
          if (c.call(this, t, s, this)) {
            ee({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: r,
              fromEl: r
            }), ne("filter", n, {
              evt: t
            }), o && t.preventDefault();
            return;
          }
        } else if (c && (c = c.split(",").some(function(p) {
          if (p = pe(u, p.trim(), r, !1), p)
            return ee({
              sortable: n,
              rootEl: p,
              name: "filter",
              targetEl: s,
              fromEl: r,
              toEl: r
            }), ne("filter", n, {
              evt: t
            }), !0;
        }), c)) {
          o && t.preventDefault();
          return;
        }
        a.handle && !pe(u, a.handle, r, !1) || this._prepareDragStart(t, i, s);
      }
    }
  },
  _prepareDragStart: function(t, n, r) {
    var a = this, o = a.el, l = a.options, i = o.ownerDocument, s;
    if (r && !S && r.parentNode === o) {
      var u = W(r);
      if (R = o, S = r, B = S.parentNode, Re = S.nextSibling, Ct = r, xt = l.group, k.dragged = S, Ne = {
        target: S,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, tr = Ne.clientX - u.left, nr = Ne.clientY - u.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, S.style["will-change"] = "all", s = function() {
        if (ne("delayEnded", a, {
          evt: t
        }), k.eventCanceled) {
          a._onDrop();
          return;
        }
        a._disableDelayedDragEvents(), !Zn && a.nativeDraggable && (S.draggable = !0), a._triggerDragStart(t, n), ee({
          sortable: a,
          name: "choose",
          originalEvent: t
        }), le(S, l.chosenClass, !0);
      }, l.ignore.split(",").forEach(function(c) {
        jr(S, c.trim(), on);
      }), j(i, "dragover", Le), j(i, "mousemove", Le), j(i, "touchmove", Le), l.supportPointer ? (j(i, "pointerup", a._onDrop), !this.nativeDraggable && j(i, "pointercancel", a._onDrop)) : (j(i, "mouseup", a._onDrop), j(i, "touchend", a._onDrop), j(i, "touchcancel", a._onDrop)), Zn && this.nativeDraggable && (this.options.touchStartThreshold = 4, S.draggable = !0), ne("delayStart", this, {
        evt: t
      }), l.delay && (!l.delayOnTouchOnly || n) && (!this.nativeDraggable || !(yt || Ae))) {
        if (k.eventCanceled) {
          this._onDrop();
          return;
        }
        l.supportPointer ? (j(i, "pointerup", a._disableDelayedDrag), j(i, "pointercancel", a._disableDelayedDrag)) : (j(i, "mouseup", a._disableDelayedDrag), j(i, "touchend", a._disableDelayedDrag), j(i, "touchcancel", a._disableDelayedDrag)), j(i, "mousemove", a._delayedDragTouchMoveHandler), j(i, "touchmove", a._delayedDragTouchMoveHandler), l.supportPointer && j(i, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(s, l.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    S && on(S), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    M(t, "mouseup", this._disableDelayedDrag), M(t, "touchend", this._disableDelayedDrag), M(t, "touchcancel", this._disableDelayedDrag), M(t, "pointerup", this._disableDelayedDrag), M(t, "pointercancel", this._disableDelayedDrag), M(t, "mousemove", this._delayedDragTouchMoveHandler), M(t, "touchmove", this._delayedDragTouchMoveHandler), M(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? j(document, "pointermove", this._onTouchMove) : n ? j(document, "touchmove", this._onTouchMove) : j(document, "mousemove", this._onTouchMove) : (j(S, "dragend", this), j(R, "dragstart", this._onDragStart));
    try {
      document.selection ? Ft(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (Ue = !1, R && S) {
      ne("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && j(document, "dragover", Jo);
      var r = this.options;
      !t && le(S, r.dragClass, !1), le(S, r.ghostClass, !0), k.active = this, t && this._appendGhost(), ee({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (fe) {
      this._lastX = fe.clientX, this._lastY = fe.clientY, Wr();
      for (var t = document.elementFromPoint(fe.clientX, fe.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(fe.clientX, fe.clientY), t !== n); )
        n = t;
      if (S.parentNode[re]._isOutsideThisEl(t), n)
        do {
          if (n[re]) {
            var r = void 0;
            if (r = n[re]._onDragOver({
              clientX: fe.clientX,
              clientY: fe.clientY,
              target: t,
              rootEl: n
            }), r && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = Mr(n));
      Yr();
    }
  },
  _onTouchMove: function(t) {
    if (Ne) {
      var n = this.options, r = n.fallbackTolerance, a = n.fallbackOffset, o = t.touches ? t.touches[0] : t, l = $ && qe($, !0), i = $ && l && l.a, s = $ && l && l.d, u = _t && K && er(K), c = (o.clientX - Ne.clientX + a.x) / (i || 1) + (u ? u[0] - an[0] : 0) / (i || 1), p = (o.clientY - Ne.clientY + a.y) / (s || 1) + (u ? u[1] - an[1] : 0) / (s || 1);
      if (!k.active && !Ue) {
        if (r && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < r)
          return;
        this._onDragStart(t, !0);
      }
      if ($) {
        l ? (l.e += c - (nn || 0), l.f += p - (rn || 0)) : l = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f: p
        };
        var y = "matrix(".concat(l.a, ",").concat(l.b, ",").concat(l.c, ",").concat(l.d, ",").concat(l.e, ",").concat(l.f, ")");
        C($, "webkitTransform", y), C($, "mozTransform", y), C($, "msTransform", y), C($, "transform", y), nn = c, rn = p, fe = o;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!$) {
      var t = this.options.fallbackOnBody ? document.body : R, n = W(S, !0, _t, !0, t), r = this.options;
      if (_t) {
        for (K = t; C(K, "position") === "static" && C(K, "transform") === "none" && K !== document; )
          K = K.parentNode;
        K !== document.body && K !== document.documentElement ? (K === document && (K = we()), n.top += K.scrollTop, n.left += K.scrollLeft) : K = we(), an = er(K);
      }
      $ = S.cloneNode(!0), le($, r.ghostClass, !1), le($, r.fallbackClass, !0), le($, r.dragClass, !0), C($, "transition", ""), C($, "transform", ""), C($, "box-sizing", "border-box"), C($, "margin", 0), C($, "top", n.top), C($, "left", n.left), C($, "width", n.width), C($, "height", n.height), C($, "opacity", "0.8"), C($, "position", _t ? "absolute" : "fixed"), C($, "zIndex", "100000"), C($, "pointerEvents", "none"), k.ghost = $, t.appendChild($), C($, "transform-origin", tr / parseInt($.style.width) * 100 + "% " + nr / parseInt($.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var r = this, a = t.dataTransfer, o = r.options;
    if (ne("dragStart", this, {
      evt: t
    }), k.eventCanceled) {
      this._onDrop();
      return;
    }
    ne("setupClone", this), k.eventCanceled || (H = Rr(S), H.removeAttribute("id"), H.draggable = !1, H.style["will-change"] = "", this._hideClone(), le(H, this.options.chosenClass, !1), k.clone = H), r.cloneId = Ft(function() {
      ne("clone", r), !k.eventCanceled && (r.options.removeCloneOnHide || R.insertBefore(H, S), r._hideClone(), ee({
        sortable: r,
        name: "clone"
      }));
    }), !n && le(S, o.dragClass, !0), n ? (Nt = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (M(document, "mouseup", r._onDrop), M(document, "touchend", r._onDrop), M(document, "touchcancel", r._onDrop), a && (a.effectAllowed = "move", o.setData && o.setData.call(r, a, S)), j(document, "drop", r), C(S, "transform", "translateZ(0)")), Ue = !0, r._dragStartId = Ft(r._dragStarted.bind(r, n, t)), j(document, "selectstart", r), tt = !0, window.getSelection().removeAllRanges(), ot && C(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, r = t.target, a, o, l, i = this.options, s = i.group, u = k.active, c = xt === s, p = i.sort, y = q || u, h, b = this, w = !1;
    if (yn) return;
    function D(V, ue) {
      ne(V, b, De({
        evt: t,
        isOwner: c,
        axis: h ? "vertical" : "horizontal",
        revert: l,
        dragRect: a,
        targetRect: o,
        canSort: p,
        fromSortable: y,
        target: r,
        completed: d,
        onMove: function(Me, ie) {
          return Tt(R, n, S, a, Me, W(Me), t, ie);
        },
        changed: f
      }, ue));
    }
    function O() {
      D("dragOverAnimationCapture"), b.captureAnimationState(), b !== y && y.captureAnimationState();
    }
    function d(V) {
      return D("dragOverCompleted", {
        insertion: V
      }), V && (c ? u._hideClone() : u._showClone(b), b !== y && (le(S, q ? q.options.ghostClass : u.options.ghostClass, !1), le(S, i.ghostClass, !0)), q !== b && b !== k.active ? q = b : b === k.active && q && (q = null), y === b && (b._ignoreWhileAnimating = r), b.animateAll(function() {
        D("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== y && (y.animateAll(), y._ignoreWhileAnimating = null)), (r === S && !S.animated || r === n && !r.animated) && (Ye = null), !i.dragoverBubble && !t.rootEl && r !== document && (S.parentNode[re]._isOutsideThisEl(t.target), !V && Le(t)), !i.dragoverBubble && t.stopPropagation && t.stopPropagation(), w = !0;
    }
    function f() {
      se = de(S), Oe = de(S, i.draggable), ee({
        sortable: b,
        name: "change",
        toEl: n,
        newIndex: se,
        newDraggableIndex: Oe,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), r = pe(r, i.draggable, n, !0), D("dragOver"), k.eventCanceled) return w;
    if (S.contains(t.target) || r.animated && r.animatingX && r.animatingY || b._ignoreWhileAnimating === r)
      return d(!1);
    if (Nt = !1, u && !i.disabled && (c ? p || (l = B !== R) : q === this || (this.lastPutMode = xt.checkPull(this, u, S, t)) && s.checkPut(this, u, S, t))) {
      if (h = this._getDirection(t, r) === "vertical", a = W(S), D("dragOverValid"), k.eventCanceled) return w;
      if (l)
        return B = R, O(), this._hideClone(), D("revert"), k.eventCanceled || (Re ? R.insertBefore(S, Re) : R.appendChild(S)), d(!0);
      var g = Cn(n, i.draggable);
      if (!g || ni(t, h, this) && !g.animated) {
        if (g === S)
          return d(!1);
        if (g && n === t.target && (r = g), r && (o = W(r)), Tt(R, n, S, a, r, o, t, !!r) !== !1)
          return O(), g && g.nextSibling ? n.insertBefore(S, g.nextSibling) : n.appendChild(S), B = n, f(), d(!0);
      } else if (g && ti(t, h, this)) {
        var m = Ke(n, 0, i, !0);
        if (m === S)
          return d(!1);
        if (r = m, o = W(r), Tt(R, n, S, a, r, o, t, !1) !== !1)
          return O(), n.insertBefore(S, m), B = n, f(), d(!0);
      } else if (r.parentNode === n) {
        o = W(r);
        var v = 0, A, T = S.parentNode !== n, x = !Ko(S.animated && S.toRect || a, r.animated && r.toRect || o, h), P = h ? "top" : "left", N = Qn(r, "top", "top") || Qn(S, "top", "top"), L = N ? N.scrollTop : void 0;
        Ye !== r && (A = o[P], ut = !1, At = !x && i.invertSwap || T), v = ri(t, r, o, h, x ? 1 : i.swapThreshold, i.invertedSwapThreshold == null ? i.swapThreshold : i.invertedSwapThreshold, At, Ye === r);
        var U;
        if (v !== 0) {
          var te = de(S);
          do
            te -= v, U = B.children[te];
          while (U && (C(U, "display") === "none" || U === $));
        }
        if (v === 0 || U === r)
          return d(!1);
        Ye = r, st = v;
        var he = r.nextElementSibling, X = !1;
        X = v === 1;
        var oe = Tt(R, n, S, a, r, o, t, X);
        if (oe !== !1)
          return (oe === 1 || oe === -1) && (X = oe === 1), yn = !0, setTimeout(ei, 30), O(), X && !he ? n.appendChild(S) : r.parentNode.insertBefore(S, X ? he : r), N && Lr(N, 0, L - N.scrollTop), B = S.parentNode, A !== void 0 && !At && (kt = Math.abs(A - W(r)[P])), f(), d(!0);
      }
      if (n.contains(S))
        return d(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    M(document, "mousemove", this._onTouchMove), M(document, "touchmove", this._onTouchMove), M(document, "pointermove", this._onTouchMove), M(document, "dragover", Le), M(document, "mousemove", Le), M(document, "touchmove", Le);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    M(t, "mouseup", this._onDrop), M(t, "touchend", this._onDrop), M(t, "pointerup", this._onDrop), M(t, "pointercancel", this._onDrop), M(t, "touchcancel", this._onDrop), M(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, r = this.options;
    if (se = de(S), Oe = de(S, r.draggable), ne("drop", this, {
      evt: t
    }), B = S && S.parentNode, se = de(S), Oe = de(S, r.draggable), k.eventCanceled) {
      this._nulling();
      return;
    }
    Ue = !1, At = !1, ut = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), bn(this.cloneId), bn(this._dragStartId), this.nativeDraggable && (M(document, "drop", this), M(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ot && C(document.body, "user-select", ""), C(S, "transform", ""), t && (tt && (t.cancelable && t.preventDefault(), !r.dropBubble && t.stopPropagation()), $ && $.parentNode && $.parentNode.removeChild($), (R === B || q && q.lastPutMode !== "clone") && H && H.parentNode && H.parentNode.removeChild(H), S && (this.nativeDraggable && M(S, "dragend", this), on(S), S.style["will-change"] = "", tt && !Ue && le(S, q ? q.options.ghostClass : this.options.ghostClass, !1), le(S, this.options.chosenClass, !1), ee({
      sortable: this,
      name: "unchoose",
      toEl: B,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), R !== B ? (se >= 0 && (ee({
      rootEl: B,
      name: "add",
      toEl: B,
      fromEl: R,
      originalEvent: t
    }), ee({
      sortable: this,
      name: "remove",
      toEl: B,
      originalEvent: t
    }), ee({
      rootEl: B,
      name: "sort",
      toEl: B,
      fromEl: R,
      originalEvent: t
    }), ee({
      sortable: this,
      name: "sort",
      toEl: B,
      originalEvent: t
    })), q && q.save()) : se !== Xe && se >= 0 && (ee({
      sortable: this,
      name: "update",
      toEl: B,
      originalEvent: t
    }), ee({
      sortable: this,
      name: "sort",
      toEl: B,
      originalEvent: t
    })), k.active && ((se == null || se === -1) && (se = Xe, Oe = lt), ee({
      sortable: this,
      name: "end",
      toEl: B,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    ne("nulling", this), R = S = B = $ = Re = H = Ct = Ie = Ne = fe = tt = se = Oe = Xe = lt = Ye = st = q = xt = k.dragged = k.ghost = k.clone = k.active = null, Rt.forEach(function(t) {
      t.checked = !0;
    }), Rt.length = nn = rn = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        S && (this._onDragOver(t), Qo(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], n, r = this.el.children, a = 0, o = r.length, l = this.options; a < o; a++)
      n = r[a], pe(n, l.draggable, this.el, !1) && t.push(n.getAttribute(l.dataIdAttr) || oi(n));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, n) {
    var r = {}, a = this.el;
    this.toArray().forEach(function(o, l) {
      var i = a.children[l];
      pe(i, this.options.draggable, a, !1) && (r[o] = i);
    }, this), n && this.captureAnimationState(), t.forEach(function(o) {
      r[o] && (a.removeChild(r[o]), a.appendChild(r[o]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, n) {
    return pe(t, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, n) {
    var r = this.options;
    if (n === void 0)
      return r[t];
    var a = bt.modifyOption(this, t, n);
    typeof a < "u" ? r[t] = a : r[t] = n, t === "group" && zr(r);
  },
  /**
   * Destroy
   */
  destroy: function() {
    ne("destroy", this);
    var t = this.el;
    t[re] = null, M(t, "mousedown", this._onTapStart), M(t, "touchstart", this._onTapStart), M(t, "pointerdown", this._onTapStart), this.nativeDraggable && (M(t, "dragover", this), M(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Lt.splice(Lt.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Ie) {
      if (ne("hideClone", this), k.eventCanceled) return;
      C(H, "display", "none"), this.options.removeCloneOnHide && H.parentNode && H.parentNode.removeChild(H), Ie = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Ie) {
      if (ne("showClone", this), k.eventCanceled) return;
      S.parentNode == R && !this.options.group.revertClone ? R.insertBefore(H, S) : Re ? R.insertBefore(H, Re) : R.appendChild(H), this.options.group.revertClone && this.animate(S, H), C(H, "display", ""), Ie = !1;
    }
  }
};
function Qo(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Tt(e, t, n, r, a, o, l, i) {
  var s, u = e[re], c = u.options.onMove, p;
  return window.CustomEvent && !Ae && !yt ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = n, s.draggedRect = r, s.related = a || t, s.relatedRect = o || W(t), s.willInsertAfter = i, s.originalEvent = l, e.dispatchEvent(s), c && (p = c.call(u, s, l)), p;
}
function on(e) {
  e.draggable = !1;
}
function ei() {
  yn = !1;
}
function ti(e, t, n) {
  var r = W(Ke(n.el, 0, n.options, !0)), a = Hr(n.el, n.options, $), o = 10;
  return t ? e.clientX < a.left - o || e.clientY < r.top && e.clientX < r.right : e.clientY < a.top - o || e.clientY < r.bottom && e.clientX < r.left;
}
function ni(e, t, n) {
  var r = W(Cn(n.el, n.options.draggable)), a = Hr(n.el, n.options, $), o = 10;
  return t ? e.clientX > a.right + o || e.clientY > r.bottom && e.clientX > r.left : e.clientY > a.bottom + o || e.clientX > r.right && e.clientY > r.top;
}
function ri(e, t, n, r, a, o, l, i) {
  var s = r ? e.clientY : e.clientX, u = r ? n.height : n.width, c = r ? n.top : n.left, p = r ? n.bottom : n.right, y = !1;
  if (!l) {
    if (i && kt < u * a) {
      if (!ut && (st === 1 ? s > c + u * o / 2 : s < p - u * o / 2) && (ut = !0), ut)
        y = !0;
      else if (st === 1 ? s < c + kt : s > p - kt)
        return -st;
    } else if (s > c + u * (1 - a) / 2 && s < p - u * (1 - a) / 2)
      return ai(t);
  }
  return y = y || l, y && (s < c + u * o / 2 || s > p - u * o / 2) ? s > c + u / 2 ? 1 : -1 : 0;
}
function ai(e) {
  return de(S) < de(e) ? 1 : -1;
}
function oi(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--; )
    r += t.charCodeAt(n);
  return r.toString(36);
}
function ii(e) {
  Rt.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var r = t[n];
    r.checked && Rt.push(r);
  }
}
function Ft(e) {
  return setTimeout(e, 0);
}
function bn(e) {
  return clearTimeout(e);
}
Bt && j(document, "touchmove", function(e) {
  (k.active || Ue) && e.cancelable && e.preventDefault();
});
k.utils = {
  on: j,
  off: M,
  css: C,
  find: jr,
  is: function(t, n) {
    return !!pe(t, n, t, !1);
  },
  extend: Bo,
  throttle: Nr,
  closest: pe,
  toggleClass: le,
  clone: Rr,
  index: de,
  nextTick: Ft,
  cancelNextTick: bn,
  detectDirection: Br,
  getChild: Ke,
  expando: re
};
k.get = function(e) {
  return e[re];
};
k.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (k.utils = De(De({}, k.utils), r.utils)), bt.mount(r);
  });
};
k.create = function(e, t) {
  return new k(e, t);
};
k.version = Ho;
var z = [], nt, wn, En = !1, ln, sn, Ht, rt;
function li() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return e.prototype = {
    dragStarted: function(n) {
      var r = n.originalEvent;
      this.sortable.nativeDraggable ? j(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? j(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? j(document, "touchmove", this._handleFallbackAutoScroll) : j(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var r = n.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? M(document, "dragover", this._handleAutoScroll) : (M(document, "pointermove", this._handleFallbackAutoScroll), M(document, "touchmove", this._handleFallbackAutoScroll), M(document, "mousemove", this._handleFallbackAutoScroll)), ar(), $t(), zo();
    },
    nulling: function() {
      Ht = wn = nt = En = rt = ln = sn = null, z.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var a = this, o = (n.touches ? n.touches[0] : n).clientX, l = (n.touches ? n.touches[0] : n).clientY, i = document.elementFromPoint(o, l);
      if (Ht = n, r || this.options.forceAutoScrollFallback || yt || Ae || ot) {
        un(n, this.options, i, r);
        var s = ke(i, !0);
        En && (!rt || o !== ln || l !== sn) && (rt && ar(), rt = setInterval(function() {
          var u = ke(document.elementFromPoint(o, l), !0);
          u !== s && (s = u, $t()), un(n, a.options, u, r);
        }, 10), ln = o, sn = l);
      } else {
        if (!this.options.bubbleScroll || ke(i, !0) === we()) {
          $t();
          return;
        }
        un(n, this.options, ke(i, !1), !1);
      }
    }
  }, xe(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function $t() {
  z.forEach(function(e) {
    clearInterval(e.pid);
  }), z = [];
}
function ar() {
  clearInterval(rt);
}
var un = Nr(function(e, t, n, r) {
  if (t.scroll) {
    var a = (e.touches ? e.touches[0] : e).clientX, o = (e.touches ? e.touches[0] : e).clientY, l = t.scrollSensitivity, i = t.scrollSpeed, s = we(), u = !1, c;
    wn !== n && (wn = n, $t(), nt = t.scroll, c = t.scrollFn, nt === !0 && (nt = ke(n, !0)));
    var p = 0, y = nt;
    do {
      var h = y, b = W(h), w = b.top, D = b.bottom, O = b.left, d = b.right, f = b.width, g = b.height, m = void 0, v = void 0, A = h.scrollWidth, T = h.scrollHeight, x = C(h), P = h.scrollLeft, N = h.scrollTop;
      h === s ? (m = f < A && (x.overflowX === "auto" || x.overflowX === "scroll" || x.overflowX === "visible"), v = g < T && (x.overflowY === "auto" || x.overflowY === "scroll" || x.overflowY === "visible")) : (m = f < A && (x.overflowX === "auto" || x.overflowX === "scroll"), v = g < T && (x.overflowY === "auto" || x.overflowY === "scroll"));
      var L = m && (Math.abs(d - a) <= l && P + f < A) - (Math.abs(O - a) <= l && !!P), U = v && (Math.abs(D - o) <= l && N + g < T) - (Math.abs(w - o) <= l && !!N);
      if (!z[p])
        for (var te = 0; te <= p; te++)
          z[te] || (z[te] = {});
      (z[p].vx != L || z[p].vy != U || z[p].el !== h) && (z[p].el = h, z[p].vx = L, z[p].vy = U, clearInterval(z[p].pid), (L != 0 || U != 0) && (u = !0, z[p].pid = setInterval((function() {
        r && this.layer === 0 && k.active._onTouchMove(Ht);
        var he = z[this.layer].vy ? z[this.layer].vy * i : 0, X = z[this.layer].vx ? z[this.layer].vx * i : 0;
        typeof c == "function" && c.call(k.dragged.parentNode[re], X, he, e, Ht, z[this.layer].el) !== "continue" || Lr(z[this.layer].el, X, he);
      }).bind({
        layer: p
      }), 24))), p++;
    } while (t.bubbleScroll && y !== s && (y = ke(y, !1)));
    En = u;
  }
}, 30), Ur = function(t) {
  var n = t.originalEvent, r = t.putSortable, a = t.dragEl, o = t.activeSortable, l = t.dispatchSortableEvent, i = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (n) {
    var u = r || o;
    i();
    var c = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, p = document.elementFromPoint(c.clientX, c.clientY);
    s(), u && !u.el.contains(p) && (l("spill"), this.onSpill({
      dragEl: a,
      putSortable: r
    }));
  }
};
function kn() {
}
kn.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(t) {
    var n = t.dragEl, r = t.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var a = Ke(this.sortable.el, this.startIndex, this.options);
    a ? this.sortable.el.insertBefore(n, a) : this.sortable.el.appendChild(n), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: Ur
};
xe(kn, {
  pluginName: "revertOnSpill"
});
function Fn() {
}
Fn.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, r = t.putSortable, a = r || this.sortable;
    a.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), a.animateAll();
  },
  drop: Ur
};
xe(Fn, {
  pluginName: "removeOnSpill"
});
k.mount(new li());
k.mount(Fn, kn);
function si(e, t, n = {}) {
  let r;
  const { document: a = ja, ...o } = n, l = { onUpdate: (c) => {
    ci(t, c.oldIndex, c.newIndex, c);
  } }, i = () => {
    const c = typeof e == "string" ? a?.querySelector(e) : An(e);
    !c || r !== void 0 || (r = new k(c, {
      ...l,
      ...o
    }));
  }, s = () => {
    r?.destroy(), r = void 0;
  }, u = (c, p) => {
    if (p !== void 0) r?.option(c, p);
    else return r?.option(c);
  };
  return $a(i), yr(s), {
    stop: s,
    start: i,
    option: u
  };
}
function ui(e, t, n) {
  const r = e.children[n];
  e.insertBefore(t, r);
}
function di(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function ci(e, t, n, r = null) {
  r != null && (di(r.item), ui(r.from, r.item, t));
  const a = ia(e), o = a ? [...Ge(e)] : Ge(e);
  if (n >= 0 && n < o.length) {
    const l = o.splice(t, 1)[0];
    Dn(() => {
      o.splice(n, 0, l), a && (e.value = o);
    });
  }
}
const fi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "22",
  height: "22",
  fill: "none"
};
function pi(e, t) {
  return _(), I("svg", fi, [...t[0] || (t[0] = [
    E("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.875 4v13.75m6.875-6.875H4"
    }, null, -1)
  ])]);
}
const gi = { render: pi }, vi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "17",
  fill: "none"
};
function hi(e, t) {
  return _(), I("svg", vi, [...t[0] || (t[0] = [
    E("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.733 4.781a.531.531 0 1 1 0-1.062.531.531 0 0 1 0 1.062m0 4.25a.531.531 0 1 1 0-1.062.531.531 0 0 1 0 1.062m0 4.25a.531.531 0 1 1 0-1.062.531.531 0 0 1 0 1.062M11.267 4.781a.531.531 0 1 1 0-1.062.531.531 0 0 1 0 1.062m0 4.25a.531.531 0 1 1 0-1.062.531.531 0 0 1 0 1.062m0 4.25a.531.531 0 1 1 0-1.062.531.531 0 0 1 0 1.062"
    }, null, -1)
  ])]);
}
const mi = { render: hi }, yi = ["value"], bi = /* @__PURE__ */ Y({
  __name: "InlineEdit",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ J(["end"], ["update:modelValue"]),
  setup(e) {
    const t = Q(e, "modelValue"), n = He(!1), r = ge("input"), a = async () => {
      n.value = !0, await Dn(), r.value?.focus();
    }, o = (l) => {
      n.value = !1, t.value = l.target.value;
    };
    return (l, i) => n.value ? (_(), I("input", {
      key: 0,
      ref_key: "input",
      ref: r,
      value: t.value,
      onChange: o,
      onBlur: o,
      onKeydown: i[0] || (i[0] = Ce(dt(() => {
      }, ["stop"]), ["delete"]))
    }, null, 40, yi)) : (_(), I("span", {
      key: 1,
      onDblclick: i[1] || (i[1] = (s) => a())
    }, G(t.value), 33));
  }
}), $n = /* @__PURE__ */ ae(bi, [["__scopeId", "data-v-81abe08b"]]), wi = { class: "section" }, Ei = { class: "header" }, Di = ["data-size", "data-sorting", "onKeydown"], Si = ["aria-current", "onClick", "onKeydown", "onMousedown"], xi = { class: "frame-name" }, Ai = /* @__PURE__ */ Y({
  __name: "FramesList",
  props: /* @__PURE__ */ J({
    sortable: { type: Boolean },
    draggable: { type: Boolean },
    rename: { type: Boolean },
    size: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {},
    selected: {},
    selectedModifiers: {}
  }),
  emits: /* @__PURE__ */ J(["add", "duplicate", "remove", "rename", "drag", "dragStart", "dragCancel", "dragEnd"], ["update:modelValue", "update:selected"]),
  setup(e, { emit: t }) {
    const n = e, r = Q(e, "modelValue"), a = Q(e, "selected"), o = t, l = ge("el"), i = He(!1);
    let s = null;
    n.sortable && si(l, r, {
      handle: ".sort-handle",
      onStart: () => i.value = !0,
      onEnd: () => i.value = !1
    });
    const u = (D, O) => {
      D.target.closest(".drag-handle") || (o("dragStart", D, O), s = O, window.addEventListener("mousemove", c), window.addEventListener("mouseup", y));
    }, c = (D) => {
      s && o("drag", D, s);
    }, p = () => {
      o("dragCancel", s), window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", y), s = null;
    }, y = (D) => {
      o("dragEnd", D, s), window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", y), s = null;
    };
    let h = null;
    const b = (D) => h = D, w = () => h && o("duplicate", h);
    return (D, O) => (_(), I("section", wi, [
      E("header", Ei, [
        E("h2", null, [
          Ve(D.$slots, "heading", {}, () => [
            $e(G(r.value.length) + " " + G(r.value.length === 1 ? "Frame" : "Frames"), 1)
          ], !0)
        ]),
        E("button", {
          class: "add",
          onClick: O[0] || (O[0] = (d) => o("add")),
          "data-theme": "dark"
        }, [
          Z(F(gi))
        ])
      ]),
      E("div", {
        class: "frames",
        role: "list",
        ref_key: "el",
        ref: l,
        tabindex: "-1",
        "data-size": e.size ?? "medium",
        "data-sorting": i.value,
        onKeydown: Ce(dt(w, ["ctrl", "stop"]), ["v"])
      }, [
        (_(!0), I(be, null, Be(r.value, (d) => (_(), I("button", {
          class: "frame",
          role: "listitem",
          key: d.id,
          "aria-current": d.id === a.value,
          onClick: (f) => a.value = d.id,
          onKeydown: [
            Ce((f) => !F(s) && o("remove", d), ["delete"]),
            Ce(dt((f) => b(d), ["ctrl"]), ["c"]),
            O[1] || (O[1] = Ce((f) => F(s) && p(), ["escape"]))
          ],
          draggable: "false",
          onMousedown: (f) => n.draggable && u(f, d)
        }, [
          Ve(D.$slots, "preview", { frame: d }, void 0, !0),
          e.sortable ? (_(), ce(F(mi), {
            key: 0,
            class: "sort-handle"
          })) : Fe("", !0),
          E("header", xi, [
            e.rename ? (_(), ce($n, {
              key: 0,
              "model-value": d.name,
              "onUpdate:modelValue": [(f) => d.name = f, (f) => o("rename", d, f)]
            }, null, 8, ["model-value", "onUpdate:modelValue"])) : (_(), I(be, { key: 1 }, [
              $e(G(d.name), 1)
            ], 64))
          ])
        ], 40, Si))), 128))
      ], 40, Di)
    ]));
  }
}), Fs = /* @__PURE__ */ ae(Ai, [["__scopeId", "data-v-2dee36a5"]]), _i = { class: "field" }, Ti = ["for"], Oi = ["id"], Ii = { class: "prefixed-input" }, Ci = ["placeholder"], ki = { class: "prefixed-input" }, Fi = ["placeholder"], $i = /* @__PURE__ */ Y({
  __name: "GapField",
  props: /* @__PURE__ */ J({
    label: {}
  }, {
    horizontal: {
      required: !0
    },
    horizontalModifiers: {},
    vertical: {
      required: !0
    },
    verticalModifiers: {}
  }),
  emits: ["update:horizontal", "update:vertical"],
  setup(e) {
    const t = Q(e, "horizontal"), n = Q(e, "vertical"), r = ve();
    return (a, o) => (_(), I("div", _i, [
      E("label", { for: F(r) }, G(e.label), 9, Ti),
      E("div", {
        id: F(r),
        class: "inputs"
      }, [
        E("div", Ii, [
          o[2] || (o[2] = $e(" x  ", -1)),
          ze(E("input", {
            type: "number",
            "onUpdate:modelValue": o[0] || (o[0] = (l) => t.value = l),
            placeholder: t.value === void 0 ? "mixed" : "",
            label: "Gap"
          }, null, 8, Ci), [
            [ct, t.value]
          ])
        ]),
        E("div", ki, [
          o[3] || (o[3] = $e(" y  ", -1)),
          ze(E("input", {
            type: "number",
            "onUpdate:modelValue": o[1] || (o[1] = (l) => n.value = l),
            placeholder: n.value === void 0 ? "mixed" : "",
            label: "Gap"
          }, null, 8, Fi), [
            [ct, n.value]
          ])
        ])
      ], 8, Oi)
    ]));
  }
}), $s = /* @__PURE__ */ ae($i, [["__scopeId", "data-v-57b3d503"]]), Pi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  fill: "none"
};
function Mi(e, t) {
  return _(), I("svg", Pi, [...t[0] || (t[0] = [
    E("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M4.065 2.217 7.76 5.913 4.065 9.608"
    }, null, -1)
  ])]);
}
const ji = { render: Mi }, Ni = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "15",
  height: "15",
  fill: "none"
};
function Li(e, t) {
  return _(), I("svg", Ni, [...t[0] || (t[0] = [
    E("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12.45 7.5a7 7 0 0 1-9.9 0v0"
    }, null, -1),
    E("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      d: "m8.838 9.442.28 1.632M6.176 9.52l-.448 1.554M11.37 8.519l.738 1.397M3.724 8.572 2.933 9.92"
    }, null, -1)
  ])]);
}
const Ri = { render: Li }, Hi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "15",
  height: "15",
  fill: "none"
};
function Vi(e, t) {
  return _(), I("svg", Hi, [...t[0] || (t[0] = [
    E("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.901 12.326H10.1a1.114 1.114 0 0 0 1.113-1.114v-3.34A1.114 1.114 0 0 0 10.1 6.757H4.9A1.114 1.114 0 0 0 3.788 7.87v3.341A1.114 1.114 0 0 0 4.9 12.326M9.727 6.62V5.344a2.227 2.227 0 1 0-4.455 0V6.62"
    }, null, -1)
  ])]);
}
const Bi = { render: Vi }, zi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "15",
  height: "15",
  fill: "none"
};
function Wi(e, t) {
  return _(), I("svg", zi, [...t[0] || (t[0] = [
    E("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.901 12.326H10.1a1.114 1.114 0 0 0 1.113-1.114v-3.34A1.114 1.114 0 0 0 10.1 6.757H4.9A1.114 1.114 0 0 0 3.788 7.87v3.341A1.114 1.114 0 0 0 4.9 12.326M9.727 6.31V4.139a2.227 2.227 0 1 0-4.455 0"
    }, null, -1)
  ])]);
}
const Yi = { render: Wi }, Ui = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "15",
  height: "15",
  fill: "none"
};
function Xi(e, t) {
  return _(), I("svg", Ui, [...t[0] || (t[0] = [
    E("path", {
      stroke: "#fff",
      "stroke-linejoin": "round",
      d: "M2.683 6.812a6.813 6.813 0 0 1 9.634 0c.38.38.38.996 0 1.376a6.813 6.813 0 0 1-9.634 0 .973.973 0 0 1 0-1.376Z"
    }, null, -1),
    E("circle", {
      cx: "7.5",
      cy: "7.5",
      r: "1",
      fill: "#fff"
    }, null, -1)
  ])]);
}
const Gi = { render: Xi };
function qi(e, t) {
  var n = Object.keys(e), r = Object.keys(t);
  return n.length !== r.length ? !1 : n.every(function(a) {
    return Object.is(e[a], t[a]);
  });
}
function Ki() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : qi, t = null;
  return function(n) {
    return t && e(t.value, n) || (t = {
      value: n
    }), t.value;
  };
}
function or(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? or(Object(n), !0).forEach(function(r) {
      mt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : or(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
var Xr = Symbol("list-item-instruction"), Zi = {
  vertical: {
    start: "top",
    end: "bottom",
    size: "height",
    point: "y"
  },
  horizontal: {
    start: "left",
    end: "right",
    size: "width",
    point: "x"
  }
};
function Ji(e) {
  var t = e.client, n = e.borderBox, r = e.axis, a = n[r.size] / 4;
  return t[r.point] <= n[r.start] + a ? "reorder-before" : t[r.point] >= n[r.end] - a ? "reorder-after" : "combine";
}
function Qi(e) {
  var t = e.client, n = e.borderBox, r = e.axis, a = n[r.size] / 2;
  return t[r.point] < n[r.start] + a ? "reorder-before" : "reorder-after";
}
var el = Ki();
function Ot() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.every(function(r) {
    return r === "available" || r === "blocked";
  });
}
function lr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.every(function(r) {
    return r === "not-available";
  });
}
function tl(e, t) {
  var n, r, a, o = t.operations, l = t.element, i = t.input, s = t.axis, u = s === void 0 ? "vertical" : s, c = {
    x: i.clientX,
    y: i.clientY
  }, p = l.getBoundingClientRect(), y = Zi[u], h = (n = o.combine) !== null && n !== void 0 ? n : "not-available", b = (r = o["reorder-before"]) !== null && r !== void 0 ? r : "not-available", w = (a = o["reorder-after"]) !== null && a !== void 0 ? a : "not-available", D = (function() {
    if (!Ot(h))
      return Ot(b, w) ? Qi({
        client: c,
        borderBox: p,
        axis: y
      }) : Ot(b) ? "reorder-before" : Ot(w) ? "reorder-after" : null;
    var f = Ji({
      client: c,
      borderBox: p,
      axis: y
    });
    return f === "reorder-after" ? lr(w) ? "combine" : f : f === "reorder-before" && lr(b) ? "combine" : f;
  })();
  if (!D)
    return e;
  var O = {
    operation: D,
    blocked: o[D] === "blocked",
    axis: u
  }, d = el(O);
  return ir(ir({}, e), {}, mt({}, Xr, d));
}
function Gr(e) {
  var t;
  return (t = e[Xr]) !== null && t !== void 0 ? t : null;
}
var nl = 2147483647;
function sr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ur(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sr(Object(n), !0).forEach(function(r) {
      mt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
var pt = 2, dr = pt / 2;
function rl(e) {
  return {
    x: Math.floor(e.x),
    y: Math.floor(e.y)
  };
}
function al(e) {
  return {
    x: e.x - dr,
    y: e.y - dr
  };
}
function ol(e) {
  return {
    x: Math.max(e.x, 0),
    y: Math.max(e.y, 0)
  };
}
function il(e) {
  return {
    x: Math.min(e.x, window.innerWidth - pt),
    y: Math.min(e.y, window.innerHeight - pt)
  };
}
function cr(e) {
  var t = e.client, n = il(ol(al(rl(t))));
  return DOMRect.fromRect({
    x: n.x,
    y: n.y,
    width: pt,
    height: pt
  });
}
function fr(e) {
  var t = e.clientRect;
  return {
    left: "".concat(t.left, "px"),
    top: "".concat(t.top, "px"),
    width: "".concat(t.width, "px"),
    height: "".concat(t.height, "px")
  };
}
function ll(e) {
  var t = e.client, n = e.clientRect;
  return (
    // is within horizontal bounds
    t.x >= n.x && t.x <= n.x + n.width && // is within vertical bounds
    t.y >= n.y && t.y <= n.y + n.height
  );
}
function sl(e) {
  var t = e.initial, n = document.createElement("div");
  n.setAttribute(Sr, "true");
  var r = cr({
    client: t
  });
  Object.assign(n.style, ur(ur({
    // Setting a background color explicitly to avoid any inherited styles.
    // Looks like this could be `opacity: 0`, but worried that _might_
    // cause the element to be ignored on some platforms.
    // When debugging, set backgroundColor to something like "red".
    backgroundColor: "transparent",
    position: "fixed",
    // Being explicit to avoid inheriting styles
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
  }, fr({
    clientRect: r
  })), {}, {
    // We want this element to absorb pointer events,
    // it's kind of the whole point 😉
    pointerEvents: "auto",
    // Want to make sure the honey pot is top of everything else.
    // Don't need to worry about native drag previews, as they will
    // have been rendered (and removed) before the honey pot is rendered
    zIndex: nl
  })), document.body.appendChild(n);
  var a = Ee.bind(window, {
    type: "pointermove",
    listener: function(l) {
      var i = {
        x: l.clientX,
        y: l.clientY
      };
      r = cr({
        client: i
      }), Object.assign(n.style, fr({
        clientRect: r
      }));
    },
    // using capture so we are less likely to be impacted by event stopping
    options: {
      capture: !0
    }
  });
  return function(l) {
    var i = l.current;
    if (a(), ll({
      client: i,
      clientRect: r
    })) {
      n.remove();
      return;
    }
    function s() {
      u(), n.remove();
    }
    var u = Ee.bindAll(window, [
      {
        type: "pointerdown",
        listener: s
      },
      {
        type: "pointermove",
        listener: s
      },
      {
        type: "focusin",
        listener: s
      },
      {
        type: "focusout",
        listener: s
      },
      // a 'pointerdown' should happen before 'dragstart', but just being super safe
      {
        type: "dragstart",
        listener: s
      },
      // if the user has dragged something out of the window
      // and then is dragging something back into the window
      // the first events we will see are "dragenter" (and then "dragover").
      // So if we see any of these we need to clear the post drag fix.
      {
        type: "dragenter",
        listener: s
      },
      {
        type: "dragover",
        listener: s
      }
      // Not adding a "wheel" event listener, as "wheel" by itself does not
      // resolve the bug.
    ], {
      // Using `capture` so less likely to be impacted by other code stopping events
      capture: !0
    });
  };
}
function ul() {
  var e = null;
  function t() {
    return e = null, Ee.bind(window, {
      type: "pointermove",
      listener: function(a) {
        e = {
          x: a.clientX,
          y: a.clientY
        };
      },
      // listening for pointer move in capture phase
      // so we are less likely to be impacted by events being stopped.
      options: {
        capture: !0
      }
    });
  }
  function n() {
    var r = null;
    return function(o) {
      var l = o.eventName, i = o.payload;
      if (l === "onDragStart") {
        var s = i.location.initial.input, u = e ?? {
          x: s.clientX,
          y: s.clientY
        };
        r = sl({
          initial: u
        });
      }
      if (l === "onDrop") {
        var c, p = i.location.current.input;
        (c = r) === null || c === void 0 || c({
          current: {
            x: p.clientX,
            y: p.clientY
          }
        }), r = null, e = null;
      }
    };
  }
  return {
    bindEvents: t,
    getOnPostDispatch: n
  };
}
var dl = "text/uri-list", gt = /* @__PURE__ */ new WeakMap();
function cl(e) {
  return gt.set(e.element, e), function() {
    gt.delete(e.element);
  };
}
var pr = ul(), Pn = Cr({
  typeKey: "element",
  defaultDropEffect: "move",
  mount: function(t) {
    return vt(pr.bindEvents(), Ee.bind(document, {
      type: "dragstart",
      listener: function(r) {
        var a, o, l, i, s, u;
        if (t.canStart(r) && !r.defaultPrevented) {
          if (!r.dataTransfer) {
            process.env.NODE_ENV !== "production" && console.warn(`
              It appears as though you have are not testing DragEvents correctly.

              - If you are unit testing, ensure you have polyfilled DragEvent.
              - If you are browser testing, ensure you are dispatching drag events correctly.

              Please see our testing guides for more information:
              https://atlassian.design/components/pragmatic-drag-and-drop/core-package/testing
            `.replace(/ {2}/g, ""));
            return;
          }
          var c = r.target;
          if (c instanceof HTMLElement) {
            var p = gt.get(c);
            if (p) {
              var y = at(r), h = {
                element: p.element,
                dragHandle: (a = p.dragHandle) !== null && a !== void 0 ? a : null,
                input: y
              };
              if (p.canDrag && !p.canDrag(h)) {
                r.preventDefault();
                return;
              }
              if (p.dragHandle) {
                var b = Ar({
                  x: y.clientX,
                  y: y.clientY
                });
                if (!p.dragHandle.contains(b)) {
                  r.preventDefault();
                  return;
                }
              }
              var w = (o = (l = p.getInitialDataForExternal) === null || l === void 0 ? void 0 : l.call(p, h)) !== null && o !== void 0 ? o : null;
              if (w)
                for (var D = 0, O = Object.entries(w); D < O.length; D++) {
                  var d = Dr(O[D], 2), f = d[0], g = d[1];
                  r.dataTransfer.setData(f, g ?? "");
                }
              xo() && !r.dataTransfer.types.includes(vn) && !r.dataTransfer.types.includes(dl) && r.dataTransfer.setData(vn, kr), r.dataTransfer.setData(Fr, "");
              var m = {
                element: p.element,
                dragHandle: (i = p.dragHandle) !== null && i !== void 0 ? i : null,
                data: (s = (u = p.getInitialData) === null || u === void 0 ? void 0 : u.call(p, h)) !== null && s !== void 0 ? s : {}
              }, v = {
                type: "element",
                payload: m,
                startedFrom: "internal"
              };
              t.start({
                event: r,
                dragType: v
              });
            }
          }
        }
      }
    }));
  },
  dispatchEventToSource: function(t) {
    var n, r, a = t.eventName, o = t.payload;
    (n = gt.get(o.source.element)) === null || n === void 0 || (r = n[a]) === null || r === void 0 || r.call(
      n,
      // I cannot seem to get the types right here.
      // TS doesn't seem to like that one event can need `nativeSetDragImage`
      // @ts-expect-error
      o
    );
  },
  onPostDispatch: pr.getOnPostDispatch()
}), fl = Pn.dropTarget, pl = Pn.monitor;
function gl(e) {
  if (process.env.NODE_ENV !== "production" && e.dragHandle && !e.element.contains(e.dragHandle) && console.warn("Drag handle element must be contained in draggable element", {
    element: e.element,
    dragHandle: e.dragHandle
  }), process.env.NODE_ENV !== "production") {
    var t = gt.get(e.element);
    t && console.warn("You have already registered a `draggable` on the same element", {
      existing: t,
      proposed: e
    });
  }
  var n = vt(
    // making the draggable register the adapter rather than drop targets
    // this is because you *must* have a draggable element to start a drag
    // but you _might_ not have any drop targets immediately
    // (You might create drop targets async)
    Pn.registerUsage(),
    cl(e),
    Ir(e.element, {
      attribute: "draggable",
      value: "true"
    })
  );
  return Ze(n);
}
var gr = (function() {
  if (typeof window > "u")
    return null;
  var e = new Image();
  return e.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", e;
})();
function vl(e) {
  var t = e.nativeSetDragImage;
  t && gr && t(gr, 0, 0);
}
const hl = ({
  reorderBefore: e,
  reorderAfter: t,
  combine: n
}) => {
  Sn(() => {
    const r = pl({
      onDrop(a) {
        const { location: o, source: l } = a;
        if (!o.current.dropTargets.length) return;
        const [i] = o.current.dropTargets;
        if (!i) return;
        const s = Number(l.data.id), u = Number(i.data.id), { operation: c } = Gr(i.data) ?? {};
        c === "reorder-before" ? e?.(u, s) : c === "reorder-after" ? t?.(u, s) : c === "combine" && n?.(u, s);
      }
    });
    xn(r);
  });
}, ml = (e, { isExpanded: t, item: n }) => {
  const r = He(!1), a = He(!1), o = He(null);
  let l = !1;
  return Sn(() => {
    const i = An(e);
    if (!i) return;
    const s = vt(
      gl({
        element: i,
        getInitialData: () => ({ id: n.value.id }),
        onDragStart: () => {
          r.value = !0, l = t.value, t.value = !1;
        },
        onDrop: () => {
          r.value = !1, l && (t.value = !0);
        },
        onGenerateDragPreview({ nativeSetDragImage: u }) {
          vl({ nativeSetDragImage: u });
        }
      }),
      fl({
        element: i,
        getData: ({ input: u, element: c }) => tl(
          { id: n.value.id },
          {
            input: u,
            element: c,
            operations: {
              "reorder-before": "available",
              "reorder-after": "available",
              combine: n.value.children ? "available" : "not-available"
            }
          }
        ),
        canDrop: ({ source: u }) => u.data.id !== n.value.id,
        onDrag: ({ self: u }) => o.value = Gr(u.data),
        onDragEnter: ({ source: u }) => {
          u.data.id !== n.value.id && (a.value = !0, t.value = !0);
        },
        onDragLeave: () => {
          a.value = !1, o.value = null;
        },
        onDrop: () => {
          a.value = !1, o.value = null;
        },
        getIsSticky: () => !0
      })
    );
    xn(s);
  }), { isDragging: r, isDraggedOver: a, instruction: o };
}, qr = (e, t) => {
  for (const n of e) {
    if (n.id === t) return n;
    if (n.children?.length) {
      const r = qr(n.children, t);
      if (r) return r;
    }
  }
  return null;
}, yl = (e) => {
  if (!e) return 0;
  let t = e.id;
  for (const n of e.children ?? []) {
    const r = yl(n);
    r > t && (t = r);
  }
  return t;
}, Pt = (e, t) => {
  const n = e.findIndex((r) => r.id === t);
  if (n !== -1) {
    const r = e[n];
    return e.splice(n, 1), r ?? null;
  }
  for (const r of e) {
    if (!r.children?.length) continue;
    const a = Pt(r.children, t);
    if (a) return a;
  }
  return null;
}, Kr = (e, t, n) => {
  const r = e.findIndex((a) => a.id === t);
  if (r !== -1)
    return e.splice(r, 0, n), !0;
  for (const a of e)
    if (a.children && Kr(a.children, t, n))
      return !0;
  return !1;
}, Zr = (e, t, n) => {
  const r = e.findIndex((a) => a.id === t);
  if (r !== -1)
    return e.splice(r + 1, 0, n), !0;
  for (const a of e)
    if (a.children && Zr(a.children, t, n))
      return !0;
  return !1;
}, Jr = (e, t = []) => {
  for (const n of e)
    t.push(n), n.children?.length && Jr(n.children, t);
  return t;
}, bl = ["data-selected", "data-dragging"], wl = ["data-operation"], El = ["data-expanded", "data-visible"], Dl = { class: "label" }, Sl = ["data-enabled"], xl = ["data-value"], Al = ["data-value"], _l = {
  key: 0,
  class: "children"
}, Tl = /* @__PURE__ */ Y({
  __name: "LayersItem",
  props: {
    item: {},
    items: {},
    flatItems: {},
    selectedItems: {},
    icons: {}
  },
  emits: ["delete"],
  setup(e, { emit: t }) {
    const n = e, r = t, a = ge("row"), o = me(() => !!n.item.children?.length), l = me(() => n.selectedItems.has(n.item)), i = He(!1), { isDragging: s, instruction: u } = ml(a, {
      item: me(() => n.item),
      isExpanded: i
    }), c = me(() => u.value?.operation), p = (y, h) => {
      if (h.ctrlKey)
        n.selectedItems.has(y) ? n.selectedItems.delete(y) : n.selectedItems.add(y);
      else if (h.shiftKey && n.selectedItems.size) {
        const b = n.flatItems.indexOf(y), w = [...n.selectedItems].map((g) => n.flatItems.indexOf(g)), [D, O] = [Math.min(...w), Math.max(...w)], d = Math.min(b, D), f = Math.max(b, O);
        for (let g = d; g <= f; g++) {
          const m = n.flatItems[g];
          m && !m.children && n.selectedItems.add(m);
        }
        y.children && y.children.forEach((g) => n.selectedItems.add(g));
        for (const g of n.flatItems)
          g.children && g.children.every((m) => n.selectedItems.has(m)) && (n.selectedItems.add(g), g.children.forEach((m) => n.selectedItems.delete(m)));
      } else
        n.selectedItems.clear(), n.selectedItems.add(y);
    };
    return (y, h) => {
      const b = la("LayersItem", !0);
      return _(), I("li", {
        class: "layer",
        "data-selected": l.value,
        "data-dragging": F(s)
      }, [
        E("div", {
          class: "row",
          ref_key: "row",
          ref: a,
          tabindex: "0",
          role: "button",
          onMousedown: h[4] || (h[4] = (w) => p(e.item, w)),
          onKeyup: h[5] || (h[5] = Ce((w) => r("delete", e.item), ["delete"]))
        }, [
          ze(E("div", {
            class: "drop-indicator",
            "data-operation": c.value
          }, null, 8, wl), [
            [sa, c.value]
          ]),
          E("button", {
            class: "chevron",
            onClick: h[0] || (h[0] = (w) => i.value = !i.value),
            "data-expanded": i.value,
            "data-visible": o.value
          }, [
            Z(F(ji))
          ], 8, El),
          E("div", Dl, [
            (_(), ce(hr(e.icons[e.item.type]))),
            Z($n, {
              modelValue: e.item.name,
              "onUpdate:modelValue": h[1] || (h[1] = (w) => e.item.name = w),
              class: "name"
            }, null, 8, ["modelValue"])
          ]),
          E("div", {
            class: "actions",
            "data-enabled": e.item.isLocked || e.item.isHidden
          }, [
            E("button", {
              class: "action",
              "data-value": e.item.isLocked,
              onClick: h[2] || (h[2] = dt((w) => e.item.isLocked = !e.item.isLocked, ["prevent"]))
            }, [
              e.item.isLocked ? (_(), ce(F(Bi), { key: 0 })) : (_(), ce(F(Yi), { key: 1 }))
            ], 8, xl),
            E("button", {
              class: "action",
              "data-value": e.item.isHidden,
              onClick: h[3] || (h[3] = dt((w) => e.item.isHidden = !e.item.isHidden, ["prevent"]))
            }, [
              e.item.isHidden ? (_(), ce(F(Ri), { key: 0 })) : (_(), ce(F(Gi), { key: 1 }))
            ], 8, Al)
          ], 8, Sl)
        ], 544),
        o.value && i.value ? (_(), I("ul", _l, [
          (_(!0), I(be, null, Be(e.item.children, (w) => (_(), ce(b, {
            item: w,
            items: e.items,
            "flat-items": e.flatItems,
            "selected-items": e.selectedItems,
            icons: e.icons,
            onDelete: (D) => r("delete", w)
          }, {
            icon: ye(({ item: D }) => [
              Ve(y.$slots, "icon", { item: D }, void 0, !0)
            ]),
            _: 3
          }, 8, ["item", "items", "flat-items", "selected-items", "icons", "onDelete"]))), 256))
        ])) : Fe("", !0)
      ], 8, bl);
    };
  }
}), Ol = /* @__PURE__ */ ae(Tl, [["__scopeId", "data-v-632c355b"]]), Il = { class: "layers" }, Cl = { class: "items" }, kl = /* @__PURE__ */ Y({
  __name: "LayersTree",
  props: {
    items: {},
    selectedItems: {},
    icons: {}
  },
  emits: ["delete", "reorder-before", "reorder-after", "combine"],
  setup(e, { emit: t }) {
    const n = e, r = me(() => Jr(n.items)), a = t;
    return hl({ reorderBefore: (s, u) => {
      const c = Pt(n.items, u);
      c && Kr(n.items, s, c);
    }, reorderAfter: (s, u) => {
      const c = Pt(n.items, u);
      c && Zr(n.items, s, c);
    }, combine: (s, u) => {
      const c = qr(n.items, s);
      if (!c) return;
      const p = Pt(n.items, u);
      p && c.children?.unshift(p);
    } }), (s, u) => (_(), I("section", Il, [
      u[1] || (u[1] = E("header", { class: "header" }, [
        E("h2", null, "Layers")
      ], -1)),
      E("ul", Cl, [
        (_(!0), I(be, null, Be(e.items, (c) => (_(), ce(Ol, {
          key: c.id,
          item: c,
          items: e.items,
          "flat-items": r.value,
          "selected-items": e.selectedItems,
          icons: e.icons,
          onDelete: u[0] || (u[0] = (p) => a("delete", p))
        }, null, 8, ["item", "items", "flat-items", "selected-items", "icons"]))), 128))
      ])
    ]));
  }
}), Ps = /* @__PURE__ */ ae(kl, [["__scopeId", "data-v-50622257"]]), Fl = { class: "field" }, $l = ["for"], Pl = ["id", "min", "max", "step"], Ms = /* @__PURE__ */ Y({
  __name: "NumberField",
  props: /* @__PURE__ */ J({
    label: {},
    min: {},
    max: {},
    step: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Q(e, "modelValue"), n = ve();
    return (r, a) => (_(), I("div", Fl, [
      E("label", { for: F(n) }, G(e.label), 9, $l),
      ze(E("input", {
        id: F(n),
        min: e.min,
        max: e.max,
        step: e.step,
        type: "number",
        "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value = o)
      }, null, 8, Pl), [
        [ct, t.value]
      ])
    ]));
  }
}), Ml = { class: "field" }, jl = ["for"], Nl = ["id"], Ll = { class: "prefixed-input" }, Rl = ["value"], Hl = { class: "prefixed-input" }, Vl = ["value"], Bl = /* @__PURE__ */ Y({
  __name: "PointField",
  props: /* @__PURE__ */ J({
    label: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Q(e, "modelValue"), n = ve(), r = (o) => {
      const l = +o.target.value;
      t.value = { x: l, y: t.value.y };
    }, a = (o) => {
      const l = +o.target.value;
      t.value = { x: t.value.x, y: l };
    };
    return (o, l) => (_(), I("div", Ml, [
      E("label", { for: F(n) }, G(e.label), 9, jl),
      E("div", {
        id: F(n),
        class: "inputs"
      }, [
        E("div", Ll, [
          l[0] || (l[0] = $e(" x ", -1)),
          E("input", {
            type: "number",
            value: t.value.x,
            onChange: r
          }, null, 40, Rl)
        ]),
        E("div", Hl, [
          l[1] || (l[1] = $e(" y ", -1)),
          E("input", {
            type: "number",
            value: t.value.y,
            onChange: a
          }, null, 40, Vl)
        ])
      ], 8, Nl)
    ]));
  }
}), js = /* @__PURE__ */ ae(Bl, [["__scopeId", "data-v-91c4facc"]]), zl = { class: "panel" }, Wl = { class: "name-settings" }, Yl = {
  key: 0,
  class: "unsaved"
}, Ul = {
  method: "dialog",
  class: "flow"
}, Xl = ["onClick"], Gl = { class: "flow" }, ql = /* @__PURE__ */ Y({
  __name: "ProjectProperties",
  props: /* @__PURE__ */ J({
    fileType: {},
    hasUnsavedChanges: { type: Boolean }
  }, {
    name: { required: !0 },
    nameModifiers: {}
  }),
  emits: /* @__PURE__ */ J(["open", "save", "clear"], ["update:name"]),
  setup(e, { emit: t }) {
    const n = Q(e, "name"), r = t, a = vr(), o = ge("clearDialog"), l = ge("settingsDialog"), i = async () => {
      await o.value?.prompt() === "submit" && r("clear");
    };
    return (s, u) => (_(), I(be, null, [
      E("div", zl, [
        Z(jo, {
          "file-type": e.fileType,
          onOpen: u[0] || (u[0] = (c) => r("open", c)),
          onSave: u[1] || (u[1] = (c) => r("save")),
          onClear: u[2] || (u[2] = (c) => i())
        }, null, 8, ["file-type"]),
        E("div", Wl, [
          E("h2", null, [
            Z($n, {
              modelValue: n.value,
              "onUpdate:modelValue": u[3] || (u[3] = (c) => n.value = c)
            }, null, 8, ["modelValue"])
          ]),
          e.hasUnsavedChanges ? (_(), I("div", Yl)) : Fe("", !0),
          F(a).settings ? (_(), I("button", {
            key: 1,
            onClick: u[4] || (u[4] = (c) => l.value?.open()),
            "data-theme": "dark"
          }, [
            Z(F(mr))
          ])) : Fe("", !0)
        ])
      ]),
      Z(cn, {
        ref_key: "clearDialog",
        ref: o,
        style: { margin: "auto" }
      }, {
        default: ye(({ close: c }) => [
          E("form", Ul, [
            Ve(s.$slots, "clear", {}, () => [
              u[5] || (u[5] = E("p", null, "Are you sure?", -1))
            ], !0),
            E("menu", null, [
              E("button", {
                type: "reset",
                onClick: c
              }, "Cancel", 8, Xl),
              u[6] || (u[6] = E("button", {
                type: "submit",
                value: "submit",
                "data-theme": "positive",
                autofocus: ""
              }, " Clear ", -1))
            ])
          ])
        ]),
        _: 3
      }, 512),
      F(a).settings ? (_(), ce(cn, {
        key: 0,
        ref_key: "settingsDialog",
        ref: l
      }, {
        default: ye(() => [
          E("div", Gl, [
            u[7] || (u[7] = E("h2", null, "Settings", -1)),
            Ve(s.$slots, "settings", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 512)) : Fe("", !0)
    ], 64));
  }
}), Ns = /* @__PURE__ */ ae(ql, [["__scopeId", "data-v-df8ecac9"]]), Kl = { class: "field" }, Zl = ["for"], Jl = ["id"], Ql = {
  key: 0,
  value: ""
}, es = ["label"], ts = ["value"], ns = ["value"], Ls = /* @__PURE__ */ Y({
  __name: "SelectField",
  props: /* @__PURE__ */ J({
    label: {},
    options: {},
    allowEmpty: { type: Boolean }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Q(e, "modelValue"), n = ve(), r = (a) => !!a.options;
    return (a, o) => (_(), I("div", Kl, [
      E("label", { for: F(n) }, G(e.label), 9, Zl),
      ze(E("select", {
        id: F(n),
        "onUpdate:modelValue": o[0] || (o[0] = (l) => t.value = l)
      }, [
        e.allowEmpty ? (_(), I("option", Ql, "–")) : Fe("", !0),
        (_(!0), I(be, null, Be(e.options, (l) => (_(), I(be, null, [
          r(l) ? (_(), I("optgroup", {
            key: 0,
            label: l.label
          }, [
            (_(!0), I(be, null, Be(l.options, ({ value: i, label: s }) => (_(), I("option", { value: i }, G(s), 9, ts))), 256))
          ], 8, es)) : (_(), I("option", {
            key: 1,
            value: l.value
          }, G(l.label), 9, ns))
        ], 64))), 256))
      ], 8, Jl), [
        [ua, t.value]
      ])
    ]));
  }
}), rs = { class: "field" }, as = ["for"], os = { class: "inputs" }, is = { class: "prefixed-input" }, ls = ["value"], ss = { class: "prefixed-input" }, us = ["value"], ds = /* @__PURE__ */ Y({
  __name: "SizeField",
  props: /* @__PURE__ */ J({
    label: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Q(e, "modelValue"), n = ve(), r = (o) => {
      const l = +o.target.value;
      t.value = { width: l, height: t.value.height };
    }, a = (o) => {
      const l = +o.target.value;
      t.value = { width: t.value.width, height: l };
    };
    return (o, l) => (_(), I("div", rs, [
      E("label", { for: F(n) }, G(e.label), 9, as),
      E("div", os, [
        E("div", is, [
          l[0] || (l[0] = $e(" w ", -1)),
          E("input", {
            type: "number",
            value: t.value.width,
            onChange: r
          }, null, 40, ls)
        ]),
        E("div", ss, [
          l[1] || (l[1] = $e(" h ", -1)),
          E("input", {
            type: "number",
            value: t.value.height,
            onChange: a
          }, null, 40, us)
        ])
      ])
    ]));
  }
}), Rs = /* @__PURE__ */ ae(ds, [["__scopeId", "data-v-908229cc"]]), cs = { class: "field" }, fs = ["for"], ps = /* @__PURE__ */ Y({
  __name: "SwitchField",
  props: /* @__PURE__ */ J({
    label: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Q(e, "modelValue"), n = ve();
    return (r, a) => (_(), I("div", cs, [
      E("label", { for: F(n) }, G(e.label), 9, fs),
      Z(F(va), {
        id: F(n),
        modelValue: t.value,
        "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value = o),
        class: "switch-root"
      }, {
        default: ye(() => [
          Z(F(ha), { class: "switch-thumb" })
        ]),
        _: 1
      }, 8, ["id", "modelValue"])
    ]));
  }
}), Hs = /* @__PURE__ */ ae(ps, [["__scopeId", "data-v-7ff302ef"]]), gs = { class: "field" }, vs = ["for"], hs = ["id", "disabled"], Vs = /* @__PURE__ */ Y({
  __name: "TextAreaField",
  props: /* @__PURE__ */ J({
    label: {},
    disabled: { type: Boolean }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Q(e, "modelValue"), n = ve();
    return (r, a) => (_(), I("div", gs, [
      E("label", { for: F(n) }, G(e.label), 9, vs),
      ze(E("textarea", {
        id: F(n),
        type: "text",
        "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value = o),
        disabled: e.disabled,
        rows: "5"
      }, null, 8, hs), [
        [ct, t.value]
      ])
    ]));
  }
}), ms = { class: "field" }, ys = ["for"], bs = ["id", "disabled"], Bs = /* @__PURE__ */ Y({
  __name: "TextField",
  props: /* @__PURE__ */ J({
    label: {},
    disabled: { type: Boolean }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Q(e, "modelValue"), n = ve();
    return (r, a) => (_(), I("div", ms, [
      E("label", { for: F(n) }, G(e.label), 9, ys),
      ze(E("input", {
        id: F(n),
        type: "text",
        "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value = o),
        disabled: e.disabled
      }, null, 8, bs), [
        [ct, t.value]
      ])
    ]));
  }
}), dn = (e) => !e || e.length === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1), ws = {
  class: "tool-bar",
  role: "toolbar",
  "aria-label": "Tools"
}, Es = ["title", "tabindex", "aria-pressed", "onClick"], Ds = /* @__PURE__ */ Y({
  __name: "ToolBar",
  props: {
    tools: {},
    selected: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, r = t, a = ge("buttons"), o = me(() => Object.values(n.tools)), l = () => {
      let u = o.value.findIndex((c) => c.id === n.selected);
      u = u === 0 ? o.value.length - 1 : u - 1, a.value?.[u]?.focus(), r("select", o.value[u].id);
    }, i = () => {
      let u = o.value.findIndex((c) => c.id === n.selected);
      u = u === o.value.length - 1 ? 0 : u + 1, a.value?.[u]?.focus(), r("select", o.value[u].id);
    }, s = ({ id: u, shortcut: c }) => c ? `${dn(u)} ${dn(c)}` : dn(u);
    return (u, c) => (_(), I("div", ws, [
      (_(!0), I(be, null, Be(e.tools, (p) => (_(), I("button", {
        title: s(p),
        tabindex: p.id === n.selected ? 0 : -1,
        "aria-pressed": p.id === n.selected,
        ref_for: !0,
        ref_key: "buttons",
        ref: a,
        onClick: (y) => r("select", p.id),
        onKeydown: [
          Ce(l, ["up"]),
          Ce(i, ["down"])
        ]
      }, [
        (_(), ce(hr(p.icon)))
      ], 40, Es))), 256))
    ]));
  }
}), zs = /* @__PURE__ */ ae(Ds, [["__scopeId", "data-v-2fc060f8"]]), Ss = { class: "field" }, xs = ["for"], As = ["id", "min", "max", "step", "value"], Ws = /* @__PURE__ */ Y({
  __name: "SliderField",
  props: /* @__PURE__ */ J({
    label: {},
    min: {},
    max: {},
    step: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Q(e, "modelValue"), n = ve();
    return (r, a) => (_(), I("div", Ss, [
      E("label", { for: F(n) }, G(e.label), 9, xs),
      E("input", {
        id: F(n),
        type: "range",
        min: e.min,
        max: e.max,
        step: e.step,
        value: t.value,
        onInput: a[0] || (a[0] = (o) => t.value = +o.target.value)
      }, null, 40, As)
    ]));
  }
});
export {
  Os as CheckboxField,
  Cs as CodeViewer,
  ks as ColorField,
  jo as FileMenu,
  Fs as FramesList,
  $s as GapField,
  $n as InlineEdit,
  Ol as LayersItem,
  Ps as LayersTree,
  cn as ModalDialog,
  Ms as NumberField,
  js as PointField,
  Ns as ProjectProperties,
  Ls as SelectField,
  Rs as SizeField,
  Ws as SliderField,
  Hs as SwitchField,
  Vs as TextAreaField,
  Bs as TextField,
  zs as ToolBar,
  Ia as downloadFile,
  qr as findInTree,
  Jr as flattenTree,
  ve as getInputId,
  yl as getMaxTreeId,
  Zr as insertIntoTreeAfter,
  Kr as insertIntoTreeBefore,
  Pt as removeFromTree,
  Is as stripExtension,
  dn as upperFirst
};
