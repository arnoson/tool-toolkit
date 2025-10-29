import { createElementBlock as I, openBlock as _, createElementVNode as E, defineComponent as z, mergeModels as J, useModel as Q, createVNode as K, unref as F, toDisplayString as Y, withCtx as ye, onMounted as ra, nextTick as Dn, getCurrentScope as aa, onScopeDispose as oa, watch as ia, getCurrentInstance as la, computed as ge, toValue as Ge, useTemplateRef as he, renderSlot as ze, useSlots as vr, createBlock as ue, createCommentVNode as Fe, normalizeStyle as jn, Fragment as ve, renderList as Pe, ref as $e, withDirectives as Me, vModelSelect as hr, watchEffect as Sn, onWatcherCleanup as xn, isRef as sa, withKeys as Ce, withModifiers as dt, createTextVNode as je, vModelText as ct, resolveComponent as ua, vShow as da, resolveDynamicComponent as mr } from "vue";
import { CheckboxRoot as ca, CheckboxIndicator as fa, PopoverRoot as pa, PopoverTrigger as ga, PopoverContent as va, SwitchRoot as ha, SwitchThumb as ma } from "reka-ui";
let ba = 0;
const me = () => `input-${ba++}`, ya = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "15",
  height: "16",
  fill: "none"
};
function wa(e, t) {
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
const Ea = { render: wa }, Da = { class: "field" }, Sa = ["for"], xa = /* @__PURE__ */ z({
  __name: "CheckboxField",
  props: /* @__PURE__ */ J({
    label: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Q(e, "modelValue"), n = me();
    return (r, a) => (_(), I("div", Da, [
      E("label", { for: F(n) }, Y(e.label), 9, Sa),
      K(F(ca), {
        modelValue: t.value,
        "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value = o),
        id: F(n),
        class: "checkbox"
      }, {
        default: ye(() => [
          K(F(fa), { class: "indicator" }, {
            default: ye(() => [
              K(F(Ea))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "id"])
    ]));
  }
}), te = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, $s = /* @__PURE__ */ te(xa, [["__scopeId", "data-v-a51a346c"]]);
var Nn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Aa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yt = { exports: {} }, Ln;
function _a() {
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
          encode: function c(f) {
            return f instanceof s ? new s(f.type, c(f.content), f.alias) : Array.isArray(f) ? f.map(c) : f.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
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
          type: function(c) {
            return Object.prototype.toString.call(c).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(c) {
            return c.__id || Object.defineProperty(c, "__id", { value: ++o }), c.__id;
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
          clone: function c(f, g) {
            g = g || {};
            var m, h;
            switch (i.util.type(f)) {
              case "Object":
                if (h = i.util.objId(f), g[h])
                  return g[h];
                m = /** @type {Record<string, any>} */
                {}, g[h] = m;
                for (var A in f)
                  f.hasOwnProperty(A) && (m[A] = c(f[A], g));
                return (
                  /** @type {any} */
                  m
                );
              case "Array":
                return h = i.util.objId(f), g[h] ? g[h] : (m = [], g[h] = m, /** @type {Array} */
                /** @type {any} */
                f.forEach(function(T, x) {
                  m[x] = c(T, g);
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
          getLanguage: function(c) {
            for (; c; ) {
              var f = a.exec(c.className);
              if (f)
                return f[1].toLowerCase();
              c = c.parentElement;
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
          setLanguage: function(c, f) {
            c.className = c.className.replace(RegExp(a, "gi"), ""), c.classList.add("language-" + f);
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
              var c = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(m.stack) || [])[1];
              if (c) {
                var f = document.getElementsByTagName("script");
                for (var g in f)
                  if (f[g].src == c)
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
          isActive: function(c, f, g) {
            for (var m = "no-" + f; c; ) {
              var h = c.classList;
              if (h.contains(f))
                return !0;
              if (h.contains(m))
                return !1;
              c = c.parentElement;
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
          extend: function(c, f) {
            var g = i.util.clone(i.languages[c]);
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
          insertBefore: function(c, f, g, m) {
            m = m || /** @type {any} */
            i.languages;
            var h = m[c], A = {};
            for (var T in h)
              if (h.hasOwnProperty(T)) {
                if (T == f)
                  for (var x in g)
                    g.hasOwnProperty(x) && (A[x] = g[x]);
                g.hasOwnProperty(T) || (A[T] = h[T]);
              }
            var P = m[c];
            return m[c] = A, i.languages.DFS(i.languages, function(N, L) {
              L === P && N != c && (this[N] = A);
            }), A;
          },
          // Traverse a language definition with Depth First Search
          DFS: function c(f, g, m, h) {
            h = h || {};
            var A = i.util.objId;
            for (var T in f)
              if (f.hasOwnProperty(T)) {
                g.call(f, T, f[T], m || T);
                var x = f[T], P = i.util.type(x);
                P === "Object" && !h[A(x)] ? (h[A(x)] = !0, c(x, g, null, h)) : P === "Array" && !h[A(x)] && (h[A(x)] = !0, c(x, g, T, h));
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
        highlightAll: function(c, f) {
          i.highlightAllUnder(document, c, f);
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
        highlightAllUnder: function(c, f, g) {
          var m = {
            callback: g,
            container: c,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          i.hooks.run("before-highlightall", m), m.elements = Array.prototype.slice.apply(m.container.querySelectorAll(m.selector)), i.hooks.run("before-all-elements-highlight", m);
          for (var h = 0, A; A = m.elements[h++]; )
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
        highlightElement: function(c, f, g) {
          var m = i.util.getLanguage(c), h = i.languages[m];
          i.util.setLanguage(c, m);
          var A = c.parentElement;
          A && A.nodeName.toLowerCase() === "pre" && i.util.setLanguage(A, m);
          var T = c.textContent, x = {
            element: c,
            language: m,
            grammar: h,
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
        highlight: function(c, f, g) {
          var m = {
            code: c,
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
        tokenize: function(c, f) {
          var g = f.rest;
          if (g) {
            for (var m in g)
              f[m] = g[m];
            delete f.rest;
          }
          var h = new p();
          return w(h, h.head, c), d(c, h, f, h.head, 0), y(h);
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
          add: function(c, f) {
            var g = i.hooks.all;
            g[c] = g[c] || [], g[c].push(f);
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
          run: function(c, f) {
            var g = i.hooks.all[c];
            if (!(!g || !g.length))
              for (var m = 0, h; h = g[m++]; )
                h(f);
          }
        },
        Token: s
      };
      r.Prism = i;
      function s(c, f, g, m) {
        this.type = c, this.content = f, this.alias = g, this.length = (m || "").length | 0;
      }
      s.stringify = function c(f, g) {
        if (typeof f == "string")
          return f;
        if (Array.isArray(f)) {
          var m = "";
          return f.forEach(function(P) {
            m += c(P, g);
          }), m;
        }
        var h = {
          type: f.type,
          content: c(f.content, g),
          tag: "span",
          classes: ["token", f.type],
          attributes: {},
          language: g
        }, A = f.alias;
        A && (Array.isArray(A) ? Array.prototype.push.apply(h.classes, A) : h.classes.push(A)), i.hooks.run("wrap", h);
        var T = "";
        for (var x in h.attributes)
          T += " " + x + '="' + (h.attributes[x] || "").replace(/"/g, "&quot;") + '"';
        return "<" + h.tag + ' class="' + h.classes.join(" ") + '"' + T + ">" + h.content + "</" + h.tag + ">";
      };
      function u(c, f, g, m) {
        c.lastIndex = f;
        var h = c.exec(g);
        if (h && m && h[1]) {
          var A = h[1].length;
          h.index += A, h[0] = h[0].slice(A);
        }
        return h;
      }
      function d(c, f, g, m, h, A) {
        for (var T in g)
          if (!(!g.hasOwnProperty(T) || !g[T])) {
            var x = g[T];
            x = Array.isArray(x) ? x : [x];
            for (var P = 0; P < x.length; ++P) {
              if (A && A.cause == T + "," + P)
                return;
              var N = x[P], L = N.inside, X = !!N.lookbehind, ne = !!N.greedy, be = N.alias;
              if (ne && !N.pattern.global) {
                var G = N.pattern.toString().match(/[imsuy]*$/)[0];
                N.pattern = RegExp(N.pattern.source, G + "g");
              }
              for (var oe = N.pattern || N, H = m.next, de = h; H !== f.tail && !(A && de >= A.reach); de += H.value.length, H = H.next) {
                var Ne = H.value;
                if (f.length > c.length)
                  return;
                if (!(Ne instanceof s)) {
                  var Le = 1, ie;
                  if (ne) {
                    if (ie = u(oe, de, c, X), !ie || ie.index >= c.length)
                      break;
                    var wt = ie.index, ta = ie.index + ie[0].length, _e = de;
                    for (_e += H.value.length; wt >= _e; )
                      H = H.next, _e += H.value.length;
                    if (_e -= H.value.length, de = _e, H.value instanceof s)
                      continue;
                    for (var Je = H; Je !== f.tail && (_e < ta || typeof Je.value == "string"); Je = Je.next)
                      Le++, _e += Je.value.length;
                    Le--, Ne = c.slice(de, _e), ie.index -= de;
                  } else if (ie = u(oe, 0, Ne, X), !ie)
                    continue;
                  var wt = ie.index, Et = ie[0], zt = Ne.slice(0, wt), Mn = Ne.slice(wt + Et.length), Wt = de + Ne.length;
                  A && Wt > A.reach && (A.reach = Wt);
                  var Dt = H.prev;
                  zt && (Dt = w(f, Dt, zt), de += zt.length), v(f, Dt, Le);
                  var na = new s(T, L ? i.tokenize(Et, L) : Et, be, Et);
                  if (H = w(f, Dt, na), Mn && w(f, H, Mn), Le > 1) {
                    var Ut = {
                      cause: T + "," + P,
                      reach: Wt
                    };
                    d(c, f, g, H.prev, de, Ut), A && Ut.reach > A.reach && (A.reach = Ut.reach);
                  }
                }
              }
            }
          }
      }
      function p() {
        var c = { value: null, prev: null, next: null }, f = { value: null, prev: c, next: null };
        c.next = f, this.head = c, this.tail = f, this.length = 0;
      }
      function w(c, f, g) {
        var m = f.next, h = { value: g, prev: f, next: m };
        return f.next = h, m.prev = h, c.length++, h;
      }
      function v(c, f, g) {
        for (var m = f.next, h = 0; h < g && m !== c.tail; h++)
          m = m.next;
        f.next = m, m.prev = f, c.length -= h;
      }
      function y(c) {
        for (var f = [], g = c.head.next; g !== c.tail; )
          f.push(g.value), g = g.next;
        return f;
      }
      if (!r.document)
        return r.addEventListener && (i.disableWorkerMessageHandler || r.addEventListener("message", function(c) {
          var f = JSON.parse(c.data), g = f.language, m = f.code, h = f.immediateClose;
          r.postMessage(i.highlight(m, i.languages[g], g)), h && r.close();
        }, !1)), i;
      var b = i.util.currentScript();
      b && (i.filename = b.src, b.hasAttribute("data-manual") && (i.manual = !0));
      function D() {
        i.manual || i.highlightAll();
      }
      if (!i.manual) {
        var O = document.readyState;
        O === "loading" || O === "interactive" && b && b.defer ? document.addEventListener("DOMContentLoaded", D) : window.requestAnimationFrame ? window.requestAnimationFrame(D) : window.setTimeout(D, 16);
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
      var r = "Loading…", a = function(b, D) {
        return "✖ Error " + b + " while fetching file: " + D;
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
      }, i = "data-src-status", s = "loading", u = "loaded", d = "failed", p = "pre[data-src]:not([" + i + '="' + u + '"]):not([' + i + '="' + s + '"])';
      function w(b, D, O) {
        var c = new XMLHttpRequest();
        c.open("GET", b, !0), c.onreadystatechange = function() {
          c.readyState == 4 && (c.status < 400 && c.responseText ? D(c.responseText) : c.status >= 400 ? O(a(c.status, c.statusText)) : O(o));
        }, c.send(null);
      }
      function v(b) {
        var D = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b || "");
        if (D) {
          var O = Number(D[1]), c = D[2], f = D[3];
          return c ? f ? [O, Number(f)] : [O, void 0] : [O, O];
        }
      }
      n.hooks.add("before-highlightall", function(b) {
        b.selector += ", " + p;
      }), n.hooks.add("before-sanity-check", function(b) {
        var D = (
          /** @type {HTMLPreElement} */
          b.element
        );
        if (D.matches(p)) {
          b.code = "", D.setAttribute(i, s);
          var O = D.appendChild(document.createElement("CODE"));
          O.textContent = r;
          var c = D.getAttribute("data-src"), f = b.language;
          if (f === "none") {
            var g = (/\.(\w+)$/.exec(c) || [, "none"])[1];
            f = l[g] || g;
          }
          n.util.setLanguage(O, f), n.util.setLanguage(D, f);
          var m = n.plugins.autoloader;
          m && m.loadLanguages(f), w(
            c,
            function(h) {
              D.setAttribute(i, u);
              var A = v(D.getAttribute("data-range"));
              if (A) {
                var T = h.split(/\r\n?|\n/g), x = A[0], P = A[1] == null ? T.length : A[1];
                x < 0 && (x += T.length), x = Math.max(0, Math.min(x - 1, T.length)), P < 0 && (P += T.length), P = Math.max(0, Math.min(P, T.length)), h = T.slice(x, P).join(`
`), D.hasAttribute("data-start") || D.setAttribute("data-start", String(x + 1));
              }
              O.textContent = h, n.highlightElement(O);
            },
            function(h) {
              D.setAttribute(i, d), O.textContent = h;
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
          for (var O = (D || document).querySelectorAll(p), c = 0, f; f = O[c++]; )
            n.highlightElement(f);
        }
      };
      var y = !1;
      n.fileHighlight = function() {
        y || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), y = !0), n.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    })();
  })(Yt)), Yt.exports;
}
var Ta = _a();
const Xt = /* @__PURE__ */ Aa(Ta), Oa = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "22",
  height: "22",
  fill: "none"
};
function Ia(e, t) {
  return _(), I("svg", Oa, [...t[0] || (t[0] = [
    E("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.188 11.5a.687.687 0 1 1-1.375 0 .687.687 0 0 1 1.375 0m5.5 0a.687.687 0 1 1-1.375 0 .687.687 0 0 1 1.374 0m5.5 0a.687.687 0 1 1-1.375 0 .687.687 0 0 1 1.374 0"
    }, null, -1)
  ])]);
}
const br = { render: Ia }, Ca = (e, t) => {
  const n = new Blob([t], { type: "text/plain" }), r = window.URL.createObjectURL(n), a = document.createElement("a");
  a.href = r, a.download = e, document.body.appendChild(a), a.click(), document.body.removeChild(a), window.URL.revokeObjectURL(r);
}, Ps = (e) => e.split(".").slice(0, -1).join(".");
function yr(e, t) {
  return aa() ? (oa(e, t), !0) : !1;
}
const wr = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ka = Object.prototype.toString, Fa = (e) => ka.call(e) === "[object Object]";
function Gt(e) {
  return Array.isArray(e) ? e : [e];
}
function $a(e) {
  return la();
}
function Pa(e, t = !0, n) {
  $a() ? ra(e, n) : t ? e() : Dn(e);
}
function Ma(e, t, n) {
  return ia(e, t, {
    ...n,
    immediate: !0
  });
}
const ja = wr ? window : void 0, Na = wr ? window.document : void 0;
function An(e) {
  var t;
  const n = Ge(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function La(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, r = (i, s, u, d) => (i.addEventListener(s, u, d), () => i.removeEventListener(s, u, d)), a = ge(() => {
    const i = Gt(Ge(e[0])).filter((s) => s != null);
    return i.every((s) => typeof s != "string") ? i : void 0;
  }), o = Ma(() => {
    var i, s;
    return [
      (i = (s = a.value) === null || s === void 0 ? void 0 : s.map((u) => An(u))) !== null && i !== void 0 ? i : [ja].filter((u) => u != null),
      Gt(Ge(a.value ? e[1] : e[0])),
      Gt(F(a.value ? e[2] : e[1])),
      Ge(a.value ? e[3] : e[2])
    ];
  }, ([i, s, u, d]) => {
    if (n(), !i?.length || !s?.length || !u?.length) return;
    const p = Fa(d) ? { ...d } : d;
    t.push(...i.flatMap((w) => s.flatMap((v) => u.map((y) => r(w, v, y, p)))));
  }, { flush: "post" }), l = () => {
    o(), n();
  };
  return yr(n), l;
}
const cn = /* @__PURE__ */ z({
  __name: "ModalDialog",
  setup(e, { expose: t }) {
    const n = he("dialog"), r = he("content"), a = () => n.value?.showModal(), o = () => n.value?.close(), l = () => new Promise((s) => {
      a(), La(n, "close", () => s(n.value?.returnValue), { once: !0 });
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
        ze(s.$slots, "default", {
          open: a,
          close: o
        })
      ], 512)
    ], 544));
  }
}), Ra = { class: "code-viewer" }, Va = { class: "menu" }, Ha = { class: "code language-cpp" }, Ba = ["innerHTML"], za = /* @__PURE__ */ z({
  __name: "CodeViewer",
  props: {
    code: {},
    language: {},
    fileName: {}
  },
  setup(e) {
    Xt.manual = !0;
    const t = e, n = vr(), r = ge(
      () => Xt.highlight(t.code, Xt.languages[t.language], t.language)
    ), a = he("settings"), o = async () => await navigator.clipboard.writeText(t.code);
    return (l, i) => (_(), I("div", Ra, [
      E("div", Va, [
        E("button", {
          style: { "margin-left": "auto" },
          onClick: o
        }, "Copy"),
        E("button", {
          onClick: i[0] || (i[0] = (s) => F(Ca)(e.fileName, e.code))
        }, "Download"),
        F(n).settings ? (_(), I("button", {
          key: 0,
          onClick: i[1] || (i[1] = (s) => a.value?.open()),
          class: "settings-trigger",
          "data-theme": "dark"
        }, [
          K(F(br))
        ])) : Fe("", !0)
      ]),
      E("pre", Ha, [
        E("code", { innerHTML: r.value }, null, 8, Ba)
      ]),
      F(n).settings ? (_(), ue(cn, {
        key: 0,
        ref: "settings",
        class: "settings"
      }, {
        default: ye(() => [
          ze(l.$slots, "settings", {}, void 0, !0)
        ]),
        _: 3
      }, 512)) : Fe("", !0)
    ]));
  }
}), Ms = /* @__PURE__ */ te(za, [["__scopeId", "data-v-748127da"]]), Wa = { class: "field swatch-field" }, Ua = ["for"], Ya = { class: "label" }, Xa = { class: "swatches" }, Ga = ["onClick", "title"], qa = /* @__PURE__ */ z({
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
    const t = e, n = Q(e, "modelValue"), r = me(), a = ge(() => t.swatches.find((o) => o.value === n.value));
    return (o, l) => (_(), I("div", Wa, [
      E("label", { for: F(r) }, Y(e.label), 9, Ua),
      K(F(pa), null, {
        default: ye(() => [
          K(F(ga), {
            class: "preview",
            id: F(r)
          }, {
            default: ye(() => [
              E("div", {
                class: "swatch",
                style: jn({ backgroundColor: a.value?.color })
              }, null, 4),
              E("div", Ya, Y(a.value?.label), 1)
            ]),
            _: 1
          }, 8, ["id"]),
          K(F(va), {
            align: "end",
            "side-offset": 5
          }, {
            default: ye(() => [
              E("div", Xa, [
                (_(!0), I(ve, null, Pe(e.swatches, (i) => (_(), I("button", {
                  onClick: (s) => n.value = i.value,
                  class: "swatch",
                  title: i.label,
                  style: jn({ backgroundColor: i.color })
                }, null, 12, Ga))), 256))
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}), js = /* @__PURE__ */ te(qa, [["__scopeId", "data-v-002faf03"]]);
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
function Ka(e) {
  if (Array.isArray(e)) return fn(e);
}
function Za(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Er(e, t) {
  if (e) {
    if (typeof e == "string") return fn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fn(e, t) : void 0;
  }
}
function Ja() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ht(e) {
  return Ka(e) || Za(e) || Er(e) || Ja();
}
var qt = {}, Qe = {}, Rn;
function Dr() {
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
var Re = {}, Vn;
function Qa() {
  if (Vn) return Re;
  Vn = 1;
  var e = Re && Re.__assign || function() {
    return e = Object.assign || function(o) {
      for (var l, i = 1, s = arguments.length; i < s; i++) {
        l = arguments[i];
        for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (o[u] = l[u]);
      }
      return o;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Re, "__esModule", { value: !0 }), Re.bindAll = void 0;
  var t = /* @__PURE__ */ Dr();
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
      var d = r(u, i);
      return (0, t.bind)(o, d);
    });
    return function() {
      s.forEach(function(d) {
        return d();
      });
    };
  }
  return Re.bindAll = a, Re;
}
var Hn;
function eo() {
  return Hn || (Hn = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = e.bind = void 0;
    var t = /* @__PURE__ */ Dr();
    Object.defineProperty(e, "bind", { enumerable: !0, get: function() {
      return t.bind;
    } });
    var n = /* @__PURE__ */ Qa();
    Object.defineProperty(e, "bindAll", { enumerable: !0, get: function() {
      return n.bindAll;
    } });
  })(qt)), qt;
}
var Ee = /* @__PURE__ */ eo();
function to(e) {
  if (Array.isArray(e)) return e;
}
function no(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, o, l, i = [], s = !0, u = !1;
    try {
      if (o = (n = n.call(e)).next, t !== 0) for (; !(s = (r = o.call(n)).done) && (i.push(r.value), i.length !== t); s = !0) ;
    } catch (d) {
      u = !0, a = d;
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
function ro() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sr(e, t) {
  return to(e) || no(e, t) || Er(e, t) || ro();
}
var xr = "data-pdnd-honey-pot";
function Ar(e) {
  return e instanceof Element && e.hasAttribute(xr);
}
function _r(e) {
  var t = document.elementsFromPoint(e.x, e.y), n = Sr(t, 2), r = n[0], a = n[1];
  return r ? Ar(r) ? a ?? null : r : null;
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
var Tr = Ze(function() {
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
function ao(e) {
  var t = e.dragEnter;
  return ht() ? t.hasOwnProperty(Mt.isEnteringWindow) : !1;
}
function oo(e) {
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
function io(e) {
  return "nodeName" in e;
}
function Or(e) {
  return io(e) && e.ownerDocument !== document;
}
function lo(e) {
  var t = e.dragLeave, n = t.type, r = t.relatedTarget;
  return n !== "dragleave" ? !1 : ht() ? oo({
    dragLeave: t
  }) : r == null ? !0 : Tr() ? Or(r) : r instanceof HTMLIFrameElement;
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
var so = function(t) {
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
}, Kt = so(function(e) {
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
function uo(e) {
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
      var u = s.nativeSetDragImage, d = {
        current: n,
        previous: a,
        initial: n
      };
      o({
        eventName: "onGenerateDragPreview",
        payload: {
          source: t,
          location: d,
          nativeSetDragImage: u
        }
      }), St.schedule(function() {
        o({
          eventName: "onDragStart",
          payload: {
            source: t,
            location: d
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
        var d = {
          initial: n,
          previous: a,
          current: u
        };
        o({
          eventName: "onDrag",
          payload: {
            source: t,
            location: d
          }
        });
      });
    },
    drop: function(s) {
      var u = s.current, d = s.updatedSourcePayload;
      St.flush(), Kt.cancel(), o({
        eventName: "onDrop",
        payload: {
          source: d ?? t,
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
function Ir() {
  return !pn.isActive;
}
function co(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function fo(e) {
  var t = e.current, n = e.next;
  if (t.length !== n.length)
    return !0;
  for (var r = 0; r < t.length; r++)
    if (t[r].element !== n[r].element)
      return !0;
  return !1;
}
function po(e) {
  var t = e.event, n = e.dragType, r = e.getDropTargetsOver, a = e.dispatchEvent;
  if (!Ir())
    return;
  var o = go({
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
  var i = uo({
    source: n.payload,
    dispatchEvent: a,
    initial: o
  });
  function s(v) {
    var y = fo({
      current: l.current.dropTargets,
      next: v.dropTargets
    });
    l.current = v, y && i.dragUpdate({
      current: l.current
    });
  }
  function u(v) {
    var y = at(v), b = Ar(v.target) ? _r({
      x: y.clientX,
      y: y.clientY
    }) : v.target, D = r({
      target: b,
      input: y,
      source: n.payload,
      current: l.current.dropTargets
    });
    D.length && (v.preventDefault(), Zt({
      event: v,
      current: D
    })), s({
      dropTargets: D,
      input: y
    });
  }
  function d() {
    l.current.dropTargets.length && s({
      dropTargets: [],
      input: l.current.input
    }), i.drop({
      current: l.current,
      updatedSourcePayload: null
    }), p();
  }
  function p() {
    pn.isActive = !1, w();
  }
  var w = Ee.bindAll(
    window,
    [{
      // 👋 Note: we are repurposing the `dragover` event as our `drag` event
      // this is because firefox does not publish pointer coordinates during
      // a `drag` event, but does for every other type of drag event
      // `dragover` fires on all elements that are being dragged over
      // Because we are binding to `window` - our `dragover` is effectively the same as a `drag`
      // 🦊😤
      type: "dragover",
      listener: function(y) {
        u(y), i.drag({
          current: l.current
        });
      }
    }, {
      type: "dragenter",
      listener: u
    }, {
      type: "dragleave",
      listener: function(y) {
        lo({
          dragLeave: y
        }) && (s({
          input: l.current.input,
          dropTargets: []
        }), n.startedFrom === "external" && d());
      }
    }, {
      // A "drop" can only happen if the browser allowed the drop
      type: "drop",
      listener: function(y) {
        if (l.current = {
          dropTargets: l.current.dropTargets,
          input: at(y)
        }, !l.current.dropTargets.length) {
          d();
          return;
        }
        y.preventDefault(), Zt({
          event: y,
          current: l.current.dropTargets
        }), i.drop({
          current: l.current,
          // When dropping something native, we need to extract the latest
          // `.items` from the "drop" event as it is now accessible
          updatedSourcePayload: n.type === "external" ? n.getDropPayload(y) : null
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
      listener: function(y) {
        l.current = {
          dropTargets: l.current.dropTargets,
          input: at(y)
        }, d();
      }
    }].concat(Ht(_n({
      onDragEnd: d
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
    nativeSetDragImage: co(t)
  });
}
function Zt(e) {
  var t, n = e.event, r = e.current, a = (t = r[0]) === null || t === void 0 ? void 0 : t.dropEffect;
  a != null && n.dataTransfer && (n.dataTransfer.dropEffect = a);
}
function go(e) {
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
  canStart: Ir,
  start: po
}, gn = /* @__PURE__ */ new Map();
function vo(e) {
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
function ho(e) {
  var t = vo(e);
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
function mo(e, t) {
  if (ft(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ft(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bo(e) {
  var t = mo(e, "string");
  return ft(t) == "symbol" ? t : t + "";
}
function mt(e, t, n) {
  return (t = bo(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Cr(e, t) {
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
function wo(e) {
  var t = e.typeKey, n = e.defaultDropEffect, r = /* @__PURE__ */ new WeakMap(), a = "data-drop-target-for-".concat(t), o = "[".concat(a, "]");
  function l(v) {
    return r.set(v.element, v), function() {
      return r.delete(v.element);
    };
  }
  function i(v) {
    if (process.env.NODE_ENV !== "production") {
      var y = r.get(v.element);
      y && console.warn("You have already registered a [".concat(t, "] dropTarget on the same element"), {
        existing: y,
        proposed: v
      }), v.element instanceof HTMLIFrameElement && console.warn(`
            We recommend not registering <iframe> elements as drop targets
            as it can result in some strange browser event ordering.
          `.replace(/\s{2,}/g, " ").trim());
    }
    var b = vt(Cr(v.element, {
      attribute: a,
      value: "true"
    }), l(v));
    return Ze(b);
  }
  function s(v) {
    var y, b, D, O, c = v.source, f = v.target, g = v.input, m = v.result, h = m === void 0 ? [] : m;
    if (f == null)
      return h;
    if (!(f instanceof Element))
      return f instanceof Node ? s({
        source: c,
        target: f.parentElement,
        input: g,
        result: h
      }) : h;
    var A = f.closest(o);
    if (A == null)
      return h;
    var T = r.get(A);
    if (T == null)
      return h;
    var x = {
      input: g,
      source: c,
      element: T.element
    };
    if (T.canDrop && !T.canDrop(x))
      return s({
        source: c,
        target: T.element.parentElement,
        input: g,
        result: h
      });
    var P = (y = (b = T.getData) === null || b === void 0 ? void 0 : b.call(T, x)) !== null && y !== void 0 ? y : {}, N = (D = (O = T.getDropEffect) === null || O === void 0 ? void 0 : O.call(T, x)) !== null && D !== void 0 ? D : n, L = {
      data: P,
      element: T.element,
      dropEffect: N,
      // we are collecting _actual_ drop targets, so these are
      // being applied _not_ due to stickiness
      isActiveDueToStickiness: !1
    };
    return s({
      source: c,
      target: T.element.parentElement,
      input: g,
      // Using bubble ordering. Same ordering as `event.getPath()`
      result: [].concat(Ht(h), [L])
    });
  }
  function u(v) {
    var y = v.eventName, b = v.payload, D = Jt(b.location.current.dropTargets), O;
    try {
      for (D.s(); !(O = D.n()).done; ) {
        var c, f = O.value, g = r.get(f.element), m = Te(Te({}, b), {}, {
          self: f
        });
        g == null || (c = g[y]) === null || c === void 0 || c.call(
          g,
          // I cannot seem to get the types right here.
          // TS doesn't seem to like that one event can need `nativeSetDragImage`
          // @ts-expect-error
          m
        );
      }
    } catch (h) {
      D.e(h);
    } finally {
      D.f();
    }
  }
  var d = {
    onGenerateDragPreview: u,
    onDrag: u,
    onDragStart: u,
    onDrop: u,
    onDropTargetChange: function(y) {
      var b = y.payload, D = new Set(b.location.current.dropTargets.map(function(oe) {
        return oe.element;
      })), O = /* @__PURE__ */ new Set(), c = Jt(b.location.previous.dropTargets), f;
      try {
        for (c.s(); !(f = c.n()).done; ) {
          var g, m = f.value;
          O.add(m.element);
          var h = r.get(m.element), A = D.has(m.element), T = Te(Te({}, b), {}, {
            self: m
          });
          if (h == null || (g = h.onDropTargetChange) === null || g === void 0 || g.call(h, T), !A) {
            var x;
            h == null || (x = h.onDragLeave) === null || x === void 0 || x.call(h, T);
          }
        }
      } catch (oe) {
        c.e(oe);
      } finally {
        c.f();
      }
      var P = Jt(b.location.current.dropTargets), N;
      try {
        for (P.s(); !(N = P.n()).done; ) {
          var L, X, ne = N.value;
          if (!O.has(ne.element)) {
            var be = Te(Te({}, b), {}, {
              self: ne
            }), G = r.get(ne.element);
            G == null || (L = G.onDropTargetChange) === null || L === void 0 || L.call(G, be), G == null || (X = G.onDragEnter) === null || X === void 0 || X.call(G, be);
          }
        }
      } catch (oe) {
        P.e(oe);
      } finally {
        P.f();
      }
    }
  };
  function p(v) {
    d[v.eventName](v);
  }
  function w(v) {
    var y = v.source, b = v.target, D = v.input, O = v.current, c = s({
      source: y,
      target: b,
      input: D
    });
    if (c.length >= O.length)
      return c;
    for (var f = Qt(O), g = Qt(c), m = [], h = 0; h < f.length; h++) {
      var A, T = f[h], x = g[h];
      if (x != null) {
        m.push(x);
        continue;
      }
      var P = m[h - 1], N = f[h - 1];
      if (P?.element !== N?.element)
        break;
      var L = r.get(T.element);
      if (!L)
        break;
      var X = {
        input: D,
        source: y,
        element: L.element
      };
      if (L.canDrop && !L.canDrop(X) || !((A = L.getIsSticky) !== null && A !== void 0 && A.call(L, X)))
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
    getIsOver: w,
    dispatchEvent: p
  };
}
function Eo(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Do(e)) || t) {
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
function Do(e, t) {
  if (e) {
    if (typeof e == "string") return Un(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Un(e, t) : void 0;
  }
}
function Un(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Yn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function So(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yn(Object(n), !0).forEach(function(r) {
      mt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function xo() {
  var e = /* @__PURE__ */ new Set(), t = null;
  function n(o) {
    t && (!o.canMonitor || o.canMonitor(t.canMonitorArgs)) && t.active.add(o);
  }
  function r(o) {
    var l = So({}, o);
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
      var s = Eo(e), u;
      try {
        for (s.s(); !(u = s.n()).done; ) {
          var d = u.value;
          n(d);
        }
      } catch (D) {
        s.e(D);
      } finally {
        s.f();
      }
    }
    if (t) {
      for (var p = Array.from(t.active), w = 0, v = p; w < v.length; w++) {
        var y = v[w];
        if (t.active.has(y)) {
          var b;
          (b = y[l]) === null || b === void 0 || b.call(y, i);
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
function kr(e) {
  var t = e.typeKey, n = e.mount, r = e.dispatchEventToSource, a = e.onPostDispatch, o = e.defaultDropEffect, l = xo(), i = wo({
    typeKey: t,
    defaultDropEffect: o
  });
  function s(p) {
    r?.(p), i.dispatchEvent(p), l.dispatchEvent(p), a?.(p);
  }
  function u(p) {
    var w = p.event, v = p.dragType;
    Bn.start({
      event: w,
      dragType: v,
      getDropTargetsOver: i.getIsOver,
      dispatchEvent: s
    });
  }
  function d() {
    function p() {
      var w = {
        canStart: Bn.canStart,
        start: u
      };
      return n(w);
    }
    return ho({
      typeKey: t,
      mount: p
    });
  }
  return {
    registerUsage: d,
    dropTarget: i.dropTargetForConsumers,
    monitor: l.monitorForConsumers
  };
}
var Ao = Ze(function() {
  return navigator.userAgent.toLocaleLowerCase().includes("android");
}), Fr = "pdnd:android-fallback";
function _o(e) {
  var t = e.dragEnter, n = t.type, r = t.relatedTarget;
  return n !== "dragenter" ? !1 : ht() ? ao({
    dragEnter: t
  }) : r == null ? !0 : Tr() ? Or(r) : r instanceof HTMLIFrameElement;
}
var vn = "text/plain", $r = "application/vnd.pdnd";
function Tn(e) {
  var t = e.type, n = e.value;
  return !(t === $r || t === vn && n === Fr);
}
function To(e) {
  return Array.from(e.types).filter(function(t) {
    return Tn({
      type: t,
      value: e.getData(t)
    });
  });
}
function Oo(e) {
  return Array.from(e.items).filter(function(t) {
    return t.kind === "file" || Tn({
      type: t.type,
      value: e.getData(t.type)
    });
  });
}
var hn = !1, On = kr({
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
          if (t.canStart(r) && _o({
            dragEnter: r
          })) {
            var a = To(r.dataTransfer);
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
                    var s = Oo(i.dataTransfer), u = i.dataTransfer.getData.bind(i.dataTransfer);
                    return {
                      types: a,
                      items: s,
                      // return `null` if there is no result, otherwise string
                      getStringData: function(p) {
                        if (!a.includes(p))
                          return null;
                        var w = u(p);
                        return Tn({
                          type: p,
                          value: w
                        }) ? w : null;
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
function Io(e) {
  return On.dropTarget(e);
}
function Co(e) {
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
      }].concat(Ht(_n({
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
function ko() {
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
    }].concat(Ht(_n({
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
function Fo() {
  var e;
  if (((e = window.event) === null || e === void 0 ? void 0 : e.type) === "drop") {
    var t;
    (t = window.event) === null || t === void 0 || t.preventDefault();
  }
  et();
}
var qn = {
  start: ko,
  stop: Fo
};
const $o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  fill: "none"
};
function Po(e, t) {
  return _(), I("svg", $o, [...t[0] || (t[0] = [
    E("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M4.065 2.217 7.76 5.913 4.065 9.608"
    }, null, -1)
  ])]);
}
const Pr = { render: Po }, Mo = { class: "split-button" }, jo = { class: "select" }, No = ["value"], Lo = /* @__PURE__ */ z({
  __name: "SplitButton",
  props: {
    actions: {}
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = $e(n.actions[0].value), a = t, o = ge(
      () => n.actions.find((l) => l.value === r.value)
    );
    return (l, i) => (_(), I("div", Mo, [
      E("button", {
        onClick: i[0] || (i[0] = (s) => a("action", r.value))
      }, Y(o.value?.label), 1),
      E("div", jo, [
        K(F(Pr), { class: "chevron" }),
        Me(E("select", {
          ref: "saveSelect",
          "onUpdate:modelValue": i[1] || (i[1] = (s) => r.value = s),
          onChange: i[2] || (i[2] = (s) => a("action", r.value))
        }, [
          (_(!0), I(ve, null, Pe(e.actions, (s) => (_(), I("option", {
            value: s.value
          }, Y(s.label), 9, No))), 256))
        ], 544), [
          [hr, r.value]
        ])
      ])
    ]));
  }
}), Ro = /* @__PURE__ */ te(Lo, [["__scopeId", "data-v-9943b3ac"]]), Vo = { class: "file-menu" }, Ho = ["data-drop-state"], Bo = ["accept"], zo = /* @__PURE__ */ z({
  __name: "FileMenu",
  props: {
    filePickerId: {},
    fileType: {}
  },
  emits: ["open", "clear", "save", "saveAs"],
  setup(e, { emit: t }) {
    const n = t, r = (w) => {
      n(w === "save" ? "save" : "saveAs");
    }, a = e, o = ge(
      () => [
        ...Object.keys(a.fileType.accept ?? {}),
        ...Object.values(a.fileType.accept ?? {}).flat()
      ].join(",")
    ), l = $e("idle"), i = he("dropZone"), s = he("fileInput"), u = "showOpenFilePicker" in window, d = async (w) => {
      if (u) {
        w.preventDefault(), w.stopPropagation();
        const [v] = await window.showOpenFilePicker({
          multiple: !1,
          types: [a.fileType]
        });
        n("open", v);
      } else
        s.value?.click();
    }, p = (w) => {
      const v = w.target;
      v.files?.[0] && (n("open", v.files[0]), v.value = "");
    };
    return Sn(() => {
      if (!i.value) return;
      const w = vt(
        Io({
          element: i.value,
          canDrop: Xn,
          onDragEnter: () => {
            l.value = "over";
          },
          onDragLeave: () => {
            l.value = "potential";
          },
          onDrop: async ({ source: v }) => {
            const [y] = v.items;
            if (y)
              if (u) {
                const b = await y.getAsFileSystemHandle();
                b && n("open", b);
              } else {
                const b = y.getAsFile();
                b && n("open", b);
              }
          }
        }),
        Co({
          canMonitor: Xn,
          onDragStart: () => {
            l.value = "potential", qn.start();
          },
          onDrop: () => {
            l.value = "idle", qn.stop();
          }
        })
      );
      xn(w);
    }), (w, v) => (_(), I("menu", Vo, [
      E("li", {
        ref_key: "dropZone",
        ref: i,
        class: "drop-zone",
        tabindex: "0",
        "data-drop-state": l.value
      }, [
        E("input", {
          ref_key: "fileInput",
          ref: s,
          type: "file",
          style: { display: "none" },
          onChange: p,
          accept: o.value
        }, null, 40, Bo),
        E("button", { onClick: d }, "Open"),
        v[2] || (v[2] = E("div", { class: "drop-hint" }, "or drop file", -1))
      ], 8, Ho),
      E("li", null, [
        u ? (_(), ue(Ro, {
          key: 0,
          actions: [
            { value: "save", label: "Save" },
            { value: "saveAs", label: "Save as…" }
          ],
          onAction: r
        })) : (_(), I("button", {
          key: 1,
          onClick: v[0] || (v[0] = (y) => n("save"))
        }, "Save"))
      ]),
      E("li", null, [
        E("button", {
          onClick: v[1] || (v[1] = (y) => n("clear"))
        }, "Clear")
      ])
    ]));
  }
}), Wo = /* @__PURE__ */ te(zo, [["__scopeId", "data-v-27ba7162"]]);
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
      Uo(e, r, n[r]);
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
function Uo(e, t, n) {
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
function Yo(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Xo(e, t) {
  if (e == null) return {};
  var n = Yo(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var Go = "1.15.6";
function Se(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Ae = Se(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), bt = Se(/Edge/i), Zn = Se(/firefox/i), ot = Se(/safari/i) && !Se(/chrome/i) && !Se(/android/i), In = Se(/iP(ad|od|hone)/i), Mr = Se(/chrome/i) && Se(/android/i), jr = {
  capture: !1,
  passive: !1
};
function j(e, t, n) {
  e.addEventListener(t, n, !Ae && jr);
}
function M(e, t, n) {
  e.removeEventListener(t, n, !Ae && jr);
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
function Nr(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function pe(e, t, n, r) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && jt(e, t) : jt(e, t)) || r && e === n)
        return e;
      if (e === n) break;
    } while (e = Nr(e));
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
function Lr(e, t, n) {
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
function U(e, t, n, r, a) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var o, l, i, s, u, d, p;
    if (e !== window && e.parentNode && e !== we() ? (o = e.getBoundingClientRect(), l = o.top, i = o.left, s = o.bottom, u = o.right, d = o.height, p = o.width) : (l = 0, i = 0, s = window.innerHeight, u = window.innerWidth, d = window.innerHeight, p = window.innerWidth), (t || n) && e !== window && (a = a || e.parentNode, !Ae))
      do
        if (a && a.getBoundingClientRect && (C(a, "transform") !== "none" || n && C(a, "position") !== "static")) {
          var w = a.getBoundingClientRect();
          l -= w.top + parseInt(C(a, "border-top-width")), i -= w.left + parseInt(C(a, "border-left-width")), s = l + o.height, u = i + o.width;
          break;
        }
      while (a = a.parentNode);
    if (r && e !== window) {
      var v = qe(a || e), y = v && v.a, b = v && v.d;
      v && (l /= b, i /= y, p /= y, d /= b, s = l + d, u = i + p);
    }
    return {
      top: l,
      left: i,
      bottom: s,
      right: u,
      width: p,
      height: d
    };
  }
}
function Qn(e, t, n) {
  for (var r = ke(e, !0), a = U(e)[t]; r; ) {
    var o = U(r)[n], l = void 0;
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
function ce(e, t) {
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
function qo(e, t) {
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
function Ko(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function en(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var it;
function Rr(e, t) {
  return function() {
    if (!it) {
      var n = arguments, r = this;
      n.length === 1 ? e.call(r, n[0]) : e.apply(r, n), it = setTimeout(function() {
        it = void 0;
      }, t);
    }
  };
}
function Zo() {
  clearTimeout(it), it = void 0;
}
function Vr(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function Hr(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
function Br(e, t, n) {
  var r = {};
  return Array.from(e.children).forEach(function(a) {
    var o, l, i, s;
    if (!(!pe(a, t.draggable, e, !1) || a.animated || a === n)) {
      var u = U(a);
      r.left = Math.min((o = r.left) !== null && o !== void 0 ? o : 1 / 0, u.left), r.top = Math.min((l = r.top) !== null && l !== void 0 ? l : 1 / 0, u.top), r.right = Math.max((i = r.right) !== null && i !== void 0 ? i : -1 / 0, u.right), r.bottom = Math.max((s = r.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
var ae = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Jo() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(a) {
          if (!(C(a, "display") === "none" || a === k.ghost)) {
            e.push({
              target: a,
              rect: U(a)
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
      e.splice(qo(e, {
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
        var s = 0, u = i.target, d = u.fromRect, p = U(u), w = u.prevFromRect, v = u.prevToRect, y = i.rect, b = qe(u, !0);
        b && (p.top -= b.f, p.left -= b.e), u.toRect = p, u.thisAnimationDuration && en(w, p) && !en(d, p) && // Make sure animatingRect is on line between toRect & fromRect
        (y.top - p.top) / (y.left - p.left) === (d.top - p.top) / (d.left - p.left) && (s = ei(y, w, v, a.options)), en(p, d) || (u.prevFromRect = d, u.prevToRect = p, s || (s = a.options.animation), a.animate(u, y, p, s)), s && (o = !0, l = Math.max(l, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(t), o ? t = setTimeout(function() {
        typeof r == "function" && r();
      }, l) : typeof r == "function" && r(), e = [];
    },
    animate: function(r, a, o, l) {
      if (l) {
        C(r, "transition", ""), C(r, "transform", "");
        var i = qe(this.el), s = i && i.a, u = i && i.d, d = (a.left - o.left) / (s || 1), p = (a.top - o.top) / (u || 1);
        r.animatingX = !!d, r.animatingY = !!p, C(r, "transform", "translate3d(" + d + "px," + p + "px,0)"), this.forRepaintDummy = Qo(r), C(r, "transition", "transform " + l + "ms" + (this.options.easing ? " " + this.options.easing : "")), C(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          C(r, "transition", ""), C(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, l);
      }
    }
  };
}
function Qo(e) {
  return e.offsetWidth;
}
function ei(e, t, n, r) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * r.animation;
}
var We = [], tn = {
  initializeByDefault: !0
}, yt = {
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
function ti(e) {
  var t = e.sortable, n = e.rootEl, r = e.name, a = e.targetEl, o = e.cloneEl, l = e.toEl, i = e.fromEl, s = e.oldIndex, u = e.newIndex, d = e.oldDraggableIndex, p = e.newDraggableIndex, w = e.originalEvent, v = e.putSortable, y = e.extraEventProperties;
  if (t = t || n && n[ae], !!t) {
    var b, D = t.options, O = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !Ae && !bt ? b = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (b = document.createEvent("Event"), b.initEvent(r, !0, !0)), b.to = l || n, b.from = i || n, b.item = a || n, b.clone = o, b.oldIndex = s, b.newIndex = u, b.oldDraggableIndex = d, b.newDraggableIndex = p, b.originalEvent = w, b.pullMode = v ? v.lastPutMode : void 0;
    var c = De(De({}, y), yt.getEventProperties(r, t));
    for (var f in c)
      b[f] = c[f];
    n && n.dispatchEvent(b), D[O] && D[O].call(t, b);
  }
}
var ni = ["evt"], re = function(t, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.evt, o = Xo(r, ni);
  yt.pluginEvent.bind(k)(t, n, De({
    dragEl: S,
    parentEl: B,
    ghostEl: $,
    rootEl: R,
    nextEl: Be,
    lastDownEl: Ct,
    cloneEl: V,
    cloneHidden: Ie,
    dragStarted: tt,
    putSortable: q,
    activeSortable: k.active,
    originalEvent: a,
    oldIndex: Xe,
    oldDraggableIndex: lt,
    newIndex: se,
    newDraggableIndex: Oe,
    hideGhostForTarget: Yr,
    unhideGhostForTarget: Xr,
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
  ti(De({
    putSortable: q,
    cloneEl: V,
    targetEl: S,
    rootEl: R,
    oldIndex: Xe,
    oldDraggableIndex: lt,
    newIndex: se,
    newDraggableIndex: Oe
  }, e));
}
var S, B, $, R, Be, Ct, V, Ie, Xe, se, lt, Oe, xt, q, Ye = !1, Nt = !1, Lt = [], Ve, fe, nn, rn, tr, nr, tt, Ue, st, ut = !1, At = !1, kt, Z, an = [], bn = !1, Rt = [], Bt = typeof document < "u", _t = In, rr = bt || Ae ? "cssFloat" : "float", ri = Bt && !Mr && !In && "draggable" in document.createElement("div"), zr = (function() {
  if (Bt) {
    if (Ae)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
})(), Wr = function(t, n) {
  var r = C(t), a = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), o = Ke(t, 0, n), l = Ke(t, 1, n), i = o && C(o), s = l && C(l), u = i && parseInt(i.marginLeft) + parseInt(i.marginRight) + U(o).width, d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + U(l).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && i.float && i.float !== "none") {
    var p = i.float === "left" ? "left" : "right";
    return l && (s.clear === "both" || s.clear === p) ? "vertical" : "horizontal";
  }
  return o && (i.display === "block" || i.display === "flex" || i.display === "table" || i.display === "grid" || u >= a && r[rr] === "none" || l && r[rr] === "none" && u + d > a) ? "vertical" : "horizontal";
}, ai = function(t, n, r) {
  var a = r ? t.left : t.top, o = r ? t.right : t.bottom, l = r ? t.width : t.height, i = r ? n.left : n.top, s = r ? n.right : n.bottom, u = r ? n.width : n.height;
  return a === i || o === s || a + l / 2 === i + u / 2;
}, oi = function(t, n) {
  var r;
  return Lt.some(function(a) {
    var o = a[ae].options.emptyInsertThreshold;
    if (!(!o || Cn(a))) {
      var l = U(a), i = t >= l.left - o && t <= l.right + o, s = n >= l.top - o && n <= l.bottom + o;
      if (i && s)
        return r = a;
    }
  }), r;
}, Ur = function(t) {
  function n(o, l) {
    return function(i, s, u, d) {
      var p = i.options.group.name && s.options.group.name && i.options.group.name === s.options.group.name;
      if (o == null && (l || p))
        return !0;
      if (o == null || o === !1)
        return !1;
      if (l && o === "clone")
        return o;
      if (typeof o == "function")
        return n(o(i, s, u, d), l)(i, s, u, d);
      var w = (l ? i : s).options.group.name;
      return o === !0 || typeof o == "string" && o === w || o.join && o.indexOf(w) > -1;
    };
  }
  var r = {}, a = t.group;
  (!a || It(a) != "object") && (a = {
    name: a
  }), r.name = a.name, r.checkPull = n(a.pull, !0), r.checkPut = n(a.put), r.revertClone = a.revertClone, t.group = r;
}, Yr = function() {
  !zr && $ && C($, "display", "none");
}, Xr = function() {
  !zr && $ && C($, "display", "");
};
Bt && !Mr && document.addEventListener("click", function(e) {
  if (Nt)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Nt = !1, !1;
}, !0);
var He = function(t) {
  if (S) {
    t = t.touches ? t.touches[0] : t;
    var n = oi(t.clientX, t.clientY);
    if (n) {
      var r = {};
      for (var a in t)
        t.hasOwnProperty(a) && (r[a] = t[a]);
      r.target = r.rootEl = n, r.preventDefault = void 0, r.stopPropagation = void 0, n[ae]._onDragOver(r);
    }
  }
}, ii = function(t) {
  S && S.parentNode[ae]._isOutsideThisEl(t.target);
};
function k(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = xe({}, t), e[ae] = this;
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
      return Wr(e, this.options);
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
  yt.initializePlugins(this, e, n);
  for (var r in n)
    !(r in t) && (t[r] = n[r]);
  Ur(t);
  for (var a in this)
    a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : ri, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? j(e, "pointerdown", this._onTapStart) : (j(e, "mousedown", this._onTapStart), j(e, "touchstart", this._onTapStart)), this.nativeDraggable && (j(e, "dragover", this), j(e, "dragenter", this)), Lt.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), xe(this, Jo());
}
k.prototype = /** @lends Sortable.prototype */
{
  constructor: k,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (Ue = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, S) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, r = this.el, a = this.options, o = a.preventOnFilter, l = t.type, i = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (i || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, d = a.filter;
      if (gi(r), !S && !(/mousedown|pointerdown/.test(l) && t.button !== 0 || a.disabled) && !u.isContentEditable && !(!this.nativeDraggable && ot && s && s.tagName.toUpperCase() === "SELECT") && (s = pe(s, a.draggable, r, !1), !(s && s.animated) && Ct !== s)) {
        if (Xe = ce(s), lt = ce(s, a.draggable), typeof d == "function") {
          if (d.call(this, t, s, this)) {
            ee({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: r,
              fromEl: r
            }), re("filter", n, {
              evt: t
            }), o && t.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(p) {
          if (p = pe(u, p.trim(), r, !1), p)
            return ee({
              sortable: n,
              rootEl: p,
              name: "filter",
              targetEl: s,
              fromEl: r,
              toEl: r
            }), re("filter", n, {
              evt: t
            }), !0;
        }), d)) {
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
      var u = U(r);
      if (R = o, S = r, B = S.parentNode, Be = S.nextSibling, Ct = r, xt = l.group, k.dragged = S, Ve = {
        target: S,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, tr = Ve.clientX - u.left, nr = Ve.clientY - u.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, S.style["will-change"] = "all", s = function() {
        if (re("delayEnded", a, {
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
      }, l.ignore.split(",").forEach(function(d) {
        Lr(S, d.trim(), on);
      }), j(i, "dragover", He), j(i, "mousemove", He), j(i, "touchmove", He), l.supportPointer ? (j(i, "pointerup", a._onDrop), !this.nativeDraggable && j(i, "pointercancel", a._onDrop)) : (j(i, "mouseup", a._onDrop), j(i, "touchend", a._onDrop), j(i, "touchcancel", a._onDrop)), Zn && this.nativeDraggable && (this.options.touchStartThreshold = 4, S.draggable = !0), re("delayStart", this, {
        evt: t
      }), l.delay && (!l.delayOnTouchOnly || n) && (!this.nativeDraggable || !(bt || Ae))) {
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
    if (Ye = !1, R && S) {
      re("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && j(document, "dragover", ii);
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
      this._lastX = fe.clientX, this._lastY = fe.clientY, Yr();
      for (var t = document.elementFromPoint(fe.clientX, fe.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(fe.clientX, fe.clientY), t !== n); )
        n = t;
      if (S.parentNode[ae]._isOutsideThisEl(t), n)
        do {
          if (n[ae]) {
            var r = void 0;
            if (r = n[ae]._onDragOver({
              clientX: fe.clientX,
              clientY: fe.clientY,
              target: t,
              rootEl: n
            }), r && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = Nr(n));
      Xr();
    }
  },
  _onTouchMove: function(t) {
    if (Ve) {
      var n = this.options, r = n.fallbackTolerance, a = n.fallbackOffset, o = t.touches ? t.touches[0] : t, l = $ && qe($, !0), i = $ && l && l.a, s = $ && l && l.d, u = _t && Z && er(Z), d = (o.clientX - Ve.clientX + a.x) / (i || 1) + (u ? u[0] - an[0] : 0) / (i || 1), p = (o.clientY - Ve.clientY + a.y) / (s || 1) + (u ? u[1] - an[1] : 0) / (s || 1);
      if (!k.active && !Ye) {
        if (r && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < r)
          return;
        this._onDragStart(t, !0);
      }
      if ($) {
        l ? (l.e += d - (nn || 0), l.f += p - (rn || 0)) : l = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f: p
        };
        var w = "matrix(".concat(l.a, ",").concat(l.b, ",").concat(l.c, ",").concat(l.d, ",").concat(l.e, ",").concat(l.f, ")");
        C($, "webkitTransform", w), C($, "mozTransform", w), C($, "msTransform", w), C($, "transform", w), nn = d, rn = p, fe = o;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!$) {
      var t = this.options.fallbackOnBody ? document.body : R, n = U(S, !0, _t, !0, t), r = this.options;
      if (_t) {
        for (Z = t; C(Z, "position") === "static" && C(Z, "transform") === "none" && Z !== document; )
          Z = Z.parentNode;
        Z !== document.body && Z !== document.documentElement ? (Z === document && (Z = we()), n.top += Z.scrollTop, n.left += Z.scrollLeft) : Z = we(), an = er(Z);
      }
      $ = S.cloneNode(!0), le($, r.ghostClass, !1), le($, r.fallbackClass, !0), le($, r.dragClass, !0), C($, "transition", ""), C($, "transform", ""), C($, "box-sizing", "border-box"), C($, "margin", 0), C($, "top", n.top), C($, "left", n.left), C($, "width", n.width), C($, "height", n.height), C($, "opacity", "0.8"), C($, "position", _t ? "absolute" : "fixed"), C($, "zIndex", "100000"), C($, "pointerEvents", "none"), k.ghost = $, t.appendChild($), C($, "transform-origin", tr / parseInt($.style.width) * 100 + "% " + nr / parseInt($.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var r = this, a = t.dataTransfer, o = r.options;
    if (re("dragStart", this, {
      evt: t
    }), k.eventCanceled) {
      this._onDrop();
      return;
    }
    re("setupClone", this), k.eventCanceled || (V = Hr(S), V.removeAttribute("id"), V.draggable = !1, V.style["will-change"] = "", this._hideClone(), le(V, this.options.chosenClass, !1), k.clone = V), r.cloneId = Ft(function() {
      re("clone", r), !k.eventCanceled && (r.options.removeCloneOnHide || R.insertBefore(V, S), r._hideClone(), ee({
        sortable: r,
        name: "clone"
      }));
    }), !n && le(S, o.dragClass, !0), n ? (Nt = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (M(document, "mouseup", r._onDrop), M(document, "touchend", r._onDrop), M(document, "touchcancel", r._onDrop), a && (a.effectAllowed = "move", o.setData && o.setData.call(r, a, S)), j(document, "drop", r), C(S, "transform", "translateZ(0)")), Ye = !0, r._dragStartId = Ft(r._dragStarted.bind(r, n, t)), j(document, "selectstart", r), tt = !0, window.getSelection().removeAllRanges(), ot && C(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, r = t.target, a, o, l, i = this.options, s = i.group, u = k.active, d = xt === s, p = i.sort, w = q || u, v, y = this, b = !1;
    if (bn) return;
    function D(H, de) {
      re(H, y, De({
        evt: t,
        isOwner: d,
        axis: v ? "vertical" : "horizontal",
        revert: l,
        dragRect: a,
        targetRect: o,
        canSort: p,
        fromSortable: w,
        target: r,
        completed: c,
        onMove: function(Le, ie) {
          return Tt(R, n, S, a, Le, U(Le), t, ie);
        },
        changed: f
      }, de));
    }
    function O() {
      D("dragOverAnimationCapture"), y.captureAnimationState(), y !== w && w.captureAnimationState();
    }
    function c(H) {
      return D("dragOverCompleted", {
        insertion: H
      }), H && (d ? u._hideClone() : u._showClone(y), y !== w && (le(S, q ? q.options.ghostClass : u.options.ghostClass, !1), le(S, i.ghostClass, !0)), q !== y && y !== k.active ? q = y : y === k.active && q && (q = null), w === y && (y._ignoreWhileAnimating = r), y.animateAll(function() {
        D("dragOverAnimationComplete"), y._ignoreWhileAnimating = null;
      }), y !== w && (w.animateAll(), w._ignoreWhileAnimating = null)), (r === S && !S.animated || r === n && !r.animated) && (Ue = null), !i.dragoverBubble && !t.rootEl && r !== document && (S.parentNode[ae]._isOutsideThisEl(t.target), !H && He(t)), !i.dragoverBubble && t.stopPropagation && t.stopPropagation(), b = !0;
    }
    function f() {
      se = ce(S), Oe = ce(S, i.draggable), ee({
        sortable: y,
        name: "change",
        toEl: n,
        newIndex: se,
        newDraggableIndex: Oe,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), r = pe(r, i.draggable, n, !0), D("dragOver"), k.eventCanceled) return b;
    if (S.contains(t.target) || r.animated && r.animatingX && r.animatingY || y._ignoreWhileAnimating === r)
      return c(!1);
    if (Nt = !1, u && !i.disabled && (d ? p || (l = B !== R) : q === this || (this.lastPutMode = xt.checkPull(this, u, S, t)) && s.checkPut(this, u, S, t))) {
      if (v = this._getDirection(t, r) === "vertical", a = U(S), D("dragOverValid"), k.eventCanceled) return b;
      if (l)
        return B = R, O(), this._hideClone(), D("revert"), k.eventCanceled || (Be ? R.insertBefore(S, Be) : R.appendChild(S)), c(!0);
      var g = Cn(n, i.draggable);
      if (!g || di(t, v, this) && !g.animated) {
        if (g === S)
          return c(!1);
        if (g && n === t.target && (r = g), r && (o = U(r)), Tt(R, n, S, a, r, o, t, !!r) !== !1)
          return O(), g && g.nextSibling ? n.insertBefore(S, g.nextSibling) : n.appendChild(S), B = n, f(), c(!0);
      } else if (g && ui(t, v, this)) {
        var m = Ke(n, 0, i, !0);
        if (m === S)
          return c(!1);
        if (r = m, o = U(r), Tt(R, n, S, a, r, o, t, !1) !== !1)
          return O(), n.insertBefore(S, m), B = n, f(), c(!0);
      } else if (r.parentNode === n) {
        o = U(r);
        var h = 0, A, T = S.parentNode !== n, x = !ai(S.animated && S.toRect || a, r.animated && r.toRect || o, v), P = v ? "top" : "left", N = Qn(r, "top", "top") || Qn(S, "top", "top"), L = N ? N.scrollTop : void 0;
        Ue !== r && (A = o[P], ut = !1, At = !x && i.invertSwap || T), h = ci(t, r, o, v, x ? 1 : i.swapThreshold, i.invertedSwapThreshold == null ? i.swapThreshold : i.invertedSwapThreshold, At, Ue === r);
        var X;
        if (h !== 0) {
          var ne = ce(S);
          do
            ne -= h, X = B.children[ne];
          while (X && (C(X, "display") === "none" || X === $));
        }
        if (h === 0 || X === r)
          return c(!1);
        Ue = r, st = h;
        var be = r.nextElementSibling, G = !1;
        G = h === 1;
        var oe = Tt(R, n, S, a, r, o, t, G);
        if (oe !== !1)
          return (oe === 1 || oe === -1) && (G = oe === 1), bn = !0, setTimeout(si, 30), O(), G && !be ? n.appendChild(S) : r.parentNode.insertBefore(S, G ? be : r), N && Vr(N, 0, L - N.scrollTop), B = S.parentNode, A !== void 0 && !At && (kt = Math.abs(A - U(r)[P])), f(), c(!0);
      }
      if (n.contains(S))
        return c(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    M(document, "mousemove", this._onTouchMove), M(document, "touchmove", this._onTouchMove), M(document, "pointermove", this._onTouchMove), M(document, "dragover", He), M(document, "mousemove", He), M(document, "touchmove", He);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    M(t, "mouseup", this._onDrop), M(t, "touchend", this._onDrop), M(t, "pointerup", this._onDrop), M(t, "pointercancel", this._onDrop), M(t, "touchcancel", this._onDrop), M(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, r = this.options;
    if (se = ce(S), Oe = ce(S, r.draggable), re("drop", this, {
      evt: t
    }), B = S && S.parentNode, se = ce(S), Oe = ce(S, r.draggable), k.eventCanceled) {
      this._nulling();
      return;
    }
    Ye = !1, At = !1, ut = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), yn(this.cloneId), yn(this._dragStartId), this.nativeDraggable && (M(document, "drop", this), M(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ot && C(document.body, "user-select", ""), C(S, "transform", ""), t && (tt && (t.cancelable && t.preventDefault(), !r.dropBubble && t.stopPropagation()), $ && $.parentNode && $.parentNode.removeChild($), (R === B || q && q.lastPutMode !== "clone") && V && V.parentNode && V.parentNode.removeChild(V), S && (this.nativeDraggable && M(S, "dragend", this), on(S), S.style["will-change"] = "", tt && !Ye && le(S, q ? q.options.ghostClass : this.options.ghostClass, !1), le(S, this.options.chosenClass, !1), ee({
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
    re("nulling", this), R = S = B = $ = Be = V = Ct = Ie = Ve = fe = tt = se = Oe = Xe = lt = Ue = st = q = xt = k.dragged = k.ghost = k.clone = k.active = null, Rt.forEach(function(t) {
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
        S && (this._onDragOver(t), li(t));
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
      n = r[a], pe(n, l.draggable, this.el, !1) && t.push(n.getAttribute(l.dataIdAttr) || pi(n));
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
    var a = yt.modifyOption(this, t, n);
    typeof a < "u" ? r[t] = a : r[t] = n, t === "group" && Ur(r);
  },
  /**
   * Destroy
   */
  destroy: function() {
    re("destroy", this);
    var t = this.el;
    t[ae] = null, M(t, "mousedown", this._onTapStart), M(t, "touchstart", this._onTapStart), M(t, "pointerdown", this._onTapStart), this.nativeDraggable && (M(t, "dragover", this), M(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Lt.splice(Lt.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Ie) {
      if (re("hideClone", this), k.eventCanceled) return;
      C(V, "display", "none"), this.options.removeCloneOnHide && V.parentNode && V.parentNode.removeChild(V), Ie = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Ie) {
      if (re("showClone", this), k.eventCanceled) return;
      S.parentNode == R && !this.options.group.revertClone ? R.insertBefore(V, S) : Be ? R.insertBefore(V, Be) : R.appendChild(V), this.options.group.revertClone && this.animate(S, V), C(V, "display", ""), Ie = !1;
    }
  }
};
function li(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Tt(e, t, n, r, a, o, l, i) {
  var s, u = e[ae], d = u.options.onMove, p;
  return window.CustomEvent && !Ae && !bt ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = n, s.draggedRect = r, s.related = a || t, s.relatedRect = o || U(t), s.willInsertAfter = i, s.originalEvent = l, e.dispatchEvent(s), d && (p = d.call(u, s, l)), p;
}
function on(e) {
  e.draggable = !1;
}
function si() {
  bn = !1;
}
function ui(e, t, n) {
  var r = U(Ke(n.el, 0, n.options, !0)), a = Br(n.el, n.options, $), o = 10;
  return t ? e.clientX < a.left - o || e.clientY < r.top && e.clientX < r.right : e.clientY < a.top - o || e.clientY < r.bottom && e.clientX < r.left;
}
function di(e, t, n) {
  var r = U(Cn(n.el, n.options.draggable)), a = Br(n.el, n.options, $), o = 10;
  return t ? e.clientX > a.right + o || e.clientY > r.bottom && e.clientX > r.left : e.clientY > a.bottom + o || e.clientX > r.right && e.clientY > r.top;
}
function ci(e, t, n, r, a, o, l, i) {
  var s = r ? e.clientY : e.clientX, u = r ? n.height : n.width, d = r ? n.top : n.left, p = r ? n.bottom : n.right, w = !1;
  if (!l) {
    if (i && kt < u * a) {
      if (!ut && (st === 1 ? s > d + u * o / 2 : s < p - u * o / 2) && (ut = !0), ut)
        w = !0;
      else if (st === 1 ? s < d + kt : s > p - kt)
        return -st;
    } else if (s > d + u * (1 - a) / 2 && s < p - u * (1 - a) / 2)
      return fi(t);
  }
  return w = w || l, w && (s < d + u * o / 2 || s > p - u * o / 2) ? s > d + u / 2 ? 1 : -1 : 0;
}
function fi(e) {
  return ce(S) < ce(e) ? 1 : -1;
}
function pi(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--; )
    r += t.charCodeAt(n);
  return r.toString(36);
}
function gi(e) {
  Rt.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var r = t[n];
    r.checked && Rt.push(r);
  }
}
function Ft(e) {
  return setTimeout(e, 0);
}
function yn(e) {
  return clearTimeout(e);
}
Bt && j(document, "touchmove", function(e) {
  (k.active || Ye) && e.cancelable && e.preventDefault();
});
k.utils = {
  on: j,
  off: M,
  css: C,
  find: Lr,
  is: function(t, n) {
    return !!pe(t, n, t, !1);
  },
  extend: Ko,
  throttle: Rr,
  closest: pe,
  toggleClass: le,
  clone: Hr,
  index: ce,
  nextTick: Ft,
  cancelNextTick: yn,
  detectDirection: Wr,
  getChild: Ke,
  expando: ae
};
k.get = function(e) {
  return e[ae];
};
k.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (k.utils = De(De({}, k.utils), r.utils)), yt.mount(r);
  });
};
k.create = function(e, t) {
  return new k(e, t);
};
k.version = Go;
var W = [], nt, wn, En = !1, ln, sn, Vt, rt;
function vi() {
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
      this.sortable.nativeDraggable ? M(document, "dragover", this._handleAutoScroll) : (M(document, "pointermove", this._handleFallbackAutoScroll), M(document, "touchmove", this._handleFallbackAutoScroll), M(document, "mousemove", this._handleFallbackAutoScroll)), ar(), $t(), Zo();
    },
    nulling: function() {
      Vt = wn = nt = En = rt = ln = sn = null, W.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var a = this, o = (n.touches ? n.touches[0] : n).clientX, l = (n.touches ? n.touches[0] : n).clientY, i = document.elementFromPoint(o, l);
      if (Vt = n, r || this.options.forceAutoScrollFallback || bt || Ae || ot) {
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
  W.forEach(function(e) {
    clearInterval(e.pid);
  }), W = [];
}
function ar() {
  clearInterval(rt);
}
var un = Rr(function(e, t, n, r) {
  if (t.scroll) {
    var a = (e.touches ? e.touches[0] : e).clientX, o = (e.touches ? e.touches[0] : e).clientY, l = t.scrollSensitivity, i = t.scrollSpeed, s = we(), u = !1, d;
    wn !== n && (wn = n, $t(), nt = t.scroll, d = t.scrollFn, nt === !0 && (nt = ke(n, !0)));
    var p = 0, w = nt;
    do {
      var v = w, y = U(v), b = y.top, D = y.bottom, O = y.left, c = y.right, f = y.width, g = y.height, m = void 0, h = void 0, A = v.scrollWidth, T = v.scrollHeight, x = C(v), P = v.scrollLeft, N = v.scrollTop;
      v === s ? (m = f < A && (x.overflowX === "auto" || x.overflowX === "scroll" || x.overflowX === "visible"), h = g < T && (x.overflowY === "auto" || x.overflowY === "scroll" || x.overflowY === "visible")) : (m = f < A && (x.overflowX === "auto" || x.overflowX === "scroll"), h = g < T && (x.overflowY === "auto" || x.overflowY === "scroll"));
      var L = m && (Math.abs(c - a) <= l && P + f < A) - (Math.abs(O - a) <= l && !!P), X = h && (Math.abs(D - o) <= l && N + g < T) - (Math.abs(b - o) <= l && !!N);
      if (!W[p])
        for (var ne = 0; ne <= p; ne++)
          W[ne] || (W[ne] = {});
      (W[p].vx != L || W[p].vy != X || W[p].el !== v) && (W[p].el = v, W[p].vx = L, W[p].vy = X, clearInterval(W[p].pid), (L != 0 || X != 0) && (u = !0, W[p].pid = setInterval((function() {
        r && this.layer === 0 && k.active._onTouchMove(Vt);
        var be = W[this.layer].vy ? W[this.layer].vy * i : 0, G = W[this.layer].vx ? W[this.layer].vx * i : 0;
        typeof d == "function" && d.call(k.dragged.parentNode[ae], G, be, e, Vt, W[this.layer].el) !== "continue" || Vr(W[this.layer].el, G, be);
      }).bind({
        layer: p
      }), 24))), p++;
    } while (t.bubbleScroll && w !== s && (w = ke(w, !1)));
    En = u;
  }
}, 30), Gr = function(t) {
  var n = t.originalEvent, r = t.putSortable, a = t.dragEl, o = t.activeSortable, l = t.dispatchSortableEvent, i = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (n) {
    var u = r || o;
    i();
    var d = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, p = document.elementFromPoint(d.clientX, d.clientY);
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
  drop: Gr
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
  drop: Gr
};
xe(Fn, {
  pluginName: "removeOnSpill"
});
k.mount(new vi());
k.mount(Fn, kn);
function hi(e, t, n = {}) {
  let r;
  const { document: a = Na, ...o } = n, l = { onUpdate: (d) => {
    yi(t, d.oldIndex, d.newIndex, d);
  } }, i = () => {
    const d = typeof e == "string" ? a?.querySelector(e) : An(e);
    !d || r !== void 0 || (r = new k(d, {
      ...l,
      ...o
    }));
  }, s = () => {
    r?.destroy(), r = void 0;
  }, u = (d, p) => {
    if (p !== void 0) r?.option(d, p);
    else return r?.option(d);
  };
  return Pa(i), yr(s), {
    stop: s,
    start: i,
    option: u
  };
}
function mi(e, t, n) {
  const r = e.children[n];
  e.insertBefore(t, r);
}
function bi(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function yi(e, t, n, r = null) {
  r != null && (bi(r.item), mi(r.from, r.item, t));
  const a = sa(e), o = a ? [...Ge(e)] : Ge(e);
  if (n >= 0 && n < o.length) {
    const l = o.splice(t, 1)[0];
    Dn(() => {
      o.splice(n, 0, l), a && (e.value = o);
    });
  }
}
const wi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "22",
  height: "22",
  fill: "none"
};
function Ei(e, t) {
  return _(), I("svg", wi, [...t[0] || (t[0] = [
    E("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.875 4v13.75m6.875-6.875H4"
    }, null, -1)
  ])]);
}
const Di = { render: Ei }, Si = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "17",
  fill: "none"
};
function xi(e, t) {
  return _(), I("svg", Si, [...t[0] || (t[0] = [
    E("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.733 4.781a.531.531 0 1 1 0-1.062.531.531 0 0 1 0 1.062m0 4.25a.531.531 0 1 1 0-1.062.531.531 0 0 1 0 1.062m0 4.25a.531.531 0 1 1 0-1.062.531.531 0 0 1 0 1.062M11.267 4.781a.531.531 0 1 1 0-1.062.531.531 0 0 1 0 1.062m0 4.25a.531.531 0 1 1 0-1.062.531.531 0 0 1 0 1.062m0 4.25a.531.531 0 1 1 0-1.062.531.531 0 0 1 0 1.062"
    }, null, -1)
  ])]);
}
const Ai = { render: xi }, _i = ["value"], Ti = /* @__PURE__ */ z({
  __name: "InlineEdit",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ J(["end"], ["update:modelValue"]),
  setup(e) {
    const t = Q(e, "modelValue"), n = $e(!1), r = he("input"), a = async () => {
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
    }, null, 40, _i)) : (_(), I("span", {
      key: 1,
      onDblclick: i[1] || (i[1] = (s) => a())
    }, Y(t.value), 33));
  }
}), $n = /* @__PURE__ */ te(Ti, [["__scopeId", "data-v-81abe08b"]]), Oi = { class: "section" }, Ii = { class: "header" }, Ci = ["data-size", "data-sorting", "onKeydown"], ki = ["aria-current", "onClick", "onKeydown", "onMousedown"], Fi = { class: "frame-name" }, $i = /* @__PURE__ */ z({
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
    const n = e, r = Q(e, "modelValue"), a = Q(e, "selected"), o = t, l = he("el"), i = $e(!1);
    let s = null;
    n.sortable && hi(l, r, {
      handle: ".sort-handle",
      onStart: () => i.value = !0,
      onEnd: () => i.value = !1
    });
    const u = (D, O) => {
      D.target.closest(".drag-handle") || (o("dragStart", D, O), s = O, window.addEventListener("mousemove", d), window.addEventListener("mouseup", w));
    }, d = (D) => {
      s && o("drag", D, s);
    }, p = () => {
      o("dragCancel", s), window.removeEventListener("mousemove", d), window.removeEventListener("mouseup", w), s = null;
    }, w = (D) => {
      o("dragEnd", D, s), window.removeEventListener("mousemove", d), window.removeEventListener("mouseup", w), s = null;
    };
    let v = null;
    const y = (D) => v = D, b = () => v && o("duplicate", v);
    return (D, O) => (_(), I("section", Oi, [
      E("header", Ii, [
        E("h2", null, [
          ze(D.$slots, "heading", {}, () => [
            je(Y(r.value.length) + " " + Y(r.value.length === 1 ? "Frame" : "Frames"), 1)
          ], !0)
        ]),
        E("button", {
          class: "add",
          onClick: O[0] || (O[0] = (c) => o("add")),
          "data-theme": "dark"
        }, [
          K(F(Di))
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
        onKeydown: Ce(dt(b, ["ctrl", "stop"]), ["v"])
      }, [
        (_(!0), I(ve, null, Pe(r.value, (c) => (_(), I("button", {
          class: "frame",
          role: "listitem",
          key: c.id,
          "aria-current": c.id === a.value,
          onClick: (f) => a.value = c.id,
          onKeydown: [
            Ce((f) => !F(s) && o("remove", c), ["delete"]),
            Ce(dt((f) => y(c), ["ctrl"]), ["c"]),
            O[1] || (O[1] = Ce((f) => F(s) && p(), ["escape"]))
          ],
          draggable: "false",
          onMousedown: (f) => n.draggable && u(f, c)
        }, [
          ze(D.$slots, "preview", { frame: c }, void 0, !0),
          e.sortable ? (_(), ue(F(Ai), {
            key: 0,
            class: "sort-handle"
          })) : Fe("", !0),
          E("header", Fi, [
            e.rename ? (_(), ue($n, {
              key: 0,
              "model-value": c.name,
              "onUpdate:modelValue": [(f) => c.name = f, (f) => o("rename", c, f)]
            }, null, 8, ["model-value", "onUpdate:modelValue"])) : (_(), I(ve, { key: 1 }, [
              je(Y(c.name), 1)
            ], 64))
          ])
        ], 40, ki))), 128))
      ], 40, Ci)
    ]));
  }
}), Ns = /* @__PURE__ */ te($i, [["__scopeId", "data-v-2dee36a5"]]), Pi = { class: "field" }, Mi = ["for"], ji = ["id"], Ni = { class: "prefixed-input" }, Li = ["placeholder"], Ri = { class: "prefixed-input" }, Vi = ["placeholder"], Hi = /* @__PURE__ */ z({
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
    const t = Q(e, "horizontal"), n = Q(e, "vertical"), r = me();
    return (a, o) => (_(), I("div", Pi, [
      E("label", { for: F(r) }, Y(e.label), 9, Mi),
      E("div", {
        id: F(r),
        class: "inputs"
      }, [
        E("div", Ni, [
          o[2] || (o[2] = je(" x  ", -1)),
          Me(E("input", {
            type: "number",
            "onUpdate:modelValue": o[0] || (o[0] = (l) => t.value = l),
            placeholder: t.value === void 0 ? "mixed" : "",
            label: "Gap"
          }, null, 8, Li), [
            [ct, t.value]
          ])
        ]),
        E("div", Ri, [
          o[3] || (o[3] = je(" y  ", -1)),
          Me(E("input", {
            type: "number",
            "onUpdate:modelValue": o[1] || (o[1] = (l) => n.value = l),
            placeholder: n.value === void 0 ? "mixed" : "",
            label: "Gap"
          }, null, 8, Vi), [
            [ct, n.value]
          ])
        ])
      ], 8, ji)
    ]));
  }
}), Ls = /* @__PURE__ */ te(Hi, [["__scopeId", "data-v-57b3d503"]]), Bi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "15",
  height: "15",
  fill: "none"
};
function zi(e, t) {
  return _(), I("svg", Bi, [...t[0] || (t[0] = [
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
const Wi = { render: zi }, Ui = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "15",
  height: "15",
  fill: "none"
};
function Yi(e, t) {
  return _(), I("svg", Ui, [...t[0] || (t[0] = [
    E("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.901 12.326H10.1a1.114 1.114 0 0 0 1.113-1.114v-3.34A1.114 1.114 0 0 0 10.1 6.757H4.9A1.114 1.114 0 0 0 3.788 7.87v3.341A1.114 1.114 0 0 0 4.9 12.326M9.727 6.62V5.344a2.227 2.227 0 1 0-4.455 0V6.62"
    }, null, -1)
  ])]);
}
const Xi = { render: Yi }, Gi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "15",
  height: "15",
  fill: "none"
};
function qi(e, t) {
  return _(), I("svg", Gi, [...t[0] || (t[0] = [
    E("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.901 12.326H10.1a1.114 1.114 0 0 0 1.113-1.114v-3.34A1.114 1.114 0 0 0 10.1 6.757H4.9A1.114 1.114 0 0 0 3.788 7.87v3.341A1.114 1.114 0 0 0 4.9 12.326M9.727 6.31V4.139a2.227 2.227 0 1 0-4.455 0"
    }, null, -1)
  ])]);
}
const Ki = { render: qi }, Zi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "15",
  height: "15",
  fill: "none"
};
function Ji(e, t) {
  return _(), I("svg", Zi, [...t[0] || (t[0] = [
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
const Qi = { render: Ji };
function el(e, t) {
  var n = Object.keys(e), r = Object.keys(t);
  return n.length !== r.length ? !1 : n.every(function(a) {
    return Object.is(e[a], t[a]);
  });
}
function tl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : el, t = null;
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
var qr = Symbol("list-item-instruction"), nl = {
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
function rl(e) {
  var t = e.client, n = e.borderBox, r = e.axis, a = n[r.size] / 4;
  return t[r.point] <= n[r.start] + a ? "reorder-before" : t[r.point] >= n[r.end] - a ? "reorder-after" : "combine";
}
function al(e) {
  var t = e.client, n = e.borderBox, r = e.axis, a = n[r.size] / 2;
  return t[r.point] < n[r.start] + a ? "reorder-before" : "reorder-after";
}
var ol = tl();
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
function il(e, t) {
  var n, r, a, o = t.operations, l = t.element, i = t.input, s = t.axis, u = s === void 0 ? "vertical" : s, d = {
    x: i.clientX,
    y: i.clientY
  }, p = l.getBoundingClientRect(), w = nl[u], v = (n = o.combine) !== null && n !== void 0 ? n : "not-available", y = (r = o["reorder-before"]) !== null && r !== void 0 ? r : "not-available", b = (a = o["reorder-after"]) !== null && a !== void 0 ? a : "not-available", D = (function() {
    if (!Ot(v))
      return Ot(y, b) ? al({
        client: d,
        borderBox: p,
        axis: w
      }) : Ot(y) ? "reorder-before" : Ot(b) ? "reorder-after" : null;
    var f = rl({
      client: d,
      borderBox: p,
      axis: w
    });
    return f === "reorder-after" ? lr(b) ? "combine" : f : f === "reorder-before" && lr(y) ? "combine" : f;
  })();
  if (!D)
    return e;
  var O = {
    operation: D,
    blocked: o[D] === "blocked",
    axis: u
  }, c = ol(O);
  return ir(ir({}, e), {}, mt({}, qr, c));
}
function Kr(e) {
  var t;
  return (t = e[qr]) !== null && t !== void 0 ? t : null;
}
var ll = 2147483647;
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
function sl(e) {
  return {
    x: Math.floor(e.x),
    y: Math.floor(e.y)
  };
}
function ul(e) {
  return {
    x: e.x - dr,
    y: e.y - dr
  };
}
function dl(e) {
  return {
    x: Math.max(e.x, 0),
    y: Math.max(e.y, 0)
  };
}
function cl(e) {
  return {
    x: Math.min(e.x, window.innerWidth - pt),
    y: Math.min(e.y, window.innerHeight - pt)
  };
}
function cr(e) {
  var t = e.client, n = cl(dl(ul(sl(t))));
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
function fl(e) {
  var t = e.client, n = e.clientRect;
  return (
    // is within horizontal bounds
    t.x >= n.x && t.x <= n.x + n.width && // is within vertical bounds
    t.y >= n.y && t.y <= n.y + n.height
  );
}
function pl(e) {
  var t = e.initial, n = document.createElement("div");
  n.setAttribute(xr, "true");
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
    zIndex: ll
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
    if (a(), fl({
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
function gl() {
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
        r = pl({
          initial: u
        });
      }
      if (l === "onDrop") {
        var d, p = i.location.current.input;
        (d = r) === null || d === void 0 || d({
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
var vl = "text/uri-list", gt = /* @__PURE__ */ new WeakMap();
function hl(e) {
  return gt.set(e.element, e), function() {
    gt.delete(e.element);
  };
}
var pr = gl(), Pn = kr({
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
          var d = r.target;
          if (d instanceof HTMLElement) {
            var p = gt.get(d);
            if (p) {
              var w = at(r), v = {
                element: p.element,
                dragHandle: (a = p.dragHandle) !== null && a !== void 0 ? a : null,
                input: w
              };
              if (p.canDrag && !p.canDrag(v)) {
                r.preventDefault();
                return;
              }
              if (p.dragHandle) {
                var y = _r({
                  x: w.clientX,
                  y: w.clientY
                });
                if (!p.dragHandle.contains(y)) {
                  r.preventDefault();
                  return;
                }
              }
              var b = (o = (l = p.getInitialDataForExternal) === null || l === void 0 ? void 0 : l.call(p, v)) !== null && o !== void 0 ? o : null;
              if (b)
                for (var D = 0, O = Object.entries(b); D < O.length; D++) {
                  var c = Sr(O[D], 2), f = c[0], g = c[1];
                  r.dataTransfer.setData(f, g ?? "");
                }
              Ao() && !r.dataTransfer.types.includes(vn) && !r.dataTransfer.types.includes(vl) && r.dataTransfer.setData(vn, Fr), r.dataTransfer.setData($r, "");
              var m = {
                element: p.element,
                dragHandle: (i = p.dragHandle) !== null && i !== void 0 ? i : null,
                data: (s = (u = p.getInitialData) === null || u === void 0 ? void 0 : u.call(p, v)) !== null && s !== void 0 ? s : {}
              }, h = {
                type: "element",
                payload: m,
                startedFrom: "internal"
              };
              t.start({
                event: r,
                dragType: h
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
}), ml = Pn.dropTarget, bl = Pn.monitor;
function yl(e) {
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
    hl(e),
    Cr(e.element, {
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
function wl(e) {
  var t = e.nativeSetDragImage;
  t && gr && t(gr, 0, 0);
}
const El = ({
  reorderBefore: e,
  reorderAfter: t,
  combine: n
}) => {
  Sn(() => {
    const r = bl({
      onDrop(a) {
        const { location: o, source: l } = a;
        if (!o.current.dropTargets.length) return;
        const [i] = o.current.dropTargets;
        if (!i) return;
        const s = Number(l.data.id), u = Number(i.data.id), { operation: d } = Kr(i.data) ?? {};
        d === "reorder-before" ? e?.(u, s) : d === "reorder-after" ? t?.(u, s) : d === "combine" && n?.(u, s);
      }
    });
    xn(r);
  });
}, Dl = (e, { isExpanded: t, item: n }) => {
  const r = $e(!1), a = $e(!1), o = $e(null);
  let l = !1;
  return Sn(() => {
    const i = An(e);
    if (!i) return;
    const s = vt(
      yl({
        element: i,
        getInitialData: () => ({ id: n.value.id }),
        onDragStart: () => {
          r.value = !0, l = t.value, t.value = !1;
        },
        onDrop: () => {
          r.value = !1, l && (t.value = !0);
        },
        onGenerateDragPreview({ nativeSetDragImage: u }) {
          wl({ nativeSetDragImage: u });
        }
      }),
      ml({
        element: i,
        getData: ({ input: u, element: d }) => il(
          { id: n.value.id },
          {
            input: u,
            element: d,
            operations: {
              "reorder-before": "available",
              "reorder-after": "available",
              combine: n.value.children ? "available" : "not-available"
            }
          }
        ),
        canDrop: ({ source: u }) => u.data.id !== n.value.id,
        onDrag: ({ self: u }) => o.value = Kr(u.data),
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
}, Zr = (e, t) => {
  for (const n of e) {
    if (n.id === t) return n;
    if (n.children?.length) {
      const r = Zr(n.children, t);
      if (r) return r;
    }
  }
  return null;
}, Sl = (e) => {
  if (!e) return 0;
  let t = e.id;
  for (const n of e.children ?? []) {
    const r = Sl(n);
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
}, Jr = (e, t, n) => {
  const r = e.findIndex((a) => a.id === t);
  if (r !== -1)
    return e.splice(r, 0, n), !0;
  for (const a of e)
    if (a.children && Jr(a.children, t, n))
      return !0;
  return !1;
}, Qr = (e, t, n) => {
  const r = e.findIndex((a) => a.id === t);
  if (r !== -1)
    return e.splice(r + 1, 0, n), !0;
  for (const a of e)
    if (a.children && Qr(a.children, t, n))
      return !0;
  return !1;
}, ea = (e, t = []) => {
  for (const n of e)
    t.push(n), n.children?.length && ea(n.children, t);
  return t;
}, xl = ["data-selected", "data-dragging"], Al = ["data-operation"], _l = ["data-expanded", "data-visible"], Tl = { class: "label" }, Ol = ["data-enabled"], Il = ["data-value"], Cl = ["data-value"], kl = {
  key: 0,
  class: "children"
}, Fl = /* @__PURE__ */ z({
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
    const n = e, r = t, a = he("row"), o = ge(() => !!n.item.children?.length), l = ge(() => n.selectedItems.has(n.item)), i = $e(!1), { isDragging: s, instruction: u } = Dl(a, {
      item: ge(() => n.item),
      isExpanded: i
    }), d = ge(() => u.value?.operation), p = (w, v) => {
      if (v.ctrlKey)
        n.selectedItems.has(w) ? n.selectedItems.delete(w) : n.selectedItems.add(w);
      else if (v.shiftKey && n.selectedItems.size) {
        const y = n.flatItems.indexOf(w), b = [...n.selectedItems].map((g) => n.flatItems.indexOf(g)), [D, O] = [Math.min(...b), Math.max(...b)], c = Math.min(y, D), f = Math.max(y, O);
        for (let g = c; g <= f; g++) {
          const m = n.flatItems[g];
          m && !m.children && n.selectedItems.add(m);
        }
        w.children && w.children.forEach((g) => n.selectedItems.add(g));
        for (const g of n.flatItems)
          g.children && g.children.every((m) => n.selectedItems.has(m)) && (n.selectedItems.add(g), g.children.forEach((m) => n.selectedItems.delete(m)));
      } else
        n.selectedItems.clear(), n.selectedItems.add(w);
    };
    return (w, v) => {
      const y = ua("LayersItem", !0);
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
          onMousedown: v[4] || (v[4] = (b) => p(e.item, b)),
          onKeyup: v[5] || (v[5] = Ce((b) => r("delete", e.item), ["delete"]))
        }, [
          Me(E("div", {
            class: "drop-indicator",
            "data-operation": d.value
          }, null, 8, Al), [
            [da, d.value]
          ]),
          E("button", {
            class: "chevron",
            onClick: v[0] || (v[0] = (b) => i.value = !i.value),
            "data-expanded": i.value,
            "data-visible": o.value
          }, [
            K(F(Pr))
          ], 8, _l),
          E("div", Tl, [
            (_(), ue(mr(e.icons[e.item.type]))),
            K($n, {
              modelValue: e.item.name,
              "onUpdate:modelValue": v[1] || (v[1] = (b) => e.item.name = b),
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
              onClick: v[2] || (v[2] = dt((b) => e.item.isLocked = !e.item.isLocked, ["prevent"]))
            }, [
              e.item.isLocked ? (_(), ue(F(Xi), { key: 0 })) : (_(), ue(F(Ki), { key: 1 }))
            ], 8, Il),
            E("button", {
              class: "action",
              "data-value": e.item.isHidden,
              onClick: v[3] || (v[3] = dt((b) => e.item.isHidden = !e.item.isHidden, ["prevent"]))
            }, [
              e.item.isHidden ? (_(), ue(F(Wi), { key: 0 })) : (_(), ue(F(Qi), { key: 1 }))
            ], 8, Cl)
          ], 8, Ol)
        ], 544),
        o.value && i.value ? (_(), I("ul", kl, [
          (_(!0), I(ve, null, Pe(e.item.children, (b) => (_(), ue(y, {
            item: b,
            items: e.items,
            "flat-items": e.flatItems,
            "selected-items": e.selectedItems,
            icons: e.icons,
            onDelete: (D) => r("delete", b)
          }, {
            icon: ye(({ item: D }) => [
              ze(w.$slots, "icon", { item: D }, void 0, !0)
            ]),
            _: 3
          }, 8, ["item", "items", "flat-items", "selected-items", "icons", "onDelete"]))), 256))
        ])) : Fe("", !0)
      ], 8, xl);
    };
  }
}), $l = /* @__PURE__ */ te(Fl, [["__scopeId", "data-v-632c355b"]]), Pl = { class: "layers" }, Ml = { class: "items" }, jl = /* @__PURE__ */ z({
  __name: "LayersTree",
  props: {
    items: {},
    selectedItems: {},
    icons: {}
  },
  emits: ["delete", "reorder-before", "reorder-after", "combine"],
  setup(e, { emit: t }) {
    const n = e, r = ge(() => ea(n.items)), a = t;
    return El({ reorderBefore: (s, u) => {
      const d = Pt(n.items, u);
      d && Jr(n.items, s, d);
    }, reorderAfter: (s, u) => {
      const d = Pt(n.items, u);
      d && Qr(n.items, s, d);
    }, combine: (s, u) => {
      const d = Zr(n.items, s);
      if (!d) return;
      const p = Pt(n.items, u);
      p && d.children?.unshift(p);
    } }), (s, u) => (_(), I("section", Pl, [
      u[1] || (u[1] = E("header", { class: "header" }, [
        E("h2", null, "Layers")
      ], -1)),
      E("ul", Ml, [
        (_(!0), I(ve, null, Pe(e.items, (d) => (_(), ue($l, {
          key: d.id,
          item: d,
          items: e.items,
          "flat-items": r.value,
          "selected-items": e.selectedItems,
          icons: e.icons,
          onDelete: u[0] || (u[0] = (p) => a("delete", p))
        }, null, 8, ["item", "items", "flat-items", "selected-items", "icons"]))), 128))
      ])
    ]));
  }
}), Rs = /* @__PURE__ */ te(jl, [["__scopeId", "data-v-50622257"]]), Nl = { class: "field" }, Ll = ["for"], Rl = ["id", "min", "max", "step"], Vs = /* @__PURE__ */ z({
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
    const t = Q(e, "modelValue"), n = me();
    return (r, a) => (_(), I("div", Nl, [
      E("label", { for: F(n) }, Y(e.label), 9, Ll),
      Me(E("input", {
        id: F(n),
        min: e.min,
        max: e.max,
        step: e.step,
        type: "number",
        "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value = o)
      }, null, 8, Rl), [
        [ct, t.value]
      ])
    ]));
  }
}), Vl = { class: "field" }, Hl = ["for"], Bl = ["id"], zl = { class: "prefixed-input" }, Wl = ["value"], Ul = { class: "prefixed-input" }, Yl = ["value"], Xl = /* @__PURE__ */ z({
  __name: "PointField",
  props: /* @__PURE__ */ J({
    label: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Q(e, "modelValue"), n = me(), r = (o) => {
      const l = +o.target.value;
      t.value = { x: l, y: t.value.y };
    }, a = (o) => {
      const l = +o.target.value;
      t.value = { x: t.value.x, y: l };
    };
    return (o, l) => (_(), I("div", Vl, [
      E("label", { for: F(n) }, Y(e.label), 9, Hl),
      E("div", {
        id: F(n),
        class: "inputs"
      }, [
        E("div", zl, [
          l[0] || (l[0] = je(" x ", -1)),
          E("input", {
            type: "number",
            value: t.value.x,
            onChange: r
          }, null, 40, Wl)
        ]),
        E("div", Ul, [
          l[1] || (l[1] = je(" y ", -1)),
          E("input", {
            type: "number",
            value: t.value.y,
            onChange: a
          }, null, 40, Yl)
        ])
      ], 8, Bl)
    ]));
  }
}), Hs = /* @__PURE__ */ te(Xl, [["__scopeId", "data-v-91c4facc"]]), Gl = { class: "panel" }, ql = { class: "name-settings" }, Kl = {
  key: 0,
  class: "unsaved"
}, Zl = {
  method: "dialog",
  class: "flow"
}, Jl = ["onClick"], Ql = { class: "flow" }, es = /* @__PURE__ */ z({
  __name: "ProjectProperties",
  props: /* @__PURE__ */ J({
    fileType: {},
    hasUnsavedChanges: { type: Boolean }
  }, {
    name: { required: !0 },
    nameModifiers: {}
  }),
  emits: /* @__PURE__ */ J(["open", "save", "saveAs", "clear"], ["update:name"]),
  setup(e, { emit: t }) {
    const n = Q(e, "name"), r = t, a = vr(), o = he("clearDialog"), l = he("settingsDialog"), i = async () => {
      await o.value?.prompt() === "submit" && r("clear");
    };
    return (s, u) => (_(), I(ve, null, [
      E("div", Gl, [
        K(Wo, {
          "file-type": e.fileType,
          onOpen: u[0] || (u[0] = (d) => r("open", d)),
          onSave: u[1] || (u[1] = (d) => r("save")),
          onSaveAs: u[2] || (u[2] = (d) => r("saveAs")),
          onClear: u[3] || (u[3] = (d) => i())
        }, null, 8, ["file-type"]),
        E("div", ql, [
          E("h2", null, [
            K($n, {
              modelValue: n.value,
              "onUpdate:modelValue": u[4] || (u[4] = (d) => n.value = d)
            }, null, 8, ["modelValue"])
          ]),
          e.hasUnsavedChanges ? (_(), I("div", Kl)) : Fe("", !0),
          F(a).settings ? (_(), I("button", {
            key: 1,
            onClick: u[5] || (u[5] = (d) => l.value?.open()),
            "data-theme": "dark"
          }, [
            K(F(br))
          ])) : Fe("", !0)
        ])
      ]),
      K(cn, {
        ref_key: "clearDialog",
        ref: o,
        style: { margin: "auto" }
      }, {
        default: ye(({ close: d }) => [
          E("form", Zl, [
            ze(s.$slots, "clear", {}, () => [
              u[6] || (u[6] = E("p", null, "Are you sure?", -1))
            ], !0),
            E("menu", null, [
              E("button", {
                type: "reset",
                onClick: d
              }, "Cancel", 8, Jl),
              u[7] || (u[7] = E("button", {
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
      F(a).settings ? (_(), ue(cn, {
        key: 0,
        ref_key: "settingsDialog",
        ref: l
      }, {
        default: ye(() => [
          E("div", Ql, [
            u[8] || (u[8] = E("h2", null, "Settings", -1)),
            ze(s.$slots, "settings", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 512)) : Fe("", !0)
    ], 64));
  }
}), Bs = /* @__PURE__ */ te(es, [["__scopeId", "data-v-20771300"]]), ts = { class: "field" }, ns = ["for"], rs = ["id"], as = {
  key: 0,
  value: ""
}, os = ["label"], is = ["value"], ls = ["value"], zs = /* @__PURE__ */ z({
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
    const t = Q(e, "modelValue"), n = me(), r = (a) => !!a.options;
    return (a, o) => (_(), I("div", ts, [
      E("label", { for: F(n) }, Y(e.label), 9, ns),
      Me(E("select", {
        id: F(n),
        "onUpdate:modelValue": o[0] || (o[0] = (l) => t.value = l)
      }, [
        e.allowEmpty ? (_(), I("option", as, "–")) : Fe("", !0),
        (_(!0), I(ve, null, Pe(e.options, (l) => (_(), I(ve, null, [
          r(l) ? (_(), I("optgroup", {
            key: 0,
            label: l.label
          }, [
            (_(!0), I(ve, null, Pe(l.options, ({ value: i, label: s }) => (_(), I("option", { value: i }, Y(s), 9, is))), 256))
          ], 8, os)) : (_(), I("option", {
            key: 1,
            value: l.value
          }, Y(l.label), 9, ls))
        ], 64))), 256))
      ], 8, rs), [
        [hr, t.value]
      ])
    ]));
  }
}), ss = { class: "field" }, us = ["for"], ds = { class: "inputs" }, cs = { class: "prefixed-input" }, fs = ["value"], ps = { class: "prefixed-input" }, gs = ["value"], vs = /* @__PURE__ */ z({
  __name: "SizeField",
  props: /* @__PURE__ */ J({
    label: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Q(e, "modelValue"), n = me(), r = (o) => {
      const l = +o.target.value;
      t.value = { width: l, height: t.value.height };
    }, a = (o) => {
      const l = +o.target.value;
      t.value = { width: t.value.width, height: l };
    };
    return (o, l) => (_(), I("div", ss, [
      E("label", { for: F(n) }, Y(e.label), 9, us),
      E("div", ds, [
        E("div", cs, [
          l[0] || (l[0] = je(" w ", -1)),
          E("input", {
            type: "number",
            value: t.value.width,
            onChange: r
          }, null, 40, fs)
        ]),
        E("div", ps, [
          l[1] || (l[1] = je(" h ", -1)),
          E("input", {
            type: "number",
            value: t.value.height,
            onChange: a
          }, null, 40, gs)
        ])
      ])
    ]));
  }
}), Ws = /* @__PURE__ */ te(vs, [["__scopeId", "data-v-908229cc"]]), hs = { class: "field" }, ms = ["for"], bs = ["id", "min", "max", "step", "value"], Us = /* @__PURE__ */ z({
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
    const t = Q(e, "modelValue"), n = me();
    return (r, a) => (_(), I("div", hs, [
      E("label", { for: F(n) }, Y(e.label), 9, ms),
      E("input", {
        id: F(n),
        type: "range",
        min: e.min,
        max: e.max,
        step: e.step,
        value: t.value,
        onInput: a[0] || (a[0] = (o) => t.value = +o.target.value)
      }, null, 40, bs)
    ]));
  }
}), ys = { class: "field" }, ws = ["for"], Es = /* @__PURE__ */ z({
  __name: "SwitchField",
  props: /* @__PURE__ */ J({
    label: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Q(e, "modelValue"), n = me();
    return (r, a) => (_(), I("div", ys, [
      E("label", { for: F(n) }, Y(e.label), 9, ws),
      K(F(ha), {
        id: F(n),
        modelValue: t.value,
        "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value = o),
        class: "switch-root"
      }, {
        default: ye(() => [
          K(F(ma), { class: "switch-thumb" })
        ]),
        _: 1
      }, 8, ["id", "modelValue"])
    ]));
  }
}), Ys = /* @__PURE__ */ te(Es, [["__scopeId", "data-v-7ff302ef"]]), Ds = { class: "field" }, Ss = ["for"], xs = ["id", "disabled"], Xs = /* @__PURE__ */ z({
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
    const t = Q(e, "modelValue"), n = me();
    return (r, a) => (_(), I("div", Ds, [
      E("label", { for: F(n) }, Y(e.label), 9, Ss),
      Me(E("textarea", {
        id: F(n),
        type: "text",
        "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value = o),
        disabled: e.disabled,
        rows: "5"
      }, null, 8, xs), [
        [ct, t.value]
      ])
    ]));
  }
}), As = { class: "field" }, _s = ["for"], Ts = ["id", "disabled"], Gs = /* @__PURE__ */ z({
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
    const t = Q(e, "modelValue"), n = me();
    return (r, a) => (_(), I("div", As, [
      E("label", { for: F(n) }, Y(e.label), 9, _s),
      Me(E("input", {
        id: F(n),
        type: "text",
        "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value = o),
        disabled: e.disabled
      }, null, 8, Ts), [
        [ct, t.value]
      ])
    ]));
  }
}), dn = (e) => !e || e.length === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1), Os = {
  class: "tool-bar",
  role: "toolbar",
  "aria-label": "Tools"
}, Is = ["title", "tabindex", "aria-pressed", "onClick"], Cs = /* @__PURE__ */ z({
  __name: "ToolBar",
  props: {
    tools: {},
    selected: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, r = t, a = he("buttons"), o = ge(() => Object.values(n.tools)), l = () => {
      let u = o.value.findIndex((d) => d.id === n.selected);
      u = u === 0 ? o.value.length - 1 : u - 1, a.value?.[u]?.focus(), r("select", o.value[u].id);
    }, i = () => {
      let u = o.value.findIndex((d) => d.id === n.selected);
      u = u === o.value.length - 1 ? 0 : u + 1, a.value?.[u]?.focus(), r("select", o.value[u].id);
    }, s = ({ id: u, shortcut: d }) => d ? `${dn(u)} ${dn(d)}` : dn(u);
    return (u, d) => (_(), I("div", Os, [
      (_(!0), I(ve, null, Pe(e.tools, (p) => (_(), I("button", {
        title: s(p),
        tabindex: p.id === n.selected ? 0 : -1,
        "aria-pressed": p.id === n.selected,
        ref_for: !0,
        ref_key: "buttons",
        ref: a,
        onClick: (w) => r("select", p.id),
        onKeydown: [
          Ce(l, ["up"]),
          Ce(i, ["down"])
        ]
      }, [
        (_(), ue(mr(p.icon)))
      ], 40, Is))), 256))
    ]));
  }
}), qs = /* @__PURE__ */ te(Cs, [["__scopeId", "data-v-2fc060f8"]]);
export {
  $s as CheckboxField,
  Ms as CodeViewer,
  js as ColorField,
  Wo as FileMenu,
  Ns as FramesList,
  Ls as GapField,
  $n as InlineEdit,
  $l as LayersItem,
  Rs as LayersTree,
  cn as ModalDialog,
  Vs as NumberField,
  Hs as PointField,
  Bs as ProjectProperties,
  zs as SelectField,
  Ws as SizeField,
  Us as SliderField,
  Ro as SplitButton,
  Ys as SwitchField,
  Xs as TextAreaField,
  Gs as TextField,
  qs as ToolBar,
  Ca as downloadFile,
  Zr as findInTree,
  ea as flattenTree,
  me as getInputId,
  Sl as getMaxTreeId,
  Qr as insertIntoTreeAfter,
  Jr as insertIntoTreeBefore,
  Pt as removeFromTree,
  Ps as stripExtension,
  dn as upperFirst
};
