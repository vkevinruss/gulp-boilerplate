var lux;
(function (lux) {
    var AnimBack = (function () {
        function AnimBack() {
        }
        AnimBack.easeIn = function (t, b, c, d) {
            return AnimBack.easeInExtended(t, b, c, d, 1.70158);
        };

        AnimBack.easeInExtended = function (t, b, c, d, s) {
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        };

        AnimBack.easeOut = function (t, b, c, d) {
            return AnimBack.easeOutExtended(t, b, c, d, 1.70158);
        };

        AnimBack.easeOutExtended = function (t, b, c, d, s) {
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        };

        AnimBack.easeInOut = function (t, b, c, d) {
            return AnimBack.easeInOutExtended(t, b, c, d, 1.70158);
        };

        AnimBack.easeInOutExtended = function (t, b, c, d, s) {
            if ((t /= d * 0.5) < 1)
                return c * 0.5 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;

            return c * 0.5 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        };
        return AnimBack;
    })();
    lux.AnimBack = AnimBack;
})(lux || (lux = {}));
var lux;
(function (lux) {
    var AnimBounce = (function () {
        function AnimBounce() {
        }
        AnimBounce.easeOut = function (t, b, c, d) {
            if ((t /= d) < (1 / 2.75))
                return c * (7.5625 * t * t) + b;
            else if (t < (2 / 2.75))
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
            else if (t < (2.5 / 2.75))
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
            else
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
        };

        AnimBounce.easeIn = function (t, b, c, d) {
            return c - AnimBounce.easeOut(d - t, 0.0, c, d) + b;
        };

        AnimBounce.easeInOut = function (t, b, c, d) {
            if (t < d * 0.5)
                return AnimBounce.easeIn(t * 2, 0.0, c, d) * 0.5 + b;
            else
                return AnimBounce.easeOut(t * 2 - d, 0.0, c, d) * 0.5 + c * 0.5 + b;
        };
        return AnimBounce;
    })();
    lux.AnimBounce = AnimBounce;
})(lux || (lux = {}));
var lux;
(function (lux) {
    var AnimCircular = (function () {
        function AnimCircular() {
        }
        AnimCircular.easeIn = function (t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        };

        AnimCircular.easeOut = function (t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        };

        AnimCircular.easeInOut = function (t, b, c, d) {
            if ((t /= d * 0.5) < 1)
                return -c * 0.5 * (Math.sqrt(1 - t * t) - 1) + b;
            return c * 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        };
        return AnimCircular;
    })();
    lux.AnimCircular = AnimCircular;
})(lux || (lux = {}));
var lux;
(function (lux) {
    var AnimCubic = (function () {
        function AnimCubic() {
        }
        AnimCubic.easeIn = function (t, b, c, d) {
            var tc = (t /= d) * t * t;
            return b + c * (tc);
        };

        AnimCubic.easeOut = function (t, b, c, d) {
            var ts = (t /= d) * t;
            var tc = ts * t;
            return b + c * (tc + -3 * ts + 3 * t);
        };

        AnimCubic.easeInOut = function (t, b, c, d) {
            var ts = (t /= d) * t;
            var tc = ts * t;
            return b + c * (4 * tc + -6 * ts + 3 * t);
        };
        return AnimCubic;
    })();
    lux.AnimCubic = AnimCubic;
})(lux || (lux = {}));
var lux;
(function (lux) {
    var AnimElastic = (function () {
        function AnimElastic() {
        }
        AnimElastic.easeIn = function (t, b, c, d) {
            return AnimElastic.easeInExtended(t, b, c, d, 0.0, 0.0);
        };

        AnimElastic.easeInExtended = function (t, b, c, d, a, p) {
            if (t == 0.0)
                return b;
            if ((t /= d) == 1.0)
                return b + c;
            if (p == 0.0)
                p = d * 0.3;

            var s = 0.0;

            if (a == 0.0 || a < Math.abs(c)) {
                a = c;
                s = p * 0.25;
            } else
                s = p / (2 * Math.PI) * Math.asin(c / a);

            return -(a * Math.pow(2, 10 * (--t)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        };

        AnimElastic.easeOut = function (t, b, c, d) {
            return AnimElastic.easeOutExtended(t, b, c, d, 0.0, 0.0);
        };

        AnimElastic.easeOutExtended = function (t, b, c, d, a, p) {
            if (t == 0.0)
                return b;
            if ((t /= d) == 1)
                return b + c;
            if (p == 0.0)
                p = d * 0.3;

            var s = 0.0;

            if (a == 0.0 || a < Math.abs(c)) {
                a = c;
                s = p * 0.25;
            } else
                s = p / (2 * Math.PI) * Math.asin(c / a);

            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        };

        AnimElastic.easeInOut = function (t, b, c, d) {
            return AnimElastic.easeInOutExtended(t, b, c, d, 0.0, 0.0);
        };

        AnimElastic.easeInOutExtended = function (t, b, c, d, a, p) {
            if (t == 0.0)
                return b;
            if ((t /= d * 0.5) == 2)
                return b + c;
            if (p == 0.0)
                p = d * (0.3 * 1.5);

            var s = 0.0;
            if (a == 0 || a < Math.abs(c)) {
                a = c;
                s = p * 0.25;
            } else
                s = p / (2 * Math.PI) * Math.asin(c / a);

            if (t < 1.0)
                return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;

            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
        };
        return AnimElastic;
    })();
    lux.AnimElastic = AnimElastic;
})(lux || (lux = {}));
var lux;
(function (lux) {
    var AnimExponential = (function () {
        function AnimExponential() {
        }
        AnimExponential.easeIn = function (t, b, c, d) {
            return t == 0.0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        };

        AnimExponential.easeOut = function (t, b, c, d) {
            return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        };

        AnimExponential.easeInOut = function (t, b, c, d) {
            if (t == 0.0)
                return b;

            if (t == d)
                return b + c;

            if ((t /= d * 0.5) < 1.0)
                return c * 0.5 * Math.pow(2, 10 * (t - 1)) + b;

            return c * 0.5 * (-Math.pow(2, -10 * --t) + 2) + b;
        };
        return AnimExponential;
    })();
    lux.AnimExponential = AnimExponential;
})(lux || (lux = {}));
var lux;
(function (lux) {
    var AnimLinear = (function () {
        function AnimLinear() {
        }
        AnimLinear.easeNone = function (t, b, c, d) {
            t /= d;
            return b + c * (t);
        };

        AnimLinear.easeIn = function (t, b, c, d) {
            return c * t / d + b;
        };

        AnimLinear.easeOut = function (t, b, c, d) {
            return c * t / d + b;
        };

        AnimLinear.easeInOut = function (t, b, c, d) {
            return c * t / d + b;
        };
        return AnimLinear;
    })();
    lux.AnimLinear = AnimLinear;
})(lux || (lux = {}));
var lux;
(function (lux) {
    var AnimQuadratic = (function () {
        function AnimQuadratic() {
        }
        AnimQuadratic.easeIn = function (t, b, c, d) {
            return c * (t /= d) * t + b;
        };

        AnimQuadratic.easeOut = function (t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        };

        AnimQuadratic.easeInOut = function (t, b, c, d) {
            if ((t /= d * 0.5) < 1.0)
                return c * 0.5 * t * t + b;
            return -c * 0.5 * ((--t) * (t - 2) - 1) + b;
        };
        return AnimQuadratic;
    })();
    lux.AnimQuadratic = AnimQuadratic;
})(lux || (lux = {}));
var lux;
(function (lux) {
    var AnimQuartic = (function () {
        function AnimQuartic() {
        }
        AnimQuartic.easeIn = function (t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        };

        AnimQuartic.easeOut = function (t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        };

        AnimQuartic.easeInOut = function (t, b, c, d) {
            if ((t /= d * 0.5) < 1.0)
                return c * 0.5 * t * t * t * t + b;
            return -c * 0.5 * ((t -= 2) * t * t * t - 2) + b;
        };
        return AnimQuartic;
    })();
    lux.AnimQuartic = AnimQuartic;
})(lux || (lux = {}));
var lux;
(function (lux) {
    var AnimQuintic = (function () {
        function AnimQuintic() {
        }
        AnimQuintic.easeIn = function (t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        };

        AnimQuintic.easeOut = function (t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        };

        AnimQuintic.easeInOut = function (t, b, c, d) {
            if ((t /= d * 0.5) < 1.0)
                return c * 0.5 * t * t * t * t * t + b;
            return c * 0.5 * ((t -= 2) * t * t * t * t + 2) + b;
        };
        return AnimQuintic;
    })();
    lux.AnimQuintic = AnimQuintic;
})(lux || (lux = {}));
var lux;
(function (lux) {
    var AnimSine = (function () {
        function AnimSine() {
        }
        AnimSine.easeIn = function (t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI * 0.5)) + c + b;
        };

        AnimSine.easeOut = function (t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI * 0.5)) + b;
        };

        AnimSine.easeInOut = function (t, b, c, d) {
            return -c * 0.5 * (Math.cos(Math.PI * t / d) - 1) + b;
        };
        return AnimSine;
    })();
    lux.AnimSine = AnimSine;
})(lux || (lux = {}));
/// <reference path='easing/back.ts' />
/// <reference path='easing/bounce.ts' />
/// <reference path='easing/circular.ts' />
/// <reference path='easing/cubic.ts' />
/// <reference path='easing/elastic.ts' />
/// <reference path='easing/exponential.ts' />
/// <reference path='easing/linear.ts' />
/// <reference path='easing/quadratic.ts' />
/// <reference path='easing/quartic.ts' />
/// <reference path='easing/quintic.ts' />
/// <reference path='easing/sine.ts' />
var lux;
(function (lux) {
    //----- Resource: http://www.timotheegroleau.com/Flash/experiments/easing_function_generator.htm
    (function (AnimEaseCategory) {
        AnimEaseCategory[AnimEaseCategory["LINEAR"] = 0] = "LINEAR";
        AnimEaseCategory[AnimEaseCategory["QUADRATIC"] = 1] = "QUADRATIC";
        AnimEaseCategory[AnimEaseCategory["CUBIC"] = 2] = "CUBIC";
        AnimEaseCategory[AnimEaseCategory["QUARTIC"] = 3] = "QUARTIC";
        AnimEaseCategory[AnimEaseCategory["QUINTIC"] = 4] = "QUINTIC";
        AnimEaseCategory[AnimEaseCategory["SINE"] = 5] = "SINE";
        AnimEaseCategory[AnimEaseCategory["EXPONENTIAL"] = 6] = "EXPONENTIAL";
        AnimEaseCategory[AnimEaseCategory["CIRCULAR"] = 7] = "CIRCULAR";
        AnimEaseCategory[AnimEaseCategory["ELASTIC"] = 8] = "ELASTIC";
        AnimEaseCategory[AnimEaseCategory["BACK"] = 9] = "BACK";
        AnimEaseCategory[AnimEaseCategory["BOUNCE"] = 10] = "BOUNCE";
    })(lux.AnimEaseCategory || (lux.AnimEaseCategory = {}));
    var AnimEaseCategory = lux.AnimEaseCategory;

    (function (AnimEaseType) {
        AnimEaseType[AnimEaseType["NONE"] = 0] = "NONE";
        AnimEaseType[AnimEaseType["IN"] = 1] = "IN";
        AnimEaseType[AnimEaseType["OUT"] = 2] = "OUT";
        AnimEaseType[AnimEaseType["INOUT"] = 3] = "INOUT";
    })(lux.AnimEaseType || (lux.AnimEaseType = {}));
    var AnimEaseType = lux.AnimEaseType;

    //----- t - the elapsed time.
    //----- b - the starting position. In a one dimensional setting this is the value you would get if t = 0.
    //----- c - the 'change' in position. So if you want to transition from 34 to 56 then c = (56-34) = 13. (more on this later)
    //----- d - duration of the transition. If you want the transition to last, for example, 2 seconds then d= 2.
    var AnimEase = (function () {
        function AnimEase() {
        }
        Object.defineProperty(AnimEase, "default", {
            get: function () {
                return lux.AnimCubic.easeInOut;
            },
            enumerable: true,
            configurable: true
        });

        AnimEase.getEasingFunction = function (easeCategory, easeType) {
            switch (easeCategory) {
                case 0 /* LINEAR */:
                    switch (easeType) {
                        case 1 /* IN */:
                            return lux.AnimLinear.easeIn;
                        case 2 /* OUT */:
                            return lux.AnimLinear.easeOut;
                        case 3 /* INOUT */:
                            return lux.AnimLinear.easeInOut;
                        case 0 /* NONE */:
                            return lux.AnimLinear.easeNone;
                    }
                    break;
                case 1 /* QUADRATIC */:
                    switch (easeType) {
                        case 1 /* IN */:
                            return lux.AnimQuadratic.easeIn;
                        case 2 /* OUT */:
                            return lux.AnimQuadratic.easeOut;
                        case 3 /* INOUT */:
                            return lux.AnimQuadratic.easeInOut;
                        case 0 /* NONE */:
                            break;
                    }
                    break;
                case 2 /* CUBIC */:
                    switch (easeType) {
                        case 1 /* IN */:
                            return lux.AnimCubic.easeIn;
                        case 2 /* OUT */:
                            return lux.AnimCubic.easeOut;
                        case 3 /* INOUT */:
                            return lux.AnimCubic.easeInOut;
                        case 0 /* NONE */:
                            break;
                    }
                    break;
                case 3 /* QUARTIC */:
                    switch (easeType) {
                        case 1 /* IN */:
                            return lux.AnimQuartic.easeIn;
                        case 2 /* OUT */:
                            return lux.AnimQuartic.easeOut;
                        case 3 /* INOUT */:
                            return lux.AnimQuartic.easeInOut;
                        case 0 /* NONE */:
                            break;
                    }
                    break;
                case 4 /* QUINTIC */:
                    switch (easeType) {
                        case 1 /* IN */:
                            return lux.AnimQuintic.easeIn;
                        case 2 /* OUT */:
                            return lux.AnimQuintic.easeOut;
                        case 3 /* INOUT */:
                            return lux.AnimQuintic.easeInOut;
                        case 0 /* NONE */:
                            break;
                    }
                    break;
                case 5 /* SINE */:
                    switch (easeType) {
                        case 1 /* IN */:
                            return lux.AnimSine.easeIn;
                        case 2 /* OUT */:
                            return lux.AnimSine.easeOut;
                        case 3 /* INOUT */:
                            return lux.AnimSine.easeInOut;
                        case 0 /* NONE */:
                            break;
                    }
                    break;
                case 6 /* EXPONENTIAL */:
                    switch (easeType) {
                        case 1 /* IN */:
                            return lux.AnimExponential.easeIn;
                        case 2 /* OUT */:
                            return lux.AnimExponential.easeOut;
                        case 3 /* INOUT */:
                            return lux.AnimExponential.easeInOut;
                        case 0 /* NONE */:
                            break;
                    }
                    break;
                case 7 /* CIRCULAR */:
                    switch (easeType) {
                        case 1 /* IN */:
                            return lux.AnimCircular.easeIn;
                        case 2 /* OUT */:
                            return lux.AnimCircular.easeOut;
                        case 3 /* INOUT */:
                            return lux.AnimCircular.easeInOut;
                        case 0 /* NONE */:
                            break;
                    }
                    break;
                case 8 /* ELASTIC */:
                    switch (easeType) {
                        case 1 /* IN */:
                            return lux.AnimElastic.easeIn;
                        case 2 /* OUT */:
                            return lux.AnimElastic.easeOut;
                        case 3 /* INOUT */:
                            return lux.AnimElastic.easeInOut;
                        case 0 /* NONE */:
                            break;
                    }
                    break;
                case 9 /* BACK */:
                    switch (easeType) {
                        case 1 /* IN */:
                            return lux.AnimBack.easeIn;
                        case 2 /* OUT */:
                            return lux.AnimBack.easeOut;
                        case 3 /* INOUT */:
                            return lux.AnimBack.easeInOut;
                        case 0 /* NONE */:
                            break;
                    }
                    break;
                case 10 /* BOUNCE */:
                    switch (easeType) {
                        case 1 /* IN */:
                            return lux.AnimBounce.easeIn;
                        case 2 /* OUT */:
                            return lux.AnimBounce.easeOut;
                        case 3 /* INOUT */:
                            return lux.AnimBounce.easeInOut;
                        case 0 /* NONE */:
                            break;
                    }
                    break;
            }

            return lux.AnimLinear.easeNone;
        };
        return AnimEase;
    })();
    lux.AnimEase = AnimEase;
})(lux || (lux = {}));
// Copyright 2013 Basarat Ali Syed. All Rights Reserved.
//
// Licensed under MIT open source license http://opensource.org/licenses/MIT
//
// Orginal javascript code was by Mauricio Santos
/**
* @namespace Top level namespace for collections, a TypeScript data structure library.
*/
var lux;
(function (lux) {
    

    

    

    var collections = (function () {
        function collections() {
        }
        /**
        * Default function to compare element order.
        * @function
        */
        collections.defaultCompare = function (a, b) {
            if (a < b) {
                return -1;
            } else if (a === b) {
                return 0;
            } else {
                return 1;
            }
        };

        /**
        * Default function to test equality.
        * @function
        */
        collections.defaultEquals = function (a, b) {
            return a === b;
        };

        /**
        * Default function to convert an object to a string.
        * @function
        */
        collections.defaultToString = function (item) {
            if (item === null) {
                return 'COLLECTION_NULL';
            } else if (collections.isUndefined(item)) {
                return 'COLLECTION_UNDEFINED';
            } else if (collections.isString(item)) {
                return item;
            } else {
                return item.toString();
            }
        };

        /**
        * Joins all the properies of the object using the provided join string
        */
        collections.makeString = function (item, join) {
            if (typeof join === "undefined") { join = ","; }
            if (item === null) {
                return 'COLLECTION_NULL';
            } else if (collections.isUndefined(item)) {
                return 'COLLECTION_UNDEFINED';
            } else if (collections.isString(item)) {
                return item.toString();
            } else {
                var toret = "{";
                var first = true;
                for (var prop in item) {
                    if (item.hasOwnProperty(prop)) {
                        if (first)
                            first = false;
                        else
                            toret = toret + join;
                        toret = toret + prop + ":" + item[prop];
                    }
                }
                return toret + "}";
            }
        };

        /**
        * Checks if the given argument is a function.
        * @function
        */
        collections.isFunction = function (func) {
            return (typeof func) === 'function';
        };

        /**
        * Checks if the given argument is undefined.
        * @function
        */
        collections.isUndefined = function (obj) {
            return (typeof obj) === 'undefined';
        };

        /**
        * Checks if the given argument is a string.
        * @function
        */
        collections.isString = function (obj) {
            return Object.prototype.toString.call(obj) === '[object String]';
        };

        /**
        * Reverses a compare function.
        * @function
        */
        collections.reverseCompareFunction = function (compareFunction) {
            if (!collections.isFunction(compareFunction)) {
                return function (a, b) {
                    if (a < b) {
                        return 1;
                    } else if (a === b) {
                        return 0;
                    } else {
                        return -1;
                    }
                };
            } else {
                return function (d, v) {
                    return compareFunction(d, v) * -1;
                };
            }
        };

        /**
        * Returns an equal function given a compare function.
        * @function
        */
        collections.compareToEquals = function (compareFunction) {
            return function (a, b) {
                return compareFunction(a, b) === 0;
            };
        };
        return collections;
    })();
    lux.collections = collections;
})(lux || (lux = {})); // End of module
/// <reference path="collections.ts" />
var lux;
(function (lux) {
    var arrays = (function () {
        function arrays() {
        }
        /**
        * Returns the position of the first occurrence of the specified item
        * within the specified array.
        * @param {*} array the array in which to search the element.
        * @param {Object} item the element to search.
        * @param {function(Object,Object):boolean=} equalsFunction optional function used to
        * check equality between 2 elements.
        * @return {number} the position of the first occurrence of the specified element
        * within the specified array, or -1 if not found.
        */
        arrays.indexOf = function (array, item, equalsFunction) {
            var equals = equalsFunction || lux.collections.defaultEquals;
            var length = array.length;
            for (var i = 0; i < length; i++) {
                if (equals(array[i], item)) {
                    return i;
                }
            }
            return -1;
        };

        /**
        * Returns the position of the last occurrence of the specified element
        * within the specified array.
        * @param {*} array the array in which to search the element.
        * @param {Object} item the element to search.
        * @param {function(Object,Object):boolean=} equalsFunction optional function used to
        * check equality between 2 elements.
        * @return {number} the position of the last occurrence of the specified element
        * within the specified array or -1 if not found.
        */
        arrays.lastIndexOf = function (array, item, equalsFunction) {
            var equals = equalsFunction || lux.collections.defaultEquals;
            var length = array.length;
            for (var i = length - 1; i >= 0; i--) {
                if (equals(array[i], item)) {
                    return i;
                }
            }
            return -1;
        };

        /**
        * Returns true if the specified array contains the specified element.
        * @param {*} array the array in which to search the element.
        * @param {Object} item the element to search.
        * @param {function(Object,Object):boolean=} equalsFunction optional function to
        * check equality between 2 elements.
        * @return {boolean} true if the specified array contains the specified element.
        */
        arrays.contains = function (array, item, equalsFunction) {
            return arrays.indexOf(array, item, equalsFunction) >= 0;
        };

        /**
        * Removes the first ocurrence of the specified element from the specified array.
        * @param {*} array the array in which to search element.
        * @param {Object} item the element to search.
        * @param {function(Object,Object):boolean=} equalsFunction optional function to
        * check equality between 2 elements.
        * @return {boolean} true if the array changed after this call.
        */
        arrays.remove = function (array, item, equalsFunction) {
            var index = arrays.indexOf(array, item, equalsFunction);
            if (index < 0) {
                return false;
            }
            array.splice(index, 1);
            return true;
        };

        /**
        * Returns the number of elements in the specified array equal
        * to the specified object.
        * @param {Array} array the array in which to determine the frequency of the element.
        * @param {Object} item the element whose frequency is to be determined.
        * @param {function(Object,Object):boolean=} equalsFunction optional function used to
        * check equality between 2 elements.
        * @return {number} the number of elements in the specified array
        * equal to the specified object.
        */
        arrays.frequency = function (array, item, equalsFunction) {
            var equals = equalsFunction || lux.collections.defaultEquals;
            var length = array.length;
            var freq = 0;
            for (var i = 0; i < length; i++) {
                if (equals(array[i], item)) {
                    freq++;
                }
            }
            return freq;
        };

        /**
        * Returns true if the two specified arrays are equal to one another.
        * Two arrays are considered equal if both arrays contain the same number
        * of elements, and all corresponding pairs of elements in the two
        * arrays are equal and are in the same order.
        * @param {Array} array1 one array to be tested for equality.
        * @param {Array} array2 the other array to be tested for equality.
        * @param {function(Object,Object):boolean=} equalsFunction optional function used to
        * check equality between elemements in the arrays.
        * @return {boolean} true if the two arrays are equal
        */
        arrays.equals = function (array1, array2, equalsFunction) {
            var equals = equalsFunction || lux.collections.defaultEquals;

            if (array1.length !== array2.length) {
                return false;
            }
            var length = array1.length;
            for (var i = 0; i < length; i++) {
                if (!equals(array1[i], array2[i])) {
                    return false;
                }
            }
            return true;
        };

        /**
        * Returns a shallow copy of the specified array.
        * @param {*} array the array to copy.
        * @return {Array} a copy of the specified array
        */
        arrays.copy = function (array) {
            return array.concat();
        };

        /**
        * Swaps the elements at the specified positions in the specified array.
        * @param {Array} array The array in which to swap elements.
        * @param {number} i the index of one element to be swapped.
        * @param {number} j the index of the other element to be swapped.
        * @return {boolean} true if the array is defined and the indexes are valid.
        */
        arrays.swap = function (array, i, j) {
            if (i < 0 || i >= array.length || j < 0 || j >= array.length) {
                return false;
            }
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            return true;
        };

        arrays.toString = function (array) {
            return '[' + array.toString() + ']';
        };

        /**
        * Executes the provided function once for each element present in this array
        * starting from index 0 to length - 1.
        * @param {Array} array The array in which to iterate.
        * @param {function(Object):*} callback function to execute, it is
        * invoked with one argument: the element value, to break the iteration you can
        * optionally return false.
        */
        arrays.forEach = function (array, callback) {
            var lenght = array.length;
            for (var i = 0; i < lenght; i++) {
                if (callback(array[i]) === false) {
                    return;
                }
            }
        };
        return arrays;
    })();
    lux.arrays = arrays;
})(lux || (lux = {}));
/// <reference path="collections.ts" />
/// <reference path="arrays.ts" />
var lux;
(function (lux) {
    

    var List = (function () {
        /**
        * Creates an empty Linked List.
        * @class A linked list is a data structure consisting of a group of nodes
        * which together represent a sequence.
        * @constructor
        */
        function List() {
            /**
            * First node in the list
            * @type {Object}
            * @private
            */
            this.firstNode = null;
            /**
            * Last node in the list
            * @type {Object}
            * @private
            */
            this.lastNode = null;
            /**
            * Number of elements in the list
            * @type {number}
            * @private
            */
            this.nElements = 0;
        }
        /**
        * Adds an element to this list.
        * @param {Object} item element to be added.
        * @param {number=} index optional index to add the element. If no index is specified
        * the element is added to the end of this list.
        * @return {boolean} true if the element was added or false if the index is invalid
        * or if the element is undefined.
        */
        List.prototype.add = function (item, index) {
            if (lux.collections.isUndefined(index)) {
                index = this.nElements;
            }
            if (index < 0 || index > this.nElements || lux.collections.isUndefined(item)) {
                return false;
            }
            var newNode = this.createNode(item);
            if (this.nElements === 0) {
                // First node in the list.
                this.firstNode = newNode;
                this.lastNode = newNode;
            } else if (index === this.nElements) {
                // Insert at the end.
                this.lastNode.next = newNode;
                this.lastNode = newNode;
            } else if (index === 0) {
                // Change first node.
                newNode.next = this.firstNode;
                this.firstNode = newNode;
            } else {
                var prev = this.nodeAtIndex(index - 1);
                newNode.next = prev.next;
                prev.next = newNode;
            }
            this.nElements++;
            return true;
        };

        Object.defineProperty(List.prototype, "first", {
            /**
            * Returns the first element in this list.
            * @return {*} the first element of the list or undefined if the list is
            * empty.
            */
            get: function () {
                if (this.firstNode !== null) {
                    return this.firstNode.element;
                }
                return undefined;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(List.prototype, "last", {
            /**
            * Returns the last element in this list.
            * @return {*} the last element in the list or undefined if the list is
            * empty.
            */
            get: function () {
                if (this.lastNode !== null) {
                    return this.lastNode.element;
                }
                return undefined;
            },
            enumerable: true,
            configurable: true
        });

        /**
        * Returns the element at the specified position in this list.
        * @param {number} index desired index.
        * @return {*} the element at the given index or undefined if the index is
        * out of bounds.
        */
        List.prototype.elementAtIndex = function (index) {
            var node = this.nodeAtIndex(index);
            if (node === null) {
                return undefined;
            }
            return node.element;
        };
        List.prototype.item = function (index) {
            return this.elementAtIndex(index);
        };

        /**
        * Replaces/updates an element in this list.
        * @param {Object} element that will replace the current item in the list.
        * @param {number=} index of item to replace.
        * @return {boolean} true if the element was replaced or false if the index is invalid
        * or if the element is undefined.
        */
        List.prototype.replace = function (item, index) {
            if (index === this.nElements) {
                this.add(item, index);
            }
            if (index < 0 || index > this.nElements || lux.collections.isUndefined(item)) {
                return false;
            }
            var node = this.nodeAtIndex(index);
            if (node === null) {
                return undefined;
            }
            node.element = item;
            return true;
        };

        /**
        * Returns the index in this list of the first occurrence of the
        * specified element, or -1 if the List does not contain this element.
        * <p>If the elements inside this list are
        * not comparable with the === operator a custom equals function should be
        * provided to perform searches, the function must receive two arguments and
        * return true if they are equal, false otherwise. Example:</p>
        *
        * <pre>
        * var petsAreEqualByName = function(pet1, pet2) {
        *  return pet1.name === pet2.name;
        * }
        * </pre>
        * @param {Object} item element to search for.
        * @param {function(Object,Object):boolean=} equalsFunction Optional
        * function used to check if two elements are equal.
        * @return {number} the index in this list of the first occurrence
        * of the specified element, or -1 if this list does not contain the
        * element.
        */
        List.prototype.indexOf = function (item, equalsFunction) {
            var equalsF = equalsFunction || lux.collections.defaultEquals;
            if (lux.collections.isUndefined(item)) {
                return -1;
            }
            var currentNode = this.firstNode;
            var index = 0;
            while (currentNode !== null) {
                if (equalsF(currentNode.element, item)) {
                    return index;
                }
                index++;
                currentNode = currentNode.next;
            }
            return -1;
        };

        /**
        * Returns true if this list contains the specified element.
        * <p>If the elements inside the list are
        * not comparable with the === operator a custom equals function should be
        * provided to perform searches, the function must receive two arguments and
        * return true if they are equal, false otherwise. Example:</p>
        *
        * <pre>
        * var petsAreEqualByName = function(pet1, pet2) {
        *  return pet1.name === pet2.name;
        * }
        * </pre>
        * @param {Object} item element to search for.
        * @param {function(Object,Object):boolean=} equalsFunction Optional
        * function used to check if two elements are equal.
        * @return {boolean} true if this list contains the specified element, false
        * otherwise.
        */
        List.prototype.contains = function (item, equalsFunction) {
            return (this.indexOf(item, equalsFunction) >= 0);
        };

        /**
        * Removes the first occurrence of the specified element in this list.
        * <p>If the elements inside the list are
        * not comparable with the === operator a custom equals function should be
        * provided to perform searches, the function must receive two arguments and
        * return true if they are equal, false otherwise. Example:</p>
        *
        * <pre>
        * var petsAreEqualByName = function(pet1, pet2) {
        *  return pet1.name === pet2.name;
        * }
        * </pre>
        * @param {Object} item element to be removed from this list, if present.
        * @return {boolean} true if the list contained the specified element.
        */
        List.prototype.remove = function (item, equalsFunction) {
            var equalsF = equalsFunction || lux.collections.defaultEquals;
            if (this.nElements < 1 || lux.collections.isUndefined(item)) {
                return false;
            }
            var previous = null;
            var currentNode = this.firstNode;

            while (currentNode !== null) {
                if (equalsF(currentNode.element, item)) {
                    if (currentNode === this.firstNode) {
                        this.firstNode = this.firstNode.next;
                        if (currentNode === this.lastNode) {
                            this.lastNode = null;
                        }
                    } else if (currentNode === this.lastNode) {
                        this.lastNode = previous;
                        previous.next = currentNode.next;
                        currentNode.next = null;
                    } else {
                        previous.next = currentNode.next;
                        currentNode.next = null;
                    }
                    this.nElements--;
                    return true;
                }
                previous = currentNode;
                currentNode = currentNode.next;
            }
            return false;
        };

        /**
        * Removes all of the elements from this list.
        */
        List.prototype.clear = function () {
            this.firstNode = null;
            this.lastNode = null;
            this.nElements = 0;
        };

        /**
        * Returns true if this list is equal to the given list.
        * Two lists are equal if they have the same elements in the same order.
        * @param {List} other the other list.
        * @param {function(Object,Object):boolean=} equalsFunction optional
        * function used to check if two elements are equal. If the elements in the lists
        * are custom objects you should provide a function, otherwise
        * the === operator is used to check equality between elements.
        * @return {boolean} true if this list is equal to the given list.
        */
        List.prototype.equals = function (other, equalsFunction) {
            var eqF = equalsFunction || lux.collections.defaultEquals;
            if (!(other instanceof List)) {
                return false;
            }
            if (this.length !== other.length) {
                return false;
            }
            return this.equalsAux(this.firstNode, other.firstNode, eqF);
        };

        /**
        * @private
        */
        List.prototype.equalsAux = function (n1, n2, eqF) {
            while (n1 !== null) {
                if (!eqF(n1.element, n2.element)) {
                    return false;
                }
                n1 = n1.next;
                n2 = n2.next;
            }
            return true;
        };

        /**
        * Removes the element at the specified position in this list.
        * @param {number} index given index.
        * @return {*} removed element or undefined if the index is out of bounds.
        */
        List.prototype.removeAtIndex = function (index) {
            if (index < 0 || index >= this.nElements) {
                return undefined;
            }
            var element;
            if (this.nElements === 1) {
                //First node in the list.
                element = this.firstNode.element;
                this.firstNode = null;
                this.lastNode = null;
            } else {
                var previous = this.nodeAtIndex(index - 1);
                if (previous === null) {
                    element = this.firstNode.element;
                    this.firstNode = this.firstNode.next;
                } else if (previous.next === this.lastNode) {
                    element = this.lastNode.element;
                    this.lastNode = previous;
                }
                if (previous !== null) {
                    element = previous.next.element;
                    previous.next = previous.next.next;
                }
            }
            this.nElements--;
            return element;
        };

        /**
        * Executes the provided function once for each element present in this list in order.
        * @param {function(Object):*} callback function to execute, it is
        * invoked with one argument: the element value, to break the iteration you can
        * optionally return false.
        */
        List.prototype.forEach = function (callback) {
            var currentNode = this.firstNode;
            while (currentNode !== null) {
                if (callback(currentNode.element) === false) {
                    break;
                }
                currentNode = currentNode.next;
            }
        };

        /**
        * Reverses the order of the elements in this linked list (makes the last
        * element first, and the first element last).
        */
        List.prototype.reverse = function () {
            var previous = null;
            var current = this.firstNode;
            var temp = null;
            while (current !== null) {
                temp = current.next;
                current.next = previous;
                previous = current;
                current = temp;
            }
            temp = this.firstNode;
            this.firstNode = this.lastNode;
            this.lastNode = temp;
        };

        /**
        * Returns an array containing all of the elements in this list in proper
        * sequence.
        * @return {Array.<*>} an array containing all of the elements in this list,
        * in proper sequence.
        */
        List.prototype.toArray = function () {
            var array = [];
            var currentNode = this.firstNode;
            while (currentNode !== null) {
                array.push(currentNode.element);
                currentNode = currentNode.next;
            }
            return array;
        };

        Object.defineProperty(List.prototype, "length", {
            /**
            * Returns the number of elements in this list.
            * @return {number} the number of elements in this list.
            */
            get: function () {
                return this.nElements;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(List.prototype, "isEmpty", {
            /**
            * Returns true if this list contains no elements.
            * @return {boolean} true if this list contains no elements.
            */
            get: function () {
                return this.nElements <= 0;
            },
            enumerable: true,
            configurable: true
        });

        List.prototype.toString = function () {
            return lux.arrays.toString(this.toArray());
        };

        /**
        * @private
        */
        List.prototype.nodeAtIndex = function (index) {
            if (index < 0 || index >= this.nElements) {
                return null;
            }
            if (index === (this.nElements - 1)) {
                return this.lastNode;
            }
            var node = this.firstNode;
            for (var i = 0; i < index; i++) {
                node = node.next;
            }
            return node;
        };

        /**
        * @private
        */
        List.prototype.createNode = function (item) {
            return {
                element: item,
                next: null
            };
        };

        List.prototype.sort = function (compareFn) {
            var array = this.toArray();
            array.sort(compareFn);
            this.clear();
            for (var i = 0; i < array.length; i++) {
                this.add(array[i]);
            }
        };
        return List;
    })();
    lux.List = List;
})(lux || (lux = {})); // End of module
/// <reference path='signal.ts' />
var lux;
(function (lux) {
    /// <reference path='signal.ts' />
    /*
    *	@desc   	An object that represents a binding between a Signal and a listener function.
    *               Released under the MIT license
    *				http://millermedeiros.github.com/js-signals/
    *
    *	@version	1.0 - 7th March 2013
    *
    *	@author 	Richard Davey, TypeScript conversion
    *	@author		Miller Medeiros, JS Signals
    *	@author		Robert Penner, AS Signals
    *
    *	@url		http://www.kiwijs.org
    *
    */
    var SignalBinding = (function () {
        /**
        * Object that represents a binding between a Signal and a listener function.
        * <br />- <strong>This is an internal constructor and shouldn't be called by regular users.</strong>
        * <br />- inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
        * @author Miller Medeiros
        * @constructor
        * @internal
        * @name SignalBinding
        * @param {Signal} signal Reference to Signal object that listener is currently bound to.
        * @param {Function} listener Handler function bound to the signal.
        * @param {boolean} isOnce If binding should be executed just once.
        * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
        * @param {Number} [priority] The priority level of the event listener. (default = 0).
        */
        function SignalBinding(signal, listener, isOnce, listenerContext, priority) {
            if (typeof priority === "undefined") { priority = 0; }
            /**
            * If binding is active and should be executed.
            * @type boolean
            */
            this.isActive = true;
            this._listener = listener;
            this._isOnce = isOnce;
            this.context = listenerContext;
            this._signal = signal;
            this.priority = priority;
        }
        /**
        * Call listener passing arbitrary parameters.
        * <p>If binding was added using `Signal.listenOnce()` it will be automatically removed from signal dispatch queue,
        * this method is used internally for the signal dispatch.</p>
        * @param {T} [param] Parameter that should be passed to the listener
        * @return {*} Value returned by the listener.
        */
        SignalBinding.prototype.execute = function (param) {
            var handlerReturn;

            if (this.isActive && !!this._listener) {
                handlerReturn = this._listener.apply(this.context, [param]);

                if (this._isOnce) {
                    this.detach();
                }
            }

            return handlerReturn;
        };

        /**
        * Detach binding from signal.
        * - alias to: mySignal.remove(myBinding.getListener());
        * @return {Function|null} Handler function bound to the signal or `null` if binding was previously detached.
        */
        SignalBinding.prototype.detach = function () {
            return this.isBound() ? this._signal.remove(this._listener, this.context) : null;
        };

        /**
        * @return {boolean} Is the binding still bound to the signal with a listener?
        */
        SignalBinding.prototype.isBound = function () {
            return (!!this._signal && !!this._listener);
        };

        /**
        * @return {boolean} Will SignalBinding be executed only once?
        */
        SignalBinding.prototype.isOnce = function () {
            return this._isOnce;
        };

        /**
        * @return {Function} Handler function bound to the signal.
        */
        SignalBinding.prototype.getListener = function () {
            return this._listener;
        };

        /**
        * @return {Signal} Signal that listener is currently bound to.
        */
        SignalBinding.prototype.getSignal = function () {
            return this._signal;
        };

        /**
        * Delete instance properties
        * @private
        */
        SignalBinding.prototype.destroy = function () {
            delete this._signal;
            delete this._listener;
            delete this.context;
        };

        /**
        * @return {string} String representation of the object.
        */
        SignalBinding.prototype.toString = function () {
            return '[SignalBinding isOnce:' + this._isOnce + ', isBound:' + this.isBound() + ', isActive:' + this.isActive + ']';
        };
        return SignalBinding;
    })();
    lux.SignalBinding = SignalBinding;
})(lux || (lux = {}));
/// <reference path='signalBinding.ts' />
var lux;
(function (lux) {
    /**
    *	@desc       A TypeScript conversion of JS Signals by Miller Medeiros
    *               Released under the MIT license
    *				http://millermedeiros.github.com/js-signals/
    *
    *	@version	1.0 - 7th March 2013
    *
    *	@author 	Richard Davey, TypeScript conversion
    *	@author		Miller Medeiros, JS Signals
    *	@author		Robert Penner, AS Signals
    *
    *	@url		http://www.photonstorm.com
    */
    /**
    * Custom event broadcaster
    * <br />- inspired by Robert Penner's AS3 Signals.
    * @name Signal
    * @author Miller Medeiros
    * @constructor
    */
    var Signal = (function () {
        function Signal() {
            /**
            * @property _bindings
            * @type Array
            * @private
            */
            this._bindings = [];
            /**
            * @property _prevParam
            * @type Any
            * @private
            */
            this._prevParam = null;
            /**
            * If Signal should keep record of previously dispatched parameters and
            * automatically execute listener during `listen()`/`listenOnce()` if Signal was
            * already dispatched before.
            * @type boolean
            */
            this.isMemorize = false;
            /**
            * @type boolean
            * @private
            */
            this._bShouldPropagate = true;
            /**
            * If Signal is active and should broadcast events.
            * <p><strong>IMPORTANT:</strong> Setting this property during a dispatch will only affect the next dispatch,
            * if you want to stop the propagation of a signal use `halt()` instead.</p>
            * @type boolean
            */
            this.isActive = true;
        }
        /**
        * @method validateListener
        * @param {any} listener
        * @param {any} fnName
        */
        Signal.prototype.validateListener = function (listener, fnName) {
            if (typeof listener !== 'function') {
                throw new Error('listener is a required param of {fn}() and should be a Function.'.replace('{fn}', fnName));
            }
        };

        /**
        * @param {Function} listener
        * @param {boolean} isOnce
        * @param {Object} [listenerContext]
        * @param {number} [priority]
        * @return {SignalBinding<T>}
        * @private
        */
        Signal.prototype._registerListener = function (listener, isOnce, listenerContext, priority) {
            var prevIndex = this._indexOfListener(listener, listenerContext);
            var binding;

            if (prevIndex !== -1) {
                binding = this._bindings[prevIndex];

                if (binding.isOnce() !== isOnce) {
                    throw new Error('You cannot listen' + (isOnce ? '' : 'Once') + '() then add' + (!isOnce ? '' : 'Once') + '() the same listener without removing the relationship first.');
                }
            } else {
                binding = new lux.SignalBinding(this, listener, isOnce, listenerContext, priority);

                this._addBinding(binding);
            }

            if (this.isMemorize && this._prevParam) {
                binding.execute(this._prevParam);
            }

            return binding;
        };

        /**
        * @method _addBinding
        * @param {SignalBinding<T>} binding
        * @private
        */
        Signal.prototype._addBinding = function (binding) {
            //----- Simplified insertion sort
            var n = this._bindings.length;

            do {
                --n;
            } while(this._bindings[n] && binding.priority <= this._bindings[n].priority);

            this._bindings.splice(n + 1, 0, binding);
        };

        /**
        * @method _indexOfListener
        * @param {Function} listener
        * @param {any} context
        * @return {number}
        * @private
        */
        Signal.prototype._indexOfListener = function (listener, context) {
            var n = this._bindings.length;
            var cur;

            while (n--) {
                cur = this._bindings[n];

                if (cur.getListener() === listener && cur.context === context) {
                    return n;
                }
            }

            return -1;
        };

        /**
        * Check if listener was attached to Signal.
        * @param {Function} listener
        * @param {Object} [context]
        * @return {boolean} if Signal has the specified listener.
        */
        Signal.prototype.has = function (listener, context) {
            if (typeof context === "undefined") { context = null; }
            return this._indexOfListener(listener, context) !== -1;
        };

        /**
        * Add a listener to the signal.
        * @param {Function} listener Signal handler function.
        * @param {Object} [listenerContext] Context on which listener will be executed
        * (object that should represent the `this` variable inside listener function).
        * @param {Number} [priority] The priority level of the event listener.
        * Listeners with higher priority will be executed before listeners with lower priority.
        * Listeners with same priority level will be executed at the same order as they were added. (default = 0)
        * @return {SignalBinding<T>} An Object representing the binding between the Signal and listener.
        */
        Signal.prototype.listen = function (listener, listenerContext, priority) {
            if (typeof listenerContext === "undefined") { listenerContext = null; }
            if (typeof priority === "undefined") { priority = 0; }
            this.validateListener(listener, 'listen');
            return this._registerListener(listener, false, listenerContext, priority);
        };

        /**
        * Add listener to the signal that should be removed after first execution (will be executed only once).
        * @param {Function} listener Signal handler function.
        * @param {Object} [listenerContext] Context on which listener will be executed
        * (object that should represent the `this` variable inside listener function).
        * @param {Number} [priority] The priority level of the event listener.
        * Listeners with higher priority will be executed before listeners with lower priority.
        * Listeners with same priority level will be executed at the same order as they were added. (default = 0)
        * @return {SignalBinding<T>} An Object representing the binding between the Signal and listener.
        */
        Signal.prototype.listenOnce = function (listener, listenerContext, priority) {
            if (typeof listenerContext === "undefined") { listenerContext = null; }
            if (typeof priority === "undefined") { priority = 0; }
            this.validateListener(listener, 'listenOnce');
            return this._registerListener(listener, true, listenerContext, priority);
        };

        /**
        * Remove a single listener from the dispatch queue.
        * @param {Function} listener Handler function that should be removed.
        * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
        * @return {Function} Listener handler function.
        */
        Signal.prototype.remove = function (listener, context) {
            if (typeof context === "undefined") { context = null; }
            this.validateListener(listener, 'remove');

            var i = this._indexOfListener(listener, context);

            if (i !== -1) {
                this._bindings[i].destroy(); // No reason for a SignalBinding to exist if it isn't attached to a signal
                this._bindings.splice(i, 1);
            }

            return listener;
        };

        /**
        * Remove all listeners from the Signal.
        */
        Signal.prototype.removeAll = function () {
            var n = this._bindings.length;

            while (n--) {
                this._bindings[n].destroy();
            }

            this._bindings.length = 0;
        };

        /**
        * @return {number} Number of listeners attached to the Signal.
        */
        Signal.prototype.getNumListeners = function () {
            return this._bindings.length;
        };

        /**
        * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
        * <p><strong>IMPORTANT:</strong> should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.</p>
        * @see Signal.prototype.disable
        */
        Signal.prototype.halt = function () {
            this._bShouldPropagate = false;
        };

        /**
        * Dispatch/Broadcast Signal to all listeners added to the queue.
        * @param {...*} [params] Parameters that should be passed to each handler.
        */
        Signal.prototype.dispatch = function (param) {
            if (!this.isActive) {
                return;
            }

            var n = this._bindings.length;
            var bindings;

            if (this.isMemorize) {
                this._prevParam = param;
            }

            if (!n) {
                //----- Should come after isMemorize
                return;
            }

            bindings = this._bindings.slice(0); // Clone array in case add/remove items during dispatch.

            this._bShouldPropagate = true; // In case `halt` was called before dispatch or during the previous dispatch.

            do {
                n--;
            } while(bindings[n] && this._bShouldPropagate && bindings[n].execute(param) !== false);
        };

        /**
        * Forget memorized arguments.
        * @see Signal.isMemorize
        */
        Signal.prototype.forget = function () {
            this._prevParam = null;
        };

        /**
        * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
        * <p><strong>IMPORTANT:</strong> calling any method on the signal instance after calling dispose will throw errors.</p>
        */
        Signal.prototype.dispose = function () {
            this.removeAll();
            delete this._bindings;
            delete this._prevParam;
        };

        /**
        * @return {string} String representation of the object.
        */
        Signal.prototype.toString = function () {
            return '[Signal isActive:' + this.isActive + ' numListeners:' + this.getNumListeners() + ']';
        };
        Signal.VERSION = '1.0.0';
        return Signal;
    })();
    lux.Signal = Signal;
})(lux || (lux = {}));
/// <reference path='collections/list.ts' />
/// <reference path='signal.ts' />
/// <reference path='iControl.ts' />
/// <reference path='proxies/point.ts' />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var lux;
(function (lux) {
    var EventArgs = (function () {
        function EventArgs() {
            this.args = new lux.List();
        }
        EventArgs.empty = new EventArgs();
        return EventArgs;
    })();
    lux.EventArgs = EventArgs;

    

    var PropertyChangedEventArgs = (function (_super) {
        __extends(PropertyChangedEventArgs, _super);
        function PropertyChangedEventArgs(propertyName, value) {
            _super.call(this);
            this.propertyName = propertyName;
            this.value = value;
        }
        return PropertyChangedEventArgs;
    })(EventArgs);
    lux.PropertyChangedEventArgs = PropertyChangedEventArgs;

    /*====================================================================*
    START: IDisposable
    *====================================================================*/
    var DisposedEventArgs = (function (_super) {
        __extends(DisposedEventArgs, _super);
        function DisposedEventArgs(disposedObject) {
            _super.call(this);
            this.disposedObject = disposedObject;
        }
        return DisposedEventArgs;
    })(EventArgs);
    lux.DisposedEventArgs = DisposedEventArgs;

    /*====================================================================*
    START: ControlEventArgs
    *====================================================================*/
    var ControlEventArgs = (function (_super) {
        __extends(ControlEventArgs, _super);
        function ControlEventArgs(control) {
            _super.call(this);
            this.control = control;
        }
        return ControlEventArgs;
    })(EventArgs);
    lux.ControlEventArgs = ControlEventArgs;

    /*====================================================================*
    START: AnimEventArgs
    *====================================================================*/
    var AnimEventArgs = (function (_super) {
        __extends(AnimEventArgs, _super);
        function AnimEventArgs(p) {
            _super.call(this);
            this.p = p;
        }
        return AnimEventArgs;
    })(EventArgs);
    lux.AnimEventArgs = AnimEventArgs;

    /*====================================================================*
    START: MouseEventArgs
    *====================================================================*/
    (function (MouseButtonState) {
        MouseButtonState[MouseButtonState["PRESSED"] = 0] = "PRESSED";
        MouseButtonState[MouseButtonState["RELEASED"] = 1] = "RELEASED";
    })(lux.MouseButtonState || (lux.MouseButtonState = {}));
    var MouseButtonState = lux.MouseButtonState;

    (function (MouseEventType) {
        MouseEventType[MouseEventType["BUTTON"] = 0] = "BUTTON";
        MouseEventType[MouseEventType["MOVE"] = 1] = "MOVE";
        MouseEventType[MouseEventType["WHEEL"] = 2] = "WHEEL";
        MouseEventType[MouseEventType["DRAG"] = 3] = "DRAG";
    })(lux.MouseEventType || (lux.MouseEventType = {}));
    var MouseEventType = lux.MouseEventType;

    var MouseButtons = (function () {
        function MouseButtons() {
            this.left = 1 /* RELEASED */;
            this.right = 1 /* RELEASED */;
            this.middle = 1 /* RELEASED */;
            this.xButton1 = 1 /* RELEASED */;
            this.xButton2 = 1 /* RELEASED */;
        }
        return MouseButtons;
    })();
    lux.MouseButtons = MouseButtons;

    var MouseEventArgs = (function (_super) {
        __extends(MouseEventArgs, _super);
        function MouseEventArgs(sender, buttons, clickCount, positionRoot, positionLocal, wheelDelta) {
            _super.call(this);
            this.isHandled = false;
            this.dragAttributes = new lux.Attributes();
            this.sender = sender;
            this.buttons = buttons;
            this.clickCount = clickCount;
            this.positionRoot = positionRoot;
            this.positionLocal = positionLocal;
            this.wheelDelta = wheelDelta;
        }
        return MouseEventArgs;
    })(EventArgs);
    lux.MouseEventArgs = MouseEventArgs;

    /*====================================================================*
    START: KeyEventArgs
    *====================================================================*/
    var KeyEventArgs = (function (_super) {
        __extends(KeyEventArgs, _super);
        function KeyEventArgs(keyCode, altKey, ctlKey, shiftKey, metaKey) {
            _super.call(this);
            this.altKey = false;
            this.ctlKey = false;
            this.shiftKey = false;
            this.metaKey = false;
            this.keyCode = keyCode;
            this.altKey = altKey;
            this.ctlKey = ctlKey;
            this.shiftKey = shiftKey;
            this.metaKey = metaKey;
        }
        return KeyEventArgs;
    })(EventArgs);
    lux.KeyEventArgs = KeyEventArgs;

    /*====================================================================*
    START: ZoomDragEventArgs
    *====================================================================*/
    var ZoomDragEventArgs = (function (_super) {
        __extends(ZoomDragEventArgs, _super);
        function ZoomDragEventArgs(zoomDragManager) {
            _super.call(this);
            this._zoomDragManager = null;
            this._zoomDragManager = zoomDragManager;
        }
        Object.defineProperty(ZoomDragEventArgs.prototype, "zoomDragManager", {
            get: function () {
                return this._zoomDragManager;
            },
            enumerable: true,
            configurable: true
        });
        return ZoomDragEventArgs;
    })(EventArgs);
    lux.ZoomDragEventArgs = ZoomDragEventArgs;
})(lux || (lux = {}));
var lux;
(function (lux) {
    var MathTools = (function () {
        function MathTools() {
        }
        MathTools.getRandomConstrained = function (min, max) {
            return (Math.random() * (max - min)) + min;
        };

        MathTools.GetRandomIntConstrained = function (min, max) {
            return Math.round(MathTools.getRandomConstrained(min, max));
        };

        MathTools.convertAngleToRadians = function (angleInDegrees) {
            return ((1.0 / 180.0) * angleInDegrees) * Math.PI;
        };

        MathTools.convertAngleToDegrees = function (angleInRadians) {
            return (angleInRadians / Math.PI) / (1.0 / 180.0);
        };

        MathTools.getAngle = function (x, y) {
            if (x == 0) {
                if (y > 0)
                    return Math.PI / 2.0;
                if (y == 0)
                    return 0.0;
                if (y < 0)
                    return Math.PI * 3.0 / 2.0;
            }
            var atan = Math.atan(y / x);
            if (x > 0 && y >= 0)
                return atan;
            if (x > 0 && y < 0)
                return 2 * Math.PI + atan;
            return Math.PI + atan;
        };

        MathTools.getAngleTheta = function (x, y) {
            var dx;
            var dy;
            var ax;
            var ay;
            var t;
            dx = x;
            ax = Math.abs(dx);
            dy = y;
            ay = Math.abs(dy);
            t = (ax + ay == 0) ? 0 : dy / (ax + ay);
            if (dx < 0)
                t = 2 - t;
            else if (dy < 0)
                t = 4 + t;
            return t * 90.0;
        };
        return MathTools;
    })();
    lux.MathTools = MathTools;
})(lux || (lux = {})); // End module
/// <reference path='../collections/list.ts' />
/// <reference path='../events.ts' />
/// <reference path='../util/mathTools.ts' />
var lux;
(function (lux) {
    var ProxyBase = (function () {
        /*
        * Build a new ProxyBase<T> from a List<number>
        * @param {number} [dataIn]
        */
        function ProxyBase() {
            this.propertyChanged = new lux.Signal();
            this.p_data = new lux.List();
            this.p_bEmpty = true;
            this.p_data.add(0);
            this.p_data.add(0);
            this.p_data.add(0);
        }
        Object.defineProperty(ProxyBase.prototype, "dataCopy", {
            get: function () {
                //----- Return a copy of the data list, so the actual data list can't be
                //----- modified directly.
                var d = new lux.List();

                for (var i = 0; i < this.p_data.length; i++) {
                    d.add(this.p_data.item(i));
                }

                return d;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ProxyBase.prototype, "isEmpty", {
            get: function () {
                return this.p_bEmpty;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ProxyBase.prototype, "dim", {
            /**
            * The dimension of the ProxyBase<T>
            */
            get: function () {
                return this.p_data.length;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ProxyBase.prototype, "length", {
            get: function () {
                return this.magnitude;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProxyBase.prototype, "magnitude", {
            get: function () {
                var n = 0.0;
                for (var i = 0; i < this.p_data.length; i++) {
                    n += this.p_data.item(i) * this.p_data.item(i);
                }

                return Math.sqrt(n);
            },
            enumerable: true,
            configurable: true
        });

        ProxyBase.prototype.copyTo = function (pt) {
            try  {
                var ptp_data = pt.dataCopy;
                if (ptp_data == null || ptp_data.length != this.p_data.length) {
                    return null;
                }

                for (var i = 0; i < this.p_data.length; i++) {
                    this.p_data.replace(ptp_data.item(i), i);
                }

                return this;
            } catch (e) {
                console.log('Exception in ProxyBase<T>.copyTo(): ' + e);
            }
        };

        /**
        * Scale all elements by a scalar value s
        */
        ProxyBase.prototype.scale = function (s) {
            for (var i = 0; i < this.p_data.length; i++) {
                this.p_data.replace(this.p_data.item(i) * s, i);
            }

            this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            return this;
        };

        ProxyBase.prototype.abs = function () {
            for (var i = 0; i < this.p_data.length; i++) {
                this.p_data.replace(Math.abs(this.p_data.item(i)), i);
            }

            this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            return this;
        };

        /**
        * Add a constant to all elements of the structure.
        */
        ProxyBase.prototype.addConstant = function (c) {
            for (var i = 0; i < this.p_data.length; i++) {
                this.p_data.replace(this.p_data.item(i) + c, i);
            }

            this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            return this;
        };

        ProxyBase.prototype.offset = function (c) {
            return this.addConstant(c);
        };

        /**
        * Subtract a constant from all elements
        */
        ProxyBase.prototype.subtractConstant = function (c) {
            for (var i = 0; i < this.p_data.length; i++) {
                this.p_data.replace(this.p_data.item(i) - c, i);
            }

            this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            return this;
        };

        /**
        * Compares this ProxyBase<T> with another one
        */
        ProxyBase.prototype.equals = function (obj) {
            if (obj == null)
                return false;

            var pt = obj;
            var ptp_data = pt.dataCopy;
            if (this.p_data.length != ptp_data.length)
                return false;

            for (var i = 0; i < this.p_data.length; i++) {
                if ((this.p_data.item(i) - Math.abs(ptp_data.item(i))) > 1e-10)
                    return false;
            }

            return true;
        };

        /**
        * Subtract two ProxyBase<T>
        */
        ProxyBase.prototype.subtractFrom = function (pt) {
            var ptp_data = pt.dataCopy;
            if (ptp_data == null || ptp_data.length != this.p_data.length)
                return null;

            for (var i = 0; i < this.p_data.length; i++) {
                this.p_data.replace(this.p_data.item(i) - ptp_data.item(i), i);
            }

            this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            return this;
        };

        /**
        * Add two ProxyBase<T>
        */
        ProxyBase.prototype.add = function (pt) {
            var ptp_data = pt.dataCopy;
            if (ptp_data.length != this.p_data.length)
                return null;

            for (var i = 0; i < this.p_data.length; i++) {
                this.p_data.replace(this.p_data.item(i) + ptp_data.item(i), i);
            }

            this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            return this;
        };

        /*
        * Compare two Points
        */
        ProxyBase.prototype.compareTo = function (obj) {
            var a = this;
            var b = obj;

            var ap_data = a.dataCopy;
            var bp_data = b.dataCopy;

            if (ap_data.length > bp_data.length)
                return null;

            var al;
            var bl;
            al = a.length * a.length;
            bl = b.length * b.length;

            if (al > bl)
                return 1;
            if (al < bl)
                return -1;

            for (var i = 0; i < ap_data.length; i++) {
                if (ap_data.item(i) > bp_data.item(i))
                    return 1;
                if (ap_data.item(i) < bp_data.item(i))
                    return -1;
            }

            return 0;
        };

        /**
        * Convert the ProxyBase<T> into a reconstructable string representation
        * @return {string} A string from which the ProxyBase<T> can be rebuilt.
        */
        ProxyBase.prototype.toString = function () {
            var s = '(';
            for (var i = 0; i < this.p_data.length; i++) {
                s + this.p_data.item(i).toString();
                if (i < this.p_data.length - 1)
                    s += ', ';
            }
            s += ')';
            return s;
        };
        ProxyBase.precision = 10;
        ProxyBase.tolerance = 0.0001;
        return ProxyBase;
    })();
    lux.ProxyBase = ProxyBase;
})(lux || (lux = {})); // End of module
/// <reference path='proxyBase.ts' />
var lux;
(function (lux) {
    var PointBase = (function (_super) {
        __extends(PointBase, _super);
        function PointBase(x, y, z, coordSys) {
            if (typeof x === "undefined") { x = null; }
            if (typeof y === "undefined") { y = null; }
            if (typeof z === "undefined") { z = null; }
            if (typeof coordSys === "undefined") { coordSys = null; }
            _super.call(this);
            /*====================================================================*
            START: Properties
            *====================================================================*/
            this.coordSys = new lux.CoordSys();

            if (x != null) {
                this.p_data.replace(x, 0);
                this.p_bEmpty = false;
            } else
                this.p_data.replace(0, 0);

            if (y != null)
                this.p_data.replace(y, 1);
            else
                this.p_data.replace(0, 1);

            if (z != null)
                this.p_data.replace(z, 2);
            else
                this.p_data.replace(0, 2);

            if (coordSys != null)
                this.coordSys = coordSys;
        }
        PointBase.prototype.setValues = function (x, y, z) {
            if (typeof y === "undefined") { y = null; }
            if (typeof z === "undefined") { z = null; }
            if (x != null) {
                this.p_data.replace(x, 0);
                this.p_bEmpty = false;
            } else
                return this;

            if (y != null)
                this.p_data.replace(y, 1);
            if (z != null)
                this.p_data.replace(z, 2);

            this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));

            return this;
        };

        Object.defineProperty(PointBase.prototype, "x", {
            get: function () {
                return this.p_data.item(0);
            },
            set: function (value) {
                this.p_data.replace(value, 0);
                this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PointBase.prototype, "xInt", {
            get: function () {
                return Math.round(this.p_data.item(0));
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(PointBase.prototype, "y", {
            get: function () {
                return this.p_data.item(1);
            },
            set: function (value) {
                this.p_data.replace(value, 1);
                this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PointBase.prototype, "yInt", {
            get: function () {
                return Math.round(this.p_data.item(1));
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(PointBase.prototype, "z", {
            get: function () {
                if (this.p_data.length > 2)
                    return this.p_data.item(2);
                else
                    return 0.0;
            },
            set: function (value) {
                if (this.p_data.length > 2)
                    this.p_data.replace(value, 2);
                this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PointBase.prototype, "zInt", {
            get: function () {
                return Math.round(this.p_data.item(2));
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Static Methods
        *====================================================================*/
        /**
        * Get the distance between two Points or Vectors
        */
        PointBase.prototype.distance = function (pt) {
            var pt_data = pt.dataCopy;

            if (this.p_data.length != pt_data.length)
                return -1.0;

            var e = 0.0;
            var d = 0.0;

            for (var i = 0; i < this.p_data.length; i++) {
                d = (this.p_data.item(i) - pt_data.item(i));
                e += d * d;
            }

            return Math.sqrt(e);
        };

        /*====================================================================*
        START: public Methods
        *====================================================================*/
        PointBase.prototype.rotateX = function (dAngle) {
            dAngle = lux.MathTools.convertAngleToRadians(dAngle);

            var y = this.p_data.item(1);
            var z = this.p_data.item(2);

            this.p_data.replace((y * Math.cos(dAngle)) - (z * Math.sin(dAngle)), 1);
            this.p_data.replace((z * Math.cos(dAngle)) + (y * Math.sin(dAngle)), 2);

            return this;
        };

        PointBase.prototype.rotateY = function (dAngle) {
            dAngle = lux.MathTools.convertAngleToRadians(dAngle);

            var x = this.p_data.item(0);
            var z = this.p_data.item(2);

            this.p_data.replace((x * Math.cos(dAngle)) + (z * Math.sin(dAngle)), 0);
            this.p_data.replace((z * Math.cos(dAngle)) - (x * Math.sin(dAngle)), 2);

            return this;
        };

        PointBase.prototype.rotateZ = function (dAngle) {
            dAngle = lux.MathTools.convertAngleToRadians(dAngle);

            var x = this.p_data.item(0);
            var y = this.p_data.item(1);

            this.p_data.replace((x * Math.cos(dAngle)) - (y * Math.sin(dAngle)), 0);
            this.p_data.replace((y * Math.cos(dAngle)) + (x * Math.sin(dAngle)), 1);

            return this;
        };
        return PointBase;
    })(lux.ProxyBase);
    lux.PointBase = PointBase;
})(lux || (lux = {}));
var lux;
(function (lux) {
    (function (ShapeType) {
        ShapeType[ShapeType["POINT"] = 0] = "POINT";
        ShapeType[ShapeType["LINE"] = 1] = "LINE";
        ShapeType[ShapeType["RECTANGLE"] = 2] = "RECTANGLE";
        ShapeType[ShapeType["ARC"] = 3] = "ARC";
        ShapeType[ShapeType["ELLIPSE"] = 4] = "ELLIPSE";
    })(lux.ShapeType || (lux.ShapeType = {}));
    var ShapeType = lux.ShapeType;
})(lux || (lux = {}));
/// <reference path='pointBase.ts' />
/// <reference path='../events.ts' />
/// <reference path='iShape.ts' />
var lux;
(function (lux) {
    var Point = (function (_super) {
        __extends(Point, _super);
        function Point(x, y, z, coordSys) {
            if (typeof x === "undefined") { x = null; }
            if (typeof y === "undefined") { y = null; }
            if (typeof z === "undefined") { z = null; }
            if (typeof coordSys === "undefined") { coordSys = null; }
            _super.call(this, x, y, z, coordSys);
        }
        Object.defineProperty(Point.prototype, "type", {
            get: function () {
                return 0 /* POINT */;
            },
            enumerable: true,
            configurable: true
        });

        Point.fromList = function (data) {
            return new Point(data.item(0), data.item(1), data.item(2));
        };

        Point.copy = function (pt) {
            return new Point(pt.x, pt.y, pt.z, pt.coordSys);
        };

        Object.defineProperty(Point, "empty", {
            get: function () {
                return new Point();
            },
            enumerable: true,
            configurable: true
        });

        Point.prototype.out = function () {
            return new Point(this.x + this.coordSys.x, -1 * (this.coordSys.y + this.y), this.z + this.coordSys.z);
        };
        return Point;
    })(lux.PointBase);
    lux.Point = Point;
})(lux || (lux = {}));
var lux;
(function (lux) {
    (function (ControlType) {
        ControlType[ControlType["BASIC"] = 0] = "BASIC";
        ControlType[ControlType["IMAGE"] = 1] = "IMAGE";
        ControlType[ControlType["VIDEO"] = 2] = "VIDEO";
        ControlType[ControlType["VECTOR"] = 3] = "VECTOR";
        ControlType[ControlType["TEXT_AREA"] = 4] = "TEXT_AREA";
        ControlType[ControlType["BROWSER"] = 5] = "BROWSER";
    })(lux.ControlType || (lux.ControlType = {}));
    var ControlType = lux.ControlType;

    (function (ZoomType) {
        ZoomType[ZoomType["NONE"] = 0] = "NONE";
        ZoomType[ZoomType["SCALE"] = 1] = "SCALE";
        ZoomType[ZoomType["STRETCH_HORIZONTALLY"] = 2] = "STRETCH_HORIZONTALLY";
        ZoomType[ZoomType["STRETCH_VERTICALLY"] = 3] = "STRETCH_VERTICALLY";
        ZoomType[ZoomType["STRETCH_BOTH"] = 4] = "STRETCH_BOTH";
        ZoomType[ZoomType["PAN_HORIZONTALLY"] = 5] = "PAN_HORIZONTALLY";
        ZoomType[ZoomType["PAN_VERTICALLY"] = 6] = "PAN_VERTICALLY";
    })(lux.ZoomType || (lux.ZoomType = {}));
    var ZoomType = lux.ZoomType;

    (function (OrientationType) {
        OrientationType[OrientationType["HORIZONTAL"] = 0] = "HORIZONTAL";
        OrientationType[OrientationType["VERTICAL"] = 1] = "VERTICAL";
    })(lux.OrientationType || (lux.OrientationType = {}));
    var OrientationType = lux.OrientationType;

    (function (AlignmentType) {
        AlignmentType[AlignmentType["TOP_LEFT"] = 0] = "TOP_LEFT";
        AlignmentType[AlignmentType["BOTTOM_RIGHT"] = 1] = "BOTTOM_RIGHT";
        AlignmentType[AlignmentType["CENTER"] = 2] = "CENTER";
    })(lux.AlignmentType || (lux.AlignmentType = {}));
    var AlignmentType = lux.AlignmentType;

    (function (PositionType) {
        PositionType[PositionType["BEFORE_START"] = 0] = "BEFORE_START";
        PositionType[PositionType["IN_VIEW"] = 1] = "IN_VIEW";
        PositionType[PositionType["AFTER_END"] = 2] = "AFTER_END";
    })(lux.PositionType || (lux.PositionType = {}));
    var PositionType = lux.PositionType;

    (function (DataType) {
        DataType[DataType["ATTRIBUTES"] = 0] = "ATTRIBUTES";
        DataType[DataType["BOOLEAN"] = 1] = "BOOLEAN";
        DataType[DataType["DATE_TIME"] = 2] = "DATE_TIME";
        DataType[DataType["DOUBLE"] = 3] = "DOUBLE";
        DataType[DataType["FUNCTION"] = 4] = "FUNCTION";
        DataType[DataType["HTML"] = 5] = "HTML";
        DataType[DataType["HEX_VALUE"] = 6] = "HEX_VALUE";
        DataType[DataType["INT"] = 7] = "INT";
        DataType[DataType["OBJECT"] = 8] = "OBJECT";
        DataType[DataType["STRING"] = 9] = "STRING";
        DataType[DataType["URI"] = 10] = "URI";
    })(lux.DataType || (lux.DataType = {}));
    var DataType = lux.DataType;

    (function (KeyCode) {
        KeyCode[KeyCode["BACKSPACE"] = 0] = "BACKSPACE";
        KeyCode[KeyCode["TAB"] = 1] = "TAB";
        KeyCode[KeyCode["ENTER"] = 2] = "ENTER";
        KeyCode[KeyCode["SHIFT"] = 3] = "SHIFT";
        KeyCode[KeyCode["CTRL"] = 4] = "CTRL";
        KeyCode[KeyCode["ALT"] = 5] = "ALT";
        KeyCode[KeyCode["CAPS_LOCK"] = 6] = "CAPS_LOCK";
        KeyCode[KeyCode["ESC"] = 7] = "ESC";
        KeyCode[KeyCode["SPACE"] = 8] = "SPACE";
        KeyCode[KeyCode["PAGE_UP"] = 9] = "PAGE_UP";
        KeyCode[KeyCode["PAGE_DOWN"] = 10] = "PAGE_DOWN";
        KeyCode[KeyCode["END"] = 11] = "END";
        KeyCode[KeyCode["HOME"] = 12] = "HOME";
        KeyCode[KeyCode["LEFT"] = 13] = "LEFT";
        KeyCode[KeyCode["UP"] = 14] = "UP";
        KeyCode[KeyCode["RIGHT"] = 15] = "RIGHT";
        KeyCode[KeyCode["DOWN"] = 16] = "DOWN";
        KeyCode[KeyCode["INSERT"] = 17] = "INSERT";
        KeyCode[KeyCode["DELETE"] = 18] = "DELETE";
        KeyCode[KeyCode["ZERO"] = 19] = "ZERO";
        KeyCode[KeyCode["ONE"] = 20] = "ONE";
        KeyCode[KeyCode["TWO"] = 21] = "TWO";
        KeyCode[KeyCode["THREE"] = 22] = "THREE";
        KeyCode[KeyCode["FOUR"] = 23] = "FOUR";
        KeyCode[KeyCode["FIVE"] = 24] = "FIVE";
        KeyCode[KeyCode["SIX"] = 25] = "SIX";
        KeyCode[KeyCode["SEVEN"] = 26] = "SEVEN";
        KeyCode[KeyCode["EIGHT"] = 27] = "EIGHT";
        KeyCode[KeyCode["NINE"] = 28] = "NINE";
        KeyCode[KeyCode["A"] = 29] = "A";
        KeyCode[KeyCode["B"] = 30] = "B";
        KeyCode[KeyCode["C"] = 31] = "C";
        KeyCode[KeyCode["D"] = 32] = "D";
        KeyCode[KeyCode["E"] = 33] = "E";
        KeyCode[KeyCode["F"] = 34] = "F";
        KeyCode[KeyCode["G"] = 35] = "G";
        KeyCode[KeyCode["H"] = 36] = "H";
        KeyCode[KeyCode["I"] = 37] = "I";
        KeyCode[KeyCode["J"] = 38] = "J";
        KeyCode[KeyCode["K"] = 39] = "K";
        KeyCode[KeyCode["L"] = 40] = "L";
        KeyCode[KeyCode["M"] = 41] = "M";
        KeyCode[KeyCode["N"] = 42] = "N";
        KeyCode[KeyCode["O"] = 43] = "O";
        KeyCode[KeyCode["P"] = 44] = "P";
        KeyCode[KeyCode["Q"] = 45] = "Q";
        KeyCode[KeyCode["R"] = 46] = "R";
        KeyCode[KeyCode["S"] = 47] = "S";
        KeyCode[KeyCode["T"] = 48] = "T";
        KeyCode[KeyCode["U"] = 49] = "U";
        KeyCode[KeyCode["V"] = 50] = "V";
        KeyCode[KeyCode["W"] = 51] = "W";
        KeyCode[KeyCode["X"] = 52] = "X";
        KeyCode[KeyCode["Y"] = 53] = "Y";
        KeyCode[KeyCode["Z"] = 54] = "Z";
        KeyCode[KeyCode["LEFT_META"] = 55] = "LEFT_META";
        KeyCode[KeyCode["RIGHT_META"] = 56] = "RIGHT_META";
        KeyCode[KeyCode["SELECT"] = 57] = "SELECT";
        KeyCode[KeyCode["NUMPAD_0"] = 58] = "NUMPAD_0";
        KeyCode[KeyCode["NUMPAD_1"] = 59] = "NUMPAD_1";
        KeyCode[KeyCode["NUMPAD_2"] = 60] = "NUMPAD_2";
        KeyCode[KeyCode["NUMPAD_3"] = 61] = "NUMPAD_3";
        KeyCode[KeyCode["NUMPAD_4"] = 62] = "NUMPAD_4";
        KeyCode[KeyCode["NUMPAD_5"] = 63] = "NUMPAD_5";
        KeyCode[KeyCode["NUMPAD_6"] = 64] = "NUMPAD_6";
        KeyCode[KeyCode["NUMPAD_7"] = 65] = "NUMPAD_7";
        KeyCode[KeyCode["NUMPAD_8"] = 66] = "NUMPAD_8";
        KeyCode[KeyCode["NUMPAD_9"] = 67] = "NUMPAD_9";
        KeyCode[KeyCode["MULTIPLY"] = 68] = "MULTIPLY";
        KeyCode[KeyCode["ADD"] = 69] = "ADD";
        KeyCode[KeyCode["SUBTRACT"] = 70] = "SUBTRACT";
        KeyCode[KeyCode["DECIMAL"] = 71] = "DECIMAL";
        KeyCode[KeyCode["DIVIDE"] = 72] = "DIVIDE";
        KeyCode[KeyCode["F1"] = 73] = "F1";
        KeyCode[KeyCode["F2"] = 74] = "F2";
        KeyCode[KeyCode["F3"] = 75] = "F3";
        KeyCode[KeyCode["F4"] = 76] = "F4";
        KeyCode[KeyCode["F5"] = 77] = "F5";
        KeyCode[KeyCode["F6"] = 78] = "F6";
        KeyCode[KeyCode["F7"] = 79] = "F7";
        KeyCode[KeyCode["F8"] = 80] = "F8";
        KeyCode[KeyCode["F9"] = 81] = "F9";
        KeyCode[KeyCode["F10"] = 82] = "F10";
        KeyCode[KeyCode["F11"] = 83] = "F11";
        KeyCode[KeyCode["F12"] = 84] = "F12";
        KeyCode[KeyCode["NUM_LOCK"] = 85] = "NUM_LOCK";
        KeyCode[KeyCode["SCROLL_LOCK"] = 86] = "SCROLL_LOCK";
        KeyCode[KeyCode["SEMICOLON"] = 87] = "SEMICOLON";
        KeyCode[KeyCode["EQUALS"] = 88] = "EQUALS";
        KeyCode[KeyCode["COMMA"] = 89] = "COMMA";
        KeyCode[KeyCode["DASH"] = 90] = "DASH";
        KeyCode[KeyCode["PERIOD"] = 91] = "PERIOD";
        KeyCode[KeyCode["FORWARD_SLASH"] = 92] = "FORWARD_SLASH";
        KeyCode[KeyCode["GRAVE_ACCENT"] = 93] = "GRAVE_ACCENT";
        KeyCode[KeyCode["OPEN_BRACKET"] = 94] = "OPEN_BRACKET";
        KeyCode[KeyCode["BACK_SLASH"] = 95] = "BACK_SLASH";
        KeyCode[KeyCode["CLOSE_BRACKET"] = 96] = "CLOSE_BRACKET";
        KeyCode[KeyCode["SINGLE_QUOTE"] = 97] = "SINGLE_QUOTE";
    })(lux.KeyCode || (lux.KeyCode = {}));
    var KeyCode = lux.KeyCode;
})(lux || (lux = {}));
/// <reference path="collections.ts" />
var lux;
(function (lux) {
    

    var Map = (function () {
        /**
        * Creates an empty map.
        * @class <p>Dictionaries map keys to values; each key can map to at most one value.
        * This implementation accepts any kind of objects as keys.</p>
        *
        * <p>If the keys are custom objects a function which converts keys to unique
        * strings must be provided. Example:</p>
        * <pre>
        * function petToString(pet) {
        *  return pet.name;
        * }
        * </pre>
        * @constructor
        * @param {function(Object):string=} toStrFunction optional function used
        * to convert keys to strings. If the keys aren't strings or if toString()
        * is not appropriate, a custom function which receives a key and returns a
        * unique string must be provided.
        */
        function Map(toStrFunction) {
            this.table = {};
            this.nElements = 0;
            this.toStr = toStrFunction || lux.collections.defaultToString;
        }
        /**
        * Returns the value to which this map maps the specified key.
        * Returns undefined if this map contains no mapping for this key.
        * @param {Object} key key whose associated value is to be returned.
        * @return {*} the value to which this map maps the specified key or
        * undefined if the map contains no mapping for this key.
        */
        Map.prototype.getValue = function (key) {
            var pair = this.table[this.toStr(key)];
            if (lux.collections.isUndefined(pair)) {
                return undefined;
            }
            return pair.value;
        };

        /**
        * Associates the specified value with the specified key in this map.
        * If the map previously contained a mapping for this key, the old
        * value is replaced by the specified value.
        * @param {Object} key key with which the specified value is to be
        * associated.
        * @param {Object} value value to be associated with the specified key.
        * @return {*} previous value associated with the specified key, or undefined if
        * there was no mapping for the key or if the key/value are undefined.
        */
        Map.prototype.setValue = function (key, value) {
            if (lux.collections.isUndefined(key) || lux.collections.isUndefined(value)) {
                return undefined;
            }

            var ret;
            var k = this.toStr(key);
            var previousElement = this.table[k];
            if (lux.collections.isUndefined(previousElement)) {
                this.nElements++;
                ret = undefined;
            } else {
                ret = previousElement.value;
            }
            this.table[k] = {
                key: key,
                value: value
            };
            return ret;
        };

        /**
        * Removes the mapping for this key from this map if it is present.
        * @param {Object} key key whose mapping is to be removed from the
        * map.
        * @return {*} previous value associated with specified key, or undefined if
        * there was no mapping for key.
        */
        Map.prototype.remove = function (key) {
            var k = this.toStr(key);
            var previousElement = this.table[k];
            if (!lux.collections.isUndefined(previousElement)) {
                delete this.table[k];
                this.nElements--;
                return previousElement.value;
            }
            return undefined;
        };

        Object.defineProperty(Map.prototype, "keys", {
            /**
            * Returns an array containing all of the keys in this map.
            * @return {Array} an array containing all of the keys in this map.
            */
            get: function () {
                var array = [];
                for (var name in this.table) {
                    if (this.table.hasOwnProperty(name)) {
                        var pair = this.table[name];
                        array.push(pair.key);
                    }
                }
                return array;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Map.prototype, "values", {
            /**
            * Returns an array containing all of the values in this map.
            * @return {Array} an array containing all of the values in this map.
            */
            get: function () {
                var array = [];
                for (var name in this.table) {
                    if (this.table.hasOwnProperty(name)) {
                        var pair = this.table[name];
                        array.push(pair.value);
                    }
                }
                return array;
            },
            enumerable: true,
            configurable: true
        });

        /**
        * Executes the provided function once for each key-value pair
        * present in this map.
        * @param {function(Object,Object):*} callback function to execute, it is
        * invoked with two arguments: key and value. To break the iteration you can
        * optionally return false.
        */
        Map.prototype.forEach = function (callback) {
            for (var name in this.table) {
                if (this.table.hasOwnProperty(name)) {
                    var pair = this.table[name];
                    var ret = callback(pair.key, pair.value);
                    if (ret === false) {
                        return;
                    }
                }
            }
        };

        /**
        * Returns true if this map contains a mapping for the specified key.
        * @param {Object} key key whose presence in this map is to be
        * tested.
        * @return {boolean} true if this map contains a mapping for the
        * specified key.
        */
        Map.prototype.containsKey = function (key) {
            return !lux.collections.isUndefined(this.getValue(key));
        };

        /**
        * Removes all mappings from this map.
        * @this {collections.Map}
        */
        Map.prototype.clear = function () {
            this.table = {};
            this.nElements = 0;
        };

        Object.defineProperty(Map.prototype, "length", {
            /**
            * Returns the number of keys in this map.
            * @return {number} the number of key-value mappings in this map.
            */
            get: function () {
                return this.nElements;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Map.prototype, "isEmpty", {
            /**
            * Returns true if this map contains no mappings.
            * @return {boolean} true if this map contains no mappings.
            */
            get: function () {
                return this.nElements <= 0;
            },
            enumerable: true,
            configurable: true
        });

        Map.prototype.toString = function () {
            var toret = "{";
            this.forEach(function (k, v) {
                toret = toret + "\n\t" + k.toString() + " : " + v.toString();
            });
            return toret + "\n}";
        };
        return Map;
    })();
    lux.Map = Map;
})(lux || (lux = {}));
/// <reference path='collections/list.ts' />
/// <reference path='collections/map.ts' />
/// <reference path='control.ts' />
var lux;
(function (lux) {
    var Controls = (function (_super) {
        __extends(Controls, _super);
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function Controls(control) {
            _super.call(this);
            /*====================================================================*
            START: Member Variables and Properties
            *====================================================================*/
            this.p_mapNames = new lux.Map();
            this.p_listSortedByZ = new lux.List();
            this.p_control = control;
        }
        Object.defineProperty(Controls.prototype, "parent", {
            //----- parent
            get: function () {
                return this.p_control;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Controls.prototype, "sortedByZ", {
            //----- sortedByZ
            get: function () {
                return this.p_listSortedByZ;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Methods
        *====================================================================*/
        Controls.prototype.elementByName = function (name) {
            try  {
                return this.p_mapNames[name];
            } catch (e) {
                console.log('A ControlBase<any> with the name \"' + name + '" cannot be found.');
                return null;
            }
        };

        Controls.prototype.replaceAt = function (index, ctl) {
            if (index > this.length - 1 || index < 0)
                return null;
            else {
                if (ctl.parent != null) {
                    ctl.parent.controls.remove(ctl);
                }

                this.p_listSortedByZ.removeAtIndex(index);
                this.p_listSortedByZ.add(ctl);

                var ctlTemp = this.removeAtIndex(index);
                this.add(ctl, index);

                this._updateIndices(index);

                ctl.p_nNestLevel = ctl.parent.nestLevel + 1;

                ctl.invalidate();

                return ctl;
            }
        };

        Controls.prototype.add = function (ctl, index) {
            try  {
                if (index == undefined || index == null || index > this.length)
                    index = this.length;
                if (index < 0)
                    index = 0;

                if (ctl.name != null && ctl.name != '') {
                    try  {
                        this.p_mapNames.setValue(ctl.name, ctl);
                    } catch (e) {
                        console.log('An element with Key = \'name\' already exists.');
                        return false;
                    }
                }

                if (ctl.parent != null) {
                    ctl.parent.controls.remove(ctl);
                }

                ctl.p_parent = this.p_control;

                _super.prototype.add.call(this, ctl, index);
                this.p_listSortedByZ.add(ctl, index);

                ctl.p_nNestLevel = ctl.parent.nestLevel + 1;

                ctl.doInitialized();

                this._updateIndices(index);

                ctl.invalidate();

                if (this.p_control != null && this.p_control.root != null) {
                    ctl._control_onAttachedToControlSystem();
                }

                return true;
            } catch (e) {
                console.log('Error adding a ControlSystemCtrl: ' + e);
                return null;
            }
        };

        Controls.prototype.addByName = function (ctl, name) {
            //----- IMPORTANT: Use the property setter here,
            //----- so that the propertyChanged event is fired.
            ctl.p_name = name;
            ctl.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('name', name));
            return this.add(ctl);
        };

        Controls.prototype.p_onAttachedToControlSystemAll = function () {
            for (var i = 0; i < this.length; i++) {
                this.item(i)._control_onAttachedToControlSystem();
            }

            this.p_control.invalidate();
        };

        Controls.prototype.p_onRemovedFromControlSystemAll = function () {
            for (var i = 0; i < this.length; i++) {
                this.item(i)._control_onRemovedFromControlSystem();
            }
        };

        Controls.prototype.remove = function (ctl) {
            if (lux.g.isEmpty(ctl)) {
                console.log('Error in Controls.remove(); tried to remove null control.');
                return false;
            }

            if (this.p_control != null && this.p_control.root != null) {
                ctl._control_onRemovedFromControlSystem();
            }

            ctl.p_parent = null;
            ctl.p_root = null;

            var bRemoved = _super.prototype.remove.call(this, ctl);

            if (bRemoved) {
                this.p_listSortedByZ.remove(ctl);
                this.p_mapNames.remove(ctl.name);

                if (lux.g.isNotEmpty(ctl.zIndex))
                    this._updateIndices(ctl.zIndex);
                else
                    this._updateIndices();
            }

            return bRemoved;
        };

        Controls.prototype.removeAtIndex = function (index) {
            if (index > this.length - 1 || index < 0)
                return null;
            else {
                var ctl = this.item(index);

                this.remove(ctl);

                return ctl;
            }
        };

        Controls.prototype.removeByName = function (sName) {
            var ctl = null;

            try  {
                ctl = this.p_mapNames[sName];
            } catch (e) {
                console.log('An element with the name \'sName\' cannot be found.');
                return false;
            }

            if (lux.g.isEmpty(ctl))
                return false;

            return this.remove(ctl);
        };

        Controls.prototype.moveToTop = function (ctl) {
            if (this.length < 1)
                return null;

            if (this.remove(ctl))
                this.add(ctl);

            return ctl;
        };

        Controls.prototype.clear = function () {
            for (var i = 0; i < this.length; i++) {
                var ctl = this.item(i);
                ctl._control_onRemovedFromControlSystem();
                ctl.p_parent = null;
                ctl.p_root = null;
            }

            _super.prototype.clear.call(this);
            this.p_listSortedByZ.clear();
            this.p_mapNames.clear();
        };

        Controls.prototype.invalidateAll = function () {
            for (var i = 0; i < this.length; i++) {
                this.item(i).invalidateAll();
            }
        };

        Controls.prototype.updateScaleWidthAbsAll = function () {
            for (var i = 0; i < this.length; i++) {
                var ctl = this.item(i);
                ctl.p_scaleWidthAbs = this.p_control.scaleWidthAbs * ctl.scaleWidth;
                ctl.controls.updateScaleWidthAbsAll();
            }
        };

        Controls.prototype.updateScaleHeightAbsAll = function () {
            for (var i = 0; i < this.length; i++) {
                var ctl = this.item(i);
                ctl.p_scaleHeightAbs = this.p_control.scaleHeightAbs * ctl.scaleHeight;
                ctl.controls.updateScaleHeightAbsAll();
            }
        };

        Controls.prototype.updateOpacityAll = function () {
            for (var i = 0; i < this.length; i++) {
                var ctl = this.item(i);
                ctl.p_opacityAbs = this.p_control.opacityAbs * ctl.opacity;
                ctl.controls.updateOpacityAll();
            }
        };

        Controls.prototype.renderAll = function () {
            for (var i = 0; i < this.length; i++) {
                this.item(i).render();
            }
        };

        /*tickAll(): void
        {
        for (var i: number = 0; i < this.length; i++)
        {
        this.item(i).tick();
        }
        }*/
        Controls.prototype.sortByZ = function () {
            this.p_listSortedByZ.sort(this.p_compareZ);
        };

        Controls.prototype.sortByZIndex = function () {
            this.sort(this.p_compareZIndex);
        };

        Controls.prototype.findMouseEnabledControlAtPoint = function (mouseEventType, ptRoot, ptLocal) {
            for (var i = this.length - 1; i >= 0; i--) {
                var ctlTmp = this.item(i);

                if (!ctlTmp.isVisible || ctlTmp.opacityAbs <= ctlTmp.opacityMin)
                    continue;

                var bAllowMouseEvents = (mouseEventType === 0 /* BUTTON */ && ctlTmp.isAllowMouseButtonEvents) || (mouseEventType === 1 /* MOVE */ && ctlTmp.isAllowMouseMoveEvents) || (mouseEventType === 2 /* WHEEL */ && ctlTmp.isAllowMouseWheelEvents) || (mouseEventType === 3 /* DRAG */ && ctlTmp.isAllowMouseDragEvents);

                var ptCtlTmpLocal = ctlTmp.parentToLocal(ptLocal);
                var bInsideCtlTmp = ctlTmp.hitTest(ptRoot, ptCtlTmpLocal);

                //----- Check all the child controls of luxCtlTmp for a hit,
                //----- if luxCtlTmp isn't clipping child controls, or if the point was
                //----- within the bounds of luxCtlTmp.
                if (!ctlTmp.isClipChildControls || bInsideCtlTmp) {
                    var ctl = ctlTmp.controls.findMouseEnabledControlAtPoint(mouseEventType, ptRoot, ptCtlTmpLocal);
                    if (ctl != null) {
                        return ctl;
                    }
                }

                //----- The point wasn't inside any child control of ctlTmp.
                //----- If it was inside ctlTmp, return ctlTmp, otherwise return null.
                if (bInsideCtlTmp && bAllowMouseEvents)
                    return ctlTmp;
                else
                    continue;
            }

            return null;
        };

        /*====================================================================*
        START: Compare control Z order
        *====================================================================*/
        Controls.prototype.p_compareZ = function (ctl1, ctl2) {
            if (ctl1.z == ctl2.z)
                return 1;
            else if (ctl1.z > ctl2.z)
                return 1;
            else
                return -1;
        };

        Controls.prototype.p_compareZIndex = function (ctl1, ctl2) {
            if (ctl1.zIndex == ctl2.zIndex)
                return 1;
            else if (ctl1.zIndex > ctl2.zIndex)
                return 1;
            else
                return -1;
        };

        /*====================================================================*
        START: Private Methods
        *====================================================================*/
        Controls.prototype._updateIndices = function (startIndex) {
            if (typeof startIndex === "undefined") { startIndex = 0; }
            for (var i = startIndex; i < this.length; i++) {
                var ctlAtIndex = this.item(i);
                if (ctlAtIndex.p_nZIndex != i) {
                    ctlAtIndex.p_nZIndex = i;
                    ctlAtIndex.p_doPropertyChanged('zIndex', i);
                }
            }
        };
        return Controls;
    })(lux.List);
    lux.Controls = Controls;
})(lux || (lux = {}));
/// <reference path="iHiResTimerCounter.ts" />
var lux;
(function (lux) {
    /*
    * Provides a high-resolution timer.
    *
    * <p>The resolution of the timer varies by system. You can determine the resolution of a given
    * HiResTimer instance by calling one of the ResolutionXXX methods.</p>
    *
    * <p>To use HiResTimer create a new instance and call Start() - or pass true to the constructor.
    * Call Stop() to stop a running timer. Call Start() to restart a stopped timer.
    * Call Start(true) to restart and reset a stopped timer. Call one of the ElapsedXXX methods
    * on a running or stopped timer to get the elapsed time in the units you prefer.
    * Check the IsRunning property to determine if the timer is running.</p>
    *
    * <code>
    *     int sleepCount = 750;
    *     String formattedCount = sleepCount.toString();
    *
    *     HiResTimer timer = new HiResTimer();
    *
    *     print("Timer resolution: ");
    *     print(timer.resolution() + " seconds, ");
    *     print(timer.resolutionMilliseconds() + "milliseconds, ");
    *     print(timer.resolutionMicroseconds() + "microseconds.");
    *
    *     //----- Start the timer then go to sleep.
    *     timer.start();
    *     print("Timer started: sleeping for " + formattedCount + " milliseconds.");
    *
    *     // Time will accumulate for this sleep because the timer is running.
    *     Thread.sleep(sleepCount);
    *
    *     //----- Pause the timer
    *     timer.stop();
    *
    *     print("Timer paused: sleeping for " + formattedCount + " milliseconds.");
    *
    *     //----- Time will not accumulate for this sleep because the timer is paused.
    *     Thread.sleep(sleepCount);
    *
    *     //----- Restart the timer and go back to sleep
    *     timer.start();
    *     print("Timer restarted: sleeping for " + formattedCount + " milliseconds.");
    *
    *     //----- Time will accumulate for this sleep because the timer is running.
    *     Thread.sleep(sleepCount);
    *
    *     //----- Stop timing and output the results.
    *     timer.stop();
    *
    *     print("Timer stopped\n");
    *     print("Run Time: ");
    *     print(timer.Elapsed() + " seconds, ");
    *     print(timer.ElapsedMilliseconds() + "milliseconds, ");
    *     print(timer.ElapsedMicroseconds() + "microseconds.");
    *
    * </code>
    */
    var HiResTimer = (function () {
        /*
        * Initializes a new instance and starts the timer if passed true.
        * @param {boolean} [bStartTimer] Controls whether the timer is started after the HiResTimer is initialized.
        */
        function HiResTimer(counter, bStartTimer) {
            if (typeof bStartTimer === "undefined") { bStartTimer = false; }
            this._counter = null;
            /*
            * Stores the start count or the elapsed ticks depending on context.
            */
            this._start = 0;
            /*
            * Stores the amount of time to adjust the results of the timer to account
            * for the time it takes to run the HiResTimer code.
            */
            this._adjustment = 0;
            this._counter = counter;
            this.init(bStartTimer);
        }
        /*
        * Initializes the HiResTimer. Does all the heavy lifting for the public constructors.
        * @param {boolean} [bStartTimer] Controls whether the timer is started after the HiResTimer is initialized.</param>
        */
        HiResTimer.prototype.init = function (bStartTimer) {
            //----- If the adjustment value hasn't been calculated yet then calculate it.
            if (this._adjustment == 0) {
                //----- Time the timer code so we will know how much of an adjustment
                //----- is needed.
                this._start = 0;
                this._adjustment = 0;
                this.start(false);
                this.stop();
                this._adjustment = this._start;
            }

            //----- The following needs to happen every time we initialize
            this._start = 0;
            if (bStartTimer)
                this.start(false);
        };

        /*
        * Start the timer.
        * @param {boolean} [bResetTimer] Controls whether the timer is reset before starting.
        * Pass false and any new elapsed time will be added to the existing elapsed time.
        * Pass true and any existing elapsed time is lost and only the new elapsed time is preserved.
        */
        HiResTimer.prototype.start = function (bResetTimer) {
            if (typeof bResetTimer === "undefined") { bResetTimer = false; }
            var count = this._counter.count;

            if ((!bResetTimer) && (0 > this._start))
                this._start += count; // We are starting with an accumulated time
            else
                this._start = count; // We are starting from 0
        };

        /*
        * Stop timing. Call one of the ElapsedXXX methods to get the elapsed time since Start() was
        * called. Call Start(false) to restart the timer where you left off. Call Start(true) to
        * restart the timer from 0.
        */
        HiResTimer.prototype.stop = function () {
            if (this._start <= 0) {
                return;
            }
            this._start = this.elapsedTicks;
        };

        Object.defineProperty(HiResTimer.prototype, "elapsedTicks", {
            get: function () {
                var elapsedTicks = this._start;

                var count = this._counter.count;

                elapsedTicks += -count; // Stopped timer keeps elapsed timer ticks as a negative

                if (elapsedTicks < this._adjustment)
                    elapsedTicks -= this._adjustment; // Adjust for time timer code takes to run, but don't overflow
                else
                    elapsedTicks = 0; // Stop must have been called directly after Start

                return elapsedTicks;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(HiResTimer.prototype, "isRunning", {
            /*
            * Indicates whether the timer is running or not.
            */
            get: function () {
                //----- Returns FALSE if stopped.
                var result = (this._start > 0);
                return result;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(HiResTimer.prototype, "elapsed", {
            /*
            * Returns the number of seconds elapsed since the timer started.
            * <returns>The number of seconds elapsed.
            */
            get: function () {
                return -this.elapsedTicks / this._counter.frequency;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(HiResTimer.prototype, "elapsedMilliseconds", {
            /*
            * Returns the number of milliseconds elapsed since the timer started.
            * @return {number} The number of milliseconds elapsed.
            */
            get: function () {
                return (-this.elapsedTicks * 1000) / this._counter.frequency;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(HiResTimer.prototype, "elapsedMicroseconds", {
            /*
            * Returns the number of microseconds elapsed since the timer started.
            * @return {number} The number of microseconds elapsed.
            */
            get: function () {
                return (-this.elapsedTicks * 1000000) / this._counter.frequency;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(HiResTimer.prototype, "resolution", {
            /*
            * Returns the timer resolution in seconds.
            * @return {number} Then number of seconds of resolution.
            */
            get: function () {
                return 1.0 / this._counter.frequency;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(HiResTimer.prototype, "resolutionMilliseconds", {
            /*
            * Returns the timer resolution in milliseconds.
            * @return {number} Then number of milliseconds of resolution.
            */
            get: function () {
                return 1000.0 / this._counter.frequency;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(HiResTimer.prototype, "resolutionMicroseconds", {
            /*
            * Returns the timer resolution in microseconds.
            * @return {number} Then number of microseconds of resolution.
            */
            get: function () {
                return 1000000.0 / this._counter.frequency;
            },
            enumerable: true,
            configurable: true
        });
        return HiResTimer;
    })();
    lux.HiResTimer = HiResTimer;
})(lux || (lux = {}));
/// <reference path='animQueue.ts' />
/// <reference path='animEase.ts' />
/// <reference path='hiResTimer/hiResTimer.ts' />
/// <reference path='hiResTimer/iHiResTimerCounter.ts' />
/// <reference path='../events.ts' />
var lux;
(function (lux) {
    /*--------------------------------------------------------------------*
    USAGE
    *--------------------------------------------------------------------*
    _luxRoot.animate.run(btn1.moveBy(100, 100, 1, AnimEase.getEasingFunction(AnimEaseCategory.SINE, AnimEaseType.INOUT))).and(
    btn1.rotateBy(-100, 1).then(btn1.rotateBy(100, 1)).first
    ).and(
    btn1.fadeTo(100, 1)
    ).then(
    btn1.moveBy(-100, -100, 1).and(btn1.fadeTo(50, 1)).then(btn1.pause(2, this.animPause_onDone)).first
    );
    *--------------------------------------------------------------------*/
    var AnimBase = (function () {
        function AnimBase(duration, ease) {
            if (typeof duration === "undefined") { duration = 0.0; }
            if (typeof ease === "undefined") { ease = null; }
            this.p_duration = 0.0;
            this.p_bTimed = true;
            this.p_bInitialized = false;
            this.p_bDone = false;
            this._bDeadBranch = false;
            //----- done
            this.done = new lux.Signal();
            this.p_duration = duration;
            if (ease != null)
                this.p_ease = ease;
            else
                this.p_ease = lux.AnimEase.getEasingFunction(5 /* SINE */, 3 /* INOUT */);

            this.p_thenAnimQueue = new lux.AnimQueue(this);
            this.p_andAnimQueue = new lux.AnimQueue(this);

            this.done.listen(this.p_onDone, this);
            //this.ticked.listen(this.p_onTicked, this);
        }
        Object.defineProperty(AnimBase.prototype, "isTimed", {
            get: function () {
                return this.p_bTimed;
            },
            set: function (value) {
                this.p_bTimed = value;
            },
            enumerable: true,
            configurable: true
        });

        AnimBase.prototype._tick = function () {
            if (!this._bDeadBranch) {
                var bAndQueueDead = false;
                var bThenQueueDead = false;

                if (this.p_andAnimQueue != null && this.p_andAnimQueue.length() > 0 && !this.p_andAnimQueue.isDead) {
                    this.p_andAnimQueue.tick();
                } else
                    bAndQueueDead = true;

                if (this.p_bDone) {
                    if (this.p_thenAnimQueue != null && this.p_thenAnimQueue.length() > 0 && !this.p_thenAnimQueue.isDead) {
                        this.p_thenAnimQueue.tick();
                    } else
                        bThenQueueDead = true;

                    //----- This anim is a dead branch if it's done animating and both
                    //----- its andQueue and thenQueue are empty, or dead.
                    if (bAndQueueDead && bThenQueueDead)
                        this._bDeadBranch = true;

                    return;
                }
            } else
                return;

            if (!this.p_bInitialized) {
                if (!this.p_bTimed) {
                    this.p_onInitialized();
                    this.p_bInitialized = true;
                } else if (this.p_timer != null) {
                    this.p_onInitialized();
                    if (!this.p_timer.isRunning)
                        this.p_timer.start();
                    this.p_bInitialized = true;
                }
            }

            if (this.p_bTimed && this.p_timer != null) {
                var p = this.p_timer.elapsed / this.p_duration;

                if (p >= 1.0) {
                    p = 1.0;
                    this.p_bDone = true;
                    this.p_timer.stop();
                    this.p_onTicked(new lux.AnimEventArgs(p));
                    this.done.dispatch(new lux.EventArgs());
                    return;
                }

                this.p_onTicked(new lux.AnimEventArgs(p));
            }
        };

        AnimBase.prototype.p_onInitialized = function () {
        };
        AnimBase.prototype.p_onTicked = function (args) {
        };

        //----- Fire event from an external class.
        AnimBase.prototype.doDone = function () {
            this.p_bDone = true;
            this.p_timer.stop();
            this.done.dispatch(new lux.EventArgs());
        };
        AnimBase.prototype.p_onDone = function (args) {
        };

        //----- ticked
        //ticked: Signal<AnimEventArgs> = new Signal<AnimEventArgs>();
        AnimBase.prototype.then = function (anim) {
            anim.setTimerCounter(this._timerCounter);
            this.p_thenAnimQueue.add(anim);
        };

        AnimBase.prototype.and = function (anim) {
            anim.setTimerCounter(this._timerCounter);
            this.p_andAnimQueue.add(anim);
        };

        AnimBase.prototype.setTimerCounter = function (timerCounter) {
            if (timerCounter == null)
                return;

            this._timerCounter = timerCounter;

            if (this.p_timer == null)
                this.p_timer = new lux.HiResTimer(timerCounter.newCounter(), false);

            this.p_andAnimQueue.anims.forEach(function (anim) {
                anim.setTimerCounter(timerCounter);
                return true;
            });

            this.p_thenAnimQueue.anims.forEach(function (anim) {
                anim.setTimerCounter(timerCounter);
                return true;
            });
        };
        return AnimBase;
    })();
    lux.AnimBase = AnimBase;
})(lux || (lux = {}));
/// <reference path='animBase.ts' />
/// <reference path='../collections/list.ts' />
var lux;
(function (lux) {
    var AnimQueue = (function () {
        function AnimQueue(parentAnim) {
            this._parentAnim = null;
            this.anims = null;
            this.p_deadAnims = null;
            this._bDead = false;
            this._parentAnim = parentAnim;
            this.anims = new lux.List();
        }
        Object.defineProperty(AnimQueue.prototype, "isDead", {
            get: function () {
                return this._bDead;
            },
            enumerable: true,
            configurable: true
        });

        AnimQueue.prototype.length = function () {
            if (this.anims != null)
                return this.anims.length;
            else
                return 0;
        };

        AnimQueue.prototype.add = function (anim) {
            if (this.anims != null)
                this.anims.add(anim);
        };

        AnimQueue.prototype.clear = function () {
            this.anims.clear();
        };

        AnimQueue.prototype.tick = function () {
            var anim = null;
            var bDeadBranch = true;
            for (var i = 0; i < this.anims.length; i++) {
                anim = this.anims.item(i);
                if (anim._bDeadBranch === false) {
                    bDeadBranch = false;
                    anim._tick();
                } else if (this.p_deadAnims != null)
                    this.p_deadAnims.add(anim);
            }

            if (bDeadBranch && !this._bDead) {
                this._bDead = true;
            }
        };
        return AnimQueue;
    })();
    lux.AnimQueue = AnimQueue;
})(lux || (lux = {}));
/// <reference path='animBase.ts' />
var lux;
(function (lux) {
    var AnimWrapper = (function () {
        function AnimWrapper(anim) {
            this._anim = null;
            this._anim = anim;
            this._first = this;
        }
        Object.defineProperty(AnimWrapper.prototype, "anim", {
            get: function () {
                return this._anim;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(AnimWrapper.prototype, "first", {
            //----- The first AnimWrapper in the chain.
            get: function () {
                return this._first;
            },
            enumerable: true,
            configurable: true
        });

        AnimWrapper.prototype.then = function (animWrap) {
            this._anim.then(animWrap._anim);
            animWrap._first = this._first;
            return animWrap;
        };

        AnimWrapper.prototype.and = function (animWrap) {
            this._anim.and(animWrap._anim);
            animWrap._first = this._first;
            return animWrap;
        };
        return AnimWrapper;
    })();
    lux.AnimWrapper = AnimWrapper;
})(lux || (lux = {}));
/// <reference path='animQueue.ts' />
/// <reference path='animWrapper.ts' />
var lux;
(function (lux) {
    var AnimManager = (function (_super) {
        __extends(AnimManager, _super);
        function AnimManager(timerCounter) {
            if (typeof timerCounter === "undefined") { timerCounter = null; }
            _super.call(this, null);
            this.p_timerCounter = null;
            this.ticked = new lux.Signal();

            this.p_timerCounter = this.timerCounter;
            this.p_deadAnims = new lux.List();
        }
        Object.defineProperty(AnimManager.prototype, "timerCounter", {
            get: function () {
                return this.p_timerCounter;
            },
            set: function (value) {
                this.p_timerCounter = value;

                this.anims.forEach(function (anim) {
                    anim.setTimerCounter(value);
                    return true;
                });
            },
            enumerable: true,
            configurable: true
        });

        AnimManager.prototype.tick = function () {
            if (this.p_timerCounter == null)
                return;

            _super.prototype.tick.call(this);

            for (var i = 0; i < this.p_deadAnims.length; i++) {
                this.anims.remove(this.p_deadAnims.item(i));
            }

            this.p_deadAnims.clear();

            this.ticked.dispatch(new lux.EventArgs());
        };

        AnimManager.prototype.add = function (anim) {
            anim.setTimerCounter(this.p_timerCounter);
            _super.prototype.add.call(this, anim);
        };

        AnimManager.prototype.run = function (animWrap) {
            this.add(animWrap.anim);
            return animWrap;
        };
        return AnimManager;
    })(lux.AnimQueue);
    lux.AnimManager = AnimManager;
})(lux || (lux = {}));
/// <reference path='iRoot.ts' />
/// <reference path='proxies/point.ts' />
/// <reference path='enums.ts' />
/// <reference path='events.ts' />
/// <reference path='controls.ts' />
/// <reference path='animation/animManager.ts' />
/// <reference path="iHiResTimerCounter.ts" />
var lux;
(function (lux) {
    var HiResTimerCounterBrowser = (function () {
        function HiResTimerCounterBrowser() {
            this._frequency = 1000;
        }
        Object.defineProperty(HiResTimerCounterBrowser.prototype, "frequency", {
            /*
            * Stores the frequency of the high-resolution performance counter.
            * This value cannot change while the system is running.
            */
            get: function () {
                return this._frequency;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(HiResTimerCounterBrowser.prototype, "count", {
            get: function () {
                if (lux.g.isNotEmpty(window.performance))
                    return window.performance.now();
                else
                    return Date.now();
            },
            enumerable: true,
            configurable: true
        });

        HiResTimerCounterBrowser.prototype.newCounter = function () {
            return new HiResTimerCounterBrowser();
        };
        return HiResTimerCounterBrowser;
    })();
    lux.HiResTimerCounterBrowser = HiResTimerCounterBrowser;
})(lux || (lux = {}));
/// <reference path='animBase.ts' />
/// <reference path='animEase.ts' />
var lux;
(function (lux) {
    var AnimMoveTo = (function (_super) {
        __extends(AnimMoveTo, _super);
        function AnimMoveTo(ctl, targetX, targetY, targetZ, duration, ease) {
            if (typeof ease === "undefined") { ease = null; }
            _super.call(this, duration, ease);
            this._ctl = null;
            this._startX = 0.0;
            this._startY = 0.0;
            this._startZ = 0.0;
            this._targetX = 0.0;
            this._targetY = 0.0;
            this._targetZ = 0.0;
            this._ctl = ctl;
            this._targetX = targetX;
            this._targetY = targetY;
            this._targetZ = targetZ;
        }
        AnimMoveTo.prototype.p_onInitialized = function () {
            this._startX = this._ctl.x;
            this._startY = this._ctl.y;
            this._startZ = this._ctl.z;
        };

        AnimMoveTo.prototype.p_onTicked = function (args) {
            if (this.p_ease != null) {
                this._ctl.x = this.p_ease(this.p_timer.elapsed, this._startX, this._targetX - this._startX, this.p_duration);
                this._ctl.y = this.p_ease(this.p_timer.elapsed, this._startY, this._targetY - this._startY, this.p_duration);
                this._ctl.z = this.p_ease(this.p_timer.elapsed, this._startZ, this._targetZ - this._startZ, this.p_duration);
            } else {
                this._ctl.x = (this._startX + (args.p * (this._targetX - this._startX)));
                this._ctl.y = (this._startY + (args.p * (this._targetY - this._startY)));
                this._ctl.z = (this._startZ + (args.p * (this._targetZ - this._startZ)));
            }
        };

        AnimMoveTo.prototype.p_onDone = function (args) {
            this._ctl.x = this._targetX;
            this._ctl.y = this._targetY;
            this._ctl.z = this._targetZ;
        };
        return AnimMoveTo;
    })(lux.AnimBase);
    lux.AnimMoveTo = AnimMoveTo;

    /*====================================================================*
    START: AnimMoveBy
    *====================================================================*/
    var AnimMoveBy = (function (_super) {
        __extends(AnimMoveBy, _super);
        function AnimMoveBy(ctl, offsetX, offsetY, offsetZ, duration, ease) {
            _super.call(this, duration, ease);
            this._ctl = null;
            this._startX = 0.0;
            this._startY = 0.0;
            this._startZ = 0.0;
            this._offsetX = 0.0;
            this._offsetY = 0.0;
            this._offsetZ = 0.0;
            this._ctl = ctl;
            this._offsetX = offsetX;
            this._offsetY = offsetY;
            this._offsetZ = offsetZ;
        }
        AnimMoveBy.prototype.p_onInitialized = function () {
            this._startX = this._ctl.x;
            this._startY = this._ctl.y;
            this._startZ = this._ctl.z;
        };

        AnimMoveBy.prototype.p_onTicked = function (args) {
            if (this.p_ease != null) {
                this._ctl.x = this.p_ease(this.p_timer.elapsed, this._startX, this._offsetX, this.p_duration);
                this._ctl.y = this.p_ease(this.p_timer.elapsed, this._startY, this._offsetY, this.p_duration);
                this._ctl.z = this.p_ease(this.p_timer.elapsed, this._startZ, this._offsetZ, this.p_duration);
            } else {
                this._ctl.x = (this._startX + (args.p * this._offsetX));
                this._ctl.y = (this._startY + (args.p * this._offsetY));
                this._ctl.z = (this._startZ + (args.p * this._offsetZ));
            }
        };

        AnimMoveBy.prototype.p_onDone = function (args) {
            this._ctl.x = this._startX + this._offsetX;
            this._ctl.y = this._startY + this._offsetY;
            this._ctl.z = this._startZ + this._offsetZ;
        };
        return AnimMoveBy;
    })(lux.AnimBase);
    lux.AnimMoveBy = AnimMoveBy;

    /*====================================================================*
    START: AnimRotateTo
    *====================================================================*/
    var AnimRotateTo = (function (_super) {
        __extends(AnimRotateTo, _super);
        function AnimRotateTo(ctl, rotationX, rotationY, rotationZ, duration, ease) {
            _super.call(this, duration, ease);
            this._ctl = null;
            this._startX = 0.0;
            this._startY = 0.0;
            this._startZ = 0.0;
            this._rotationX = 0.0;
            this._rotationY = 0.0;
            this._rotationZ = 0.0;

            this._ctl = ctl;
            this._rotationX = rotationX;
            this._rotationY = rotationY;
            this._rotationZ = rotationZ;
        }
        AnimRotateTo.prototype.p_onInitialized = function () {
            this._startX = this._ctl.rotationX;
            this._startY = this._ctl.rotationY;
            this._startZ = this._ctl.rotationZ;
        };

        AnimRotateTo.prototype.p_onTicked = function (args) {
            if (this.p_ease != null) {
                this._ctl.rotationX = this.p_ease(this.p_timer.elapsed, this._startX, this._rotationX - this._startX, this.p_duration);
                this._ctl.rotationY = this.p_ease(this.p_timer.elapsed, this._startY, this._rotationY - this._startY, this.p_duration);
                this._ctl.rotationZ = this.p_ease(this.p_timer.elapsed, this._startZ, this._rotationZ - this._startZ, this.p_duration);
            } else {
                this._ctl.rotationX = this._startX + (args.p * this._rotationX - this._startX);
                this._ctl.rotationY = this._startY + (args.p * this._rotationY - this._startY);
                this._ctl.rotationZ = this._startZ + (args.p * this._rotationZ - this._startZ);
            }
        };

        AnimRotateTo.prototype.p_onDone = function (args) {
            this._ctl.rotationX = this._rotationX;
            this._ctl.rotationY = this._rotationY;
            this._ctl.rotationZ = this._rotationZ;
        };
        return AnimRotateTo;
    })(lux.AnimBase);
    lux.AnimRotateTo = AnimRotateTo;

    /*====================================================================*
    START: AnimRotateBy
    *====================================================================*/
    var AnimRotateBy = (function (_super) {
        __extends(AnimRotateBy, _super);
        function AnimRotateBy(ctl, offsetX, offsetY, offsetZ, duration, ease) {
            _super.call(this, duration, ease);
            this._ctl = null;
            this._startX = 0.0;
            this._startY = 0.0;
            this._startZ = 0.0;
            this._offsetX = 0.0;
            this._offsetY = 0.0;
            this._offsetZ = 0.0;
            this._ctl = ctl;
            this._offsetX = offsetX;
            this._offsetY = offsetY;
            this._offsetZ = offsetZ;
        }
        AnimRotateBy.prototype.p_onInitialized = function () {
            this._startX = this._ctl.rotationX;
            this._startY = this._ctl.rotationY;
            this._startZ = this._ctl.rotationZ;
        };

        AnimRotateBy.prototype.p_onTicked = function (args) {
            if (this.p_ease != null) {
                this._ctl.rotationX = this.p_ease(this.p_timer.elapsed, this._startX, this._offsetX, this.p_duration);
                this._ctl.rotationY = this.p_ease(this.p_timer.elapsed, this._startY, this._offsetY, this.p_duration);
                this._ctl.rotationZ = this.p_ease(this.p_timer.elapsed, this._startZ, this._offsetZ, this.p_duration);
            } else {
                this._ctl.rotationX = this._startX + (args.p * this._offsetX);
                this._ctl.rotationY = this._startY + (args.p * this._offsetY);
                this._ctl.rotationZ = this._startZ + (args.p * this._offsetZ);
            }
        };

        AnimRotateBy.prototype.p_onDone = function (args) {
            this._ctl.rotationX = this._startX + this._offsetX;
            this._ctl.rotationY = this._startY + this._offsetY;
            this._ctl.rotationZ = this._startZ + this._offsetZ;
        };
        return AnimRotateBy;
    })(lux.AnimBase);
    lux.AnimRotateBy = AnimRotateBy;

    /*====================================================================*
    START: AnimSizeTo
    *====================================================================*/
    var AnimSizeTo = (function (_super) {
        __extends(AnimSizeTo, _super);
        function AnimSizeTo(ctl, targetX, targetY, duration, bScaleChildren, ease) {
            if (typeof bScaleChildren === "undefined") { bScaleChildren = true; }
            if (typeof ease === "undefined") { ease = null; }
            _super.call(this, duration, ease);
            this._ctl = null;
            this._startX = 0.0;
            this._startY = 0.0;
            this._targetX = 0.0;
            this._targetY = 0.0;
            this._bScaleChildren = false;

            this._ctl = ctl;
            this._targetX = targetX;
            this._targetY = targetY;

            if (bScaleChildren != null)
                this._bScaleChildren = bScaleChildren;
        }
        AnimSizeTo.prototype.p_onInitialized = function () {
            if (this._bScaleChildren) {
                this._startX = this._ctl.widthActual;
                this._startY = this._ctl.heightActual;
            } else {
                this._startX = this._ctl.width;
                this._startY = this._ctl.height;
            }
        };

        AnimSizeTo.prototype.p_onTicked = function (args) {
            var width = 0.0;
            var height = 0.0;

            if (this.p_ease != null) {
                width = this.p_ease(this.p_timer.elapsed, this._startX, this._targetX - this._startX, this.p_duration);
                height = this.p_ease(this.p_timer.elapsed, this._startY, this._targetY - this._startY, this.p_duration);
            } else {
                width = (this._startX + (args.p * (this._targetX - this._startX)));
                height = (this._startY + (args.p * (this._targetY - this._startY)));
            }

            if (this._bScaleChildren) {
                this._ctl.widthActual = width;
                this._ctl.heightActual = height;
            } else {
                this._ctl.width = width;
                this._ctl.height = height;
            }
        };

        AnimSizeTo.prototype.p_onDone = function (args) {
            if (this._bScaleChildren) {
                this._ctl.widthActual = this._targetX;
                this._ctl.heightActual = this._targetY;
            } else {
                this._ctl.width = this._targetX;
                this._ctl.height = this._targetY;
            }
        };
        return AnimSizeTo;
    })(lux.AnimBase);
    lux.AnimSizeTo = AnimSizeTo;

    /*====================================================================*
    START: AnimFadeTo
    *====================================================================*/
    var AnimFadeTo = (function (_super) {
        __extends(AnimFadeTo, _super);
        function AnimFadeTo(ctl, opacityTarget, duration, ease) {
            _super.call(this, duration, ease);
            this._ctl = null;
            this._opacityStart = 1.0;
            this._opacityTarget = 1.0;
            this._ctl = ctl;
            this._opacityTarget = opacityTarget;
        }
        AnimFadeTo.prototype.p_onInitialized = function () {
            this._opacityStart = this._ctl.opacity;
        };

        AnimFadeTo.prototype.p_onTicked = function (args) {
            if (this.p_ease != null) {
                this._ctl.opacity = this.p_ease(this.p_timer.elapsed, this._opacityStart, this._opacityTarget - this._opacityStart, this.p_duration);
            } else {
                this._ctl.opacity = this._opacityStart + (args.p * (this._opacityTarget - this._opacityStart));
            }
        };

        AnimFadeTo.prototype.p_onDone = function (args) {
            this._ctl.opacity = this._opacityTarget;
        };
        return AnimFadeTo;
    })(lux.AnimBase);
    lux.AnimFadeTo = AnimFadeTo;

    /*====================================================================*
    START: AnimMethod
    *====================================================================*/
    var AnimMethodArgs = (function (_super) {
        __extends(AnimMethodArgs, _super);
        function AnimMethodArgs(anim) {
            _super.call(this);
            this.anim = anim;
        }
        AnimMethodArgs.empty = new AnimMethodArgs(null);
        return AnimMethodArgs;
    })(lux.EventArgs);
    lux.AnimMethodArgs = AnimMethodArgs;

    var AnimMethod = (function (_super) {
        __extends(AnimMethod, _super);
        function AnimMethod(method, bAutodone, args) {
            if (typeof args === "undefined") { args = null; }
            _super.call(this);
            this._bAutoDone = true;
            this.isTimed = false;
            this._method = method;
            this._args = (args != null) ? args : AnimMethodArgs.empty;
            this._bAutoDone = bAutodone;
        }
        AnimMethod.prototype.p_onInitialized = function () {
            try  {
                this._method(this._args);
                if (this._args.anim == null)
                    this.doDone();
            } catch (e) {
                console.log("AnimMethod::this._onInitialize: " + e);
            }
        };
        return AnimMethod;
    })(lux.AnimBase);
    lux.AnimMethod = AnimMethod;

    /*====================================================================*
    START: AnimAnimateTo
    *====================================================================*/
    var AnimAnimateTo = (function (_super) {
        __extends(AnimAnimateTo, _super);
        function AnimAnimateTo(value, target, duration, ease) {
            _super.call(this, duration, ease);
            this._value = 0.0;
            this._start = 0.0;
            this._target = 0.0;
            this._value = value;
            this._target = target;
        }
        Object.defineProperty(AnimAnimateTo.prototype, "value", {
            get: function () {
                return this._value;
            },
            enumerable: true,
            configurable: true
        });

        AnimAnimateTo.prototype.p_onInitialized = function () {
            this._start = this._value;
        };

        AnimAnimateTo.prototype.p_onTicked = function (args) {
            if (this.p_ease != null) {
                this._value = this.p_ease(this.p_timer.elapsed, this._start, this._target - this._start, this.p_duration);
            } else {
                this._value = (this._start + (args.p * (this._target - this._start)));
            }
        };

        AnimAnimateTo.prototype.p_onDone = function (args) {
            this._value = this._target;
        };
        return AnimAnimateTo;
    })(lux.AnimBase);
    lux.AnimAnimateTo = AnimAnimateTo;

    /*====================================================================*
    START: AnimPause
    *====================================================================*/
    var AnimPause = (function (_super) {
        __extends(AnimPause, _super);
        function AnimPause(duration) {
            _super.call(this, duration, null);
        }
        return AnimPause;
    })(lux.AnimBase);
    lux.AnimPause = AnimPause;
})(lux || (lux = {}));
/// <reference path='proxyBase.ts' />
/// <reference path='pointBase.ts' />
var lux;
(function (lux) {
    /**
    * A Simple 3D Cartesian Coordinate System.
    */
    var CoordSys = (function (_super) {
        __extends(CoordSys, _super);
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function CoordSys(x, y, z) {
            if (typeof x === "undefined") { x = 0; }
            if (typeof y === "undefined") { y = 0; }
            if (typeof z === "undefined") { z = 0; }
            _super.call(this);

            if (x != null) {
                this.p_data.replace(x, 0);
                this.p_bEmpty = false;
            }

            if (y != null)
                this.p_data.replace(y, 1);
            if (z != null)
                this.p_data.replace(z, 2);
        }
        CoordSys.fromList = function (dataIn) {
            return new CoordSys(dataIn.item(0), dataIn.item(1), dataIn.item(2));
        };
        CoordSys.fromPoint = function (pt) {
            return new CoordSys(pt.x, pt.y, pt.z);
        };

        Object.defineProperty(CoordSys.prototype, "x", {
            get: function () {
                return this.p_data.item(0);
            },
            set: function (value) {
                this.p_data.replace(value, 0);
                this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CoordSys.prototype, "xInt", {
            get: function () {
                return Math.round(this.p_data.item(0));
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(CoordSys.prototype, "y", {
            get: function () {
                return this.p_data.item(1);
            },
            set: function (value) {
                this.p_data.replace(value, 1);
                this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CoordSys.prototype, "yInt", {
            get: function () {
                return Math.round(this.p_data.item(1));
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(CoordSys.prototype, "z", {
            get: function () {
                if (this.p_data.length > 2)
                    return this.p_data.item(2);
                else
                    return 0.0;
            },
            set: function (value) {
                if (this.p_data.length > 2)
                    this.p_data.replace(value, 2);
                this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CoordSys.prototype, "zInt", {
            get: function () {
                return Math.round(this.p_data.item(2));
            },
            enumerable: true,
            configurable: true
        });

        /**
        * Return a Point from screen coordinates
        */
        CoordSys.prototype.getPointFromScreenCoordinates = function (x, y, z) {
            return new lux.Point(x - this.x, -1 * (y - this.y), z - this.z, this);
        };
        CoordSys.prototype.getPointFromScreenPoint = function (pt) {
            return this.getPointFromScreenCoordinates(pt.x, pt.y, pt.z);
        };
        CoordSys.empty = new CoordSys();
        return CoordSys;
    })(lux.ProxyBase);
    lux.CoordSys = CoordSys;
})(lux || (lux = {}));
var lux;
(function (lux) {
    var g = (function () {
        function g() {
        }
        g.isEmpty = function (value) {
            if (value === null || value === undefined)
                return true;
            else
                return false;
        };

        g.isNotEmpty = function (value) {
            if (value !== null && value !== undefined)
                return true;
            else
                return false;
        };

        g.setCookie = function (name, value, expireMilliseconds) {
            //----- expire is optional and should be in miliseconds
            var cookie = name + '=' + encodeURI(value);

            if (expireMilliseconds) {
                var today = new Date();
                var expireDate = new Date();
                expireDate.setTime(today.getTime() + expireMilliseconds);
                cookie = cookie.concat(';expires=' + expireDate.toUTCString());
            }

            document.cookie = cookie;
        };

        g.getCookie = function (name) {
            var re = new RegExp('[; ]' + name + '=([^\\s;]*)');
            var sMatch = (' ' + document.cookie).match(re);
            if (name && sMatch)
                return decodeURI(sMatch[1]);
            return null;
        };

        /**
        * A simple function to validate a Hex code.
        */
        g.isHex = function (hex) {
            return (/^(#[a-fA-F0-9]{3,6})$/i.test(hex));
        };

        /**
        * A simple function to check if the given value is a number.
        */
        g.isNumber = function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };

        /**
        * A simple function to check if the given value is empty.
        */
        g.isEmptyString = function (str) {
            //----- Remove white space.
            str = str.replace(/^\s+|\s+$/, '');
            return str.length == 0;
        };

        /**
        * A simple function clear whitespaces.
        */
        g.trimWhiteSpace = function (str) {
            var ws, i;
            str = str.replace(/^\s\s*/, '');
            ws = /\s/;
            i = str.length;
            while (ws.test(str.charAt(--i))) {
                continue;
            }
            return str.slice(0, i + 1);
        };

        g.calculateHtmlSize = function (strHtml, width) {
            var realWidth;
            var realHeight;
            var tmpDiv;

            tmpDiv = document.createElement('div');
            tmpDiv.style.visibility = 'hidden';
            tmpDiv.style.position = 'absolute';
            tmpDiv.style.display = 'block';
            if (width !== undefined)
                tmpDiv.style.width = width + 'px';

            tmpDiv.innerHTML = strHtml;
            document.body.appendChild(tmpDiv);
            realWidth = tmpDiv.offsetWidth;
            realHeight = tmpDiv.offsetHeight;
            document.body.removeChild(tmpDiv);

            return new lux.Size(realWidth, realHeight);
        };
        return g;
    })();
    lux.g = g;
})(lux || (lux = {}));
/// <reference path='pointBase.ts' />
/// <reference path='iShape.ts' />
/// <reference path='../events.ts' />
/// <reference path='../util/g.ts' />
var lux;
(function (lux) {
    var Rectangle = (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle(x, y, width, height) {
            _super.call(this);
            this._bottom = 100.0;
            this._right = 100.0;
            this.p_data.add(0);

            if (lux.g.isNotEmpty(x)) {
                this.p_data[0] = x;
                this.p_bEmpty = false;
            }

            if (lux.g.isNotEmpty(y))
                this.p_data[1] = y;
            if (lux.g.isNotEmpty(width))
                this.p_data[2] = width;
            if (lux.g.isNotEmpty(height))
                this.p_data[3] = height;
        }
        Object.defineProperty(Rectangle.prototype, "type", {
            get: function () {
                return 2 /* RECTANGLE */;
            },
            enumerable: true,
            configurable: true
        });

        Rectangle.prototype.setValues = function (x, y, width, height) {
            if (lux.g.isNotEmpty(x)) {
                this.p_data[0] = x;
                this.p_bEmpty = false;
            } else
                return this;

            if (lux.g.isNotEmpty(y))
                this.p_data[1] = y;
            if (lux.g.isNotEmpty(width))
                this.p_data[2] = width;
            if (lux.g.isNotEmpty(height))
                this.p_data[3] = height;

            this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));

            return this;
        };

        Object.defineProperty(Rectangle.prototype, "top", {
            //----- top
            get: function () {
                return this.p_data[1];
            },
            set: function (value) {
                if (this.p_data[1] != value) {
                    this.p_data[1] = value;
                    this._bottom = this.p_data[1] + this.p_data[3];
                    this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "topInt", {
            get: function () {
                return Math.round(this.p_data[1]);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Rectangle.prototype, "left", {
            //----- left
            get: function () {
                return this.p_data[0];
            },
            set: function (value) {
                if (this.p_data[0] != value) {
                    this.p_data[0] = value;
                    this._right = this.p_data[0] + this.p_data[2];
                    this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "leftInt", {
            get: function () {
                return Math.round(this.p_data[0]);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Rectangle.prototype, "bottom", {
            //----- bottom
            get: function () {
                return this._bottom;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "bottomInt", {
            get: function () {
                return Math.round(this._bottom);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Rectangle.prototype, "right", {
            //----- right
            get: function () {
                return this._right;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "rightInt", {
            get: function () {
                return Math.round(this._right);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Rectangle.prototype, "width", {
            //----- width
            get: function () {
                return this.p_data[2];
            },
            set: function (value) {
                if (value < 0)
                    value = 0.0;
                this.p_data[2] = value;
                this._right = this.p_data[0] + this.p_data[2];
                this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "widthInt", {
            get: function () {
                return Math.round(this.p_data[2]);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Rectangle.prototype, "height", {
            //----- Height
            get: function () {
                return this.p_data[3];
            },
            set: function (value) {
                if (value < 0)
                    value = 0.0;
                this.p_data[3] = value;
                this._bottom = this.p_data[1] + this.p_data[3];
                this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "heightInt", {
            get: function () {
                return Math.round(this.p_data[3]);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Rectangle.prototype, "topLeft", {
            get: function () {
                return new lux.Point(this.left, this.top);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "topRight", {
            get: function () {
                return new lux.Point(this.right, this.top);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "bottomLeft", {
            get: function () {
                return new lux.Point(this.left, this.bottom);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "bottomRight", {
            get: function () {
                return new lux.Point(this.right, this.bottom);
            },
            enumerable: true,
            configurable: true
        });

        Rectangle.prototype.intersects = function (rect) {
            return !(rect.left > this.right || rect.right < this.left || rect.top > this.bottom || rect.bottom < this.top);
        };

        Rectangle.prototype.contains = function (rect) {
            return (rect.left > this.left && rect.right < this.right && rect.top > this.top && rect.bottom < this.bottom);
        };
        return Rectangle;
    })(lux.ProxyBase);
    lux.Rectangle = Rectangle;
})(lux || (lux = {})); // End of module
/// <reference path='events.ts' />
/// <reference path='enums.ts' />
var lux;
(function (lux) {
    var AttributeEventArgs = (function (_super) {
        __extends(AttributeEventArgs, _super);
        function AttributeEventArgs(attribute) {
            _super.call(this);
            this.attribute = null;
            this.attribute = attribute;
        }
        return AttributeEventArgs;
    })(lux.EventArgs);
    lux.AttributeEventArgs = AttributeEventArgs;

    var Attribute = (function () {
        function Attribute(name, dataType, value) {
            this._name = '';
            this._dataType = 9 /* STRING */;
            /*====================================================================*
            START: Event Handlers
            *====================================================================*/
            this.propertyChanged = new lux.Signal();
            if (lux.g.isNotEmpty(name))
                this._name = name;
            if (lux.g.isNotEmpty(dataType))
                this._dataType = dataType;
            if (lux.g.isNotEmpty(value))
                this._value = value;
        }
        Object.defineProperty(Attribute.prototype, "name", {
            //----- Name
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
                this.doPropertyChanged('name', value);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Attribute.prototype, "dataType", {
            //----- Type
            /**
            * The unique this: DataType attribute supports.
            */
            get: function () {
                return this._dataType;
            },
            set: function (value) {
                this._dataType = value;
                this.doPropertyChanged('dataType', value);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Attribute.prototype, "value", {
            //----- Value
            /**
            * The value of the associated data.
            */
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = value;
                this.doPropertyChanged('value', value);
            },
            enumerable: true,
            configurable: true
        });

        Attribute.prototype.doPropertyChanged = function (sPropertyName, value) {
            try  {
                this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs(sPropertyName, value));
                if (this._parentCollection != null)
                    this._parentCollection.doPropertyChanged(this._name, this);
            } catch (e) {
                console.log('Error in Attribute._doPropertyChanged(): ' + e.tostring() + ', sPropertyName: ' + sPropertyName + ', value: ' + value.toString() + ', _name: ' + this._name);
            }
        };
        return Attribute;
    })();
    lux.Attribute = Attribute;
})(lux || (lux = {}));
/// <reference path='collections/list.ts' />
/// <reference path='collections/map.ts' />
/// <reference path='events.ts' />
/// <reference path='attribute.ts' />
var lux;
(function (lux) {
    var Attributes = (function (_super) {
        __extends(Attributes, _super);
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function Attributes() {
            _super.call(this);
            /*====================================================================*
            START: Member Variables and Properties
            *====================================================================*/
            //----- this._parentCollection
            //----- Set when added to an collection: Attributes.
            this._parent = null;
            this.p_mapNames = new lux.Map();
            /*====================================================================*
            START: Event Handlers
            *====================================================================*/
            this.propertyChanged = new lux.Signal();
        }
        Attributes.fromMap = function (map) {
            var attributesNew = new Attributes();
            var mapAttributes = map;
            if (mapAttributes == null)
                return;

            mapAttributes.forEach(function (key, mapValue) {
                var dataType;
                var value;

                switch (mapAttributes.getValue(key)['dataType']) {
                    case 'ATTRIBUTES':
                        dataType = 0 /* ATTRIBUTES */;
                        break;
                    case 'BOOLEAN':
                        dataType = 1 /* BOOLEAN */;
                        value = (mapAttributes.getValue(key)['value'] == 'true') ? true : false;
                        break;
                    case 'DATE_TIME':
                        dataType = 2 /* DATE_TIME */;
                        value = Date.parse(mapAttributes.getValue(key)['value']);
                        break;
                    case 'DOUBLE':
                        dataType = 3 /* DOUBLE */;
                        value = parseFloat(mapAttributes.getValue(key)['value']);
                        break;
                    case 'HTML':
                        dataType = 5 /* HTML */;
                        value = mapAttributes.getValue(key)['value'];
                        break;
                    case 'HEX_VALUE':
                        dataType = 6 /* HEX_VALUE */;
                        value = mapAttributes.getValue(key)['value'];
                        break;
                    case 'INT':
                        dataType = 7 /* INT */;
                        value = parseInt(mapAttributes.getValue(key)['value']);
                        break;
                    case 'STRING':
                        dataType = 9 /* STRING */;
                        value = mapAttributes.getValue(key)['value'];
                        break;
                    case 'URI':
                        dataType = 10 /* URI */;
                        value = mapAttributes.getValue(key)['value'];
                        break;
                    default:
                        dataType = 9 /* STRING */;
                        value = mapAttributes.getValue(key)['value'];
                }

                if (dataType == 0 /* ATTRIBUTES */) {
                    attributesNew.save(key, dataType, Attributes.fromMap(mapAttributes.getValue(key)['value']));
                } else {
                    attributesNew.save(key, dataType, value);
                }
            });
        };

        Attributes.fromAttributes = function (attributes) {
            var attributesNew = new Attributes();
            attributesNew.saveAll(attributes);
            return attributesNew;
        };

        Object.defineProperty(Attributes.prototype, "namesMap", {
            get: function () {
                return this.p_mapNames;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Attributes.prototype, "length", {
            get: function () {
                return this.length;
            },
            set: function (l) {
                this.length = l;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Methods
        *====================================================================*/
        Attributes.prototype.get = function (name) {
            if (this.p_mapNames.containsKey(name)) {
                return this.p_mapNames.getValue(name);
            } else {
                return null;
            }
        };

        Attributes.createAttribute = function (name, dataType, value) {
            try  {
                var attribute;

                switch (lux.DataType[dataType]) {
                    case 'ATTRIBUTES':
                        attribute = new lux.Attribute(name, dataType, value);
                        value._parent = attribute;
                        break;
                    case 'BOOLEAN':
                        attribute = new lux.Attribute(name, dataType, value);
                        break;
                    case 'DATE_TIME':
                        attribute = new lux.Attribute(name, dataType, value);
                        break;
                    case 'DOUBLE':
                        attribute = new lux.Attribute(name, 3 /* DOUBLE */, value);
                        break;
                    case 'INT':
                        attribute = new lux.Attribute(name, 7 /* INT */, value);
                        break;
                    case 'HTML':
                    case 'URI':
                    case 'HEX_VALUE':
                    case 'STRING':
                        attribute = new lux.Attribute(name, dataType, value);
                        break;
                    default:
                        attribute = new lux.Attribute(name, dataType, value);
                        break;
                }

                return attribute;
            } catch (e) {
                console.log('Error in Attributes.createAttribute(): ' + e.toString() + ', attribute name: ' + name.toString() + ', attribute datatype.value: ' + lux.DataType[dataType] + ', attribute value: ' + value.toString());
                return null;
            }
        };

        Attributes.prototype.add = function (attribute, index) {
            try  {
                if (lux.g.isEmpty(attribute || this.p_mapNames.containsKey(attribute.name))) {
                    return false;
                }

                if (!_super.prototype.add.call(this, attribute, index))
                    return false;

                attribute._parentCollection = this;
                this.p_mapNames.setValue(attribute.name, attribute);

                return true;
            } catch (e) {
                console.log('Error in Attributes.add(): ' + e.toString());
            }
        };

        Attributes.prototype.save = function (name, dataType, value, bSignalPropertyChanged) {
            if (typeof bSignalPropertyChanged === "undefined") { bSignalPropertyChanged = true; }
            try  {
                var attribute;

                if (this.p_mapNames.containsKey(name)) {
                    attribute = this.get(name);
                } else {
                    attribute = Attributes.createAttribute(name, dataType, value);
                    this.add(attribute);
                    bSignalPropertyChanged = false;
                }

                if (bSignalPropertyChanged)
                    this.doPropertyChanged(name, value);

                return attribute;
            } catch (e) {
                console.log('Error in Attributes.save(): ' + e.toString() + ', attribute name: ' + name.toString() + ', attribute datatype.value: ' + lux.DataType[dataType] + ', attribute value: ' + value.toString());
                return null;
            }
        };

        Attributes.prototype.saveAll = function (attributes) {
            attributes.forEach(function (attribute) {
                if (attribute.dataType == 0 /* ATTRIBUTES */) {
                    var attributeTemp = this.get(attribute.name);
                    if (lux.g.isNotEmpty(attributeTemp)) {
                        attributeTemp.value.saveAll(attribute.value);
                    } else
                        this.save(attribute.name, attribute.dataType, Attributes.fromAttributes(attribute.value));
                } else {
                    this.save(attribute.name, attribute.dataType, attribute.value);
                }

                return true;
            });
        };

        Attributes.prototype.remove = function (attribute) {
            this.p_mapNames.remove(attribute.name);

            return this.remove(attribute);
        };

        Attributes.prototype.removeByName = function (sName) {
            var attribute = null;

            try  {
                attribute = this.p_mapNames.getValue(sName);
            } catch (e) {
                console.log('Error in Attributes.removeByName(): An attribute with the name \'sName\' cannot be found.');
                return null;
            }

            this.remove(attribute);

            if (attribute != null)
                return true;
            else
                return false;
        };

        Attributes.prototype.clear = function () {
            this.clear();
            this.p_mapNames.clear();
        };

        Attributes.prototype.sortByName = function () {
            this.sort(this.p_compareNames);
        };

        Attributes.prototype.toMap = function () {
            var map = new lux.Map();

            this.forEach(function (attribute) {
                var newMap = new lux.Map();
                newMap.setValue('dataType', lux.DataType[attribute.dataType]);

                if (attribute.dataType == 0 /* ATTRIBUTES */)
                    newMap.setValue('value', (attribute.value).toMap());
                else
                    newMap.setValue('value', attribute.value.toString());

                map.setValue(attribute.name, newMap);

                return true;
            });

            return map;
        };
        Attributes.prototype.toJsonString = function () {
            var jsonString = JSON.stringify(this.toMap());
            return jsonString;
        };

        /*====================================================================*
        START: Compare names
        *====================================================================*/
        Attributes.prototype.p_compareNames = function (item1, item2) {
            return item1.name.toLowerCase().localeCompare(item2.name.toLowerCase());
        };

        Attributes.prototype.doPropertyChanged = function (sPropertyName, value) {
            this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs(sPropertyName, value));

            if (this._parent != null)
                this._parent.doPropertyChanged(sPropertyName, this.get(sPropertyName));
        };
        return Attributes;
    })(lux.List);
    lux.Attributes = Attributes;
})(lux || (lux = {})); // End of module
/// <reference path='../collections/map.ts' />
/// <reference path='proxyBase.ts' />
/// <reference path='../events.ts' />
var lux;
(function (lux) {
    var Color = (function (_super) {
        __extends(Color, _super);
        function Color(red, green, blue, alpha) {
            _super.call(this);

            this.p_data.add(255); // Alpha

            if (red != undefined || green != undefined || blue != undefined) {
                this.p_bEmpty = false;
            }

            if (red)
                this.p_data.add(red, 0);
            if (green)
                this.p_data.add(green, 1);
            if (blue)
                this.p_data.add(blue, 2);
            if (alpha)
                this.p_data.add(alpha, 3);
        }
        //Color.fromList(List<num> dataIn): Color { return <Color>super.fromList(dataIn); }
        Color.copy = function (clr) {
            return new Color(clr.r, clr.b, clr.g, clr.a);
        };

        //Color.fromString(s: string) : super.fromString(s) { }
        Color.fromHex = function (hexColor) {
            if (!Color.isValidHexColor(hexColor)) {
                return Color.empty;
            }

            hexColor = hexColor.toLowerCase();

            var r = parseInt('0x' + hexColor.substring(1, 3));
            var g = parseInt('0x' + hexColor.substring(3, 5));
            var b = parseInt('0x' + hexColor.substring(5, 7));

            return new Color(r, g, b);
        };

        Color.fromHSV = function (h, s, v) {
            //----- based on MochiKit implementation by Bob Ippolito
            //----- h,s,v ranges are < 0.0 - 1.0 >
            var i, f, p, q, t;
            var r, g, b;

            if (v == 0)
                r = g = b = 0;
            else {
                i = Math.floor(h * 6);
                f = (h * 6) - i;
                p = v * (1 - s);
                q = v * (1 - (s * f));
                t = v * (1 - (s * (1 - f)));

                switch (i) {
                    case 1:
                        r = q;
                        g = v;
                        b = p;
                        break;
                    case 2:
                        r = p;
                        g = v;
                        b = t;
                        break;
                    case 3:
                        r = p;
                        g = q;
                        b = v;
                        break;
                    case 4:
                        r = t;
                        g = p;
                        b = v;
                        break;
                    case 5:
                        r = v;
                        g = p;
                        b = q;
                        break;
                    case 6:
                    case 0:
                        r = v;
                        g = t;
                        b = p;
                        break;
                }
            }

            return new Color(r * 255.0, g * 255.0, b * 255.0);
        };

        Color.fromMap = function (mapColor) {
            var color = new Color();

            /*var mapAttributes: Attributes = Attributes.fromMap(mapColor);
            
            var channelAttribute: Attribute = mapAttributes.getValue("R");
            if (channelAttribute != null) color.r = parseFloat(channelAttribute.value);
            
            channelAttribute = mapAttributes.getValue("G");
            if (channelAttribute != null) color.g = parseFloat(channelAttribute.value);
            
            channelAttribute = mapAttributes.getValue("B");
            if (channelAttribute != null) color.b = parseFloat(channelAttribute.value);
            
            channelAttribute = mapAttributes.getValue("A");
            if (channelAttribute != null) color.a = parseFloat(channelAttribute.value);*/
            return color;
        };

        Object.defineProperty(Color, "empty", {
            /*====================================================================*
            START: Properties
            *====================================================================*/
            get: function () {
                return new Color();
            },
            enumerable: true,
            configurable: true
        });

        Color.prototype.setValues = function (red, green, blue, alpha) {
            if (red) {
                this.p_data.add(red, 0);
                this.p_bEmpty = false;
            } else
                return this;

            if (green)
                this.p_data.add(green, 1);
            if (blue)
                this.p_data.add(blue, 2);
            if (alpha)
                this.p_data.add(alpha, 3);

            this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));

            return this;
        };

        Object.defineProperty(Color.prototype, "r", {
            get: function () {
                return this.p_data.item(0);
            },
            set: function (value) {
                if (this.p_data.item(0) != value) {
                    this.p_data.add(value, 0);
                    this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
                }
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Color.prototype, "g", {
            get: function () {
                return this.p_data.item(1);
            },
            set: function (value) {
                if (this.p_data.item(1) != value) {
                    this.p_data.add(value, 1);
                    this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
                }
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Color.prototype, "b", {
            get: function () {
                return this.p_data.item(2);
            },
            set: function (value) {
                if (this.p_data.item(2) != value) {
                    this.p_data.add(value, 2);
                    this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
                }
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Color.prototype, "a", {
            get: function () {
                return this.p_data.item(3);
            },
            set: function (value) {
                if (this.p_data.item(3) != value) {
                    this.p_data.add(value, 3);
                    this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
                }
            },
            enumerable: true,
            configurable: true
        });

        Color.prototype.toMap = function () {
            var map = new lux.Map();

            /*map.setValue('R', new Map<string, string>();
            map["R"]["dataType"] = DataType.DOUBLE.value;
            map["R"]["value"] = this.r.toString();
            
            map["G"] = new Map();
            map["G"]["dataType"] = DataType.DOUBLE.value;
            map["G"]["value"] = this.g.toString();
            
            map["B"] = new Map();
            map["B"]["dataType"] = DataType.DOUBLE.value;
            map["B"]["value"] = this.b.toString();
            
            map["A"] = new Map();
            map["A"]["dataType"] = DataType.DOUBLE.value;
            map["A"]["value"] = this.a.toString();*/
            return map;
        };

        /*====================================================================*
        START: Utility Methods
        *====================================================================*/
        Color.prototype.toHex = function () {
            try  {
                var hexString = '#';

                for (var i = 0; i < 3; i++) {
                    var hex = Math.round(this.p_data.item(i)).toString(16);
                    hex = hex.length == 1 ? '0' + hex : hex;
                    hexString += hex;
                }

                return hexString;
            } catch (e) {
                console.log("Error in Color.toHex(): " + e.toString());
            }
        };

        /// In the YIQ color space, each RGB channel is scaled in accordance to its visual impact.
        /// Once everything is scaled and normalized, the resulting value will be in a range between 0 and 255,
        /// where lower values are darker.
        Color.prototype.toYIQ = function () {
            var yiq = ((this.r * 299) + (this.g * 587) + (this.b * 114)) / 1000;
            return Math.round(yiq);
        };

        /// Is the color darker than a neutral gray?
        Color.prototype.isDarkColor = function () {
            var yiq = this.toYIQ();
            return (yiq >= 128) ? false : true;
        };

        Color.isValidHexColor = function (str) {
            var validHexColorRe = new RegExp('^#(?:[0-9a-f]{6})\$', 'i');
            return validHexColorRe.test(str);
        };

        Color.prototype.isNearMatch = function (matchedColor, rangeAllowed) {
            var isMatch = false;
            var redDif = Math.abs(this.r - matchedColor.r);
            var blueDif = Math.abs(this.b - matchedColor.b);
            var greenDif = Math.abs(this.g - matchedColor.g);

            if (redDif <= rangeAllowed && blueDif <= rangeAllowed && greenDif <= rangeAllowed) {
                isMatch = true;
            }

            return isMatch;
        };

        Color.prototype.colorDifference = function (matchedColor) {
            var redDif = Math.abs(this.r - matchedColor.r);
            var blueDif = Math.abs(this.b - matchedColor.b);
            var greenDif = Math.abs(this.g - matchedColor.g);
            var colorDiff = new Color(redDif, greenDif, blueDif);

            return colorDiff;
        };

        Color.calculateColor = function (front, back, alpha) {
            //----- Use alpha blending to brigthen the colors but don't use it
            //----- directly. Instead derive an opaque color that we can use.
            //----- If we use a color with alpha blending directly we won't be able
            //----- to paint over whatever color was in the background and there
            //----- would be shadows of that color showing through
            var opacity = (alpha * 255.0);

            var frontColor = Color.copy(front);
            var backColor = Color.copy(back);

            var frontRed = frontColor.r;
            var frontGreen = frontColor.g;
            var frontBlue = frontColor.b;
            var backRed = backColor.r;
            var backGreen = backColor.g;
            var backBlue = backColor.b;

            var newRed = frontRed * opacity / 255.0 + backRed * ((255.0 - opacity) / 255.0);
            var newGreen = frontGreen * opacity / 255.0 + backGreen * ((255.0 - opacity) / 255.0);
            var newBlue = frontBlue * opacity / 255.0 + backBlue * ((255.0 - opacity) / 255.0);

            return new Color(Math.round(newRed), Math.round(newGreen), Math.round(newBlue));
        };

        Color.getHighContrastColor = function (backgroundColor) {
            var yiq = backgroundColor.toYIQ();
            return (yiq >= 128) ? new Color(0, 0, 0) : new Color(255, 255, 255);
        };
        return Color;
    })(lux.ProxyBase);
    lux.Color = Color;
})(lux || (lux = {})); // End of module
/// <reference path='proxies/color.ts' />
/// <reference path='events.ts' />
/// <reference path='enums.ts' />
var lux;
(function (lux) {
    var Style = (function () {
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function Style() {
            /*====================================================================*
            START: Events
            *====================================================================*/
            this.propertyChanged = new lux.Signal();
            this.border = new BorderStyle('border', this);
            this.background = new UIElementStyle('background', this);
        }
        Style.prototype.p_doPropertyChanged = function (sPropertyName, value) {
            this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs(sPropertyName, value));
        };

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        Style.prototype.clone = function () {
            var styleTmp = new Style();

            styleTmp.background.color = this.background.color;

            styleTmp.border.color = this.border.color;
            styleTmp.border.thickness = this.border.thickness;

            return styleTmp;
        };

        Style.prototype.set = function (style) {
            this.background.color = style.background.color;

            this.border.color = style.border.color;
            this.border.thickness = style.border.thickness;

            return this;
        };
        return Style;
    })();
    lux.Style = Style;

    /*====================================================================*
    START: Classes
    *====================================================================*/
    var UIElementStyle = (function () {
        function UIElementStyle(name, style) {
            this.p_clr = new lux.Color();
            if (lux.g.isNotEmpty(name))
                this.p_name = name;
            if (lux.g.isNotEmpty(style))
                this.p_style = style;
        }
        Object.defineProperty(UIElementStyle.prototype, "style", {
            get: function () {
                return this.p_style;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(UIElementStyle.prototype, "name", {
            get: function () {
                return this.p_name;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(UIElementStyle.prototype, "color", {
            get: function () {
                return this.p_clr;
            },
            set: function (value) {
                this.p_clr = value;

                if (lux.g.isNotEmpty(this.style))
                    this.style.p_doPropertyChanged(this.p_name + '.color', value);
            },
            enumerable: true,
            configurable: true
        });

        UIElementStyle.prototype.set = function (style) {
            this.color = style.color;
            return this;
        };
        return UIElementStyle;
    })();
    lux.UIElementStyle = UIElementStyle;

    var BorderStyle = (function (_super) {
        __extends(BorderStyle, _super);
        function BorderStyle(name, style) {
            _super.call(this, name, style);
            this.p_thickness = 0.0;
        }
        Object.defineProperty(BorderStyle.prototype, "thickness", {
            get: function () {
                return this.p_thickness;
            },
            set: function (value) {
                this.p_thickness = value;
                if (lux.g.isNotEmpty(this.style))
                    this.style.p_doPropertyChanged(this.p_name + '.thickness', value);
            },
            enumerable: true,
            configurable: true
        });

        BorderStyle.prototype.set = function (style) {
            _super.prototype.set.call(this, style);
            this.thickness = style.thickness;
            return this;
        };
        return BorderStyle;
    })(UIElementStyle);
    lux.BorderStyle = BorderStyle;
})(lux || (lux = {})); // End of module
/// <reference path='iControl.ts' />
/// <reference path='root.ts' />
/// <reference path='iControl.ts' />
/// <reference path='controls.ts' />
/// <reference path='events.ts' />
/// <reference path='animation/hiResTimer/hiResTimerCounterBrowser.ts' />
/// <reference path='animation/animManager.ts' />
/// <reference path='animation/animEase.ts' />
/// <reference path='animation/animation.ts' />
/// <reference path='proxies/coordSys.ts' />
/// <reference path='proxies/rectangle.ts' />
/// <reference path='attributes.ts' />
/// <reference path='style.ts' />
/// <reference path='util/g.ts' />
var lux;
(function (lux) {
    var ControlBase = (function () {
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function ControlBase() {
            this.p_name = '';
            this.p_animate = new lux.AnimManager();
            this.p_nNestLevel = 0;
            this.p_nZIndex = 0;
            this.p_bInitialized = false;
            this.p_rotation = 0.0;
            this.p_rotationX = 0.0;
            this.p_rotationY = 0.0;
            this.p_opacity = 1.0;
            this.p_opacityAbs = 1.0;
            //----- opacityMin
            /**
            * When the opacity is set below this level, the control won't be rendered and it won't receive mouse events.
            */
            this.opacityMin = 0.1;
            this.p_bMouseLeftButtonDown = false;
            this.p_bMouseRightButtonDown = false;
            this.p_bPreviewMouseOver = false;
            this.p_bMouseOver = false;
            this.isAllowMouseButtonEvents = false;
            this.isAllowMouseMoveEvents = false;
            this.isAllowMouseWheelEvents = false;
            this.isAllowMouseDragEvents = false;
            this.isPropagateMouseEvents = false;
            this.p_bVisible = true;
            this.p_bClipChildControls = false;
            this.p_bInvalidated = false;
            this.p_bResized = true;
            this.p_z = 0.0;
            this.p_x = 0.0;
            this.p_left = 0.0;
            this.p_leftActual = 0.0;
            this.p_y = 0.0;
            this.p_top = 0.0;
            this.p_topActual = 0.0;
            this.p_bottom = 100.0;
            this.p_right = 100.0;
            this.p_bWidthSet = false;
            this.p_widthTarget = 100.0;
            this.p_widthActual = 100.0;
            this.p_bHeightSet = false;
            this.p_heightTarget = 100.0;
            this.p_heightActual = 100.0;
            this.p_scaleWidth = 1.0;
            this.p_scaleWidthAbs = 1.0;
            this.p_scaleHeight = 1.0;
            this.p_scaleHeightAbs = 1.0;
            this.p_ptAnchor = new lux.Point(0.0, 0.0, 0.0);
            this.p_isAspectRatioMaintained = false;
            //----- IsScaleChildren
            this.isScaleChildren = true;
            this.p_isAutoLeft = false;
            this.p_isAutoTop = false;
            this.p_isAutoWidth = false;
            this.p_isAutoHeight = false;
            this.p_autoRatios = new lux.Rectangle(0, 0, 1, 1);
            //===== END: AutoSize
            /*--------------------------------------------------------------------*
            END: ControlBounds maintenance
            *--------------------------------------------------------------------*/
            /*--------------------------------------------------------------------*
            3D settings
            *--------------------------------------------------------------------*/
            this.isAcceptLighting = true;
            this.isAcceptShadows = false;
            this.isCastShadows = true;
            this.shadowFactor = 0.65;
            this.p_bLoaded = true;
            this.loaded = new lux.Signal();
            //----- propertyChanged
            this.propertyChanged = new lux.Signal();
            //----- initialized
            this.initialized = new lux.Signal();
            //----- resized
            this.resized = new lux.Signal();
            //----- mouseMove
            this.mouseMove = new lux.Signal();
            this.previewMouseMove = new lux.Signal();
            //----- previewMouseEnter
            this.previewMouseEnter = new lux.Signal();
            //----- previewMouseLeave
            this.previewMouseLeave = new lux.Signal();
            //----- mouseEnter
            this.mouseEnter = new lux.Signal();
            //----- mouseLeave
            this.mouseLeave = new lux.Signal();
            //----- mouseLeftButtonDown
            this.p_bRegisterClick = false;
            this.p_clickThreshold = 30;
            this.mouseLeftButtonDown = new lux.Signal();
            this.previewMouseLeftButtonDown = new lux.Signal();
            //----- MouseLeftButtonUp
            this.mouseLeftButtonUp = new lux.Signal();
            this.previewMouseLeftButtonUp = new lux.Signal();
            //----- MouseClick
            this.mouseClick = new lux.Signal();
            //----- mouseRightButtonDown
            this.mouseRightButtonDown = new lux.Signal();
            this.previewMouseRightButtonDown = new lux.Signal();
            //----- MouseRightButtonUp
            this.mouseRightButtonUp = new lux.Signal();
            this.previewMouseRightButtonUp = new lux.Signal();
            //----- mouseWheel
            this.mouseWheel = new lux.Signal();
            this.previewMouseWheel = new lux.Signal();
            /*--------------------------------------------------------------------*
            Drag and Drop Events
            *--------------------------------------------------------------------*/
            //----- dragOver
            this.dragOver = new lux.Signal();
            this.previewDragOver = new lux.Signal();
            //----- dragDrop
            this.dragDrop = new lux.Signal();
            this.previewDragDrop = new lux.Signal();
            this._bAttachedToControlSystem = false;
            this.attachedToControlSystem = new lux.Signal();
            this.removedFromControlSystem = new lux.Signal();
            this.p_bDisposed = false;
            this.disposing = new lux.Signal();
            try  {
                this.p_colControls = new lux.Controls(this);

                this.animate.timerCounter = new lux.HiResTimerCounterBrowser();

                this.initialized.listen(this.p_control_onInitialize, this);
                this.resized.listen(this.p_control_onResized, this);

                this.mouseMove.listen(this.onMouseMove, this);
                this.mouseLeftButtonDown.listen(this.onMouseLeftButtonDown, this);
                this.mouseLeftButtonUp.listen(this.onMouseLeftButtonUp, this);
                this.mouseClick.listen(this.onMouseClick, this);
                this.mouseEnter.listen(this.onMouseEnter, this);
                this.mouseLeave.listen(this.onMouseLeave, this);
                this.mouseWheel.listen(this.onMouseWheel, this);

                this.previewMouseMove.listen(this.onPreviewMouseMove, this);
                this.previewMouseLeftButtonDown.listen(this.onPreviewMouseLeftButtonDown, this);
                this.previewMouseLeftButtonUp.listen(this.onPreviewMouseLeftButtonUp, this);
                this.previewMouseEnter.listen(this.onPreviewMouseEnter, this);
                this.previewMouseLeave.listen(this.onPreviewMouseLeave, this);
                this.previewMouseWheel.listen(this.onPreviewMouseWheel, this);

                this.anchorPoint.propertyChanged.listen(this.p_handleAnchorPointChanged, this);
            } catch (e) {
                console.log('Error in Control constructor: ' + e);
            }
        }
        Object.defineProperty(ControlBase.prototype, "name", {
            /*====================================================================*
            START: Properties
            *====================================================================*/
            //----- name
            get: function () {
                return this.p_name;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "type", {
            //----- type
            get: function () {
                return 0 /* BASIC */;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "surface", {
            //----- surface
            get: function () {
                return this.p_surface;
            },
            set: function (value) {
                if (lux.g.isEmpty(value))
                    return;

                if (lux.g.isNotEmpty(this.p_surface))
                    this.p_surface.deactivate();
                this.p_surface = value;
                this.p_surface.activate(this);
                if (lux.g.isNotEmpty(this.p_parent))
                    this.p_surface.initialize();

                this.p_doPropertyChanged('surface', value);
            },
            enumerable: true,
            configurable: true
        });
        ControlBase.prototype.requestSurface = function () {
            try  {
                if (lux.g.isNotEmpty(this.p_surface) || lux.g.isEmpty(this.p_root) || lux.g.isEmpty(this.p_root.renderer))
                    return;

                //----- IMPORTANT: Use the property to set the Surface value here, so that activate/deactivate are called.
                this.surface = this.p_root.renderer.newSurface(0 /* BASIC */);
            } catch (e) {
                console.log('Error in Control.requestSurface: ' + e);
            }
        };

        Object.defineProperty(ControlBase.prototype, "root", {
            //----- root
            get: function () {
                return this.p_root;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "parent", {
            //----- parent
            get: function () {
                return this.p_parent;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "controls", {
            //----- controls
            get: function () {
                return this.p_colControls;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "style", {
            //----- style
            get: function () {
                return this.p_style;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "animate", {
            //----- animate
            //----- To hook up animation, a IHiResTimerCounter must be applied to p_animate.timerCounter
            //----- and tick() must be called on the Root.
            get: function () {
                return this.p_animate;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "nestLevel", {
            //----- nestLevel
            /**
            * Gets the nest level, which indicates how many levels deep the control is nested within other controls.
            * The Root has a NestLevel of 0, while children of the root have a level of 1.
            */
            get: function () {
                return this.p_nNestLevel;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "zIndex", {
            //----- zIndex
            get: function () {
                return this.p_nZIndex;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "isInitialized", {
            //----- isInitialized
            get: function () {
                return this.p_bInitialized;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "rotation", {
            //----- rotation
            get: function () {
                return this.p_rotation;
            },
            set: function (value) {
                if (this.p_rotation != value) {
                    this.p_rotation = value;
                    this.invalidate();
                    this.p_doPropertyChanged('rotation', value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlBase.prototype, "rotationZ", {
            get: function () {
                return this.p_rotation;
            },
            set: function (value) {
                this.rotation = value;
            },
            enumerable: true,
            configurable: true
        });

        ControlBase.prototype.setRotationZWithoutInvalidation = function (rotation) {
            this.p_rotation = rotation;
        };

        Object.defineProperty(ControlBase.prototype, "rotationX", {
            //----- rotationX
            get: function () {
                return this.p_rotationX;
            },
            set: function (value) {
                if (this.p_rotationX != value) {
                    this.p_rotationX = value;
                    this.invalidate();
                    this.p_doPropertyChanged('rotationX', value);
                }
            },
            enumerable: true,
            configurable: true
        });

        ControlBase.prototype.setRotationXWithoutInvalidation = function (rotation) {
            this.p_rotationX = rotation;
        };

        Object.defineProperty(ControlBase.prototype, "rotationY", {
            //----- rotationY
            get: function () {
                return this.p_rotationY;
            },
            set: function (value) {
                if (this.p_rotationY != value) {
                    this.p_rotationY = value;
                    this.invalidate();
                    this.p_doPropertyChanged('rotationY', value);
                }
            },
            enumerable: true,
            configurable: true
        });

        ControlBase.prototype.setRotationYWithoutInvalidation = function (rotation) {
            this.p_rotationY = rotation;
        };

        Object.defineProperty(ControlBase.prototype, "opacity", {
            //----- opacity
            get: function () {
                return this.p_opacity;
            },
            set: function (value) {
                if (this.p_opacity != value) {
                    this.p_opacity = value;

                    if (lux.g.isNotEmpty(this.p_parent))
                        this.p_opacityAbs = this.p_parent.opacityAbs * this.p_opacity;
                    else
                        this.p_opacityAbs = this.p_opacity;
                    this.invalidate();
                    this.controls.updateOpacityAll();
                    this.p_doPropertyChanged('opacity', value);
                }
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "opacityAbs", {
            //----- opacityAbs
            get: function () {
                return this.p_opacityAbs;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "isMouseLeftButtonDown", {
            //----- isMouseLeftButtonDown
            get: function () {
                return this.p_bMouseLeftButtonDown;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "isMouseRightButtonDown", {
            //----- isMouseRightButtonDown
            get: function () {
                return this.p_bMouseRightButtonDown;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "isPreviewMouseOver", {
            //----- isPreviewMouseOver
            get: function () {
                return this.p_bPreviewMouseOver;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "isMouseOver", {
            //----- isMouseOver
            get: function () {
                return this.p_bMouseOver;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "isAllowMouseEvents", {
            //----- Allow mouse events?
            set: function (value) {
                this.isAllowMouseButtonEvents = value;
                this.isAllowMouseMoveEvents = value;
                this.isAllowMouseWheelEvents = value;
                this.isAllowMouseDragEvents = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "isVisible", {
            //----- isVisible
            get: function () {
                return this.p_bVisible;
            },
            set: function (value) {
                if (this.p_bVisible != value) {
                    this.p_bVisible = value;
                    this.invalidate();
                    this.p_doPropertyChanged('isVisible', value);
                }
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "isClipChildControls", {
            //----- isClipChildControls
            get: function () {
                return this.p_bClipChildControls;
            },
            set: function (value) {
                this.p_bClipChildControls = value;
                this.invalidate();
                this.p_doPropertyChanged('isClipChildControls', value);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "isInvalidated", {
            //----- isInvalidated
            get: function () {
                return this.p_bInvalidated;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "isResized", {
            //----- isResized
            get: function () {
                return this.p_bResized;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "z", {
            //----- z
            get: function () {
                return this.p_z;
            },
            set: function (value) {
                try  {
                    this.p_z = value;
                    this.invalidate();
                    this.p_doPropertyChanged('z', value);
                } catch (e) {
                    console.log('Error setting Z: ' + e);
                }
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "x", {
            /*--------------------------------------------------------------------*
            START: bounds maintenance
            All values are relative to the parent control
            *--------------------------------------------------------------------*/
            //----- x
            get: function () {
                return this.p_x;
            },
            set: function (value) {
                this.setXWithoutInvalidation(value);
                this.autoLayout();
                this.invalidate();
                this.p_doPropertyChanged('x', value);
            },
            enumerable: true,
            configurable: true
        });

        ControlBase.prototype.setXWithoutInvalidation = function (x) {
            this.p_x = x;
            this.p_left = this.p_x - (this.p_widthTarget * this.p_ptAnchor.x);
            this.p_leftActual = this.p_x - (this.p_widthActual * this.p_ptAnchor.x);
            this.p_right = this.p_left + this.p_widthTarget;
        };

        Object.defineProperty(ControlBase.prototype, "left", {
            //----- left
            get: function () {
                return this.p_left;
            },
            set: function (value) {
                this.setLeftWithoutInvalidation(value);
                this.autoLayout();
                this.invalidate();
                this.p_doPropertyChanged('left', value);
            },
            enumerable: true,
            configurable: true
        });

        ControlBase.prototype.setLeftWithoutInvalidation = function (left) {
            this.p_left = left;
            this.p_x = this.p_left + (this.p_widthTarget * this.p_ptAnchor.x);
            this.p_leftActual = this.p_x - (this.p_widthActual * this.p_ptAnchor.x);
            this.p_right = this.p_left + this.p_widthTarget;
        };

        Object.defineProperty(ControlBase.prototype, "leftActual", {
            //----- leftActual
            /**
            * Applies the proper scaling to the left value for this Control, taking the scale of the control into account.
            * The left of the control, relative to it's parent, as it actually appears on the screen with scaling applied.
            */
            get: function () {
                return this.p_leftActual;
            },
            set: function (value) {
                this.setLeftActualWithoutInvalidation(value);
                this.autoLayout();
                this.invalidate();
                this.p_doPropertyChanged('leftActual', value);
            },
            enumerable: true,
            configurable: true
        });
        ControlBase.prototype.setLeftActualWithoutInvalidation = function (leftActual) {
            //----- Take the scaling of the control itself into account.
            this.setXWithoutInvalidation(leftActual + (this.p_widthActual * this.p_ptAnchor.x));
        };

        Object.defineProperty(ControlBase.prototype, "leftAbs", {
            //----- leftAbs
            /**
            * The absolute left of the control as it appears on the screen, relative the Root.
            */
            get: function () {
                var left = this.leftActual;
                var parent = this.p_parent;

                while (lux.g.isNotEmpty(parent)) {
                    left *= parent.scaleWidth;
                    left += parent.leftActual;
                    parent = parent.parent;
                }

                return left;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "y", {
            //----- y
            get: function () {
                return this.p_y;
            },
            set: function (value) {
                this.setYWithoutInvalidation(value);
                this.autoLayout();
                this.invalidate();
                this.p_doPropertyChanged('y', value);
            },
            enumerable: true,
            configurable: true
        });

        ControlBase.prototype.setYWithoutInvalidation = function (y) {
            this.p_y = y;
            this.p_top = this.p_y - (this.p_heightTarget * this.p_ptAnchor.y);
            this.p_topActual = this.p_y - (this.p_heightActual * this.p_ptAnchor.y);
            this.p_bottom = this.p_top + this.p_heightTarget;
        };

        Object.defineProperty(ControlBase.prototype, "top", {
            //----- top
            get: function () {
                return this.p_top;
            },
            set: function (value) {
                this.setTopWithoutInvalidation(value);
                this.autoLayout();
                this.invalidate();
                this.p_doPropertyChanged('top', value);
            },
            enumerable: true,
            configurable: true
        });

        ControlBase.prototype.setTopWithoutInvalidation = function (top) {
            this.p_top = top;
            this.p_y = top + (this.p_heightTarget * this.p_ptAnchor.y);
            this.p_topActual = this.p_y - (this.p_heightActual * this.p_ptAnchor.y);
            this.p_bottom = this.p_top + this.p_heightTarget;
        };

        Object.defineProperty(ControlBase.prototype, "topActual", {
            //----- topActual
            /**
            * Applies the proper scaling to the Y value for this Control, taking the absolute scale of the control into account.
            * The top of the control, relative to it's parent, as it actually appears on the screen with scaling applied.
            */
            get: function () {
                return this.p_topActual;
            },
            set: function (value) {
                this.setTopActualWithoutInvalidation(value);
                this.autoLayout();
                this.invalidate();
                this.p_doPropertyChanged('topActual', value);
            },
            enumerable: true,
            configurable: true
        });
        ControlBase.prototype.setTopActualWithoutInvalidation = function (topActual) {
            //----- Take the scaling of the control itself into account.
            this.setYWithoutInvalidation(topActual + (this.p_heightActual * this.p_ptAnchor.y));
        };

        Object.defineProperty(ControlBase.prototype, "topAbs", {
            //----- topAbs
            /**
            * The absolute top of the control as it appears on the screen, relative the Root.
            */
            get: function () {
                var top = this.topActual;
                var parent = this.p_parent;

                while (lux.g.isNotEmpty(parent)) {
                    top *= parent.scaleHeight;
                    top += parent.topActual;
                    parent = parent.parent;
                }

                return top;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "bottom", {
            //----- bottom
            get: function () {
                return this.p_bottom;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "right", {
            //----- right
            get: function () {
                return this.p_right;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "width", {
            //----- width
            //----- The ideal width for the Root ctl
            /**
            * Gets or sets the targeted width for the control, independent of scale.
            */
            get: function () {
                return this.p_widthTarget;
            },
            set: function (value) {
                try  {
                    this.setWidthWithoutInvalidation(value);

                    this.invalidate();
                    this.p_doPropertyChanged('width', value);
                    this.resized.dispatch(new lux.ControlEventArgs(this));
                } catch (e) {
                    console.log('Error setting Width: ' + e.toString());
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlBase.prototype, "isWidthSet", {
            get: function () {
                return this.p_bWidthSet;
            },
            enumerable: true,
            configurable: true
        });

        /**
        * Sets the width without invalidating the control.
        */
        ControlBase.prototype.setWidthWithoutInvalidation = function (value) {
            try  {
                if (this.isAspectRatioMaintained) {
                    var ratio = 0.0;
                    if (this.p_widthTarget != 0.0)
                        ratio = value / this.p_widthTarget;
                    this.p_setHeight(this.p_heightTarget * ratio);
                    this.p_setHeightActual(this.p_heightTarget * this.p_scaleHeight);
                }

                this.p_setWidth(value);
                this.p_setWidthActual(value * this.p_scaleWidth);
            } catch (e) {
                console.log('Error setting Width: ' + e);
            }
        };
        ControlBase.prototype.p_setWidth = function (value) {
            try  {
                if (value < 0.5)
                    value = 0.5;

                //---- first capture the old x position.
                var xTemp = this.p_left + (this.p_ptAnchor.x * this.p_widthTarget);

                //----- then change the width
                this.p_widthTarget = value;

                //----- now change the left based on the old x position.
                this.setLeftWithoutInvalidation(xTemp - (this.p_ptAnchor.x * this.p_widthTarget));

                this.p_bWidthSet = true;
            } catch (e) {
                console.log('Error setting Width: ' + e);
            }
        };

        Object.defineProperty(ControlBase.prototype, "widthActual", {
            //----- widthActual
            /**
            * Gets or sets the actual width of the control relative to it's parent, taking scale into account.
            */
            get: function () {
                return this.p_widthActual;
            },
            set: function (value) {
                try  {
                    if (this.isAspectRatioMaintained) {
                        var ratio = 0.0;
                        if (this.p_widthActual != 0)
                            ratio = value / this.p_widthActual;
                        this.p_setScaleHeight(this.p_scaleHeight * ratio);
                        this.p_setHeightActual(this.p_heightTarget * this.p_scaleHeight);
                    }

                    //----- set Width, if it hasn't been set already
                    if (!this.p_bWidthSet || !this.isScaleChildren)
                        this.p_setWidth(value);

                    this.p_setScaleWidth(value / this.p_widthTarget);
                    this.p_setWidthActual(value);

                    this.invalidate();
                    this.p_doPropertyChanged('widthActual', value);
                    this.resized.dispatch(new lux.ControlEventArgs(this));
                } catch (e) {
                    console.log('Error setting WidthActual: ' + e);
                }
            },
            enumerable: true,
            configurable: true
        });

        ControlBase.prototype.p_setWidthActual = function (value) {
            try  {
                if (value < 0.5)
                    value = 0.5;
                this.p_widthActual = value;
                this.p_leftActual = this.p_x - (this.p_widthActual * this.p_ptAnchor.x);
            } catch (e) {
                console.log('Error setting WidthActual: ' + e);
            }
        };

        Object.defineProperty(ControlBase.prototype, "height", {
            //----- height
            //----- The ideal height for the Root ctl
            /**
            * Gets or sets the targeted height for the control, independent of scale.
            */
            get: function () {
                return this.p_heightTarget;
            },
            set: function (value) {
                try  {
                    this.setHeightWithoutInvalidation(value);

                    this.invalidate();
                    this.p_doPropertyChanged('height', value);
                    this.resized.dispatch(new lux.ControlEventArgs(this));
                } catch (e) {
                    console.log('Error setting Height: ' + e);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlBase.prototype, "isHeightSet", {
            get: function () {
                return this.p_bHeightSet;
            },
            enumerable: true,
            configurable: true
        });

        /**
        * Sets the height without invalidating the control.
        */
        ControlBase.prototype.setHeightWithoutInvalidation = function (value) {
            try  {
                if (this.isAspectRatioMaintained) {
                    var ratio = 0.0;
                    if (this.p_heightTarget != 0.0)
                        ratio = value / this.p_heightTarget;
                    this.p_setWidth(this.p_widthTarget * ratio);
                    this.p_setWidthActual(this.p_widthTarget * this.p_scaleWidth);
                }

                this.p_setHeight(value);
                this.p_setHeightActual(value * this.p_scaleHeight);
            } catch (e) {
                console.log('Error setting Height: ' + e);
            }
        };
        ControlBase.prototype.p_setHeight = function (value) {
            try  {
                if (value < 0.5)
                    value = 0.5;

                //---- first capture the y position
                var yTemp = this.p_top + (this.p_ptAnchor.y * this.p_heightTarget);

                //----- then change the width
                this.p_heightTarget = value;

                //console.log('control.p_setHeight: ' + this.height.toString());
                //----- now change the top based on the y position
                this.setTopWithoutInvalidation(yTemp - (this.p_ptAnchor.y * this.p_heightTarget));

                this.p_bHeightSet = true;
            } catch (e) {
                console.log('Error setting Height: ' + e);
            }
        };

        Object.defineProperty(ControlBase.prototype, "heightActual", {
            //----- heightActual
            /**
            * Gets or sets the actual height of the control relative to it's parent, taking scale into account.
            */
            get: function () {
                return this.p_heightActual;
            },
            set: function (value) {
                try  {
                    if (this.isAspectRatioMaintained) {
                        var ratio = 0.0;
                        if (this.p_heightActual != 0.0)
                            ratio = value / this.p_heightActual;
                        this.p_setScaleWidth(this.p_scaleWidth * ratio);
                        this.p_setWidthActual(this.p_widthTarget * this.p_scaleWidth);
                    }

                    //----- set Height, if it hasn't been set already
                    if (!this.p_bHeightSet || !this.isScaleChildren)
                        this.p_setHeight(value);

                    this.p_setScaleHeight(value / this.p_heightTarget);
                    this.p_setHeightActual(value);

                    this.invalidate();
                    this.p_doPropertyChanged('heightActual', value);
                    this.resized.dispatch(new lux.ControlEventArgs(this));
                } catch (e) {
                    console.log('Error setting HeightActual: ' + e);
                }
            },
            enumerable: true,
            configurable: true
        });
        ControlBase.prototype.p_setHeightActual = function (value) {
            try  {
                if (value < 0.5)
                    value = 0.5;
                this.p_heightActual = value;
                this.p_topActual = this.p_y - (this.p_heightActual * this.p_ptAnchor.y);
            } catch (e) {
                console.log('Error setting HeightActual: ' + e);
            }
        };

        Object.defineProperty(ControlBase.prototype, "scale", {
            //----- scale
            get: function () {
                return this.p_scaleWidth;
            },
            set: function (value) {
                var bAspectRatioMaintained = this.isAspectRatioMaintained;
                this.isAspectRatioMaintained = true;
                this.scaleWidth = value;
                this.isAspectRatioMaintained = bAspectRatioMaintained;
                this.p_doPropertyChanged('scale', value);
                this.resized.dispatch(new lux.ControlEventArgs(this));
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "scaleWidth", {
            //----- scaleWidth
            get: function () {
                return this.p_scaleWidth;
            },
            set: function (value) {
                this.setScaleWidthWithoutInvalidation(value);

                this.invalidate();
                this.p_doPropertyChanged('scaleWidth', value);
                this.resized.dispatch(new lux.ControlEventArgs(this));
            },
            enumerable: true,
            configurable: true
        });

        ControlBase.prototype.p_setScaleWidth = function (value) {
            try  {
                this.p_scaleWidth = value;

                if (lux.g.isNotEmpty(this.p_parent))
                    this.p_scaleWidthAbs = this.p_parent.scaleWidthAbs * this.p_scaleWidth;
                else
                    this.p_scaleWidthAbs = this.p_scaleWidth;

                if (this.isScaleChildren)
                    this.controls.updateScaleWidthAbsAll();
            } catch (e) {
                console.log('Error setting Width: ' + e);
            }
        };

        Object.defineProperty(ControlBase.prototype, "scaleWidthAbs", {
            //----- scaleWidthAbs
            get: function () {
                return this.p_scaleWidthAbs;
            },
            enumerable: true,
            configurable: true
        });

        ControlBase.prototype.setScaleWidthWithoutInvalidation = function (value) {
            if (this.isAspectRatioMaintained) {
                var ratio = 0.0;
                if (this.p_scaleWidth != 0)
                    ratio = value / this.p_scaleWidth;
                this.p_setScaleHeight(this.p_scaleHeight * ratio);
                this.p_setHeightActual(this.p_heightTarget * this.p_scaleHeight);
            }

            this.p_setScaleWidth(value);
            this.p_setWidthActual(this.p_widthTarget * value);
        };

        Object.defineProperty(ControlBase.prototype, "scaleHeight", {
            //----- scaleHeight
            get: function () {
                return this.p_scaleHeight;
            },
            set: function (value) {
                this.setScaleHeightWithoutInvalidation(value);

                this.invalidate();
                this.p_doPropertyChanged('scaleHeight', value);
                this.resized.dispatch(new lux.ControlEventArgs(this));
            },
            enumerable: true,
            configurable: true
        });

        ControlBase.prototype.p_setScaleHeight = function (value) {
            try  {
                this.p_scaleHeight = value;
                if (lux.g.isNotEmpty(this.p_parent))
                    this.p_scaleHeightAbs = this.p_parent.scaleHeightAbs * this.p_scaleHeight;
                else
                    this.p_scaleHeightAbs = this.p_scaleHeight;

                if (this.isScaleChildren)
                    this.controls.updateScaleHeightAbsAll();
            } catch (e) {
                console.log('Error setting Width: ' + e);
            }
        };

        Object.defineProperty(ControlBase.prototype, "scaleHeightAbs", {
            //----- scaleHeightAbs
            get: function () {
                return this.p_scaleHeightAbs;
            },
            enumerable: true,
            configurable: true
        });

        ControlBase.prototype.setScaleHeightWithoutInvalidation = function (value) {
            if (this.isAspectRatioMaintained) {
                var ratio = 0.0;
                if (this.p_scaleHeight != 0)
                    ratio = value / this.p_scaleHeight;
                this.p_setScaleWidth(this.p_scaleWidth * ratio);
                this.p_setWidthActual(this.p_widthTarget * this.p_scaleWidth);
            }

            this.p_setScaleHeight(value);
            this.p_setHeightActual(this.p_heightTarget * value);
        };

        Object.defineProperty(ControlBase.prototype, "anchorPoint", {
            //----- anchorPoint
            /**
            * This is the point around which the Control rotates and from which it
            * grows or shrinks when scaled. It can be modified at runtime.
            * Each dimension of the point should be specified as a decimal, where (0.0, 0.0, 0,0) is equal
            * to the the upper-left corner of the control and (1.0, 1.0, 0.0) is equal to the bottom-right.
            */
            get: function () {
                return this.p_ptAnchor;
            },
            set: function (value) {
                this.p_ptAnchor.x = value.x;
                this.p_ptAnchor.y = value.y;
                this.p_ptAnchor.z = value.z;

                this.p_handleAnchorPointChanged(new lux.PropertyChangedEventArgs('data', this.p_ptAnchor));
            },
            enumerable: true,
            configurable: true
        });

        ControlBase.prototype.p_handleAnchorPointChanged = function (args) {
            this.setXWithoutInvalidation(this.p_leftActual + (this.p_widthActual * this.p_ptAnchor.x));
            this.setYWithoutInvalidation(this.p_topActual + (this.p_heightActual * this.p_ptAnchor.y));

            this.p_doPropertyChanged('anchorPoint', this.p_ptAnchor);

            this.invalidate();
        };

        /**
        * Applies scaling to a location along the X axis.
        * @param {number} [x] A location on the X axis, relative to the left of the Control.
        * @return {number} The transformed location on the X axis, relative to the left of the Control.
        */
        ControlBase.prototype.getXTransformed = function (x) {
            var scaleWidth = this.p_scaleWidthAbs;
            if (lux.g.isNotEmpty(this.p_root))
                scaleWidth = this.p_scaleWidth;
            var fTmp = x * scaleWidth;
            return (fTmp);
        };

        Object.defineProperty(ControlBase.prototype, "widthAbs", {
            /**
            * The output width of the Control as it actually appears on the screen in 'client' space.
            */
            get: function () {
                var widthAbs = this.width * this.scaleWidthAbs;
                return widthAbs;
            },
            enumerable: true,
            configurable: true
        });

        /**
        * Applies scaling to a location along the Y axis.
        * @param {number} [y] A location on the Y axis, relative to the left of the Control.
        * @return {number} The transformed location on the Y axis, relative to the top of the Control.
        */
        ControlBase.prototype.getYTransformed = function (y) {
            var scaleHeight = this.p_scaleHeightAbs;
            if (lux.g.isNotEmpty(this.p_root))
                scaleHeight = this.p_scaleHeight;
            var fTmp = y * scaleHeight;
            return (fTmp);
        };

        /**
        * Applies scaling to a location along the Z axis.
        * @param {number} [z] A location on the Z axis, relative to the left of the Control.
        * @return {number} The transformed location on the Z axis, relative to the Z of the Control.
        */
        ControlBase.prototype.getZTransformed = function (z) {
            var scaleWidth = this.p_scaleWidthAbs;
            if (lux.g.isNotEmpty(this.p_root))
                scaleWidth = this.p_scaleWidth;
            var fTmp = z * scaleWidth;
            return (fTmp);
        };

        Object.defineProperty(ControlBase.prototype, "heightAbs", {
            /**
            * The absolute height of the Control as it actually appears on the screen, in 'client' space.
            */
            get: function () {
                var heightAbs = this.height * this.scaleHeightAbs;
                return heightAbs;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "isAspectRatioMaintained", {
            //----- IsAspectRatioMaintained
            get: function () {
                return this.p_isAspectRatioMaintained;
            },
            set: function (value) {
                this.p_isAspectRatioMaintained = value;
                this.p_doPropertyChanged('isAspectRatioMaintained', value);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "isAutoLayout", {
            //===== START: AutoSize
            get: function () {
                return (this.isAutoPosition && this.isAutoSize);
            },
            set: function (value) {
                var prevValue = this.isAutoLayout;
                if (prevValue === value)
                    return;
                this.p_isAutoLeft = value;
                this.p_isAutoTop = value;
                this.p_isAutoWidth = value;
                this.p_isAutoHeight = value;
                if (value)
                    this.autoLayout();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlBase.prototype, "isAutoPosition", {
            get: function () {
                return (this.p_isAutoLeft && this.p_isAutoTop);
            },
            set: function (value) {
                var prevValue = this.isAutoPosition;
                if (prevValue === value)
                    return;
                this.p_isAutoLeft = value;
                this.p_isAutoTop = value;
                if (value)
                    this.autoLayout();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlBase.prototype, "isAutoLeft", {
            get: function () {
                return this.p_isAutoLeft;
            },
            set: function (value) {
                if (this.p_isAutoLeft === value)
                    return;
                this.p_isAutoLeft = value;
                if (value)
                    this.autoLayout();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlBase.prototype, "isAutoTop", {
            get: function () {
                return this.p_isAutoTop;
            },
            set: function (value) {
                if (this.p_isAutoTop === value)
                    return;
                this.p_isAutoTop = value;
                if (value)
                    this.autoLayout();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlBase.prototype, "isAutoSize", {
            get: function () {
                return (this.p_isAutoWidth && this.p_isAutoHeight);
            },
            set: function (value) {
                var prevValue = this.isAutoSize;
                if (prevValue === value)
                    return;
                this.p_isAutoWidth = value;
                this.p_isAutoHeight = value;
                if (value)
                    this.autoLayout();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlBase.prototype, "isAutoWidth", {
            get: function () {
                return this.p_isAutoWidth;
            },
            set: function (value) {
                if (this.p_isAutoWidth === value)
                    return;
                this.p_isAutoWidth = value;
                if (value)
                    this.autoLayout();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlBase.prototype, "isAutoHeight", {
            get: function () {
                return this.p_isAutoHeight;
            },
            set: function (value) {
                if (this.p_isAutoHeight === value)
                    return;
                this.p_isAutoHeight = value;
                if (value)
                    this.autoLayout();
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ControlBase.prototype, "autoRatios", {
            get: function () {
                return this.p_autoRatios;
            },
            enumerable: true,
            configurable: true
        });

        ControlBase.prototype.setAutoRatios = function (left, top, width, height) {
            this.p_autoRatios = new lux.Rectangle(left, top, width, height);
        };
        ControlBase.prototype.p_onAutoLayout = function (args) {
            this.autoLayout();
        };
        ControlBase.prototype.autoLayout = function () {
            /*if (g.isNotEmpty(this.p_parent) && g.isNotEmpty(this.p_autoRatios))
            {
            var isInvalidate: boolean = false;
            
            if (this.p_isAutoLeft)
            {
            var left: number = this.p_parent.width * this.p_autoRatios.left;
            this.setLeftWithoutInvalidation(left);
            isInvalidate = true;
            }
            
            if (this.p_isAutoTop)
            {
            var top: number = this.p_parent.height * this.p_autoRatios.top;
            this.setTopWithoutInvalidation(top);
            isInvalidate = true;
            }
            
            if (this.p_isAutoWidth)
            {
            var width: number = this.p_parent.width * this.p_autoRatios.width;
            if (!this.p_isAutoLeft) {  width -= this.p_left; }
            this.setWidthWithoutInvalidation(width);
            isInvalidate = true;
            }
            
            if (this.p_isAutoHeight)
            {
            var height: number = this.p_parent.height * this.p_autoRatios.height;
            if (!this.p_isAutoTop) { height -= this.p_top; }
            this.setHeightWithoutInvalidation(height);
            isInvalidate = true;
            }
            
            if (isInvalidate) this.invalidate();
            }*/
        };

        Object.defineProperty(ControlBase.prototype, "isLoaded", {
            /*====================================================================*
            START: Events
            *====================================================================*/
            //----- loaded
            get: function () {
                return this.p_bLoaded;
            },
            enumerable: true,
            configurable: true
        });

        //----- Allow the control surface to alert us when it has loaded the native content.
        ControlBase.prototype.doLoaded = function () {
            this.p_bLoaded = true;
            this.invalidate();
            this.loaded.dispatch(new lux.ControlEventArgs(this));
        };

        ControlBase.prototype.p_doPropertyChanged = function (sPropertyName, value) {
            this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs(sPropertyName, value));
        };

        ControlBase.prototype.p_onInitialize = function (args) {
        };
        ControlBase.prototype.p_control_onInitialize = function (args) {
            try  {
                this.p_onInitialize(args);
                this.p_bInitialized = true;
            } catch (e) {
                console.log('Error initializing control: ' + e);
            }
        };

        //----- Fire event from an external class.
        ControlBase.prototype.doInitialized = function () {
            this.initialized.dispatch(new lux.ControlEventArgs(this));
        };

        //----- Style property changed
        ControlBase.prototype.onStylePropertyChanged = function (args) {
            this.p_doPropertyChanged('style.' + args.propertyName, args.value);
            this.invalidate();
        };

        ControlBase.prototype.p_onResized = function (args) {
        };
        ControlBase.prototype.p_control_onResized = function (args) {
            try  {
                this.p_bResized = true;
            } catch (e) {
                console.log('The Control must be added to Root before properties can be modified: ' + e);
            }

            this.p_onResized(args);
        };

        /// Force a resize event.
        ControlBase.prototype.doResized = function (args) {
            this.resized.dispatch(args);
        };

        /**
        * Transforms a point from the parent control's coordinate
        * system into the local coordinate system of this control.
        * @param {Point} [pt] A point relative to the upper-left of the parent Control.
        * @return {Point} The transformed point relative to the upper-left corner of this Control,
        * with scaling, rotation and taken into account.
        */
        ControlBase.prototype.parentToLocal = function (pt) {
            var ptTmp = new lux.Point(pt.x - this.x, pt.y - this.y, 0);

            //----- Rotation and scaling
            if (this.p_rotation != 0 || this.p_scaleWidth != 1.0 || this.p_scaleHeight != 1.0) {
                var csTmp = new lux.CoordSys(0, 0, 0);
                var ptCS = csTmp.getPointFromScreenPoint(ptTmp);

                //----- Account for rotation by rotating the point around the anchor point in the opposite direction
                //----- of the rotation applied to the control.
                if (this.p_rotation != 0)
                    ptCS.rotateZ(this.rotation);

                //----- Account for scaling by applying scaling to the point in reverse of that applied to the control.
                if (this.p_scaleWidth != 1.0 || this.p_scaleHeight != 1.0) {
                    var scaleWidth = this.p_scaleWidth;
                    var scaleHeight = this.p_scaleHeight;

                    //----- Don't divide by zero.
                    if (scaleWidth == 0)
                        scaleWidth = 0.0001;
                    if (scaleHeight == 0)
                        scaleHeight = 0.0001;

                    ptCS.x /= scaleWidth;
                    ptCS.y /= scaleHeight;
                }

                ptTmp = ptCS.out();
            }

            ptTmp.x += this.width * this.anchorPoint.x;
            ptTmp.y += this.height * this.anchorPoint.y;

            return ptTmp;
        };

        /**
        * Transforms a point from the local coordinate system of this control
        * into the parent control's coordinate system.
        * @param {Point} [pt] A point relative to the upper-left of this Control.
        * @return {Point} The transformed point relative to the upper-left corner
        * of the parent Control, with scaling and rotation taken into account.
        */
        ControlBase.prototype.localToParent = function (pt) {
            if (lux.g.isEmpty(this.p_parent))
                return pt;

            var ptTmp = pt;

            //----- Rotation and scaling
            if (this.p_rotation != 0 || this.p_scaleWidth != 1.0 || this.p_scaleHeight != 1.0) {
                //----- Set up a local coordinate system at the target size of this control,
                //----- with the anchorpoint of the control as the (0,0) point.
                var csTmp = lux.CoordSys.fromPoint(new lux.Point(this.width * this.anchorPoint.x, this.height * this.anchorPoint.y, this.anchorPoint.z));
                var ptCS = csTmp.getPointFromScreenPoint(ptTmp);

                //----- Account for rotation by rotating the point around the anchor point in the direction
                //----- of the rotation applied to the control.
                if (this.p_rotation != 0)
                    ptCS.rotateZ(-this.rotation);
                if (this.p_rotationX != 0)
                    ptCS.rotateX(-this.rotationX);
                if (this.p_rotationY != 0)
                    ptCS.rotateY(-this.rotationY);

                //----- Account for scaling by applying scaling to the point, the same as that applied to the control.
                if (this.p_scaleWidth != 1.0 || this.p_scaleHeight != 1.0) {
                    var scaleWidth = this.p_scaleWidth;
                    var scaleHeight = this.p_scaleHeight;

                    //----- Don't divide by zero.
                    if (scaleWidth == 0)
                        scaleWidth = 0.0001;
                    if (scaleHeight == 0)
                        scaleHeight = 0.0001;

                    ptCS.x *= scaleWidth;
                    ptCS.y *= scaleHeight;
                    ptCS.z *= scaleWidth;
                }

                ptTmp = ptCS.out();
            }

            ptTmp = new lux.Point(ptTmp.x + this.leftActual, ptTmp.y + this.topActual, ptTmp.z + this.z);

            return ptTmp;
        };

        /*
        * Transforms a point from the local coordinate system of this control
        * into the coordinate system of the Root.
        * @param {Point} [pt] A point relative to the upper-left of this Control.
        * @return {Point} The transformed point relative to the upper-left corner
        * of the parent Root, with scaling and rotation taken into account.
        */
        ControlBase.prototype.localToRoot = function (pt) {
            var ptTmp = pt;

            var ctl = this;

            while (lux.g.isNotEmpty(ctl.parent)) {
                ptTmp = ctl.localToParent(ptTmp);
                ctl = ctl.parent;
            }

            return ptTmp;
        };

        /**
        * Move this control to the top of the z-order stack, so it renders on top of other controls in its parent control.
        */
        ControlBase.prototype.moveToTop = function () {
            if (lux.g.isNotEmpty(this.p_parent)) {
                var parent = this.p_parent;
                if (parent.controls.remove(this))
                    parent.controls.add(this);
                return true;
            }

            return false;
        };

        /**
        * Checks to see whether any of the children of this control can receive a mouse event at the specified point.
        * @param {Point} [ptLocal] A point relative to this control's upper-left corner.
        * @return {Control} The control that received the hit, or null if no suitable controls were found.
        */
        ControlBase.prototype.checkMouseEventInChildren = function (mouseEventType, ptRoot, ptLocal) {
            var ctl = null;

            for (var i = this.controls.length - 1; i >= 0; i--) {
                var ctlTmp = this.controls.item(i);

                if (!ctlTmp.isVisible || ctlTmp.opacityAbs <= ctlTmp.opacityMin)
                    continue;

                var ptCtlTmpLocal = ctlTmp.parentToLocal(ptLocal);

                var bPointInControl = ctlTmp.hitTest(ptRoot, ptCtlTmpLocal);

                if (!ctlTmp.isClipChildControls || bPointInControl) {
                    if ((mouseEventType === 0 /* BUTTON */ && ctlTmp.isAllowMouseButtonEvents && bPointInControl) || (mouseEventType === 1 /* MOVE */ && ctlTmp.isAllowMouseMoveEvents && bPointInControl) || (mouseEventType === 2 /* WHEEL */ && ctlTmp.isAllowMouseWheelEvents && bPointInControl) || (mouseEventType === 3 /* DRAG */ && ctlTmp.isAllowMouseDragEvents && bPointInControl)) {
                        //----- The point was in the control and the control allows mouse events, so it gets the hit.
                        ctl = ctlTmp;
                        break;
                    } else if (ctlTmp.isPropagateMouseEvents) {
                        //----- The point wasn't in the control, or the control doesn't allow mouse events,
                        //----- but maybe one of its children does.
                        var ctlTmp2 = ctlTmp.controls.findMouseEnabledControlAtPoint(mouseEventType, ptRoot, ptCtlTmpLocal);
                        if (lux.g.isNotEmpty(ctlTmp2)) {
                            //----- Even though this control doesn't allow mouse events,
                            //----- one of its child controls got the hit.
                            ctl = ctlTmp;
                            break;
                        } else
                            continue;
                    }
                }
            }

            return ctl;
        };

        ControlBase.prototype.onMouseMove = function (e) {
        };
        ControlBase.prototype.onPreviewMouseMove = function (e) {
        };

        /**
        * Checks to see whether a mouse event occured in this control, or one of its children.
        * @param {MouseEventArgs} [e] Contains X and Y values for the mouse event in local coordinates,
        * relative to the upper-left of this control.
        */
        ControlBase.prototype.checkMouseMove = function (e) {
            if (!this.isVisible || this.opacityAbs <= this.opacityMin)
                return;
            if (e.isHandled)
                return;

            if (this.isClipChildControls && !this.hitTest(e.positionRoot, e.positionLocal))
                return;

            e.sender = this;
            this.doPreviewMouseMove(e);
            if (e.isHandled)
                return;

            var bHandled = true;

            //----- PERF: This can be a drag on performance if not managed well.
            var ctl = this.checkMouseEventInChildren(1 /* MOVE */, e.positionRoot, e.positionLocal);

            if (lux.g.isNotEmpty(ctl)) {
                var ptCtlLocal = ctl.parentToLocal(e.positionLocal);
                var eNew = new lux.MouseEventArgs(ctl, e.buttons, e.clickCount, e.positionRoot, ptCtlLocal, e.wheelDelta);
                ctl.checkMouseMove(eNew);

                bHandled = eNew.isHandled;
                e.isHandled = bHandled;
            } else {
                bHandled = false;
            }

            if (!bHandled && this.isAllowMouseButtonEvents) {
                e.sender = this;
                this.doMouseMove(e);
            }
        };

        //----- Fire event from an external class.
        ControlBase.prototype.doPreviewMouseMove = function (e) {
            this.p_root.controlsPreviewMouseMove.add(this);

            if (!this.p_bPreviewMouseOver && !this.p_root.controlsPreviewMouseMoveLast.contains(this)) {
                this.doPreviewMouseEnter(e);
            }

            e.sender = this;
            this.previewMouseMove.dispatch(e);
            ;
        };
        ControlBase.prototype.doMouseMove = function (e) {
            e.isHandled = false;

            //----- Make sure we don't register a click on mouseup, since the mouse has been moved.
            if (this.p_bMouseLeftButtonDown) {
                if (Math.abs(this.p_ptMouseDown.x - e.positionRoot.x) > this.p_clickThreshold || Math.abs(this.p_ptMouseDown.y - e.positionRoot.y) > this.p_clickThreshold) {
                    this.p_bRegisterClick = false;
                }
            }

            this.p_root.controlsMouseMove.add(this);

            if (!this.p_bMouseOver && !this.p_root.controlsMouseMoveLast.contains(this)) {
                this.doMouseEnter(e);
                if (e.isHandled)
                    return;
            }

            e.sender = this;
            this.mouseMove.dispatch(e);
            this.invalidate();
        };

        ControlBase.prototype.onPreviewMouseEnter = function (e) {
        };

        //----- Fire event from an external class.
        ControlBase.prototype.doPreviewMouseEnter = function (e) {
            this.p_bPreviewMouseOver = true;
            this.previewMouseEnter.dispatch(e);
        };

        ControlBase.prototype.onPreviewMouseLeave = function (e) {
        };

        //----- Fire event from an external class.
        ControlBase.prototype.doPreviewMouseLeave = function (e) {
            this.p_bPreviewMouseOver = false;
            this.previewMouseLeave.dispatch(e);
        };

        ControlBase.prototype.onMouseEnter = function (e) {
        };

        //----- Fire event from an external class.
        ControlBase.prototype.doMouseEnter = function (e) {
            e.isHandled = false;
            this.p_bMouseOver = true;
            this.mouseEnter.dispatch(e);
            this.invalidate(); // Invalidate, in case styles need to be updated.
        };

        ControlBase.prototype.onMouseLeave = function (e) {
        };

        //----- Fire event from an external class.
        ControlBase.prototype.doMouseLeave = function (e) {
            e.isHandled = false;
            this.p_bMouseOver = false;
            this.mouseLeave.dispatch(e);
            this.invalidate(); // Invalidate, in case styles need to be updated.
        };

        ControlBase.prototype.cancelClick = function () {
            this.p_bRegisterClick = false;
        };

        ControlBase.prototype.onMouseLeftButtonDown = function (e) {
        };
        ControlBase.prototype.onPreviewMouseLeftButtonDown = function (e) {
        };

        /**
        * Checks to see whether a left mousedown event occured in this control, or one of its children.
        * @param {MouseEventArgs} [e] Contains X and Y values for the mouse event in local coordinates,
        * relative to the upper-left of this control.
        */
        ControlBase.prototype.checkMouseLeftButtonDown = function (e) {
            if (!this.isVisible || this.opacityAbs <= this.opacityMin)
                return;
            if (e.isHandled)
                return;

            if (this.isClipChildControls && !this.hitTest(e.positionRoot, e.positionLocal))
                return;

            //----- Preview the event before passing it along to child controls.
            e.sender = this;
            this.previewMouseLeftButtonDown.dispatch(e);
            if (e.isHandled)
                return;

            var bHandled = true;

            var ctl = this.checkMouseEventInChildren(0 /* BUTTON */, e.positionRoot, e.positionLocal);

            if (lux.g.isNotEmpty(ctl)) {
                var ptCtlLocal = ctl.parentToLocal(e.positionLocal);
                var eNew = new lux.MouseEventArgs(ctl, e.buttons, e.clickCount, e.positionRoot, ptCtlLocal, e.wheelDelta);
                ctl.checkMouseLeftButtonDown(eNew);

                bHandled = eNew.isHandled;
                e.isHandled = bHandled;
            } else {
                bHandled = false;
            }

            if (!bHandled && this.isAllowMouseButtonEvents) {
                e.sender = this;
                this.doMouseLeftButtonDown(e);
            }
        };

        //----- Fire event from an external class.
        ControlBase.prototype.doMouseLeftButtonDown = function (e) {
            e.isHandled = false;
            this.p_ptMouseDown = e.positionRoot;
            this.p_bMouseLeftButtonDown = true;
            this.mouseLeftButtonDownArgs = e;
            if (lux.g.isNotEmpty(this.p_root))
                this.p_root.controlMouseLeftButtonDown = this;
            this.mouseLeftButtonDown.dispatch(e);
            ;
            this.p_bRegisterClick = true;

            this.invalidate(); // Invalidate, in case styles need to be updated.
        };

        ControlBase.prototype.onMouseLeftButtonUp = function (e) {
        };
        ControlBase.prototype.onPreviewMouseLeftButtonUp = function (e) {
        };

        /**
        * Checks to see whether a left mouseup event occured in this control, or one of its children.
        * @param {MouseEventArgs} [e] Contains X and Y values for the mouse event in local coordinates,
        * relative to the upper-left of this control.
        */
        ControlBase.prototype.checkMouseLeftButtonUp = function (e) {
            if (!this.isVisible || this.opacityAbs <= this.opacityMin)
                return;
            if (e.isHandled)
                return;

            if (this.isClipChildControls && !this.hitTest(e.positionRoot, e.positionLocal))
                return;

            //----- Preview the event before passing it along to child controls.
            e.sender = this;
            this.previewMouseLeftButtonUp.dispatch(e);
            if (e.isHandled)
                return;

            var bHandled = true;

            var ctl = this.checkMouseEventInChildren(0 /* BUTTON */, e.positionRoot, e.positionLocal);

            if (lux.g.isNotEmpty(ctl)) {
                var ptCtlLocal = ctl.parentToLocal(e.positionLocal);
                var eNew = new lux.MouseEventArgs(ctl, e.buttons, e.clickCount, e.positionRoot, ptCtlLocal, e.wheelDelta);
                ctl.checkMouseLeftButtonUp(eNew);

                bHandled = eNew.isHandled;
                e.isHandled = bHandled;
            } else {
                bHandled = false;
            }

            if (!bHandled && this.isAllowMouseButtonEvents) {
                e.sender = this;
                this.doMouseLeftButtonUp(e);
            }
        };

        //----- Fire event from an external class.
        ControlBase.prototype.doMouseLeftButtonUp = function (e) {
            e.isHandled = false;

            //----- Register a mouseup before changing p_luxRoot.ControlMouseLeftButtonDown,
            //----- so OnMouseLeftButtonUp can check p_luxRoot.ControlMouseLeftButtonDown.
            this.mouseLeftButtonUp.dispatch(e);

            if (this.p_bMouseLeftButtonDown && this.p_bRegisterClick) {
                //----- _bRegisterClick will be false if the mouse moved since the original mousedown.
                this.mouseClick.dispatch(e); // Register a click, as well as a mouseup.
            }
            this.p_bRegisterClick = false;

            if (lux.g.isNotEmpty(this.p_root) && lux.g.isNotEmpty(this.p_root.controlMouseLeftButtonDown)) {
                this.p_root.controlMouseLeftButtonDown.p_bMouseLeftButtonDown = false;
            }

            if (lux.g.isNotEmpty(this.p_root))
                this.p_root.controlMouseLeftButtonDown = null;

            this.p_bMouseLeftButtonDown = false;

            this.invalidate(); // Invalidate, in case styles need to be updated.
        };

        ControlBase.prototype.onMouseClick = function (e) {
        };

        //----- Fire event from an external class.
        ControlBase.prototype.doMouseClick = function (e) {
            e.isHandled = false;
            this.mouseClick.dispatch(e);
            ;
            this.invalidate(); // Invalidate, in case styles need to be updated.
        };

        ControlBase.prototype.onMouseRightButtonDown = function (e) {
        };
        ControlBase.prototype.onPreviewMouseRightButtonDown = function (e) {
        };

        /**
        * Checks to see whether a right mousedown event occured in this control, or one of its children.
        * @param {MouseEventArgs} [e] Contains X and Y values for the mouse event in local coordinates,
        * relative to the upper-left of this control.
        */
        ControlBase.prototype.checkMouseRightButtonDown = function (e) {
            if (!this.isVisible || this.opacityAbs <= this.opacityMin)
                return;
            if (e.isHandled)
                return;

            if (this.isClipChildControls && !this.hitTest(e.positionRoot, e.positionLocal))
                return;

            //----- Preview the event before passing it along to child controls.
            e.sender = this;
            this.previewMouseRightButtonDown.dispatch(e);
            if (e.isHandled)
                return;

            var bHandled = true;

            var ctl = this.checkMouseEventInChildren(0 /* BUTTON */, e.positionRoot, e.positionLocal);

            if (lux.g.isNotEmpty(ctl)) {
                var ptCtlLocal = ctl.parentToLocal(e.positionLocal);
                var eNew = new lux.MouseEventArgs(ctl, e.buttons, e.clickCount, e.positionRoot, ptCtlLocal, e.wheelDelta);
                ctl.checkMouseRightButtonDown(eNew);

                bHandled = eNew.isHandled;
                e.isHandled = bHandled;
            } else {
                bHandled = false;
            }

            if (!bHandled && this.isAllowMouseButtonEvents) {
                e.sender = this;
                this.doMouseRightButtonDown(e);
            }
        };

        //----- Fire event from an external class.
        ControlBase.prototype.doMouseRightButtonDown = function (e) {
            e.isHandled = false;
            this.p_bMouseRightButtonDown = true;
            this.mouseRightButtonDownArgs = e;
            this.p_root.controlMouseRightButtonDown = this;
            this.mouseRightButtonDown.dispatch(e);
            ;

            this.invalidate(); // Invalidate, in case styles need to be updated.
        };

        ControlBase.prototype.onMouseRightButtonUp = function (e) {
        };
        ControlBase.prototype.onPreviewMouseRightButtonUp = function (e) {
        };

        /**
        * Checks to see whether a right mouseup event occured in this control, or one of its children.
        * @param {MouseEventArgs} [e] Contains X and Y values for the mouse event in local coordinates,
        * relative to the upper-left of this control.
        */
        ControlBase.prototype.checkMouseRightButtonUp = function (e) {
            if (!this.isVisible || this.opacityAbs <= this.opacityMin)
                return;
            if (e.isHandled)
                return;

            if (this.isClipChildControls && !this.hitTest(e.positionRoot, e.positionLocal))
                return;

            //----- Preview the event before passing it along to child controls.
            e.sender = this;
            this.previewMouseRightButtonUp.dispatch(e);
            ;
            if (e.isHandled)
                return;

            var bHandled = true;

            var ctl = this.checkMouseEventInChildren(0 /* BUTTON */, e.positionRoot, e.positionLocal);

            if (lux.g.isNotEmpty(ctl)) {
                var ptCtlLocal = ctl.parentToLocal(e.positionLocal);
                var eNew = new lux.MouseEventArgs(ctl, e.buttons, e.clickCount, e.positionRoot, ptCtlLocal, e.wheelDelta);
                ctl.checkMouseRightButtonUp(eNew);

                bHandled = eNew.isHandled;
                e.isHandled = bHandled;
            } else {
                bHandled = false;
            }

            if (!bHandled && this.isAllowMouseButtonEvents) {
                e.sender = this;
                this.doMouseRightButtonUp(e);
            }
        };

        //----- Fire event from an external class.
        ControlBase.prototype.doMouseRightButtonUp = function (e) {
            e.isHandled = false;

            //----- Register a mouseup before changing p_luxRoot.ControlMouseLeftButtonDown,
            //----- so OnMouseLeftButtonUp can check p_luxRoot.ControlMouseLeftButtonDown.
            this.mouseRightButtonUp.dispatch(e);
            ;

            if (lux.g.isNotEmpty(this.p_root.controlMouseRightButtonDown)) {
                this.p_root.controlMouseRightButtonDown.p_bMouseRightButtonDown = false;
            }

            this.p_root.controlMouseRightButtonDown = null;

            this.p_bMouseRightButtonDown = false;

            this.invalidate(); // Invalidate, in case styles need to be updated.
        };

        ControlBase.prototype.onMouseWheel = function (e) {
        };
        ControlBase.prototype.onPreviewMouseWheel = function (e) {
        };

        /**
        * Checks to see whether a mouse wheel event occured in this control, or one of its children.
        * @param {MouseEventArgs} [e] Contains X and Y values for the mouse event in local coordinates,
        * relative to the upper-left of this control.
        */
        ControlBase.prototype.checkMouseWheel = function (e) {
            if (!this.isVisible || this.opacityAbs <= this.opacityMin)
                return;
            if (e.isHandled)
                return;

            if (this.isClipChildControls && !this.hitTest(e.positionRoot, e.positionLocal))
                return;

            //----- Preview the event before passing it along to child controls.
            e.sender = this;
            this.previewMouseWheel.dispatch(e);
            ;
            if (e.isHandled)
                return;

            var bHandled = true;

            var ctl = this.checkMouseEventInChildren(2 /* WHEEL */, e.positionRoot, e.positionLocal);

            if (lux.g.isNotEmpty(ctl)) {
                var ptCtlLocal = ctl.parentToLocal(e.positionLocal);
                var eNew = new lux.MouseEventArgs(ctl, e.buttons, e.clickCount, e.positionRoot, ptCtlLocal, e.wheelDelta);
                ctl.checkMouseWheel(eNew);

                bHandled = eNew.isHandled;
                e.isHandled = bHandled;
            } else {
                bHandled = false;
            }

            if (!bHandled && this.isAllowMouseButtonEvents) {
                e.sender = this;
                this.doMouseWheel(e);
            }
        };

        //----- Fire event from an external class.
        ControlBase.prototype.doMouseWheel = function (e) {
            e.isHandled = false;
            this.mouseWheel.dispatch(e);
            ;
            this.invalidate(); // Invalidate, in case styles need to be updated.
        };

        ControlBase.prototype.onDragOver = function (e) {
        };
        ControlBase.prototype.onPreviewDragOver = function (e) {
        };

        /**
        * Checks to see whether a dragover mouse event occured in this control, or one of its children.
        * @param {MouseEventArgs} [e] Contains X and Y values for the mouse event in local coordinates,
        * relative to the upper-left of this control.
        */
        ControlBase.prototype.checkDragOver = function (e) {
            if (!this.isVisible || this.opacityAbs <= this.opacityMin)
                return;
            if (e.isHandled)
                return;

            if (this.isClipChildControls && !this.hitTest(e.positionRoot, e.positionLocal))
                return;

            //----- Preview the event before passing it along to child controls.
            e.sender = this;
            this.previewDragOver.dispatch(e);
            ;
            if (e.isHandled)
                return;

            var bHandled = true;

            var ctl = this.checkMouseEventInChildren(3 /* DRAG */, e.positionRoot, e.positionLocal);

            if (lux.g.isNotEmpty(ctl)) {
                var ptCtlLocal = ctl.parentToLocal(e.positionLocal);
                var eNew = new lux.MouseEventArgs(ctl, e.buttons, e.clickCount, e.positionRoot, ptCtlLocal, e.wheelDelta);
                eNew.dragAttributes = e.dragAttributes;
                ctl.checkDragOver(eNew);

                bHandled = eNew.isHandled;
                e.isHandled = bHandled;
            } else {
                bHandled = false;
            }

            if (!bHandled && this.isAllowMouseButtonEvents) {
                e.sender = this;
                this.doDragOver(e);
            }
        };

        //----- Fire event from an external class.
        ControlBase.prototype.doDragOver = function (e) {
            e.isHandled = false;
            this.dragOver.dispatch(e);
            ;
            this.invalidate(); // Invalidate, in case styles need to be updated.
        };

        ControlBase.prototype.onDragDrop = function (e) {
        };
        ControlBase.prototype.onPreviewDragDrop = function (e) {
        };

        /**
        * Checks to see whether a dragdrop mouse event occured in this control, or one of its children.
        * @param {MouseEventArgs} [e] Contains X and Y values for the mouse event in local coordinates,
        * relative to the upper-left of this control.
        */
        ControlBase.prototype.checkDragDrop = function (e) {
            if (!this.isVisible || this.opacityAbs <= this.opacityMin)
                return;
            if (e.isHandled)
                return;

            if (this.isClipChildControls && !this.hitTest(e.positionRoot, e.positionLocal))
                return;

            //----- Preview the event before passing it along to child controls.
            e.sender = this;
            this.previewDragDrop.dispatch(e);
            ;
            if (e.isHandled)
                return;

            var bHandled = true;

            var ctl = this.checkMouseEventInChildren(3 /* DRAG */, e.positionRoot, e.positionLocal);

            if (lux.g.isNotEmpty(ctl)) {
                var ptCtlLocal = ctl.parentToLocal(e.positionLocal);
                var eNew = new lux.MouseEventArgs(ctl, e.buttons, e.clickCount, e.positionRoot, ptCtlLocal, e.wheelDelta);
                eNew.dragAttributes = e.dragAttributes;
                ctl.checkDragDrop(eNew);

                bHandled = eNew.isHandled;
                e.isHandled = bHandled;
            } else {
                bHandled = false;
            }

            if (!bHandled && this.isAllowMouseButtonEvents) {
                e.sender = this;
                this.doDragDrop(e);
            }
        };

        //----- Fire event from an external class.
        ControlBase.prototype.doDragDrop = function (e) {
            e.isHandled = false;
            this.dragDrop.dispatch(e);
            ;
            this.invalidate(); // Invalidate, in case styles need to be updated.
        };

        /*====================================================================*
        START: Methods
        *====================================================================*/
        ControlBase.prototype.invalidate = function () {
            if (lux.g.isEmpty(this.p_root))
                return;

            if (this.isInitialized) {
                this.p_bInvalidated = true;

                //----- We need to render whenever the control is invalidated,
                if (lux.g.isNotEmpty(this.p_root.renderer) && !this.p_root.renderer.isRenderedOnTimer)
                    this.render();
            }
        };

        ControlBase.prototype.invalidateAll = function () {
            if (!this.p_bInvalidated) {
                this.p_bInvalidated = true;
                this.controls.invalidateAll();
            }
        };

        /*--------------------------------------------------------------------*
        START: Methods for updating a Control chain that has been added to the ControlSystem
        *--------------------------------------------------------------------*/
        ControlBase.prototype.setScaleWidthAbs = function () {
            var fScaleTmp = this.scaleWidth;
            var ctl = this;

            while (lux.g.isNotEmpty(ctl.parent)) {
                ctl = ctl.parent;
                if (ctl.isScaleChildren)
                    fScaleTmp *= ctl.scaleWidth;
            }

            this.p_scaleWidthAbs = fScaleTmp;
        };

        ControlBase.prototype.setScaleHeightAbs = function () {
            var fScaleTmp = this.scaleHeight;
            var ctl = this;

            while (lux.g.isNotEmpty(ctl.parent)) {
                ctl = ctl.parent;
                if (ctl.isScaleChildren)
                    fScaleTmp *= ctl.scaleHeight;
            }

            this.p_scaleHeightAbs = fScaleTmp;
        };

        Object.defineProperty(ControlBase.prototype, "isAttachedToControlSystem", {
            get: function () {
                return this._bAttachedToControlSystem;
            },
            enumerable: true,
            configurable: true
        });

        ControlBase.prototype.p_onAttachedToControlSystem = function () {
        };

        ControlBase.prototype._control_onAttachedToControlSystem = function () {
            try  {
                if (lux.g.isEmpty(this.p_parent))
                    return;

                this.p_root = this.p_parent.root;
                this.p_opacityAbs = (this.p_parent.opacityAbs * this.opacity);

                //this.p_parent.resized.listen(this.p_onAutoLayout, this);
                this.autoLayout();

                this.setScaleWidthAbs();
                this.setScaleHeightAbs();
                if (this.isScaleChildren) {
                    this.controls.updateScaleWidthAbsAll();
                    this.controls.updateScaleHeightAbsAll();
                }

                this.p_addSurfaceToControlSystem();

                this.p_colControls.p_onAttachedToControlSystemAll();

                this._bAttachedToControlSystem = true;
                this.attachedToControlSystem.dispatch(new lux.ControlEventArgs(this));
                this.p_onAttachedToControlSystem();
            } catch (e) {
                console.log('Exception in Control.p_control_onAttachedToControlSystem: ' + e);
            }
        };
        ControlBase.prototype.p_addSurfaceToControlSystem = function () {
            if (lux.g.isEmpty(this.p_surface))
                this.requestSurface();
            if (lux.g.isEmpty(this.p_parent) || lux.g.isEmpty(this.p_parent.surface))
                return;
            this.p_parent.surface.addChild(this.p_surface);
        };

        ControlBase.prototype.p_onRemovedFromControlSystem = function () {
        };

        ControlBase.prototype._control_onRemovedFromControlSystem = function () {
            try  {
                this.removedFromControlSystem.dispatch(new lux.ControlEventArgs(this));
                this.p_onRemovedFromControlSystem();

                if (lux.g.isNotEmpty(this.p_root) && this.p_root.isNestedSurfaceSystem) {
                    this.p_colControls.p_onRemovedFromControlSystemAll();
                }

                if (lux.g.isNotEmpty(this.p_parent)) {
                    this.p_parent.resized.remove(this.p_onAutoLayout, this);
                }

                this.p_removeSurfaceFromControlSystem();
                this._bAttachedToControlSystem = false;
            } catch (e) {
                console.log('Error removing control from control system: ' + e);
            }
        };
        ControlBase.prototype.p_removeSurfaceFromControlSystem = function () {
            if (lux.g.isEmpty(this.p_parent) || lux.g.isEmpty(this.p_parent.surface))
                return;
            this.p_parent.surface.removeChild(this.p_surface);
        };

        /*--------------------------------------------------------------------*
        END: Methods for updating a Control chain that has been added to the ControlSystem
        *--------------------------------------------------------------------*/
        ControlBase.prototype.render = function () {
            try  {
                if (this.isDisposed)
                    return;
                if (lux.g.isEmpty(this.p_root))
                    return;
                if (!this.p_root.isNestedSurfaceSystem && (!this.isVisible || this.opacityAbs <= this.opacityMin))
                    return;
                if (this.isInitialized) {
                    if (!this.p_openSurface())
                        return;
                    this.p_renderSurface();
                    this.controls.renderAll();
                    this.p_closeSurface();

                    this.p_bInvalidated = false;
                    this.p_bResized = false;
                }
            } catch (e) {
                console.log('Error in Control.render(): ' + e.toString());
            }
        };
        ControlBase.prototype.p_openSurface = function () {
            if (lux.g.isEmpty(this.p_surface))
                return false;
            return this.p_surface.open();
        };
        ControlBase.prototype.p_renderSurface = function () {
            if (lux.g.isEmpty(this.p_surface))
                return;
            this.p_surface.render();
        };
        ControlBase.prototype.p_closeSurface = function () {
            if (lux.g.isEmpty(this.p_surface))
                return;
            this.p_surface.close();
        };

        ControlBase.prototype.hitTest = function (ptRoot, ptLocal) {
            if (lux.g.isNotEmpty(this.p_surface))
                return this.p_surface.hitTest(ptRoot, ptLocal);
            else
                return false;
        };

        /*--------------------------------------------------------------------*
        START: Animation Methods
        *--------------------------------------------------------------------*/
        /*--------------------------------------------------------------------*
        USAGE
        *--------------------------------------------------------------------*
        this.p_root.animate.doThis(btn1.moveBy(100, 100, 1, Linear.easIn).And(
        btn1.rotateBy(-100, 1).then(btn1.rotateBy(100, 1))
        ).and(
        btn1.fadeTo(100, 1)
        ).then(
        btn1.mveBy(-100, -100, 1).and(btn1.fadeTo(50, 1)).then(btn1.pause(2, this.p_animPausep_onDone))
        );
        *--------------------------------------------------------------------*/
        //----- moveTo
        ControlBase.prototype.moveTo = function (targetX, targetY, targetZ, duration, ease, bHideWhenDone, doneHandler) {
            var _this = this;
            if (typeof ease === "undefined") { ease = lux.AnimEase.default; }
            if (typeof bHideWhenDone === "undefined") { bHideWhenDone = false; }
            var ctl = this;
            ctl.isVisible = true;
            var anim = new lux.AnimMoveTo(ctl, targetX, targetY, targetZ, duration, ease);
            if (bHideWhenDone)
                anim.done.listen(function (args) {
                    _this.isVisible = false;
                });
            if (lux.g.isNotEmpty(doneHandler))
                anim.done.listen(doneHandler, this);
            return new lux.AnimWrapper(anim);
        };

        //----- moveBy
        ControlBase.prototype.moveBy = function (offsetX, offsetY, offsetZ, duration, ease, bHideWhenDone, doneHandler) {
            var _this = this;
            if (typeof ease === "undefined") { ease = lux.AnimEase.default; }
            if (typeof bHideWhenDone === "undefined") { bHideWhenDone = false; }
            var ctl = this;
            ctl.isVisible = true;
            var anim = new lux.AnimMoveBy(ctl, offsetX, offsetY, offsetZ, duration, ease);
            if (bHideWhenDone)
                anim.done.listen(function (args) {
                    _this.isVisible = false;
                });
            if (lux.g.isNotEmpty(doneHandler))
                anim.done.listen(doneHandler, this);
            return new lux.AnimWrapper(anim);
        };

        //----- rotateBy
        ControlBase.prototype.rotateBy = function (offsetX, offsetY, offsetZ, duration, ease, bHideWhenDone, doneHandler) {
            var _this = this;
            if (typeof ease === "undefined") { ease = lux.AnimEase.default; }
            if (typeof bHideWhenDone === "undefined") { bHideWhenDone = false; }
            var ctl = this;
            ctl.isVisible = true;
            var anim = new lux.AnimRotateBy(ctl, offsetX, offsetY, offsetZ, duration, ease);
            if (bHideWhenDone)
                anim.done.listen(function (args) {
                    _this.isVisible = false;
                });
            if (lux.g.isNotEmpty(doneHandler))
                anim.done.listen(doneHandler, this);
            return new lux.AnimWrapper(anim);
        };

        //----- rotateTo
        ControlBase.prototype.rotateTo = function (rotationX, rotationY, rotationZ, duration, ease, bHideWhenDone, doneHandler) {
            var _this = this;
            if (typeof ease === "undefined") { ease = lux.AnimEase.default; }
            if (typeof bHideWhenDone === "undefined") { bHideWhenDone = false; }
            var ctl = this;
            ctl.isVisible = true;
            var anim = new lux.AnimRotateTo(ctl, rotationX, rotationY, rotationZ, duration, ease);
            if (bHideWhenDone)
                anim.done.listen(function (args) {
                    _this.isVisible = false;
                });
            if (lux.g.isNotEmpty(doneHandler))
                anim.done.listen(doneHandler, this);
            return new lux.AnimWrapper(anim);
        };

        //----- fadeTo
        ControlBase.prototype.fadeTo = function (opacityTarget, duration, ease, bHideWhenDone, doneHandler) {
            var _this = this;
            if (typeof ease === "undefined") { ease = lux.AnimEase.default; }
            if (typeof bHideWhenDone === "undefined") { bHideWhenDone = false; }
            var ctl = this;
            ctl.isVisible = true;
            var anim = new lux.AnimFadeTo(ctl, opacityTarget, duration, ease);
            if (bHideWhenDone)
                anim.done.listen(function (args) {
                    _this.isVisible = false;
                });
            if (lux.g.isNotEmpty(doneHandler))
                anim.done.listen(doneHandler, this);
            return new lux.AnimWrapper(anim);
        };

        //----- sizeTo
        ControlBase.prototype.sizeTo = function (targetX, targetY, duration, bScaleChildren, ease, bHideWhenDone, doneHandler) {
            var _this = this;
            if (typeof bScaleChildren === "undefined") { bScaleChildren = true; }
            if (typeof ease === "undefined") { ease = lux.AnimEase.default; }
            if (typeof bHideWhenDone === "undefined") { bHideWhenDone = false; }
            var ctl = this;
            ctl.isVisible = true;
            var anim = new lux.AnimSizeTo(ctl, targetX, targetY, duration, bScaleChildren, ease);
            if (bHideWhenDone)
                anim.done.listen(function (args) {
                    _this.isVisible = false;
                });
            if (lux.g.isNotEmpty(doneHandler))
                anim.done.listen(doneHandler, this);
            return new lux.AnimWrapper(anim);
        };

        //----- pause
        ControlBase.prototype.pause = function (duration, doneHandler) {
            var anim = new lux.AnimPause(duration);
            if (lux.g.isNotEmpty(doneHandler))
                anim.done.listen(doneHandler, this);
            return new lux.AnimWrapper(anim);
        };

        Object.defineProperty(ControlBase.prototype, "isDisposed", {
            /*--------------------------------------------------------------------*
            START: IDisposable
            *--------------------------------------------------------------------*/
            get: function () {
                return this.p_bDisposed;
            },
            enumerable: true,
            configurable: true
        });

        ControlBase.prototype.dispose = function () {
            if (this.p_bDisposed)
                return;

            this.p_bDisposed = true;
            this.disposing.dispatch(new lux.DisposedEventArgs(this));
            this.onDisposing();
        };

        ControlBase.prototype.onDisposing = function () {
        };
        return ControlBase;
    })();
    lux.ControlBase = ControlBase;

    var Control = (function (_super) {
        __extends(Control, _super);
        function Control() {
            _super.call(this);
            this.p_style = new lux.Style();
            this.p_style.propertyChanged.listen(this.onStylePropertyChanged, this);
        }
        return Control;
    })(ControlBase);
    lux.Control = Control;
})(lux || (lux = {})); // End of module
/// <reference path='iControl.ts' />
/// <reference path='iControl.ts' />
/// <reference path='iSurface.ts' />
/// <reference path='events.ts' />
/// <reference path='signal.ts' />
var lux;
(function (lux) {
    var FontDescription = (function () {
        function FontDescription(name, src, format) {
            this.propertyChanged = new lux.Signal();
            this.p_name = 'Arial';
            this.p_src = '';
            this.p_format = 'woff';
            if (lux.g.isNotEmpty(name))
                this.p_name = name;
            if (lux.g.isNotEmpty(src))
                this.p_src = src;
            if (lux.g.isNotEmpty(format))
                this.p_format = format;
        }
        Object.defineProperty(FontDescription.prototype, "name", {
            /*====================================================================*
            START: Properties
            *====================================================================*/
            get: function () {
                return this.p_name;
            },
            set: function (value) {
                this.p_name = value;
                this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('name', this.p_name));
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(FontDescription.prototype, "src", {
            get: function () {
                return this.p_src;
            },
            set: function (value) {
                this.p_src = value;
                this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('src', this.p_src));
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(FontDescription.prototype, "format", {
            get: function () {
                return this.p_format;
            },
            set: function (value) {
                this.p_format = value;
                this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('format', this.p_format));
            },
            enumerable: true,
            configurable: true
        });

        FontDescription.prototype.toMap = function () {
            var map = { 'name': this.p_name, 'src': this.p_src, 'format': this.p_format };
            return map;
        };
        return FontDescription;
    })();
    lux.FontDescription = FontDescription;
})(lux || (lux = {})); // End of module
/// <reference path='iRenderer.ts' />
/// <reference path='fontDescription.ts' />
var lux;
(function (lux) {
    var RendererBase = (function () {
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function RendererBase(bNestedSurfaceSystem, b3dEnabled, bRenderedOnTimer) {
            this.p_fonts = new lux.Map();
            this.p_bNestedSurfaceSystem = true;
            this.p_b3dEnabled = false;
            this.p_bRenderedOnTimer = false;
            if (lux.g.isNotEmpty(bNestedSurfaceSystem))
                this.p_bNestedSurfaceSystem = bNestedSurfaceSystem;
            if (lux.g.isNotEmpty(b3dEnabled))
                this.p_b3dEnabled = b3dEnabled;
            if (lux.g.isNotEmpty(bRenderedOnTimer))
                this.p_bRenderedOnTimer = bRenderedOnTimer;
        }
        Object.defineProperty(RendererBase.prototype, "isNestedSurfaceSystem", {
            get: function () {
                return this.p_bNestedSurfaceSystem;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(RendererBase.prototype, "is3dEnabled", {
            get: function () {
                return this.p_b3dEnabled;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(RendererBase.prototype, "isRenderedOnTimer", {
            get: function () {
                return this.p_bRenderedOnTimer;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        RendererBase.prototype.newRootSurface = function (args) {
            return null;
        };

        RendererBase.prototype.newSurface = function (type, args) {
            return null;
        };

        RendererBase.prototype.registerFont = function (font) {
            try  {
                this.p_fonts.setValue(font.name, font);
            } catch (e) {
                console.log('Error in Renderer.registerFont(): ' + e.toString());
            }
        };

        RendererBase.prototype.getFont = function (name) {
            var font = this.p_fonts.getValue(name);
            if (lux.g.isEmpty(font))
                font = new lux.FontDescription('Arial');
            return font;
        };

        RendererBase.prototype.getZScaleRatio = function (z) {
            return 1.0;
        };

        RendererBase.prototype.measureText = function (sText, textStyle, scaleFont, widthMax) {
            return new lux.Size(0.0, 0.0);
        };
        return RendererBase;
    })();
    lux.RendererBase = RendererBase;
})(lux || (lux = {})); // End of module
/// <reference path='proxyBase.ts' />
/// <reference path='iShape.ts' />
/// <reference path='../events.ts' />
/// <reference path='../util/g.ts' />
var lux;
(function (lux) {
    var Size = (function (_super) {
        __extends(Size, _super);
        function Size(width, height, depth) {
            _super.call(this);

            if (lux.g.isNotEmpty(width)) {
                this.p_data[0] = width;
                this.p_bEmpty = false;
            }

            if (lux.g.isNotEmpty(height))
                this.p_data[1] = height;
            if (lux.g.isNotEmpty(depth))
                this.p_data[2] = depth;
        }
        Size.fromList = function (data) {
            return new Size(data.item(0), data.item(1), data.item(2));
        };

        Size.copy = function (size) {
            return new Size(size.width, size.height, size.depth);
        };

        Object.defineProperty(Size, "empty", {
            get: function () {
                return new Size();
            },
            enumerable: true,
            configurable: true
        });

        Size.prototype.setValues = function (width, height, depth) {
            if (lux.g.isNotEmpty(width)) {
                this.p_data[0] = width;
                this.p_bEmpty = false;
            } else
                return this;

            if (lux.g.isNotEmpty(height))
                this.p_data[1] = height;
            if (lux.g.isNotEmpty(depth))
                this.p_data[2] = depth;

            this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));

            return this;
        };

        Object.defineProperty(Size.prototype, "width", {
            get: function () {
                return this.p_data[0];
            },
            set: function (value) {
                this.p_data[0] = value;
                this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Size.prototype, "widthInt", {
            get: function () {
                return Math.round(this.p_data[0]);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Size.prototype, "height", {
            get: function () {
                return this.p_data[1];
            },
            set: function (value) {
                this.p_data[1] = value;
                this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Size.prototype, "heightInt", {
            get: function () {
                return Math.round(this.p_data[1]);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Size.prototype, "depth", {
            get: function () {
                return this.p_data[2];
            },
            set: function (value) {
                this.p_data[2] = value;
                this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Size.prototype, "depthInt", {
            get: function () {
                return Math.round(this.p_data[2]);
            },
            enumerable: true,
            configurable: true
        });
        return Size;
    })(lux.ProxyBase);
    lux.Size = Size;
})(lux || (lux = {})); // End of module
var lux;
(function (lux) {
    var StringTools = (function () {
        function StringTools() {
        }
        StringTools.normalizeLineBreaks = function (s) {
            var s = s.replace(/\r\r/g, '\n').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

            while (s.lastIndexOf('\n') === s.length - 1)
                s = s.substring(0, s.length - 1);

            return s;
        };

        StringTools.replaceMultiple = function (s, replaceAll, replaceWith) {
            var re;
            var length = replaceAll.length;

            for (var i = 0; i < length - 1; i++) {
                re = new RegExp(replaceAll[i], 'g');
                s = s.replace(re, replaceAll[i + 1]);
            }

            return s.replace(replaceAll[length - 1], replaceWith);
        };

        StringTools.splitMultiple = function (s, delimiters) {
            var re;
            var length = delimiters.length;

            for (var i = 0; i < length - 1; i++) {
                re = new RegExp(delimiters[i], 'g');
                s = s.replace(re, delimiters[i + 1]);
            }

            return s.split(delimiters[length - 1]);
        };
        return StringTools;
    })();
    lux.StringTools = StringTools;
})(lux || (lux = {})); // End module
/// <reference path='../control.ts' />
/// <reference path='../iSurface.ts' />
/// <reference path='../style.ts' />
/// <reference path='../proxies/size.ts' />
/// <reference path='../util/g.ts' />
/// <reference path='../util/stringTools.ts' />
var lux;
(function (lux) {
    (function (TextAlign) {
        TextAlign[TextAlign["LEFT"] = 0] = "LEFT";
        TextAlign[TextAlign["RIGHT"] = 1] = "RIGHT";
        TextAlign[TextAlign["CENTER"] = 2] = "CENTER";
        TextAlign[TextAlign["JUSTIFY"] = 3] = "JUSTIFY";
    })(lux.TextAlign || (lux.TextAlign = {}));
    var TextAlign = lux.TextAlign;

    (function (TextWrap) {
        TextWrap[TextWrap["NO_WRAP"] = 0] = "NO_WRAP";
        TextWrap[TextWrap["WRAP"] = 1] = "WRAP";
    })(lux.TextWrap || (lux.TextWrap = {}));
    var TextWrap = lux.TextWrap;

    var TextStyle = (function (_super) {
        __extends(TextStyle, _super);
        function TextStyle(styleName, style) {
            _super.call(this, styleName, style);
            this.p_fontFamily = 'Arial';
            this.p_fontSize = 10;
            this.p_fontStyle = 'normal';
            this.p_fontWeight = 'normal';
            //if (g.isNotEmpty(fontFamily)) this.fontFamily = fontFamily;
            //if (g.isNotEmpty(fontSize)) this.fontSize = fontSize;
            //if (g.isNotEmpty(fontStyle)) this.fontStyle = fontStyle;
            //if (g.isNotEmpty(fontWeight)) this.fontWeight = fontWeight;
        }
        Object.defineProperty(TextStyle.prototype, "fontFamily", {
            get: function () {
                return this.p_fontFamily;
            },
            set: function (value) {
                this.p_fontFamily = value;
                if (lux.g.isNotEmpty(this.style))
                    this.style.p_doPropertyChanged(this.p_name + '.fontFamily', value);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TextStyle.prototype, "fontSize", {
            get: function () {
                return this.p_fontSize;
            },
            set: function (value) {
                this.p_fontSize = value;
                if (lux.g.isNotEmpty(this.style))
                    this.style.p_doPropertyChanged(this.p_name + '.fontSize', value);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TextStyle.prototype, "fontStyle", {
            get: function () {
                return this.p_fontStyle;
            },
            set: function (value) {
                this.p_fontStyle = value;
                if (lux.g.isNotEmpty(this.style))
                    this.style.p_doPropertyChanged(this.p_name + '.fontStyle', value);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TextStyle.prototype, "fontWeight", {
            get: function () {
                return this.p_fontWeight;
            },
            set: function (value) {
                this.p_fontWeight = value;
                if (lux.g.isNotEmpty(this.style))
                    this.style.p_doPropertyChanged(this.p_name + '.fontWeight', value);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TextStyle.prototype, "lineHeight", {
            get: function () {
                return this.p_lineHeight;
            },
            set: function (value) {
                this.p_lineHeight = value;
                if (lux.g.isNotEmpty(this.style))
                    this.style.p_doPropertyChanged(this.p_name + '.lineHeight', value);
            },
            enumerable: true,
            configurable: true
        });

        TextStyle.prototype.set = function (style) {
            this.lineHeight = style.lineHeight;
            this.color = style.color;
            this.fontFamily = style.fontFamily;
            this.fontSize = style.fontSize;
            this.fontStyle = style.fontStyle;
            this.fontWeight = style.fontWeight;

            return this;
        };
        return TextStyle;
    })(lux.UIElementStyle);
    lux.TextStyle = TextStyle;

    var TextAreaStyle = (function (_super) {
        __extends(TextAreaStyle, _super);
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function TextAreaStyle() {
            _super.call(this);
            this.p_alignment = 0 /* LEFT */;
            this.p_wrap = 1 /* WRAP */;

            this.text = new TextStyle('text', this);
            this.text.color = new lux.Color(0, 0, 0);
            //if (g.isNotEmpty(lineHeight)) this.text.lineHeight = lineHeight;
        }
        Object.defineProperty(TextAreaStyle.prototype, "alignment", {
            get: function () {
                return this.p_alignment;
            },
            set: function (value) {
                this.p_alignment = value;
                this.p_doPropertyChanged('alignment', value);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TextAreaStyle.prototype, "wrap", {
            get: function () {
                return this.p_wrap;
            },
            set: function (value) {
                this.p_wrap = value;
                this.p_doPropertyChanged('wrap', value);
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        TextAreaStyle.prototype.clone = function () {
            var styleTmp = new TextAreaStyle();

            styleTmp.text.lineHeight = this.text.lineHeight;
            styleTmp.alignment = this.alignment;
            styleTmp.wrap = this.wrap;

            styleTmp.background.color = this.background.color;
            styleTmp.border.color = this.border.color;
            styleTmp.text.color = this.text.color;

            styleTmp.text.fontFamily = this.text.fontFamily;
            styleTmp.text.fontSize = this.text.fontSize;
            styleTmp.text.fontStyle = this.text.fontStyle;
            styleTmp.text.fontWeight = this.text.fontWeight;

            return styleTmp;
        };

        TextAreaStyle.prototype.set = function (style) {
            _super.prototype.set.call(this, style);

            this.alignment = style.alignment;
            this.wrap = style.wrap;

            this.text.set(style.text);

            return this;
        };
        return TextAreaStyle;
    })(lux.Style);
    lux.TextAreaStyle = TextAreaStyle;

    var Text = (function (_super) {
        __extends(Text, _super);
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function Text(text, width) {
            _super.call(this);
            this.p_text = '';
            this.p_delimiters = [];
            this.p_postEllipsis = '';
            this.p_bEditable = false;
            this.p_maxLineCount = 0;

            this.p_bLoaded = false;
            if (lux.g.isNotEmpty(text))
                this.text = text;

            this.isClipChildControls = false;
            this.isAllowMouseEvents = false;
            this.isAspectRatioMaintained = false;

            if (lux.g.isNotEmpty(width))
                this.width = width;

            this.p_style = new TextAreaStyle();
            this.p_style.propertyChanged.listen(this.onStylePropertyChanged, this);
        }
        Object.defineProperty(Text.prototype, "type", {
            /*====================================================================*
            START: Properties
            *====================================================================*/
            get: function () {
                return 4 /* TEXT_AREA */;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Text.prototype, "text", {
            get: function () {
                return this.p_text;
            },
            set: function (value) {
                this.p_text = value;
                this.normalizeLineBreaks();
                this.p_doPropertyChanged('text', value);
                this.invalidate();
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Text.prototype, "delimiters", {
            /**
            * Line breaks will be allowed before and after these characters
            */
            get: function () {
                return this.p_delimiters;
            },
            set: function (value) {
                this.p_delimiters = value;
                this.p_doPropertyChanged('delimiters', value);
                this.invalidate();
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Text.prototype, "postEllipsis", {
            /**
            * Text that will appear after the ... when text is wrapped
            * and truncated to fit within a specified number of lines.
            */
            get: function () {
                return this.p_postEllipsis;
            },
            set: function (value) {
                this.p_postEllipsis = value;
                this.p_doPropertyChanged('postEllipsis', value);
                this.invalidate();
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Text.prototype, "isEditable", {
            get: function () {
                return this.p_bEditable;
            },
            set: function (value) {
                this.p_bEditable = value;
                this.p_doPropertyChanged('isEditable', value);
                this.invalidate();
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Text.prototype, "maxLineCount", {
            get: function () {
                return this.p_maxLineCount;
            },
            set: function (value) {
                this.p_maxLineCount = value;
                this.p_doPropertyChanged('maxLineCount', value);
                this.invalidate();
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Events
        *====================================================================*/
        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        Text.prototype.measureText = function () {
            if (lux.g.isEmpty(this.root) || lux.g.isEmpty(this.root.render))
                return new lux.Size(10, 10);

            return this.root.renderer.measureText(this.text, this.style.text, this.width);
        };

        Text.prototype.normalizeLineBreaks = function () {
            this.p_text = lux.StringTools.normalizeLineBreaks(this.p_text);
        };

        Text.prototype.requestSurface = function () {
            //----- Use the property to set the Surface value here, so that Activate/Deactivate are called.
            var surfaceNew = this.p_root.renderer.newSurface(4 /* TEXT_AREA */);
            this.surface = surfaceNew;
        };
        return Text;
    })(lux.ControlBase);
    lux.Text = Text;
})(lux || (lux = {})); // End of module
/// <reference path='../../iSurface.ts' />
/// <reference path='../../rendererBase.ts' />
var lux;
(function (lux) {
    var SurfaceDom = (function () {
        /*====================================================================*
        START: Constructors
        *====================================================================*/
        function SurfaceDom(renderer, element) {
            var _this = this;
            /*====================================================================*
            START: Properties and Fields
            *====================================================================*/
            this.p_bHit = false;
            this.p_elem = document.createElement('div');
            this.p_renderer = renderer;

            if (lux.g.isNotEmpty(element))
                this.p_elem = element;

            this._disableSelection();

            //----- Set up 3d stuff.
            //----- Be careful about changing anything here.
            //----- 'overflow: hidden' and 'clip' don't work with preserve-3d (they make everything flat).
            this.p_elem.style.position = 'absolute';
            this.p_elem.style.display = 'block';
            this.p_elem.style.margin = '0px';
            this.p_elem.style.padding = '0px';

            //----- Turn off backface visibility to improve performance when hardware accelerated.
            //----- TODO: Add a property to disable this when needed if 3D is enabled.
            this.p_elem.style.backfaceVisibility = 'hidden';
            this.p_elem.style['-webkit-backface-visibility'] = 'hidden';

            //----- IMPORTANT: Top and left need to be initialized, or the element will be affected
            //----- by relatively positioned content in the parent element.
            this.p_elem.style.top = '0px';
            this.p_elem.style.left = '0px';

            this.p_elem.style['transform-style'] = 'preserve-3d';

            //----- Chrome, Safari, Opera
            this.p_elem.style['-webkit-transform-style'] = 'preserve-3d';

            //----- FireFox
            this.p_elem.style['-moz-transform-style'] = 'preserve-3d';

            //----- IE 9
            this.p_elem.style['-ms-transform-style'] = 'preserve-3d';

            //----- Perspective needs to be applied to the parent of the element
            //----- you want to manipulate in 3D, rather than the element itself.
            this.p_elem.style['perspective'] = '1200px';

            //----- Chrome, Safari, Opera
            this.p_elem.style['-webkit-perspective'] = '1200px';

            //----- FireFox
            this.p_elem.style['-moz-perspective'] = '1200px';

            //----- IE 9
            this.p_elem.style['-ms-perspective'] = '1200px';

            //----- Eliminate tap highlighting on mobile Safari.
            this.p_elem.style['-webkit-tap-highlight-color'] = 'rgba(0,0,0,0)';

            this.p_elem.onmouseover = function (e) {
                return _this._elem_onMouseOver(e);
            };
            this.p_elem.onmouseout = function (e) {
                return _this._elem_onMouseOut(e);
            };
        }
        Object.defineProperty(SurfaceDom.prototype, "native", {
            get: function () {
                return this.p_elem;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        SurfaceDom.prototype.activate = function (control) {
            var _this = this;
            try  {
                this.p_control = control;

                //----- Call resize to initialize the width and height of the native surface.
                this.p_resize();

                if (this.p_renderer.is3dEnabled) {
                    this.p_elem.onmouseover = function (e) {
                        return _this._elem_onMouseOver(e);
                    };
                    this.p_elem.onmouseout = function (e) {
                        return _this._elem_onMouseOut(e);
                    };
                }

                this.p_control.propertyChanged.listen(this.p_control_onPropertyChanged, this);
            } catch (e) {
                console.log('SurfaceDom.activate: ' + e.toString());
            }
        };

        SurfaceDom.prototype.initialize = function () {
        };
        SurfaceDom.prototype.deactivate = function () {
        };
        SurfaceDom.prototype.open = function () {
            return true;
        };

        SurfaceDom.prototype.render = function () {
            if (!this.p_control.isLoaded || !this.p_control.isInvalidated)
                return;

            try  {
                this.p_resize();

                //------ z index
                this.p_elem.style.zIndex = this.p_control.zIndex.toString();

                //----- visibility, opacity and clipping
                //----- 'overflow: hidden' and 'clip' don't work with preserve-3d (they make everything flat).
                if (!this.p_control.root.renderer.is3dEnabled) {
                    this.p_elem.style.overflow = this.p_control.isClipChildControls ? 'hidden' : 'visible';
                } else
                    this.p_elem.style.overflow = 'visible';

                this.p_elem.style.opacity = this.p_control.opacity.toString();
                if (!this.p_control.isVisible || this.p_control.opacity <= this.p_control.opacityMin) {
                    this.p_elem.style.display = 'none';
                } else
                    this.p_elem.style.display = 'block';

                //----- background color
                var colorBG = this.p_control.style.background.color;
                if (!colorBG.isEmpty)
                    this.p_elem.style.backgroundColor = colorBG.toHex();
                else
                    this.p_elem.style.backgroundColor = 'transparent';

                //var colorBorder: Color = this.style.border.color;
                //if (!colorBorder.isEmpty) this.p_elem.style.borderColor = colorBorder.toHex();
                //else this.p_elem.style.borderColor = 'transparent';
                //this.p_elem.style.borderWidth = this.style.border.thickness.toString() + 'px';
                //----- position, size and scale
                this._setTransformOrigin();
                this._applyTransform();
            } catch (e) {
                console.log('Error in SurfaceDom.render(): ' + e.toString());
            }
        };

        SurfaceDom.prototype.close = function () {
        };

        SurfaceDom.prototype.hitTest = function (ptRoot, ptLocal) {
            if (this.p_renderer.is3dEnabled)
                return this.p_bHit;
            else {
                if (ptLocal.x < 0)
                    return false;
                if (ptLocal.x > this.p_control.width)
                    return false;
                if (ptLocal.y < 0)
                    return false;
                if (ptLocal.y > this.p_control.height)
                    return false;
            }

            return true;
        };

        SurfaceDom.prototype.addChild = function (childSurface) {
            var elem = childSurface.native;
            this.p_elem.appendChild(elem);
        };

        SurfaceDom.prototype.removeChild = function (childSurface) {
            if (lux.g.isEmpty(this.p_elem))
                return;
            if (this.p_elem.childElementCount === 0)
                return;

            this.p_elem.removeChild(childSurface.native);
        };

        /*====================================================================*
        START: Protected Methods
        *====================================================================*/
        SurfaceDom.prototype.p_resize = function () {
            this.p_elem.style.width = this.p_control.width.toString() + 'px';
            this.p_elem.style.height = this.p_control.height.toString() + 'px';
        };

        SurfaceDom.prototype.p_control_onPropertyChanged = function (args) {
            switch (args.propertyName) {
                case 'name':
                    this.p_elem.id = this.p_control.name;
                    break;
            }
        };

        /*====================================================================*
        START: Private Methods
        *====================================================================*/
        SurfaceDom.prototype._disableSelection = function () {
            //----- Don't allow this element to be selected
            this.p_elem.style['user-select'] = 'none';
            this.p_elem.style['-webkit-user-select'] = 'none';
            this.p_elem.style['-khtml-user-select'] = 'none';
            this.p_elem.style['-moz-user-select'] = 'none';
            this.p_elem.style['-ms-user-select'] = 'none';
            this.p_elem.style['-webkit-touch-callout'] = 'none';
            this.p_elem.setAttribute('unselectable', 'on'); // For IE and Opera
            this.p_elem.style['-webkit-user-drag'] = 'none';
        };

        SurfaceDom.prototype._setTransformOrigin = function () {
            //----- Tell the system we want all our transformations to use the control's anchorPoint as the origin.
            //----- This means we'll use the x and y values of the control for positioning, rather than left and top.
            var x = this.p_control.anchorPoint.x * 100.0;
            var y = this.p_control.anchorPoint.y * 100.0;
            var z = this.p_control.anchorPoint.z;

            //----- z has to be a length, not a percentage.
            var stringOrigin = x.toString() + '% ' + y.toString() + '% ' + z.toString() + 'px';
            this.p_elem.style['transform-origin'] = stringOrigin;

            //----- Chrome, Safari, Opera
            this.p_elem.style['-webkit-transform-origin'] = stringOrigin;

            //----- FireFox
            this.p_elem.style['-moz-transform-origin'] = stringOrigin;

            //----- IE 9
            this.p_elem.style['-ms-transform-origin'] = stringOrigin;
        };

        SurfaceDom.prototype._applyTransform = function () {
            var translateX = this.p_control.left;
            var translateY = this.p_control.top;

            var stringTransform = '';

            if (this.p_renderer.is3dEnabled) {
                //----- NOTE: The code below invokes hardware acceleration,
                //----- but causes elements to disappear unexpectedly in Chrome.
                stringTransform = 'translate3d(' + translateX.toString() + 'px, ' + translateY.toString() + 'px, 0px) ' + 'scale3d(' + this.p_control.scaleWidth.toString() + ', ' + this.p_control.scaleHeight.toString() + ', 1) ' + 'rotate3d(1, 0, 0, ' + this.p_control.rotationX.toString() + 'deg)' + 'rotate3d(0, 1, 0, ' + this.p_control.rotationY.toString() + 'deg)' + 'rotate3d(0, 0, 1, ' + this.p_control.rotationZ.toString() + 'deg)';
            } else {
                stringTransform = 'translateX(' + translateX.toString() + 'px)' + 'translateY(' + translateY.toString() + 'px)' + 'scale(' + this.p_control.scaleWidth.toString() + ', ' + this.p_control.scaleHeight.toString() + ') ' + 'rotate(' + this.p_control.rotationZ.toString() + 'deg)';
            }

            this.p_elem.style['transform'] = stringTransform;

            //----- Chrome, Safari, Opera
            this.p_elem.style['-webkit-transform'] = stringTransform;

            //----- FireFox
            this.p_elem.style['-moz-transform'] = stringTransform;

            //----- IE 9
            this.p_elem.style['-ms-transform'] = stringTransform;
        };

        SurfaceDom.prototype._elem_onMouseOver = function (e) {
            this.p_bHit = true;
        };

        SurfaceDom.prototype._elem_onMouseOut = function (e) {
            this.p_bHit = false;
        };
        return SurfaceDom;
    })();
    lux.SurfaceDom = SurfaceDom;
})(lux || (lux = {}));
/// <reference path='surfaceDom.ts' />
/// <reference path='rendererDom.ts' />
var lux;
(function (lux) {
    var SurfaceControlDom = (function (_super) {
        __extends(SurfaceControlDom, _super);
        function SurfaceControlDom(renderer, element) {
            _super.call(this, renderer, element);
        }
        return SurfaceControlDom;
    })(lux.SurfaceDom);
    lux.SurfaceControlDom = SurfaceControlDom;
})(lux || (lux = {}));
/// <reference path='../enums.ts' />
/// <reference path='../control.ts' />
var lux;
(function (lux) {
    var Image = (function (_super) {
        __extends(Image, _super);
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function Image(src) {
            if (typeof src === "undefined") { src = ''; }
            _super.call(this);
            this.p_src = '';

            this.p_bLoaded = false;

            if (src != '')
                this.src = src;
            this.style.background.color = lux.Color.empty;
        }
        Object.defineProperty(Image.prototype, "type", {
            /*====================================================================*
            START: Properties
            *====================================================================*/
            get: function () {
                return 1 /* IMAGE */;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Image.prototype, "src", {
            get: function () {
                return this.p_src;
            },
            set: function (value) {
                this.p_src = value;
                this.p_doPropertyChanged('src', value);
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        Image.prototype.requestSurface = function () {
            try  {
                if (lux.g.isEmpty(this.p_root) || lux.g.isEmpty(this.p_root.renderer))
                    return;

                //----- IMPORTANT: Use the property to set the Surface value here, so that activate/deactivate are called.
                this.surface = this.p_root.renderer.newSurface(1 /* IMAGE */);
            } catch (e) {
                console.log('Error in Image.requestSurface: ' + e);
            }
        };
        return Image;
    })(lux.Control);
    lux.Image = Image;
})(lux || (lux = {})); // End of module
/// <reference path='../../iRenderer.ts' />
/// <reference path='../../controls/image.ts' />
/// <reference path='rendererDom.ts' />
var lux;
(function (lux) {
    var SurfaceImageDom = (function (_super) {
        __extends(SurfaceImageDom, _super);
        function SurfaceImageDom(renderer) {
            var _this = this;
            _super.call(this, renderer);
            this.p_elem = document.createElement('img');
            this._bHtmlElementlLoaded = false;

            //----- IMPORTANT: These lines prevent the image element from automatically
            //----- sizing to fit the parent element when it's added to the DOM.
            this.p_elem.style.maxWidth = 'none';
            this.p_elem.style.maxHeight = 'none';

            this.p_elem.onload = function (e) {
                _this._htmlElement_onLoad(e);
            };
        }
        Object.defineProperty(SurfaceImageDom.prototype, "native", {
            get: function () {
                return this.p_elem;
            },
            enumerable: true,
            configurable: true
        });

        SurfaceImageDom.prototype.activate = function (control) {
            _super.prototype.activate.call(this, control);

            if (this.p_control.src != '')
                this.p_elem.src = this.p_control.src;
        };

        SurfaceImageDom.prototype.p_resize = function () {
            if (!this._bHtmlElementlLoaded)
                return;

            _super.prototype.p_resize.call(this);
        };

        SurfaceImageDom.prototype._htmlElement_onLoad = function (e) {
            this.p_control.isAspectRatioMaintained = false;
            this.p_control.setWidthWithoutInvalidation(this.p_elem.width);
            this.p_control.setHeightWithoutInvalidation(this.p_elem.height);
            this.p_control.isAspectRatioMaintained = true;

            this._bHtmlElementlLoaded = true;
            this.p_control.doLoaded();
        };

        SurfaceImageDom.prototype.p_control_onPropertyChanged = function (args) {
            _super.prototype.p_control_onPropertyChanged.call(this, args);

            if (args.propertyName === 'src' && this.p_control.src !== '') {
                this._bHtmlElementlLoaded = false;
                this.p_elem.src = this.p_control.src;
            }
        };
        return SurfaceImageDom;
    })(lux.SurfaceDom);
    lux.SurfaceImageDom = SurfaceImageDom;
})(lux || (lux = {}));
/// <reference path='../../iRenderer.ts' />
/// <reference path='../../rendererBase.ts' />
/// <reference path='../../controls/text.ts' />
/// <reference path='surfaceControlDom.ts' />
/// <reference path='surfaceImageDom.ts' />
var lux;
(function (lux) {
    var RendererDom = (function (_super) {
        __extends(RendererDom, _super);
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        /**
        * Passed to an lux.Root to instantiate a new MShell control system.
        * Handles rendering of all nested MShell controls for the associated lux.Root.
        */
        function RendererDom() {
            _super.call(this, true, false, false);
            this.is3dEnabled = false;
            this.isNestedSurfaceSystem = true;
            this.isRenderedOnTimer = false;
        }
        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        RendererDom.prototype.newRootSurface = function (element) {
            return new lux.SurfaceControlDom(this, element);
        };

        RendererDom.prototype.newSurface = function (type, args) {
            try  {
                switch (type) {
                    case 0 /* BASIC */:
                        return new lux.SurfaceControlDom(this, args);
                        break;
                    case 1 /* IMAGE */:
                        return new lux.SurfaceImageDom(this);
                        break;
                }
            } catch (e) {
                console.log('Error in RendererDom.newSurface(): ' + e.toString());
                return null;
            }
        };

        RendererDom.prototype.measureText = function (sText, textStyle, scaleFont, widthMax) {
            var realWidth;
            var realHeight;
            var tmpDiv;

            tmpDiv = document.createElement('div');
            tmpDiv.style.visibility = 'hidden';
            tmpDiv.style.position = 'absolute';
            tmpDiv.style.display = 'block';
            tmpDiv.style.fontFamily = textStyle.fontFamily;
            tmpDiv.style.fontSize = textStyle.fontSize + 'pt';
            tmpDiv.style.fontStyle = textStyle.fontStyle;
            tmpDiv.style.fontWeight = textStyle.fontWeight;
            tmpDiv.style.lineHeight = textStyle.lineHeight + 'px';
            if (lux.g.isNotEmpty(widthMax))
                tmpDiv.style.width = widthMax + 'px';

            tmpDiv.innerHTML = sText;
            document.body.appendChild(tmpDiv);
            realWidth = tmpDiv.offsetWidth;
            realHeight = tmpDiv.offsetHeight;
            document.body.removeChild(tmpDiv);

            return new lux.Size(realWidth, realHeight);
        };
        return RendererDom;
    })(lux.RendererBase);
    lux.RendererDom = RendererDom;
})(lux || (lux = {}));
/// <reference path='control.ts' />
/// <reference path='iRoot.ts' />
/// <reference path='iRenderer.ts' />
/// <reference path='../d_ts/touchevent.d.ts' />
/// <reference path='../d_ts/hammerjs.d.ts' />
/// <reference path='renderers/dom/rendererDom.ts' />
var lux;
(function (lux) {
    var Root = (function (_super) {
        __extends(Root, _super);
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function Root(element, renderer) {
            if (typeof element === "undefined") { element = document.createElement('div'); }
            if (typeof renderer === "undefined") { renderer = new lux.RendererDom(); }
            var _this = this;
            _super.call(this);
            /*====================================================================*
            START: Properties and fields
            *====================================================================*/
            this.is3dEnabled = false;
            this.isNestedSurfaceSystem = true;
            /**
            * Holds a reference to the control that currently has a mousedown.
            */
            this.controlMouseLeftButtonDown = null;
            this.controlMouseRightButtonDown = null;
            this.p_controlsMouseMove = new lux.List();
            this.p_controlsPreviewMouseMove = new lux.List();
            this.p_controlsMouseMoveLast = new lux.List();
            this.p_controlsPreviewMouseMoveLast = new lux.List();
            this.fps = 24;
            this.p_fpsActual = 0.0;
            this.p_bPinching = false;
            this.p_pinchDistancePrev = 0;
            /*--------------------------------------------------------------------*
            Mouse Events
            *--------------------------------------------------------------------*/
            this.p_lastTouchPoint = new lux.Point(0, 0);
            //----- IMPORTANT: This is a workaround for stuttering with touchmove in PhoneGap on iOS.
            this.p_touchMoveTick = 0;
            /*--------------------------------------------------------------------*
            Keyboard Events
            *--------------------------------------------------------------------*/
            //----- keyDown
            this.keyDown = new lux.Signal();
            //----- keyUp
            this.keyUp = new lux.Signal();

            this.p_renderer = renderer;
            if (lux.g.isNotEmpty(element))
                this.p_elem = element;

            this.p_root = this;
            this.p_name = 'root';

            this.requestSurface();

            this.doInitialized();
            this.p_setupEvents();

            this.isPropagateMouseEvents = true;

            window.requestAnimationFrame(function () {
                return _this.p_onTimerTick();
            });
        }
        Object.defineProperty(Root.prototype, "element", {
            get: function () {
                return this.p_elem;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Root.prototype, "renderer", {
            get: function () {
                return this.p_renderer;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Root.prototype, "controlsMouseMove", {
            /**
            * Holds references to the controls that currently have a mousemove.
            */
            get: function () {
                return this.p_controlsMouseMove;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Root.prototype, "controlsPreviewMouseMove", {
            get: function () {
                return this.p_controlsPreviewMouseMove;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Root.prototype, "controlsMouseMoveLast", {
            get: function () {
                return this.p_controlsMouseMoveLast;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Root.prototype, "controlsPreviewMouseMoveLast", {
            get: function () {
                return this.p_controlsPreviewMouseMoveLast;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Root.prototype, "lastMousePosition", {
            /**
            * The point where the mouse cursor was last detected.
            */
            get: function () {
                return this.p_ptLastMousePosition;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Root.prototype, "fpsActual", {
            get: function () {
                return this.p_fpsActual;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        Root.prototype.requestSurface = function () {
            try  {
                if (lux.g.isNotEmpty(this.p_surface) || lux.g.isEmpty(this.p_root.renderer))
                    return;

                //----- IMPORTANT: Use the property to set the Surface value here,
                //----- so that activate/deactivate are called.
                this.surface = this.p_root.renderer.newRootSurface(this.p_elem);
            } catch (e) {
                console.log("Error in Control.requestSurface: " + e);
            }
        };

        Root.prototype.checkMouseMove = function (e) {
            //----- Keep track of all the controls that the mouse is moving within,
            //----- so we can fire MouseEnter and MouseLeave events
            //----- all the way down the nesting chain, until we get an e.Handled.
            _super.prototype.checkMouseMove.call(this, e);

            this.p_ptLastMousePosition = e.positionRoot;

            //----- See if the mouse left any of the controls that caught a preview mouse move on the last pass.
            this.p_controlsPreviewMouseMoveLast.forEach(function (ctl) {
                if (!this.p_controlsPreviewMouseMove.contains(ctl)) {
                    //----- This control caught a PreviewMouseEnter event and the mouse has left the control now,
                    //----- so fire a PreviewMouseLeave event on the control.
                    e.sender = ctl;
                    if (ctl != null && ctl.parent != null && ctl.isPreviewMouseOver)
                        ctl.doPreviewMouseLeave(e);

                    return true;
                }
            });

            //----- See if the mouse left any of the controls that caught a mouse move on the last pass.
            this.p_controlsMouseMoveLast.forEach(function (ctl) {
                if (!this.p_controlsMouseMove.contains(ctl)) {
                    //----- This control caught a MouseEnter event and the mouse has left the control now,
                    //----- so fire a MouseLeave event on the control.
                    e.sender = ctl;
                    if (ctl != null && ctl.parent != null && ctl.isMouseOver)
                        ctl.doMouseLeave(e);

                    return true;
                }
            });

            this.p_controlsPreviewMouseMoveLast.clear();
            this.p_controlsMouseMoveLast.clear();

            this.p_controlsPreviewMouseMove.forEach(function (ctl) {
                if (this.p_controlsPreviewMouseMoveLast != null) {
                    this.p_controlsPreviewMouseMoveLast.add(ctl);
                    return true;
                } else
                    return false;
            });

            this.p_controlsMouseMove.forEach(function (ctl) {
                if (this.p_controlsMouseMoveLast != null) {
                    this.p_controlsMouseMoveLast.add(ctl);
                    return true;
                } else
                    return false;
                this.p_controlsMouseMoveLast.add(ctl);
                return true;
            });

            this.p_controlsPreviewMouseMove.clear();
            this.p_controlsMouseMove.clear();
        };

        /*====================================================================*
        START: Events
        *====================================================================*/
        Root.prototype.p_onTimerTick = function () {
            var _this = this;
            this.tick();
            window.requestAnimationFrame(function () {
                return _this.p_onTimerTick();
            });
        };

        //----- ticked
        Root.prototype.tick = function () {
            if (lux.g.isEmpty(this.p_animate.timerCounter))
                return;
            this.p_animate.tick();
            if (lux.g.isNotEmpty(this.p_renderer) && this.p_renderer.isRenderedOnTimer)
                this.render();
            //this.p_onTick();
            //this.controls.tickAll();
        };

        Root.prototype.p_setupEvents = function () {
            var _this = this;
            if (lux.g.isEmpty(this.p_elem)) {
                console.log('Error in Root.p_setupEvents. p_elem doesn\'t exist.');
                return;
            }

            //----- Mouse events
            this.p_elem.onmousedown = function (e) {
                return _this.p_onMouseDown(e);
            };
            window.onmousemove = function (e) {
                return _this.p_onMouseMove(e);
            };
            window.onmouseup = function (e) {
                return _this.p_onMouseUp(e);
            };
            this.p_elem.onmousewheel = function (e) {
                return _this.p_onMouseWheel(e);
            };

            //p_elem.onDoubleClick.listen(p_onMouseDblClick);
            //----- Touch events
            this.p_elem.addEventListener('touchstart', function (e) {
                _this.p_onTouchStart(e);
            }, true);
            document.body.addEventListener('touchend', function (e) {
                _this.p_onTouchEnd(e);
            }, true);
            document.body.addEventListener('touchmove', function (e) {
                _this.p_onTouchMoveProxy(e);
            }, true);
            //document.body.addEventListener('touchmove', (e: TouchEvent) => { this.p_onTouchMove(e); }, true);
            //----- HammerJS
            /*var hammer = new Hammer(this.p_elem);
            hammer.get('pinch').set({ enable: true });
            var that: Root = this;
            hammer.on('pinch', function (e: HammerEvent) {
            var delta: number = e.scale > that.p_pinchScalePrev ? 1 : -1;
            that.p_pinchScalePrev = e.scale;
            //console.log('pinch delta x: ' + e.velocityX + ', y: ' + e.velocityY);
            //console.log('pinch delta: ' + delta);
            
            var rootX: number = (e.center.x - that.p_elem.getBoundingClientRect().left) / that.scaleWidth;
            var rootY: number = (e.center.y - that.p_elem.getBoundingClientRect().top) / that.scaleHeight;
            var args: MouseEventArgs = new MouseEventArgs(
            this, new MouseButtons(), 0, new Point(rootX, rootY), new Point(rootX, rootY), delta
            );
            that.checkMouseWheel(args);
            
            //e.stopPropagation();
            e.preventDefault();
            });*/
            //----- Drag and drop
            //p_elem.onDragEnter.listen(p_onDragEnter);
            //p_elem.onDragOver.listen(p_onDragOver);
            //p_elem.onDrop.listen(p_onDragDrop);
            //----- Keyboard events
            //html.window.onKeyDown.listen(p_onKeyDown);
            //html.window.onKeyUp.listen(p_onKeyUp);
        };

        Root.prototype.p_onMouseMove = function (e) {
            var rootX = e.pageX;
            var rootY = e.pageY;
            var args = new lux.MouseEventArgs(this, new lux.MouseButtons(), 0, new lux.Point(rootX, rootY), new lux.Point(rootX, rootY), 0);
            this.checkMouseMove(args);

            e.cancelBubble = true;
            e.preventDefault();
        };

        Root.prototype.p_onTouchMoveProxy = function (e) {
             {
                //this.p_touchMoveTick = 0;
                this.p_onTouchMove(e);
            }

            //this.p_touchMoveTick++;
            e.cancelBubble = true;
            e.preventDefault();
        };
        Root.prototype.p_onTouchMove = function (e) {
            if (this.p_bPinching) {
                this.p_onTouchPinch(e);
                return;
            } else {
                var rootX = e.touches[0].pageX;
                var rootY = e.touches[0].pageY;

                this.p_lastTouchPoint = new lux.Point(rootX, rootY);

                var args = new lux.MouseEventArgs(null, new lux.MouseButtons(), 0, new lux.Point(rootX, rootY), new lux.Point(rootX, rootY), 0);

                this.checkMouseMove(args);
            }
        };
        Root.prototype.p_onTouchPinch = function (e) {
            var rootX = e.touches[0].pageX;
            var rootY = e.touches[0].pageY;

            var distance = Math.sqrt((e.touches[0].pageX - e.touches[1].pageX) * (e.touches[0].pageX - e.touches[1].pageX) + (e.touches[0].pageY - e.touches[1].pageY) * (e.touches[0].pageY - e.touches[1].pageY));

            var delta = distance > this.p_pinchDistancePrev ? 1 : -1;
            this.p_pinchDistancePrev = distance;

            //console.log('pinching: ' + delta);
            var args = new lux.MouseEventArgs(this, new lux.MouseButtons(), 0, new lux.Point(rootX, rootY), new lux.Point(rootX, rootY), delta);

            this.checkMouseWheel(args);
        };

        Root.prototype.p_onMouseDown = function (e) {
            var buttons = new lux.MouseButtons();

            switch (e.button) {
                case 0:
                    buttons.left = 0 /* PRESSED */;
                    break;
                case 1:
                    buttons.middle = 0 /* PRESSED */;
                    break;
                case 2:
                    buttons.right = 0 /* PRESSED */;
                    break;
            }

            var rootX = (e.clientX - this.p_elem.getBoundingClientRect().left) / this.scaleWidth;
            var rootY = (e.clientY - this.p_elem.getBoundingClientRect().top) / this.scaleHeight;

            var args = new lux.MouseEventArgs(this, buttons, 0, new lux.Point(rootX, rootY), new lux.Point(rootX, rootY), 0);
            if (e.button == 0)
                this.checkMouseLeftButtonDown(args);
            else if (e.button == 2)
                this.checkMouseRightButtonDown(args);

            e.cancelBubble = true;
            e.preventDefault();
        };

        Root.prototype.p_onTouchStart = function (e) {
            var rootX = e.touches[0].pageX;
            var rootY = e.touches[0].pageY;
            this.p_lastTouchPoint = new lux.Point(rootX, rootY);

            if (e.touches.length === 2) {
                this.p_bPinching = true;
                if (this.isMouseLeftButtonDown) {
                    var args = new lux.MouseEventArgs(this, new lux.MouseButtons(), 1, new lux.Point(rootX, rootY), new lux.Point(rootX, rootY), 0);
                    this.checkMouseLeftButtonUp(args);
                }
            } else if (e.touches.length === 1) {
                var buttons = new lux.MouseButtons();

                buttons.left = 0 /* PRESSED */;

                var args = new lux.MouseEventArgs(this, buttons, 0, new lux.Point(rootX, rootY), new lux.Point(rootX, rootY), 0);
                this.checkMouseLeftButtonDown(args);
            }

            e.cancelBubble = true;
            e.preventDefault();
        };

        Root.prototype.p_onMouseUp = function (e) {
            var rootX = (e.clientX - this.p_elem.getBoundingClientRect().left) / this.scaleWidth;
            var rootY = (e.clientY - this.p_elem.getBoundingClientRect().top) / this.scaleHeight;
            var args = new lux.MouseEventArgs(this, new lux.MouseButtons(), 1, new lux.Point(rootX, rootY), new lux.Point(rootX, rootY), 0);
            if (e.button == 0)
                this.checkMouseLeftButtonUp(args);
            else if (e.button == 2)
                this.checkMouseRightButtonUp(args);

            e.cancelBubble = true;
            e.preventDefault();
        };

        Root.prototype.p_onTouchEnd = function (e) {
            if (this.p_bPinching) {
                console.log('done pinching');
                this.p_bPinching = false;
            } else {
                var rootX = this.p_lastTouchPoint.x;
                var rootY = this.p_lastTouchPoint.y;

                var args = new lux.MouseEventArgs(this, new lux.MouseButtons(), 1, new lux.Point(rootX, rootY), new lux.Point(rootX, rootY), 0);
                this.checkMouseLeftButtonUp(args);
            }

            e.cancelBubble = true;
            e.preventDefault();
        };

        /*void p_onMouseDblClick(html.MouseEvent e)
        {
        num rootX = (e.client.x - p_elemRoot.getBoundingClientRect().left) / p_control.scaleWidth;
        num rootY = (e.client.y - p_elemRoot.getBoundingClientRect().top) / p_control.scaleHeight;
        MouseEventArgs args = new MouseEventArgs(this.control, new MouseButtons(), 2, new Point(rootX, rootY), new Point(rootX, rootY), 0);
        if (e.button == 0) this.control.checkMouseLeftButtonUp(args);
        else if (e.button == 2) this.control.checkMouseRightButtonUp(args);
        }*/
        Root.prototype.p_onMouseWheel = function (e) {
            var rootX = (e.clientX - this.p_elem.getBoundingClientRect().left) / this.scaleWidth;
            var rootY = (e.clientY - this.p_elem.getBoundingClientRect().top) / this.scaleHeight;
            var deltaY = 0 - e.wheelDelta;
            var args = new lux.MouseEventArgs(null, new lux.MouseButtons(), 0, new lux.Point(rootX, rootY), new lux.Point(rootX, rootY), deltaY);
            this.checkMouseWheel(args);

            e.cancelBubble = true;
            e.preventDefault();
        };

        //----- Fire event from an external class.
        Root.prototype.doKeyDown = function (e) {
            this.keyDown.dispatch(e);
        };

        //----- Fire event from an external class.
        Root.prototype.doKeyUp = function (e) {
            this.keyUp.dispatch(e);
        };
        return Root;
    })(lux.Control);
    lux.Root = Root;
})(lux || (lux = {})); // End of module
/// <reference path='../lux/proxies/color.ts' />
/// <reference path='../lux/animation/animEase.ts' />
/// <reference path='../app/manager.ts' />
var feed;
(function (feed) {
    var FeedConfig = (function () {
        function FeedConfig() {
        }
        Object.defineProperty(FeedConfig, "feedWidth", {
            get: function () {
                return FeedConfig._feedWidth;
            },
            set: function (value) {
                FeedConfig._feedWidth = value;
                FeedConfig.scale = value / 640;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(FeedConfig, "margin", {
            get: function () {
                return 36 * FeedConfig.scale;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeedConfig, "iconThickness", {
            get: function () {
                return 42 * FeedConfig.scale;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeedConfig, "iconThicknessSmall", {
            get: function () {
                return 32 * FeedConfig.scale;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeedConfig, "toolbarThicknessTop", {
            get: function () {
                return 96 * FeedConfig.scale;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeedConfig, "toolbarThicknessBottom", {
            get: function () {
                return 159 * FeedConfig.scale;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeedConfig, "maxTitleHeight", {
            get: function () {
                return 200 * FeedConfig.scale;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(FeedConfig, "fontBaseName", {
            get: function () {
                return FeedConfig.isMobile ? 'MRoboto' : 'Roboto';
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(FeedConfig, "fontToolbarTopFilter", {
            get: function () {
                var textStyle = new lux.TextStyle();

                textStyle.fontFamily = FeedConfig.fontBaseName + '-Medium';
                textStyle.fontSize = FeedConfig.fontBaseSize * 1.8 * FeedConfig.scale;
                textStyle.lineHeight = FeedConfig.fontBaseSize * 2.5 * FeedConfig.scale;

                return textStyle;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(FeedConfig, "fontTitleTextSmall", {
            get: function () {
                var textStyle = new lux.TextStyle();

                textStyle.fontFamily = FeedConfig.fontBaseName + '-Light';
                textStyle.fontSize = FeedConfig.fontBaseSize * 1.8 * FeedConfig.scale;
                textStyle.lineHeight = FeedConfig.fontBaseSize * 2.7 * FeedConfig.scale;
                textStyle.color = app.Manager.colorVeryLight;

                return textStyle;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(FeedConfig, "fontTitleTextLarge", {
            get: function () {
                var textStyle = new lux.TextStyle();

                textStyle.fontFamily = FeedConfig.fontBaseName + '-Thin';
                textStyle.fontSize = FeedConfig.fontBaseSize * 4 * FeedConfig.scale;
                textStyle.lineHeight = FeedConfig.fontBaseSize * 4 * FeedConfig.scale;
                textStyle.color = app.Manager.colorVeryLight;

                return textStyle;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(FeedConfig, "fontMeta", {
            get: function () {
                var textStyle = new lux.TextStyle();

                textStyle.fontFamily = FeedConfig.fontBaseName + '-Light';
                textStyle.fontSize = FeedConfig.fontBaseSize * 1.2 * FeedConfig.scale;
                textStyle.lineHeight = FeedConfig.fontBaseSize * 1.8 * FeedConfig.scale;
                textStyle.color = app.Manager.colorVeryDark;

                return textStyle;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(FeedConfig, "fontPhone", {
            get: function () {
                var textStyle = new lux.TextStyle();

                textStyle.fontFamily = FeedConfig.fontBaseName + '-Light';
                textStyle.fontSize = FeedConfig.fontBaseSize * 2.4 * FeedConfig.scale;
                textStyle.lineHeight = FeedConfig.fontBaseSize * 3 * FeedConfig.scale;
                textStyle.color = app.Manager.colorAccent;

                return textStyle;
            },
            enumerable: true,
            configurable: true
        });
        FeedConfig.isMobile = false;

        FeedConfig._feedWidth = 640;
        FeedConfig.scale = 1;

        FeedConfig.feedHeight = 1096;

        FeedConfig.colorToolbarTop = new lux.Color(255, 255, 255);
        FeedConfig.colorHighlight = new lux.Color(0, 216, 235);
        FeedConfig.colorFeedItemBackground = new lux.Color(118, 123, 130);

        FeedConfig.durationQuick = 0.2;
        FeedConfig.durationNormal = 0.4;
        FeedConfig.animEaseDefault = lux.AnimEase.getEasingFunction(3 /* QUARTIC */, 2 /* OUT */);
        FeedConfig.zoomSpeed = 0.25;
        FeedConfig.targetProxPos = 2;

        FeedConfig.fontBaseSize = 20;
        return FeedConfig;
    })();
    feed.FeedConfig = FeedConfig;
})(feed || (feed = {}));
/// <reference path='../events.ts' />
var lux;
(function (lux) {
    var CollectionViewChangedEventArgs = (function (_super) {
        __extends(CollectionViewChangedEventArgs, _super);
        function CollectionViewChangedEventArgs(modelCollection, prevView) {
            _super.call(this);
            this.modelCollection = modelCollection;
            this.prevView = prevView;
        }
        return CollectionViewChangedEventArgs;
    })(lux.EventArgs);
    lux.CollectionViewChangedEventArgs = CollectionViewChangedEventArgs;

    var ModelCollection = (function () {
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function ModelCollection(parentModel, view) {
            if (typeof parentModel === "undefined") { parentModel = null; }
            if (typeof view === "undefined") { view = null; }
            /*====================================================================*
            START: Member Variables and Properties
            *====================================================================*/
            this.p_list = new lux.List();
            this.p_mapID = new lux.Map();
            this.p_attributes = new lux.Attributes();
            this.p_view = null;
            /*--------------------------------------------------------------------*
            START: Child Model Events
            *--------------------------------------------------------------------*/
            this.viewChanged = new lux.Signal();
            this.modelAdded = new lux.Signal();
            this.modelRemoved = new lux.Signal();
            this.modelOpened = new lux.Signal();
            this.modelClosed = new lux.Signal();
            this.modelSelected = new lux.Signal();
            this.modelDeselected = new lux.Signal();
            this.viewUpdated = new lux.Signal();
            if (parentModel != null)
                this.p_parentModel = parentModel;

            if (view != null)
                this.view = view;
            else
                this.view = new lux.CollectionView();
        }
        Object.defineProperty(ModelCollection.prototype, "length", {
            //----- length
            get: function () {
                return this.p_list.length;
            },
            set: function (l) {
                this.p_list.length = l;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ModelCollection.prototype, "attributes", {
            //----- attributes
            get: function () {
                return this.p_attributes;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ModelCollection.prototype, "view", {
            //----- view
            get: function () {
                return this.p_view;
            },
            set: function (value) {
                var models = this;
                var prevView = this.p_view;
                if (this.p_view != null)
                    this.p_view.deactivate();
                this.p_view = value;
                this.p_view.activate(models);

                this._doViewChanged(models, prevView);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ModelCollection.prototype, "parentModel", {
            //----- parentModel
            get: function () {
                return this.p_parentModel;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ModelCollection.prototype, "modelLastOpened", {
            //----- modelLastOpened
            get: function () {
                return this.p_modelLastOpened;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ModelCollection.prototype, "modelLastClosed", {
            //----- modelLastClosed
            get: function () {
                return this.p_modelLastClosed;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ModelCollection.prototype, "modelLastSelected", {
            //----- ModelLastSelected
            get: function () {
                return this.p_modelLastSelected;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Event Handlers
        *====================================================================*/
        ModelCollection.prototype.p_onAttachedToModelSystemAll = function () {
            for (var i = 0; i < this.p_list.length; i++) {
                this.p_list.item(i).p_model_onAttachedToModelSystem();
            }
        };

        /*--------------------------------------------------------------------*
        START: Parent Model Events
        *--------------------------------------------------------------------*/
        ModelCollection.prototype._doParentModelOpened = function (args) {
            this.p_onParentModelOpened(args);
        };
        ModelCollection.prototype.p_onParentModelOpened = function (args) {
        };

        ModelCollection.prototype._doParentModelClosed = function (args) {
            this.p_onParentModelClosed(args);
        };
        ModelCollection.prototype.p_onParentModelClosed = function (args) {
        };

        ModelCollection.prototype._doViewChanged = function (modelCollection, prevView) {
            var models = this;
            this.viewChanged.dispatch(new CollectionViewChangedEventArgs(models, prevView));
            this.p_onViewChanged(models, prevView);
        };
        ModelCollection.prototype.p_onViewChanged = function (modelCollection, prevView) {
        };

        ModelCollection.prototype._doModelAdded = function (args) {
            this.modelAdded.dispatch(args);
            this.p_onModelAdded(args);
        };
        ModelCollection.prototype.p_onModelAdded = function (args) {
        };

        ModelCollection.prototype._doModelRemoved = function (args) {
            this.modelRemoved.dispatch(args);
            this.p_onModelRemoved(args);
        };
        ModelCollection.prototype.p_onModelRemoved = function (args) {
        };

        ModelCollection.prototype._doModelOpened = function (args) {
            this.modelOpened.dispatch(args);
            this.p_onModelOpened(args);
            this.p_modelLastOpened = args.model;
        };
        ModelCollection.prototype.p_onModelOpened = function (args) {
        };

        ModelCollection.prototype._doModelClosed = function (args) {
            this.modelClosed.dispatch(args);
            this.p_onModelClosed(args);
            this.p_modelLastClosed = args.model;
        };
        ModelCollection.prototype.p_onModelClosed = function (args) {
        };

        ModelCollection.prototype._doModelSelected = function (args) {
            this.modelSelected.dispatch(args);
            this.p_onModelSelected(args);
            this.p_modelLastSelected = args.model;
        };
        ModelCollection.prototype.p_onModelSelected = function (args) {
        };

        ModelCollection.prototype._doModelDeselected = function (args) {
            this.modelDeselected.dispatch(args);
            this.p_onModelDeselected(args);
        };
        ModelCollection.prototype.p_onModelDeselected = function (args) {
        };

        ModelCollection.prototype.doViewUpdated = function (bAnimate) {
            this.viewUpdated.dispatch(new lux.CollectionViewUpdatedEventArgs(bAnimate));
        };

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        ModelCollection.prototype.getByID = function (ID) {
            return this.p_mapID.getValue(ID);
        };

        ModelCollection.prototype.add = function (model, bAnimate, index) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            try  {
                if (this.p_list.contains(model))
                    return model;

                this.p_list.add(model, index);
                this.p_mapID.setValue(model.ID, model);

                model.p_parentCollection = this;

                if (this.p_parentModel != null && this.p_parentModel.root != null) {
                    model.p_model_onAttachedToModelSystem();
                }

                model.opened.listen(this._doModelOpened, this);
                model.closed.listen(this._doModelClosed, this);
                model.selected.listen(this._doModelSelected, this);
                model.deselected.listen(this._doModelDeselected, this);

                this._doModelAdded(new lux.ModelEventArgs(model, bAnimate));

                return model;
            } catch (e) {
                console.log("Error adding a Model: " + e);
                return null;
            }
        };

        ModelCollection.prototype.remove = function (model, bAnimate) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            this._doModelRemoved(new lux.ModelEventArgs(model, bAnimate));

            var bModelInList = this.p_list.remove(model);
            if (!bModelInList)
                return false;

            this.p_mapID.remove(model.ID);

            if (this.p_parentModel != null && this.p_parentModel.root != null) {
                model.p_model_onRemovedFromModelSystem();
            }

            model.opened.remove(this._doModelOpened, this);
            model.closed.remove(this._doModelClosed, this);
            model.selected.remove(this._doModelSelected, this);
            model.deselected.remove(this._doModelDeselected, this);

            model.p_parentCollection = null;

            return true;
        };

        ModelCollection.prototype.removeAt = function (index, bAnimate) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            if (index > this.p_list.length - 1 || index < 0)
                return false;
            else {
                var model = this.p_list.item(index);
                if (model == null)
                    return false;
                return this.remove(model, bAnimate);
            }
        };

        ModelCollection.prototype.clear = function () {
            var _this = this;
            this.p_list.forEach(function (model) {
                return _this.remove(model, false);
            });
        };

        ModelCollection.prototype.closeAll = function () {
            for (var i = 0; i < this.p_list.length; i++) {
                var model = this.p_list.item(i);
                if (model.isOpen) {
                    model.models.closeAll();
                    model.close();
                }
            }
        };

        ModelCollection.prototype.model = function (index) {
            return this.p_list.item(index);
        };

        ModelCollection.prototype.replace = function (model, index) {
            return this.p_list.replace(model, index);
        };

        /*void sort(IComparer comparer)
        {
        this.p_list.sort(comparer);
        }*/
        ModelCollection.prototype.indexOf = function (model) {
            return this.p_list.indexOf(model);
        };

        ModelCollection.prototype.closeLastOpenedModel = function (bAnimate, bIgnoreOriginalValues) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            if (typeof bIgnoreOriginalValues === "undefined") { bIgnoreOriginalValues = false; }
            var model = this.p_modelLastOpened;
            if (model != null && model.isOpen) {
                this.p_view.isIgnoreOriginalValuesOnModelClose = bIgnoreOriginalValues;

                model.close(bAnimate);
                return model;
            } else
                return null;
        };

        ModelCollection.prototype.deselectLastSelectedModel = function (bAnimate) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            if (this.p_view == null || this.p_view.models == null)
                return null;

            var model = this.p_view.models.modelLastSelected;
            if (model != null && model.isSelected) {
                model.deselect(bAnimate);
                return model;
            } else
                return null;
        };
        return ModelCollection;
    })();
    lux.ModelCollection = ModelCollection;
})(lux || (lux = {})); // End of module
/// <reference path="pointBase.ts" />
/// <reference path="coordSys.ts" />
var lux;
(function (lux) {
    var VectorBase = (function (_super) {
        __extends(VectorBase, _super);
        function VectorBase(x, y, z, coordSys) {
            if (typeof x === "undefined") { x = 0; }
            if (typeof y === "undefined") { y = 0; }
            if (typeof z === "undefined") { z = 0; }
            if (typeof coordSys === "undefined") { coordSys = null; }
            _super.call(this, x, y, z, coordSys);
        }
        /*====================================================================*
        START: Methods
        *====================================================================*/
        /**
        * Get the scalar product of two VectorBase<T>
        */
        VectorBase.prototype.dot = function (v) {
            var v_data = v.dataCopy;
            if (this.p_data.length != v_data.length)
                throw new Error('Vectors of different dimensions.');
            var erg = 0.0;
            for (var i = 0; i < this.p_data.length; i++)
                erg += this.p_data.item(i) * v_data.item(i);

            return erg;
        };

        /**
        * Returns the normalized version of the structure.
        */
        VectorBase.prototype.normalize = function () {
            var m = this.magnitude;

            if (m <= lux.ProxyBase.tolerance)
                m = 1.0;

            for (var i = 0; i < this.p_data.length; i++) {
                this.p_data.replace(this.p_data.item(i) / m, i);
                if (Math.abs(this.p_data.item(i)) < lux.ProxyBase.tolerance)
                    this.p_data.replace(0.0, i);
            }

            this.propertyChanged.dispatch(new lux.PropertyChangedEventArgs('data', this.p_data));
            return this;
        };
        return VectorBase;
    })(lux.PointBase);
    lux.VectorBase = VectorBase;
})(lux || (lux = {}));
/// <reference path='vectorBase.ts' />
var lux;
(function (lux) {
    var Vector3 = (function (_super) {
        __extends(Vector3, _super);
        function Vector3(x, y, z, coordSys) {
            if (typeof x === "undefined") { x = null; }
            if (typeof y === "undefined") { y = null; }
            if (typeof z === "undefined") { z = null; }
            if (typeof coordSys === "undefined") { coordSys = null; }
            _super.call(this, x, y, z, coordSys);
        }
        Vector3.fromList = function (data) {
            return new Vector3(data.item(0), data.item(1), data.item(2));
        };

        Vector3.fromPoint = function (pt) {
            return new Vector3(pt.x, pt.y, pt.z, pt.coordSys);
        };

        Vector3.copy = function (vector) {
            return new Vector3(vector.x, vector.y, vector.z, vector.coordSys);
        };

        Object.defineProperty(Vector3, "empty", {
            get: function () {
                return new Vector3();
            },
            enumerable: true,
            configurable: true
        });

        Vector3.prototype.out = function () {
            return new Vector3(this.x + this.coordSys.x, this.coordSys.y - this.y, this.z + this.coordSys.z);
        };
        return Vector3;
    })(lux.VectorBase);
    lux.Vector3 = Vector3;
})(lux || (lux = {}));
/// <reference path='proxies/vector3.ts' />
/// <reference path='control.ts' />
var lux;
(function (lux) {
    var ElasticPoints = (function () {
        function ElasticPoints() {
            this._bEnabled = false;
            /*====================================================================*
            START: Properties and Variables
            *====================================================================*/
            this.leader = new lux.Vector3(0, 0, 0);
            this.chaser = new lux.Vector3(0, 0, 0);
            this._CHASE_SPEED_START = 1;
            this._MAX_CHASE_DISTANCE = 10000;
            this._chaseSpeed = new lux.Vector3(0, 0, 0);
            /**
            * Increased speed with distance.
            * 1 = no increase in speed. Higher numbers increase speed more with distance.
            */
            this.acceleration = 0.75;
            this._OFFSET_FACTOR = 1.0;
            this._direction = 0;
            this._bLeaderCaught = true;
            this._leaderCaughtTicks = 0;
            this.changeFactorMinDelta = 0.001;
            this.changeFactorMaxDelta = 0.99;
            this._changeFactor = 0;
            //----- Ticks to wait before registering a catch.
            //----- Prevents stuttering and false hits when the leader is in motion.
            this._WAIT_BEFORE_CATCHING_TICKS = 20;
        }
        Object.defineProperty(ElasticPoints.prototype, "isEnabled", {
            /*====================================================================*
            START: Drag Zooming
            *====================================================================*/
            get: function () {
                return this._bEnabled;
            },
            set: function (value) {
                if (value && !this._bEnabled) {
                    this._chaseSpeed.x = this._CHASE_SPEED_START;
                    this._chaseSpeed.y = this._CHASE_SPEED_START;
                }

                this._bEnabled = value;
            },
            enumerable: true,
            configurable: true
        });

        ElasticPoints.prototype.tick = function () {
            if (this.isEnabled) {
                this._updateChase();
                this._applyValues();
            }
        };

        Object.defineProperty(ElasticPoints.prototype, "direction", {
            get: function () {
                return this._direction;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ElasticPoints.prototype, "isLeaderCaught", {
            get: function () {
                return this._bLeaderCaught;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ElasticPoints.prototype, "p", {
            get: function () {
                return this._changeFactor;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        ElasticPoints.prototype.startDebugging = function (debugControl) {
            this.debugControl = debugControl;
            this.chaserControl = new lux.Control();
            this.chaserControl.width = 6;
            this.chaserControl.height = 18;
            this.chaserControl.isAllowMouseEvents = false;
            this.chaserControl.style.background.color = new lux.Color(255, 0, 0);
            debugControl.controls.add(this.chaserControl);

            this.leaderControl = new lux.Control();
            this.leaderControl.width = 6;
            this.leaderControl.height = 6;
            this.leaderControl.isAllowMouseEvents = false;
            this.leaderControl.style.background.color = new lux.Color(0, 0, 0);
            debugControl.controls.add(this.leaderControl);
        };
        ElasticPoints.prototype.stopDebugging = function () {
            this.debugControl.controls.remove(this.chaserControl);
            this.debugControl.controls.remove(this.leaderControl);
            this.debugControl = null;
        };

        ElasticPoints.prototype.startChasing = function (leaderX, leaderY, chaserX, chaserY) {
            this.leader.x = leaderX;
            this.leader.y = leaderY;

            this.chaser.x = chaserX;
            this.chaser.y = chaserY;

            this._chaseSpeed.x = this._CHASE_SPEED_START;
            this._chaseSpeed.y = this._CHASE_SPEED_START;

            this.isEnabled = true;

            if (this.leaderControl != null) {
                this.leaderControl.x = this.leader.x;
                this.leaderControl.y = this.leader.y;
            }

            if (this.chaserControl != null) {
                this.chaserControl.x = this.chaser.x;
                this.chaserControl.y = this.chaser.y;
            }
        };

        /*====================================================================*
        START: Private Methods
        *====================================================================*/
        ElasticPoints.prototype._updateChase = function () {
            var vDiff = new lux.Vector3(this.leader.x - this.chaser.x, this.leader.y - this.chaser.y, 0);
            var vDirection = new lux.Vector3(vDiff.x, vDiff.y, 0);
            vDirection.normalize();
            vDiff.abs();

            this.chaser.x += vDirection.x * this._chaseSpeed.x;
            this.chaser.y += vDirection.y * this._chaseSpeed.y;

            if (vDiff.x > this._MAX_CHASE_DISTANCE / this._OFFSET_FACTOR) {
                vDiff.x = this._MAX_CHASE_DISTANCE / this._OFFSET_FACTOR;
                this.chaser.x = this.leader.x - ((this._MAX_CHASE_DISTANCE / this._OFFSET_FACTOR) * vDirection.x);
            } else if (vDiff.x < this._CHASE_SPEED_START)
                this.chaser.x = this.leader.x;

            if (vDiff.y > this._MAX_CHASE_DISTANCE / this._OFFSET_FACTOR) {
                vDiff.y = this._MAX_CHASE_DISTANCE / this._OFFSET_FACTOR;
                this.chaser.y = this.leader.y - ((this._MAX_CHASE_DISTANCE / this._OFFSET_FACTOR) * vDirection.y);
            } else if (vDiff.y < this._CHASE_SPEED_START)
                this.chaser.y = this.leader.y;

            if (this.chaserControl != null) {
                this.chaserControl.x = this.chaser.x;
                this.chaserControl.y = this.chaser.y;
                if (this.chaser.x != this.leader.x && this.chaser.y != this.leader.y)
                    this.chaserControl.rotation = Math.atan2((this.chaser.y - this.leader.y), (this.chaser.x - this.leader.x)) / (Math.PI / 180) - 90;
            }

            this._chaseSpeed = new lux.Vector3(vDiff.x * vDirection.x * this._OFFSET_FACTOR, vDiff.y * vDirection.y * this._OFFSET_FACTOR);

            //----- The chase speed is greater the farther the two points are from one another.
            this._chaseSpeed.x = Math.ceil(Math.abs(this._chaseSpeed.x) * this.acceleration);
            this._chaseSpeed.y = Math.ceil(Math.abs(this._chaseSpeed.y) * this.acceleration);
        };

        ElasticPoints.prototype._applyValues = function () {
            var chaseSpeed = this._chaseSpeed.y;

            this._direction = -1;
            this._changeFactor = 0;
            if (chaseSpeed > 0) {
                this._direction = 1;
                this._leaderCaughtTicks = 0;

                var changeFactor = (this.changeFactorMaxDelta * (Math.abs(chaseSpeed) / this._MAX_CHASE_DISTANCE));
                if (changeFactor < this.changeFactorMinDelta)
                    changeFactor = this.changeFactorMinDelta;
            } else if (chaseSpeed < 0) {
                this._leaderCaughtTicks = 0;

                var changeFactor = (this.changeFactorMaxDelta * (Math.abs(chaseSpeed) / this._MAX_CHASE_DISTANCE));
                if (changeFactor < this.changeFactorMinDelta)
                    changeFactor = this.changeFactorMinDelta;
            } else {
                this._direction = 0;

                if (!this._bLeaderCaught) {
                    if (this._leaderCaughtTicks < this._WAIT_BEFORE_CATCHING_TICKS)
                        this._leaderCaughtTicks += 1;
                    else {
                        //----- The chaser caught the leader
                        this._leaderCaughtTicks = 0;
                        this._bLeaderCaught = true;
                        this.chaser.x = this.leader.x;
                        this.chaser.y = this.leader.y;
                        this.isEnabled = false;
                    }
                }
            }
        };
        return ElasticPoints;
    })();
    lux.ElasticPoints = ElasticPoints;
})(lux || (lux = {})); // End of module
/// <reference path='iControl.ts' />
/// <reference path='events.ts' />
/// <reference path='proxies/vector3.ts' />
/// <reference path='elasticPoints.ts' />
var lux;
(function (lux) {
    var ZoomDragManager = (function () {
        /**
        * This class requires tick() to be driven by a timer in the calling class.
        */
        function ZoomDragManager(zoomCtl) {
            this._deceleration = 0.85;
            this._bUseDeceleration = true;
            this._dragTrigger = 10.0;
            this._bMouseLftBtnDn = false;
            this._bTargetSetManually = false;
            this._bDragging = false;
            this._bDecelerating = false;
            //----- This will be set to true immediately after a drag completes,
            //----- and will then revert to false after the next time tick is called.
            this._bDragDone = false;
            this._ptMouseLftBtnDn = new lux.Point(0.0, 0.0);
            this._ptDragStart = new lux.Point(0.0, 0.0);
            this._ptLastMousePos = new lux.Point(0.0, 0.0);
            this._dragSpeedFactor = 1.0;
            this._ptDragSpeed = new lux.Point(0.0, 0.0);
            this._ptSpeed = new lux.Point(0.0, 0.0);
            this._speed = 0.2;
            this._zoomSpeedFactor = 1.0;
            this._widthOriginal = 100;
            this._heightOriginal = 100;
            this._zoomType = 1 /* SCALE */;
            this._bTargetScaleReached = true;
            this._targetScale = 1.0;
            this._startScale = 1.0;
            this._bTargetWidthReached = true;
            this._targetWidth = 100;
            this._bTargetHeightReached = true;
            this._targetHeight = 100;
            this._targetStretchWidthFactor = 1.0;
            this._startStretchWidthFactor = 1.0;
            this._currentStretchWidthFactor = 1.0;
            this._targetStretchHeightFactor = 1.0;
            this._startStretchHeightFactor = 1.0;
            this._currentStretchHeightFactor = 1.0;
            this._targetX = 0.0;
            this._bTargetXReached = true;
            this._targetY = 0.0;
            this._bTargetYReached = true;
            this._targetRotationX = 0.0;
            this._targetRotationY = 0.0;
            this._targetRotationZ = 0.0;
            this._bTargetsReached = true;
            this._targetProximityPosition = 1.0;
            this._targetProximityScale = 0.0001;
            this._ptTranslationPrev = new lux.Point(0.0, 0.0);
            this._scalePrev = 1.0;
            this._wheelScalePrev = 1.0;
            this._bConstrained = true;
            this._dragConstraintXMin = -1000000000.0;
            this._dragConstraintXMax = 1000000000.0;
            this._dragConstraintYMin = -1000000000.0;
            this._dragConstraintYMax = 1000000000.0;
            this._scaleConstraintMin = 0.01;
            this._scaleConstraintMax = 1000000000.0;
            this._bElasticX = false;
            this._bElasticY = false;
            this._bTiltOnXAxis = false;
            this._bTiltOnYAxis = false;
            this._bEnabled = false;
            this._elastic = new lux.ElasticPoints();
            /*====================================================================*
            START: Events
            *====================================================================*/
            this.targetsReached = new lux.Signal();
            this.targetXChanged = new lux.Signal();
            this.targetYChanged = new lux.Signal();
            this.targetWidthChanged = new lux.Signal();
            this.targetHeightChanged = new lux.Signal();
            this.targetScaleChanged = new lux.Signal();
            this.resized = new lux.Signal();
            /**
            * Only fires when the user manually zooms with the mouse wheel.
            */
            this.zoomed = new lux.Signal();
            this.dragged = new lux.Signal();
            this.dragDone = new lux.Signal();
            this.ticked = new lux.Signal();
            this._parentScaleAbs = 1.0;
            this._bRegisterMouseUp = true;
            //----- Use this to turn off deceleration if the user stop moving the mouse
            //----- for a moment after dragging, before they release the left mouse button.
            this._ticksSinceLastMouseMove = 0;
            this.isKeepWithinParentControlX = false;
            this.isKeepWithinParentControlY = false;
            /*--------------------------------------------------------------------*
            START: Update X
            *--------------------------------------------------------------------*/
            this._bSignalDraggedEvent = false;
            this._bSignalDragDoneEvent = false;
            this._zoomCtl = zoomCtl;

            this._zoomCtl.propertyChanged.listen(this._zoomCtl_propertyChanged, this);

            this._widthOriginal = this._zoomCtl.width;
            this._heightOriginal = this._zoomCtl.height;
            this._targetWidth = this._zoomCtl.width;
            this._targetHeight = this._zoomCtl.height;

            this._elastic.acceleration = 0.125;
            //----- Tilt debugging controls
            //this._zoomCtl.attachedToControlSystem.listen(this._tiltDebug, this);
        }
        Object.defineProperty(ZoomDragManager.prototype, "zoomControl", {
            /*====================================================================*
            START: Members & Properties
            *====================================================================*/
            get: function () {
                return this._zoomCtl;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "deceleration", {
            /// <summary>
            /// This value specifies how much inertia will be applied to the dragged object
            /// after it is released. A value of 0.0 will stop the object immediately, while
            /// a value of 1.0 will cause the object to continue moving indefinitely at it's
            /// current velocity.
            /// </summary>
            get: function () {
                return this._deceleration;
            },
            set: function (value) {
                this._deceleration = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "isUseDeceleration", {
            get: function () {
                return this._bUseDeceleration;
            },
            set: function (value) {
                this._bUseDeceleration = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "dragTrigger", {
            /// <summary>
            /// The distance the mouse needs to move before a drag is triggered.
            /// </summary>
            get: function () {
                return this._dragTrigger;
            },
            set: function (value) {
                this._dragTrigger = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "isTargetSetManually", {
            /// Have targets been set manually using the target property setters,
            /// as opposed to being set through mouse interactions.
            /// This value is reset to false once all targets have been reached.
            get: function () {
                return this._bTargetSetManually;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "isDragging", {
            get: function () {
                return this._bDragging;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "isDecelerating", {
            get: function () {
                return this._bDecelerating;
            },
            enumerable: true,
            configurable: true
        });

        ZoomDragManager.prototype.stopDragging = function () {
            if (this._bDragging)
                this._ptSpeed = new lux.Point(this._ptDragSpeed.x, this._ptDragSpeed.y);
            else
                this._ptSpeed = new lux.Point(0.0, 0.0);

            this._bDragging = false;
            this._bMouseLftBtnDn = false;
        };

        Object.defineProperty(ZoomDragManager.prototype, "mouseLftBtnDnPos", {
            get: function () {
                return this._ptMouseLftBtnDn;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "dragStartPoint", {
            get: function () {
                return this._ptDragStart;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "lastMousePos", {
            get: function () {
                return this._ptLastMousePos;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "dragSpeedFactor", {
            /// <summary>
            /// A multiplier that affects the drag speed of the canvas.
            /// </summary>
            get: function () {
                return this._dragSpeedFactor;
            },
            set: function (value) {
                this._dragSpeedFactor = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "dragSpeed", {
            get: function () {
                return this._ptDragSpeed;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "speed", {
            //----- Zoom variables.
            /// <summary>
            /// A multiplier that affects the transition speed of the canvas. Higher values are faster. 0 is instant.
            /// </summary>
            get: function () {
                return this._speed;
            },
            set: function (value) {
                this._speed = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "zoomSpeedFactor", {
            /// <summary>
            /// A multiplier that temporarily affects the zoom speed of the canvas. Resets after zoom targets are reached
            /// </summary>
            get: function () {
                return this._zoomSpeedFactor;
            },
            set: function (value) {
                this._zoomSpeedFactor = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "widthOriginal", {
            get: function () {
                return this._widthOriginal;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "heightOriginal", {
            get: function () {
                return this._heightOriginal;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "zoomType", {
            get: function () {
                return this._zoomType;
            },
            set: function (value) {
                this._zoomType = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "targetScale", {
            get: function () {
                return this._targetScale;
            },
            set: function (value) {
                if (this._targetScale === value)
                    return;
                this._startScale = this._zoomCtl.scaleWidth;
                this._targetScale = value;

                this._bTargetScaleReached = false;
                this._bTargetSetManually = true;
                this.targetScaleChanged.dispatch(new lux.ZoomDragEventArgs(this));
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "targetWidth", {
            get: function () {
                return this._targetWidth;
            },
            set: function (value) {
                if (this._targetWidth === value)
                    return;
                this._targetWidth = value;

                this._bTargetWidthReached = false;
                this._bTargetSetManually = true;
                this.targetWidthChanged.dispatch(new lux.ZoomDragEventArgs(this));
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "targetHeight", {
            get: function () {
                return this._targetHeight;
            },
            set: function (value) {
                if (this._targetHeight === value)
                    return;
                this._targetHeight = value;
                this._bTargetHeightReached = false;
                this._bTargetSetManually = true;
                this.targetHeightChanged.dispatch(new lux.ZoomDragEventArgs(this));
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "targetStretchWidthFactor", {
            get: function () {
                return this._targetStretchWidthFactor;
            },
            set: function (value) {
                if (this._targetStretchWidthFactor === value)
                    return;
                this._startStretchWidthFactor = this._currentStretchWidthFactor;
                this._targetStretchWidthFactor = value;
                this._bTargetSetManually = true;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "targetStretchHeightFactor", {
            get: function () {
                return this._targetStretchHeightFactor;
            },
            set: function (value) {
                if (this._targetStretchHeightFactor === value)
                    return;
                this._startStretchHeightFactor = this._currentStretchHeightFactor;
                this._targetStretchHeightFactor = value;
                this._bTargetSetManually = true;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "targetX", {
            get: function () {
                return this._targetX;
            },
            set: function (value) {
                if (this._targetX === value)
                    return;
                this._targetX = value;
                this._bTargetXReached = false;
                this._bTargetSetManually = true;
                this.targetXChanged.dispatch(new lux.ZoomDragEventArgs(this));
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "targetY", {
            get: function () {
                return this._targetY;
            },
            set: function (value) {
                if (this._targetY === value)
                    return;
                this._targetY = value;
                this._bTargetYReached = false;
                this._bTargetSetManually = true;
                this.targetYChanged.dispatch(new lux.ZoomDragEventArgs(this));
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "targetRotationX", {
            get: function () {
                return this._targetRotationX;
            },
            set: function (value) {
                this._targetRotationX = value;
                this._bTargetSetManually = true;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "targetRotationY", {
            get: function () {
                return this._targetRotationY;
            },
            set: function (value) {
                this._targetRotationY = value;
                this._bTargetSetManually = true;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "targetRotationZ", {
            get: function () {
                return this._targetRotationZ;
            },
            set: function (value) {
                this._targetRotationZ = value;
                this._bTargetSetManually = true;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "isTargetsReached", {
            get: function () {
                return this._bTargetsReached;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "targetProximityPosition", {
            /// <summary>
            /// When the x, or y values of the ZoomControl fall within this
            /// range of their targets, they will immediately hit the targets.
            /// </summary>
            get: function () {
                return this._targetProximityPosition;
            },
            set: function (value) {
                this._targetProximityPosition = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "targetProximityScale", {
            /// <summary>
            /// When the scale of the ZoomControl falls within this range
            /// of the TargetScale, it will immediately hit the target.
            /// </summary>
            get: function () {
                return this._targetProximityScale;
            },
            set: function (value) {
                this._targetProximityScale = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "isConstrained", {
            get: function () {
                return this._bConstrained;
            },
            set: function (value) {
                this._bConstrained = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "dragConstraintXMin", {
            get: function () {
                return this._dragConstraintXMin;
            },
            set: function (value) {
                this._dragConstraintXMin = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "dragConstraintXMax", {
            get: function () {
                return this._dragConstraintXMax;
            },
            set: function (value) {
                this._dragConstraintXMax = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "dragConstraintYMin", {
            get: function () {
                return this._dragConstraintYMin;
            },
            set: function (value) {
                this._dragConstraintYMin = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "dragConstraintYMax", {
            get: function () {
                return this._dragConstraintYMax;
            },
            set: function (value) {
                this._dragConstraintYMax = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "scaleConstraintMin", {
            get: function () {
                return this._scaleConstraintMin;
            },
            set: function (value) {
                this._scaleConstraintMin = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "scaleConstraintMax", {
            get: function () {
                return this._scaleConstraintMax;
            },
            set: function (value) {
                this._scaleConstraintMax = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "isElasticX", {
            get: function () {
                return this._bElasticX;
            },
            set: function (value) {
                this._bElasticX = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "isElasticY", {
            get: function () {
                return this._bElasticY;
            },
            set: function (value) {
                this._bElasticY = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "isTiltOnXAxis", {
            get: function () {
                return this._bTiltOnXAxis;
            },
            set: function (value) {
                this._bTiltOnXAxis = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "isTiltOnYAxis", {
            get: function () {
                return this._bTiltOnYAxis;
            },
            set: function (value) {
                this._bTiltOnYAxis = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "isEnabled", {
            get: function () {
                return this._bEnabled;
            },
            set: function (value) {
                this._bEnabled = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ZoomDragManager.prototype, "elastic", {
            get: function () {
                return this._elastic;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Event Handler Methods
        *====================================================================*/
        ZoomDragManager.prototype._zoomCtl_propertyChanged = function (args) {
            switch (args.propertyName) {
                case 'x':
                    this._targetX = this.constrainX(this._zoomCtl.x);
                    this.targetXChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    break;
                case 'y':
                    this._targetY = this.constrainY(this._zoomCtl.y);
                    this.targetYChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    break;
                case 'left':
                    this._targetX = this.constrainX(this._zoomCtl.x);
                    this.targetXChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    break;
                case 'top':
                    this._targetY = this.constrainY(this._zoomCtl.y);
                    this.targetYChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    break;
                case 'leftActual':
                    this._targetX = this.constrainX(args.value);
                    this.targetXChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    break;
                case 'topActual':
                    this._targetY = this.constrainY(args.value);
                    this.targetYChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    break;
                case 'scale':
                    this._targetScale = this.constrainScale(args.value);
                    this._targetX = this.constrainX(this._zoomCtl.x);
                    this._targetY = this.constrainY(this._zoomCtl.y);

                    this.targetScaleChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetXChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetYChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    break;
                case 'scaleWidth':
                    this._targetScale = this.constrainScale(args.value);
                    this._targetX = this.constrainX(this._zoomCtl.x);
                    this._targetY = this.constrainY(this._zoomCtl.y);
                    this._targetScale = this.constrainScale(args.value);

                    this.targetScaleChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetXChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetYChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    break;
                case 'scaleHeight':
                    this._targetScale = this.constrainScale(args.value);
                    this._targetX = this.constrainX(this._zoomCtl.x);
                    this._targetY = this.constrainY(this._zoomCtl.y);

                    this.targetScaleChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetXChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetYChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    break;
                case 'width':
                    var currentScale = this.constrainScale(this._zoomCtl.scaleWidth);
                    if (this._targetScale != currentScale) {
                        this._targetScale = currentScale;
                        this.targetScaleChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    }

                    this._widthOriginal = this._zoomCtl.width;
                    this._targetWidth = this._zoomCtl.width;
                    this._targetX = this.constrainX(this._zoomCtl.x);
                    this._targetY = this.constrainY(this._zoomCtl.y);
                    this.targetXChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetYChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetWidthChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    break;
                case 'height':
                    var currentScale = this.constrainScale(this._zoomCtl.scaleWidth);
                    if (this._targetScale != currentScale) {
                        this._targetScale = currentScale;
                        this.targetScaleChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    }

                    this._heightOriginal = this._zoomCtl.height;
                    this._targetHeight = this._zoomCtl.height;
                    this._targetX = this.constrainX(this._zoomCtl.x);
                    this._targetY = this.constrainY(this._zoomCtl.y);
                    this.targetXChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetYChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetHeightChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    break;
                case 'widthActual':
                    var currentScale = this.constrainScale(this._zoomCtl.scaleWidth);
                    if (this._targetScale != currentScale) {
                        this._targetScale = currentScale;
                        this.targetScaleChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    }

                    this._widthOriginal = this._zoomCtl.width;
                    this._targetWidth = this._zoomCtl.width;
                    this._targetX = this.constrainX(this._zoomCtl.x);
                    this._targetY = this.constrainY(this._zoomCtl.y);
                    this.targetXChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetYChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetWidthChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    break;
                case 'heightActual':
                    var currentScale = this.constrainScale(this._zoomCtl.scaleWidth);
                    if (this._targetScale != currentScale) {
                        this._targetScale = currentScale;
                        this.targetScaleChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    }

                    this._heightOriginal = this._zoomCtl.height;
                    this._targetHeight = this._zoomCtl.height;
                    this._targetX = this.constrainX(this._zoomCtl.x);
                    this._targetY = this.constrainY(this._zoomCtl.y);
                    this.targetXChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetYChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetHeightChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    break;
                case 'rotation':
                    this._targetRotationZ = args.value;
                    break;
                case 'rotationZ':
                    this._targetRotationZ = args.value;
                    break;
                case 'rotationX':
                    this._targetRotationX = args.value;
                    break;
                case 'rotationY':
                    this._targetRotationY = args.value;
                    break;
            }
        };

        ZoomDragManager.prototype.tick = function () {
            this._elastic.tick();

            if (this._bDragging)
                this._ticksSinceLastMouseMove++;

            /*if (this._bTiltOnXAxis || this._bTiltOnYAxis)
            {
            this._updateTiltSpeed();
            this._applyTilt();
            }*/
            if (!this._bEnabled || this._bMouseLftBtnDn)
                return;

            var bTargetsReached = true;

            if (!this._bTargetScaleReached) {
                console.log('zoomdrag updating scale');
                bTargetsReached = false;
                this._updateScale();
            }

            if (this._currentStretchWidthFactor != this._targetStretchWidthFactor) {
                bTargetsReached = false;
                this._updateStretchWidth();
            }

            if (this._currentStretchHeightFactor != this._targetStretchHeightFactor) {
                bTargetsReached = false;
                this._updateStretchHeight();
            }

            if (!this._bDragging) {
                //----- this._updateX and _updateY only take action if either we're decelerating after a drag,
                //----- or one of the position targets have not yet been reached. If we're decelerating after a drag,
                //----- constrainX and/or constrainY methods will be called, which will enable _elastic, if needed.
                this._updateX();
                this._updateY();

                //----- Check whether position targets have been reached.
                if (!this._bTargetXReached)
                    bTargetsReached = false;
                if (!this._bTargetYReached)
                    bTargetsReached = false;

                //----- START: Elastic
                //----- Check constraints and apply elastic, if needed
                if (this._elastic.isEnabled) {
                    //----- X
                    if (this._zoomCtl.x < this._dragConstraintXMin || this._zoomCtl.x > this._dragConstraintXMax) {
                        this._setX(this._elastic.chaser.x);
                    }

                    //----- Y
                    if (this._zoomCtl.y < this._dragConstraintYMin || this._zoomCtl.y > this._dragConstraintYMax) {
                        this._setY(this._elastic.chaser.y);
                    }

                    //----- If we're not outside constraints, this._elastic doesn't need to be running.
                    if (this._elastic.leader.x == this._elastic.chaser.x && this._elastic.leader.y == this._elastic.chaser.y) {
                        this._elastic.isEnabled = false;
                    }
                }
                //----- END: Elastic
            }

            //----- We must be decelerating after a drag, so fire a dragged Event.
            if (this._bSignalDraggedEvent) {
                this._bDecelerating = true;
                this._bSignalDraggedEvent = false;
                this.dragged.dispatch(new lux.ZoomDragEventArgs(this));
            } else {
                this._bDecelerating = false;

                if (this._bSignalDragDoneEvent) {
                    this._bSignalDragDoneEvent = false;
                    this.dragDone.dispatch(new lux.ZoomDragEventArgs(this));
                }
            }

            if (this._zoomCtl.rotationX != this._targetRotationX) {
                if (bTargetsReached)
                    bTargetsReached = false;
                this._updateRotationX();
            }
            if (this._zoomCtl.rotationY != this._targetRotationY) {
                if (bTargetsReached)
                    bTargetsReached = false;
                this._updateRotationY();
            }
            if (this._zoomCtl.rotationZ != this._targetRotationZ) {
                if (bTargetsReached)
                    bTargetsReached = false;
                this._updateRotationZ();
            }

            var bResized = false;
            if (!this._bTargetWidthReached) {
                if (bTargetsReached)
                    bTargetsReached = false;
                this._updateWidth();
                bResized = true;
            }

            if (!this._bTargetHeightReached) {
                if (bTargetsReached)
                    bTargetsReached = false;
                this._updateHeight();
                bResized = true;
            }

            if (bResized)
                this.resized.dispatch(new lux.ZoomDragEventArgs(this));

            if (!this._bTargetsReached)
                this.ticked.dispatch(new lux.ZoomDragEventArgs(this));
            if (!bTargetsReached && this._bTargetsReached)
                this._bTargetsReached = false;
            else if (bTargetsReached && !this._bTargetsReached) {
                //----- All the targets have been reached
                this._zoomSpeedFactor = 1.0; // Reset the speed factor
                this._bTargetsReached = true;
                this._bTargetSetManually = false; // Reset this, in case it has been set to true.
                this._setX(this.constrainX(this._targetX));
                this._setY(this.constrainY(this._targetY));
                this.targetsReached.dispatch(new lux.ZoomDragEventArgs(this)); // Let listeners: any know we've reached all targets.
            }

            //----- this._bDragDone gets set to true immediately after a drag completes,
            //----- and we need to revert it back to false the next time tick is called.
            if (this._bDragDone)
                this._bDragDone = false;
        };

        ZoomDragManager.prototype._setX = function (left) {
            this._zoomCtl.setXWithoutInvalidation(left);
            this._zoomCtl.invalidate();
        };

        ZoomDragManager.prototype._setY = function (top) {
            this._zoomCtl.setYWithoutInvalidation(top);
            this._zoomCtl.invalidate();
        };

        ZoomDragManager.prototype._setWidth = function (width) {
            this._zoomCtl.setWidthWithoutInvalidation(width);
            this._zoomCtl.invalidate();
        };

        ZoomDragManager.prototype._setHeight = function (height) {
            this._zoomCtl.setHeightWithoutInvalidation(height);
            this._zoomCtl.invalidate();
        };

        ZoomDragManager.prototype._setScale = function (scale) {
            this._zoomCtl.setScaleWidthWithoutInvalidation(scale);
            this._zoomCtl.setScaleHeightWithoutInvalidation(scale);
            this._zoomCtl.invalidate();
        };

        ZoomDragManager.prototype._setRotationX = function (rotation) {
            this._zoomCtl.setRotationXWithoutInvalidation(rotation);
            this._zoomCtl.invalidate();
        };

        ZoomDragManager.prototype._setRotationY = function (rotation) {
            this._zoomCtl.setRotationYWithoutInvalidation(rotation);
            this._zoomCtl.invalidate();
        };

        ZoomDragManager.prototype._setRotationZ = function (rotation) {
            this._zoomCtl.setRotationZWithoutInvalidation(rotation);
            this._zoomCtl.invalidate();
        };

        ZoomDragManager.prototype.mouseLeftButtonDown = function (e) {
            if (!this._bEnabled)
                return;

            this._bMouseLftBtnDn = true;

            //----- If the canvas is moving, just stop it and don't
            //----- register a mouseUp on any child controls.
            var speedBuffer = 10.0;
            if (Math.abs(this._ptSpeed.x) > speedBuffer && this._zoomCtl.x > this._dragConstraintXMin && this._zoomCtl.x < this._dragConstraintXMax) {
                this._ptSpeed.x = 0.0;
                this._ptSpeed.y = 0.0;
                this._ptDragSpeed.x = 0.0;
                this._ptDragSpeed.y = 0.0;
                this._bRegisterMouseUp = false;
            }

            if (Math.abs(this._ptSpeed.y) > speedBuffer && this._zoomCtl.y > this._dragConstraintYMin && this._zoomCtl.y < this._dragConstraintYMax) {
                this._ptSpeed.x = 0.0;
                this._ptSpeed.y = 0.0;
                this._ptDragSpeed.x = 0.0;
                this._ptDragSpeed.y = 0.0;
                this._bRegisterMouseUp = false;
            }

            //----- If we're moving very slowly, set _bDecelerating to false,
            //----- so a mouseup on a modelview will register.
            if (this._bRegisterMouseUp && Math.abs(this._ptSpeed.x) < speedBuffer && Math.abs(this._ptSpeed.y) < speedBuffer) {
                this._bDecelerating = false;
            }

            //----- Stop any scaling currently in effect.
            if (Math.abs(this._targetScale - this._zoomCtl.scaleWidth) > 0.0001) {
                this._targetScale = this._zoomCtl.scaleWidth;
                this._targetX = this._zoomCtl.x;
                this._targetY = this._zoomCtl.y;
                this.targetScaleChanged.dispatch(new lux.ZoomDragEventArgs(this));
                this._bRegisterMouseUp = false;
            }

            //----- Make sure we maintain the relative offset relationship between the drag position
            //----- and the tilt chaser position, when we start a drag in a new location, so that
            //----- we don't get jerky tilt movements.
            //if (this._bTiltOnXAxis || this._bTiltOnYAxis) this._startDragPositionUpdating(e.positionRoot.x, e.positionRoot.y);
            this._ptMouseLftBtnDn = new lux.Point(e.positionRoot.x, e.positionRoot.y);
            if (this._zoomCtl != null)
                this._ptDragStart = new lux.Point(this._zoomCtl.x, this._zoomCtl.y);
            this._ptLastMousePos = new lux.Point(this._ptMouseLftBtnDn.x, this._ptMouseLftBtnDn.y);
        };

        ZoomDragManager.prototype.mouseLeftButtonUp = function (e) {
            if (!this._bEnabled)
                return;

            var bContinueDeceleration = true;
            if (this._bDragging && this._ticksSinceLastMouseMove > 1) {
                bContinueDeceleration = false;
            }

            if (this._bDragging || !this._bRegisterMouseUp) {
                e.isHandled = true;
                if (bContinueDeceleration)
                    this._ptSpeed = new lux.Point(this._ptDragSpeed.x, this._ptDragSpeed.y);
                else {
                    this._ptSpeed.x = 0.0;
                    this._ptSpeed.y = 0.0;
                    this._ptDragSpeed.x = 0.0;
                    this._ptDragSpeed.y = 0.0;
                }
            } else {
                this._ptSpeed.x = 0.0;
                this._ptSpeed.y = 0.0;
                this._ptDragSpeed.x = 0.0;
                this._ptDragSpeed.y = 0.0;
            }

            this._bMouseLftBtnDn = false;
            if (this._bDragging)
                this._bDragDone = true;
            this._bDragging = false;
            this._bRegisterMouseUp = true;
        };

        ZoomDragManager.prototype.mouseMove = function (e, dragMultiplier) {
            if (typeof dragMultiplier === "undefined") { dragMultiplier = 1.0; }
            if (!this._bEnabled)
                return;

            this._ticksSinceLastMouseMove = 0;

            //----- If we're dragging and the user hasn't stopped moving the mouse, we need to update the drag speed.
            if (this._bDragging || this._ticksSinceLastMouseMove > 1) {
                this._ptDragSpeed.x = (e.positionRoot.x - this._ptLastMousePos.x) * this._dragSpeedFactor;
                this._ptDragSpeed.y = (e.positionRoot.y - this._ptLastMousePos.y) * this._dragSpeedFactor;

                //----- If the _zoomCtl.parent is scaled, we need to adjust the drag speed
                //----- so that the deceleration is consistent across scales.
                if (this._zoomCtl.parent != null) {
                    this._ptDragSpeed.x /= this._zoomCtl.parent.scale;
                    this._ptDragSpeed.y /= this._zoomCtl.parent.scale;
                }
            }

            if (this._bMouseLftBtnDn && this._zoomCtl != null) {
                try  {
                    this._ptLastMousePos.x = e.positionRoot.x;
                    this._ptLastMousePos.y = e.positionRoot.y;

                    var dragOffsetX = (e.positionRoot.x - this._ptMouseLftBtnDn.x) * dragMultiplier;
                    var dragOffsetY = (e.positionRoot.y - this._ptMouseLftBtnDn.y) * dragMultiplier;

                    //----- Since we're using mouse positions relative to the root control for all our drag calculations,
                    //----- we need to adjust the drag offsets to take scaling: any of parent controls into account.
                    if (this._zoomCtl.parent != null) {
                        dragOffsetX /= this._parentScaleAbs;
                        dragOffsetY /= this._parentScaleAbs;
                        dragOffsetX *= this._zoomCtl.root.scaleWidth;
                        dragOffsetY *= this._zoomCtl.root.scaleHeight;
                    }

                    if (!this._bDragging && Math.abs(dragOffsetX) >= this._dragTrigger || Math.abs(dragOffsetY) >= this._dragTrigger) {
                        this._bDragging = true;

                        //----- OK, now we've started dragging.
                        //----- Mark the scaleAbs of the parent, so we can use it to modify the drag offset.
                        this._parentScaleAbs = this._zoomCtl.parent.scaleWidthAbs;
                    }

                    /*====================================================================*
                    START: Dragging
                    *====================================================================*/
                    //----- If we're not dragging, no need to continue.
                    if (!this._bDragging)
                        return;

                    //----- If tilt is turned on, take care of tilting stuff.
                    /*if (this._bTiltOnXAxis || this._bTiltOnYAxis)
                    {
                    this._vDragPosition.x = e.positionRoot.x;
                    this._vDragPosition.y = e.positionRoot.y;
                    
                    //----- If this is the first time we're starting a drag,
                    //----- make sure the tilt chaser starts at the same point as the mouse,
                    //----- so there's no initial offset causing a jerky tilt at the beginning.
                    if (this._bFirstTilt)
                    {
                    this._vTiltChaserPosition.x = e.positionRoot.x;
                    this._vTiltChaserPosition.y = e.positionRoot.y;
                    this._bFirstTilt = false;
                    }
                    }*/
                    var xTmp = (this._ptDragStart.x + dragOffsetX);
                    var yTmp = (this._ptDragStart.y + dragOffsetY);

                    if (!this._bTargetXReached)
                        this._bTargetXReached = true;
                    if (!this._bTargetYReached)
                        this._bTargetYReached = true;

                    //----- START: Apply constraints
                    //----- X
                    var dragConstraintResistance = 0.25;
                    if (xTmp < this._dragConstraintXMin) {
                        if (this._bElasticX) {
                            xTmp = this._dragConstraintXMin - ((this._dragConstraintXMin - xTmp) * dragConstraintResistance);
                        } else
                            xTmp = this._dragConstraintXMin;
                    } else if (xTmp > this._dragConstraintXMax) {
                        if (this._bElasticX) {
                            xTmp = this._dragConstraintXMax + ((xTmp - this._dragConstraintXMax) * dragConstraintResistance);
                        } else
                            xTmp = this._dragConstraintXMax;
                    }

                    //----- Y
                    if (yTmp < this._dragConstraintYMin) {
                        if (this._bElasticY) {
                            yTmp = this._dragConstraintYMin - ((this._dragConstraintYMin - yTmp) * dragConstraintResistance);
                        } else
                            yTmp = this._dragConstraintYMin;
                    } else if (yTmp > this._dragConstraintYMax) {
                        if (this._bElasticY) {
                            yTmp = this._dragConstraintYMax + ((yTmp - this._dragConstraintYMax) * dragConstraintResistance);
                        } else
                            yTmp = this._dragConstraintYMax;
                    }

                    //----- END: Apply constraints
                    this._targetX = xTmp;
                    this._targetY = yTmp;
                    this._setX(this._targetX);
                    this._setY(this._targetY);

                    this.dragged.dispatch(new lux.ZoomDragEventArgs(this));
                } catch (e) {
                    console.log("Error in ZoomDragManager.mouseMove: " + e);
                }
            }
        };

        ZoomDragManager.prototype.mouseWheel = function (e) {
            if (!this._bEnabled)
                return;
            var zoomFactor = 1.0;
            if (e.wheelDelta > 0.0)
                zoomFactor = 1.5;
            else
                zoomFactor = 0.5;

            this.zoom(e.positionLocal, zoomFactor);
        };

        /*====================================================================*
        START: Methods
        *====================================================================*/
        /// ptFocus is the position relative to the zoom control.
        ZoomDragManager.prototype.zoom = function (ptFocus, zoomFactor) {
            if (typeof zoomFactor === "undefined") { zoomFactor = 1.5; }
            if (!this._bEnabled)
                return;

            try  {
                //----- Get the focal position relative to _zoomCtl.
                var ptFinal = new lux.Point(ptFocus.x, ptFocus.y);

                if (this._zoomType == 1 /* SCALE */) {
                    //----- Set the scale
                    this._startScale = this._zoomCtl.scaleWidth;
                    var finalScale = this._startScale * zoomFactor;
                    console.log('start scale: ' + this._startScale + ', zoomFactor: ' + zoomFactor + ', finalScale: ' + finalScale);

                    //----- Make sure _zoomCtl doesn't get bigger than the drag constraints will allow.
                    //----- Set the target scale.
                    var prevScale = this._targetScale;
                    this._targetScale = this.constrainScale(finalScale);
                    console.log('target scale: ' + this._targetScale);

                    //----- Get the scaled mouse position.
                    var ptRelative = new lux.Point((ptFocus.x - this._zoomCtl.x) / this._startScale, (ptFocus.y - this._zoomCtl.y) / this._startScale);
                    var ptScaled = new lux.Point(ptRelative.x * this._targetScale, ptRelative.y * this._targetScale);

                    //----- Now we can find the final position for _zoomCtl.
                    ptFinal = new lux.Point(ptFocus.x - ptScaled.x, ptFocus.y - ptScaled.y);

                    //----- Now constrain the position, based on updated: any constraints.
                    /*if (this._targetScale > prevScale)
                    {
                    this._targetX = ptFinal.x;
                    this._targetY = ptFinal.y;
                    }
                    else
                    {*/
                    this._targetX = this.constrainX(ptFinal.x, true);
                    this._targetY = this.constrainY(ptFinal.y, true);

                    //}
                    this._bTargetXReached = false;
                    this._bTargetYReached = false;
                    this._bTargetScaleReached = false;

                    this.zoomed.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetScaleChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetXChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetYChanged.dispatch(new lux.ZoomDragEventArgs(this));
                } else if (this._zoomType == 2 /* STRETCH_HORIZONTALLY */ || this._zoomType == 3 /* STRETCH_VERTICALLY */ || this._zoomType == 4 /* STRETCH_BOTH */) {
                    //----- Set the stretch factor
                    this._startStretchWidthFactor = this._currentStretchWidthFactor;
                    var finalStretchWidthFactor = this._startStretchWidthFactor;
                    this._startStretchHeightFactor = this._currentStretchHeightFactor;
                    var finalStretchHeightFactor = this._startStretchHeightFactor;

                    var stretchWidthBy = 1.0;
                    var stretchHeightBy = 1.0;
                    if (zoomFactor > 1.0) {
                        if (this._zoomType == 2 /* STRETCH_HORIZONTALLY */ || this._zoomType == 4 /* STRETCH_BOTH */) {
                            stretchWidthBy = zoomFactor;
                        }
                        if (this._zoomType == 3 /* STRETCH_VERTICALLY */ || this._zoomType == 4 /* STRETCH_BOTH */) {
                            stretchHeightBy = zoomFactor;
                        }
                    } else {
                        if (this._zoomType == 2 /* STRETCH_HORIZONTALLY */ || this._zoomType == 4 /* STRETCH_BOTH */) {
                            stretchWidthBy = zoomFactor;
                        }
                        if (this._zoomType == 3 /* STRETCH_VERTICALLY */ || this._zoomType == 4 /* STRETCH_BOTH */) {
                            stretchHeightBy = zoomFactor;
                        }
                    }

                    finalStretchWidthFactor *= stretchWidthBy;
                    finalStretchHeightFactor *= stretchHeightBy;

                    //----- Make sure _zoomCtl doesn't get bigger than the drag constraints will allow.
                    finalStretchWidthFactor = this.constrainScale(finalStretchWidthFactor);
                    finalStretchHeightFactor = this.constrainScale(finalStretchHeightFactor);

                    var ptRelative = new lux.Point((ptFocus.x - this._zoomCtl.x) / this._startStretchWidthFactor, (ptFocus.y - this._zoomCtl.y) / this._startStretchHeightFactor);

                    //----- Get the scaled mouse position.
                    var ptScaled = new lux.Point(ptRelative.x * finalStretchWidthFactor, ptRelative.y * finalStretchHeightFactor);

                    //----- Now we can find the final position for _zoomCtl.
                    if (this._zoomType == 2 /* STRETCH_HORIZONTALLY */) {
                        ptFinal.x = this.constrainX(ptFocus.x - ptScaled.x);
                        ptFinal.y = this._zoomCtl.y;
                    } else if (this._zoomType == 3 /* STRETCH_VERTICALLY */) {
                        ptFinal.x = this._zoomCtl.x;
                        ptFinal.y = this.constrainX(ptFocus.y - ptScaled.y);
                    } else if (this._zoomType == 4 /* STRETCH_BOTH */) {
                        ptFinal.x = this.constrainX(ptFocus.x - ptScaled.x);
                        ptFinal.y = this.constrainX(ptFocus.y - ptScaled.y);
                    }

                    //----- Set the target stretch factor.
                    this._targetStretchWidthFactor = finalStretchWidthFactor;
                    this._targetStretchHeightFactor = finalStretchHeightFactor;

                    this._targetX = this.constrainX(ptFinal.x);
                    this._targetY = this.constrainY(ptFinal.y);

                    this._bTargetXReached = false;
                    this._bTargetYReached = false;

                    this.targetXChanged.dispatch(new lux.ZoomDragEventArgs(this));
                    this.targetYChanged.dispatch(new lux.ZoomDragEventArgs(this));
                }
            } catch (e) {
                console.log("Error in ZoomDragManager.mouseWheel: " + e);
            }
        };

        ZoomDragManager.prototype.constrainX = function (x, bIgnoreElastic) {
            if (typeof bIgnoreElastic === "undefined") { bIgnoreElastic = false; }
            if (!this._bConstrained)
                return x;

            if (this.isKeepWithinParentControlX)
                this._keepWithinParentControlX();

            if (x < this._dragConstraintXMin) {
                if (this._bElasticX && !bIgnoreElastic) {
                    //----- We're to the left of the right constraint and we need to get back to it smoothly.
                    //----- First stop moving.
                    this._ptSpeed.x = 0.0;
                    this._ptDragSpeed.x = 0.0;

                    this._elastic.leader.x = this._dragConstraintXMin;
                    this._elastic.chaser.x = this._zoomCtl.x;
                    this._elastic.isEnabled = true;
                } else
                    x = this._dragConstraintXMin;
            } else if (x > this._dragConstraintXMax) {
                if (this._bElasticX && !bIgnoreElastic) {
                    //----- We're to the right the left constraint and we need to get back to it smoothly.
                    //----- First stop moving.
                    this._ptSpeed.x = 0.0;
                    this._ptDragSpeed.x = 0.0;

                    this._elastic.leader.x = this._dragConstraintXMax;
                    this._elastic.chaser.x = this._zoomCtl.x;
                    this._elastic.isEnabled = true;
                } else
                    x = this._dragConstraintXMax;
            }

            return x;
        };

        ZoomDragManager.prototype._keepWithinParentControlX = function () {
            if (this._zoomCtl.parent == null)
                return;
            var width = this._zoomCtl.width * this._zoomCtl.scaleWidth;
            if (this._zoomCtl.scaleWidth < this._targetScale)
                width = this._zoomCtl.width * this._targetScale;
            this._dragConstraintXMin = this._zoomCtl.parent.width - width;

            this._dragConstraintXMax = 0;
        };

        ZoomDragManager.prototype.constrainY = function (y, bIgnoreElastic) {
            if (typeof bIgnoreElastic === "undefined") { bIgnoreElastic = false; }
            if (!this._bConstrained)
                return y;

            if (this.isKeepWithinParentControlY)
                this._keepWithinParentControlY();

            if (y < this._dragConstraintYMin) {
                if (this._bElasticY && !bIgnoreElastic) {
                    //----- We're above the bottom constraint and we need to get back to it smoothly.
                    //----- First stop moving.
                    this._ptSpeed.y = 0.0;
                    this._ptDragSpeed.y = 0.0;

                    this._elastic.leader.y = this._dragConstraintYMin;
                    this._elastic.chaser.y = this._zoomCtl.y;
                    this._elastic.isEnabled = true;
                } else
                    y = this._dragConstraintYMin;
            } else if (y > this._dragConstraintYMax) {
                if (this._bElasticY && !bIgnoreElastic) {
                    //----- We're below the top constraint and we need to get back to it smoothly.
                    //----- First stop moving.
                    this._ptSpeed.y = 0.0;
                    this._ptDragSpeed.y = 0.0;

                    this._elastic.leader.y = this._dragConstraintYMax;
                    this._elastic.chaser.y = this._zoomCtl.y;
                    this._elastic.isEnabled = true;
                } else
                    y = this._dragConstraintYMax;
            }

            return y;
        };

        ZoomDragManager.prototype._keepWithinParentControlY = function () {
            if (this._zoomCtl.parent == null)
                return;
            var height = this._zoomCtl.height * this._zoomCtl.scaleHeight;
            if (this._zoomCtl.scaleHeight < this._targetScale)
                height = this._zoomCtl.height * this._targetScale;
            this._dragConstraintYMin = this._zoomCtl.parent.height - height;

            this._dragConstraintYMax = 0;
        };

        ZoomDragManager.prototype.constrainScale = function (scale) {
            if (!this._bConstrained)
                return scale;

            var scaleTest = scale;

            if (scaleTest < this._scaleConstraintMin)
                scaleTest = this._scaleConstraintMin;
            if (scaleTest > this._scaleConstraintMax)
                scaleTest = this._scaleConstraintMax;

            return scaleTest;
        };

        /*--------------------------------------------------------------------*
        START: Update Scale
        *--------------------------------------------------------------------*/
        ZoomDragManager.prototype._updateScale = function () {
            try  {
                var value = this._zoomCtl.scaleWidth;

                //----- Save current values and use the saved values in calculations,
                //----- so that things don't get messed up if the anchor point's not at (0, 0).
                var diff = this._targetScale - value;

                if (Math.abs(diff) > this._targetProximityScale) {
                    var speed = (this._speed * this._zoomSpeedFactor) * Math.abs(diff);

                    if (diff > 0.0) {
                        value += Math.abs(diff / (diff / speed));
                        if (value > this._targetScale)
                            value = this._targetScale;
                    } else if (diff < 0.0) {
                        value -= Math.abs(diff / (diff / speed));
                        if (value < this._targetScale)
                            value = this._targetScale;
                    }

                    this._setScale(value);
                } else {
                    this._setScale(this._targetScale);
                    this._bTargetScaleReached = true;
                }
            } catch (e) {
                console.log("Error in ZoomDragManager.updateScale: " + e.toString());
            }
        };

        ZoomDragManager.prototype._updateX = function () {
            try  {
                //----- Handle drag deceleration.
                if (!this._bDragging && this._bTargetXReached && this._zoomCtl != null) {
                    if (this._bDragDone || this._ptDragSpeed.x != 0.0 || this._ptSpeed.x != 0.0) {
                        //----- this._bDragDone is true immediately after a drag, even if the speed is 0.
                        if (this._bUseDeceleration) {
                            var tolerance = 1.0;

                            if (Math.abs(this._ptSpeed.x) > tolerance)
                                this._ptSpeed.x *= this._deceleration;
                            else
                                this._ptSpeed.x = 0.0;

                            if (Math.abs(this._ptDragSpeed.x) > tolerance)
                                this._ptDragSpeed.x *= this._deceleration;
                            else
                                this._ptDragSpeed.x = 0.0;

                            this._bSignalDraggedEvent = true;
                            this._bSignalDragDoneEvent = true;
                        } else {
                            this._ptSpeed.x = 0.0;
                            this._ptDragSpeed.x = 0.0;
                        }

                        var xTmp = this._zoomCtl.x + this._ptSpeed.x;

                        //----- Update _targetX to reflect the actual position of the control.
                        this._targetX = this.constrainX(xTmp);
                        this._setX(this._targetX);
                    } else {
                        //----- We didn't just finish a drag and we're not decelerating,
                        //----- but we may be trying to get back to constraints.
                        if (this._bElasticX && this._elastic.leader.x != this._elastic.chaser.x) {
                            this._targetX = this._elastic.chaser.x;
                            this._setX(this._targetX);
                        }
                    }
                } else {
                    //----- We're not dragging and not decelerating, and we haven't reached our x target yet.
                    //----- Save the current values and use the saved values in calculations,
                    //----- so that things don't get messed up if the anchor point's not at (0, 0).
                    var value = this._zoomCtl.x;
                    var diff = this._targetX - value;

                    if (Math.abs(diff) > this._targetProximityPosition) {
                        var velocity = 0.0;
                        var speed = (this._speed * this._zoomSpeedFactor) * Math.abs(diff);

                        if (speed != 0 && diff != 0)
                            velocity = Math.abs(diff / (diff / speed));
                        else
                            velocity = Math.abs(diff);

                        if (diff > 0.0)
                            value += velocity;
                        else
                            value -= velocity;

                        this._setX(value);
                    } else {
                        this._setX(this._targetX);
                        this._ptSpeed.x = 0.0;
                        this._ptDragSpeed.x = 0.0;
                        this._bTargetXReached = true;
                    }
                }
            } catch (e) {
                console.log("Error in ZoomDragManager.updateX: " + e.toString());
            }
        };

        /*--------------------------------------------------------------------*
        START: Update Y
        *--------------------------------------------------------------------*/
        ZoomDragManager.prototype._updateY = function () {
            try  {
                //----- Handle drag deceleration.
                if (!this._bDragging && this._bTargetYReached && this._zoomCtl != null) {
                    if (this._bDragDone || this._ptDragSpeed.y != 0.0 || this._ptSpeed.y != 0.0) {
                        //----- We must be decelerating after a drag, otherwise speed and drag speed would be 0.
                        //----- this._bDragDone is true immediately after a drag, even if the speed is 0.
                        if (this._bUseDeceleration) {
                            var tolerance = 1.0;

                            if (Math.abs(this._ptSpeed.y) > tolerance)
                                this._ptSpeed.y *= this._deceleration;
                            else
                                this._ptSpeed.y = 0.0;

                            if (Math.abs(this._ptDragSpeed.y) > tolerance)
                                this._ptDragSpeed.y *= this._deceleration;
                            else
                                this._ptDragSpeed.y = 0.0;

                            this._bSignalDraggedEvent = true;
                            this._bSignalDragDoneEvent = true;
                        } else {
                            this._ptSpeed.y = 0.0;
                            this._ptDragSpeed.y = 0.0;
                        }

                        var yTmp = this._zoomCtl.y + this._ptSpeed.y;

                        //----- Update _targetY to reflect the actual position of the control.
                        this._targetY = this.constrainY(yTmp);
                        this._setY(this._targetY);
                    } else {
                        //----- We didn't just finish a drag and we're not decelerating,
                        //----- but we may be trying to get back to constraints.
                        if (this._bElasticY && this._elastic.leader.y != this._elastic.chaser.y) {
                            this._targetY = this._elastic.chaser.y;
                            this._setY(this._targetY);
                        }
                    }
                } else {
                    //----- We're not dragging and not decelerating, and we haven't reached our y target yet.
                    //----- Save the current values and use the saved values in calculations,
                    //----- so that things don't get messed up if the anchor point's not at (0, 0).
                    var value = this._zoomCtl.y;
                    var diff = this._targetY - value;

                    if (Math.abs(diff) > this._targetProximityPosition) {
                        var velocityY = 0.0;
                        var speed = (this._speed * this._zoomSpeedFactor) * Math.abs(diff);

                        if (speed != 0.0 && diff != 0.0)
                            velocityY = Math.abs(diff / (diff / speed));
                        else
                            velocityY = Math.abs(diff);

                        if (diff > 0)
                            value += velocityY;
                        else
                            value -= velocityY;

                        this._setY(value);
                    } else {
                        this._setY(this._targetY);
                        this._ptSpeed.y = 0.0;
                        this._ptDragSpeed.y = 0.0;
                        this._bTargetYReached = true;
                    }
                }
            } catch (e) {
                console.log("Error in ZoomDragManager.updateY: " + e.toString());
            }
        };

        /*--------------------------------------------------------------------*
        START: Update Width
        *--------------------------------------------------------------------*/
        ZoomDragManager.prototype._updateStretchWidth = function () {
            try  {
                var value = this._currentStretchWidthFactor;

                //----- Save current values and use the saved values in calculations,
                //----- so that things don't get messed up if the anchor point's not at (0, 0).
                var diff = this._targetStretchWidthFactor - value;

                if (Math.abs(diff) > this._targetProximityScale) {
                    var speed = (this._speed * this._zoomSpeedFactor) * Math.abs(diff);

                    if (diff > 0.0) {
                        value += Math.abs(diff / (diff / speed));
                        if (value > this._targetStretchWidthFactor)
                            value = this._targetStretchWidthFactor;
                    } else if (diff < 0.0) {
                        value -= Math.abs(diff / (diff / speed));
                        if (value < this._targetStretchWidthFactor)
                            value = this._targetStretchWidthFactor;
                    }

                    this._setWidth(this._widthOriginal * value);
                    this._currentStretchWidthFactor = value;

                    //----- Has the target been reached?
                    if (Math.abs(value - this._targetStretchWidthFactor) <= this._targetProximityScale) {
                        this._setWidth(this._widthOriginal * this._targetStretchWidthFactor);
                        this._currentStretchWidthFactor = this._targetStretchWidthFactor;
                    }
                } else {
                    this._setWidth(this._widthOriginal * this._targetStretchWidthFactor);
                    this._currentStretchWidthFactor = this._targetStretchWidthFactor;
                }
            } catch (e) {
                console.log("Error in ZoomDragManager._updateStretchWidth: " + e.toString());
            }
        };

        /*void _updateStretchWidth()
        {
        try
        {
        //----- Save the X, Y and scale values and use the saved values in calculations,
        //----- so that things don't get messed up if the anchor point's not at (0, 0).
        var stretchWidthFactor: number = this._currentStretchWidthFactor;
        var diffStretchWidthFactor: number = this._targetStretchWidthFactor - stretchWidthFactor;
        var speed: number = (this._speed * this._zoomSpeedFactor) * diffStretchWidthFactor.abs();
        var stretchWidthSpeed: number = (this._speed * this._zoomSpeedFactor) * diffStretchWidthFactor.abs();
        var bTargetReached: boolean = false;
        
        if ((stretchWidthFactor - this._targetStretchWidthFactor).abs() > this._targetProximityScale)
        {
        if (diffStretchWidthFactor > 0.0)
        {
        stretchWidthFactor += (diffStretchWidthFactor / (diffStretchWidthFactor / stretchWidthSpeed)).abs();
        if (stretchWidthFactor > this._targetStretchWidthFactor) stretchWidthFactor = this._targetStretchWidthFactor;
        }
        else if (diffStretchWidthFactor < 0.0)
        {
        stretchWidthFactor -= (diffStretchWidthFactor / (diffStretchWidthFactor / stretchWidthSpeed)).abs();
        if (stretchWidthFactor < this._targetStretchWidthFactor) stretchWidthFactor = this._targetStretchWidthFactor;
        }
        
        this._currentStretchWidthFactor = stretchWidthFactor;
        
        this._setWidth(this._widthOriginal * this._currentStretchWidthFactor);
        
        //----- Has the target width been reached?
        if ((this._currentStretchWidthFactor - this._targetStretchWidthFactor).abs() <= this._targetProximityScale) bTargetReached = this._stretchWidthTargetReached();
        }
        else
        {
        bTargetReached = this._stretchWidthTargetReached();
        }
        }
        catch (e)
        {
        console.log("Error in ZoomDragManager.updateZoom: " + e.toString());
        }
        }
        _stretchWidthTargetReached(): boolean 		{
        this._currentStretchWidthFactor = this._targetStretchWidthFactor;
        this._setWidth(this._widthOriginal * this._currentStretchWidthFactor);
        return true;
        }*/
        /*--------------------------------------------------------------------*
        START: Update Height
        *--------------------------------------------------------------------*/
        ZoomDragManager.prototype._updateStretchHeight = function () {
            try  {
                //----- Save the X, Y and scale values and use the saved values in calculations,
                //----- so that things don't get messed up if the anchor point's not at (0, 0).
                var stretchHeightFactor = this._currentStretchHeightFactor;
                var diffStretchHeightFactor = this._targetStretchHeightFactor - stretchHeightFactor;
                var speed = (this._speed * this._zoomSpeedFactor) * Math.abs(diffStretchHeightFactor);
                var stretchHeightSpeed = (this._speed * this._zoomSpeedFactor) * Math.abs(diffStretchHeightFactor);
                var bTargetReached = false;

                if (Math.abs(stretchHeightFactor - this._targetStretchHeightFactor) > this._targetProximityScale) {
                    if (diffStretchHeightFactor > 0.0) {
                        stretchHeightFactor += Math.abs(diffStretchHeightFactor / (diffStretchHeightFactor / stretchHeightSpeed));
                        if (stretchHeightFactor > this._targetStretchHeightFactor)
                            stretchHeightFactor = this._targetStretchHeightFactor;
                    } else if (diffStretchHeightFactor < 0.0) {
                        stretchHeightFactor -= Math.abs(diffStretchHeightFactor / (diffStretchHeightFactor / stretchHeightSpeed));
                        if (stretchHeightFactor < this._targetStretchHeightFactor)
                            stretchHeightFactor = this._targetStretchHeightFactor;
                    }

                    this._currentStretchHeightFactor = stretchHeightFactor;

                    this._setHeight(this._heightOriginal * this._currentStretchHeightFactor);

                    //----- Has the target height been reached?
                    if (Math.abs(this._currentStretchHeightFactor - this._targetStretchHeightFactor) <= this._targetProximityScale) {
                        bTargetReached = this._stretchHeightTargetReached();
                    }
                } else {
                    bTargetReached = this._stretchHeightTargetReached();
                }
            } catch (e) {
                console.log("Error in ZoomDragManager.updateZoom: " + e.toString());
            }
        };
        ZoomDragManager.prototype._stretchHeightTargetReached = function () {
            this._currentStretchHeightFactor = this._targetStretchHeightFactor;
            this._setHeight(this._heightOriginal * this._currentStretchHeightFactor);
            return true;
        };

        /*--------------------------------------------------------------------*
        START: Update RotationX
        *--------------------------------------------------------------------*/
        ZoomDragManager.prototype._updateRotationX = function () {
            try  {
                //----- Save the current values and use the saved values in calculations,
                //----- so that things don't get messed up if the anchor point's not at (0, 0).
                var value = this._zoomCtl.rotationX;
                var diff = this._targetRotationX - value;

                if (Math.abs(diff) > this._targetProximityScale) {
                    var velocity = 0.0;
                    var speed = (this._speed * this._zoomSpeedFactor) * Math.abs(diff);

                    if (speed != 0.0 && diff != 0.0)
                        velocity = Math.abs(diff / (diff / speed));
                    else
                        velocity = Math.abs(diff);

                    if (diff > 0.0)
                        value += velocity;
                    else
                        value -= velocity;

                    //----- Target reached.
                    if (Math.abs(value - this._targetRotationX) <= this._targetProximityScale)
                        value = this._targetRotationX;

                    if (!this._bTiltOnXAxis)
                        this._setRotationX(value);
                } else if (!this._bTiltOnXAxis)
                    this._setRotationX(this._targetRotationX);
            } catch (e) {
                console.log("Error in ZoomDragManager.updateRotationX: " + e.toString());
            }
        };

        /*--------------------------------------------------------------------*
        START: Update RotationY
        *--------------------------------------------------------------------*/
        ZoomDragManager.prototype._updateRotationY = function () {
            try  {
                //----- Save the current values and use the saved values in calculations,
                //----- so that things don't get messed up if the anchor point's not at (0, 0).
                var value = this._zoomCtl.rotationY;
                var diff = this._targetRotationY - value;
                var bTargetReached = false;

                if (Math.abs(diff) > this._targetProximityScale) {
                    var velocity = 0.0;
                    var speed = (this._speed * this._zoomSpeedFactor) * Math.abs(diff);

                    if (speed != 0.0 && diff != 0.0)
                        velocity = Math.abs(diff / (diff / speed));
                    else
                        velocity = Math.abs(diff);

                    if (diff > 0.0)
                        value += velocity;
                    else
                        value -= velocity;

                    //----- Target reached.
                    if (Math.abs(value - this._targetRotationY) <= this._targetProximityScale)
                        value = this._targetRotationY;

                    if (!this._bTiltOnYAxis)
                        this._setRotationY(value);
                } else if (!this._bTiltOnYAxis)
                    this._setRotationY(this._targetRotationY);
            } catch (e) {
                console.log("Error in ZoomDragManager.updateRotationY: " + e.toString());
            }
        };

        /*--------------------------------------------------------------------*
        START: Update RotationZ
        *--------------------------------------------------------------------*/
        ZoomDragManager.prototype._updateRotationZ = function () {
            try  {
                //----- Save the current values and use the saved values in calculations,
                //----- so that things don't get messed up if the anchor point's not at (0, 0).
                var value = this._zoomCtl.rotationZ;
                var diff = this._targetRotationZ - value;
                var bTargetReached = false;

                if (Math.abs(diff) > this._targetProximityScale) {
                    var velocity = 0.0;
                    var speed = (this._speed * this._zoomSpeedFactor) * Math.abs(diff);

                    if (speed != 0.0 && diff != 0.0)
                        velocity = Math.abs(diff / (diff / speed));
                    else
                        velocity = Math.abs(diff);

                    if (diff > 0.0)
                        value += velocity;
                    else
                        value -= velocity;

                    //----- Target reached.
                    if (Math.abs(value - this._targetRotationZ) <= this._targetProximityScale)
                        value = this._targetRotationZ;

                    this._setRotationZ(value);
                } else
                    this._setRotationY(this._targetRotationZ);
            } catch (e) {
                console.log("Error in ZoomDragManager.updateRotationY: " + e.toString());
            }
        };

        /*--------------------------------------------------------------------*
        START: Update width
        *--------------------------------------------------------------------*/
        ZoomDragManager.prototype._updateWidth = function () {
            try  {
                //----- Save the current values and use the saved values in calculations,
                //----- so that things don't get messed up if the anchor point's not at (0, 0).
                var value = this._zoomCtl.width;
                var diff = this._targetWidth - value;

                if (Math.abs(diff) > this._targetProximityScale) {
                    var velocity = 0.0;
                    var speed = (this._speed * this._zoomSpeedFactor) * Math.abs(diff);

                    if (speed != 0.0 && diff != 0.0)
                        velocity = Math.abs(diff / (diff / speed));
                    else
                        velocity = Math.abs(diff);

                    if (diff > 0.0)
                        value += velocity;
                    else
                        value -= velocity;

                    //----- Target reached.
                    if (Math.abs(value - this._targetWidth) <= this._targetProximityScale) {
                        value = this._targetWidth;
                        this._bTargetWidthReached = true;
                    }

                    this._setWidth(value);
                } else {
                    this._bTargetWidthReached = true;
                    this._setWidth(this._targetWidth);
                }
            } catch (e) {
                console.log("Error in ZoomDragManager.updateWidth: " + e.toString());
            }
        };

        /*--------------------------------------------------------------------*
        START: Update height
        *--------------------------------------------------------------------*/
        ZoomDragManager.prototype._updateHeight = function () {
            try  {
                //----- Save the current values and use the saved values in calculations,
                //----- so that things don't get messed up if the anchor point's not at (0, 0).
                var value = this._zoomCtl.height;
                var diff = this._targetHeight - value;

                if (Math.abs(diff) > this._targetProximityScale) {
                    var velocity = 0.0;
                    var speed = (this._speed * this._zoomSpeedFactor) * Math.abs(diff);

                    if (speed != 0.0 && diff != 0.0)
                        velocity = Math.abs(diff / (diff / speed));
                    else
                        velocity = Math.abs(diff);

                    if (diff > 0.0)
                        value += velocity;
                    else
                        value -= velocity;

                    //----- Target reached.
                    if (Math.abs(value - this._targetHeight) <= this._targetProximityScale) {
                        value = this._targetHeight;
                        this._bTargetHeightReached = true;
                    }

                    this._setHeight(value);
                } else {
                    this._bTargetHeightReached = true;
                    this._setHeight(this._targetHeight);
                }
            } catch (e) {
                console.log("Error in ZoomDragManager.updateHeight: " + e.toString());
            }
        };

        ZoomDragManager.prototype.goToTarget = function (x, y, scale, zoomSpeedFactor, bUseDeceleration, bInstant, rotationX, rotationY, rotationZ) {
            this._startScale = this._zoomCtl.scaleWidth;

            this._targetScale = this.constrainScale(scale);
            this._targetX = this.constrainX(x);
            this._targetY = this.constrainY(y);
            if (!bInstant)
                this._zoomSpeedFactor = zoomSpeedFactor;
            this._bUseDeceleration = bUseDeceleration;

            if (rotationX !== undefined)
                this._targetRotationX = rotationX;
            if (rotationY !== undefined)
                this._targetRotationY = rotationY;
            if (rotationZ !== undefined)
                this._targetRotationZ = rotationZ;

            this._zoomCtl.z = 0.0;

            this.targetScaleChanged.dispatch(new lux.ZoomDragEventArgs(this));
            this.targetXChanged.dispatch(new lux.ZoomDragEventArgs(this));
            this.targetYChanged.dispatch(new lux.ZoomDragEventArgs(this));

            if (bInstant) {
                this._bTargetXReached = true;
                this._bTargetYReached = true;
                this._bTargetScaleReached = true;

                this._setScale(this._targetScale);
                this._setX(this._targetX);
                this._setY(this._targetY);

                if (rotationX != null)
                    this._setRotationX(rotationX);
                if (rotationY != null)
                    this._setRotationY(rotationY);
                if (rotationZ != null)
                    this._setRotationZ(rotationZ);

                this.targetsReached.dispatch(new lux.ZoomDragEventArgs(this));
            } else {
                this._bTargetXReached = false;
                this._bTargetYReached = false;
                this._bTargetScaleReached = false;
            }
        };
        return ZoomDragManager;
    })();
    lux.ZoomDragManager = ZoomDragManager;
})(lux || (lux = {})); // End of module}
/// <reference path='../control.ts' />
/// <reference path='../zoomDragManager.ts' />
var lux;
(function (lux) {
    var Draggable = (function (_super) {
        __extends(Draggable, _super);
        function Draggable() {
            _super.call(this);
            this.p_zoomDrag = null;
            this.p_bAllowDrag = false;
            this.p_bDragging = false;

            this.p_zoomDrag = new lux.ZoomDragManager(this);
            this.p_zoomDrag.isElasticX = false;
            this.p_zoomDrag.isElasticY = false;
        }
        Object.defineProperty(Draggable.prototype, "zoomDragManager", {
            get: function () {
                return this.p_zoomDrag;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Draggable.prototype, "isAllowDrag", {
            get: function () {
                return this.p_bAllowDrag;
            },
            set: function (value) {
                this.p_bAllowDrag = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Draggable.prototype, "isDragging", {
            get: function () {
                return this.p_bDragging;
            },
            enumerable: true,
            configurable: true
        });

        Draggable.prototype.stopDragging = function () {
            this.p_bDragging = false;
            this.p_zoomDrag.stopDragging();
        };

        /*====================================================================*
        START: Event Handlers
        *====================================================================*/
        Draggable.prototype.p_onAttachedToControlSystem = function () {
            if (this.p_parent == null || this.p_root == null)
                return;

            this.mouseLeftButtonDown.listen(this.p_drag_mouseLeftButtonDown, this);
            this.p_root.previewMouseMove.listen(this.p_dragRoot_mouseMove, this);
            this.p_root.previewMouseLeftButtonUp.listen(this.p_dragRoot_mouseLeftButtonUp, this);
            this.p_root.animate.ticked.listen(this.p_onTick, this);
        };

        Draggable.prototype.p_onRemovedFromControlSystem = function () {
            this.mouseLeftButtonDown.remove(this.p_drag_mouseLeftButtonDown, this);
            this.p_root.previewMouseMove.remove(this.p_dragRoot_mouseMove, this);
            this.p_root.previewMouseLeftButtonUp.remove(this.p_dragRoot_mouseLeftButtonUp, this);
            this.p_root.animate.ticked.remove(this.p_onTick, this);
        };

        Draggable.prototype.p_onTick = function () {
            this.p_zoomDrag.tick();
        };

        Draggable.prototype.p_drag_mouseLeftButtonDown = function (e) {
            if (!this.p_bAllowDrag)
                return;

            this.p_bDragging = true;

            var btns = new lux.MouseButtons();
            btns.left = 0 /* PRESSED */;

            var args = new lux.MouseEventArgs(this, btns, 0, e.positionRoot, e.positionLocal, 0.0);

            this.p_zoomDrag.mouseLeftButtonDown(args);

            e.isHandled = true;
        };

        Draggable.prototype.p_dragRoot_mouseMove = function (e) {
            if (!this.p_bDragging || this.p_zoomDrag == null || !this.p_bAllowDrag) {
                return;
            }

            var btns = new lux.MouseButtons();
            if (e.buttons.left == 0 /* PRESSED */)
                btns.left = 0 /* PRESSED */;
            var args = new lux.MouseEventArgs(this, btns, 0, e.positionRoot, e.positionLocal, 0.0);

            this.p_zoomDrag.mouseMove(args);

            e.isHandled = false;
        };

        Draggable.prototype.p_dragRoot_mouseLeftButtonUp = function (e) {
            if (!this.p_bDragging || this.p_zoomDrag == null)
                return;

            var btns = new lux.MouseButtons();
            btns.left = 1 /* RELEASED */;
            var args = new lux.MouseEventArgs(this, btns, 0, e.positionRoot, e.positionLocal, 0.0);

            this.p_zoomDrag.mouseLeftButtonUp(args);

            if (this.p_bAllowDrag) {
                //----- We were dragging, so register a DragDrop event on the root control.
                args = new lux.MouseEventArgs(this, new lux.MouseButtons(), 1, e.positionRoot, e.positionRoot, 0);
                var controlAttributes = new lux.Attributes();

                //controlAttributes.save("control", DataType.OBJECT, this);
                //args.dragAttributes.save("control", DataType.ATTRIBUTES, controlAttributes);
                this.p_root.checkDragDrop(args);
            }

            this.p_bDragging = false;
            e.isHandled = false;
        };
        return Draggable;
    })(lux.Control);
    lux.Draggable = Draggable;
})(lux || (lux = {})); // End of module
/// <reference path='draggable.ts' />
var lux;
(function (lux) {
    var Zoomable = (function (_super) {
        __extends(Zoomable, _super);
        function Zoomable() {
            _super.call(this);
            this.p_bAllowZoom = true;
        }
        Object.defineProperty(Zoomable.prototype, "isAllowZoom", {
            get: function () {
                return this.p_bAllowZoom;
            },
            set: function (value) {
                this.p_bAllowZoom = value;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Event Handlers
        *====================================================================*/
        Zoomable.prototype.p_onAttachedToControlSystem = function () {
            _super.prototype.p_onAttachedToControlSystem.call(this);

            this.p_parent.previewMouseLeftButtonDown.listen(this.p_dragParent_previewMouseLeftButtonDown, this);
            this.p_parent.previewMouseWheel.listen(this.p_dragParent_previewMouseWheel, this);
        };

        Zoomable.prototype.p_onRemovedFromControlSystem = function () {
            _super.prototype.p_onRemovedFromControlSystem.call(this);

            this.p_parent.previewMouseLeftButtonDown.remove(this.p_dragParent_previewMouseLeftButtonDown, this);
            this.p_parent.previewMouseWheel.remove(this.p_dragParent_previewMouseWheel, this);
        };

        Zoomable.prototype.p_dragParent_previewMouseLeftButtonDown = function (e) {
            if (!this.p_bAllowZoom && !this.p_bAllowDrag || e.isHandled)
                return;

            this.p_bDragging = true;

            var btns = new lux.MouseButtons();
            btns.left = 0 /* PRESSED */;

            //----- Pass root coordinates for both root and local mouse positions.
            var args = new lux.MouseEventArgs(this, btns, 0, e.positionRoot, e.positionLocal, 0.0);

            this.p_zoomDrag.mouseLeftButtonDown(args);

            e.isHandled = false;
        };

        Zoomable.prototype.p_dragParent_previewMouseWheel = function (e) {
            if (!this.p_bAllowZoom || e.isHandled)
                return;

            var btns = new lux.MouseButtons();
            var args = new lux.MouseEventArgs(this, btns, 0, e.positionRoot, e.positionLocal, e.wheelDelta);

            this.p_zoomDrag.mouseWheel(args);

            e.isHandled = true;
        };
        return Zoomable;
    })(lux.Draggable);
    lux.Zoomable = Zoomable;
})(lux || (lux = {})); // End of module
/// <reference path='../zoomDragManager.ts' />
/// <reference path='../controls/zoomable.ts' />
/// <reference path='collectionViewModeBase.ts' />
var lux;
(function (lux) {
    /*====================================================================*
    ===== START: ZoomPanel
    *====================================================================*/
    var ZoomPanelCollectionView = (function (_super) {
        __extends(ZoomPanelCollectionView, _super);
        function ZoomPanelCollectionView() {
            _super.call(this);
        }
        Object.defineProperty(ZoomPanelCollectionView.prototype, "models", {
            /*====================================================================*
            START: Properties
            *====================================================================*/
            set: function (value) {
                this.p_models = value;
            },
            enumerable: true,
            configurable: true
        });
        return ZoomPanelCollectionView;
    })(lux.Zoomable);
    lux.ZoomPanelCollectionView = ZoomPanelCollectionView;

    /*====================================================================*
    ===== START: CollectionView
    *====================================================================*/
    var CollectionView = (function (_super) {
        __extends(CollectionView, _super);
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        /// A ModelCollection View that displays models arranged spatially on a zoomable ZoomPanel.
        function CollectionView(viewMode) {
            _super.call(this);
            this.p_clipPanel = new lux.Control();
            this.p_zoomPanel = new ZoomPanelCollectionView();
            this.p_overlayPanel = new lux.Control();
            this.p_originalIsConstrained = true;
            this.p_originalIsAllowDrag = true;
            this.p_originalIsAllowZoom = true;
            this.p_originalZoomDragScale = 1.0;
            this.p_orignalZoomDragX = 1.0;
            this.p_originalZoomDragY = 1.0;
            this.p_originalZoomDragRotationZ = 0.0;
            this.p_originalOpenModelZIndex = 0;
            this.p_originalSelectedModelZIndex = 0;
            this.isIgnoreOriginalValuesOnModelClose = false;
            /*
            * This is set to false when the left button is pressed.
            * It can be set to true before the button is released, to instruct code to ignore the click.
            */
            this.isIgnoreClick = false;
            /*====================================================================*
            START: Event Handlers
            *====================================================================*/
            this.activated = new lux.Signal();

            if (viewMode !== undefined)
                this.p_mode = viewMode;

            this.isPropagateMouseEvents = true;

            this.controls.addByName(this.p_clipPanel, 'clipPanel');
            this.p_clipPanel.controls.addByName(this.p_zoomPanel, 'zoomPanel');
            this.controls.addByName(this.p_overlayPanel, 'overlayPanel');

            this.isAllowMouseButtonEvents = false;

            //----- this.p_clipPanel
            //this.p_clipPanel.style.background.color = Color.empty;
            this.p_clipPanel.isClipChildControls = false;
            this.p_clipPanel.isAllowMouseButtonEvents = true;
            this.p_clipPanel.isPropagateMouseEvents = true;

            //----- this.p_zoomPanel
            //this.p_zoomPanel.style.background.color = Color.empty;
            this.p_zoomPanel.isClipChildControls = false;
            this.p_zoomPanel.isAllowMouseButtonEvents = false;
            this.p_zoomPanel.isPropagateMouseEvents = true;

            //----- this.p_overlayPanel
            //----- Set the background color of the overlayPanel to transparent,
            //----- so only it's child controls will obscure the background elements.
            //this.p_overlayPanel.style.background.color = Color.empty;
            this.p_overlayPanel.opacity = 0;
            this.p_overlayPanel.isAllowMouseButtonEvents = false;
            this.p_overlayPanel.isPropagateMouseEvents = true;
            this.p_overlayPanel.isAcceptLighting = false;
            this.p_overlayPanel.isAcceptShadows = false;
            this.p_overlayPanel.isVisible = true;
        }
        Object.defineProperty(CollectionView.prototype, "models", {
            /*====================================================================*
            START: Properties
            *====================================================================*/
            get: function () {
                return this.p_models;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(CollectionView.prototype, "clipPanel", {
            get: function () {
                return this.p_clipPanel;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(CollectionView.prototype, "zoomPanel", {
            get: function () {
                return this.p_zoomPanel;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(CollectionView.prototype, "overlayPanel", {
            get: function () {
                return this.p_overlayPanel;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(CollectionView.prototype, "mode", {
            //----- ViewMode
            get: function () {
                return this.p_mode;
            },
            set: function (value) {
                if (this.p_mode !== undefined && this.p_mode !== null) {
                    this.p_mode.deactivate();
                }

                this.p_mode = value;
                this.p_mode.activate(this);

                //----- Update original values to reflect changes: any that may have been made while activating the view mode.
                this.p_originalIsAllowDrag = this.zoomPanel.isAllowDrag;
                this.p_originalIsAllowZoom = this.zoomPanel.isAllowZoom;
                this.p_originalIsConstrained = this.zoomPanel.zoomDragManager.isConstrained;
                this.p_originalZoomDragScale = this.zoomPanel.scale;
                this.p_orignalZoomDragX = this.zoomPanel.x;
                this.p_originalZoomDragY = this.zoomPanel.y;
                this.p_originalZoomDragRotationZ = this.zoomPanel.rotation;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(CollectionView.prototype, "originalIsConstrained", {
            //----- Properties used to save the values of the collection view before a model is opened,
            //----- So the view can be returned to it's original state after the model is closed.
            get: function () {
                return this.p_originalIsConstrained;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(CollectionView.prototype, "originalIsAllowDrag", {
            get: function () {
                return this.p_originalIsAllowDrag;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(CollectionView.prototype, "originalIsAllowZoom", {
            get: function () {
                return this.p_originalIsAllowZoom;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(CollectionView.prototype, "originalZoomDragScale", {
            get: function () {
                return this.p_originalZoomDragScale;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(CollectionView.prototype, "orignalZoomDragX", {
            get: function () {
                return this.p_orignalZoomDragX;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(CollectionView.prototype, "originalZoomDragY", {
            get: function () {
                return this.p_originalZoomDragY;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(CollectionView.prototype, "originalZoomDragRotationZ", {
            get: function () {
                return this.p_originalZoomDragRotationZ;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(CollectionView.prototype, "originalOpenModelZIndex", {
            //----- Properties used to save the values of a model before it's opened,
            //----- So the model can be returned to it's original state after it's closed.
            get: function () {
                return this.p_originalOpenModelZIndex;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(CollectionView.prototype, "originalSelectedModelZIndex", {
            //----- Properties used to save the values of a model before it's selected,
            //----- So the model can be returned to it's original state after it's deselected.
            get: function () {
                return this.p_originalSelectedModelZIndex;
            },
            enumerable: true,
            configurable: true
        });

        CollectionView.prototype.activate = function (modelCollection) {
            this.p_models = modelCollection;
            this.p_zoomPanel.models = this.p_models;

            for (var i = 0; i < this.p_models.length; i++) {
                var model = this.p_models.model(i);
                this.p_modelCollection_onModelAdded(new lux.ModelEventArgs(model, false));
            }
            this.p_models.doViewUpdated(true);

            this.p_models.modelAdded.listen(this.p_modelCollection_onModelAdded, this);
            this.p_models.modelRemoved.listen(this.p_modelCollection_onModelRemoved, this);
            this.p_models.modelOpened.listen(this.p_childModel_onOpened, this);
            this.p_models.modelSelected.listen(this.p_childModel_onSelected, this);

            this.activated.dispatch(new lux.ModelEventArgs(this.p_models.parentModel, true));

            this.p_onActivated();
        };
        CollectionView.prototype.p_onActivated = function () {
        };

        CollectionView.prototype.deactivate = function () {
            this.p_models.modelAdded.remove(this.p_modelCollection_onModelAdded, this);
            this.p_models.modelRemoved.remove(this.p_modelCollection_onModelRemoved, this);
            this.p_models.modelOpened.remove(this.p_childModel_onOpened, this);
            this.p_models.modelSelected.remove(this.p_childModel_onSelected, this);

            for (var i = 0; i < this.p_models.length; i++) {
                var model = this.p_models.model(i);
                this.p_modelCollection_onModelAdded(new lux.ModelEventArgs(model, false));
            }

            this.p_zoomPanel.controls.clear();

            this.p_onDeactivated();
        };
        CollectionView.prototype.p_onDeactivated = function () {
        };

        CollectionView.prototype.p_onResized = function (args) {
            _super.prototype.p_onResized.call(this, args);

            this.p_clipPanel.width = this.width;
            this.p_clipPanel.height = this.height;

            this.p_overlayPanel.width = this.width;
            this.p_overlayPanel.height = this.height;
        };

        CollectionView.prototype.p_modelCollection_onModelAdded = function (args) {
            args.model.viewChanged.listen(this.p_childModel_onViewChanged, this);

            if (args.model.view == null || this.p_zoomPanel == null)
                return;

            this.p_addViewToControls(args.model, args.isAnimate);
        };
        CollectionView.prototype.p_modelCollection_onModelRemoved = function (args) {
            this.p_removeViewFromControls(args.model, args.isAnimate);
        };

        CollectionView.prototype.p_addViewToControls = function (model, bAnimate) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            if (model.view == null || this.p_zoomPanel == null)
                return;

            if (model.ID != null)
                this.p_zoomPanel.controls.addByName(model.view, model.ID.toString());
            else
                this.p_zoomPanel.controls.add(model.view);

            this.p_models.doViewUpdated(bAnimate);
        };
        CollectionView.prototype.p_removeViewFromControls = function (model, bAnimate) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            if (model.view == null || this.p_zoomPanel == null)
                return;
            this.p_zoomPanel.controls.remove(model.view);
            this.p_models.doViewUpdated(bAnimate);
        };

        CollectionView.prototype.p_childModel_onOpened = function (args) {
            //----- Save original values, so we can return to them when the model is closed.
            this.p_originalIsConstrained = this.zoomPanel.zoomDragManager.isConstrained;
            this.p_originalZoomDragScale = this.zoomPanel.scale;
            this.p_orignalZoomDragX = this.zoomPanel.x;
            this.p_originalZoomDragY = this.zoomPanel.y;
            this.p_originalZoomDragRotationZ = this.zoomPanel.rotation;

            this.p_originalOpenModelZIndex = args.model.view.zIndex;

            if (args.model.isContainer) {
                this.p_originalIsAllowDrag = this.zoomPanel.isAllowDrag;
                this.p_originalIsAllowZoom = this.zoomPanel.isAllowZoom;
            }
        };

        CollectionView.prototype.p_childModel_onSelected = function (args) {
            this.p_originalSelectedModelZIndex = args.model.view.zIndex;
        };

        CollectionView.prototype.p_childModel_onViewChanged = function (args) {
            if (args.prevView != null)
                this.p_zoomPanel.controls.remove(args.prevView);
            this.p_addViewToControls(args.model, true);
        };

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        CollectionView.prototype.doViewUpdated = function (bAnimate) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            if (this.p_models == null)
                return;

            this.p_models.doViewUpdated(bAnimate);
        };

        CollectionView.prototype.returnOpenModelToOriginalZIndex = function () {
            if (this.p_models == null)
                return null;

            var model = this.p_models.modelLastOpened;
            if (model != null && model.isOpen && model.isContainer) {
                this.zoomPanel.controls.remove(model.view);
                this.zoomPanel.controls.add(model.view, this.p_originalOpenModelZIndex);
                return model;
            } else
                return null;
        };

        CollectionView.prototype.returnSelectedModelToOriginalZIndex = function () {
            if (this.p_models == null)
                return null;

            var model = this.p_models.modelLastSelected;
            if (model != null && model.isSelected) {
                this.zoomPanel.controls.remove(model.view);
                this.zoomPanel.controls.add(model.view, this.p_originalSelectedModelZIndex);
                return model;
            } else
                return null;
        };
        return CollectionView;
    })(lux.Control);
    lux.CollectionView = CollectionView;
})(lux || (lux = {})); // End of module
/// <reference path='../controls/draggable.ts' />
/// <reference path='model.ts' />
/// <reference path='../zoomDragManager.ts' />
var lux;
(function (lux) {
    /*====================================================================*
    ===== START: View
    *====================================================================*/
    var View = (function (_super) {
        __extends(View, _super);
        function View(mode) {
            _super.call(this);
            this.p_timerMouseEventStartCount = 0;
            //----- The number of ticks that should pass before we register a mousedown.
            //----- The actual value is set on first tick to 1 second multiplied by waitTimeMouseEvent.
            this.p_timerMouseEventInterval = 200000;
            this.p_waitTimeMouseEvent = 0.25;
            //----- The of: number ticks that should pass before we register a click-and-hold.
            //----- The actual value is set on first tick to 1 second multiplied by waitClickAndHold.
            this.p_timerClickAndHoldInterval = 200000;
            this.p_waitTimeClickAndHold = 1.0;
            this.p_bTimerMouseEventRunning = false;
            //----- This will be used to record whether the parent collection allows dragging,
            //----- so we can restore the proper state after this model has been dragged.
            this.p_parentCollection_isAllowDrag = true;
            this.p_dragStartOpacity = 1.0;
            this.p_bDragInitiated = false;
            this.p_bDragged = false;
            this.p_content = new lux.Control();
            this.p_bContentLoaded = false;
            this.p_contentContainer = new lux.Control();
            this.p_inputControl = new lux.Control();
            /*====================================================================*
            START: Events
            *====================================================================*/
            //----- viewActivated
            this.activated = new lux.Signal();
            //----- modeChanged
            this.modeChanged = new lux.Signal();
            //----- contentChanged
            this.contentChanged = new lux.Signal();
            this.contentLoaded = new lux.Signal();
            this._bFirstTick = true;
            this.p_mouseLeftButtonDownCount = 0;

            this.p_bAllowDrag = false;
            this.zoomDragManager.speed = 0.4; //Affects how quickly items animate to their initial positions.

            this.isAllowMouseButtonEvents = false;
            this.isPropagateMouseEvents = true;

            //----- contentContainer
            //----- This control can be used to place content without disrupting the handling of mouse events.
            this.p_contentContainer.isAllowMouseButtonEvents = false;
            this.p_contentContainer.isPropagateMouseEvents = true;

            //this.p_contentContainer.isClipChildControls = true;
            this.controls.addByName(this.p_contentContainer, 'contentContainer');

            //----- inputControl
            //----- This control handles mouse events, allowing us to decide when
            //----- it's appropriate to register a true mouseup for this view.
            this.controls.addByName(this.p_inputControl, 'inputControl');
            this.p_inputControl.isAllowMouseButtonEvents = true;

            //this.p_inputControl.isAllowMouseWheelEvents = true;
            this.p_inputControl.isPropagateMouseEvents = true;
            this.p_inputControl.mouseLeftButtonDown.listen(this.p_inputControl_mouseLeftButtonDown, this);
            this.p_inputControl.mouseLeftButtonUp.listen(this.p_inputControl_mouseLeftButtonUp, this);

            //this.p_inputControl.dragDrop.listen(this.p_inputControl_dragDrop);
            //----- Hook up the mode
            if (mode)
                this.mode = mode;
            else
                this.mode = new lux.ViewMode();
        }
        Object.defineProperty(View.prototype, "model", {
            /*====================================================================*
            START: Properties
            *====================================================================*/
            get: function () {
                return this.p_model;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(View.prototype, "mode", {
            //----- ViewMode
            get: function () {
                return this.p_mode;
            },
            set: function (value) {
                var prevMode = this.p_mode;
                if (this.p_mode != null)
                    this.p_mode.deactivate();
                this.p_mode = value;
                this.p_mode.activate(this);

                this.p_doModeChanged(this, prevMode);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(View.prototype, "waitTimeMouseEvent", {
            /// The seconds to wait for a click-and-hold event. Can be a fraction of a second, like 0.5.
            get: function () {
                return this.p_waitTimeMouseEvent;
            },
            set: function (value) {
                this.p_timerMouseEventInterval = Math.round(this.p_animate.timerCounter.frequency * this.p_waitTimeMouseEvent);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(View.prototype, "waitTimeClickAndHold", {
            /// The seconds to wait for a click-and-hold event. Can be a fraction of a second, like 0.5.
            get: function () {
                return this.p_waitTimeClickAndHold;
            },
            set: function (value) {
                this.p_timerClickAndHoldInterval = Math.round(this.p_animate.timerCounter.frequency * this.p_waitTimeClickAndHold);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(View.prototype, "content", {
            //----- content
            get: function () {
                return this.p_content;
            },
            set: function (value) {
                if (lux.g.isEmpty(value)) {
                    this.p_bContentLoaded = true;
                    this.p_contentContainer.controls.clear();
                    this.p_content = null;
                    this.contentChanged.dispatch(new lux.ControlEventArgs(null));
                    this.contentLoaded.dispatch(new lux.ModelEventArgs(this.p_model, true));
                    return;
                }

                this.p_bContentLoaded = false;
                var contentPrev = this.p_content;
                this.p_content = value;

                if (value.type == 0 /* BASIC */) {
                    this.p_contentContainer.controls.clear();
                    this.p_contentContainer.controls.add(value);
                    this.contentChanged.dispatch(new lux.ControlEventArgs(contentPrev));
                    this.p_onContentLoaded(new lux.ControlEventArgs(this.p_content));
                } else {
                    this.p_contentContainer.controls.clear();
                    this.p_contentContainer.controls.add(value);
                    this.contentChanged.dispatch(new lux.ControlEventArgs(contentPrev));
                    this.p_content.loaded.listen(this.p_onContentLoaded, this);
                }
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(View.prototype, "isContentLoaded", {
            //----- isContentLoaded
            get: function () {
                return this.p_bContentLoaded;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(View.prototype, "contentContainer", {
            //----- contentContainer
            /*
            * This is the control that holds the content for the model.
            */
            get: function () {
                return this.p_contentContainer;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(View.prototype, "inputControl", {
            //----- inputControl
            /*
            * This is the control that gets the mouse events to open or close the model.
            * It should be placed above other contentContainer.
            */
            get: function () {
                return this.p_inputControl;
            },
            enumerable: true,
            configurable: true
        });

        View.prototype.p_doModeChanged = function (view, prevMode) {
            this.modeChanged.dispatch(new lux.ViewModeChangedEventArgs(view, prevMode));
        };

        View.prototype.p_onContentLoaded = function (args) {
            this.p_bContentLoaded = true;
            this.contentLoaded.dispatch(new lux.ModelEventArgs(this.p_model, true));
        };
        View.prototype.doContentLoaded = function (args) {
            this.contentLoaded.dispatch(args);
        };

        View.prototype.activate = function (model) {
            this.p_model = model;

            //----- Make the drag trigger low, since we'll only be using it when the model is already selected.
            this.zoomDragManager.dragTrigger = 0;

            this.p_model.viewUpdated.listen(this.p_onViewUpdated, this);
            this.p_model.selected.listen(this.p_onModelSelected, this);
            this.p_model.deselected.listen(this.p_onModelDeselected, this);
            this.p_model.opened.listen(this.p_onModelOpened, this);
            this.p_model.closed.listen(this.p_onModelClosed, this);

            this.zoomDragManager.dragged.listen(this.p_onView_dragged, this);

            this.activated.dispatch(new lux.ModelEventArgs(this.p_model, true));

            this.p_onActivated();
        };
        View.prototype.p_onActivated = function () {
        };

        View.prototype.deactivate = function () {
            this.p_model.viewUpdated.remove(this.p_onViewUpdated, this);
            this.p_model.selected.remove(this.p_onModelSelected, this);
            this.p_model.deselected.remove(this.p_onModelDeselected, this);
            this.p_model.opened.remove(this.p_onModelOpened, this);
            this.p_model.closed.remove(this.p_onModelClosed, this);

            this.zoomDragManager.dragged.remove(this.p_onView_dragged, this);

            this.p_onDeactivated();
        };
        View.prototype.p_onDeactivated = function () {
        };

        View.prototype.p_onViewUpdated = function (args) {
            if (this.p_mode != null)
                this.p_mode.p_onViewUpdated(args);
        };

        View.prototype.p_onModelSelected = function (args) {
            if (this.p_mode != null)
                this.p_mode.p_onModelSelected(args);
        };
        View.prototype.p_onModelDeselected = function (args) {
            if (this.p_mode != null)
                this.p_mode.p_onModelDeselected(args);
        };
        View.prototype.p_onModelOpened = function (args) {
            if (this.p_mode != null)
                this.p_mode.p_onModelOpened(args);
        };
        View.prototype.p_onModelClosed = function (args) {
            if (this.p_mode != null)
                this.p_mode.p_onModelClosed(args);
        };

        View.prototype.p_onView_dragged = function (args) {
            if (this.p_bDragged)
                return;
            this.p_bDragged = true;

            if (this.p_bDragInitiated)
                return;
            this.p_bDragInitiated = true;

            this.p_root.invalidateAll();
            this.opacity = 0.7;

            //----- Reset
            this.p_mouseLeftButtonArgs = null;
            this.p_bTimerMouseEventRunning = false;
        };

        View.prototype.p_onTick = function () {
            _super.prototype.p_onTick.call(this);

            if (this._bFirstTick) {
                //----- Set the time before a mouse event is registered (if waitTimeMouseEvent is 0.2,
                //----- the interval will be 1/5 of a second).
                this.p_timerMouseEventInterval = Math.round(this.p_animate.timerCounter.frequency * this.p_waitTimeMouseEvent);
                this.p_timerClickAndHoldInterval = Math.round(this.p_animate.timerCounter.frequency * this.p_waitTimeClickAndHold);
                this._bFirstTick = false;
            }

            //----- If the control is already being dragged, we can reset and go home.
            if (this.isDragging) {
                //----- Reset
                this.p_mouseLeftButtonArgs = null;
                this.p_bTimerMouseEventRunning = false;
                return;
            }

            //----- If there was no mousedown event detected on p_inputControl, we have nothing to do here.
            if (this.p_mouseLeftButtonArgs == null || (this.p_mouseLeftButtonArgs.buttons.left == 1 /* RELEASED */ && this.p_mouseLeftButtonArgs.clickCount == 0))
                return;

            //----- The parent collectionView is being dragged, so cancel the mousedown.
            if (this.p_model.parentCollection == null || this.p_model.parentCollection.view == null || this.p_model.parentCollection.view.zoomPanel.zoomDragManager.isDragging || this.p_model.parentCollection.view.zoomPanel.zoomDragManager.isDecelerating) {
                this.p_mouseLeftButtonArgs = null;
                this.p_bTimerMouseEventRunning = false;
                return;
            }

            //----- there must have been a mousedown event detected on p_inputControl,
            //----- so let's see if we should allow a mousedown event to pass through on the model.
            //----- If the appropriate amount of time has elapsed and we're not dragging/zooming, we can allow a mousedown.
            var triggerIntervalMouseEvent = (this.p_timerMouseEventStartCount + this.p_timerMouseEventInterval);
            var triggerIntervalClickAndHold = (this.p_timerMouseEventStartCount + this.p_timerClickAndHoldInterval);

            //----- Go ahead and signal a change in status for listeners: any, so they can respond to a mouse event on the model.
            if (this.p_animate.timerCounter.count >= triggerIntervalMouseEvent) {
                if (this.p_mouseLeftButtonArgs != null) {
                    if (this.p_mouseLeftButtonArgs.buttons.left == 0 /* PRESSED */ && this.p_mouseLeftButtonArgs.clickCount == 0) {
                        if (this.p_animate.timerCounter.count >= triggerIntervalClickAndHold) {
                            if (this.p_mode != null)
                                this.p_mode.p_onViewClickAndHold(this.p_mouseLeftButtonArgs);

                            //----- We don't want to register a mousedown before we register a click-and-hold,
                            //----- in case click-and-hold needs to do some setup before the mousedown is fired,
                            //----- as in the case of a drag.
                            this.doMouseLeftButtonDown(this.p_mouseLeftButtonArgs);

                            //----- Reset
                            this.p_mouseLeftButtonArgs = null;
                            this.p_bTimerMouseEventRunning = false;
                        }
                    } else if (this.p_mouseLeftButtonArgs.buttons.left == 1 /* RELEASED */ && this.p_mouseLeftButtonArgs.clickCount == 1) {
                        if (this.p_mode != null)
                            this.p_mode.p_onViewClick(this.p_mouseLeftButtonArgs);
                        else
                            this.p_model.toggleOpenClose();

                        //----- Reset
                        this.p_mouseLeftButtonArgs = null;
                        this.p_bTimerMouseEventRunning = false;
                    } else if (this.p_mouseLeftButtonArgs.buttons.left == 1 /* RELEASED */ && this.p_mouseLeftButtonArgs.clickCount == 2) {
                        if (this.p_mode != null)
                            this.p_mode.p_onViewDoubleClick(this.p_mouseLeftButtonArgs);

                        //----- Reset
                        this.p_mouseLeftButtonArgs = null;
                        this.p_bTimerMouseEventRunning = false;
                    }
                }
            }
        };

        View.prototype.p_inputControl_mouseLeftButtonDown = function (args) {
            if (this.p_mouseLeftButtonArgs == null) {
                this.p_mouseLeftButtonDownCount = 1;
                this.p_mouseLeftButtonArgs = args;

                if (this.p_model.isSelected && this.p_bAllowDrag && !this.isDragging) {
                    //----- First, record the isAllowDrag state of the parentCollection's zoomDragManager,
                    //----- so we can disable it while this model is being dragged and reset it properly after the drag.
                    this.p_parentCollection_isAllowDrag = this.p_model.parentCollection.view.zoomPanel.isAllowDrag;

                    //----- Don't let the parent collection's zoomPanel be dragged while we're dragging this model.
                    //----- TODO: We need to reset this to true if the mouseup lands outside the browser window.
                    this.p_model.parentCollection.view.zoomPanel.isAllowDrag = false;

                    //----- Also mark the original opacity of this view.
                    this.p_dragStartOpacity = this.opacity;

                    //----- Since we're already selected, we can go ahead and register a mousedown.
                    this.doMouseLeftButtonDown(this.p_mouseLeftButtonArgs);
                    this.animate.run(this.fadeTo(0.7, 0.2));
                }
            } else if (this.p_mouseLeftButtonDownCount === 1) {
                this.p_mouseLeftButtonDownCount = 0;
                this.p_mouseLeftButtonArgs.clickCount = 2;
            }

            this.p_timerMouseEventStartCount = this.p_animate.timerCounter.count;
            this.p_bTimerMouseEventRunning = true;

            args.isHandled = true;
        };

        View.prototype.p_inputControl_mouseLeftButtonUp = function (args) {
            this.p_bTimerMouseEventRunning = false;

            //----- Restore the enabled state of the parentCollection's zoomDragManager, if we were dragging this model.
            if (this.p_model.parentCollection != null)
                this.p_model.parentCollection.view.zoomPanel.isAllowDrag = this.p_parentCollection_isAllowDrag;

            //----- Restore to previous opacity, in case we were dragging.
            if (this.p_bDragInitiated && this.p_bDragged) {
                this.animate.run(this.fadeTo(this.p_dragStartOpacity, 0.2));
                this.p_bDragged = false;
                this.p_bDragInitiated = false;
                //----- Move the model back to its original zIndex.
                /*if (this.model.parentCollection != null && this.model.parentCollection.view != null)
                {
                this.model.parentCollection.view.zoomPanel.controls.remove(this);
                this.model.parentCollection.view.zoomPanel.controls.insert(this.p_originalModelZIndex, this);
                }*/
            } else if (this.p_bDragInitiated) {
                this.animate.run(this.fadeTo(this.p_dragStartOpacity, 0.2)); //.and(this.moveBy(0, -3 / this.parent.scale, 0, 0.2));
                this.p_bDragInitiated = false;
                //----- Move the model back to its original zIndex.
                /*if (this.model.parentCollection != null && this.model.parentCollection.view != null)
                {
                this.model.parentCollection.view.zoomPanel.controls.remove(this);
                this.model.parentCollection.view.zoomPanel.controls.insert(this.p_originalModelZIndex, this);
                }*/
            }

            if (this.p_mouseLeftButtonArgs == null) {
                args.isHandled = true;
                return;
            } else if (this.p_mouseLeftButtonArgs.clickCount == 0) {
                this.p_mouseLeftButtonArgs.buttons.left = 1 /* RELEASED */;
                this.p_mouseLeftButtonArgs.clickCount = 1;
                args.isHandled = true;
                return;
            } else if (this.p_mouseLeftButtonArgs.clickCount == 1) {
                this.p_mouseLeftButtonArgs.buttons.left = 1 /* RELEASED */;
                this.p_mouseLeftButtonArgs.clickCount = 2;
                args.isHandled = true;
                return;
            }

            args.isHandled = true;
        };

        /*void p_inputControl_dragDrop(MouseEventArgs args)
        {
        console.log("this.p_inputControl_dragDrop");
        this.p_mode.p_onDragDrop(args);
        }*/
        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        View.prototype.initiateDrag = function () {
            if (!this.p_bAllowDrag || this.isDragging)
                return;

            //----- Register that a drag has been initiated so that later, if the user decided to not actually drag the view,
            //----- we can position it back exactly as it was.
            this.p_bDragInitiated = true;

            //----- First, record the isAllowDrag state of the parentCollection's zoomDragManager,
            //----- so we can disable it while this model is being dragged and reset it properly after the drag.
            this.p_parentCollection_isAllowDrag = this.p_model.parentCollection.view.zoomPanel.isAllowDrag;

            //----- Don't let the parent collection's zoomPanel be dragged while we're dragging this model.
            this.p_model.parentCollection.view.zoomPanel.isAllowDrag = false;

            //----- Also mark the original opacity of this view.
            this.p_dragStartOpacity = this.opacity;

            //this.p_originalModelZIndex = this.zIndex;
            //this.moveToTop();
            this.p_root.invalidateAll();

            this.animate.run(this.fadeTo(0.7, 0.2));
        };
        return View;
    })(lux.Draggable);
    lux.View = View;
})(lux || (lux = {})); // End of module
/// <reference path='view.ts' />
/// <reference path='viewMode.ts' />
/// <reference path='../events.ts' />
var lux;
(function (lux) {
    var ViewModeBehavior = (function () {
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function ViewModeBehavior() {
            this.p_name = '';
        }
        ViewModeBehavior.prototype.initialize = function (base) {
            this.p_base = base;
        };

        Object.defineProperty(ViewModeBehavior.prototype, "name", {
            //----- name
            get: function () {
                return this.p_name;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Event Handlers
        *====================================================================*/
        ViewModeBehavior.prototype.handleViewModeActivated = function (view) {
        };
        ViewModeBehavior.prototype.handleViewModeDeactivated = function () {
        };

        ViewModeBehavior.prototype.handleViewUpdated = function (args) {
        };

        ViewModeBehavior.prototype.handleViewResized = function (args) {
        };

        ViewModeBehavior.prototype.handleViewDragged = function (args) {
        };
        ViewModeBehavior.prototype.handleViewDragDone = function (args) {
        };

        ViewModeBehavior.prototype.handleContentChanged = function (args) {
        };
        ViewModeBehavior.prototype.handleContentLoaded = function (args) {
        };

        ViewModeBehavior.prototype.handleModelSelected = function (args) {
        };
        ViewModeBehavior.prototype.handleModelDeselected = function (args) {
        };

        ViewModeBehavior.prototype.handleModelOpened = function (args) {
        };
        ViewModeBehavior.prototype.handleModelClosed = function (args) {
        };

        ViewModeBehavior.prototype.handleModelFrozen = function (args) {
        };
        ViewModeBehavior.prototype.handleModelUnfrozen = function (args) {
        };

        ViewModeBehavior.prototype.handleViewClick = function (args) {
        };
        ViewModeBehavior.prototype.handleViewClickAndHold = function (args) {
        };
        ViewModeBehavior.prototype.handleViewDoubleClick = function (args) {
        };
        return ViewModeBehavior;
    })();
    lux.ViewModeBehavior = ViewModeBehavior;
})(lux || (lux = {})); // End of module
/// <reference path='viewModeBehavior.ts' />
var lux;
(function (lux) {
    var ViewModeCommon = (function (_super) {
        __extends(ViewModeCommon, _super);
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function ViewModeCommon() {
            _super.call(this);
        }
        ViewModeCommon.prototype.initialize = function (base) {
            _super.prototype.initialize.call(this, base);
        };

        /*====================================================================*
        START: Event Handlers
        *====================================================================*/
        ViewModeCommon.prototype.handleViewModeActivated = function (view) {
            this.p_base.view.contentContainer.isClipChildControls = false;

            //this.p_base.view.style.background.color = Color.empty;
            this.p_base.view.anchorPoint.x = 0.5;
            this.p_base.view.anchorPoint.y = 0.5;
            this.p_base.view.zoomDragManager.speed = 0.4; // Affects how quickly items animate to their initial positions.
        };

        ViewModeCommon.prototype.handleViewResized = function (args) {
            if (this.p_base.view.contentContainer != null) {
                this.p_base.view.contentContainer.width = this.p_base.view.width;
                this.p_base.view.contentContainer.height = this.p_base.view.height;
            }

            this.p_base.view.inputControl.width = this.p_base.view.width;
            this.p_base.view.inputControl.height = this.p_base.view.height;
        };

        ViewModeCommon.prototype.handleContentLoaded = function (args) {
            if (lux.g.isNotEmpty(this.p_base.view.content)) {
                this.p_base.view.isAspectRatioMaintained = false;
                this.p_base.view.width = this.p_base.view.content.width;
                this.p_base.view.height = this.p_base.view.content.height;

                if (this.p_base.view.content.type == 1 /* IMAGE */ || this.p_base.view.content.type == 3 /* VECTOR */ || this.p_base.view.content.type == 2 /* VIDEO */) {
                    this.p_base.view.isAspectRatioMaintained = true;
                }
            }

            this.p_base.view.setWidthWithoutInvalidation(this.p_base.view.contentContainer.width);
            this.p_base.view.setHeightWithoutInvalidation(this.p_base.view.contentContainer.height);
            this.p_base.view.doContentLoaded(new lux.ModelEventArgs(this.p_base.view.model, true));
        };

        ViewModeCommon.prototype.handleViewClick = function (args) {
            if (!this.p_base.view.model.isSelected) {
                this.p_base.view.model.toggleOpenClose();
            }
        };

        ViewModeCommon.prototype.handleViewClickAndHold = function (args) {
            this.p_base.view.initiateDrag();
        };
        ViewModeCommon.prototype.handleViewDoubleClick = function (args) {
            this.p_base.view.model.toggleSelectDeselect();
        };
        return ViewModeCommon;
    })(lux.ViewModeBehavior);
    lux.ViewModeCommon = ViewModeCommon;
})(lux || (lux = {})); // End of module
/// <reference path='../collections/map.ts' />
/// <reference path='model.ts' />
/// <reference path='viewModeBehavior.ts' />
/// <reference path='viewModeCommon.ts' />
var lux;
(function (lux) {
    var ViewMode = (function () {
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function ViewMode() {
            /*====================================================================*
            START: Behaviors
            *====================================================================*/
            this.p_behaviors = new lux.Map();
            this.addBehavior(new lux.ViewModeCommon());
        }
        Object.defineProperty(ViewMode.prototype, "view", {
            /*====================================================================*
            START: Properties
            *====================================================================*/
            get: function () {
                return this.p_view;
            },
            enumerable: true,
            configurable: true
        });

        ViewMode.prototype.addBehavior = function (behavior) {
            behavior.initialize(this);
            this.p_behaviors.setValue(behavior.name, behavior);
        };

        ViewMode.prototype.removeBehavior = function (name) {
            this.p_behaviors.remove(name);
        };

        /*====================================================================*
        START: Event Handlers
        *====================================================================*/
        ViewMode.prototype.activate = function (view) {
            this.p_view = view;

            this.p_view.resized.listen(this.p_onViewResized, this);
            this.p_view.zoomDragManager.dragged.listen(this.p_onViewDragged, this);
            this.p_view.zoomDragManager.dragDone.listen(this.p_onViewDragDone, this);
            this.p_view.contentChanged.listen(this.p_onContentChanged, this);
            this.p_view.content.loaded.listen(this.p_onContentLoaded, this);

            this.p_onActivated();
        };
        ViewMode.prototype.p_onActivated = function () {
            var _this = this;
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleViewModeActivated(_this.p_view);
            });
        };

        ViewMode.prototype.deactivate = function () {
            this.p_view.resized.remove(this.p_onViewResized, this);
            this.p_view.zoomDragManager.dragged.remove(this.p_onViewDragged, this);
            this.p_view.zoomDragManager.dragDone.remove(this.p_onViewDragDone, this);
            this.p_view.contentChanged.remove(this.p_onContentChanged, this);
            this.p_view.content.loaded.remove(this.p_onContentLoaded, this);

            this.p_onDeactivated();
        };
        ViewMode.prototype.p_onDeactivated = function () {
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleViewModeDeactivated();
            });
        };

        //----- TODO: Check out all these viewUpdated events and methods and make sure we didn't
        //----- set up some kind of infinite loop.
        ViewMode.prototype.p_onViewUpdated = function (args) {
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleViewUpdated(args);
            });
        };

        ViewMode.prototype.p_onViewResized = function (args) {
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleViewResized(args);
            });
        };

        ViewMode.prototype.p_onViewDragged = function (args) {
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleViewDragged(args);
            });
        };
        ViewMode.prototype.p_onViewDragDone = function (args) {
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleViewDragDone(args);
            });
        };

        ViewMode.prototype.p_onContentChanged = function (args) {
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleContentLoaded(args);
            });

            if (lux.g.isEmpty(this.p_view.content))
                return;

            //----- args will contain the previous control.
            this.p_view.content.loaded.listen(this.p_onContentLoaded, this);
            if (this.p_view.content.isLoaded) {
                this.p_onContentLoaded(new lux.ControlEventArgs(this.p_view.contentContainer));
            }
        };
        ViewMode.prototype.p_onContentLoaded = function (args) {
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleContentLoaded(args);
            });
        };

        ViewMode.prototype.p_onModelSelected = function (args) {
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleModelSelected(args);
            });
        };

        ViewMode.prototype.p_onModelDeselected = function (args) {
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleModelDeselected(args);
            });
        };

        ViewMode.prototype.p_onModelOpened = function (args) {
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleModelOpened(args);
            });
        };

        ViewMode.prototype.p_onModelClosed = function (args) {
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleModelClosed(args);
            });
        };

        ViewMode.prototype.p_onViewClick = function (args) {
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleViewClick(args);
            });
        };

        ViewMode.prototype.p_onViewClickAndHold = function (args) {
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleViewClickAndHold(args);
            });
        };

        ViewMode.prototype.p_onViewDoubleClick = function (args) {
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleViewDoubleClick(args);
            });
        };

        ViewMode.prototype.updateSelectionIndicators = function (targetScale) {
        };
        return ViewMode;
    })();
    lux.ViewMode = ViewMode;
})(lux || (lux = {}));
/// <reference path='../collections/list.ts' />
/// <reference path='mathTools.ts' />
var lux;
(function (lux) {
    var GuidGen = (function () {
        function GuidGen() {
        }
        GuidGen.generate = function () {
            //----- Code to generate random uuid, without the uuid.dart package.
            var hexDigits = '0123456789abcdef';
            var uuid = new lux.List();

            for (var i = 0; i < 36; i++) {
                var hexPos = lux.MathTools.getRandomConstrained(0, 15);
                uuid.add(hexDigits.substring(hexPos, hexPos + 1), i);
            }

            var pos = (parseInt(uuid.item(19), 16) & 0x3) | 0x8;

            uuid.add('4', 14); // bits 12-15 of the time_hi_and_version field to 0010
            uuid.add(hexDigits.substring(pos, pos + 1), 19);

            uuid.add('-', 8);
            uuid.add('-', 13);
            uuid.add('-', 18);
            uuid.add('-', 23);

            var uuidString = '';
            for (var i = 0; i < uuid.length; i++) {
                uuidString += uuid.item(i);
            }

            return uuidString;
        };

        GuidGen.generateShort = function () {
            var guid = this.generate();
            return GuidGen.encodeShort(guid);
        };

        GuidGen.toByteArray = function (guid) {
            //----- Performs exactly the same function as _uuid.parse(guid);
            //----- Keeping here for future reference.
            var stripped = guid.replace('-', '').replace('{', '');

            var bytes = new lux.List();

            for (var i = 0; i < 16; i++) {
                var s = stripped.substring(i * 2, (i * 2) + 2);
                bytes.add(parseInt('0x' + s));
            }

            return bytes;
        };

        GuidGen.encodeShort = function (guid) {
            //----- A base64 conversion of a guid is supposed to be 22 chars ending in "==".
            //----- Just converting a representation: string of a guid to a List<int>
            //----- doesn't work here, hence the toByteArray method.
            //----- The byte array needs to contain 16 values.
            /*bytes: List<int> = this._uuid.parse(guid);
            var base64: string = CryptoUtils.bytesToBase64(bytes, urlSafe: true);
            var shortGuid: string = base64.substring(0, 22);
            return shortGuid;*/
            return guid;
        };

        GuidGen.decodeShort = function (shortGuid) {
            //List<int> bytes = CryptoUtils.base64StringToBytes(shortGuid + "==");
            //return _uuid.unparse(bytes);
            return shortGuid;
        };

        Object.defineProperty(GuidGen, "_ix", {
            get: function () {
                return 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            },
            enumerable: true,
            configurable: true
        });

        /// If bHoldToNineCharacters is true, this method always returns a 9 character string.
        /// iE2XnNGpF represents the 9: number,007,199,254,740,992.
        /// You can encode a number, then decode the 9 character generated to: string return the original number.
        /// This method uses the base-62 index stored in _ix, math.log() and math.pow get the right index based on the number.
        /// 100000000000000 = 2ka938y2a
        /// If you don't want the trailing a's, just start with 100,000,000,000,000, which will still provide 8907199254740992 unique ID's.
        GuidGen.encodeNumber = function (number, bHoldToNineCharacters) {
            if (typeof bHoldToNineCharacters === "undefined") { bHoldToNineCharacters = false; }
            if (number >= 9007199254740992) {
                console.log('GuidGen.encodeNumber() is out of numbers.');
                return '';
            }

            var r = '';
            var ixLength = 62;

            for (var i = (Math.log(number) / Math.floor(Math.log(ixLength))); i >= 0; i--) {
                var startIndex = ((number / Math.round(Math.floor(Math.pow(ixLength, i))) % ixLength));
                r += this._ix.substring(startIndex, startIndex + 1);
            }
            ;

            //----- Fill out to 9 characters.
            if (bHoldToNineCharacters) {
                for (var l = r.length; l < 9; l++) {
                    r = 'a' + r;
                }
            }

            return GuidGen._reverseString(r);
        };
        GuidGen.decodeNumber = function (encodedString) {
            var r = 0;
            var ixLength = 62;

            encodedString = this._reverseString(encodedString);

            for (var i = 0; i < encodedString.length; i++) {
                r += this._ix.indexOf(encodedString.substring(i, i + 1)) * Math.pow(ixLength, (encodedString.length - 1 - i));
            }

            return r;
        };
        GuidGen._reverseString = function (inputString) {
            var stringArray = inputString.split('');
            stringArray.reverse();
            return stringArray.join();
        };
        return GuidGen;
    })();
    lux.GuidGen = GuidGen;
})(lux || (lux = {})); // End of module
/// <reference path='../signal.ts' />
/// <reference path='../control.ts' />
/// <reference path='../events.ts' />
/// <reference path='../controls/image.ts' />
/// <reference path='modelCollection.ts' />
/// <reference path='collectionView.ts' />
/// <reference path='view.ts' />
/// <reference path='viewMode.ts' />
/// <reference path='../util/guidGen.ts' />
var lux;
(function (lux) {
    

    

    

    

    /*====================================================================*
    ===== START: ModelEventArgs
    *====================================================================*/
    var ModelEventArgs = (function (_super) {
        __extends(ModelEventArgs, _super);
        function ModelEventArgs(model, isAnimate, attributes) {
            if (typeof attributes === "undefined") { attributes = null; }
            _super.call(this);
            this.isAnimate = false;
            this.attributes = new lux.Attributes();
            this.model = model;
            this.isAnimate = isAnimate;
            if (attributes != null)
                this.attributes = attributes;
        }
        return ModelEventArgs;
    })(lux.EventArgs);
    lux.ModelEventArgs = ModelEventArgs;

    /*====================================================================*
    ===== START: ViewChangedEventArgs
    *====================================================================*/
    var ViewChangedEventArgs = (function (_super) {
        __extends(ViewChangedEventArgs, _super);
        function ViewChangedEventArgs(model, prevView) {
            _super.call(this);
            this.model = model;
            this.prevView = prevView;
        }
        return ViewChangedEventArgs;
    })(lux.EventArgs);
    lux.ViewChangedEventArgs = ViewChangedEventArgs;

    /*====================================================================*
    ===== START: ViewModeChangedEventArgs
    *====================================================================*/
    var ViewModeChangedEventArgs = (function (_super) {
        __extends(ViewModeChangedEventArgs, _super);
        function ViewModeChangedEventArgs(view, prevMode) {
            _super.call(this);
            this.view = view;
            this.prevMode = prevMode;
        }
        return ViewModeChangedEventArgs;
    })(lux.EventArgs);
    lux.ViewModeChangedEventArgs = ViewModeChangedEventArgs;

    /*====================================================================*
    ===== START: CollectionViewUpdatedEventArgs
    *====================================================================*/
    var CollectionViewUpdatedEventArgs = (function (_super) {
        __extends(CollectionViewUpdatedEventArgs, _super);
        function CollectionViewUpdatedEventArgs(isAnimate, attributes) {
            _super.call(this);
            this.isAnimate = false;
            this.attributes = new lux.Attributes();
            this.isAnimate = isAnimate;
            if (attributes)
                this.attributes = attributes;
        }
        return CollectionViewUpdatedEventArgs;
    })(lux.EventArgs);
    lux.CollectionViewUpdatedEventArgs = CollectionViewUpdatedEventArgs;

    /*====================================================================*
    ===== START: Model
    *====================================================================*/
    var Model = (function () {
        function Model(bContainerModel) {
            if (typeof bContainerModel === "undefined") { bContainerModel = false; }
            this.p_ID = lux.GuidGen.generateShort();
            this.p_bRoot = false;
            this.p_bContainer = false;
            this.p_bOpen = false;
            this.p_bSelected = false;
            this.p_attributes = new lux.Attributes();
            /*====================================================================*
            START: Event Handlers
            *====================================================================*/
            this.viewChanged = new lux.Signal();
            this.opened = new lux.Signal();
            this.closed = new lux.Signal();
            this.selected = new lux.Signal();
            this.deselected = new lux.Signal();
            this.viewUpdated = new lux.Signal();
            this.attachedToModelSystem = new lux.Signal();
            this.p_initialize(bContainerModel);
        }
        Model.fromMap = function (map) {
            try  {
                var modelAttributes = lux.Attributes.fromMap(map);
                var bContainerModel = modelAttributes.get('isContainer').value;
                var model = new Model(bContainerModel);

                model.attributes = modelAttributes.get('attributes').value;
                model.ID = modelAttributes.get('ID').value;

                model.p_initialize(bContainerModel);

                return model;
            } catch (e) {
                console.log('Error in Model.fromMap: ' + e.toString());
            }
        };

        Model.prototype.p_initialize = function (bContainerModel) {
            if (typeof bContainerModel === "undefined") { bContainerModel = false; }
            this.viewUpdated.listen(this.p_onViewUpdated, this);
            this.opened.listen(this.p_onOpened, this);
            this.closed.listen(this.p_onClosed, this);
            this.selected.listen(this.p_onSelected, this);
            this.deselected.listen(this.p_onDeselected, this);

            this.p_onInitialize(bContainerModel);
        };
        Model.prototype.p_onInitialize = function (bContainerModel) {
            //----- IMPORTANT: The sequence matters here.
            //----- First apply the view, then set isContainer, then apply the view mode
            this.view = new lux.View();
            if (bContainerModel)
                this.isContainer = bContainerModel;
        };

        Object.defineProperty(Model.prototype, "ID", {
            /*====================================================================*
            START: Members and Properties
            *====================================================================*/
            //----- ID
            /// A unique identifier in Uri format.
            get: function () {
                return this.p_ID;
            },
            set: function (value) {
                this.p_ID = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Model.prototype, "view", {
            //----- view
            get: function () {
                return this.p_view;
            },
            set: function (value) {
                var prevView = this.p_view;
                if (this.p_view != null)
                    this.p_view.deactivate();
                this.p_view = value;
                this.p_view.activate(this);

                this._doViewChanged(this, prevView);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Model.prototype, "parentCollection", {
            //----- parentCollection
            get: function () {
                return this.p_parentCollection;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Model.prototype, "root", {
            //----- root
            get: function () {
                return this.p_root;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Model.prototype, "isRoot", {
            get: function () {
                return this.p_bRoot;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Model.prototype, "models", {
            //----- models
            get: function () {
                return this.p_models;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Model.prototype, "isContainer", {
            //----- isContainer
            get: function () {
                return this.p_bContainer;
            },
            set: function (value) {
                if (value && !this.p_bContainer) {
                    this.p_models = new lux.ModelCollection(this);
                    this.p_view.content = this.p_models.view;
                } else if (!value && this.p_bContainer) {
                    this.p_models.view = null;
                    this.p_models = null;
                }

                this.p_bContainer = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Model.prototype, "isOpen", {
            //----- isOpen
            get: function () {
                return this.p_bOpen;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Model.prototype, "isSelected", {
            //----- isSelected
            get: function () {
                return this.p_bSelected;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Model.prototype, "attributes", {
            //----- attributes
            get: function () {
                return this.p_attributes;
            },
            enumerable: true,
            configurable: true
        });

        Model.prototype._doViewChanged = function (model, prevView) {
            this.viewChanged.dispatch(new ViewChangedEventArgs(model, prevView));
        };

        Model.prototype.doViewUpdated = function (bAnimate) {
            this.viewUpdated.dispatch(new ModelEventArgs(this, bAnimate));
        };

        Model.prototype.p_onViewChanged = function (args) {
        };
        Model.prototype.p_onViewUpdated = function (args) {
        };

        Model.prototype.p_onSelected = function (args) {
        };
        Model.prototype.p_onDeselected = function (args) {
        };
        Model.prototype.p_onOpened = function (args) {
        };
        Model.prototype.p_onClosed = function (args) {
        };

        Model.prototype.p_onAttachedToModelSystem = function () {
        };

        Model.prototype.p_model_onAttachedToModelSystem = function () {
            try  {
                if (this.p_parentCollection == null && this.p_parentCollection.parentModel == null)
                    return;

                if (!this.p_bRoot)
                    this.p_root = this.p_parentCollection.parentModel.root;

                if (this.p_models != null)
                    this.p_models.p_onAttachedToModelSystemAll();

                this.attachedToModelSystem.dispatch(new ModelEventArgs(this, true));
                this.p_onAttachedToModelSystem();
            } catch (e) {
                console.log("Exception in Model.this.p_model_onAttachedToModelSystem: " + e);
            }
        };

        Model.prototype.p_onRemovedFromModelSystem = function () {
        };
        Model.prototype.p_model_onRemovedFromModelSystem = function () {
            if (!this.p_bRoot)
                this.p_root = null;
            this.p_onRemovedFromModelSystem();
        };

        /*====================================================================*
        START: Methods
        *====================================================================*/
        Model.prototype.toggleOpenClose = function (bAnimate) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            if (!this.p_bOpen) {
                this.open(bAnimate);
            } else {
                this.close(bAnimate);
            }
        };

        Model.prototype.openSpecial = function (args) {
            if (this.p_bOpen)
                return;

            this.p_bOpen = true; // Set this to true before propagating events.
            if (this.p_bContainer && this.p_models != null)
                this.p_models._doParentModelOpened(args);
            this.opened.dispatch(args);
        };

        Model.prototype.open = function (bAnimate) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            if (this.p_bOpen)
                return;

            this.p_bOpen = true; // Set this to true before propagating events.
            var args = new ModelEventArgs(this, bAnimate);
            if (this.p_bContainer && this.p_models != null)
                this.p_models._doParentModelOpened(args);
            this.opened.dispatch(args);
        };

        Model.prototype.close = function (bAnimate, bOpeningOther) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            if (typeof bOpeningOther === "undefined") { bOpeningOther = false; }
            if (!this.p_bOpen)
                return;

            var args = new ModelEventArgs(this, bAnimate);

            if (args.attributes == null)
                args.attributes = new lux.Attributes();
            args.attributes.save("isOpeningOther", 1 /* BOOLEAN */, bOpeningOther);

            if (this.p_bContainer && this.p_models != null)
                this.p_models._doParentModelClosed(args);
            this.closed.dispatch(args);

            this.p_bOpen = false; // Dont' set this to false until after events are propagated.
        };

        Model.prototype.toggleSelectDeselect = function (bAnimate) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            if (!this.p_bSelected) {
                this.select(bAnimate);
            } else {
                this.deselect(bAnimate);
            }
        };

        Model.prototype.select = function (bAnimate) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            if (this.p_bSelected)
                return;
            this.p_bSelected = true; // Set this to true before propagating events.
            this.selected.dispatch(new ModelEventArgs(this, bAnimate));
        };

        Model.prototype.deselect = function (bAnimate) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            if (!this.p_bSelected)
                return;
            this.deselected.dispatch(new ModelEventArgs(this, bAnimate));
            this.p_bSelected = false; // Dont' set this to false until after events are propagated.
        };

        Model.prototype.toMap = function () {
            try  {
                var modelAttributes = new lux.Attributes();

                modelAttributes.save('ID', 9 /* STRING */, this.ID);
                modelAttributes.save('isContainer', 1 /* BOOLEAN */, this.isContainer);

                modelAttributes.save('attributes', 0 /* ATTRIBUTES */, this.p_attributes);

                return modelAttributes.toMap();
            } catch (e) {
                console.log('Error in Model.toMap: ' + e.toString());
                return null;
            }
        };
        Model.prototype.toJsonString = function () {
            var jsonString = JSON.stringify(this.toMap());
            return jsonString;
        };
        return Model;
    })();
    lux.Model = Model;
})(lux || (lux = {})); // End of module
/// <reference path='model.ts' />
/// <reference path='collectionViewModeBase.ts' />
/// <reference path='../events.ts' />
/// <reference path='../zoomDragManager.ts' />
var lux;
(function (lux) {
    var CollectionViewModeBehavior = (function () {
        /*====================================================================*
        START: Constructors
        *====================================================================*/
        function CollectionViewModeBehavior() {
            this.p_name = '';
        }
        CollectionViewModeBehavior.prototype.initialize = function (base) {
            this.p_base = base;
        };

        Object.defineProperty(CollectionViewModeBehavior.prototype, "name", {
            //----- name
            get: function () {
                return this.p_name;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        /*====================================================================*
        START: Event Handlers
        *====================================================================*/
        CollectionViewModeBehavior.prototype.handleViewModeActivated = function () {
        };
        CollectionViewModeBehavior.prototype.handleViewModeDeactivated = function () {
        };

        CollectionViewModeBehavior.prototype.handleViewUpdated = function (args) {
        };

        CollectionViewModeBehavior.prototype.handleModelAdded = function (args) {
        };
        CollectionViewModeBehavior.prototype.handleModelRemoved = function (args) {
        };

        CollectionViewModeBehavior.prototype.handleModelOpened = function (args) {
        };
        CollectionViewModeBehavior.prototype.handleModelClosed = function (args) {
        };

        CollectionViewModeBehavior.prototype.handleModelSelected = function (args) {
        };
        CollectionViewModeBehavior.prototype.handleModelDeselected = function (args) {
        };

        CollectionViewModeBehavior.prototype.handleRootKeyDown = function (args) {
        };
        CollectionViewModeBehavior.prototype.handleRootKeyUp = function (args) {
        };

        CollectionViewModeBehavior.prototype.handleClipPanelMouseEnter = function (args) {
        };
        CollectionViewModeBehavior.prototype.handleClipPanelMouseLeave = function (args) {
        };
        CollectionViewModeBehavior.prototype.handleClipPanelMouseLeftButtonDown = function (args) {
        };
        CollectionViewModeBehavior.prototype.handleClipPanelMouseClick = function (args) {
        };

        CollectionViewModeBehavior.prototype.handleZoomPanelZoomed = function (args) {
        };
        CollectionViewModeBehavior.prototype.handleZoomPanelDragged = function (args) {
        };
        CollectionViewModeBehavior.prototype.handleZoomPanelChanged = function (args) {
        };

        CollectionViewModeBehavior.prototype.handleClipPanelDragDrop = function (args) {
        };

        CollectionViewModeBehavior.prototype.handleZoomDragTargetsReached = function (args) {
        };
        CollectionViewModeBehavior.prototype.handleZoomPanelDragDone = function (args) {
        };
        return CollectionViewModeBehavior;
    })();
    lux.CollectionViewModeBehavior = CollectionViewModeBehavior;
})(lux || (lux = {})); // End of module
/// <reference path='collectionViewModeBehavior.ts' />
var lux;
(function (lux) {
    var CollectionViewModeCommon = (function (_super) {
        __extends(CollectionViewModeCommon, _super);
        /*====================================================================*
        START: Constructors
        *====================================================================*/
        function CollectionViewModeCommon() {
            _super.call(this);
            this.p_name = 'common';
        }
        CollectionViewModeCommon.prototype.initialize = function (base) {
            _super.prototype.initialize.call(this, base);
        };

        /*====================================================================*
        START: Event Handlers
        *====================================================================*/
        CollectionViewModeCommon.prototype.handleViewModeActivated = function () {
            var _this = this;
            this.p_base.activated.listen(function () {
                _this.p_base.isAnimate = true;
            });
        };

        CollectionViewModeCommon.prototype.handleModelOpened = function (args) {
            var model = args.model;

            //----- First, close any other model that might be opened.
            if (this.p_base.view.models.modelLastOpened != args.model) {
                this.p_base.view.returnOpenModelToOriginalZIndex();
                this.p_base.view.models.closeLastOpenedModel();
            }

            //----- And, deselect currently: any selected model.
            this.p_base.view.returnSelectedModelToOriginalZIndex();
            this.p_base.view.models.deselectLastSelectedModel();

            this.p_base.setupOpenModel(args);
        };

        CollectionViewModeCommon.prototype.handleModelClosed = function (args) {
            var model = args.model;

            if (model.isContainer) {
                //----- If the opened model is a container, restore interaction on the parent collection's zoomPanel.
                this.p_base.view.zoomPanel.isAllowDrag = this.p_base.view.originalIsAllowDrag;
                this.p_base.view.zoomPanel.isAllowZoom = this.p_base.view.originalIsAllowZoom;

                //----- And, move it back to its original zIndex.
                this.p_base.view.returnOpenModelToOriginalZIndex();
            }

            this.p_base.view.zoomPanel.zoomDragManager.isConstrained = this.p_base.view.originalIsConstrained;

            if (!this.p_base.view.isIgnoreOriginalValuesOnModelClose) {
                if (args.isAnimate && this.p_base.isAnimate) {
                    this.p_base.view.zoomPanel.zoomDragManager.targetScale = this.p_base.view.originalZoomDragScale;
                    this.p_base.view.zoomPanel.zoomDragManager.targetX = this.p_base.view.orignalZoomDragX;
                    this.p_base.view.zoomPanel.zoomDragManager.targetY = this.p_base.view.originalZoomDragY;

                    //----- rotation
                    this.p_base.view.zoomPanel.zoomDragManager.targetRotationZ = this.p_base.view.originalZoomDragRotationZ;
                } else {
                    this.p_base.view.zoomPanel.scale = this.p_base.view.originalZoomDragScale;
                    this.p_base.view.zoomPanel.x = this.p_base.view.orignalZoomDragX;
                    this.p_base.view.zoomPanel.y = this.p_base.view.originalZoomDragY;

                    //----- rotation
                    this.p_base.view.zoomPanel.rotationZ = this.p_base.view.originalZoomDragRotationZ;
                }
            }

            this.p_base.view.isIgnoreOriginalValuesOnModelClose = false;
        };

        CollectionViewModeCommon.prototype.handleModelSelected = function (args) {
            //----- First, deselect other: any model that might be selected.
            if (this.p_base.view.models.modelLastSelected != args.model) {
                this.p_base.view.returnSelectedModelToOriginalZIndex();
                this.p_base.view.models.deselectLastSelectedModel();
            }

            args.model.view.moveToTop();
        };

        CollectionViewModeCommon.prototype.handleModelDeselected = function (args) {
            this.p_base.view.returnSelectedModelToOriginalZIndex();
        };

        CollectionViewModeCommon.prototype.handleClipPanelMouseLeftButtonDown = function (args) {
            this.p_base.view.isIgnoreClick = false;
        };

        CollectionViewModeCommon.prototype.handleClipPanelMouseClick = function (args) {
            if (!this.p_base.view.isIgnoreClick) {
                this.p_base.view.returnOpenModelToOriginalZIndex();
                this.p_base.view.models.closeLastOpenedModel();
                this.p_base.view.returnSelectedModelToOriginalZIndex();
                this.p_base.view.models.deselectLastSelectedModel();
            }

            args.isHandled = true;
        };

        CollectionViewModeCommon.prototype.handleZoomPanelChanged = function (args) {
            //----- Ignore the click on the clipPanel, so we don't force selected: any model to be unselected.
            this.p_base.view.isIgnoreClick = true;

            this.p_base.view.models.closeLastOpenedModel(false, true);
        };
        return CollectionViewModeCommon;
    })(lux.CollectionViewModeBehavior);
    lux.CollectionViewModeCommon = CollectionViewModeCommon;
})(lux || (lux = {})); // End of module
/// <reference path='../collections/map.ts' />
/// <reference path='model.ts' />
/// <reference path='collectionViewModeBehavior.ts' />
/// <reference path='collectionViewModeCommon.ts' />
var lux;
(function (lux) {
    var CollectionViewModeBase = (function () {
        /*====================================================================*
        START: Constructors
        *====================================================================*/
        function CollectionViewModeBase() {
            this.isAnimate = true;
            this.p_behaviors = new lux.Map();
            /*====================================================================*
            START: Subscriptions
            *====================================================================*/
            this.activated = new lux.Signal();
            this.addBehavior(new lux.CollectionViewModeCommon());
        }
        Object.defineProperty(CollectionViewModeBase.prototype, "view", {
            /*====================================================================*
            START: Properties
            *====================================================================*/
            get: function () {
                return this.p_view;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Event Handlers
        *====================================================================*/
        CollectionViewModeBase.prototype.activate = function (view) {
            var _this = this;
            this.p_view = view;

            if (this.p_view.models != null) {
                this.p_view.models.viewUpdated.listen(this.p_onViewUpdated, this);
                this.p_view.resized.listen(this.p_onViewResized, this);

                this.p_view.models.modelAdded.listen(this.p_onModelAdded, this);
                this.p_view.models.modelRemoved.listen(this.p_onModelRemoved, this);
                this.p_view.models.modelOpened.listen(this.p_onModelOpened, this);
                this.p_view.models.modelClosed.listen(this.p_onModelClosed, this);
                this.p_view.models.modelSelected.listen(this.p_onModelSelected, this);
                this.p_view.models.modelDeselected.listen(this.p_onModelDeselected, this);

                //----- Keyboard events.
                if (this.p_view.root != null) {
                    this.p_view.root.keyDown.listen(this.p_root_onKeyDown, this);
                    this.p_view.root.keyUp.listen(this.p_root_onKeyUp, this);
                } else {
                    this.p_view.attachedToControlSystem.listen(function () {
                        _this.p_view.root.keyDown.listen(_this.p_root_onKeyDown, _this);
                        _this.p_view.root.keyUp.listen(_this.p_root_onKeyUp, _this);
                    }, this);
                }

                //----- Mouse events.
                this.p_view.clipPanel.mouseEnter.listen(this.p_clipPanel_onMouseEnter, this);
                this.p_view.clipPanel.mouseLeave.listen(this.p_clipPanel_onMouseLeave, this);
                this.p_view.clipPanel.mouseLeftButtonDown.listen(this.p_clipPanel_onMouseLeftButtonDown, this);
                this.p_view.clipPanel.mouseClick.listen(this.p_clipPanel_onMouseClick, this);
                this.p_view.clipPanel.dragDrop.listen(this.p_clipPanel_onDragDrop, this);

                this.p_view.zoomPanel.zoomDragManager.zoomed.listen(this.p_zoomPanel_onZoomed, this);
                this.p_view.zoomPanel.zoomDragManager.dragged.listen(this.p_zoomPanel_onDragged, this);

                this.p_view.zoomPanel.zoomDragManager.targetsReached.listen(this.p_onZoomDragTargetsReached, this);
                this.p_view.zoomPanel.zoomDragManager.dragDone.listen(this.p_zoomPanel_onDragDone, this);

                this.p_onActivated();

                this.p_view.models.doViewUpdated(true);

                this.activated.dispatch(new lux.EventArgs());
            }
        };
        CollectionViewModeBase.prototype.p_onActivated = function () {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleViewModeActivated();
                });
            }
        };

        CollectionViewModeBase.prototype.deactivate = function () {
            var _this = this;
            this.p_onDeactivated();

            if (this.p_view == null || this.p_view.models == null)
                return;

            this.p_view.models.viewUpdated.remove(this.p_onViewUpdated);
            this.p_view.resized.remove(this.p_onViewResized);

            this.p_view.models.modelAdded.remove(this.p_onModelAdded, this);
            this.p_view.models.modelRemoved.remove(this.p_onModelRemoved, this);
            this.p_view.models.modelOpened.remove(this.p_onModelOpened, this);
            this.p_view.models.modelClosed.remove(this.p_onModelClosed, this);
            this.p_view.models.modelSelected.remove(this.p_onModelSelected, this);
            this.p_view.models.modelDeselected.remove(this.p_onModelDeselected, this);

            //----- Keyboard events.
            if (this.p_view.root != null) {
                this.p_view.root.keyDown.remove(this.p_root_onKeyDown, this);
                this.p_view.root.keyUp.remove(this.p_root_onKeyUp, this);
            } else {
                this.p_view.attachedToControlSystem.remove(function () {
                    _this.p_view.root.keyDown.remove(_this.p_root_onKeyDown, _this);
                    _this.p_view.root.keyUp.remove(_this.p_root_onKeyUp, _this);
                }, this);
            }

            //----- Mouse events.
            this.p_view.clipPanel.mouseEnter.remove(this.p_clipPanel_onMouseEnter, this);
            this.p_view.clipPanel.mouseLeave.remove(this.p_clipPanel_onMouseLeave, this);
            this.p_view.clipPanel.mouseLeftButtonDown.remove(this.p_clipPanel_onMouseLeftButtonDown, this);
            this.p_view.clipPanel.mouseClick.remove(this.p_clipPanel_onMouseClick, this);
            this.p_view.clipPanel.dragDrop.remove(this.p_clipPanel_onDragDrop, this);

            this.p_view.zoomPanel.zoomDragManager.zoomed.remove(this.p_zoomPanel_onZoomed, this);
            this.p_view.zoomPanel.zoomDragManager.dragged.remove(this.p_zoomPanel_onDragged, this);

            this.p_view.zoomPanel.zoomDragManager.targetsReached.remove(this.p_onZoomDragTargetsReached, this);
            this.p_view.zoomPanel.zoomDragManager.dragDone.remove(this.p_zoomPanel_onDragDone, this);

            this.p_onDeactivated();

            this.p_view.models.doViewUpdated(true);
        };
        CollectionViewModeBase.prototype.p_onDeactivated = function () {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleViewModeDeactivated();
                });
            }
        };

        CollectionViewModeBase.prototype.p_onViewUpdated = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors !== undefined && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleViewUpdated(args);
                });
            }
        };

        CollectionViewModeBase.prototype.p_onViewResized = function (args) {
        };

        CollectionViewModeBase.prototype.p_onModelAdded = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleModelAdded(args);
                });
            }
        };

        CollectionViewModeBase.prototype.p_onModelRemoved = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleModelRemoved(args);
                });
            }
        };

        CollectionViewModeBase.prototype.p_onModelOpened = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleModelOpened(args);
                });
            }
        };

        CollectionViewModeBase.prototype.p_onModelClosed = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleModelClosed(args);
                });
            }
        };

        CollectionViewModeBase.prototype.p_onModelSelected = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleModelSelected(args);
                });
            }
        };

        CollectionViewModeBase.prototype.p_onModelDeselected = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleModelDeselected(args);
                });
            }
        };

        CollectionViewModeBase.prototype.p_root_onKeyDown = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleRootKeyDown(args);
                });
            }
        };

        CollectionViewModeBase.prototype.p_root_onKeyUp = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleRootKeyUp(args);
                });
            }
        };

        CollectionViewModeBase.prototype.p_clipPanel_onMouseEnter = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleClipPanelMouseEnter(args);
                });
            }
        };

        CollectionViewModeBase.prototype.p_clipPanel_onMouseLeave = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleClipPanelMouseLeave(args);
                });
            }
        };

        CollectionViewModeBase.prototype.p_clipPanel_onMouseLeftButtonDown = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleClipPanelMouseLeftButtonDown(args);
                });
            }
        };

        CollectionViewModeBase.prototype.p_clipPanel_onMouseClick = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleClipPanelMouseClick(args);
                });
            }
        };

        CollectionViewModeBase.prototype.p_clipPanel_onDragDrop = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleClipPanelDragDrop(args);
                });
            }
        };

        CollectionViewModeBase.prototype.p_zoomPanel_onZoomed = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleZoomPanelZoomed(args);
                });
            }
            this.p_zoomPanel_onChanged(args);
        };

        CollectionViewModeBase.prototype.p_zoomPanel_onDragged = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleZoomPanelDragged(args);
                });
            }
            this.p_zoomPanel_onChanged(args);
        };

        CollectionViewModeBase.prototype.p_zoomPanel_onChanged = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleZoomPanelChanged(args);
                });
            }
        };

        CollectionViewModeBase.prototype.p_onZoomDragTargetsReached = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleZoomDragTargetsReached(args);
                });
            }
        };

        CollectionViewModeBase.prototype.p_zoomPanel_onDragDone = function (args) {
            if (this.p_behaviors !== null && this.p_behaviors.length > 0) {
                this.p_behaviors.forEach(function (name, behavior) {
                    behavior.handleZoomPanelDragDone(args);
                });
            }
        };

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        CollectionViewModeBase.prototype.initializeViewValues = function (model, bAnimate) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
        };

        CollectionViewModeBase.prototype.setupOpenModel = function (args, viewTargetWidth, viewTargetHeight) {
            var model = args.model;

            if (model.view === null || model.view === undefined)
                return;

            var viewWidth = this.p_view.clipPanel.width;
            var viewHeight = this.p_view.clipPanel.height;
            if (viewTargetWidth)
                viewWidth = viewTargetWidth;
            if (viewTargetHeight)
                viewHeight = viewTargetHeight;

            if (model.isContainer) {
                model.view.moveToTop();
            }

            //----- If the opened model is a container, lock down interaction on the parent collection's zoomPanel.
            if (model.isContainer) {
                this.p_view.zoomPanel.isAllowDrag = false;
                this.p_view.zoomPanel.isAllowZoom = false;
            }

            //----- Turn off constraints on the parent collection's zoomPanel
            this.p_view.zoomPanel.zoomDragManager.isConstrained = false;

            var modelScale = model.view.zoomDragManager.targetScale;
            var modelWidth = model.view.zoomDragManager.targetWidth;
            var modelHeight = model.view.zoomDragManager.targetHeight;
            var modelX = model.view.zoomDragManager.targetX;
            var modelY = model.view.zoomDragManager.targetY;
            var modelRotationZ = model.view.zoomDragManager.targetRotationZ;

            //----- Zoom the view to 100%, unless the model is larger than will fit in the available space at 100%.
            //----- In that case, we'll need to find the scale that will fit the whole model in the viewable space.
            //----- rs > rn ? (wn * hs/hn, hs) : (ws, hn * ws/wn)
            var ratioSpace = viewWidth / viewHeight;
            var ratioModel = modelWidth / modelHeight;
            var scale = 1.0;
            var targetScale = scale;

            if (!model.isContainer) {
                if (ratioSpace > ratioModel) {
                    //----- NOTE: I'm subtracting a small value from the view height here
                    //----- to avoid a bug that freezes scrolling in horizontal scrollStack
                    //----- view when the gallery is the exact height as the view.
                    //----- TODO: Fix the bug.
                    if (modelHeight > viewHeight)
                        scale = (viewHeight - 0.0001) / modelHeight;
                } else {
                    if (modelWidth > viewWidth)
                        scale = viewWidth / modelWidth;
                }
            }

            targetScale = scale / modelScale;

            if (args.isAnimate && this.isAnimate) {
                //----- Zoom our view to the appropriate scale.
                this.p_view.zoomPanel.zoomDragManager.targetX = -(modelX * targetScale) + (viewWidth / 2);
                this.p_view.zoomPanel.zoomDragManager.targetY = -(modelY * targetScale) + (viewHeight / 2);
                this.p_view.zoomPanel.zoomDragManager.targetScale = targetScale;

                //----- Un-rotate the view.
                var pt = new lux.Point(modelX, modelY);
                pt.rotateZ(0 - modelRotationZ);
                pt.x = modelX - pt.x;
                pt.y = modelY - pt.y;
                this.p_view.zoomPanel.zoomDragManager.targetX += pt.x;
                this.p_view.zoomPanel.zoomDragManager.targetY += pt.y;
                this.p_view.zoomPanel.zoomDragManager.targetRotationZ = 0 - modelRotationZ;
            } else {
                //----- Zoom our view to the appropriate scale.
                this.p_view.zoomPanel.x = -(modelX * targetScale) + (viewWidth / 2);
                this.p_view.zoomPanel.y = -(modelY * targetScale) + (viewHeight / 2);
                this.p_view.zoomPanel.scale = targetScale;

                //----- Un-rotate the view.
                var pt = new lux.Point(modelX, modelY);
                pt.rotateZ(0 - modelRotationZ);
                pt.x = modelX - pt.x;
                pt.y = modelY - pt.y;
                this.p_view.zoomPanel.x += pt.x;
                this.p_view.zoomPanel.y += pt.y;
                this.p_view.zoomPanel.rotationZ = 0 - modelRotationZ;
            }
        };

        /*====================================================================*
        START: Behaviors
        *====================================================================*/
        CollectionViewModeBase.prototype.addBehavior = function (behavior) {
            behavior.initialize(this);
            this.p_behaviors.setValue(behavior.name, behavior);
        };

        CollectionViewModeBase.prototype.removeBehavior = function (name) {
            this.p_behaviors.remove(name);
        };
        return CollectionViewModeBase;
    })();
    lux.CollectionViewModeBase = CollectionViewModeBase;
})(lux || (lux = {})); // End of module
/// <reference path='../lux/events.ts' />
/// <reference path='../lux/models/modelCollection.ts' />
/// <reference path='../lux/models/collectionViewModeBase.ts' />
var feed;
(function (feed) {
    var FeedViewModeCommon = (function (_super) {
        __extends(FeedViewModeCommon, _super);
        /*====================================================================*
        START: Constructors
        *====================================================================*/
        function FeedViewModeCommon() {
            _super.call(this);
        }
        FeedViewModeCommon.prototype.initialize = function (base) {
            this.p_base = base;
            if (this.p_base.view != null && this.p_base.view.models != null)
                this.p_feed = this.p_base.view.models;
        };

        /*====================================================================*
        START: Event Handlers
        *====================================================================*/
        FeedViewModeCommon.prototype.handleViewModeActivated = function () {
            //----- Zoom minimum
            this.p_base.view.zoomPanel.zoomDragManager.scaleConstraintMin = 1;

            //----- Zoom maximum
            //----- This value keeps the icons from scaling below 1px
            this.p_base.view.zoomPanel.zoomDragManager.scaleConstraintMax = 1;

            this.p_feed = this.p_base.view.models;
        };

        FeedViewModeCommon.prototype.handleModelOpened = function (args) {
            //----- IMPORTANT: Don't call the super here, 'cause we need to modify the call to setupOpenModel.
            //----- First, close other: any model that might be opened.
            if (this.p_base.view.models.modelLastOpened != args.model) {
                this.p_base.view.returnOpenModelToOriginalZIndex();
                this.p_feed.closeLastOpenedModel(false);
            }

            //----- And, deselect currently: any selected model.
            this.p_base.view.returnSelectedModelToOriginalZIndex();
            this.p_feed.deselectLastSelectedModel();

            this.p_base.setupOpenModel(args, this.p_feed.parentModel.root.view.contentContainer.width, this.p_feed.parentModel.root.view.contentContainer.height);
        };

        FeedViewModeCommon.prototype.handleModelClosed = function (args) {
            this.p_base.view.returnOpenModelToOriginalZIndex();
            this.p_base.view.zoomPanel.zoomDragManager.isConstrained = this.p_base.view.originalIsConstrained;
            this.p_base.view.isIgnoreOriginalValuesOnModelClose = false;

            this.p_base.view.zoomPanel.isAllowDrag = true;
        };

        FeedViewModeCommon.prototype.handleZoomPanelChanged = function (args) {
            //----- Ignore the click on the clipPanel, so we don't force any selected model to be unselected.
            this.p_base.view.isIgnoreClick = true;
        };

        FeedViewModeCommon.prototype.handleZoomDragTargetsReached = function (args) {
        };

        FeedViewModeCommon.prototype.handleZoomPanelDragDone = function (args) {
            this.p_base.view.returnOpenModelToOriginalZIndex();
            this.p_base.view.models.closeLastOpenedModel();
            this.p_base.view.returnSelectedModelToOriginalZIndex();
            this.p_base.view.models.deselectLastSelectedModel();
        };
        return FeedViewModeCommon;
    })(lux.CollectionViewModeCommon);
    feed.FeedViewModeCommon = FeedViewModeCommon;
})(feed || (feed = {}));
/// <reference path='../control.ts' />
/// <reference path='../controls/draggable.ts' />
/// <reference path='collectionView.ts' />
/// <reference path='../proxies/color.ts' />
var lux;
(function (lux) {
    var Scrollbar = (function (_super) {
        __extends(Scrollbar, _super);
        function Scrollbar(view) {
            _super.call(this);
            this.p_view = null;
            this.p_thumbFactor = 1.0;
            this.p_scrollFactor = 1.0;
            this.p_thumb = new lux.Draggable();
            this.p_thumbControl = new lux.Draggable();
            this.p_arrowTopLeft = new lux.Control();
            this.p_arrowBottomRight = new lux.Control();
            this.p_track = new lux.Control();
            this.p_trackThickness = 2;
            this.p_thickness = 42;
            this.p_margin = 0;
            this.p_marginTopLeft = 20;
            this.p_marginBottomRight = 20;
            this.p_orientation = 0 /* HORIZONTAL */;

            this.style.background.color = lux.Color.empty;

            this.p_thumbControl.style.background.color = lux.Color.empty;
            this.p_thumbControl.isAllowMouseEvents = true;
            this.p_thumbControl.isAllowDrag = true;
            this.p_thumbControl.isAspectRatioMaintained = false;

            this.p_thumb.style.background.color = new lux.Color(0, 0, 0);
            this.p_track.style.background.color = new lux.Color(0, 0, 0);
            this.p_track.opacity = 0.15;

            this.p_thumb.isAspectRatioMaintained = false;
            this.p_thumb.width = 2;
            this.p_thumb.height = 2;
            this.p_thumb.isAllowMouseEvents = false;

            this.controls.add(this.p_track);
            this.controls.add(this.p_thumbControl);
            this.controls.add(this.p_thumb);
            this.controls.add(this.p_arrowTopLeft);
            this.controls.add(this.p_arrowBottomRight);

            this.p_thumbControl.zoomDragManager.dragged.listen(this._thumbControl_dragged, this);

            if (view !== undefined)
                this.view = view;
        }
        Object.defineProperty(Scrollbar.prototype, "view", {
            get: function () {
                return this.p_view;
            },
            set: function (value) {
                if (value === undefined || value === null)
                    return;

                if (this.p_view !== undefined && this.p_view !== null) {
                    this.p_view.clipPanel.resized.remove(this._viewPanels_resized, this);
                    this.p_view.zoomPanel.resized.remove(this._viewPanels_resized, this);
                    this.p_view.zoomPanel.zoomDragManager.targetScaleChanged.remove(this._view_zoomPanel_scaleChanged, this);
                    this.p_view.zoomPanel.zoomDragManager.dragged.remove(this._view_zoomPanel_locationChanged, this);
                    this.p_view.zoomPanel.zoomDragManager.targetXChanged.remove(this._view_zoomPanel_locationChanged, this);
                    this.p_view.zoomPanel.zoomDragManager.targetYChanged.remove(this._view_zoomPanel_locationChanged, this);
                    this.p_view.zoomPanel.zoomDragManager.targetsReached.remove(this._view_zoomPanel_targetsReached, this);
                }

                this.p_view = value;

                this.p_view.clipPanel.resized.listen(this._viewPanels_resized, this);
                this.p_view.zoomPanel.resized.listen(this._viewPanels_resized, this);
                this.p_view.zoomPanel.zoomDragManager.targetScaleChanged.listen(this._view_zoomPanel_scaleChanged, this);
                this.p_view.zoomPanel.zoomDragManager.dragged.listen(this._view_zoomPanel_locationChanged, this);
                this.p_view.zoomPanel.zoomDragManager.targetXChanged.listen(this._view_zoomPanel_locationChanged, this);
                this.p_view.zoomPanel.zoomDragManager.targetYChanged.listen(this._view_zoomPanel_locationChanged, this);
                this.p_view.zoomPanel.zoomDragManager.targetsReached.listen(this._view_zoomPanel_targetsReached, this);

                this.p_layoutScrollbar();
                this.p_setThumbFactor();
                this.p_setThumbLocation();
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Scrollbar.prototype, "thumb", {
            get: function () {
                return this.p_thumb;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Scrollbar.prototype, "arrowTopLeft", {
            get: function () {
                return this.p_arrowTopLeft;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Scrollbar.prototype, "arrowBottomRight", {
            get: function () {
                return this.p_arrowBottomRight;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Scrollbar.prototype, "track", {
            get: function () {
                return this.p_track;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Scrollbar.prototype, "trackThickness", {
            get: function () {
                return this.p_trackThickness;
            },
            set: function (value) {
                this.p_trackThickness = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Scrollbar.prototype, "thickness", {
            get: function () {
                return this.p_thickness;
            },
            set: function (value) {
                this.p_thickness = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Scrollbar.prototype, "margin", {
            get: function () {
                return this.p_margin;
            },
            set: function (value) {
                this.p_margin = value;
                this.p_marginTopLeft = value;
                this.p_marginBottomRight = value;

                this.p_layoutScrollbar();
                this.p_setThumbFactor();
                this.p_setThumbLocation();
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Scrollbar.prototype, "marginTopLeft", {
            get: function () {
                return this.p_marginTopLeft;
            },
            set: function (value) {
                this.p_marginTopLeft = value;

                this.p_layoutScrollbar();
                this.p_setThumbFactor();
                this.p_setThumbLocation();
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Scrollbar.prototype, "marginBottomRight", {
            get: function () {
                return this.p_marginBottomRight;
            },
            set: function (value) {
                this.p_marginBottomRight = value;

                this.p_layoutScrollbar();
                this.p_setThumbFactor();
                this.p_setThumbLocation();
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Scrollbar.prototype, "orientation", {
            get: function () {
                return this.p_orientation;
            },
            set: function (value) {
                this.p_orientation = value;

                this.p_layoutScrollbar();
                this.p_setThumbFactor();
                this.p_setThumbLocation();
            },
            enumerable: true,
            configurable: true
        });

        Scrollbar.prototype.p_onAttachedToControlSystem = function () {
            this.parent.resized.listen(this._parent_resized, this);

            this.p_layoutScrollbar();
            this.p_setThumbFactor();
            this.p_setThumbLocation();
        };

        Scrollbar.prototype.p_onRemovedFromControlSystem = function () {
            this.parent.resized.remove(this._parent_resized, this);
        };

        Scrollbar.prototype._view_zoomPanel_scaleChanged = function (args) {
            this.p_setThumbFactor();
            this.p_setThumbLocation();
        };

        Scrollbar.prototype._view_zoomPanel_locationChanged = function (args) {
            this.p_setThumbLocation();
        };

        Scrollbar.prototype._parent_resized = function (args) {
            this.p_layoutScrollbar();
            this.p_setThumbFactor();
            this.p_setThumbLocation();
        };

        Scrollbar.prototype._viewPanels_resized = function (args) {
            this.p_layoutScrollbar();
            this.p_setThumbFactor();
            this.p_setThumbLocation();
        };

        Scrollbar.prototype._view_zoomPanel_targetsReached = function (args) {
            this.p_setThumbFactor();
            this.p_setThumbLocation();
            this.p_constrainThumbLocation();
        };

        Scrollbar.prototype._thumbControl_dragged = function (args) {
            if (this.p_view == null)
                return;

            if (this.p_orientation == 0 /* HORIZONTAL */) {
                if (this.p_scrollFactor > 0)
                    this.p_view.zoomPanel.zoomDragManager.targetX = 0 - ((this.p_thumbControl.left - this.p_track.left) / this.p_scrollFactor);
                else
                    this.p_view.zoomPanel.zoomDragManager.targetX = 0;
            } else {
                if (this.p_scrollFactor > 0)
                    this.p_view.zoomPanel.zoomDragManager.targetY = 0 - ((this.p_thumbControl.top - this.p_track.top) / this.p_scrollFactor);
                else
                    this.p_view.zoomPanel.zoomDragManager.targetY = 0;
            }

            this.p_setThumbLocation();
        };

        Scrollbar.prototype.p_setThumbFactor = function () {
            if (this.p_view == null)
                return;

            //----- This will be used to store the actual scroll length of the content.
            var zoomPanelDim = 0;

            if (this.p_orientation == 0 /* HORIZONTAL */) {
                //----- Get the factor to scale the thumb size.
                zoomPanelDim = this.p_view.zoomPanel.width * this.p_view.zoomPanel.zoomDragManager.targetScale;
                this.p_thumbFactor = this.p_view.clipPanel.widthActual / zoomPanelDim;

                //----- Now scale the thumb accordingly.
                this.p_thumbControl.width = (this.p_track.width * this.p_thumbFactor);

                //----- Don't let the thumb get too small to click.
                if (this.p_thumbControl.width < 30)
                    this.p_thumbControl.width = 30;
                this.p_thumb.width = this.p_thumbControl.width;

                //----- Now that the thumb has been sized, determine how much room we actually have to scroll the thumb
                //----- and derive a factor we can use to adjust the scroll speed of the actual content.
                if ((zoomPanelDim - this.p_view.clipPanel.widthActual) > 0)
                    this.p_scrollFactor = (this.p_track.widthActual - this.p_thumbControl.widthActual) / (zoomPanelDim - this.p_view.clipPanel.widthActual);
                else
                    this.p_scrollFactor = 0;
            } else {
                //----- Get the factor to scale the thumb size.
                zoomPanelDim = this.p_view.zoomPanel.height * this.p_view.zoomPanel.zoomDragManager.targetScale;
                this.p_thumbFactor = this.p_view.clipPanel.heightActual / zoomPanelDim;

                //----- Now scale the thumb accordingly.
                this.p_thumbControl.height = (this.p_track.height * this.p_thumbFactor);

                //----- Don't let the thumb get too small to click.
                if (this.p_thumbControl.height < 30)
                    this.p_thumbControl.height = 30;
                this.p_thumb.height = this.p_thumbControl.height;

                //----- Now that the thumb has been sized, determine how much room we actually have to scroll the thumb
                //----- and derive a factor we can use to adjust the scroll speed of the actual content.
                if ((zoomPanelDim - this.p_view.clipPanel.heightActual) > 0)
                    this.p_scrollFactor = (this.p_track.heightActual - this.p_thumbControl.heightActual) / (zoomPanelDim - this.p_view.clipPanel.heightActual);
                else
                    this.p_scrollFactor = 0;
            }

            //----- If the scrollbar isn't needed, fade it out. Otherwise, make sure it's faded in.
            if (this.p_thumbFactor > 0.95) {
                if (this.opacity != 0)
                    this.animate.run(this.fadeTo(0, 0.4));
            } else {
                if (this.opacity != 1)
                    this.animate.run(this.fadeTo(1, 0.4));
            }
        };

        Scrollbar.prototype.p_layoutScrollbar = function () {
            if (this.p_parent == null)
                return;

            if (this.p_orientation == 0 /* HORIZONTAL */) {
                this.left = 0;
                this.top = this.parent.heightActual - this.p_thickness - this.p_margin;

                //----- Arrows
                if (this.p_arrowTopLeft.controls.length > 0) {
                    this.p_arrowTopLeft.width = this.p_arrowTopLeft.controls[0].widthActual;
                    this.p_arrowTopLeft.height = this.p_arrowTopLeft.controls[0].heightActual;
                    this.p_arrowTopLeft.left = 0;
                    this.p_arrowTopLeft.top = (this.p_thickness / 2) - (this.p_arrowTopLeft.heightActual / 2);
                    this.p_arrowTopLeft.isVisible = true;
                } else
                    this.p_arrowTopLeft.isVisible = false;

                if (this.p_arrowBottomRight.controls.length > 0) {
                    this.p_arrowBottomRight.width = this.p_arrowBottomRight.controls[0].widthActual;
                    this.p_arrowBottomRight.height = this.p_arrowBottomRight.controls[0].heightActual;
                    this.p_arrowBottomRight.top = (this.p_thickness / 2) - (this.p_arrowTopLeft.heightActual / 2);
                    this.p_arrowBottomRight.isVisible = true;
                } else
                    this.p_arrowBottomRight.isVisible = false;

                //----- Track
                this.height = this.p_thickness;
                this.p_track.height = this.p_trackThickness;
                this.p_track.top = (this.p_thickness / 2) - (this.p_trackThickness / 2);
                this.p_track.width = this.parent.widthActual - this.p_marginTopLeft - this.p_marginBottomRight;
                this.p_track.left = this.p_marginTopLeft;
                if (this.p_arrowTopLeft.isVisible) {
                    this.p_track.width -= this.p_arrowTopLeft.widthActual;
                    this.p_track.left += this.p_arrowTopLeft.widthActual;
                }
                if (this.p_arrowBottomRight.isVisible)
                    this.p_track.width -= this.p_arrowBottomRight.widthActual;

                if (this.p_arrowBottomRight.controls.length > 0) {
                    this.p_arrowBottomRight.left = this.p_track.left + this.p_track.widthActual;
                }

                //----- Thumb control
                this.p_thumbControl.isAllowDrag = true;
                this.p_thumbControl.height = this.p_thickness;
                this.p_thumbControl.width = this.p_track.width;
                this.p_thumbControl.top = 0;
                this.p_thumbControl.zoomDragManager.isUseDeceleration = false;
                this.p_thumbControl.zoomDragManager.isElasticX = false;
                this.p_thumbControl.zoomDragManager.isElasticY = false;
            } else {
                this.top = 0;
                this.left = this.parent.widthActual - this.p_thickness - this.p_margin;

                //----- Arrows
                if (this.p_arrowTopLeft.controls.length > 0) {
                    this.p_arrowTopLeft.width = this.p_arrowTopLeft.controls[0].widthActual;
                    this.p_arrowTopLeft.height = this.p_arrowTopLeft.controls[0].heightActual;
                    this.p_arrowTopLeft.top = 0;
                    this.p_arrowTopLeft.left = (this.p_thickness / 2) - (this.p_arrowTopLeft.widthActual / 2);
                    this.p_arrowTopLeft.isVisible = true;
                } else
                    this.p_arrowTopLeft.isVisible = false;

                if (this.p_arrowBottomRight.controls.length > 0) {
                    this.p_arrowBottomRight.width = this.p_arrowBottomRight.controls[0].widthActual;
                    this.p_arrowBottomRight.height = this.p_arrowBottomRight.controls[0].heightActual;
                    this.p_arrowBottomRight.left = (this.p_thickness / 2) - (this.p_arrowBottomRight.widthActual / 2);
                    this.p_arrowBottomRight.isVisible = true;
                } else
                    this.p_arrowBottomRight.isVisible = false;

                //----- Track
                this.width = this.p_thickness;
                this.p_track.width = this.p_trackThickness;
                this.p_track.left = (this.p_thickness / 2) - (this.p_trackThickness / 2);
                this.p_track.height = this.parent.heightActual - this.p_marginTopLeft - this.p_marginBottomRight;
                this.p_track.top = this.p_marginTopLeft;
                if (this.p_arrowTopLeft.isVisible) {
                    this.p_track.height -= this.p_arrowTopLeft.heightActual;
                    this.p_track.top += this.p_arrowTopLeft.heightActual;
                }
                if (this.p_arrowBottomRight.isVisible)
                    this.p_track.height -= this.p_arrowBottomRight.heightActual;

                if (this.p_arrowBottomRight.controls.length > 0) {
                    this.p_arrowBottomRight.top = this.p_track.top + this.p_track.heightActual;
                }

                //----- Thumb control
                this.p_thumbControl.isAllowDrag = true;
                this.p_thumbControl.width = this.p_thickness;
                this.p_thumbControl.height = this.p_track.height;
                this.p_thumbControl.left = 0;
                this.p_thumbControl.zoomDragManager.isUseDeceleration = false;
                this.p_thumbControl.zoomDragManager.isElasticX = false;
                this.p_thumbControl.zoomDragManager.isElasticY = false;
            }

            //----- Thumb
            this.p_thumb.width = this.p_track.width;
            this.p_thumb.height = this.p_track.height;
            this.p_thumb.left = this.p_track.left;
            this.p_thumb.top = this.p_track.top;
        };

        Scrollbar.prototype.p_setThumbLocation = function () {
            if (this.p_view == null)
                return;

            if (this.p_orientation == 0 /* HORIZONTAL */) {
                if (!this.p_thumbControl.zoomDragManager.isDragging) {
                    var zoomPanelX = this.p_view.zoomPanel.x;
                    this.p_thumbControl.zoomDragManager.targetX = this.p_track.left + ((0 - zoomPanelX) * this.p_scrollFactor);
                    this.p_thumb.zoomDragManager.targetX = this.p_track.left + ((0 - zoomPanelX) * this.p_scrollFactor);
                } else {
                    this.p_thumb.zoomDragManager.targetX = this.p_thumbControl.x;
                }
            } else {
                if (!this.p_thumbControl.zoomDragManager.isDragging) {
                    var zoomPanelY = this.p_view.zoomPanel.y;
                    this.p_thumbControl.zoomDragManager.targetY = this.p_track.top + ((0 - zoomPanelY) * this.p_scrollFactor);
                    this.p_thumb.zoomDragManager.targetY = this.p_track.top + ((0 - zoomPanelY) * this.p_scrollFactor);
                } else {
                    this.p_thumb.zoomDragManager.targetY = this.p_thumbControl.y;
                }
            }
        };

        Scrollbar.prototype.p_constrainThumbLocation = function () {
            if (this.p_orientation == 0 /* HORIZONTAL */) {
                this.p_thumbControl.zoomDragManager.dragConstraintYMin = 0;
                this.p_thumbControl.zoomDragManager.dragConstraintYMax = 0;
                this.p_thumbControl.zoomDragManager.dragConstraintXMin = this.p_track.left;
                this.p_thumbControl.zoomDragManager.dragConstraintXMax = this.p_track.left + this.p_track.widthActual - this.p_thumbControl.widthActual;
                if (this.p_thumbControl.zoomDragManager.dragConstraintXMax < this.p_thumbControl.zoomDragManager.dragConstraintXMin) {
                    this.p_thumbControl.zoomDragManager.dragConstraintXMax = this.p_thumbControl.zoomDragManager.dragConstraintXMin;
                }

                this.p_thumb.zoomDragManager.dragConstraintYMin = this.p_track.top;
                this.p_thumb.zoomDragManager.dragConstraintYMax = this.p_track.top;
                this.p_thumb.zoomDragManager.dragConstraintXMin = this.p_track.left;
                this.p_thumb.zoomDragManager.dragConstraintXMax = this.p_track.left + this.p_track.widthActual - this.p_thumb.widthActual;
                if (this.p_thumb.zoomDragManager.dragConstraintXMax < this.p_thumb.zoomDragManager.dragConstraintXMin) {
                    this.p_thumb.zoomDragManager.dragConstraintXMax = this.p_thumb.zoomDragManager.dragConstraintXMin;
                }
            } else {
                this.p_thumbControl.zoomDragManager.dragConstraintXMin = 0;
                this.p_thumbControl.zoomDragManager.dragConstraintXMax = 0;
                this.p_thumbControl.zoomDragManager.dragConstraintYMin = this.p_track.top;
                this.p_thumbControl.zoomDragManager.dragConstraintYMax = this.p_track.top + this.p_track.heightActual - this.p_thumbControl.heightActual;
                if (this.p_thumbControl.zoomDragManager.dragConstraintYMax < this.p_thumbControl.zoomDragManager.dragConstraintYMin) {
                    this.p_thumbControl.zoomDragManager.dragConstraintYMax = this.p_thumbControl.zoomDragManager.dragConstraintYMin;
                }

                this.p_thumb.zoomDragManager.dragConstraintXMin = this.p_track.left;
                this.p_thumb.zoomDragManager.dragConstraintXMax = this.p_track.left;
                this.p_thumb.zoomDragManager.dragConstraintYMin = this.p_track.top;
                this.p_thumb.zoomDragManager.dragConstraintYMax = this.p_track.top + this.p_track.heightActual - this.p_thumb.heightActual;
                if (this.p_thumb.zoomDragManager.dragConstraintYMax < this.p_thumb.zoomDragManager.dragConstraintYMin) {
                    this.p_thumb.zoomDragManager.dragConstraintYMax = this.p_thumb.zoomDragManager.dragConstraintYMin;
                }
            }
        };
        return Scrollbar;
    })(lux.Control);
    lux.Scrollbar = Scrollbar;
})(lux || (lux = {})); // End of module}
/// <reference path='../events.ts' />
/// <reference path='../enums.ts' />
/// <reference path='collectionViewModeBase.ts' />
/// <reference path='scrollbar.ts' />
var lux;
(function (lux) {
    var ModeScroll = (function (_super) {
        __extends(ModeScroll, _super);
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        /**
        * A collection view mode that displays models arranged in a scrollable stack, or gallery.
        **/
        function ModeScroll() {
            _super.call(this);
            /*====================================================================*
            START: Properties
            *====================================================================*/
            this.p_bActivated = false;
            this.p_orientation = 0 /* HORIZONTAL */;
            this.p_alignment = 0 /* TOP_LEFT */;
            this.p_margin = 20.0;
            this.p_marginTopLeft = 20.0;
            this.p_marginBottomRight = 20.0;
            this.p_bKeepStackCentered = true;
            this.p_thickness = 300;
            this.p_bTilt = false;
            this.p_firstInViewIndex = 0;
            this.p_posCurrent = 0;
            this.p_bViewUpdating = false;
            /*====================================================================*
            START: Visibility Management
            *====================================================================*/
            this.indexFirstVisible = 0;
            this.indexLastVisible = 0;
            //this.p_scrollbar = new Scrollbar();
        }
        Object.defineProperty(ModeScroll.prototype, "orientation", {
            get: function () {
                return this.p_orientation;
            },
            set: function (value) {
                this.p_orientation = value;

                //this.p_scrollbar.orientation = value;
                if (this.p_view == null)
                    return;

                if (this.p_orientation == 0 /* HORIZONTAL */) {
                    this.p_view.zoomPanel.zoomDragManager.isElasticY = false;
                    this.p_view.zoomPanel.zoomDragManager.isElasticX = true;
                    this.p_view.zoomPanel.zoomDragManager.dragConstraintXMin = -1000000000;
                    this.p_view.zoomPanel.zoomDragManager.dragConstraintXMax = 0;
                    this.p_view.zoomPanel.zoomDragManager.dragConstraintYMin = 0;
                    this.p_view.zoomPanel.zoomDragManager.dragConstraintYMax = 0;

                    this.p_view.zoomPanel.zoomDragManager.isKeepWithinParentControlX = true;
                    this.p_view.zoomPanel.zoomDragManager.isKeepWithinParentControlY = false;
                } else {
                    this.p_view.zoomPanel.zoomDragManager.isElasticY = true;
                    this.p_view.zoomPanel.zoomDragManager.isElasticX = false;
                    this.p_view.zoomPanel.zoomDragManager.dragConstraintXMin = 0;
                    this.p_view.zoomPanel.zoomDragManager.dragConstraintXMax = 0;
                    this.p_view.zoomPanel.zoomDragManager.dragConstraintYMin = -1000000000;
                    this.p_view.zoomPanel.zoomDragManager.dragConstraintYMax = 0;

                    this.p_view.zoomPanel.zoomDragManager.isKeepWithinParentControlX = false;
                    this.p_view.zoomPanel.zoomDragManager.isKeepWithinParentControlY = true;
                }

                this._setTilt();

                if (this.p_view.models != null)
                    this.p_view.models.doViewUpdated(true);
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(ModeScroll.prototype, "alignment", {
            get: function () {
                return this.p_alignment;
            },
            set: function (value) {
                this.p_alignment = value;
                if (this.p_view != null && this.p_view.models != null)
                    this.p_view.models.doViewUpdated(true);
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(ModeScroll.prototype, "scrollbar", {
            get: function () {
                return this.p_scrollbar;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ModeScroll.prototype, "margin", {
            //----- Margins
            get: function () {
                return this.p_margin;
            },
            set: function (value) {
                this.p_margin = value;
                if (this.p_view != null && this.p_view.models != null)
                    this.p_view.models.doViewUpdated(true);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ModeScroll.prototype, "marginTopLeft", {
            get: function () {
                return this.p_marginTopLeft;
            },
            set: function (value) {
                this.p_marginTopLeft = value;
                this.p_setConstraints();
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ModeScroll.prototype, "marginBottomRight", {
            get: function () {
                return this.p_marginBottomRight;
            },
            set: function (value) {
                this.p_marginBottomRight = value;
                this.p_setConstraints();
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ModeScroll.prototype, "isKeepStackCentered", {
            /// <summary>
            /// Should we keep the stack centered within the ClipPanel? For example, if this property is set
            /// to true for a horizontally scrolling stack, the stack will be centered vertically within the view.
            /// </summary>
            /// <value>
            /// <c>true</c> if the stack should be centered within the view; otherwise, <c>false</c>.
            /// </value>
            get: function () {
                return this.p_bKeepStackCentered;
            },
            set: function (value) {
                this.p_bKeepStackCentered = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ModeScroll.prototype, "thickness", {
            /// <summary>
            /// If this value is set to any value other than 0, the stack will be constrained to the specified thickness.
            /// For example, if a vertical stack is set to a thickness of 200, all the items in the stack will be scaled to
            /// a width of 200.
            /// </summary>
            get: function () {
                return this.p_thickness;
            },
            set: function (value) {
                this.p_thickness = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(ModeScroll.prototype, "isTilt", {
            /// <summary>
            /// Should the stack tilt dynamically as the drag velocity increases?
            /// </summary>
            /// <value>
            /// <c>true</c> if this instance is tilt; otherwise, <c>false</c>.
            /// </value>
            get: function () {
                return this.p_bTilt;
            },
            set: function (value) {
                this.p_bTilt = value;
                this._setTilt();
            },
            enumerable: true,
            configurable: true
        });

        ModeScroll.prototype._setTilt = function () {
            if (this.p_view == null || this.p_view.zoomPanel == null || this.p_view.zoomPanel.zoomDragManager == null)
                return;

            if (this.orientation == 0 /* HORIZONTAL */) {
                this.p_view.zoomPanel.zoomDragManager.isTiltOnXAxis = false;
                this.p_view.zoomPanel.zoomDragManager.isTiltOnYAxis = this.p_bTilt;
            } else {
                this.p_view.zoomPanel.zoomDragManager.isTiltOnYAxis = false;
                this.p_view.zoomPanel.zoomDragManager.isTiltOnXAxis = this.p_bTilt;
            }
        };

        /*====================================================================*
        START: Event Handlers
        *====================================================================*/
        ModeScroll.prototype.p_onActivated = function () {
            _super.prototype.p_onActivated.call(this);

            if (this.p_view === undefined || this.p_view === null)
                return;

            this.p_bActivated = false;

            //this.p_scrollbar.opacity = 0;
            //if (this.p_view.models.parentModel !== null && !this.p_view.models.parentModel.isOpen)
            //    this.p_scrollbar.isVisible = false;
            //if (!this.p_view.overlayPanel.controls.contains(this.p_scrollbar))
            //    this.p_view.overlayPanel.controls.add(this.p_scrollbar);
            //this.p_scrollbar.view = this.p_view;
            //this.p_scrollbar.orientation = this.p_orientation;
            //----- Turn on the overlayPanel so the scroll bar is visible.
            this.p_view.overlayPanel.opacity = 1;

            this.p_view.isAllowMouseButtonEvents = false;
            this.p_view.overlayPanel.isAllowMouseButtonEvents = false;

            this.p_view.clipPanel.isClipChildControls = false;
            this.p_view.clipPanel.isAllowMouseButtonEvents = true;
            this.p_view.clipPanel.isPropagateMouseEvents = true;

            this.p_view.zoomPanel.zoomDragManager.isEnabled = true;
            this.p_view.zoomPanel.isAllowMouseButtonEvents = false;
            this.p_view.zoomPanel.isAllowZoom = true;
            this.p_view.zoomPanel.isAllowDrag = true;
            this.p_view.zoomPanel.zoomDragManager.isUseDeceleration = true;
            this.p_view.zoomPanel.zoomDragManager.deceleration = 0.92;
            this.p_view.zoomPanel.zoomDragManager.dragTrigger = 10;

            if (this.isAnimate) {
                this.p_view.zoomPanel.zoomDragManager.targetScale = 1.0;
                this.p_view.zoomPanel.zoomDragManager.targetX = 0;
                this.p_view.zoomPanel.zoomDragManager.targetY = 0;
            } else {
                this.p_view.zoomPanel.scale = 1.0;
                this.p_view.zoomPanel.x = 0;
                this.p_view.zoomPanel.y = 0;
            }

            this.p_view.zoomPanel.style.background.color = lux.Color.empty;

            this.p_view.clipPanel.resized.listen(this.p_clipPanel_resized, this);
            this.p_view.zoomPanel.zoomDragManager.targetScaleChanged.listen(this.p_zoomDragManager_targetScaleChanged, this);
            this.p_view.zoomPanel.zoomDragManager.resized.listen(this.p_zoomPanel_onChanged, this);
            this.p_view.zoomPanel.zoomDragManager.zoomed.listen(this.p_zoomPanel_onChanged, this);
            this.p_view.zoomPanel.zoomDragManager.dragged.listen(this.p_zoomPanel_onChanged, this);

            this.p_view.zoomPanel.zoomDragManager.zoomType = 1 /* SCALE */;

            if (this.p_orientation == 0 /* HORIZONTAL */) {
                this.p_view.zoomPanel.zoomDragManager.isElasticY = false;
                this.p_view.zoomPanel.zoomDragManager.isElasticX = true;
                this.p_view.zoomPanel.zoomDragManager.dragConstraintXMin = -1000000000;
                this.p_view.zoomPanel.zoomDragManager.dragConstraintXMax = 0;
                this.p_view.zoomPanel.zoomDragManager.dragConstraintYMin = 0;
                this.p_view.zoomPanel.zoomDragManager.dragConstraintYMax = 0;

                this.p_view.zoomPanel.zoomDragManager.isKeepWithinParentControlX = true;
                this.p_view.zoomPanel.zoomDragManager.isKeepWithinParentControlY = false;
            } else {
                this.p_view.zoomPanel.zoomDragManager.isElasticY = true;
                this.p_view.zoomPanel.zoomDragManager.isElasticX = false;
                this.p_view.zoomPanel.zoomDragManager.dragConstraintXMin = 0;
                this.p_view.zoomPanel.zoomDragManager.dragConstraintXMax = 0;
                this.p_view.zoomPanel.zoomDragManager.dragConstraintYMin = -1000000000;
                this.p_view.zoomPanel.zoomDragManager.dragConstraintYMax = 0;

                this.p_view.zoomPanel.zoomDragManager.isKeepWithinParentControlX = false;
                this.p_view.zoomPanel.zoomDragManager.isKeepWithinParentControlY = true;
            }

            this.p_view.zoomPanel.zoomDragManager.isConstrained = true;

            this._setTilt();

            this.p_view.models.parentModel.opened.listen(this.p_parentModel_onOpened, this);
            this.p_view.models.parentModel.closed.listen(this.p_parentModel_onClosed, this);
        };

        ModeScroll.prototype.p_onDeactivated = function () {
            _super.prototype.p_onDeactivated.call(this);

            if (this.p_view === undefined || this.p_view === null)
                return;

            this.p_view.zoomPanel.zoomDragManager.dragConstraintXMax = 1000000000;
            this.p_view.zoomPanel.zoomDragManager.dragConstraintYMax = 1000000000;
            this.p_view.zoomPanel.zoomDragManager.dragConstraintXMin = -1000000000;
            this.p_view.zoomPanel.zoomDragManager.dragConstraintYMin = -1000000000;
            this.p_view.zoomPanel.zoomDragManager.scaleConstraintMax = 50.0;
            this.p_view.zoomPanel.zoomDragManager.scaleConstraintMin = 0.01;

            //this.view.overlayPanel.controls.remove(this.p_scrollbar);
            this.view.overlayPanel.opacity = 0;

            //this.p_scrollbar.view = null;
            this.p_view.clipPanel.resized.remove(this.p_clipPanel_resized, this);
            this.p_view.zoomPanel.zoomDragManager.targetScaleChanged.remove(this.p_zoomDragManager_targetScaleChanged, this);

            this.p_view.zoomPanel.zoomDragManager.resized.remove(this.p_zoomPanel_onChanged, this);
            this.p_view.zoomPanel.zoomDragManager.zoomed.remove(this.p_zoomPanel_onChanged, this);
            this.p_view.zoomPanel.zoomDragManager.dragged.remove(this.p_zoomPanel_onChanged, this);

            this.isTilt = false;
            this._setTilt();

            this.p_view.models.parentModel.opened.remove(this.p_parentModel_onOpened, this);
            this.p_view.models.parentModel.closed.remove(this.p_parentModel_onClosed, this);
        };

        ModeScroll.prototype.p_parentModel_onOpened = function (args) {
            //this.p_scrollbar.isVisible = true;
        };
        ModeScroll.prototype.p_parentModel_onClosed = function (args) {
            //this.p_scrollbar.isVisible = false;
        };

        ModeScroll.prototype.p_onModelRemoved = function (args) {
            this.p_view.doViewUpdated(true);
        };

        ModeScroll.prototype.p_onModelUpdated = function (args) {
        };
        ModeScroll.prototype.p_onViewUpdated = function (args) {
            _super.prototype.p_onViewUpdated.call(this, args);

            if (this.p_view === null || this.p_view === undefined || this.p_view.models === null || this.p_view.models === undefined)
                return;

            this.p_posCurrent = this.p_marginTopLeft;

            //var zoomPanelThickness: number = 1;
            var bAnimate = true;
            if (args.isAnimate === null || !args.isAnimate || !this.isAnimate)
                bAnimate = false;

            var length = this.p_view.models.length;

            for (var i = 0; i < length; i++) {
                this.p_updateModel(i, length, this.p_posCurrent, bAnimate);
            }

            //----- Adjust _canvas properties.
            if (this.p_orientation == 0 /* HORIZONTAL */) {
                if (this.p_posCurrent < this.p_view.clipPanel.width)
                    this.p_posCurrent = this.p_view.clipPanel.width - this.p_marginBottomRight;
                this.p_view.zoomPanel.setWidthWithoutInvalidation(this.p_posCurrent + this.p_marginBottomRight);
                this.p_view.zoomPanel.zoomDragManager.targetWidth = this.p_posCurrent + this.p_marginBottomRight;
                this.p_view.zoomPanel.setHeightWithoutInvalidation(this.p_thickness);
                this.p_view.zoomPanel.zoomDragManager.targetHeight = this.p_thickness;
                this.p_view.zoomPanel.zoomDragManager.scaleConstraintMax = (this.p_view.clipPanel.height - 0.001) / this.p_thickness;
            } else {
                if (this.p_posCurrent < this.p_view.clipPanel.height)
                    this.p_posCurrent = this.p_view.clipPanel.height - this.p_marginBottomRight;
                this.p_view.zoomPanel.setWidthWithoutInvalidation(this.p_thickness);
                this.p_view.zoomPanel.zoomDragManager.targetWidth = this.p_thickness;
                this.p_view.zoomPanel.setHeightWithoutInvalidation(this.p_posCurrent + this.p_marginBottomRight);
                this.p_view.zoomPanel.zoomDragManager.targetHeight = this.p_posCurrent + this.p_marginBottomRight;
                this.p_view.zoomPanel.zoomDragManager.scaleConstraintMax = (this.p_view.clipPanel.width - 0.001) / this.p_thickness;
            }

            if (!this.p_bActivated) {
                if (bAnimate)
                    this.p_view.zoomPanel.zoomDragManager.targetScale = 1.0;
                else
                    this.p_view.zoomPanel.scale = 1.0;
            }

            this.p_setConstraints(bAnimate);
            if (!this.p_bActivated)
                this.setAlignment(bAnimate);

            //else this.setVisibleModels();
            if (!this.p_bActivated)
                this.p_bActivated = true;
        };
        ModeScroll.prototype.p_updateModel = function (modelIndex, modelsLength, posCurrent, bAnimate) {
            var model = this.p_view.models.model(modelIndex);
            var positionType = 0 /* BEFORE_START */;

            if (!model.view.isVisible)
                bAnimate = false;

            model.view.zoomDragManager.isConstrained = false;

            //var targetCtlWidth: number = model.view.zoomDragManager.targetWidth;
            //var targetCtlHeight: number = model.view.zoomDragManager.targetHeight;
            var targetCtlScale = 1;

            //----- un-rotate the control
            if (bAnimate) {
                model.view.zoomDragManager.targetRotationX = 0;
                model.view.zoomDragManager.targetRotationY = 0;
                model.view.zoomDragManager.targetRotationZ = 0;
            }

            if (this.p_orientation == 0 /* HORIZONTAL */) {
                //----- First, find the appropriate scale and position for the model.
                if (this.p_thickness > 0 && model.view.zoomDragManager.targetScale != this.p_thickness / model.view.zoomDragManager.targetHeight) {
                    targetCtlScale = this.p_thickness / model.view.zoomDragManager.targetHeight;
                    this.p_scaleModel(model, targetCtlScale, bAnimate);
                }
                var targetCtlWidth = model.view.zoomDragManager.targetWidth * model.view.zoomDragManager.targetScale;

                var posNext = posCurrent + targetCtlWidth;

                var targetCtlX = posCurrent + (targetCtlWidth * model.view.anchorPoint.x);
                if (model.view.zoomDragManager.targetX != targetCtlX) {
                    var targetCtlY = this.p_thickness * model.view.anchorPoint.y;
                    this.p_positionModel(model, targetCtlX, targetCtlY, bAnimate);
                }

                positionType = this.isInView(posCurrent, posNext);
                if (positionType === 1 /* IN_VIEW */)
                    model.view.isVisible = true;
                else
                    model.view.isVisible = false;

                posCurrent = posNext;
            } else {
                //----- First, find the appropriate scale and position for the model.
                if (this.p_thickness > 0 && model.view.zoomDragManager.targetScale != this.p_thickness / model.view.zoomDragManager.targetWidth) {
                    targetCtlScale = this.p_thickness / model.view.zoomDragManager.targetWidth;
                    this.p_scaleModel(model, targetCtlScale, bAnimate);
                }
                var targetCtlHeight = model.view.zoomDragManager.targetHeight * model.view.zoomDragManager.targetScale;

                var posNext = posCurrent + targetCtlHeight;

                var targetCtlY = posCurrent + (targetCtlHeight * model.view.anchorPoint.y);
                if (model.view.zoomDragManager.targetY != targetCtlY) {
                    var targetCtlX = this.p_thickness * model.view.anchorPoint.x;
                    this.p_positionModel(model, targetCtlX, targetCtlY, bAnimate);
                }

                positionType = this.isInView(posCurrent, posNext);
                if (positionType === 1 /* IN_VIEW */)
                    model.view.isVisible = true;
                else
                    model.view.isVisible = false;

                posCurrent = posNext;
            }

            //----- Add the margin space, unless this is the last model in the collection.
            //----- TODO: check for "freezModels" on the container, instead of just the open model.
            if (modelIndex != modelsLength - 1)
                posCurrent += this.p_margin;

            var newModelEventArgs = new lux.ModelEventArgs(model, bAnimate);
            this.p_onModelUpdated(newModelEventArgs);

            this.p_posCurrent = posCurrent;

            return positionType;
        };
        ModeScroll.prototype.p_positionModel = function (model, targetCtlX, targetCtlY, bAnimate) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            if (bAnimate) {
                model.view.zoomDragManager.targetX = targetCtlX;
                model.view.zoomDragManager.targetY = targetCtlY;
            } else {
                model.view.x = targetCtlX;
                model.view.y = targetCtlY;
            }
        };
        ModeScroll.prototype.p_scaleModel = function (model, targetCtlScale, bAnimate) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            if (bAnimate) {
                model.view.zoomDragManager.targetScale = targetCtlScale;
            } else {
                model.view.scale = targetCtlScale;
            }
        };

        ModeScroll.prototype.p_setConstraints = function (bAnimate) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            if (this.p_view == null || this.p_view.clipPanel == null || this.p_view.zoomPanel == null)
                return;

            var zoomPanelCurrentWidthActual = this.p_view.zoomPanel.width * this.p_view.zoomPanel.scaleWidth;
            var zoomPanelCurrentHeightActual = this.p_view.zoomPanel.height * this.p_view.zoomPanel.scaleHeight;
            var zoomPanelTargetWidthActual = this.p_view.zoomPanel.width * this.p_view.zoomPanel.zoomDragManager.targetScale;
            var zoomPanelTargetHeightActual = this.p_view.zoomPanel.height * this.p_view.zoomPanel.zoomDragManager.targetScale;
            var marginTopLeft = 0;
            var marginBottomRight = 0;

            if (this.p_orientation == 0 /* HORIZONTAL */) {
                this.p_view.zoomPanel.zoomDragManager.scaleConstraintMin = this.p_view.clipPanel.width / this.p_view.zoomPanel.width;

                var top = 0;
                if (this.p_bKeepStackCentered)
                    top = (this.p_view.clipPanel.height / 2) - (zoomPanelTargetHeightActual / 2);
                this.p_view.zoomPanel.zoomDragManager.dragConstraintYMin = top;
                this.p_view.zoomPanel.zoomDragManager.dragConstraintYMax = top;
                this.p_view.zoomPanel.zoomDragManager.targetY = top;
            } else {
                this.p_view.zoomPanel.zoomDragManager.scaleConstraintMin = this.p_view.clipPanel.height / this.p_view.zoomPanel.height;

                this.p_view.zoomPanel.zoomDragManager.dragConstraintYMax = marginTopLeft;

                var left = 0;
                if (this.p_bKeepStackCentered)
                    left = (this.p_view.clipPanel.width / 2) - (zoomPanelTargetWidthActual / 2);
                this.p_view.zoomPanel.zoomDragManager.dragConstraintXMin = left;
                this.p_view.zoomPanel.zoomDragManager.dragConstraintXMax = left;
                this.p_view.zoomPanel.zoomDragManager.targetX = left;
            }
        };

        ModeScroll.prototype.setAlignment = function (bAnimate) {
            if (typeof bAnimate === "undefined") { bAnimate = true; }
            if (this.p_view == null)
                return;

            if (this.p_alignment == 0 /* TOP_LEFT */) {
                if (bAnimate && this.isAnimate) {
                    if (this.p_orientation == 0 /* HORIZONTAL */)
                        this.p_view.zoomPanel.zoomDragManager.targetX = 0;
                    else
                        this.p_view.zoomPanel.zoomDragManager.targetY = 0;
                } else {
                    if (this.p_orientation == 0 /* HORIZONTAL */)
                        this.p_view.zoomPanel.x = 0;
                    else
                        this.p_view.zoomPanel.y = 0;
                }
            } else if (this.p_alignment == 1 /* BOTTOM_RIGHT */) {
                if (this.p_orientation == 0 /* HORIZONTAL */) {
                    var marginTopLeft = this.p_marginTopLeft * this.p_view.zoomPanel.zoomDragManager.targetScale;
                    var marginBottomRight = this.p_marginBottomRight * this.p_view.zoomPanel.zoomDragManager.targetScale;
                    var zoomPanelWidthActual = this.p_view.zoomPanel.width * this.p_view.zoomPanel.zoomDragManager.targetScale;

                    var left = this.p_view.clipPanel.width - zoomPanelWidthActual;
                    if (this.p_view.clipPanel.width >= zoomPanelWidthActual - marginTopLeft - marginBottomRight)
                        left = 0;
                    if (bAnimate && this.isAnimate)
                        this.p_view.zoomPanel.zoomDragManager.targetX = left;
                    else
                        this.p_view.zoomPanel.x = left;
                } else {
                    var marginTopLeft = this.p_marginTopLeft * this.p_view.zoomPanel.zoomDragManager.targetScale;
                    var marginBottomRight = this.p_marginBottomRight * this.p_view.zoomPanel.zoomDragManager.targetScale;
                    var zoomPanelHeightActual = this.p_view.zoomPanel.height * this.p_view.zoomPanel.zoomDragManager.targetScale;

                    var top = this.p_view.clipPanel.height - zoomPanelHeightActual;
                    if (this.p_view.clipPanel.height >= zoomPanelHeightActual - marginTopLeft - marginBottomRight)
                        top = 0;
                    if (bAnimate && this.isAnimate)
                        this.p_view.zoomPanel.zoomDragManager.targetY = top;
                    else
                        this.p_view.zoomPanel.y = top;
                }
            } else if (this.p_alignment == 2 /* CENTER */) {
                if (this.p_orientation == 0 /* HORIZONTAL */) {
                    var zoomPanelWidthActual = this.p_view.zoomPanel.width * this.p_view.zoomPanel.zoomDragManager.targetScale;

                    var left = (this.p_view.clipPanel.width / 2) - (zoomPanelWidthActual / 2);
                    if (bAnimate && this.isAnimate)
                        this.p_view.zoomPanel.zoomDragManager.targetX = left;
                    else
                        this.p_view.zoomPanel.x = left;
                } else {
                    var zoomPanelHeightActual = this.p_view.zoomPanel.height * this.p_view.zoomPanel.zoomDragManager.targetScale;

                    var top = (this.p_view.clipPanel.height / 2) - (zoomPanelHeightActual / 2);
                    if (bAnimate && this.isAnimate)
                        this.p_view.zoomPanel.zoomDragManager.targetY = top;
                    else
                        this.p_view.zoomPanel.y = top;
                }
            }

            this.setVisibleModels();
        };

        ModeScroll.prototype.p_zoomDragManager_targetScaleChanged = function (args) {
            this.p_setConstraints();
        };

        ModeScroll.prototype.p_onContentLoaded = function (args) {
            if (this.p_view != null)
                this.p_view.doViewUpdated(true);
        };

        ModeScroll.prototype.p_clipPanel_resized = function (args) {
            if (lux.g.isEmpty(this.p_view))
                return;

            if (this.p_view.zoomPanel.zoomDragManager.isConstrained)
                this.p_view.doViewUpdated(true);

            this.setVisibleModels();
        };

        ModeScroll.prototype.p_zoomPanel_onChanged = function (args) {
            this.setVisibleModels();
        };

        ModeScroll.prototype.p_onModelOpened = function (args) {
            _super.prototype.p_onModelOpened.call(this, args);
            //if (args.model.isContainer) this.p_scrollbar.isVisible = false;
        };

        ModeScroll.prototype.p_onModelClosed = function (args) {
            _super.prototype.p_onModelClosed.call(this, args);
            //if (args.model.isContainer) this.p_scrollbar.isVisible = true;
        };

        ModeScroll.prototype.setVisibleModels = function () {
            var posCurrent = this.p_marginTopLeft;
            var length = this.p_view.models.length;
            for (var i = 0; i < length; i++) {
                var model = this.p_view.models.model(i);

                if (this.p_orientation == 0 /* HORIZONTAL */) {
                    var posNext = posCurrent + model.view.widthActual;
                    if (this.isInView(posCurrent, posNext))
                        model.view.isVisible = true;
                    else
                        model.view.isVisible = false;
                    posCurrent = posNext;
                } else {
                    var posNext = posCurrent + model.view.heightActual;
                    if (this.isInView(posCurrent, posNext))
                        model.view.isVisible = true;
                    else
                        model.view.isVisible = false;
                    posCurrent = posNext;
                }

                //----- Add the margin space, unless this is the last model in the collection.
                if (i != length - 1)
                    posCurrent += this.p_margin;
            }
        };

        ModeScroll.prototype.isInView = function (start, end) {
            var clipTopLeft;
            var clipBottomRight;

            if (this.p_orientation == 0 /* HORIZONTAL */) {
                clipTopLeft = -1 * this.p_view.zoomPanel.left;
                clipBottomRight = clipTopLeft + this.p_view.clipPanel.width;
            } else {
                clipTopLeft = -1 * this.p_view.zoomPanel.top;
                clipBottomRight = clipTopLeft + this.p_view.clipPanel.height;
            }

            if (end < clipTopLeft)
                return 0 /* BEFORE_START */;
            else if (start > clipBottomRight)
                return 2 /* AFTER_END */;
            else
                return 1 /* IN_VIEW */;
        };
        return ModeScroll;
    })(lux.CollectionViewModeBase);
    lux.ModeScroll = ModeScroll;
})(lux || (lux = {}));
/// <reference path='feedConfig.ts' />
/// <reference path='feedItem.ts' />
/// <reference path='feedItemRoot.ts' />
/// <reference path='feedViewModeCommon.ts' />
/// <reference path='../lux/events.ts' />
/// <reference path='../lux/signal.ts' />
/// <reference path='../lux/zoomDragManager.ts' />
/// <reference path='../lux/models/modeScroll.ts' />
var feed;
(function (feed) {
    var FeedViewMode = (function (_super) {
        __extends(FeedViewMode, _super);
        function FeedViewMode() {
            _super.call(this);
            this.p_toolbarTop = new feed.ToolbarTop();
            this._bActivated = false;
            /*====================================================================*
            START: Public Methods
            *====================================================================*/
            this.p_previousY = 0;
            /*====================================================================*
            START: Event Handlers
            *====================================================================*/
            this.targetScaleChanged = new lux.Signal();
            this.addBehavior(new feed.FeedViewModeCommon());
            this.orientation = 1 /* VERTICAL */;
        }
        Object.defineProperty(FeedViewMode.prototype, "toolbarTop", {
            get: function () {
                return this.p_toolbarTop;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(FeedViewMode.prototype, "viewMap", {
            get: function () {
                return this.p_viewMap;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(FeedViewMode.prototype, "isActivated", {
            get: function () {
                return this._bActivated;
            },
            enumerable: true,
            configurable: true
        });

        FeedViewMode.prototype.setupOpenModel = function (args, viewTargetWidth, viewTargetHeight) {
            _super.prototype.setupOpenModel.call(this, args, viewTargetWidth, viewTargetHeight);

            var model = args.model;

            if (model.view == null)
                return;

            model.view.moveToTop();

            this.p_previousY = this.p_view.zoomPanel.top;

            //----- Turn off constraints on the parent collection's zoomPanel
            this.p_view.zoomPanel.zoomDragManager.isConstrained = false;

            var modelY = model.view.top;

            if (args.isAnimate && this.isAnimate) {
                this.p_view.zoomPanel.zoomDragManager.targetY = -modelY;
            } else {
                this.p_view.zoomPanel.y = -modelY;
            }
        };

        FeedViewMode.prototype.p_onActivated = function () {
            _super.prototype.p_onActivated.call(this);

            this._bActivated = false;

            this.p_feed = this.p_view.models;

            var bAnimate = true;

            this.thickness = feed.FeedConfig.feedWidth;
            this.marginTopLeft = 0;
            this.marginBottomRight = 0;
            this.margin = 6;

            //this.p_scrollbar.opacity = 1;
            /*this.p_scrollbar.orientation = this.orientation;
            this.p_scrollbar.width = 38;
            this.p_scrollbar.marginTopLeft = 18;
            this.p_scrollbar.marginBottomRight = 18;
            this.p_scrollbar.isVisible = false;*/
            this.p_view.zoomPanel.isAllowZoom = false;

            this.p_view.zoomPanel.zoomDragManager.isElasticY = true;
            this.p_view.zoomPanel.zoomDragManager.isElasticX = false;
            this.p_view.zoomPanel.zoomDragManager.speed = feed.FeedConfig.zoomSpeed;
            this.p_view.zoomPanel.zoomDragManager.targetProximityPosition = feed.FeedConfig.targetProxPos;
            this.p_view.zoomPanel.zoomDragManager.deceleration = 0.96;
            this.p_view.zoomPanel.zoomDragManager.dragSpeedFactor = 1.5;

            //if (this.p_view.models.parentModel != this.p_view.models.parentModel.root) this.p_scrollbar.marginTopLeft = 42;
            //----- toolbarTop
            this.p_view.overlayPanel.controls.add(this.p_toolbarTop);

            this.p_view.overlayPanel.isVisible = true;
            this.p_view.overlayPanel.opacity = 1;
            this.p_view.overlayPanel.isAllowMouseEvents = false;
            this.p_view.clipPanel.top = 0;
            this.p_view.clipPanel.height = feed.FeedConfig.feedHeight - feed.FeedConfig.toolbarThicknessTop;

            //----- TODO: Figure out why clipPanel isn't being sized properly.
            this.p_view.clipPanel.isClipChildControls = false;

            //this.p_view.clipPanel.style.background.color = new Color(0, 0, 255);
            this.p_view.models.doViewUpdated(true);
        };

        FeedViewMode.prototype.initializeFeedItem = function (feedItem, bAnimate) {
        };

        FeedViewMode.prototype.p_onViewUpdated = function (args) {
            _super.prototype.p_onViewUpdated.call(this, args);

            this.p_view.zoomPanel.zoomDragManager.isConstrained = true;
        };

        FeedViewMode.prototype.p_onModelOpened = function (args) {
            _super.prototype.p_onModelOpened.call(this, args);

            //this.p_scrollbar.isVisible = false;
            this.p_view.root.animate.run(this.p_toolbarTop.fadeTo(0, feed.FeedConfig.durationNormal, feed.FeedConfig.animEaseDefault));

            this.p_view.root.animate.run(this.p_view.clipPanel.moveTo(0, 0, 0, feed.FeedConfig.durationNormal, feed.FeedConfig.animEaseDefault));
            this.p_view.clipPanel.height = feed.FeedConfig.feedHeight;

            if (args.model.isContainer) {
                var parentModel = this.p_view.models.parentModel;
                if (parentModel != null && parentModel != parentModel.root && parentModel.view != null)
                    parentModel.view.inputControl.isVisible = false;
                parentModel.root.currentFeed = args.model.models;
            }
        };

        FeedViewMode.prototype.p_onModelClosed = function (args) {
            //----- If the view isn't already updating, then update it.
            if (this.p_view.models.viewUpdated.getNumListeners() == 0)
                this.p_view.doViewUpdated(true);
            _super.prototype.p_onModelClosed.call(this, args);

            //this.p_scrollbar.isVisible = true;
            if (args.isAnimate) {
                this.p_view.root.animate.run(this.p_toolbarTop.fadeTo(1, feed.FeedConfig.durationQuick, feed.FeedConfig.animEaseDefault));
                this.p_view.root.animate.run(this.p_view.clipPanel.moveTo(0, feed.FeedConfig.toolbarThicknessTop, 0, feed.FeedConfig.durationQuick, feed.FeedConfig.animEaseDefault));
                this.p_view.clipPanel.height = feed.FeedConfig.feedHeight - feed.FeedConfig.toolbarThicknessTop;
            }

            if (args.model.isContainer) {
                var parentModel = this.p_view.models.parentModel;
                if (parentModel != null && parentModel != parentModel.root && parentModel.view != null)
                    parentModel.view.inputControl.isVisible = true;
                parentModel.root.currentFeed = this.p_view.models;
            }
        };

        FeedViewMode.prototype.p_onModelDeselected = function (args) {
            _super.prototype.p_onModelDeselected.call(this, args);
        };

        FeedViewMode.prototype.p_onModelUpdated = function (args) {
            args.model.view.zoomDragManager.speed = feed.FeedConfig.zoomSpeed; //Affects how quickly items animate to their initial positions.
            args.model.view.zoomDragManager.targetProximityPosition = feed.FeedConfig.targetProxPos;
        };

        FeedViewMode.prototype.feedItemViewUpdated = function (feedItem) {
            this.p_feed.doViewUpdated(true);
        };
        return FeedViewMode;
    })(lux.ModeScroll);
    feed.FeedViewMode = FeedViewMode;
})(feed || (feed = {}));
/// <reference path='feedViewMode.ts' />
/// <reference path='../lux/models/model.ts' />
/// <reference path='../lux/models/view.ts' />
var feed;
(function (feed) {
    var FeedItem = (function (_super) {
        __extends(FeedItem, _super);
        function FeedItem(bContainerModel) {
            if (typeof bContainerModel === "undefined") { bContainerModel = false; }
            _super.call(this, bContainerModel);
        }
        FeedItem.prototype.p_onInitialize = function (bContainerModel) {
            this.view = new lux.View();
            this.isContainer = bContainerModel;
            //this.p_view.mode = new FeedItemViewMode();
        };

        Object.defineProperty(FeedItem.prototype, "isContainer", {
            set: function (value) {
                if (value && !this.p_bContainer) {
                    this.p_models = new lux.ModelCollection(this);

                    //----- Set content
                    this.p_bContainer = true;
                    this.p_models = new lux.ModelCollection(this);
                    this.p_models.view.mode = new feed.FeedViewMode();
                    this.p_view.content = this.p_models.view;
                } else if (this.p_bContainer) {
                    this.p_models.view = null;
                    this.p_models = null;
                }

                this.p_bContainer = value;
            },
            enumerable: true,
            configurable: true
        });
        return FeedItem;
    })(lux.Model);
    feed.FeedItem = FeedItem;
})(feed || (feed = {}));
/// <reference path='feedConfig.ts' />
/// <reference path='../lux/events.ts' />
/// <reference path='../lux/models/viewMode.ts' />
/// <reference path='../lux/models/viewModeCommon.ts' />
var feed;
(function (feed) {
    var FeedItemViewModeCommon = (function (_super) {
        __extends(FeedItemViewModeCommon, _super);
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function FeedItemViewModeCommon() {
            _super.call(this);
        }
        /*====================================================================*
        START: Event Handlers
        *====================================================================*/
        FeedItemViewModeCommon.prototype.handleViewResized = function (args) {
            if (this.p_base.view.contentContainer !== null && this.p_base.view.contentContainer !== undefined) {
                this.p_base.view.contentContainer.width = this.p_base.view.width;
            }

            if (this.p_base.view.content !== null && this.p_base.view.content !== undefined && this.p_base.view.content.isLoaded) {
                this.p_base.view.content.width = this.p_base.view.width;
                this.p_base.view.content.height = this.p_base.view.height - feed.FeedConfig.toolbarThicknessTop;
            }

            this.p_base.view.inputControl.width = this.p_base.view.width;
            this.p_base.view.inputControl.height = this.p_base.view.height;
        };

        FeedItemViewModeCommon.prototype.handleViewClick = function (args) {
             {
                this.p_base.view.model.toggleOpenClose();
            }
        };

        FeedItemViewModeCommon.prototype.handleViewClickAndHold = function (args) {
        };
        FeedItemViewModeCommon.prototype.handleViewDoubleClick = function (args) {
        };
        return FeedItemViewModeCommon;
    })(lux.ViewModeCommon);
    feed.FeedItemViewModeCommon = FeedItemViewModeCommon;
})(feed || (feed = {}));
/// <reference path='../../lux/control.ts' />
var feed;
(function (feed) {
    var ToolbarTop = (function (_super) {
        __extends(ToolbarTop, _super);
        function ToolbarTop() {
            _super.call(this);

            this.width = feed.FeedConfig.feedWidth;
            this.height = feed.FeedConfig.toolbarThicknessTop + app.Manager.statusBarHeight;
            this.style.background.color = feed.FeedConfig.colorToolbarTop;
            this.isVisible = false;
            this.isAllowMouseButtonEvents = true;
        }
        ToolbarTop.prototype.p_onInitialize = function () {
            var iconTop = app.Manager.statusBarHeight + (feed.FeedConfig.toolbarThicknessTop / 2) - (feed.FeedConfig.iconThickness / 2);

            //----- IconClose
            var iconClose = new lux.CanvasVector(app.Icons.iconClose);
            iconClose.width = feed.FeedConfig.iconThickness;
            iconClose.top = iconTop;
            iconClose.left = feed.FeedConfig.feedWidth - feed.FeedConfig.iconThickness - feed.FeedConfig.margin;
            iconClose.style.background.color = app.Manager.colorVeryDark;
            this.controls.add(iconClose);
        };
        return ToolbarTop;
    })(lux.Control);
    feed.ToolbarTop = ToolbarTop;
})(feed || (feed = {}));
/// <reference path='feedConfig.ts' />
/// <reference path='feedItemViewModeCommon.ts' />
/// <reference path='toolbars/toolbarTop.ts' />
/// <reference path='../lux/models/view.ts' />
/// <reference path='../lux/models/viewMode.ts' />
/// <reference path='../lux/control.ts' />
var feed;
(function (feed) {
    var FeedItemViewMode = (function (_super) {
        __extends(FeedItemViewMode, _super);
        function FeedItemViewMode(attributes, result) {
            _super.call(this);
            /*====================================================================*
            START: Constants
            *====================================================================*/
            this.p_TOOLBAR_OPACITY = 0.9;
            this.p_metaStyle = feed.FeedConfig.fontMeta;
            this.p_toolbarTop = new feed.ToolbarTop();
            this.p_toolbarBottom = new lux.Control();
            this.p_bFullyOpen = false;
            this.addBehavior(new feed.FeedItemViewModeCommon());

            this.p_attributes = attributes;
            this.p_result = result;
        }
        Object.defineProperty(FeedItemViewMode.prototype, "toolbarTop", {
            get: function () {
                return this.p_toolbarTop;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeedItemViewMode.prototype, "toolbarBottom", {
            get: function () {
                return this.p_toolbarBottom;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Events
        *====================================================================*/
        FeedItemViewMode.prototype.p_onActivated = function () {
            var _this = this;
            _super.prototype.p_onActivated.call(this);

            this.p_view.inputControl.isAllowMouseWheelEvents = true;

            this.p_view.isClipChildControls = true;
            this.p_view.content.isClipChildControls = false;

            //----- Affects how quickly items animate to their initial positions.
            this.p_view.zoomDragManager.speed = feed.FeedConfig.zoomSpeed;

            this.p_view.zoomDragManager.targetProximityPosition = feed.FeedConfig.targetProxPos;

            //===== Toolbars
            this.p_toolbarTop.width = feed.FeedConfig.feedWidth;
            this.p_toolbarTop.height = feed.FeedConfig.toolbarThicknessTop;
            this.p_toolbarTop.top = -feed.FeedConfig.toolbarThicknessTop - 6;
            this.p_toolbarTop.style.background.color = feed.FeedConfig.colorToolbarTop;
            this.p_toolbarTop.opacity = 0;
            this.p_toolbarTop.isVisible = false;
            this.p_toolbarTop.isAllowMouseButtonEvents = true;
            this.p_toolbarTop.mouseClick.listen(function (args) {
                _this.p_view.model.close(true);
                args.isHandled = true;
            });

            //----- toolbar text text
            //----- Meta
            var sMeta = this.p_attributes.get('meta').value;
            var toolbarText = new lux.Text(sMeta, feed.FeedConfig.feedWidth - (feed.FeedConfig.margin * 2));
            toolbarText.style.text.set(this.p_metaStyle);
            toolbarText.maxLineCount = 1;
            toolbarText.style.wrap = 0 /* NO_WRAP */;
            toolbarText.top = app.Manager.statusBarHeight + (feed.FeedConfig.toolbarThicknessTop / 2) - (toolbarText.style.text.lineHeight * 0.7);
            toolbarText.loaded.listenOnce(function () {
                toolbarText.left = feed.FeedConfig.margin;
            });
            this.p_toolbarTop.controls.add(toolbarText);

            this.p_toolbarBottom.width = feed.FeedConfig.feedWidth;
            this.p_toolbarBottom.height = feed.FeedConfig.toolbarThicknessBottom;
            this.p_toolbarBottom.opacity = 0;
            this.p_toolbarBottom.isVisible = false;
            this.p_toolbarBottom.isAllowMouseEvents = true;

            this.p_view.inputControl.controls.add(this.p_toolbarTop);
            this.p_view.inputControl.controls.add(this.p_toolbarBottom);

            this.p_view.zoomDragManager.resized.listen(this.p_onZoomDragManagerResized, this);
            this.p_view.zoomDragManager.targetsReached.listen(function (args) {
                if (_this.p_view.model.isOpen)
                    _this.p_bFullyOpen = true;
                _this.p_view.zoomDragManager.isEnabled = false;
            });
        };

        FeedItemViewMode.prototype.p_onDeactivated = function () {
            _super.prototype.p_onDeactivated.call(this);

            if (this.p_toolbarTop != null)
                this.p_view.inputControl.controls.remove(this.p_toolbarTop);
            if (this.p_toolbarBottom != null)
                this.p_view.inputControl.controls.remove(this.p_toolbarBottom);
        };

        FeedItemViewMode.prototype.p_onViewResized = function (args) {
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleViewResized(args);
            });
        };
        FeedItemViewMode.prototype.p_onZoomDragManagerResized = function (args) {
            this.p_view.doResized(new lux.ControlEventArgs(this.p_view));

            if (lux.g.isNotEmpty(this.p_view.model))
                this.p_view.model.parentCollection.view.doViewUpdated(true);
        };

        Object.defineProperty(FeedItemViewMode.prototype, "isFullyOpen", {
            get: function () {
                return this.p_bFullyOpen;
            },
            enumerable: true,
            configurable: true
        });

        FeedItemViewMode.prototype.p_onModelOpened = function (args) {
            var _this = this;
            this.p_bFullyOpen = false;
            this.p_heightOriginal = this.p_view.height;
            this.p_toolbarBottomYOriginal = this.p_view.height;
            this.p_view.isAspectRatioMaintained = false;
            this.p_meta.isVisible = false;

            this.p_view.inputControl.isAllowMouseWheelEvents = false;

            if (this.p_view.model.root.view.contentContainer.isLoaded) {
                if (args.isAnimate) {
                    this.p_view.zoomDragManager.isEnabled = true;
                    this.p_view.zoomDragManager.targetHeight = feed.FeedConfig.feedHeight;
                    this.p_toolbarTop.opacity = 1;
                    this.p_toolbarBottom.opacity = 1;
                    this.p_view.root.animate.run(this.p_toolbarTop.moveTo(0, 0, 0, feed.FeedConfig.durationNormal, feed.FeedConfig.animEaseDefault)).and(this.p_toolbarBottom.moveTo(0, feed.FeedConfig.feedHeight - feed.FeedConfig.toolbarThicknessBottom, 0, feed.FeedConfig.durationNormal, feed.FeedConfig.animEaseDefault));

                    this.p_positionContentOnOpen();
                } else {
                    this.p_view.height = feed.FeedConfig.feedHeight;
                }

                this.p_view.inputControl.height = feed.FeedConfig.feedHeight;
                ;
            } else {
                this.p_view.model.root.view.contentContainer.loaded.listen(function (args) {
                    if (args.isAnimate) {
                        _this.p_view.zoomDragManager.targetHeight = feed.FeedConfig.feedHeight;
                    } else {
                        _this.p_view.height = feed.FeedConfig.feedHeight;
                        ;
                    }

                    _this.p_view.inputControl.height = feed.FeedConfig.feedHeight;
                });
            }

            _super.prototype.p_onModelOpened.call(this, args);
        };
        FeedItemViewMode.prototype.p_positionContentOnOpen = function () {
            var top = (feed.FeedConfig.feedHeight / 2) - (this.p_view.contentContainer.height / 2);
            this.p_view.root.animate.run(this.p_view.contentContainer.moveTo(0, top, 0, feed.FeedConfig.durationNormal, feed.FeedConfig.animEaseDefault));
        };

        FeedItemViewMode.prototype.p_onModelClosed = function (args) {
            this.p_bFullyOpen = false;
            this.p_view.inputControl.isAllowMouseEvents = true;
            this.p_view.isAspectRatioMaintained = false;
            this.p_meta.isVisible = true;

            if (this.p_heightOriginal != null) {
                if (args.isAnimate) {
                    this.p_view.zoomDragManager.isEnabled = true;
                    this.p_view.zoomDragManager.targetHeight = this.p_heightOriginal;
                    this.p_view.root.animate.run(this.p_toolbarTop.moveTo(0, -feed.FeedConfig.toolbarThicknessTop - 6, 0, feed.FeedConfig.durationQuick, feed.FeedConfig.animEaseDefault, true)).and(this.p_toolbarBottom.moveTo(0, this.p_toolbarBottomYOriginal, 0, feed.FeedConfig.durationNormal, feed.FeedConfig.animEaseDefault, true));
                    var top = (this.p_heightOriginal / 2) - (this.p_view.contentContainer.height / 2);
                    this.p_view.root.animate.run(this.p_view.contentContainer.moveTo(0, top, 0, feed.FeedConfig.durationQuick, feed.FeedConfig.animEaseDefault));
                } else
                    this.p_view.height = this.p_heightOriginal;
            }

            _super.prototype.p_onModelClosed.call(this, args);
        };

        FeedItemViewMode.prototype.p_onModelSelected = function (args) {
        };

        FeedItemViewMode.prototype.p_onModelDeselected = function (args) {
        };
        return FeedItemViewMode;
    })(lux.ViewMode);
    feed.FeedItemViewMode = FeedItemViewMode;
})(feed || (feed = {}));
/// <reference path='feedConfig.ts' />
/// <reference path='feedItem.ts' />
/// <reference path='feedItemViewMode.ts' />
/// <reference path='toolbars/toolbarTop.ts' />
var feed;
(function (feed) {
    var FeedItemViewModeRoot = (function (_super) {
        __extends(FeedItemViewModeRoot, _super);
        function FeedItemViewModeRoot() {
            _super.call(this);
        }
        /*====================================================================*
        START: Events
        *====================================================================*/
        FeedItemViewModeRoot.prototype.p_onActivated = function () {
            var _this = this;
            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleViewModeActivated(_this.view);
            });
        };

        FeedItemViewModeRoot.prototype.p_onViewResized = function (args) {
            if (this.p_view.contentContainer == null || !this.p_view.contentContainer.isLoaded)
                return;

            this.p_view.contentContainer.width = this.p_view.width;
            this.p_view.contentContainer.height = this.p_view.height;

            if (this.p_view.content != null && this.p_view.content.isLoaded) {
                this.p_view.content.width = this.p_view.width;
                this.p_view.content.height = this.p_view.height;
            }

            this.p_view.inputControl.width = this.p_view.contentContainer.width;
            this.p_view.inputControl.height = this.p_view.contentContainer.height;

            this.p_behaviors.forEach(function (name, behavior) {
                behavior.handleViewResized(args);
            });
        };
        return FeedItemViewModeRoot;
    })(feed.FeedItemViewMode);
    feed.FeedItemViewModeRoot = FeedItemViewModeRoot;
})(feed || (feed = {}));
//* <reference path='../enums.ts' />
/// <reference path='../control.ts' />
//* <reference path='../util/g.ts' />
var lux;
(function (lux) {
    var CanvasVector = (function (_super) {
        __extends(CanvasVector, _super);
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function CanvasVector(vector) {
            _super.call(this);
            this.p_bLoaded = false;
            this.p_vector = vector;
        }
        Object.defineProperty(CanvasVector.prototype, "type", {
            /*====================================================================*
            START: Properties
            *====================================================================*/
            get: function () {
                return 3 /* VECTOR */;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(CanvasVector.prototype, "vector", {
            get: function () {
                return this.p_vector;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        CanvasVector.prototype.requestSurface = function () {
            try  {
                if (lux.g.isEmpty(this.p_root) || lux.g.isEmpty(this.p_root.renderer))
                    return;

                //----- IMPORTANT: Use the property to set the Surface value here, so that activate/deactivate are called.
                this.surface = this.p_root.renderer.newSurface(3 /* VECTOR */);
            } catch (e) {
                console.log('Error in CanvasVector.requestSurface: ' + e);
            }
        };
        return CanvasVector;
    })(lux.Control);
    lux.CanvasVector = CanvasVector;
})(lux || (lux = {})); // End of module
/// <reference path='toolbarTop.ts' />
/// <reference path='../../lux/controls/image.ts' />
/// <reference path='../../lux/controls/canvasVector.ts' />/// <reference path='../../lux/controls/image.ts' />
/// <reference path='../../app/manager.ts' />
/// <reference path='../../d_ts/cocoonJS.d.ts' />
var feed;
(function (feed) {
    var ToolbarTopFeedRoot = (function (_super) {
        __extends(ToolbarTopFeedRoot, _super);
        function ToolbarTopFeedRoot() {
            _super.call(this);

            this.isVisible = true;
        }
        ToolbarTopFeedRoot.prototype.p_onInitialize = function () {
            var _this = this;
            var iconTop = app.Manager.statusBarHeight + (feed.FeedConfig.toolbarThicknessTop / 2) - (feed.FeedConfig.iconThickness / 2);

            this.isAllowMouseButtonEvents = true;
            this.mouseClick.listen(function (args) {
                if (args.positionLocal.x < feed.FeedConfig.feedWidth / 2)
                    _this._getPIN();
                else
                    _this._getAccountNumber();
            });

            //----- IconMenu
            var iconMenu = new lux.CanvasVector(app.Icons.iconMenu);
            iconMenu.width = feed.FeedConfig.iconThickness;
            iconMenu.top = iconTop;
            iconMenu.left = feed.FeedConfig.margin;
            iconMenu.style.background.color = app.Manager.colorVeryDark;
            this.controls.add(iconMenu);

            //----- IconAdd
            var iconAdd = new lux.CanvasVector(app.Icons.iconAdd);
            iconAdd.width = feed.FeedConfig.iconThickness;
            iconAdd.top = iconTop;
            iconAdd.left = feed.FeedConfig.feedWidth - feed.FeedConfig.iconThickness - feed.FeedConfig.margin;
            iconAdd.style.background.color = app.Manager.colorAccent;
            this.controls.add(iconAdd);

            /*iconAdd.isAllowMouseButtonEvents = true;
            iconAdd.mouseClick.listen((args: lux.MouseEventArgs) => {
            this._getAccountNumber();
            args.isHandled = true;
            });*/
            //----- Filter text
            var filterText = new lux.Text('All');
            filterText.style.text.set(feed.FeedConfig.fontToolbarTopFilter);
            filterText.style.wrap = 0 /* NO_WRAP */;
            filterText.style.alignment = 2 /* CENTER */;
            filterText.top = app.Manager.statusBarHeight + (feed.FeedConfig.toolbarThicknessTop / 2) - (filterText.style.text.lineHeight * 0.7);
            filterText.loaded.listen(function () {
                filterText.left = (feed.FeedConfig.feedWidth / 2) - (filterText.width / 2);
            });
            this.controls.add(filterText);
        };

        ToolbarTopFeedRoot.prototype._getPIN = function () {
            Cocoon.Dialog.prompt({
                title: 'PIN',
                message: 'Enter a pairing PIN.',
                text: '',
                type: Cocoon.Dialog.keyboardType.NUMBER,
                confirmText: 'OK',
                cancelText: 'Cancel'
            }, {
                success: function (text) {
                    //alert('Your PIN is: ' + text)
                    if (lux.g.isEmpty(text))
                        alert("Sorry, that didn't work.");
                    else
                        app.Manager.registerDevice(text);
                    return text;
                },
                cancel: function () {
                    return '';
                }
            });

            return '';
        };

        ToolbarTopFeedRoot.prototype._getAccountNumber = function () {
            var accountNumberInitial = 'db394e45-6908-4b54-901c-f147f33284a8';
            if (app.Manager.accountNumber === 'db394e45-6908-4b54-901c-f147f33284a8') {
                accountNumberInitial = '5f7589fc-08df-4c8a-9504-4ec906a15d1d'; // Christina's number
            }

            Cocoon.Dialog.prompt({
                title: 'Account Number',
                message: 'Enter an account number.',
                text: accountNumberInitial,
                type: Cocoon.Dialog.keyboardType.TEXT,
                confirmText: 'OK',
                cancelText: 'Cancel'
            }, {
                success: function (text) {
                    app.Manager.storeAccountNumber(text);

                    //app.Manager.feedItemRoot.models.clear();
                    //app.Manager.loadHistory();
                    Cocoon.App.reload();
                    return text;
                },
                cancel: function () {
                    return '';
                }
            });

            return '';
        };
        return ToolbarTopFeedRoot;
    })(feed.ToolbarTop);
    feed.ToolbarTopFeedRoot = ToolbarTopFeedRoot;
})(feed || (feed = {})); // End of module
/// <reference path='feedViewMode.ts' />
/// <reference path='toolbars/toolbarTopFeedRoot.ts' />
var feed;
(function (feed) {
    var FeedViewModeRoot = (function (_super) {
        __extends(FeedViewModeRoot, _super);
        function FeedViewModeRoot() {
            _super.call(this);
            this.p_toolbarTop = new feed.ToolbarTopFeedRoot();
        }
        Object.defineProperty(FeedViewModeRoot.prototype, "toolbarTop", {
            /*====================================================================*
            START: Properties
            *====================================================================*/
            get: function () {
                return this.p_toolbarTop;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Event Handlers
        *====================================================================*/
        FeedViewModeRoot.prototype.p_onActivated = function () {
            _super.prototype.p_onActivated.call(this);
        };
        return FeedViewModeRoot;
    })(feed.FeedViewMode);
    feed.FeedViewModeRoot = FeedViewModeRoot;
})(feed || (feed = {}));
/// <reference path='feedConfig.ts' />
/// <reference path='feedItem.ts' />
/// <reference path='feedItemViewMode.ts' />
/// <reference path='feedItemViewModeRoot.ts' />
/// <reference path='feedViewModeRoot.ts' />
/// <reference path='../lux/events.ts' />
/// <reference path='../lux/control.ts' />
/// <reference path='../lux/controls/image.ts' />
/// <reference path='../lux/models/view.ts' />
/// <reference path='../lux/models/viewModeBehavior.ts' />
/// <reference path='../lux/models/modelCollection.ts' />
var feed;
(function (feed) {
    var FeedItemRoot = (function (_super) {
        __extends(FeedItemRoot, _super);
        function FeedItemRoot() {
            _super.call(this, true);
            this.p_ID = 'root';
        }
        Object.defineProperty(FeedItemRoot.prototype, "ID", {
            /*====================================================================*
            START: Members and Properties
            *====================================================================*/
            //----- ID
            /// A unique identifier in Uri format.
            get: function () {
                return 'root';
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Protected Methods
        *====================================================================*/
        FeedItemRoot.prototype.p_onInitialize = function (bContainerModel) {
            this.p_root = this;
            this.view = new lux.View();
            this.isContainer = true;
            this.p_view.mode = new feed.FeedItemViewModeRoot();

            this.p_view.anchorPoint.x = 0;
            this.p_view.anchorPoint.y = 0;
            this.p_view.left = 0;
            this.p_view.top = 0;

            this.p_models.view.clipPanel.top = feed.FeedConfig.toolbarThicknessTop;
            this.p_models.view.clipPanel.height = feed.FeedConfig.feedHeight - feed.FeedConfig.toolbarThicknessTop;
            this.p_models.doViewUpdated(true);

            this.p_view.isPropagateMouseEvents = true;

            this.currentFeed = this.models;
            this.p_view.inputControl.isAllowMouseButtonEvents = false;
        };

        Object.defineProperty(FeedItemRoot.prototype, "isContainer", {
            set: function (value) {
                if (value && !this.p_bContainer) {
                    this.p_models = new lux.ModelCollection(this);

                    //----- Set content
                    this.p_bContainer = true;
                    this.p_models = new lux.ModelCollection(this);
                    this.p_models.view.mode = new feed.FeedViewModeRoot();
                    this.p_view.content = this.p_models.view;
                } else if (this.p_bContainer) {
                    this.p_models.view = null;
                    this.p_models = null;
                }

                this.p_bContainer = value;
            },
            enumerable: true,
            configurable: true
        });
        return FeedItemRoot;
    })(feed.FeedItem);
    feed.FeedItemRoot = FeedItemRoot;
})(feed || (feed = {})); // End of module
/// <reference path='../lux/controls/canvasVector.ts' />
var app;
(function (app) {
    //===== IconAdd
    var IconAdd = (function () {
        function IconAdd() {
            this.size = new lux.Size(42, 42);
        }
        IconAdd.prototype.render = function (ctx, scale) {
            if (typeof scale === "undefined") { scale = 1; }
            ctx.scale(scale, scale);

            ctx.beginPath();
            ctx.moveTo(20.9, 0);
            ctx.bezierCurveTo(9.299999999999999, 0, -0.10000000000000142, 9.4, -0.10000000000000142, 21);
            ctx.bezierCurveTo(-0.10000000000000142, 32.6, 9.299999999999999, 42, 20.9, 42);
            ctx.bezierCurveTo(32.5, 42, 41.9, 32.6, 41.9, 21);
            ctx.bezierCurveTo(41.9, 9.4, 32.5, 0, 20.9, 0);
            ctx.closePath();
            ctx.moveTo(29.9, 23);
            ctx.lineTo(22.9, 23);
            ctx.lineTo(22.9, 30);
            ctx.bezierCurveTo(22.9, 31.1, 22, 32, 20.9, 32);
            ctx.bezierCurveTo(19.799999999999997, 32, 18.9, 31.1, 18.9, 30);
            ctx.lineTo(18.9, 23);
            ctx.lineTo(11.899999999999999, 23);
            ctx.bezierCurveTo(10.799999999999999, 23, 9.899999999999999, 22.1, 9.899999999999999, 21);
            ctx.bezierCurveTo(9.899999999999999, 19.9, 10.799999999999999, 19, 11.899999999999999, 19);
            ctx.lineTo(18.9, 19);
            ctx.lineTo(18.9, 12);
            ctx.bezierCurveTo(18.9, 10.9, 19.799999999999997, 10, 20.9, 10);
            ctx.bezierCurveTo(22, 10, 22.9, 10.9, 22.9, 12);
            ctx.lineTo(22.9, 19);
            ctx.lineTo(29.9, 19);
            ctx.bezierCurveTo(31, 19, 31.9, 19.9, 31.9, 21);
            ctx.bezierCurveTo(31.9, 22.1, 31, 23, 29.9, 23);
            ctx.closePath();
            ctx.fill();
        };
        return IconAdd;
    })();
    app.IconAdd = IconAdd;

    //===== IconBookmarkLarge
    var IconBookmarkLarge = (function () {
        function IconBookmarkLarge() {
            this.size = new lux.Size(96, 96);
        }
        IconBookmarkLarge.prototype.render = function (ctx, scale) {
            if (typeof scale === "undefined") { scale = 1; }
            ctx.scale(scale, scale);

            ctx.beginPath();
            ctx.moveTo(48, 0);
            ctx.bezierCurveTo(21.5, 0, 0, 21.5, 0, 48);
            ctx.bezierCurveTo(0, 74.5, 21.5, 96, 48, 96);
            ctx.bezierCurveTo(74.5, 96, 96, 74.5, 96, 48);
            ctx.bezierCurveTo(96, 21.5, 74.5, 0, 48, 0);
            ctx.closePath();
            ctx.moveTo(59.2, 41.9);
            ctx.lineTo(59.2, 69);
            ctx.lineTo(48, 56.8);
            ctx.lineTo(36.8, 69);
            ctx.lineTo(36.8, 41.9);
            ctx.lineTo(36.8, 27);
            ctx.lineTo(48, 27);
            ctx.lineTo(59.2, 27);
            ctx.lineTo(59.2, 41.9);
            ctx.closePath();
            ctx.fill();
        };
        return IconBookmarkLarge;
    })();
    app.IconBookmarkLarge = IconBookmarkLarge;

    //===== IconMenu
    var IconMenu = (function () {
        function IconMenu() {
            this.size = new lux.Size(42, 42);
        }
        IconMenu.prototype.render = function (ctx, scale) {
            if (typeof scale === "undefined") { scale = 1; }
            ctx.scale(scale, scale);

            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            ctx.miterLimit = 4;
            ctx.lineWidth = 4 * scale;
            ctx.lineCap = "round";
            ctx.miterLimit = 10;

            ctx.beginPath();
            ctx.moveTo(3, 9);
            ctx.lineTo(39, 9);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(3, 21);
            ctx.lineTo(39, 21);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(3, 33);
            ctx.lineTo(39, 33);
            ctx.stroke();
        };
        return IconMenu;
    })();
    app.IconMenu = IconMenu;

    //===== IconBookmark
    var IconBookmark = (function () {
        function IconBookmark() {
            this.size = new lux.Size(32, 32);
        }
        IconBookmark.prototype.render = function (ctx, scale) {
            if (typeof scale === "undefined") { scale = 1; }
            ctx.scale(scale, scale);

            ctx.beginPath();
            ctx.moveTo(24.5, 0);
            ctx.lineTo(16, 0);
            ctx.lineTo(7.5, 0);
            ctx.lineTo(7.5, 11.4);
            ctx.lineTo(7.5, 32);
            ctx.lineTo(16, 22.7);
            ctx.lineTo(24.5, 32);
            ctx.lineTo(24.5, 11.4);
            ctx.lineTo(24.5, 0);
            ctx.closePath();
            ctx.fill();
        };
        return IconBookmark;
    })();
    app.IconBookmark = IconBookmark;

    //===== IconPlace
    var IconPlace = (function () {
        function IconPlace() {
            this.size = new lux.Size(32, 32);
        }
        IconPlace.prototype.render = function (ctx, scale) {
            if (typeof scale === "undefined") { scale = 1; }
            ctx.scale(scale, scale);

            ctx.beginPath();
            ctx.moveTo(28, 12);
            ctx.bezierCurveTo(28, 5.3, 22.6, 0, 16, 0);
            ctx.bezierCurveTo(9.3, 0, 4, 5.4, 4, 12);
            ctx.bezierCurveTo(4, 14.6, 4.8, 17, 6.2, 18.9);
            ctx.lineTo(6.2, 18.9);
            ctx.lineTo(16, 32);
            ctx.lineTo(25.8, 19);
            ctx.lineTo(25.8, 19);
            ctx.bezierCurveTo(27.2, 17, 28, 14.6, 28, 12);
            ctx.closePath();
            ctx.moveTo(16, 20.3);
            ctx.bezierCurveTo(11.4, 20.3, 7.699999999999999, 16.6, 7.699999999999999, 12);
            ctx.bezierCurveTo(7.699999999999999, 7.4, 11.399999999999999, 3.6999999999999993, 16, 3.6999999999999993);
            ctx.bezierCurveTo(20.6, 3.6999999999999993, 24.3, 7.3999999999999995, 24.3, 12);
            ctx.bezierCurveTo(24.3, 16.6, 20.6, 20.3, 16, 20.3);
            ctx.closePath();
            ctx.fill();
        };
        return IconPlace;
    })();
    app.IconPlace = IconPlace;

    //===== IconClose
    var IconClose = (function () {
        function IconClose() {
            this.size = new lux.Size(42, 42);
        }
        IconClose.prototype.render = function (ctx, scale) {
            if (typeof scale === "undefined") { scale = 1; }
            ctx.scale(scale, scale);

            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            ctx.miterLimit = 4;
            ctx.lineWidth = 4 * scale;
            ctx.lineCap = "round";

            ctx.beginPath();
            ctx.moveTo(14, 14);
            ctx.lineTo(28, 28);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(28, 14);
            ctx.lineTo(14, 28);
            ctx.stroke();
        };
        return IconClose;
    })();
    app.IconClose = IconClose;
})(app || (app = {})); // End of module
/// <reference path='../lux/animation/animEase.ts' />
/// <reference path='../lux/root.ts' />
/// <reference path='../lux/signal.ts' />
/// <reference path='../feed/feedItemRoot.ts' />
/// <reference path='icons.ts' />
var app;
(function (app) {
    var Manager = (function () {
        function Manager() {
        }
        Object.defineProperty(Manager, "isMobile", {
            get: function () {
                return Manager._bMobile;
            },
            set: function (value) {
                Manager._bMobile = value;
                feed.FeedConfig.isMobile = value;
            },
            enumerable: true,
            configurable: true
        });

        Manager.storeAccountNumber = function (accountNumber) {
            if (typeof accountNumber === "undefined") { accountNumber = Manager.accountNumberDefault; }
            if (lux.g.isEmpty(accountNumber) || accountNumber === '')
                return;
            Manager.accountNumber = accountNumber;
            localStorage.setItem('accountNumber', accountNumber);
        };
        Manager.getAccountNumber = function () {
            var accountNumber = localStorage.getItem('accountNumber');
            if (lux.g.isEmpty(accountNumber) || accountNumber === '')
                accountNumber = Manager.accountNumberDefault;
            return accountNumber;
        };
        Manager.loadHistory = function () {
            try  {
                if (lux.g.isEmpty(app.Manager.accountNumber))
                    app.Manager.accountNumber = app.Manager.accountNumberDefault;

                var sUrl = 'https://oneclip.cloudapp.net/api/readhistory';
                var data = {
                    'EnableAllTypes': true,
                    'ItemCount': 20,
                    'SortByTime': 'descending',
                    'DeviceType': 'WindowsDesktop',
                    'DeviceId': '',
                    //'DeviceId': 'a10e3736-76c4-4bfe-8248-99ba24666017', // My desktop device ID.
                    //'DeviceId': 'acfc9025-293b-4b9a-a026-6d03c27c32f1', // Christina's device ID.
                    //'AccountNumber': 'db394e45-6908-4b54-901c-f147f33284a8', // My account number.
                    //'AccountNumber': '5f7589fc-08df-4c8a-9504-4ec906a15d1d', // Christina's account number.
                    'AccountNumber': '5f7589fc-08df-4c8a-9504-4ec906a15d1d'
                };

                //app.Manager.accountNumber = '5f7589fc-08df-4c8a-9504-4ec906a15d1d';
                data['AccountNumber'] = app.Manager.accountNumber;

                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open('POST', sUrl, true);

                xmlHttp.setRequestHeader('X-ZUMO-INSTALLATION-ID', '5fa7fe77-b943-4d56-82fa-4773ba1762e8');
                xmlHttp.setRequestHeader('X-ZUMO-APPLICATION', 'NpMuPqWvFaJeqohijLzsGugZfiLOyO95');
                xmlHttp.setRequestHeader('Accept', 'application/json');
                xmlHttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                xmlHttp.setRequestHeader('Host', 'oneclip.cloudapp.net');

                //xmlHttp.setRequestHeader('Content-Length', '279');
                xmlHttp.setRequestHeader('Expect', '100-continue');
                xmlHttp.setRequestHeader('Accept-Encoding', 'gzip');
                xmlHttp.setRequestHeader('Connection', 'Keep-Alive');

                xmlHttp.onreadystatechange = function () {
                    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                        //_setupRootFeed(xmlHttp.responseText);
                        Manager.historyLoaded.dispatch(xmlHttp.responseText);
                    }
                };

                xmlHttp.send(JSON.stringify(data));
            } catch (e) {
                console.log('Error in app.Manager.loadHistory(): ' + e.toString());
            }
        };
        Manager.registerDevice = function (pin) {
            var sUrl = 'https://oneclip.cloudapp.net/api/registerdevice';
            var data = {
                'DeviceName': 'OneClipProtoDevice',
                'DeviceType': 'WindowsDesktop',
                'DeviceId': '',
                'ActivationCode': ''
            };
            data['ActivationCode'] = pin;

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open('POST', sUrl, true);

            xmlHttp.setRequestHeader('X-ZUMO-INSTALLATION-ID', '5fa7fe77-b943-4d56-82fa-4773ba1762e8');
            xmlHttp.setRequestHeader('X-ZUMO-APPLICATION', 'NpMuPqWvFaJeqohijLzsGugZfiLOyO95');
            xmlHttp.setRequestHeader('Accept', 'application/json');
            xmlHttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xmlHttp.setRequestHeader('Host', 'oneclip.cloudapp.net');
            xmlHttp.setRequestHeader('Expect', '100-continue');
            xmlHttp.setRequestHeader('Accept-Encoding', 'gzip');
            xmlHttp.setRequestHeader('Connection', 'Keep-Alive');

            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                    if (lux.g.isEmpty(xmlHttp.responseText))
                        alert("Sorry, there was a problem.");
                    else {
                        //console.log('responseText: ' + xmlHttp.responseText.toString());
                        var json = JSON.parse(xmlHttp.responseText);
                        if (json['status'] === '0')
                            alert('There was a problem with the PIN: ' + json['message']);
                        else {
                            alert('Thanks! You should be good to view clips from that account now.');
                            var accountNumber = json['accountnumber'];
                            app.Manager.storeAccountNumber(accountNumber);
                            Cocoon.App.reload();
                        }
                    }
                    //----- response format: {"status":"1","accountnumber":"db394e45-6908-4b54-901c-f147f33284a8"}
                }
            };

            xmlHttp.send(JSON.stringify(data));
        };
        Manager.rootClip = new lux.Control();

        Manager.controlMain = new lux.Control();

        Manager.feedToolbarTop = new lux.Control();

        Manager._bMobile = false;

        Manager.appWidth = 640;
        Manager.appHeight = 1096;
        Manager.filterMenuWidth = 520;

        Manager.durationQuick = 0.2;
        Manager.durationNormal = 0.4;
        Manager.animEaseDefault = lux.AnimEase.getEasingFunction(3 /* QUARTIC */, 2 /* OUT */);
        Manager.zoomSpeed = 0.25;
        Manager.targetProxPos = 2;

        Manager.margin = 36;
        Manager.statusBarHeight = 0;

        Manager.colorBackgroundMain = new lux.Color(83, 85, 85);
        Manager.colorVeryLight = new lux.Color(255, 255, 255);
        Manager.colorVeryDark = new lux.Color(40, 42, 43);
        Manager.colorGrayLight = lux.Color.fromHex('#8B8F95');
        Manager.colorAccent = new lux.Color(0, 216, 235);
        Manager.colorTileBackgroundMain = new lux.Color(118, 123, 130);
        Manager.colorTileBackgroundDark = new lux.Color(64, 65, 66);

        Manager.accountNumber = '5f7589fc-08df-4c8a-9504-4ec906a15d1d';
        Manager.accountNumberDefault = '5f7589fc-08df-4c8a-9504-4ec906a15d1d';
        Manager.historyLoaded = new lux.Signal();
        return Manager;
    })();
    app.Manager = Manager;

    var Icons = (function () {
        function Icons() {
        }
        Icons.iconMenu = new app.IconMenu();
        Icons.iconAdd = new app.IconAdd();
        Icons.iconClose = new app.IconClose();
        Icons.iconBookmark = new app.IconBookmark();
        Icons.iconPlace = new app.IconPlace();
        return Icons;
    })();
    app.Icons = Icons;
})(app || (app = {}));
/// <reference path='../enums.ts' />
/// <reference path='../control.ts' />
/// <reference path='../util/g.ts' />
var lux;
(function (lux) {
    var Svg = (function (_super) {
        __extends(Svg, _super);
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function Svg(src) {
            _super.call(this);
            this.p_src = '';
            this.p_svg = '';
            this.p_bLoaded = false;
            this.src = src;
            this.style.background.color = lux.Color.empty;
        }
        Object.defineProperty(Svg.prototype, "type", {
            /*static Future<Svg> createFromUrl(url: string)
            {
            try
            {
            return html.HttpRequest.getString(url).then((returnString) {
            return new Future.value(new Svg(returnString));
            });
            }
            catch(e)
            {
            console.log("Error in Svg.fromURL(url: string): " + e.toString());
            }
            }*/
            /*====================================================================*
            START: Properties
            *====================================================================*/
            get: function () {
                return 3 /* VECTOR */;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Svg.prototype, "src", {
            get: function () {
                return this.p_src;
            },
            set: function (value) {
                this.p_src = value;
                this.p_doPropertyChanged('src', value);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Svg.prototype, "svg", {
            get: function () {
                return this.p_svg;
            },
            set: function (value) {
                this.p_svg = value;
                this.p_doPropertyChanged('svg', value);
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        Svg.prototype.requestSurface = function () {
            try  {
                if (lux.g.isEmpty(this.p_root) || lux.g.isEmpty(this.p_root.renderer))
                    return;

                //----- IMPORTANT: Use the property to set the Surface value here, so that activate/deactivate are called.
                this.surface = this.p_root.renderer.newSurface(3 /* VECTOR */);
            } catch (e) {
                console.log('Error in Svg.requestSurface: ' + e);
            }
        };
        return Svg;
    })(lux.Control);
    lux.Svg = Svg;
})(lux || (lux = {})); // End of module
/// <reference path='../../iSurface.ts' />
/// <reference path='rendererCanvas.ts' />
var lux;
(function (lux) {
    var SurfaceCanvas = (function () {
        /*====================================================================*
        START: Constructors
        *====================================================================*/
        function SurfaceCanvas(renderer) {
            this.p_renderer = renderer;
        }
        Object.defineProperty(SurfaceCanvas.prototype, "native", {
            get: function () {
                return this.p_context;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        SurfaceCanvas.prototype.activate = function (control) {
            this.p_context = this.p_renderer.context;
            this.p_control = control;
        };

        SurfaceCanvas.prototype.initialize = function () {
        };
        SurfaceCanvas.prototype.deactivate = function () {
        };

        SurfaceCanvas.prototype.open = function () {
            if (!this.p_control.isLoaded)
                return false;

            try  {
                var bDrawStarted = false;

                //----- START: Draw the control
                //----- position, size and scale
                bDrawStarted = this.startDrawToCanvas(this.p_context, true, this.p_control.width, this.p_control.height, false);

                return bDrawStarted;
            } catch (e) {
                console.log('Error in SurfaceCanvas.open(): ' + e.toString());
                return false;
            }
        };

        SurfaceCanvas.prototype.render = function () {
        };

        SurfaceCanvas.prototype.close = function () {
            this.endDrawToCanvas(this.p_context, true, this.p_control.width, this.p_control.height);
        };

        SurfaceCanvas.prototype.hitTest = function (ptRoot, ptLocal) {
            if (ptLocal.x < 0)
                return false;
            if (ptLocal.x > this.p_control.width)
                return false;
            if (ptLocal.y < 0)
                return false;
            if (ptLocal.y > this.p_control.height)
                return false;

            return true;
        };

        SurfaceCanvas.prototype.addChild = function (childSurface) {
        };
        SurfaceCanvas.prototype.removeChild = function (childSurface) {
        };

        /*--------------------------------------------------------------------*
        START: Canvas
        *--------------------------------------------------------------------*/
        SurfaceCanvas.prototype.renderToCanvas = function (context, bRelativeToParent, widthIn, heightIn) {
            if (typeof bRelativeToParent === "undefined") { bRelativeToParent = false; }
            if (context == null)
                return;

            if (lux.g.isEmpty(widthIn))
                widthIn = this.p_control.width;
            if (lux.g.isEmpty(heightIn))
                heightIn = this.p_control.height;

            var bDrawStarted = false;

            //----- START: Draw the control
            var backgroundColor = this.p_control.style.background.color;
            bDrawStarted = this.startDrawToCanvas(context, bRelativeToParent, widthIn, heightIn, true, backgroundColor);

            if (bDrawStarted) {
                //----- START: child controls
                this.p_control.controls.forEach(function (control) {
                    //----- Draw the child frame
                    if (lux.g.isNotEmpty(control)) {
                        control.surface.renderToCanvas(context, true, null, null);
                        return true;
                    } else
                        return false;
                });

                //----- END: child controls
                //----- END: Draw the control
                this.endDrawToCanvas(context, bRelativeToParent, widthIn, heightIn);
            } else
                return;
        };

        /// If bRelativeToParent is true, the attributes will reflect transorms that place the control
        /// appropriately relative to it"s parent control. Otherwise, no transforms will be applied.
        SurfaceCanvas.prototype.startDrawToCanvas = function (context, bRelativeToParent, widthIn, heightIn, bClip, backgroundColor) {
            if (typeof bRelativeToParent === "undefined") { bRelativeToParent = true; }
            if (typeof bClip === "undefined") { bClip = false; }
            if (context == null)
                return false;

            //----- Just return false if we're not visible.
            if (bRelativeToParent && (!this.p_control.isVisible || this.p_control.opacity < this.p_control.opacityMin))
                return false;

            if (lux.g.isEmpty(widthIn))
                widthIn = this.p_control.width;
            if (lux.g.isEmpty(heightIn))
                heightIn = this.p_control.height;
            if (lux.g.isEmpty(backgroundColor))
                backgroundColor = this.p_control.style.background.color;

            //===== START: open canvas
            context.save();

            //----- Transform the canvas context around the control's anchor point.
            if (bRelativeToParent) {
                context.translate(this.p_control.x, this.p_control.y);
                context.rotate(lux.MathTools.convertAngleToRadians(this.p_control.rotation));
                context.scale(this.p_control.scaleWidth, this.p_control.scaleHeight);
            }

            //----- START: Set up clipping for the control
            //----- PERF: This code heavily impacts performance on mobile.
            if (this.p_control.isClipChildControls || bClip) {
                //----- IMPORTANT: I'm not sure why this call to beginPath is needed,
                //----- but it makes a huge difference to performance on mobile.
                context.beginPath();
                context.rect(0 - (widthIn * this.p_control.anchorPoint.x), 0 - (heightIn * this.p_control.anchorPoint.y), widthIn, heightIn);
                context.closePath();
                context.clip(); //----- This call to clip is expensive in terms of performance.
            }

            //----- END: Set up clipping for the control
            //===== END: open canvas
            //----- Draw the control background around the anchor point.
            this.p_drawToCanvas(context, widthIn, heightIn, backgroundColor);

            //----- Now move the canvas context's origin back to the top-left corner of the current control,
            //----- so we can draw the child controls in the right spots.
            if (bRelativeToParent) {
                context.translate(0 - (widthIn * this.p_control.anchorPoint.x), 0 - (heightIn * this.p_control.anchorPoint.y));
            }

            return true;
        };
        SurfaceCanvas.prototype.p_drawToCanvas = function (context, widthIn, heightIn, backgroundColor) {
            if (!backgroundColor.isEmpty) {
                context.globalAlpha = this.p_control.opacityAbs;
                context.fillStyle = backgroundColor.toHex();
                context.fillRect(0 - (widthIn * this.p_control.anchorPoint.x), 0 - (heightIn * this.p_control.anchorPoint.y), widthIn, heightIn);
            }
        };
        SurfaceCanvas.prototype.endDrawToCanvas = function (context, bRelativeToParent, widthIn, heightIn) {
            if (typeof bRelativeToParent === "undefined") { bRelativeToParent = false; }
            if (lux.g.isEmpty(context))
                return;

            if (bRelativeToParent && (!this.p_control.isVisible || this.p_control.opacity < this.p_control.opacityMin))
                return;

            if (widthIn == null)
                widthIn = this.p_control.width;
            if (heightIn == null)
                heightIn = this.p_control.height;

            //----- Move the canvas context's orgin to the anchor point of this control,
            //----- so we can draw the control's border around it.
            if (bRelativeToParent) {
                context.translate(widthIn * this.p_control.anchorPoint.x, heightIn * this.p_control.anchorPoint.y);
            }

            /*if (!this.getBorderColor().isEmpty && this.p_control.style.border.thickness > 0)
            {
            context.strokeStyle = this.getBorderColor().toHex();
            context.lineWidth = this.p_control.style.border.thickness;
            context.strokeRect(
            0 - (widthIn * this.p_control.anchorPoint.x),
            0 - (heightIn * this.p_control.anchorPoint.y), widthIn, heightIn
            );
            }*/
            context.restore();
        };
        return SurfaceCanvas;
    })();
    lux.SurfaceCanvas = SurfaceCanvas;
})(lux || (lux = {}));
/// <reference path='../../iSurface.ts' />
/// <reference path='../../util/g.ts' />
/// <reference path='rendererCanvas.ts' />
/// <reference path='surfaceCanvas.ts' />
var lux;
(function (lux) {
    var SurfaceRootCanvas = (function (_super) {
        __extends(SurfaceRootCanvas, _super);
        /*====================================================================*
        START: Constructors
        *====================================================================*/
        function SurfaceRootCanvas(renderer, element) {
            _super.call(this, renderer);

            try  {
                if (lux.g.isNotEmpty(element)) {
                    if (element.nodeName.toLowerCase() === 'canvas') {
                        this.p_elem = element;
                    } else {
                        this.p_elem = document.createElement('canvas');
                        element.appendChild(this.p_elem);
                    }
                } else
                    this.p_elem = document.createElement('canvas');

                this.p_context = this.p_elem.getContext('2d');

                this._disableSelection();

                //----- Set up 3d stuff.
                //----- Be careful about changing anything here.
                //----- 'overflow: hidden' and 'clip' don't work with preserve-3d (they make everything flat).
                this.p_elem.style.position = 'absolute';
                this.p_elem.style.display = 'block';
                this.p_elem.style.margin = '0px';
                this.p_elem.style.padding = '0px';

                //----- Turn off backface visibility to improve performance when hardware accelerated.
                //----- TODO: Add a property to disable this when needed if 3D is enabled.
                this.p_elem.style.backfaceVisibility = 'hidden';
                this.p_elem.style['-webkit-backface-visibility'] = 'hidden';

                //----- IMPORTANT: Top and left need to be initialized, or the element will be affected
                //----- by relatively positioned content in the parent element.
                this.p_elem.style.top = '0px';
                this.p_elem.style.left = '0px';

                this.p_elem.style['transform-style'] = 'preserve-3d';

                //----- Chrome, Safari, Opera
                this.p_elem.style['-webkit-transform-style'] = 'preserve-3d';

                //----- FireFox
                this.p_elem.style['-moz-transform-style'] = 'preserve-3d';

                //----- IE 9
                this.p_elem.style['-ms-transform-style'] = 'preserve-3d';

                //----- Perspective needs to be applied to the parent of the element
                //----- you want to manipulate in 3D, rather than the element itself.
                this.p_elem.style['perspective'] = '1200px';

                //----- Chrome, Safari, Opera
                this.p_elem.style['-webkit-perspective'] = '1200px';

                //----- FireFox
                this.p_elem.style['-moz-perspective'] = '1200px';

                //----- IE 9
                this.p_elem.style['-ms-perspective'] = '1200px';

                //----- Eliminate tap highlighting on mobile Safari.
                this.p_elem.style['-webkit-tap-highlight-color'] = 'rgba(0,0,0,0)';
            } catch (e) {
                console.log('Error in SurfaceRootCanvas.constructor: ' + e.toString());
            }
        }
        Object.defineProperty(SurfaceRootCanvas.prototype, "canvas", {
            /*====================================================================*
            START: Properties and Fields
            *====================================================================*/
            get: function () {
                return this.p_elem;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SurfaceRootCanvas.prototype, "context", {
            get: function () {
                return this.p_context;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        SurfaceRootCanvas.prototype.activate = function (control) {
            try  {
                this.p_control = control;

                //----- Call resize to initialize the width and height of the native surface.
                this.p_resize();

                this.p_control.propertyChanged.listen(this.p_control_onPropertyChanged, this);
            } catch (e) {
                console.log('SurfaceCanvas.activate: ' + e.toString());
            }
        };

        SurfaceRootCanvas.prototype.initialize = function () {
        };
        SurfaceRootCanvas.prototype.deactivate = function () {
        };

        SurfaceRootCanvas.prototype.open = function () {
            if (!this.p_control.isLoaded)
                return;

            try  {
                this.p_resize();

                //------ z index
                this.p_elem.style.zIndex = this.p_control.zIndex.toString();

                //----- visibility, opacity and clipping
                //----- 'overflow: hidden' and 'clip' don't work with preserve-3d (they make everything flat).
                if (!this.p_control.root.renderer.is3dEnabled) {
                    this.p_elem.style.overflow = this.p_control.isClipChildControls ? 'hidden' : 'visible';
                } else
                    this.p_elem.style.overflow = 'visible';

                this.p_elem.style.opacity = this.p_control.opacity.toString();
                this.p_elem.style.display = this.p_control.isVisible ? 'block' : 'none';

                //if (this.opacity <= this.opacityMin) this.p_elem.style.display = 'none';
                //----- background color
                /*var colorBG: Color = this.p_control.style.background.color;
                if (colorBG.isEmpty) colorBG = new Color(255, 255, 255);
                
                this.p_context.fillStyle = colorBG.toHex();
                this.p_context.fillRect(0, 0, this.p_elem.width, this.p_elem.height);*/
                //var colorBorder: Color = this.style.border.color;
                //if (!colorBorder.isEmpty) this.p_elem.style.borderColor = colorBorder.toHex();
                //else this.p_elem.style.borderColor = 'transparent';
                //this.p_elem.style.borderWidth = this.style.border.thickness.toString() + 'px';
                //----- position, size and scale
                this.p_setTransformOrigin();
                this.p_applyTransform();

                var bDrawStarted = false;

                //----- visibility, opacity and clipping
                //----- 'overflow: hidden' and 'clip' don't work with preserve-3d (they make everything flat).
                //----- background color
                var backgroundColor = this.p_control.style.background.color;

                //----- START: Draw the control
                //----- position, size and scale
                bDrawStarted = this.startDrawToCanvas(this.p_context, false, this.p_control.width, this.p_control.height, false, backgroundColor);

                return bDrawStarted;
            } catch (e) {
                console.log('Error in SurfaceRootCanvas.render(): ' + e.toString());
            }
        };

        SurfaceRootCanvas.prototype.close = function () {
            this.endDrawToCanvas(this.p_context, false, this.p_control.width, this.p_control.height);
        };

        SurfaceRootCanvas.prototype.hitTest = function (ptRoot, ptLocal) {
            if (ptLocal.x < 0)
                return false;
            if (ptLocal.x > this.p_control.width)
                return false;
            if (ptLocal.y < 0)
                return false;
            if (ptLocal.y > this.p_control.height)
                return false;

            return true;
        };

        /*====================================================================*
        START: Protected Methods
        *====================================================================*/
        SurfaceRootCanvas.prototype.p_resize = function () {
            this.p_elem.width = this.p_control.width;
            this.p_elem.height = this.p_control.height;
        };

        SurfaceRootCanvas.prototype.p_control_onPropertyChanged = function (args) {
            switch (args.propertyName) {
                case 'name':
                    this.p_elem.id = this.p_control.name;
                    break;
            }
        };

        /*====================================================================*
        START: Private Methods
        *====================================================================*/
        SurfaceRootCanvas.prototype._disableSelection = function () {
            //----- Don't allow this element to be selected
            this.p_elem.style['user-select'] = 'none';
            this.p_elem.style['-webkit-user-select'] = 'none';
            this.p_elem.style['-khtml-user-select'] = 'none';
            this.p_elem.style['-moz-user-select'] = 'none';
            this.p_elem.style['-ms-user-select'] = 'none';
            this.p_elem.style['-webkit-touch-callout'] = 'none';
            this.p_elem.setAttribute('unselectable', 'on'); // For IE and Opera
            this.p_elem.style['-webkit-user-drag'] = 'none';
        };

        SurfaceRootCanvas.prototype.p_setTransformOrigin = function () {
            //----- Tell the system we want all our transformations to use the control's anchorPoint as the origin.
            //----- This means we'll use the x and y values of the control for positioning, rather than left and top.
            var x = this.p_control.anchorPoint.x * 100.0;
            var y = this.p_control.anchorPoint.y * 100.0;
            var z = this.p_control.anchorPoint.z;

            //----- z has to be a length, not a percentage.
            var stringOrigin = x.toString() + '% ' + y.toString() + '% ' + z.toString() + 'px';
            this.p_elem.style['transform-origin'] = stringOrigin;

            //----- Chrome, Safari, Opera
            this.p_elem.style['-webkit-transform-origin'] = stringOrigin;

            //----- FireFox
            this.p_elem.style['-moz-transform-origin'] = stringOrigin;

            //----- IE 9
            this.p_elem.style['-ms-transform-origin'] = stringOrigin;
        };

        SurfaceRootCanvas.prototype.p_applyTransform = function () {
            var translateX = this.p_control.left;
            var translateY = this.p_control.top;

            var stringTransform = '';

            if (this.p_renderer.is3dEnabled) {
                //----- NOTE: The code below invokes hardware acceleration,
                //----- but causes elements to disappear unexpectedly in Chrome.
                stringTransform = 'translate3d(' + translateX.toString() + 'px, ' + translateY.toString() + 'px, 0px) ' + 'scale3d(' + this.p_control.scaleWidth.toString() + ', ' + this.p_control.scaleHeight.toString() + ', 1) ' + 'rotate3d(1, 0, 0, ' + this.p_control.rotationX.toString() + 'deg)' + 'rotate3d(0, 1, 0, ' + this.p_control.rotationY.toString() + 'deg)' + 'rotate3d(0, 0, 1, ' + this.p_control.rotationZ.toString() + 'deg)';
            } else {
                stringTransform = 'translateX(' + translateX.toString() + 'px)' + 'translateY(' + translateY.toString() + 'px)' + 'scale(' + this.p_control.scaleWidth.toString() + ', ' + this.p_control.scaleHeight.toString() + ') ' + 'rotate(' + this.p_control.rotationZ.toString() + 'deg)';
            }

            this.p_elem.style['transform'] = stringTransform;

            //----- Chrome, Safari, Opera
            this.p_elem.style['-webkit-transform'] = stringTransform;

            //----- FireFox
            this.p_elem.style['-moz-transform'] = stringTransform;

            //----- IE 9
            this.p_elem.style['-ms-transform'] = stringTransform;
        };
        return SurfaceRootCanvas;
    })(lux.SurfaceCanvas);
    lux.SurfaceRootCanvas = SurfaceRootCanvas;
})(lux || (lux = {}));
/// <reference path='surfaceCanvas.ts' />
/// <reference path='rendererCanvas.ts' />
var lux;
(function (lux) {
    var SurfaceControlCanvas = (function (_super) {
        __extends(SurfaceControlCanvas, _super);
        function SurfaceControlCanvas(renderer) {
            _super.call(this, renderer);
        }
        return SurfaceControlCanvas;
    })(lux.SurfaceCanvas);
    lux.SurfaceControlCanvas = SurfaceControlCanvas;
})(lux || (lux = {}));
/// <reference path='../../iRenderer.ts' />
/// <reference path='../../controls/image.ts' />
/// <reference path='rendererCanvas.ts' />
var lux;
(function (lux) {
    var SurfaceImageCanvas = (function (_super) {
        __extends(SurfaceImageCanvas, _super);
        function SurfaceImageCanvas(renderer) {
            var _this = this;
            _super.call(this, renderer);
            this._bImagelLoaded = false;
            this.p_elem = document.createElement('img');

            //----- IMPORTANT: These lines prevent the image element from automatically
            //----- sizing to fit the parent element when it's added to the DOM.
            this.p_elem.style.maxWidth = 'none';
            this.p_elem.style.maxHeight = 'none';

            this.p_elem.onload = function (e) {
                _this._image_onLoad(e);
            };
        }
        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        SurfaceImageCanvas.prototype.activate = function (control) {
            _super.prototype.activate.call(this, control);

            this.p_control.propertyChanged.listen(this.p_control_onPropertyChanged, this);

            if (this.p_control.src != '')
                this.p_elem.src = this.p_control.src;
        };

        /*====================================================================*
        START: Protected Methods
        *====================================================================*/
        SurfaceImageCanvas.prototype.p_resize = function () {
            if (!this._bImagelLoaded)
                return;
            //this.p_elem.style.width = this.p_control.width.toString() + 'px';
            //this.p_elem.style.height = this.p_control.height.toString() + 'px';
        };

        SurfaceImageCanvas.prototype.p_control_onPropertyChanged = function (args) {
            if (args.propertyName === 'width' || args.propertyName === 'height') {
                console.log('image width change: ' + args.value);
                //if (this._bImagelLoaded) this.p_resize();
            } else if (args.propertyName === 'src' && this.p_control.src !== '') {
                this._bImagelLoaded = false;
                this.p_elem.src = this.p_control.src;
            }
        };

        /*====================================================================*
        START: Private Methods
        *====================================================================*/
        /*private _image_onLoad(e: Event): void
        {
        this.p_control.isAspectRatioMaintained = false;
        this.p_control.setWidthWithoutInvalidation(this.p_elem.width);
        this.p_control.setHeightWithoutInvalidation(this.p_elem.height);
        this.p_control.isAspectRatioMaintained = true;
        
        this._bImagelLoaded = true;
        this.p_control.doLoaded();
        }*/
        SurfaceImageCanvas.prototype._image_onLoad = function (e) {
            var widthOrig = this.p_elem.width;
            var heightOrig = this.p_elem.height;

            this.p_control.isAspectRatioMaintained = false;

            if (this.p_control.p_bWidthSet) {
                this.p_elem.width = this.p_control.width;

                if (this.p_control.p_bHeightSet) {
                    this.p_elem.height = this.p_control.height;
                } else {
                    var ratio = this.p_control.width / widthOrig;
                    var newHeight = heightOrig * ratio;
                    this.p_elem.height = newHeight;

                    this.p_control.setHeightWithoutInvalidation(newHeight);
                }
            } else if (this.p_control.p_bHeightSet) {
                this.p_elem.height = this.p_control.height;

                var ratio = this.p_control.height / heightOrig;
                var newWidth = widthOrig * ratio;
                this.p_elem.width = newWidth;

                this.p_control.setWidthWithoutInvalidation(newWidth);
            } else {
                this.p_control.setWidthWithoutInvalidation(widthOrig);
                this.p_control.setHeightWithoutInvalidation(heightOrig);
            }

            this.p_control.isAspectRatioMaintained = true;

            this._bImagelLoaded = true;
            this.p_control.doLoaded();
        };

        /*--------------------------------------------------------------------*
        START: Canvas
        *--------------------------------------------------------------------*/
        SurfaceImageCanvas.prototype.p_drawToCanvas = function (context, widthIn, heightIn, backgroundColor) {
            //console.log('widthin: ' + widthIn);
            context.globalAlpha = this.p_control.opacityAbs;
            context.drawImage(this.p_elem, 0 - (widthIn * this.p_control.anchorPoint.x), 0 - (heightIn * this.p_control.anchorPoint.y), widthIn, heightIn);
        };
        return SurfaceImageCanvas;
    })(lux.SurfaceCanvas);
    lux.SurfaceImageCanvas = SurfaceImageCanvas;
})(lux || (lux = {}));
/// <reference path='surfaceCanvas.ts' />
/// <reference path='rendererCanvas.ts' />
/// <reference path='../../controls/text.ts' />
var lux;
(function (lux) {
    var SurfaceTextCanvas = (function (_super) {
        __extends(SurfaceTextCanvas, _super);
        function SurfaceTextCanvas(renderer) {
            _super.call(this, renderer);
            this.p_canvasCache = document.createElement('canvas');
            this._bCanvasInitialized = false;
            this.DEFAULT_LINE_HEIGHT_FACTOR = 1.5;
            this.BASELINE_OFFSET_FACTOR = 0.2;
            this.p_words = [];

            this.p_contextCache = this.p_canvasCache.getContext('2d');
        }
        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        SurfaceTextCanvas.prototype.activate = function (control) {
            _super.prototype.activate.call(this, control);

            this.p_control.propertyChanged.listen(this.p_textControl_onPropertyChanged, this);

            this.p_setupCanvasCache();
        };

        /*====================================================================*
        START: Protected Methods
        *====================================================================*/
        SurfaceTextCanvas.prototype.p_setupCanvasCache = function () {
            this.p_getWords();

            switch (this.p_control.style.alignment) {
                case 0 /* LEFT */:
                    this.p_contextCache.textAlign = 'left';
                    break;
                case 1 /* RIGHT */:
                    this.p_contextCache.textAlign = 'right';
                    break;
                case 2 /* CENTER */:
                    this.p_contextCache.textAlign = 'center';
                    break;
                default:
                    this.p_contextCache.textAlign = 'left';
            }

            if (this.p_control.style.wrap === 1 /* WRAP */) {
                this.p_canvasCache.width = this.p_control.width;

                var sFont = +this.p_control.style.text.fontSize.toString() + 'px ' + this.p_control.style.text.fontFamily;

                //----- IMPORTANT: The font needs to be set both before and after the canvas height is set,
                //----- since the context values will be cleared once we change the canvas height.
                this.p_contextCache.font = sFont;
                this.p_canvasCache.height = this.p_wrapTextOnCanvas(false);

                //----- IMPORTANT: The context is reset when we resize it, so we need to reapply our values.
                this.p_contextCache.font = sFont;
                this.p_contextCache.fillStyle = this.p_control.style.text.color.toHex();

                this.p_contextCache.clearRect(0, 0, this.p_canvasCache.width, this.p_canvasCache.height);

                this.p_wrapTextOnCanvas(true);
            } else {
                var lineHeight = this.p_control.style.text.lineHeight > 0 ? this.p_control.style.text.lineHeight : this.p_control.style.text.fontSize * this.DEFAULT_LINE_HEIGHT_FACTOR;

                var sFont = +this.p_control.style.text.fontSize.toString() + 'px ' + this.p_control.style.text.fontFamily;

                this.p_contextCache.font = sFont;

                var textWidth = this.p_contextCache.measureText(this.p_control.text).width;
                this.p_canvasCache.width = textWidth;

                this.p_canvasCache.height = lineHeight;

                this.p_contextCache.font = sFont;
                this.p_contextCache.fillStyle = this.p_control.style.text.color.toHex();

                this.p_contextCache.clearRect(0, 0, this.p_canvasCache.width, this.p_canvasCache.height);

                this.p_contextCache.fillText(this.p_control.text, 0, lineHeight - (lineHeight * this.BASELINE_OFFSET_FACTOR));
            }

            this._canvas_initialized();
        };

        /*--------------------------------------------------------------------*
        START: Canvas
        *--------------------------------------------------------------------*/
        SurfaceTextCanvas.prototype.p_textControl_onPropertyChanged = function (args) {
            if (!this._bCanvasInitialized)
                return;

            if (args.propertyName === 'width' || args.propertyName === 'text' || args.propertyName === 'maxLineCount' || args.propertyName === 'style.alignment' || args.propertyName === 'style.wrap' || args.propertyName === 'style.text.lineHeight' || args.propertyName === 'style.text.fontFamily' || args.propertyName === 'style.text.fontSize' || args.propertyName === 'style.text.fontStyle' || args.propertyName === 'style.text.fontWeight' || args.propertyName === 'style.text.color') {
                this.p_setupCanvasCache();
            }
        };

        SurfaceTextCanvas.prototype.p_drawToCanvas = function (context, widthIn, heightIn, backgroundColor) {
            context.globalAlpha = this.p_control.opacityAbs;
            context.drawImage(this.p_canvasCache, 0 - (widthIn * this.p_control.anchorPoint.x), 0 - (heightIn * this.p_control.anchorPoint.y));
        };

        SurfaceTextCanvas.prototype.p_getWords = function () {
            var text = this.p_control.text.replace(/\n/g, ' br ');

            var sRegExp = '( ';
            var length = this.p_control.delimiters.length;

            if (length > 0) {
                sRegExp += '|';
                for (var i = 0; i < length - 1; i++) {
                    sRegExp += this.p_control.delimiters[i] + '|';
                }
                sRegExp += this.p_control.delimiters[length - 1];
            }

            sRegExp += ')';
            var re = new RegExp(sRegExp, '');

            //console.log(sRegExp);
            this.p_words = text.split(re);
            //this.p_words = text.split(/( |\/|-|\=|\%)/);
        };

        SurfaceTextCanvas.prototype.p_wrapTextOnCanvas = function (bDrawText) {
            var _this = this;
            if (typeof bDrawText === "undefined") { bDrawText = false; }
            //----- Split the text into individual words.
            var words = this.p_words;
            var wordPrev = '';

            //----- Wrap each word in a <span>
            var currentLine = '';
            var sEllipsis = '';
            var lineCount = 1;
            var bFirst = true;
            var baselineCurrent = 0;
            var lineHeight = this.p_control.style.text.lineHeight > 0 ? this.p_control.style.text.lineHeight : this.p_control.style.text.fontSize * this.DEFAULT_LINE_HEIGHT_FACTOR;

            words.every(function (word) {
                var bNewline = false;
                if (word === 'br')
                    bNewline = true;

                if (bFirst) {
                    baselineCurrent = lineHeight;
                    currentLine = word;
                    bFirst = false;
                } else if (bNewline || _this.p_contextCache.measureText(currentLine + word + sEllipsis).width > _this.p_control.width) {
                    lineCount++;
                    if (bNewline)
                        word = '';
                    if (word === ' ')
                        word = '';

                    //----- Draw the current line.
                    if (bDrawText) {
                        if ((wordPrev === ' ' || wordPrev === '.') && currentLine.length > 1)
                            currentLine = currentLine.substring(0, currentLine.length - 1);
                        _this.p_contextCache.fillText(currentLine + sEllipsis, 0, baselineCurrent - (lineHeight * _this.BASELINE_OFFSET_FACTOR));
                    }

                    if (_this.p_control.maxLineCount > 0) {
                        //----- so we need to make sure we haven't reached it yet.
                        if (_this.p_control.maxLineCount === lineCount) {
                            //----- We're starting our last line.
                            sEllipsis = '...' + _this.p_control.postEllipsis;
                        } else if (lineCount > _this.p_control.maxLineCount) {
                            //----- We were on our last line, so it's time to stop.
                            return false;
                        }
                    }

                    baselineCurrent += lineHeight;
                    currentLine = word;
                } else {
                    currentLine += word;
                }

                wordPrev = word;

                return true;
            });

            //----- Draw the last line.
            if (bDrawText && (this.p_control.maxLineCount === 0 || lineCount <= this.p_control.maxLineCount)) {
                this.p_contextCache.fillText(currentLine, 0, baselineCurrent - (lineHeight * this.BASELINE_OFFSET_FACTOR));
            }

            return baselineCurrent + lineHeight;
        };

        /*====================================================================*
        START: Private Methods
        *====================================================================*/
        SurfaceTextCanvas.prototype._canvas_initialized = function () {
            this.p_control.isAspectRatioMaintained = false;
            this.p_control.setWidthWithoutInvalidation(this.p_canvasCache.width);
            this.p_control.setHeightWithoutInvalidation(this.p_canvasCache.height);
            this.p_control.isAspectRatioMaintained = true;

            this._bCanvasInitialized = true;
            this.p_control.doLoaded();
        };
        return SurfaceTextCanvas;
    })(lux.SurfaceCanvas);
    lux.SurfaceTextCanvas = SurfaceTextCanvas;
})(lux || (lux = {}));
/// <reference path='surfaceCanvas.ts' />
/// <reference path='rendererCanvas.ts' />
/// <reference path='../../controls/canvasVector.ts' />
var lux;
(function (lux) {
    var SurfaceVectorCanvas = (function (_super) {
        __extends(SurfaceVectorCanvas, _super);
        function SurfaceVectorCanvas(renderer) {
            _super.call(this, renderer);
            this.p_scale = 1;
            this.p_width = 100;
            this.p_height = 100;
        }
        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        SurfaceVectorCanvas.prototype.activate = function (control) {
            _super.prototype.activate.call(this, control);

            this.p_control.propertyChanged.listen(this.p_control_onPropertyChanged, this);

            this.p_setup();

            this.p_control.doLoaded();
        };

        /*====================================================================*
        START: Protected Methods
        *====================================================================*/
        SurfaceVectorCanvas.prototype.p_setup = function () {
            var sizeOrig = this.p_control.vector.size;

            this.p_control.isAspectRatioMaintained = false;

            if (this.p_control.p_bWidthSet) {
                this.p_width = this.p_control.width;

                if (this.p_control.p_bHeightSet) {
                    this.p_height = this.p_control.height;
                } else {
                    var ratio = this.p_control.width / sizeOrig.width;
                    var newHeight = sizeOrig.height * ratio;
                    this.p_height = newHeight;

                    this.p_control.setHeightWithoutInvalidation(newHeight);
                }
            } else if (this.p_control.p_bHeightSet) {
                this.p_height = this.p_control.height;

                var ratio = this.p_control.height / sizeOrig.height;
                var newWidth = sizeOrig.width * ratio;
                this.p_width = newWidth;

                this.p_control.setWidthWithoutInvalidation(newWidth);
            } else {
                this.p_control.setWidthWithoutInvalidation(sizeOrig.width);
                this.p_control.setHeightWithoutInvalidation(sizeOrig.height);
            }

            this.p_control.isAspectRatioMaintained = true;

            this.p_scale = this.p_control.width / sizeOrig.width;
        };

        /*--------------------------------------------------------------------*
        START: Canvas
        *--------------------------------------------------------------------*/
        SurfaceVectorCanvas.prototype.p_control_onPropertyChanged = function (args) {
            if (args.propertyName === 'width' || args.propertyName === 'height' || args.propertyName === 'style.background.color') {
                this.p_setup();
            }
        };

        SurfaceVectorCanvas.prototype.p_drawToCanvas = function (context, widthIn, heightIn, backgroundColor) {
            if (!backgroundColor.isEmpty) {
                var sColor = context.fillStyle = this.p_control.style.background.color.toHex();
                context.fillStyle = sColor;
                context.strokeStyle = sColor;
                context.globalAlpha = this.p_control.opacityAbs;
                this.p_control.vector.render(context, this.p_scale);
            }
        };
        return SurfaceVectorCanvas;
    })(lux.SurfaceCanvas);
    lux.SurfaceVectorCanvas = SurfaceVectorCanvas;
})(lux || (lux = {}));
/// <reference path='../../iRenderer.ts' />
/// <reference path='../../rendererBase.ts' />
/// <reference path='surfaceCanvas.ts' />
/// <reference path='surfaceRootCanvas.ts' />
/// <reference path='surfaceControlCanvas.ts' />
/// <reference path='surfaceImageCanvas.ts' />
/// <reference path='surfaceTextCanvas.ts' />
/// <reference path='surfaceVectorCanvas.ts' />
var lux;
(function (lux) {
    var RendererCanvas = (function (_super) {
        __extends(RendererCanvas, _super);
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        /**
        * Passed to an lux.Root to instantiate a new MShell control system.
        * Handles rendering of all nested MShell controls for the associated lux.Root.
        */
        function RendererCanvas() {
            _super.call(this, false, false, true);
            /*====================================================================*
            START: Properties and Fields
            *====================================================================*/
            this.is3dEnabled = false;
            this.isNestedSurfaceSystem = false;
            this.isRenderedOnTimer = true;
        }
        Object.defineProperty(RendererCanvas.prototype, "canvas", {
            get: function () {
                return this.p_canvas;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(RendererCanvas.prototype, "context", {
            get: function () {
                return this.p_context;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        RendererCanvas.prototype.newRootSurface = function (args) {
            try  {
                var rootSurface = new lux.SurfaceRootCanvas(this, args);
                if (lux.g.isEmpty(rootSurface))
                    return null;

                this.p_canvas = rootSurface.canvas;
                this.p_context = rootSurface.context;
                return rootSurface;
            } catch (e) {
                console.log('Error in RendererCanvas.newRootSurface: ' + e.toString());
                return null;
            }
        };

        RendererCanvas.prototype.newSurface = function (type, args) {
            try  {
                switch (type) {
                    case 0 /* BASIC */:
                        return new lux.SurfaceControlCanvas(this);
                        break;
                    case 1 /* IMAGE */:
                        return new lux.SurfaceImageCanvas(this);
                        break;
                    case 4 /* TEXT_AREA */:
                        return new lux.SurfaceTextCanvas(this);
                        break;
                    case 3 /* VECTOR */:
                        return new lux.SurfaceVectorCanvas(this);
                        break;
                }
            } catch (e) {
                console.log('Error in RendererCanvas.newSurface(): ' + e.toString());
                return null;
            }
        };
        return RendererCanvas;
    })(lux.RendererBase);
    lux.RendererCanvas = RendererCanvas;
})(lux || (lux = {}));
/// <reference path="collections.ts" />
/// <reference path="list.ts" />
var lux;
(function (lux) {
    var Queue = (function () {
        /**
        * Creates an empty queue.
        * @class A queue is a First-In-First-Out (FIFO) data structure, the first
        * element added to the queue will be the first one to be removed. This
        * implementation uses a linked list as a container.
        * @constructor
        */
        function Queue() {
            this.list = new lux.List();
        }
        /**
        * Inserts the specified element into the end of this queue.
        * @param {Object} elem the element to insert.
        * @return {boolean} true if the element was inserted, or false if it is undefined.
        */
        Queue.prototype.add = function (elem) {
            return this.list.add(elem);
        };

        /**
        * Retrieves and removes the head of this queue.
        * @return {*} the head of this queue, or undefined if this queue is empty.
        */
        Queue.prototype.removeFirst = function () {
            if (this.list.length !== 0) {
                var el = this.list.first;
                this.list.removeAtIndex(0);
                return el;
            }
            return undefined;
        };

        /**
        * Retrieves and removes the tail of this queue.
        * @return {*} the tail of this queue, or undefined if this queue is empty.
        */
        Queue.prototype.removeLast = function () {
            if (this.list.length !== 0) {
                var el = this.list.last;
                this.list.removeAtIndex(this.list.length - 1);
                return el;
            }
            return undefined;
        };

        /**
        * Retrieves, but does not remove, the head of this queue.
        * @return {*} the head of this queue, or undefined if this queue is empty.
        */
        Queue.prototype.peek = function () {
            if (this.list.length !== 0) {
                return this.list.first;
            }
            return undefined;
        };

        Object.defineProperty(Queue.prototype, "length", {
            /**
            * Returns the number of elements in this queue.
            * @return {number} the number of elements in this queue.
            */
            get: function () {
                return this.list.length;
            },
            enumerable: true,
            configurable: true
        });

        /**
        * Returns true if this queue contains the specified element.
        * <p>If the elements inside this stack are
        * not comparable with the === operator, a custom equals function should be
        * provided to perform searches, the function must receive two arguments and
        * return true if they are equal, false otherwise. Example:</p>
        *
        * <pre>
        * var petsAreEqualByName (pet1, pet2) {
        *  return pet1.name === pet2.name;
        * }
        * </pre>
        * @param {Object} elem element to search for.
        * @param {function(Object,Object):boolean=} equalsFunction optional
        * function to check if two elements are equal.
        * @return {boolean} true if this queue contains the specified element,
        * false otherwise.
        */
        Queue.prototype.contains = function (elem, equalsFunction) {
            return this.list.contains(elem, equalsFunction);
        };

        Object.defineProperty(Queue.prototype, "isEmpty", {
            /**
            * Checks if this queue is empty.
            * @return {boolean} true if and only if this queue contains no items; false
            * otherwise.
            */
            get: function () {
                return this.list.length <= 0;
            },
            enumerable: true,
            configurable: true
        });

        /**
        * Removes all of the elements from this queue.
        */
        Queue.prototype.clear = function () {
            this.list.clear();
        };

        /**
        * Executes the provided function once for each element present in this queue in
        * FIFO order.
        * @param {function(Object):*} callback function to execute, it is
        * invoked with one argument: the element value, to break the iteration you can
        * optionally return false.
        */
        Queue.prototype.forEach = function (callback) {
            this.list.forEach(callback);
        };
        return Queue;
    })();
    lux.Queue = Queue;
})(lux || (lux = {}));
var lux;
(function (lux) {
    //----- Result class for simplyfied async communication (with added Promise support)
    var Result = (function () {
        function Result() {
            this._handlers = [];
            this._error = null;
            this.isCompleted = false;
        }
        //----- Public methods
        Result.prototype.complete = function (value) {
            if (!this.isCompleted) {
                this._value = value;
                this._complete();
            } else if (this._error != null) {
                throw this._error;
            }
            return this._value;
        };

        Result.prototype.then = function (onDone) {
            if (this.isCompleted) {
                onDone(this);
            } else {
                this._handlers.push(onDone);
            }
            return this;
        };

        Result.prototype.error = function (error) {
            if (!this.isCompleted) {
                this._error = error;
                this._complete();
            }
            return this._error;
        };

        //----- Private methods
        Result.prototype._complete = function () {
            this.isCompleted = true;
            for (var i = 0; i < this._handlers.length; i++) {
                try  {
                    this._handlers[i](this);
                } catch (e) {
                }
            }
        };

        //----- Static methods
        Result.error = function (error) {
            var result = new Result();
            result.error(error || new Error());
            return result;
        };

        Result.complete = function (value) {
            var result = new Result();
            result.complete(value);
            return result;
        };
        return Result;
    })();
    lux.Result = Result;
})(lux || (lux = {}));
//----- Usage example
/*
function getDelayedValue(error: boolean): IResult<string> {
var result: IResult<string> = new Result();
setTimeout(function () {
if (error) {
result.error(new Error('something went wrong'));
} else {
result.complete('hello world');
}
}, 100);
return result;
}
for (var i = 0; i < 2; i++) {
getDelayedValue(i > 0).then(function (result) {
try {
var message = result.complete();
alert(message);
} catch (e) {
alert(e.message);
}
});
}
*/
/// <reference path='../events.ts' />
/// <reference path='../collections/queue.ts' />
/// <reference path='result.ts' />
var lux;
(function (lux) {
    var Command = (function () {
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function Command(runFunction, undoFunction) {
            if (lux.g.isNotEmpty(runFunction))
                this.runFunction = runFunction;
            if (lux.g.isNotEmpty(undoFunction))
                this.undoFunction = undoFunction;
        }
        Command.prototype.run = function (result) {
            if (lux.g.isNotEmpty(this.runFunction))
                this.runFunction(result);
            if (lux.g.isNotEmpty(result))
                return result;
            else
                return lux.Result.complete(null);
        };

        Command.prototype.undo = function (result) {
            if (lux.g.isNotEmpty(this.undoFunction))
                this.undoFunction(result);
            if (lux.g.isNotEmpty(result))
                return result;
            else
                return lux.Result.complete(null);
        };
        return Command;
    })();
    lux.Command = Command;

    var CommandEventArgs = (function (_super) {
        __extends(CommandEventArgs, _super);
        function CommandEventArgs(command, p) {
            _super.call(this);
            this.command = command;
            this.p = p;
        }
        return CommandEventArgs;
    })(lux.EventArgs);
    lux.CommandEventArgs = CommandEventArgs;

    var CommandManager = (function () {
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        function CommandManager(bUndoEnabled) {
            if (typeof bUndoEnabled === "undefined") { bUndoEnabled = true; }
            /*====================================================================*
            START: Members and Properties
            *====================================================================*/
            this._bUndoEnabled = true;
            this._pendingStack = new lux.Queue();
            this._completedStack = new lux.Queue();
            this._undoStack = new lux.Queue();
            /*====================================================================*
            START: Events
            *====================================================================*/
            this.initialized = new lux.Signal();
            this.commandRun = new lux.Signal();
            /*--------------------------------------------------------------------*
            START: runAll
            *--------------------------------------------------------------------*/
            this._bRunningAll = false;
            this._nRunningAllStart = 0;
            this.p = 0;
            this._bUndoEnabled = bUndoEnabled;
        }
        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        /*--------------------------------------------------------------------*
        START: run
        *--------------------------------------------------------------------*/
        CommandManager.prototype.run = function (command) {
            if (lux.g.isEmpty(command))
                return lux.Result.complete(null);

            if (this._bUndoEnabled)
                this._completedStack.add(command);

            this.commandRun.dispatch(new CommandEventArgs(command, this.p));

            var result = new lux.Result();
            return command.run(result);
        };

        /*--------------------------------------------------------------------*
        START: runNext
        *--------------------------------------------------------------------*/
        CommandManager.prototype.runNext = function () {
            if (this._pendingStack.length > 0) {
                var command = this._pendingStack.removeFirst();
                if (lux.g.isEmpty(command))
                    return lux.Result.complete(null);
                return this.run(command);
            } else
                return lux.Result.complete(null);
        };

        CommandManager.prototype.runAll = function () {
            var resultRunAll = new lux.Result();

            if (!this._bRunningAll) {
                this._nRunningAllStart = this._pendingStack.length;
                if (this._nRunningAllStart === 0) {
                    this.p = 1;
                    console.log('returning null result from runAll.');
                    return lux.Result.complete(null);
                }
                this._bRunningAll = true;
            }

            this.runAllNext(resultRunAll);

            //console.log('returning resultRunAll.');
            return resultRunAll;
        };
        CommandManager.prototype.runAllNext = function (resultRunAll) {
            var _this = this;
            this.runNext().then(function (result) {
                if (_this._pendingStack.length > 0) {
                    _this.p = 1 - (_this._pendingStack.length / _this._nRunningAllStart);

                    /*console.log(
                    'p = ' + this.p.toString() + ', stack: ' + this._pendingStack.length.toString()
                    + ', start: ' + this._nRunningAllStart.toString()
                    );*/
                    _this.runAllNext(resultRunAll);
                } else {
                    _this.p = 1;
                    _this.commandRun.dispatch(new CommandEventArgs(null, _this.p));

                    //console.log('p = ' + this.p.toString());
                    _this._bRunningAll = false;

                    //console.log('All commands have been run. Completing resultRunAll.');
                    resultRunAll.complete();
                }
            });
        };

        /*--------------------------------------------------------------------*
        START: add
        *--------------------------------------------------------------------*/
        CommandManager.prototype.add = function (command) {
            if (lux.g.isEmpty(command))
                return;
            this._pendingStack.add(command);
        };

        /*--------------------------------------------------------------------*
        START: undo
        *--------------------------------------------------------------------*/
        CommandManager.prototype.undo = function () {
            if (!this._bUndoEnabled)
                return lux.Result.complete(null);

            var command = this._completedStack.removeLast();
            if (lux.g.isEmpty(command))
                lux.Result.complete(null);

            this._undoStack.add(command);

            var result = new lux.Result();
            return command.undo(result);
        };

        /*--------------------------------------------------------------------*
        START: redo
        *--------------------------------------------------------------------*/
        CommandManager.prototype.redo = function () {
            var command = this._undoStack.removeLast();
            if (lux.g.isEmpty(command))
                return lux.Result.complete(null);
            return this.run(command);
        };
        return CommandManager;
    })();
    lux.CommandManager = CommandManager;
})(lux || (lux = {})); // End of module
/// <reference path='feedItemViewMode.ts' />
/// <reference path='../lux/zoomDragManager.ts' />
/// <reference path='../lux/controls/text.ts' />
/// <reference path='../lux/util/g.ts' />
/// <reference path='../app/manager.ts' />
/// <reference path='../lux/util/result.ts' />
var feed;
(function (feed) {
    var FeedItemViewModeImage = (function (_super) {
        __extends(FeedItemViewModeImage, _super);
        function FeedItemViewModeImage(imageView, attributes, result) {
            _super.call(this, attributes, result);
            this.p_previewHeight = 560;
            this.p_bTitleLarge = false;
            this.p_bSkinny = false;
            this.p_zoomScale = 1;

            this.p_imageView = imageView;
            this.p_attributes = attributes;
            this.p_result = result;
        }
        /*====================================================================*
        START: Events
        *====================================================================*/
        FeedItemViewModeImage.prototype.p_onActivated = function () {
            _super.prototype.p_onActivated.call(this);

            if (lux.g.isEmpty(this.p_attributes))
                return;

            var modifier = 1.0;

            this.p_imageView.resized.listen(this.p_imageView_onResized, this);

            //----- Meta
            var sMeta = this.p_attributes.get('meta').value;
            this.p_meta = new lux.Text(sMeta, feed.FeedConfig.feedWidth - (feed.FeedConfig.margin * 2));
            this.p_meta.style.text.set(feed.FeedConfig.fontMeta);
            this.p_meta.left = feed.FeedConfig.margin;
            this.p_meta.maxLineCount = 3;
            this.p_meta.style.text.color = app.Manager.colorGrayLight;

            var imageToolbarBottom;

            imageToolbarBottom = new lux.Image('assets/images/app/toolbarBottom_text.png');
            this.p_view.width = app.Manager.appWidth;

            this.p_view.style.background.color = app.Manager.colorTileBackgroundDark;

            this.toolbarBottom.controls.addByName(imageToolbarBottom, 'imageToolbarBottom');

            this.p_view.contentContainer.isClipChildControls = false;
            this.p_view.contentContainer.width = feed.FeedConfig.feedWidth;

            this.p_zoomPanel = this.p_view.model.models.view.zoomPanel;
            this.p_zoom = this.p_zoomPanel.zoomDragManager;

            //this.p_zoom.targetsReached.listen((args: lux.ZoomDragEventArgs) => { this.p_zoom.isEnabled = false; });
            this.p_view.contentContainer.controls.add(this.p_view.model.models.view);
            this.p_view.controls.add(this.p_meta);
        };

        FeedItemViewModeImage.prototype.p_imageView_onResized = function (args) {
            if (this.p_imageView.width >= feed.FeedConfig.feedWidth) {
                this.p_zoomScale = feed.FeedConfig.feedWidth / this.p_imageView.width;
                this.p_view.model.models.view.zoomPanel.scale = this.p_zoomScale;
                this.p_bSkinny = false;
            } else
                this.p_bSkinny = true;

            if ((this.p_imageView.height * this.p_zoomScale) >= (feed.FeedConfig.feedWidth * 0.5625)) {
                this.p_previewHeight = (feed.FeedConfig.feedWidth * 0.5625);
                this.p_view.contentContainer.isClipChildControls = true;
            } else {
                this.p_previewHeight = this.p_imageView.height * this.p_zoomScale;
                this.p_view.contentContainer.isClipChildControls = false;
            }

            if (this.p_bSkinny) {
                this.p_previewHeight += feed.FeedConfig.margin;
                this.p_zoomPanel.top = feed.FeedConfig.margin;
                this.p_zoomPanel.left = feed.FeedConfig.margin;
            }

            this.p_view.contentContainer.height = this.p_previewHeight;
            this.p_view.height = this.p_previewHeight + feed.FeedConfig.toolbarThicknessTop;

            this.p_meta.top = this.p_previewHeight + (feed.FeedConfig.toolbarThicknessTop / 2) - (this.p_meta.height * 0.35);

            if (lux.g.isNotEmpty(this.p_view.model))
                this.p_view.model.parentCollection.doViewUpdated(false);

            if (lux.g.isNotEmpty(this.p_result))
                this.p_result.complete();
        };

        FeedItemViewModeImage.prototype.p_onModelOpened = function (args) {
            var _this = this;
            this.p_zoom.isEnabled = true;

            this.p_bFullyOpen = false;
            this.p_heightOriginal = this.p_view.height;
            this.p_toolbarBottomYOriginal = this.p_view.height;
            this.p_view.isAspectRatioMaintained = false;
            this.p_meta.isVisible = false;

            this.p_view.inputControl.isAllowMouseEvents = false;
            if (lux.g.isNotEmpty(this.p_view.model))
                this.p_view.model.parentCollection.view.zoomPanel.isAllowDrag = false;

            if (this.p_view.model.root.view.contentContainer.isLoaded) {
                if (args.isAnimate) {
                    this.p_view.zoomDragManager.isEnabled = true;
                    this.p_view.zoomDragManager.targetHeight = feed.FeedConfig.feedHeight;
                    this.p_toolbarTop.opacity = 1;
                    this.p_toolbarBottom.opacity = 1;
                    var top = feed.FeedConfig.toolbarThicknessTop + app.Manager.statusBarHeight;
                    this.p_view.root.animate.run(this.p_toolbarTop.moveTo(0, 0, 0, feed.FeedConfig.durationNormal, feed.FeedConfig.animEaseDefault)).and(this.p_toolbarBottom.moveTo(0, feed.FeedConfig.feedHeight - feed.FeedConfig.toolbarThicknessBottom, 0, feed.FeedConfig.durationNormal, feed.FeedConfig.animEaseDefault)).and(this.p_view.contentContainer.moveTo(0, top, 0, feed.FeedConfig.durationNormal, feed.FeedConfig.animEaseDefault)).and(this.p_view.contentContainer.sizeTo(feed.FeedConfig.feedWidth, feed.FeedConfig.feedHeight - (feed.FeedConfig.toolbarThicknessTop * 2), feed.FeedConfig.durationNormal, false, feed.FeedConfig.animEaseDefault));
                } else {
                    this.p_view.height = feed.FeedConfig.feedHeight;
                }

                this.p_view.inputControl.height = feed.FeedConfig.feedHeight;
                ;
            } else {
                this.p_view.model.root.view.contentContainer.loaded.listen(function (args) {
                    if (args.isAnimate) {
                        _this.p_view.zoomDragManager.isEnabled = true;
                        _this.p_view.zoomDragManager.targetHeight = feed.FeedConfig.feedHeight;
                    } else {
                        _this.p_view.height = feed.FeedConfig.feedHeight;
                        ;
                    }

                    _this.p_view.inputControl.height = feed.FeedConfig.feedHeight;
                });
            }

            this.p_layoutImage();
            //super.p_onModelOpened(args);
        };

        FeedItemViewModeImage.prototype.p_layoutImage = function () {
            var _this = this;
            this.p_zoom.targetScaleChanged.removeAll();
            var targetHeight = feed.FeedConfig.feedHeight - (feed.FeedConfig.toolbarThicknessTop * 2);

            if (this.p_imageView.height > this.p_imageView.width && this.p_imageView.height > targetHeight) {
                this.p_zoom.targetScale = targetHeight / this.p_imageView.height;

                this.p_zoom.dragConstraintYMin = 0;
                this.p_zoom.dragConstraintYMax = 0;

                var minX = (feed.FeedConfig.feedWidth / 2) - ((this.p_imageView.width * this.p_zoom.targetScale) / 2);
                this.p_zoom.dragConstraintXMin = minX;
                this.p_zoom.dragConstraintXMax = minX;

                this.p_zoom.targetScaleChanged.listen(function (args) {
                    _this.p_zoom.dragConstraintYMin = targetHeight - (_this.p_imageView.height * _this.p_zoom.targetScale);

                    if ((_this.p_imageView.width * _this.p_zoom.targetScale) > feed.FeedConfig.feedWidth) {
                        _this.p_zoom.dragConstraintXMin = feed.FeedConfig.feedWidth - (_this.p_imageView.width * _this.p_zoom.targetScale);
                        _this.p_zoom.dragConstraintXMax = 0;

                        _this.p_zoom.dragConstraintYMin = targetHeight - (_this.p_imageView.height * _this.p_zoom.targetScale);
                    } else {
                        minX = (feed.FeedConfig.feedWidth / 2) - ((_this.p_imageView.width * _this.p_zoom.targetScale) / 2);
                        _this.p_zoom.dragConstraintXMin = minX;
                        _this.p_zoom.dragConstraintXMax = minX;
                    }
                });
            } else if (this.p_imageView.width > feed.FeedConfig.feedWidth) {
                this.p_zoom.targetScale = feed.FeedConfig.feedWidth / this.p_imageView.width;

                this.p_zoom.dragConstraintXMin = 0;
                this.p_zoom.dragConstraintXMax = 0;

                var minY = (targetHeight / 2) - ((this.p_imageView.height * this.p_zoom.targetScale) / 2);
                this.p_zoom.dragConstraintYMin = minY;
                this.p_zoom.dragConstraintYMax = minY;
                this.p_zoom.scaleConstraintMin = this.p_zoom.targetScale;

                this.p_zoom.targetScaleChanged.listen(function (args) {
                    _this.p_zoom.dragConstraintXMin = feed.FeedConfig.feedWidth - (_this.p_imageView.width * _this.p_zoom.targetScale);

                    if ((_this.p_imageView.height * _this.p_zoom.targetScale) > targetHeight) {
                        _this.p_zoom.dragConstraintYMin = targetHeight - (_this.p_imageView.height * _this.p_zoom.targetScale);
                        _this.p_zoom.dragConstraintYMax = 0;

                        _this.p_zoom.dragConstraintXMin = feed.FeedConfig.feedWidth - (_this.p_imageView.width * _this.p_zoom.targetScale);
                    } else {
                        minY = (targetHeight / 2) - ((_this.p_imageView.height * _this.p_zoom.targetScale) / 2);
                        _this.p_zoom.dragConstraintYMin = minY;
                        _this.p_zoom.dragConstraintYMax = minY;
                    }
                });
            } else {
                var minX = (feed.FeedConfig.feedWidth / 2) - ((this.p_imageView.width * this.p_zoom.targetScale) / 2);
                this.p_zoom.dragConstraintXMin = minX;
                this.p_zoom.dragConstraintXMax = minX;

                var minY = (targetHeight / 2) - ((this.p_imageView.height * this.p_zoom.targetScale) / 2);
                this.p_zoom.dragConstraintYMin = minY;
                this.p_zoom.dragConstraintYMax = minY;

                this.p_zoom.scaleConstraintMin = 1;

                this.p_zoom.targetScaleChanged.listen(function (args) {
                    if ((_this.p_imageView.width * _this.p_zoom.targetScale) > feed.FeedConfig.feedWidth) {
                        _this.p_zoom.dragConstraintXMin = feed.FeedConfig.feedWidth - (_this.p_imageView.width * _this.p_zoom.targetScale);
                        _this.p_zoom.dragConstraintXMax = 0;
                    } else {
                        minX = (feed.FeedConfig.feedWidth / 2) - ((_this.p_imageView.width * _this.p_zoom.targetScale) / 2);
                        _this.p_zoom.dragConstraintXMin = minX;
                        _this.p_zoom.dragConstraintXMax = minX;
                    }

                    if ((_this.p_imageView.height * _this.p_zoom.targetScale) > targetHeight) {
                        _this.p_zoom.dragConstraintYMin = targetHeight - (_this.p_imageView.height * _this.p_zoom.targetScale);
                        _this.p_zoom.dragConstraintYMax = 0;
                    } else {
                        minY = (targetHeight / 2) - ((_this.p_imageView.height * _this.p_zoom.targetScale) / 2);
                        _this.p_zoom.dragConstraintYMin = minY;
                        _this.p_zoom.dragConstraintYMax = minY;
                    }
                });
            }

            this.p_zoom.isConstrained = true;

            this.p_zoom.targetX = (feed.FeedConfig.feedWidth / 2) - ((this.p_imageView.width * this.p_zoom.targetScale) / 2);
            this.p_zoom.targetY = (targetHeight / 2) - ((this.p_imageView.height * this.p_zoom.targetScale) / 2);
        };

        FeedItemViewModeImage.prototype.p_onModelClosed = function (args) {
            this.p_zoom.isEnabled = true;
            this.p_zoom.isConstrained = false;

            this.p_zoom.targetX = 0;
            this.p_zoom.targetY = 0;

            this.p_meta.isVisible = true;

            if (this.p_bSkinny) {
                this.p_zoom.targetX = feed.FeedConfig.margin;
                this.p_zoom.targetY = feed.FeedConfig.margin;
            }

            this.p_zoom.targetScale = this.p_zoomScale;

            this.p_bFullyOpen = false;

            this.p_view.inputControl.isAllowMouseEvents = true;
            this.p_view.isAspectRatioMaintained = false;

            if (this.p_heightOriginal != null) {
                if (args.isAnimate) {
                    this.p_view.zoomDragManager.isEnabled = true;
                    this.p_view.zoomDragManager.targetHeight = this.p_heightOriginal;
                    var top = 0;
                    this.p_view.root.animate.run(this.p_toolbarTop.moveTo(0, -feed.FeedConfig.toolbarThicknessTop - 6, 0, feed.FeedConfig.durationQuick, feed.FeedConfig.animEaseDefault, true)).and(this.p_toolbarBottom.moveTo(0, this.p_toolbarBottomYOriginal, 0, feed.FeedConfig.durationNormal, feed.FeedConfig.animEaseDefault, true)).and(this.p_view.contentContainer.moveTo(0, top, 0, feed.FeedConfig.durationQuick, feed.FeedConfig.animEaseDefault)).and(this.p_view.contentContainer.sizeTo(feed.FeedConfig.feedWidth, this.p_previewHeight, feed.FeedConfig.durationNormal, false, feed.FeedConfig.animEaseDefault));
                } else
                    this.p_view.height = this.p_heightOriginal;
            }
        };
        return FeedItemViewModeImage;
    })(feed.FeedItemViewMode);
    feed.FeedItemViewModeImage = FeedItemViewModeImage;
})(feed || (feed = {})); // End module
/// <reference path='../events.ts' />
/// <reference path='../enums.ts' />
/// <reference path='collectionViewModeBase.ts' />
var lux;
(function (lux) {
    var ModeZoom = (function (_super) {
        __extends(ModeZoom, _super);
        /*====================================================================*
        START: Constructor
        *====================================================================*/
        /// An IViewMode that displays concepts arranged spatially on a zoomable Canvas.
        function ModeZoom() {
            _super.call(this);
            this.p_bTilt = false;
        }
        Object.defineProperty(ModeZoom.prototype, "isTilt", {
            /*====================================================================*
            START: Properties
            *====================================================================*/
            /// Should the stack tilt dynamically as the drag velocity increases?
            /// <value>
            /// <c>true</c> if this instance is tilt; otherwise, <c>false</c>.
            /// </value>
            get: function () {
                return this.p_bTilt;
            },
            set: function (value) {
                this.p_bTilt = value;
                this._setTilt();
            },
            enumerable: true,
            configurable: true
        });

        ModeZoom.prototype._setTilt = function () {
            if (this.p_view == null || this.p_view.zoomPanel == null || this.p_view.zoomPanel.zoomDragManager == null)
                return;

            this.p_view.zoomPanel.zoomDragManager.isTiltOnXAxis = this.p_bTilt;
            this.p_view.zoomPanel.zoomDragManager.isTiltOnYAxis = this.p_bTilt;
        };

        /*====================================================================*
        START: Event Handlers
        *====================================================================*/
        ModeZoom.prototype.p_onActivated = function () {
            if (this.p_view == null)
                return;

            _super.prototype.p_onActivated.call(this);

            this.p_view.isAllowMouseButtonEvents = false;
            this.p_view.overlayPanel.isAllowMouseButtonEvents = false;

            this.p_view.clipPanel.isClipChildControls = false;
            this.p_view.clipPanel.isAllowMouseButtonEvents = true;
            this.p_view.clipPanel.isAllowMouseWheelEvents = true;
            this.p_view.clipPanel.isPropagateMouseEvents = true;

            this.p_view.zoomPanel.zoomDragManager.zoomType = 1 /* SCALE */;
            this.p_view.zoomPanel.isAllowMouseButtonEvents = false;
            this.p_view.zoomPanel.zoomDragManager.isUseDeceleration = true;
            this.p_view.zoomPanel.zoomDragManager.deceleration = 0.92;
            this.p_view.zoomPanel.zoomDragManager.speed = 0.15; //Affects how quickly items animate to their initial positions.
            this.p_view.zoomPanel.isAllowDrag = true;
            this.p_view.zoomPanel.isAllowZoom = true;

            this.p_view.zoomPanel.zoomDragManager.isElasticY = false;
            this.p_view.zoomPanel.zoomDragManager.isElasticX = false;

            this.p_view.zoomPanel.zoomDragManager.isConstrained = true;
            this.p_view.zoomPanel.zoomDragManager.isKeepWithinParentControlX = false;
            this.p_view.zoomPanel.zoomDragManager.isKeepWithinParentControlY = false;

            this.p_view.zoomPanel.zoomDragManager.dragConstraintXMax = 1000000000;
            this.p_view.zoomPanel.zoomDragManager.dragConstraintYMax = 1000000000;
            this.p_view.zoomPanel.zoomDragManager.dragConstraintXMin = -1000000000;
            this.p_view.zoomPanel.zoomDragManager.dragConstraintYMin = -1000000000;
            this.p_view.zoomPanel.zoomDragManager.scaleConstraintMax = 50.0;
            this.p_view.zoomPanel.zoomDragManager.scaleConstraintMin = 0.01;

            this._setTilt();
        };

        ModeZoom.prototype.p_onDeactivated = function () {
            _super.prototype.p_onDeactivated.call(this);

            this.p_view.zoomPanel.zoomDragManager.dragConstraintXMax = 1000000000;
            this.p_view.zoomPanel.zoomDragManager.dragConstraintYMax = 1000000000;
            this.p_view.zoomPanel.zoomDragManager.dragConstraintXMin = -1000000000;
            this.p_view.zoomPanel.zoomDragManager.dragConstraintYMin = -1000000000;
            this.p_view.zoomPanel.zoomDragManager.scaleConstraintMax = 50.0;
            this.p_view.zoomPanel.zoomDragManager.scaleConstraintMin = 0.01;
        };

        ModeZoom.prototype.p_onViewUpdated = function (args) {
            _super.prototype.p_onViewUpdated.call(this, args);

            if (this.p_view.models.modelLastSelected != null)
                this.p_view.models.modelLastSelected.view.mode.updateSelectionIndicators(this.p_view.zoomPanel.zoomDragManager.targetScale);
        };
        return ModeZoom;
    })(lux.CollectionViewModeBase);
    lux.ModeZoom = ModeZoom;
})(lux || (lux = {})); // End of module
/// <reference path='feedConfig.ts' />
/// <reference path='feedItem.ts' />
/// <reference path='feedItemRoot.ts' />
/// <reference path='feedViewModeCommon.ts' />
/// <reference path='../lux/events.ts' />
/// <reference path='../lux/signal.ts' />
/// <reference path='../lux/zoomDragManager.ts' />
/// <reference path='../lux/models/modeZoom.ts' />
/// <reference path='../lux/models/viewMode.ts' />
var feed;
(function (feed) {
    var FeedItemContentViewModeImage = (function (_super) {
        __extends(FeedItemContentViewModeImage, _super);
        function FeedItemContentViewModeImage() {
            _super.call(this);
            /*====================================================================*
            START: Properties
            *====================================================================*/
            this.p_previewHeight = 250;
            this.p_toolbarTop = new feed.ToolbarTop();
            /*====================================================================*
            START: Event Handlers
            *====================================================================*/
            this.targetScaleChanged = new lux.Signal();
            this.addBehavior(new feed.FeedViewModeCommon());
        }
        Object.defineProperty(FeedItemContentViewModeImage.prototype, "toolbarTop", {
            get: function () {
                return this.p_toolbarTop;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(FeedItemContentViewModeImage.prototype, "viewMap", {
            get: function () {
                return this.p_viewMap;
            },
            enumerable: true,
            configurable: true
        });

        /*====================================================================*
        START: Public Methods
        *====================================================================*/
        FeedItemContentViewModeImage.prototype.setupOpenModel = function (args, viewTargetWidth, viewTargetHeight) {
        };

        FeedItemContentViewModeImage.prototype.p_onActivated = function () {
            _super.prototype.p_onActivated.call(this);

            this.p_view.zoomPanel.zoomDragManager.isElasticY = true;
            this.p_view.zoomPanel.zoomDragManager.isElasticX = true;
            this.p_view.zoomPanel.zoomDragManager.speed = feed.FeedConfig.zoomSpeed;
            this.p_view.zoomPanel.zoomDragManager.targetProximityPosition = feed.FeedConfig.targetProxPos;
            this.p_view.zoomPanel.zoomDragManager.deceleration = 0.96;
            this.p_view.zoomPanel.zoomDragManager.dragSpeedFactor = 1.5;
            this.p_view.zoomPanel.isAllowZoom = true;
            this.p_view.width = feed.FeedConfig.feedWidth;
            this.p_view.height = feed.FeedConfig.feedHeight - (feed.FeedConfig.toolbarThicknessTop * 2);
            this.p_view.zoomPanel.zoomDragManager.isConstrained = false;

            //----- toolbarTop
            this.p_view.overlayPanel.controls.add(this.p_toolbarTop);

            this.p_view.overlayPanel.isVisible = true;
            this.p_view.overlayPanel.opacity = 1;
            this.p_view.overlayPanel.isAllowMouseEvents = false;

            /*this.p_view.clipPanel.top = 0;
            this.p_view.clipPanel.width = FeedConfig.feedWidth;
            this.p_view.clipPanel.height = FeedConfig.feedHeight - FeedConfig.toolbarThicknessTop - app.Manager.statusBarHeight;*/
            this.p_view.clipPanel.isClipChildControls = false;
            //this.p_view.models.doViewUpdated(true);
        };
        return FeedItemContentViewModeImage;
    })(lux.ModeZoom);
    feed.FeedItemContentViewModeImage = FeedItemContentViewModeImage;
})(feed || (feed = {})); // End of module
/// <reference path='feedItem.ts' />
/// <reference path='feedItemViewModeImage.ts' />
/// <reference path='feedItemContentViewModeImage.ts' />
/// <reference path='../lux/models/model.ts' />
var feed;
(function (feed) {
    var ViewModeImage = (function (_super) {
        __extends(ViewModeImage, _super);
        function ViewModeImage(imagePath) {
            _super.call(this);

            this.p_imagePath = imagePath;
        }
        /*====================================================================*
        START: Events
        *====================================================================*/
        ViewModeImage.prototype.p_onActivated = function () {
            var _this = this;
            _super.prototype.p_onActivated.call(this);

            this.p_image = new lux.Image(this.p_imagePath);

            this.p_image.loaded.listenOnce(function (args) {
                _this.p_view.width = _this.p_image.width;
                _this.p_view.height = _this.p_image.height;
                _this.p_view.top = 0;
                _this.p_view.left = 0;

                _this.p_view.inputControl.width = _this.p_view.width;
                _this.p_view.inputControl.height = _this.p_view.height;

                if (lux.g.isNotEmpty(_this.p_view.model))
                    _this.p_view.model.parentCollection.doViewUpdated(false);
            });

            this.p_view.controls.add(this.p_image);
        };
        return ViewModeImage;
    })(lux.ViewMode);
    feed.ViewModeImage = ViewModeImage;

    var FeedItemImage = (function (_super) {
        __extends(FeedItemImage, _super);
        function FeedItemImage(attributes, result) {
            _super.call(this, false);

            this.p_attributes = attributes;

            /*this.p_models.viewUpdated.listen(() => {
            this.p_view.height = this.p_models.view.height;
            this.parentCollection.doViewUpdated(false);
            });*/
            var imageModel = new lux.Model();
            imageModel.view.mode = new ViewModeImage(this.p_attributes.get('imagePath').value);
            this.p_models.add(imageModel);

            this.p_view.mode = new feed.FeedItemViewModeImage(imageModel.view, this.p_attributes, result);
        }
        FeedItemImage.prototype.p_onInitialize = function (bContainerNode) {
            this.view = new lux.View();
            this.isContainer = true;
        };

        Object.defineProperty(FeedItemImage.prototype, "isContainer", {
            set: function (value) {
                if (value && !this.p_bContainer) {
                    this.p_models = new lux.ModelCollection(this);

                    //----- Set content
                    this.p_bContainer = true;
                    this.p_models = new lux.ModelCollection(this);
                    this.p_models.view.mode = new feed.FeedItemContentViewModeImage();
                    //this.p_view.content = this.p_models.view;
                } else if (this.p_bContainer) {
                    this.p_models.view = null;
                    this.p_models = null;
                }

                this.p_bContainer = value;
            },
            enumerable: true,
            configurable: true
        });
        return FeedItemImage;
    })(feed.FeedItem);
    feed.FeedItemImage = FeedItemImage;
})(feed || (feed = {})); // End of module
/// <reference path='feedItemViewMode.ts' />
/// <reference path='../lux/controls/text.ts' />
/// <reference path='../lux/util/g.ts' />
/// <reference path='../lux/util/result.ts' />
/// <reference path='../app/manager.ts' />
var feed;
(function (feed) {
    var FeedItemViewModeText = (function (_super) {
        __extends(FeedItemViewModeText, _super);
        function FeedItemViewModeText(attributes, result) {
            _super.call(this, attributes, result);
            /*====================================================================*
            START: Properties
            *====================================================================*/
            this.p_previewHeight = 560;
            this.p_labelText = '';
            this.p_bTitleLarge = false;
            this.p_titleOffset = 0;
            this.p_textStyleLarge = feed.FeedConfig.fontTitleTextLarge;
            this.p_textStyleSmall = feed.FeedConfig.fontTitleTextSmall;
            this.p_delimiters = ['\\-', '\\@'];
            this.p_postEllipsis = '';
        }
        /*====================================================================*
        START: Events
        *====================================================================*/
        FeedItemViewModeText.prototype.p_onActivated = function () {
            var _this = this;
            _super.prototype.p_onActivated.call(this);

            if (lux.g.isEmpty(this.p_attributes))
                return;

            var modifier = 1.0;

            //----- Icon
            if (lux.g.isNotEmpty(this.p_icon)) {
                this.p_icon.width = feed.FeedConfig.iconThicknessSmall;
                this.p_icon.top = feed.FeedConfig.margin;
                this.p_icon.left = feed.FeedConfig.margin;
                this.p_icon.style.background.color = app.Manager.colorAccent;
                this.p_view.contentContainer.controls.add(this.p_icon);

                this.p_titleOffset = feed.FeedConfig.iconThicknessSmall * 1.5;
            }

            //----- Label
            if (this.p_labelText != '') {
                this.p_label = new lux.Text(this.p_labelText, feed.FeedConfig.feedWidth - (feed.FeedConfig.margin * 2));
                this.p_label.style.text.set(this.p_metaStyle);
                this.p_label.top = feed.FeedConfig.margin - (this.p_metaStyle.lineHeight * 0.3);
                this.p_label.left = feed.FeedConfig.margin;
                if (lux.g.isNotEmpty(this.p_icon))
                    this.p_label.left += feed.FeedConfig.iconThicknessSmall * 1.5;
                this.p_label.maxLineCount = 3;
            }

            //----- Text
            var sTitle = this.p_attributes.get('title').value;
            this.p_bTitleLarge = sTitle.length < 11 ? true : false;
            this.p_text = new lux.Text(sTitle, feed.FeedConfig.feedWidth - (feed.FeedConfig.margin * 2));
            this.p_text.delimiters = this.p_delimiters;
            this.p_text.postEllipsis = this.p_postEllipsis;

            if (this.p_bTitleLarge)
                this.p_text.style.text.set(this.p_textStyleLarge);
            else
                this.p_text.style.text.set(this.p_textStyleSmall);

            this.p_text.left = feed.FeedConfig.margin;

            modifier = this.p_bTitleLarge ? 0.6 : 0.8;
            this.p_text.top = (feed.FeedConfig.margin * modifier) + this.p_titleOffset;

            this.p_text.maxLineCount = 3;

            //----- Meta
            var sMeta = this.p_attributes.get('meta').value;
            this.p_meta = new lux.Text(sMeta, feed.FeedConfig.feedWidth - (feed.FeedConfig.margin * 2));
            this.p_meta.style.text.set(this.p_metaStyle);
            this.p_meta.left = feed.FeedConfig.margin;
            this.p_meta.maxLineCount = 3;

            this.p_text.loaded.listenOnce(function () {
                _this.p_onTileContentLoaded();
                if (lux.g.isNotEmpty(_this.p_result))
                    _this.p_result.complete();
            });

            this.p_view.contentContainer.isClipChildControls = false;
            this.p_view.contentContainer.width = feed.FeedConfig.feedWidth;

            if (lux.g.isNotEmpty(this.p_label))
                this.p_view.contentContainer.controls.add(this.p_label);
            this.p_view.contentContainer.controls.add(this.p_text);
            this.p_view.contentContainer.controls.add(this.p_meta);
        };

        FeedItemViewModeText.prototype.p_onTileContentLoaded = function () {
            var imageToolbarBottom;
            var modifier = 1;

            modifier = this.p_bTitleLarge ? 0.8 : 0.6;
            this.p_meta.top = this.p_text.top + this.p_text.height - (this.p_text.style.text.lineHeight * modifier);
            this.p_meta.opacity = 0.7;

            modifier = this.p_bTitleLarge ? 0.9 : 2.25;
            this.p_previewHeight = this.p_text.height + (feed.FeedConfig.margin * modifier) + this.p_titleOffset;

            this.p_view.height = this.p_previewHeight;
            this.p_view.contentContainer.height = this.p_previewHeight;
            this.toolbarBottom.top = this.p_previewHeight + 6;

            imageToolbarBottom = new lux.Image('assets/images/app/toolbarBottom_text.png');
            this.p_view.width = app.Manager.appWidth;

            this.p_view.style.background.color = app.Manager.colorAccent;

            this.toolbarBottom.controls.addByName(imageToolbarBottom, 'imageToolbarBottom');
        };

        FeedItemViewModeText.prototype.p_onModelOpened = function (args) {
            _super.prototype.p_onModelOpened.call(this, args);

            this.p_text.maxLineCount = 0;
        };
        FeedItemViewModeText.prototype.p_positionContentOnOpen = function () {
            var top = feed.FeedConfig.toolbarThicknessTop;

            if (this.p_bTitleLarge || this.p_view.contentContainer.height < (feed.FeedConfig.feedHeight - feed.FeedConfig.toolbarThicknessBottom))
                top = (feed.FeedConfig.feedHeight / 2) - (this.p_view.contentContainer.height / 2);
            this.p_view.root.animate.run(this.p_view.contentContainer.moveTo(0, top, 0, feed.FeedConfig.durationNormal, feed.FeedConfig.animEaseDefault));
        };

        FeedItemViewModeText.prototype.p_onModelClosed = function (args) {
            _super.prototype.p_onModelClosed.call(this, args);

            this.p_text.maxLineCount = 3;
        };
        return FeedItemViewModeText;
    })(feed.FeedItemViewMode);
    feed.FeedItemViewModeText = FeedItemViewModeText;
})(feed || (feed = {})); // End module
/// <reference path='feedItemViewModeText.ts' />
/// <reference path='../lux/controls/text.ts' />
/// <reference path='../lux/util/g.ts' />
/// <reference path='../app/manager.ts' />
/// <reference path='../lux/util/result.ts' />
var feed;
(function (feed) {
    var FeedItemViewModePhone = (function (_super) {
        __extends(FeedItemViewModePhone, _super);
        function FeedItemViewModePhone(attributes, result) {
            _super.call(this, attributes, result);
            /*====================================================================*
            START: Properties
            *====================================================================*/
            this.p_textStyleLarge = feed.FeedConfig.fontPhone;
            this.p_textStyleSmall = feed.FeedConfig.fontPhone;
            this.p_metaStyle = feed.FeedConfig.fontMeta;
        }
        /*====================================================================*
        START: Events
        *====================================================================*/
        FeedItemViewModePhone.prototype.p_onTileContentLoaded = function () {
            var imageToolbarBottom;
            var modifier = 1;

            this.p_meta.style.text.color = app.Manager.colorGrayLight;

            modifier = 0.6;
            this.p_meta.top = this.p_text.top + this.p_text.height - (this.p_text.style.text.lineHeight * modifier);

            modifier = 2.25;
            this.p_previewHeight = this.p_text.height + (feed.FeedConfig.margin * modifier);

            this.p_view.height = this.p_previewHeight;
            this.p_view.contentContainer.height = this.p_previewHeight;
            this.toolbarBottom.top = this.p_previewHeight + 6;

            imageToolbarBottom = new lux.Image('assets/images/app/toolbarBottom_text.png');
            this.p_view.width = app.Manager.appWidth;

            this.p_view.style.background.color = app.Manager.colorTileBackgroundDark;

            this.toolbarBottom.controls.addByName(imageToolbarBottom, 'imageToolbarBottom');
        };

        FeedItemViewModePhone.prototype.p_positionContentOnOpen = function () {
            var top = (feed.FeedConfig.feedHeight / 2) - (this.p_view.contentContainer.height / 2);
            this.p_view.root.animate.run(this.p_view.contentContainer.moveTo(0, top, 0, feed.FeedConfig.durationNormal, feed.FeedConfig.animEaseDefault));
        };
        return FeedItemViewModePhone;
    })(feed.FeedItemViewModeText);
    feed.FeedItemViewModePhone = FeedItemViewModePhone;
})(feed || (feed = {})); // End module
/// <reference path='feedItemViewModeText.ts' />
/// <reference path='../lux/controls/text.ts' />
/// <reference path='../lux/util/g.ts' />
/// <reference path='../app/manager.ts' />
/// <reference path='../lux/util/result.ts' />
var feed;
(function (feed) {
    var FeedItemViewModePlace = (function (_super) {
        __extends(FeedItemViewModePlace, _super);
        function FeedItemViewModePlace(attributes, result) {
            _super.call(this, attributes, result);
            /*====================================================================*
            START: Properties
            *====================================================================*/
            this.p_textStyleLarge = feed.FeedConfig.fontTitleTextLarge;
            this.p_textStyleSmall = feed.FeedConfig.fontTitleTextSmall;
            this.p_metaStyle = feed.FeedConfig.fontMeta;
            this.p_icon = new lux.CanvasVector(app.Icons.iconPlace);
        }
        /*====================================================================*
        START: Events
        *====================================================================*/
        FeedItemViewModePlace.prototype.p_onTileContentLoaded = function () {
            var imageToolbarBottom;
            var modifier = 1;

            modifier = this.p_bTitleLarge ? 0.8 : 0.6;
            this.p_meta.top = this.p_text.top + this.p_text.height - (this.p_text.style.text.lineHeight * modifier);

            modifier = this.p_bTitleLarge ? 0.9 : 2.25;
            this.p_previewHeight = this.p_text.height + (feed.FeedConfig.margin * modifier) + this.p_titleOffset;

            this.p_view.height = this.p_previewHeight;
            this.p_view.contentContainer.height = this.p_previewHeight;
            this.toolbarBottom.top = this.p_previewHeight + 6;

            imageToolbarBottom = new lux.Image('assets/images/app/toolbarBottom_text.png');
            this.p_view.width = app.Manager.appWidth;

            this.p_view.style.background.color = app.Manager.colorTileBackgroundMain;

            this.toolbarBottom.controls.addByName(imageToolbarBottom, 'imageToolbarBottom');
        };
        return FeedItemViewModePlace;
    })(feed.FeedItemViewModeText);
    feed.FeedItemViewModePlace = FeedItemViewModePlace;
})(feed || (feed = {})); // End module
/// <reference path='feedItemViewModeText.ts' />
/// <reference path='../lux/controls/text.ts' />
/// <reference path='../lux/util/g.ts' />
/// <reference path='../app/manager.ts' />
/// <reference path='../lux/util/result.ts' />
var feed;
(function (feed) {
    var FeedItemViewModeWeb = (function (_super) {
        __extends(FeedItemViewModeWeb, _super);
        function FeedItemViewModeWeb(attributes, result) {
            _super.call(this, attributes, result);
            /*====================================================================*
            START: Properties
            *====================================================================*/
            this.p_textStyleLarge = feed.FeedConfig.fontTitleTextLarge;
            this.p_textStyleSmall = feed.FeedConfig.fontTitleTextSmall;
            this.p_metaStyle = feed.FeedConfig.fontMeta;
            this.p_delimiters = ['\\/', '\\-', '\\_', '\\=', '\\%', '\\.', '\\?', '\\@'];
            this.p_labelText = 'www.engadget.com';
            this.p_icon = new lux.CanvasVector(app.Icons.iconBookmark);

            var index = -1;
            var sLabel = this.p_attributes.get('title').value;

            this.p_postEllipsis = sLabel.substring(sLabel.length - 10);

            if (sLabel.indexOf('https://') != -1)
                sLabel = sLabel.substr(8);
            if (sLabel.indexOf('http://') != -1)
                sLabel = sLabel.substr(7);

            index = sLabel.indexOf('/');
            if (index != -1)
                sLabel = sLabel.substring(0, index);

            this.p_labelText = sLabel;
        }
        /*====================================================================*
        START: Events
        *====================================================================*/
        FeedItemViewModeWeb.prototype.p_onTileContentLoaded = function () {
            var imageToolbarBottom;
            var modifier = 1;

            modifier = this.p_bTitleLarge ? 0.8 : 0.6;
            this.p_meta.top = this.p_text.top + this.p_text.height - (this.p_text.style.text.lineHeight * modifier);

            modifier = this.p_bTitleLarge ? 0.9 : 2.25;
            this.p_previewHeight = this.p_text.height + (feed.FeedConfig.margin * modifier) + this.p_titleOffset;

            this.p_view.height = this.p_previewHeight;
            this.p_view.contentContainer.height = this.p_previewHeight;
            this.toolbarBottom.top = this.p_previewHeight + 6;

            imageToolbarBottom = new lux.Image('assets/images/app/toolbarBottom_text.png');
            this.p_view.width = app.Manager.appWidth;

            this.p_view.style.background.color = app.Manager.colorTileBackgroundMain;

            this.toolbarBottom.controls.addByName(imageToolbarBottom, 'imageToolbarBottom');
        };
        return FeedItemViewModeWeb;
    })(feed.FeedItemViewModeText);
    feed.FeedItemViewModeWeb = FeedItemViewModeWeb;
})(feed || (feed = {})); // End module
/// <reference path='app/manager.ts' />
/// <reference path='lux/root.ts' />
/// <reference path='lux/proxies/point.ts' />
/// <reference path='lux/proxies/color.ts' />
/// <reference path='lux/control.ts' />
/// <reference path='lux/controls/svg.ts' />
/// <reference path='lux/animation/animEase.ts' />
/// <reference path='lux/models/view.ts' />
/// <reference path='lux/renderers/dom/rendererDom.ts' />
/// <reference path='lux/renderers/canvas/rendererCanvas.ts' />
/// <reference path='lux/util/commandManager.ts' />
/// <reference path='lux/util/result.ts' />
/// <reference path='feed/feedItem.ts' />
/// <reference path='feed/feedItemImage.ts' />
/// <reference path='feed/feedItemViewMode.ts' />
/// <reference path='feed/feedItemViewModeText.ts' />
/// <reference path='feed/feedItemViewModePhone.ts' />
/// <reference path='feed/feedItemViewModePlace.ts' />
/// <reference path='feed/feedItemViewModeWeb.ts' />
/// <reference path='d_ts/moment.d.ts' />
/// <reference path='d_ts/domAssistant.d.ts' />
/// <reference path='d_ts/cocoonJS.d.ts' />
//* <reference path='d_ts/modernizr.d.ts' />
//* <reference path='d_ts/handlebars.d.ts' />
//* <reference path='d_ts/jquery.d.ts' />
//----- Prevent elastic scrolling on iOS.
document.body.addEventListener('touchmove', function (e) {
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', function () {
    app.Manager.accountNumber = app.Manager.getAccountNumber();
    if (lux.g.isEmpty(app.Manager.accountNumber)) {
        app.Manager.accountNumber = app.Manager.accountNumberDefault;
        app.Manager.storeAccountNumber();
    }
    console.log('account number: ' + app.Manager.accountNumber);

    if (Cocoon.nativeAvailable)
        app.Manager.isMobile = true;

    if (app.Manager.isMobile) {
        feed.FeedConfig.feedWidth = window.innerWidth;
        feed.FeedConfig.feedHeight = window.innerHeight;
        app.Manager.appWidth = window.innerWidth;
        app.Manager.appHeight = window.innerHeight;
    }

    app.Manager.feedItemRoot = new feed.FeedItemRoot();
    app.Manager.rootElem = document.getElementById('luxRoot');

    app.Manager.root = new lux.Root(app.Manager.rootElem, new lux.RendererCanvas());

    app.Manager.root.width = window.innerWidth;
    app.Manager.root.height = window.innerHeight;

    app.Manager.root.style.background.color = app.Manager.colorBackgroundMain;

    app.Manager.rootClip.isPropagateMouseEvents = true;
    app.Manager.root.controls.addByName(app.Manager.rootClip, 'rootClip');

    var clipWidth = app.Manager.appWidth;
    var clipHeight = app.Manager.appHeight;
    if (app.Manager.isMobile) {
        clipWidth = window.innerWidth;
        clipHeight = window.innerHeight;
    }
    app.Manager.rootClip.width = clipWidth;
    app.Manager.rootClip.height = clipHeight;
    if (!app.Manager.isMobile)
        app.Manager.rootClip.isClipChildControls = true;
    app.Manager.rootClip.style.background.color = new lux.Color(0, 0, 0);
    _setSize();

    //----- app.Manager.controlMain
    app.Manager.controlMain.isPropagateMouseEvents = true;
    app.Manager.controlMain.width = app.Manager.appWidth + app.Manager.filterMenuWidth + app.Manager.margin;
    app.Manager.controlMain.height = app.Manager.appHeight;
    if (app.Manager.isMobile) {
        app.Manager.filterMenuWidth *= 0.005;
        app.Manager.margin *= 0.005;
    }
    app.Manager.controlMain.left = 0 - app.Manager.filterMenuWidth - app.Manager.margin;
    app.Manager.controlMain.style.background.color = new lux.Color(255, 255, 255);
    app.Manager.rootClip.controls.addByName(app.Manager.controlMain, 'controlMain');

    //----- Filters
    var imageFilters = new lux.Image('assets/images/app/filters.png');
    app.Manager.controlMain.controls.addByName(imageFilters, 'imageFilters');
    imageFilters.isAllowMouseButtonEvents = true;

    //----- app.Manager.feedItemRoot
    app.Manager.feedItemRoot.view.width = feed.FeedConfig.feedWidth;
    app.Manager.feedItemRoot.view.height = feed.FeedConfig.feedHeight;
    app.Manager.feedItemRoot.view.top = 0;
    app.Manager.feedItemRoot.view.left = app.Manager.filterMenuWidth + app.Manager.margin;
    app.Manager.feedItemRoot.view.style.background.color = new lux.Color(95, 100, 102);
    app.Manager.controlMain.controls.addByName(app.Manager.feedItemRoot.view, 'feedItemViewRoot');

    if (app.Manager.isMobile) {
        app.Manager.historyLoaded.listen(function (s) {
            _setupRootFeed(s);
        });
        app.Manager.loadHistory();
    } else {
        var json = '' + '{"status":"1","results":[{"content":"126.434\\r\\n","type":"5","__createdAt":"2014-10-14T17:23:45.795Z","id":"bdb0d4e0-c0dd-4492-9461-c2d92a378528"},{"content":"http://www.engadget.com/2014/10/14/apple-october-16-what-to-expect/","type":"3","__createdAt":"2014-10-14T17:23:45.795Z","id":"bdb0d4e0-c0dd-4492-9461-c2d92a378528"},{"content":"https://oneclip.blob.core.windows.net:443/db394e45-6908-4b54-901c-f147f33284a8/7b83da33-8d11-4102-9278-ae6ede5d5d74","type":"4","__createdAt":"2014-10-14T17:21:18.716Z","id":"7b83da33-8d11-4102-9278-ae6ede5d5d74"},{"content":"11111 NE 8th St\\r\\nBellevue, WA 98004","type":"2","__createdAt":"2014-10-14T17:19:24.012Z","id":"1d27ca12-d44f-4d96-b87b-c786fa77cdaf"},{"content":"(425) 894-9485","type":"1","__createdAt":"2014-10-03T23:39:06.49Z","id":"7e42e7b8-e6d3-49a1-9fba-884002a43b48"},{"content":"http://www.baubauhaus.com/image/41531","type":"3","__createdAt":"2014-10-03T23:39:06.49Z","id":"7e42e7b8-e6d3-49a1-9fba-884002a43b48"},{"content":"https://oneclip.blob.core.windows.net:443/db394e45-6908-4b54-901c-f147f33284a8/77afd6a8-0614-46f2-a912-7c7a3dfdc0c1","type":"4","__createdAt":"2014-10-07T18:54:36.417Z","id":"77afd6a8-0614-46f2-a912-7c7a3dfdc0c1"},{"content":"Mac users tired of their neglected four year old version of Outlook can heave a sigh of relief this morning as Microsoft has released a new version of Outlook.","type":"5","__createdAt":"2014-10-07T18:51:26.494Z","id":"b4ef28e2-a6e3-455e-8591-064e00942843"},{"content":"https://oneclip.blob.core.windows.net:443/db394e45-6908-4b54-901c-f147f33284a8/aa34bafd-6931-4aba-a386-6894ec5b513e","type":"4","__createdAt":"2014-10-07T18:46:08.15Z","id":"aa34bafd-6931-4aba-a386-6894ec5b513e"},{"content":"https://oneclip.blob.core.windows.net:443/db394e45-6908-4b54-901c-f147f33284a8/2dab3655-9836-49a4-8964-fa5d63e8ee28","type":"4","__createdAt":"2014-10-07T18:45:00.712Z","id":"2dab3655-9836-49a4-8964-fa5d63e8ee28"},{"content":"https://oneclip.blob.core.windows.net:443/db394e45-6908-4b54-901c-f147f33284a8/dc7c3512-78a7-4577-b9ac-bf9562ffda15","type":"4","__createdAt":"2014-10-07T18:44:03.697Z","id":"dc7c3512-78a7-4577-b9ac-bf9562ffda15"},{"content":"https://oneclip.blob.core.windows.net:443/db394e45-6908-4b54-901c-f147f33284a8/c22bd993-add2-40c9-800e-63c545ce8504","type":"4","__createdAt":"2014-10-07T18:43:24.259Z","id":"c22bd993-add2-40c9-800e-63c545ce8504"},{"content":"https://oneclip.blob.core.windows.net:443/db394e45-6908-4b54-901c-f147f33284a8/7df40c4f-32b6-4525-af82-f563a6b574be","type":"4","__createdAt":"2014-10-07T18:42:16.759Z","id":"7df40c4f-32b6-4525-af82-f563a6b574be"},{"content":"https://oneclip.blob.core.windows.net:443/db394e45-6908-4b54-901c-f147f33284a8/92642d78-3df7-4511-a8a1-c9af77f472d3","type":"4","__createdAt":"2014-10-07T18:41:46.15Z","id":"92642d78-3df7-4511-a8a1-c9af77f472d3"},{"content":"https://oneclip.blob.core.windows.net:443/db394e45-6908-4b54-901c-f147f33284a8/63026908-32a3-4cc7-b04d-511c1087ba5f","type":"4","__createdAt":"2014-10-07T18:40:25.743Z","id":"63026908-32a3-4cc7-b04d-511c1087ba5f"},{"content":"https://oneclip.blob.core.windows.net:443/db394e45-6908-4b54-901c-f147f33284a8/22cc31f1-e5f0-4889-9662-0744425a8c71","type":"4","__createdAt":"2014-10-07T18:38:44.868Z","id":"22cc31f1-e5f0-4889-9662-0744425a8c71"}]}';
        _setupRootFeed(json);
    }
});

window.addEventListener('resize', function () {
    _setSize();
});

function _setSize() {
    if (!app.Manager.root)
        return;

    app.Manager.root.width = window.innerWidth;
    app.Manager.root.height = window.innerHeight;

    if (!app.Manager.isMobile) {
        var scale = 0.5;
        app.Manager.rootClip.scale = scale;
        app.Manager.rootClip.left = (app.Manager.root.width) / 2 - ((app.Manager.rootClip.width * scale) / 2);
        app.Manager.rootClip.top = (app.Manager.root.height) / 2 - ((app.Manager.rootClip.height * scale) / 2);
    }
}

function _setupRootFeed(sJson) {
    var feedItem;
    var feedItemView;
    var feedItemViewMode;
    var image;
    var imageToolbarBottom;
    var imageToolbarTop;
    var tileHeight = 274;
    var sTile = '';

    var commands = new lux.CommandManager();

    app.Manager.feedItemRoot.models.clear();

    var json = JSON.parse(sJson);
    var results = json['results'];
    results.forEach(function (result) {
        var sTime = moment(result['__createdAt']).calendar();

        /*if (sTime.indexOf('Today') > -1)
        {
        sTime = sTime.substring(6, sTime.length);
        }*/
        var command = new lux.Command();

        switch (result['type']) {
            case '1':
                //----- Tile phone
                command.runFunction = function (res) {
                    var sTitle = result['content'];

                    var tileAttrs = new lux.Attributes();
                    tileAttrs.save('title', 9 /* STRING */, sTitle);
                    tileAttrs.save('meta', 9 /* STRING */, sTime);

                    feedItem = new feed.FeedItem();
                    feedItem.view.opacity = 0;
                    feedItem.view.mode = new feed.FeedItemViewModePhone(tileAttrs, res);
                    app.Manager.feedItemRoot.models.add(feedItem, false);
                };
                commands.add(command);
                command = new lux.Command();
                command.runFunction = function (res) {
                    res.complete();
                    feedItem.view.root.animate.run(feedItem.view.fadeTo(1, app.Manager.durationNormal, app.Manager.animEaseDefault, false, function () {
                        feedItem.parentCollection.doViewUpdated(false);
                        res.complete();
                    }));
                };
                commands.add(command);
                break;
            case '2':
                //----- Tile address
                command.runFunction = function (res) {
                    var sTitle = result['content'];

                    var tileAttrs = new lux.Attributes();
                    tileAttrs.save('title', 9 /* STRING */, sTitle);
                    tileAttrs.save('meta', 9 /* STRING */, sTime);

                    feedItem = new feed.FeedItem();
                    feedItem.view.opacity = 0;
                    feedItem.view.mode = new feed.FeedItemViewModePlace(tileAttrs, res);
                    app.Manager.feedItemRoot.models.add(feedItem, false);
                };
                commands.add(command);
                command = new lux.Command();
                command.runFunction = function (res) {
                    res.complete();
                    feedItem.view.root.animate.run(feedItem.view.fadeTo(1, app.Manager.durationNormal, app.Manager.animEaseDefault, false, function () {
                        feedItem.parentCollection.doViewUpdated(false);
                        res.complete();
                    }));
                };
                commands.add(command);
                break;
            case '3':
                //----- Tile website
                command.runFunction = function (res) {
                    var sTitle = result['content'];

                    var tileAttrs = new lux.Attributes();
                    tileAttrs.save('title', 9 /* STRING */, sTitle);
                    tileAttrs.save('meta', 9 /* STRING */, sTime);

                    feedItem = new feed.FeedItem();
                    feedItem.view.opacity = 0;
                    feedItem.view.mode = new feed.FeedItemViewModeWeb(tileAttrs, res);
                    app.Manager.feedItemRoot.models.add(feedItem, false);
                };
                commands.add(command);
                command = new lux.Command();
                command.runFunction = function (res) {
                    res.complete();
                    feedItem.view.root.animate.run(feedItem.view.fadeTo(1, app.Manager.durationNormal, app.Manager.animEaseDefault, false, function () {
                        feedItem.parentCollection.doViewUpdated(false);
                        res.complete();
                    }));
                };
                commands.add(command);
                break;
            case '4':
                //----- Tile image
                command.runFunction = function (res) {
                    var sImagePath = result['content'];

                    var tileAttrs = new lux.Attributes();
                    tileAttrs.save('imagePath', 9 /* STRING */, sImagePath);
                    tileAttrs.save('meta', 9 /* STRING */, sTime);

                    feedItem = new feed.FeedItemImage(tileAttrs, res);
                    feedItem.view.opacity = 0;
                    app.Manager.feedItemRoot.models.add(feedItem, false);
                };
                commands.add(command);
                command = new lux.Command();
                command.runFunction = function (res) {
                    res.complete();
                    feedItem.view.root.animate.run(feedItem.view.fadeTo(1, app.Manager.durationNormal, app.Manager.animEaseDefault, false, function () {
                        feedItem.parentCollection.doViewUpdated(false);
                        res.complete();
                    }));
                };
                commands.add(command);
                break;
            case '5':
                //----- Tile text
                command.runFunction = function (res) {
                    var sTitle = result['content'];

                    var tileAttrs = new lux.Attributes();
                    tileAttrs.save('title', 9 /* STRING */, sTitle);
                    tileAttrs.save('meta', 9 /* STRING */, sTime);

                    feedItem = new feed.FeedItem();
                    feedItem.view.opacity = 0;
                    feedItem.view.mode = new feed.FeedItemViewModeText(tileAttrs, res);
                    app.Manager.feedItemRoot.models.add(feedItem, false);
                };
                commands.add(command);
                command = new lux.Command();
                command.runFunction = function (res) {
                    res.complete();
                    feedItem.view.root.animate.run(feedItem.view.fadeTo(1, app.Manager.durationNormal, app.Manager.animEaseDefault, false, function () {
                        feedItem.parentCollection.doViewUpdated(false);
                        res.complete();
                    }));
                };
                commands.add(command);
                break;
        }
        //commands.add(command);
    });

    commands.runAll();
}

/**
* Method to calculate the size of the content
* and return back the object which contains the width and the height of the content
* @param {Object} model - html string or dom element
* @return {object} width/height of content
*/
function calculateContentSize(model) {
    var realWidth, realHeight;
    var tmpDiv;
    var previousDisplay;

    tmpDiv = document.createElement('div');
    tmpDiv.style.visibility = 'hidden';

    //----- dom object
    if (typeof model == 'object' && model != null) {
        var parentModel = model.parentModel;
        previousDisplay = model.style.display;

        //----- must set model to inline
        model.style.display = 'inline';
        tmpDiv.appendChild(model);

        //----- must set model container to inline too
        tmpDiv.style.display = 'inline';
        document.body.appendChild(tmpDiv);
        realWidth = tmpDiv.offsetWidth;
        realHeight = tmpDiv.offsetHeight;
        model.style.display = previousDisplay;
        document.body.removeChild(tmpDiv);
        if (typeof parentModel == 'object' && parentModel != null) {
            parentModel.appendChild(model);
        }
    } else if (typeof model == 'string' && model != '') {
        previousDisplay = tmpDiv.style.display;
        tmpDiv.innerHTML = model;
        tmpDiv.style.display = 'inline';
        document.body.appendChild(tmpDiv);
        realWidth = tmpDiv.offsetWidth;
        realHeight = tmpDiv.offsetHeight;
        tmpDiv.style.display = previousDisplay;
        document.body.removeChild(tmpDiv);
    } else {
        realWidth = 0;
        realHeight = 0;
    }

    return { width: realWidth, height: realHeight };
}

function calculateHeight(strHtml, width) {
    var realHeight;
    var tmpDiv;

    tmpDiv = document.createElement('div');
    tmpDiv.style.visibility = 'hidden';
    tmpDiv.style.position = 'absolute';
    tmpDiv.style.display = 'block';
    if (width !== undefined)
        tmpDiv.style.width = width + 'px';

    tmpDiv.innerHTML = strHtml;
    document.body.appendChild(tmpDiv);
    realHeight = tmpDiv.offsetHeight;
    document.body.removeChild(tmpDiv);

    return realHeight;
}

function autoEllipseText(text, width, height, className) {
    var tmpDiv;
    var returnText = text;

    tmpDiv = document.createElement('span');
    tmpDiv.style.maxWidth = 'none';
    tmpDiv.style.maxHeight = 'none';
    tmpDiv.style.visibility = 'hidden';
    tmpDiv.style.position = 'absolute';
    tmpDiv.style.display = 'block';
    tmpDiv.style.width = width + 'px';
    tmpDiv.className = className;
    document.body.appendChild(tmpDiv);

    var i = 1;
    tmpDiv.innerHTML = text;

    //console.log('height: ' + tmpDiv.offsetHeight);
    if (tmpDiv.offsetHeight > height) {
        tmpDiv.innerHTML = '';

        while (tmpDiv.offsetHeight < height && i < text.length) {
            tmpDiv.innerHTML = text.substr(0, i) + '...';
            i++;
        }

        returnText = tmpDiv.innerHTML;
    }

    document.body.removeChild(tmpDiv);

    return returnText;
}
var lux;
(function (lux) {
    var CssUtil = (function () {
        function CssUtil() {
        }
        //----- Example:
        //----- CssUtil.setStyle('.mycssclass', 'display: none');
        CssUtil.setStyle = function (selector, style) {
            if (!document.styleSheets)
                return;
            if (document.getElementsByTagName('head').length == 0)
                return;

            var styleSheet;
            var mediaType;
            var styleSheetLength;

            //----- First, see if we already have a style element in the document.
            //----- If so, use it.
            if (document.styleSheets.length > 0) {
                for (var i = 0; i < document.styleSheets.length; i++) {
                    if (document.styleSheets[i].disabled)
                        continue;
                    var media = document.styleSheets[i].media;
                    mediaType = typeof media;

                    if (mediaType === 'string' || mediaType === 'object') {
                        if (media.mediaText === '' || (media.mediaText.indexOf('screen') !== -1)) {
                            styleSheet = document.styleSheets[i];
                        }
                    }

                    if (typeof styleSheet !== 'undefined')
                        break;
                }
            }

            //----- There's no style element in the document, so create one.
            if (typeof styleSheet === 'undefined') {
                var styleSheetElement = document.createElement('style');
                styleSheetElement.type = 'text/css';

                document.getElementsByTagName('head')[0].appendChild(styleSheetElement);

                for (i = 0; i < document.styleSheets.length; i++) {
                    if (document.styleSheets[i].disabled)
                        continue;
                    styleSheet = document.styleSheets[i];
                    styleSheetLength = styleSheet.cssRules ? styleSheet.cssRules.length : 0;
                }

                var media = styleSheet.media;
                mediaType = typeof media;
            }

            //----- If the selector doesn't exist, create it and add the style rule to it.
            //----- Otherwise, if the rule exists change it and if it doesn't create it.
            if (mediaType === 'string') {
                for (i = 0; i < styleSheet.rules.length; i++) {
                    if (styleSheet.rules[i].selectorText && styleSheet.rules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
                        styleSheet.rules[i].style.cssText = style;
                        return;
                    }
                }

                styleSheet.addRule(selector, style);
            } else if (mediaType === 'object') {
                for (i = 0; i < styleSheet.cssRules.length; i++) {
                    if (styleSheet.cssRules[i].selectorText && styleSheet.cssRules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
                        styleSheet.cssRules[i].style.cssText = style;
                        return;
                    }
                }

                styleSheet.insertRule(selector + '{' + style + '}', styleSheet.cssRules.length);
            }
        };
        return CssUtil;
    })();
    lux.CssUtil = CssUtil;
})(lux || (lux = {}));
