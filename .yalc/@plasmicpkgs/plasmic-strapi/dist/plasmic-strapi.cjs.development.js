'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var registerComponent = _interopDefault(require('@plasmicapp/host/registerComponent'));
var registerGlobalContext = _interopDefault(require('@plasmicapp/host/registerGlobalContext'));
var host = require('@plasmicapp/host');
var query = require('@plasmicapp/query');
var qs = require('qs');
var get = _interopDefault(require('dlv'));
var changeCase = require('change-case');
var React = require('react');
var React__default = _interopDefault(React);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
});

var queryParameters = [{
  value: '$eq',
  label: 'Equal'
}, {
  value: '$ne',
  label: 'Not equal'
}, {
  value: '$lt',
  label: 'Less than'
}, {
  value: '$lte',
  label: 'Less than or equal to'
}, {
  value: '$gt',
  label: 'Greater than'
}, {
  value: '$gte',
  label: 'Greater than or equal to'
}, {
  value: '$in',
  label: 'Included in an array'
}, {
  value: '$notIn',
  label: 'Not included in an array'
}, {
  value: '$contains',
  label: 'Contains'
}, {
  value: '$notContains',
  label: 'Does not contain'
}];
var uniq = function uniq(xs) {
  return Array.from(new Set(xs));
};

function ensure(x) {
  if (x === null || x === undefined) {
    debugger;
    throw new Error("Value must not be undefined or null");
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-strapi";

var makeDataProviderName = function makeDataProviderName(collection) {
  return "currentStrapi" + changeCase.pascalCase(collection) + "Item";
};

var CredentialsContext = /*#__PURE__*/React__default.createContext(undefined);
var strapiCredentialsProviderMeta = {
  name: "StrapiCredentialsProvider",
  displayName: "Strapi Credentials Provider",
  description: "[Watch how to add Strapi data](https://www.youtube.com/watch?v=1SLoVY3hkQ4).\n\nAPI token is needed only if data is not publicly readable.\n\nLearn how to [get your API token](https://docs.strapi.io/user-docs/latest/settings/managing-global-settings.html#managing-api-tokens).",
  importName: "StrapiCredentialsProvider",
  importPath: modulePath,
  props: {
    host: {
      type: "string",
      displayName: "Host",
      defaultValueHint: "https://strapi-app.plasmic.app",
      defaultValue: "https://strapi-app.plasmic.app",
      description: "Server where you application is hosted."
    },
    token: {
      type: "string",
      displayName: "API Token",
      description: "API Token (generated in http://yourhost/admin/settings/api-tokens) (or leave blank for unauthenticated usage)."
    }
  }
};
function StrapiCredentialsProvider(_ref) {
  var _host;

  var host = _ref.host,
      token = _ref.token,
      children = _ref.children;
  host = ((_host = host) == null ? void 0 : _host.slice(-1)) === "/" ? host.slice(0, -1) : host;
  return React__default.createElement(CredentialsContext.Provider, {
    value: {
      host: host,
      token: token
    }
  }, children);
}
var strapiCollectionMeta = {
  name: "StrapiCollection",
  displayName: "Strapi Collection",
  importName: "StrapiCollection",
  importPath: modulePath,
  providesData: true,
  description: "Fetches Strapi data of a given collection and repeats content of children once for every row fetched.",
  defaultStyles: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridRowGap: "8px",
    gridColumnGap: "8px",
    padding: "8px",
    maxWidth: "100%"
  },
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "vbox",
        children: {
          type: "component",
          name: "StrapiField"
        }
      }
    },
    name: {
      type: "string",
      displayName: "Name",
      description: "Name of the collection to be fetched.",
      defaultValueHint: "restaurants"
    },
    filterField: {
      type: "choice",
      displayName: "Filter field",
      description: "Field (from Collection) to filter by",
      options: function options(props, ctx) {
        var _ctx$strapiFields;

        return (_ctx$strapiFields = ctx == null ? void 0 : ctx.strapiFields) != null ? _ctx$strapiFields : [];
      },
      hidden: function hidden(props, ctx) {
        return !props.name;
      }
    },
    filterParameter: {
      type: "choice",
      displayName: "Filter Parameter",
      description: "Field Parameter filter by",
      options: function options(props, ctx) {
        return queryParameters.map(function (item) {
          return {
            label: item == null ? void 0 : item.label,
            value: item == null ? void 0 : item.value
          };
        });
      },
      hidden: function hidden(props, ctx) {
        return !props.filterField;
      }
    },
    filterValue: {
      type: "string",
      displayName: "Filter value",
      description: "Value to filter by, should be of filter field type",
      hidden: function hidden(props, ctx) {
        return !props.filterParameter;
      }
    },
    limit: {
      type: "number",
      displayName: "Limit",
      description: "Maximum n umber of collections to fetch (0 for unlimited)."
    },
    noLayout: {
      type: "boolean",
      displayName: "No layout",
      description: "When set, Strapi Collection will not layout its children; instead, the layout set on its parent element will be used. Useful if you want to set flex gap or control container tag type.",
      defaultValue: false
    },
    noAutoRepeat: {
      type: "boolean",
      displayName: "No auto-repeat",
      description: "Do not automatically repeat children for every category.",
      defaultValue: false
    }
  }
};
function StrapiCollection(_ref2) {
  var name = _ref2.name,
      filterParameter = _ref2.filterParameter,
      filterValue = _ref2.filterValue,
      filterField = _ref2.filterField,
      limit = _ref2.limit,
      children = _ref2.children,
      className = _ref2.className,
      noLayout = _ref2.noLayout,
      noAutoRepeat = _ref2.noAutoRepeat,
      setControlContextData = _ref2.setControlContextData;
  var creds = ensure(React.useContext(CredentialsContext));

  if (!creds.host) {
    return React__default.createElement("div", null, "Please specify a host.");
  }

  var query$1 = creds.host + "/api/" + name;
  var cacheKey = JSON.stringify({
    creds: creds,
    name: name,
    filterField: filterField,
    filterValue: filterValue,
    filterParameter: filterParameter
  });
  var data = query.usePlasmicQueryData(cacheKey, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
    var _filterField, _filters;

    var requestInit, queryParams, resp;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (query$1) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", null);

          case 2:
            requestInit = {
              method: "GET"
            };

            if (creds.token) {
              requestInit.headers = {
                Authorization: "Bearer " + creds.token
              };
            }

            queryParams = qs.stringify(_extends({}, filterField && filterParameter && filterValue ? {
              filters: (_filters = {}, _filters[filterField] = (_filterField = {}, _filterField[filterParameter] = filterValue, _filterField), _filters)
            } : {}, {
              populate: "*"
            }));
            _context.next = 7;
            return fetch(query$1 + "?" + queryParams, requestInit);

          case 7:
            resp = _context.sent;
            return _context.abrupt("return", resp.json());

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));

  if (!(data != null && data.data)) {
    return React__default.createElement("div", null, "Please configure the Strapi provider with a valid host and token.");
  }

  if (!get(data.data, ["data"])) {
    return React__default.createElement("div", null, "Please specify a valid collection.");
  }

  var collectionData = get(data.data, ["data"]);
  var filterFieds = collectionData.flatMap(function (item) {
    var attributes = get(item, ["attributes"]);
    var displayableFields = Object.keys(attributes).filter(function (field) {
      var _value$data, _value$data$attribute;

      var value = attributes[field];
      var maybeMime = (_value$data = value.data) == null ? void 0 : (_value$data$attribute = _value$data.attributes) == null ? void 0 : _value$data$attribute.mime;
      return typeof value !== "object" || typeof maybeMime === "string" && maybeMime.startsWith("image");
    });
    return displayableFields;
  });
  setControlContextData == null ? void 0 : setControlContextData({
    strapiFields: uniq(filterFieds != null ? filterFieds : [])
  });

  if (filterParameter && !filterValue && !filterField) {
    return React__default.createElement("div", null, "Please specify a Filter Field and a Filter Value");
  }

  if (!filterParameter && filterValue && !filterField) {
    return React__default.createElement("div", null, "Please specify a Filter Parameter and a Filter Field");
  }

  if (!filterParameter && !filterValue && filterField) {
    return React__default.createElement("div", null, "Please specify a Filter Parameter and a Filter Value");
  }

  if (filterParameter && filterValue && !filterField) {
    return React__default.createElement("div", null, "Please specify a Filter Field");
  }

  if (!filterParameter && filterValue && filterField) {
    return React__default.createElement("div", null, "Please specify a Filter Parameter");
  }

  if (filterParameter && !filterValue && filterField) {
    return React__default.createElement("div", null, "Please specify a Filter Value");
  }

  var collection = limit > 0 ? collectionData.slice(0, limit) : collectionData;

  if (collection.length === 0) {
    return React__default.createElement("div", null, "No collection found ");
  }

  var repElements = noAutoRepeat ? children : collection.map(function (item, index) {
    return React__default.createElement(host.DataProvider, {
      key: item.id,
      name: "strapiItem",
      data: item,
      hidden: true
    }, React__default.createElement(host.DataProvider, {
      name: makeDataProviderName(name),
      data: item
    }, host.repeatedElement(index, children)));
  });
  return React__default.createElement(host.DataProvider, {
    name: "strapiItems",
    data: collection
  }, noLayout ? React__default.createElement(React__default.Fragment, null, " ", repElements, " ") : React__default.createElement("div", {
    className: className
  }, " ", repElements, " "));
}
var strapiFieldMeta = {
  name: "StrapiField",
  displayName: "Strapi Field",
  importName: "StrapiField",
  importPath: modulePath,
  props: {
    path: {
      type: "choice",
      options: function options(props, ctx) {
        var _ctx$fields;

        return (_ctx$fields = ctx == null ? void 0 : ctx.fields) != null ? _ctx$fields : [];
      },
      displayName: "Field",
      description: "Field name"
    }
  }
};
function StrapiField(_ref4) {
  var _data$data, _data$data$attributes;

  var className = _ref4.className,
      path = _ref4.path,
      setControlContextData = _ref4.setControlContextData;
  var item = host.useSelector("strapiItem");

  if (!item) {
    return React__default.createElement("div", null, "StrapiField must be used within a StrapiCollection");
  } // Getting only fields that aren't objects


  var attributes = get(item, ["attributes"]);
  var displayableFields = Object.keys(attributes).filter(function (field) {
    var _value$data2, _value$data2$attribut;

    var value = attributes[field];
    var maybeMime = (_value$data2 = value.data) == null ? void 0 : (_value$data2$attribut = _value$data2.attributes) == null ? void 0 : _value$data2$attribut.mime;
    return typeof value !== "object" || typeof maybeMime === "string" && maybeMime.startsWith("image");
  });
  setControlContextData == null ? void 0 : setControlContextData({
    fields: displayableFields,
    isImage: false
  });

  if (!path) {
    return React__default.createElement("div", null, "StrapiField must specify a field name.");
  }

  var data = get(item, ["attributes", path]);
  var maybeMime = data == null ? void 0 : (_data$data = data.data) == null ? void 0 : (_data$data$attributes = _data$data.attributes) == null ? void 0 : _data$data$attributes.mime;
  setControlContextData == null ? void 0 : setControlContextData({
    fields: displayableFields,
    isImage: typeof maybeMime === "string" && maybeMime.startsWith("image")
  });

  if (!data) {
    return React__default.createElement("div", null, "Please specify a valid field name.");
  } else if (typeof maybeMime === "string" && maybeMime.startsWith("image")) {
    var creds = ensure(React.useContext(CredentialsContext));
    var attrs = data.data.attributes;
    var img_url = attrs.url.startsWith("http") ? attrs.url : creds.host + attrs.url;
    var img_width = attrs.width;
    var img_height = attrs.height;
    return React__default.createElement("img", {
      className: className,
      src: img_url,
      width: 300,
      height: 300 * img_height / img_width
    });
  } else {
    return React__default.createElement("div", {
      className: className
    }, data);
  }
}

function registerAll(loader) {
  var _registerComponent = function _registerComponent(Component, defaultMeta) {
    if (loader) {
      loader.registerComponent(Component, defaultMeta);
    } else {
      registerComponent(Component, defaultMeta);
    }
  };

  if (loader) {
    loader.registerGlobalContext(StrapiCredentialsProvider, strapiCredentialsProviderMeta);
  } else {
    registerGlobalContext(StrapiCredentialsProvider, strapiCredentialsProviderMeta);
  }

  _registerComponent(StrapiCollection, strapiCollectionMeta);

  _registerComponent(StrapiField, strapiFieldMeta);
}

exports.StrapiCollection = StrapiCollection;
exports.StrapiCredentialsProvider = StrapiCredentialsProvider;
exports.StrapiField = StrapiField;
exports.ensure = ensure;
exports.registerAll = registerAll;
exports.strapiCollectionMeta = strapiCollectionMeta;
exports.strapiCredentialsProviderMeta = strapiCredentialsProviderMeta;
exports.strapiFieldMeta = strapiFieldMeta;
//# sourceMappingURL=plasmic-strapi.cjs.development.js.map
