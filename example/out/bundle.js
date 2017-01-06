/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var proto = __webpack_require__(1);
	var Array_msg = proto.js.Array;

	var tt = new Array_msg({values: ['1','2','3']});
	console.log(tt.values);

	//pb encode
	var buffer = Array_msg.encode(tt).finish();
	console.log(buffer);

	//pb decode
	var ret = Array_msg.decode(buffer).values;
	console.log(ret);

	// var buffer = protobuf.Writer.create(tt).finish();
	//
	// console.log(buffer);
	//
	// //解析为二进制
	// //var buffer = tt.encode();
	//
	// //反解为数据
	// var reader = protobuf.Reader.create(buffer);
	// console.log(reader);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*undefined*/
	"use strict";

	var $protobuf = __webpack_require__(2);

	// Lazily resolved type references
	var $lazyTypes = [];

	// Exported root namespace
	var $root = {};

	$root.js = (function() {

	    /**
	     * Namespace js.
	     * @exports js
	     * @namespace
	     */
	    var js = {};

	    js.Array = (function() {

	        /**
	         * Constructs a new Array.
	         * @exports js.Array
	         * @constructor
	         * @param {Object} [properties] Properties to set
	         */
	        function Array(properties) {
	            if (properties) {
	                var keys = Object.keys(properties);
	                for (var i = 0; i < keys.length; ++i)
	                    this[keys[i]] = properties[keys[i]];
	            }
	        }

	        /** @alias js.Array.prototype */
	        var $prototype = Array.prototype;

	        /**
	         * Array values.
	         * @type {Array.<string>}
	         */
	        $prototype.values = $protobuf.util.emptyArray;

	        /**
	         * Encodes the specified Array message.
	         * @function
	         * @param {js.Array|Object} message Array message or plain object to encode
	         * @param {$protobuf.Writer} [writer] Writer to encode to
	         * @returns {$protobuf.Writer} Writer
	         */
	        Array.encode = (function(Writer) { return function encode(m, w) {
	            if(!w)
	                w=Writer.create()
	            if(m["values"]){
	                for(var i=0;i<m["values"].length;++i)
	                    w.uint32(10).string(m["values"][i])
	            }
	            return w
	        };})($protobuf.Writer);

	        /**
	         * Encodes the specified Array message, length delimited.
	         * @param {js.Array|Object} message Array message or plain object to encode
	         * @param {$protobuf.Writer} [writer] Writer to encode to
	         * @returns {$protobuf.Writer} Writer
	         */
	        Array.encodeDelimited = function encodeDelimited(message, writer) {
	            return this.encode(message, writer).ldelim();
	        };

	        /**
	         * Decodes an Array message from the specified reader or buffer.
	         * @function
	         * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
	         * @param {number} [length] Message length if known beforehand
	         * @returns {js.Array} Array
	         */
	        Array.decode = (function(Reader) { return function decode(r, l) {
	            if(!(r instanceof Reader))
	                r=Reader.create(r)
	            var c=l===undefined?r.len:r.pos+l,m=new $root.js.Array
	            while(r.pos<c){
	                var t=r.uint32()
	                switch(t>>>3){
	                    case 1:
	                        if(!(m["values"]&&m["values"].length))
	                            m["values"]=[]
	                        m["values"].push(r.string())
	                        break
	                    default:
	                        r.skipType(t&7)
	                        break
	                }
	            }
	            return m
	        };})($protobuf.Reader);

	        /**
	         * Decodes an Array message from the specified reader or buffer, length delimited.
	         * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
	         * @returns {js.Array} Array
	         */
	        Array.decodeDelimited = function decodeDelimited(readerOrBuffer) {
	            readerOrBuffer = readerOrBuffer instanceof $protobuf.Reader ? readerOrBuffer : $protobuf.Reader(readerOrBuffer);
	            return this.decode(readerOrBuffer, readerOrBuffer.uint32());
	        };

	        return Array;
	    })();

	    js.Value = (function() {

	        /**
	         * Constructs a new Value.
	         * @exports js.Value
	         * @constructor
	         * @param {Object} [properties] Properties to set
	         */
	        function Value(properties) {
	            if (properties) {
	                var keys = Object.keys(properties);
	                for (var i = 0; i < keys.length; ++i)
	                    this[keys[i]] = properties[keys[i]];
	            }
	        }

	        /** @alias js.Value.prototype */
	        var $prototype = Value.prototype;

	        /**
	         * Value integer.
	         * @type {number|$protobuf.Long}
	         */
	        $prototype.integer = $protobuf.util.emptyObject;

	        /**
	         * Value double.
	         * @type {number}
	         */
	        $prototype.double = 0;

	        /**
	         * Value string.
	         * @type {string}
	         */
	        $prototype.string = "";

	        /**
	         * Value boolean.
	         * @type {boolean}
	         */
	        $prototype.boolean = false;

	        /**
	         * Value null.
	         * @name js.Value#null
	         * @type {boolean}
	         */
	        $prototype["null"] = false;

	        /**
	         * Value array.
	         * @type {js.Array}
	         */
	        $prototype.array = null;

	        /**
	         * Value object.
	         * @type {js.Object}
	         */
	        $prototype.object = null;

	        /**
	         * Value person.
	         * @type {Person}
	         */
	        $prototype.person = null;

	        /**
	         * Value type.
	         * @name js.Value#type
	         * @type {string|undefined}
	         */
	        Object.defineProperty($prototype, "type", {
	            get: function() {
	                if (this["integer"] !== undefined)
	                    return "integer";
	                if (this["double"] !== undefined)
	                    return "double";
	                if (this["string"] !== undefined)
	                    return "string";
	                if (this["boolean"] !== undefined)
	                    return "boolean";
	                if (this["null"] !== undefined)
	                    return "null";
	                if (this["array"] !== undefined)
	                    return "array";
	                if (this["object"] !== undefined)
	                    return "object";
	                if (this["person"] !== undefined)
	                    return "person";
	                return undefined;
	            },
	            set: function(value) {
	                if (value !== "integer")
	                    delete this["integer"];
	                if (value !== "double")
	                    delete this["double"];
	                if (value !== "string")
	                    delete this["string"];
	                if (value !== "boolean")
	                    delete this["boolean"];
	                if (value !== "null")
	                    delete this["null"];
	                if (value !== "array")
	                    delete this["array"];
	                if (value !== "object")
	                    delete this["object"];
	                if (value !== "person")
	                    delete this["person"];
	            }
	        });

	        // Referenced types
	        var $types = [null, null, null, null, null, "js.Array", "js.Object", "Person"]; $lazyTypes.push($types);

	        /**
	         * Encodes the specified Value message.
	         * @function
	         * @param {js.Value|Object} message Value message or plain object to encode
	         * @param {$protobuf.Writer} [writer] Writer to encode to
	         * @returns {$protobuf.Writer} Writer
	         */
	        Value.encode = (function(Writer, types) { return function encode(m, w) {
	            if(!w)
	                w=Writer.create()
	            switch(m["type"]){
	                case"integer":
	                    w.uint32(8).uint64(m["integer"])
	                    break
	                case"double":
	                    w.uint32(17).double(m["double"])
	                    break
	                case"string":
	                    w.uint32(26).string(m["string"])
	                    break
	                case"boolean":
	                    w.uint32(32).bool(m["boolean"])
	                    break
	                case"null":
	                    w.uint32(40).bool(m["null"])
	                    break
	                case"array":
	                    types[5].encode(m["array"],w.uint32(50).fork()).ldelim()
	                    break
	                case"object":
	                    types[6].encode(m["object"],w.uint32(58).fork()).ldelim()
	                    break
	                case"person":
	                    types[7].encode(m["person"],w.uint32(66).fork()).ldelim()
	                    break
	            }
	            return w
	        };})($protobuf.Writer, $types);

	        /**
	         * Encodes the specified Value message, length delimited.
	         * @param {js.Value|Object} message Value message or plain object to encode
	         * @param {$protobuf.Writer} [writer] Writer to encode to
	         * @returns {$protobuf.Writer} Writer
	         */
	        Value.encodeDelimited = function encodeDelimited(message, writer) {
	            return this.encode(message, writer).ldelim();
	        };

	        /**
	         * Decodes a Value message from the specified reader or buffer.
	         * @function
	         * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
	         * @param {number} [length] Message length if known beforehand
	         * @returns {js.Value} Value
	         */
	        Value.decode = (function(Reader, types) { return function decode(r, l) {
	            if(!(r instanceof Reader))
	                r=Reader.create(r)
	            var c=l===undefined?r.len:r.pos+l,m=new $root.js.Value
	            while(r.pos<c){
	                var t=r.uint32()
	                switch(t>>>3){
	                    case 1:
	                        m["integer"]=r.uint64()
	                        break
	                    case 2:
	                        m["double"]=r.double()
	                        break
	                    case 3:
	                        m["string"]=r.string()
	                        break
	                    case 4:
	                        m["boolean"]=r.bool()
	                        break
	                    case 5:
	                        m["null"]=r.bool()
	                        break
	                    case 6:
	                        m["array"]=types[5].decode(r,r.uint32())
	                        break
	                    case 7:
	                        m["object"]=types[6].decode(r,r.uint32())
	                        break
	                    case 8:
	                        m["person"]=types[7].decode(r,r.uint32())
	                        break
	                    default:
	                        r.skipType(t&7)
	                        break
	                }
	            }
	            return m
	        };})($protobuf.Reader, $types);

	        /**
	         * Decodes a Value message from the specified reader or buffer, length delimited.
	         * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
	         * @returns {js.Value} Value
	         */
	        Value.decodeDelimited = function decodeDelimited(readerOrBuffer) {
	            readerOrBuffer = readerOrBuffer instanceof $protobuf.Reader ? readerOrBuffer : $protobuf.Reader(readerOrBuffer);
	            return this.decode(readerOrBuffer, readerOrBuffer.uint32());
	        };

	        return Value;
	    })();

	    js.Object = (function() {

	        /**
	         * Constructs a new Object.
	         * @exports js.Object
	         * @constructor
	         * @param {Object} [properties] Properties to set
	         */
	        function Object(properties) {
	            if (properties) {
	                var keys = Object.keys(properties);
	                for (var i = 0; i < keys.length; ++i)
	                    this[keys[i]] = properties[keys[i]];
	            }
	        }

	        /** @alias js.Object.prototype */
	        var $prototype = Object.prototype;

	        /**
	         * Object keys.
	         * @type {Array.<js.Value>}
	         */
	        $prototype.keys = $protobuf.util.emptyArray;

	        /**
	         * Object values.
	         * @type {Array.<js.Value>}
	         */
	        $prototype.values = $protobuf.util.emptyArray;

	        // Referenced types
	        var $types = ["js.Value", "js.Value"]; $lazyTypes.push($types);

	        /**
	         * Encodes the specified Object message.
	         * @function
	         * @param {js.Object|Object} message Object message or plain object to encode
	         * @param {$protobuf.Writer} [writer] Writer to encode to
	         * @returns {$protobuf.Writer} Writer
	         */
	        Object.encode = (function(Writer, types) { return function encode(m, w) {
	            if(!w)
	                w=Writer.create()
	            if(m["keys"]){
	                for(var i=0;i<m["keys"].length;++i)
	                    types[0].encode(m["keys"][i],w.uint32(10).fork()).ldelim()
	            }
	            if(m["values"]){
	                for(var i=0;i<m["values"].length;++i)
	                    types[1].encode(m["values"][i],w.uint32(18).fork()).ldelim()
	            }
	            return w
	        };})($protobuf.Writer, $types);

	        /**
	         * Encodes the specified Object message, length delimited.
	         * @param {js.Object|Object} message Object message or plain object to encode
	         * @param {$protobuf.Writer} [writer] Writer to encode to
	         * @returns {$protobuf.Writer} Writer
	         */
	        Object.encodeDelimited = function encodeDelimited(message, writer) {
	            return this.encode(message, writer).ldelim();
	        };

	        /**
	         * Decodes an Object message from the specified reader or buffer.
	         * @function
	         * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
	         * @param {number} [length] Message length if known beforehand
	         * @returns {js.Object} Object
	         */
	        Object.decode = (function(Reader, types) { return function decode(r, l) {
	            if(!(r instanceof Reader))
	                r=Reader.create(r)
	            var c=l===undefined?r.len:r.pos+l,m=new $root.js.Object
	            while(r.pos<c){
	                var t=r.uint32()
	                switch(t>>>3){
	                    case 1:
	                        if(!(m["keys"]&&m["keys"].length))
	                            m["keys"]=[]
	                        m["keys"].push(types[0].decode(r,r.uint32()))
	                        break
	                    case 2:
	                        if(!(m["values"]&&m["values"].length))
	                            m["values"]=[]
	                        m["values"].push(types[1].decode(r,r.uint32()))
	                        break
	                    default:
	                        r.skipType(t&7)
	                        break
	                }
	            }
	            return m
	        };})($protobuf.Reader, $types);

	        /**
	         * Decodes an Object message from the specified reader or buffer, length delimited.
	         * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
	         * @returns {js.Object} Object
	         */
	        Object.decodeDelimited = function decodeDelimited(readerOrBuffer) {
	            readerOrBuffer = readerOrBuffer instanceof $protobuf.Reader ? readerOrBuffer : $protobuf.Reader(readerOrBuffer);
	            return this.decode(readerOrBuffer, readerOrBuffer.uint32());
	        };

	        return Object;
	    })();

	    return js;
	})();

	$root.Person = (function() {

	    /**
	     * Constructs a new Person.
	     * @exports Person
	     * @constructor
	     * @param {Object} [properties] Properties to set
	     */
	    function Person(properties) {
	        if (properties) {
	            var keys = Object.keys(properties);
	            for (var i = 0; i < keys.length; ++i)
	                this[keys[i]] = properties[keys[i]];
	        }
	    }

	    /** @alias Person.prototype */
	    var $prototype = Person.prototype;

	    /**
	     * Person firstName.
	     * @type {string}
	     */
	    $prototype.firstName = "";

	    /**
	     * Person lastName.
	     * @type {string}
	     */
	    $prototype.lastName = "";

	    /**
	     * Encodes the specified Person message.
	     * @function
	     * @param {Person|Object} message Person message or plain object to encode
	     * @param {$protobuf.Writer} [writer] Writer to encode to
	     * @returns {$protobuf.Writer} Writer
	     */
	    Person.encode = (function(Writer) { return function encode(m, w) {
	        if(!w)
	            w=Writer.create()
	        if(m["firstName"]!==undefined&&m["firstName"]!=="")
	            w.uint32(10).string(m["firstName"])
	        if(m["lastName"]!==undefined&&m["lastName"]!=="")
	            w.uint32(18).string(m["lastName"])
	        return w
	    };})($protobuf.Writer);

	    /**
	     * Encodes the specified Person message, length delimited.
	     * @param {Person|Object} message Person message or plain object to encode
	     * @param {$protobuf.Writer} [writer] Writer to encode to
	     * @returns {$protobuf.Writer} Writer
	     */
	    Person.encodeDelimited = function encodeDelimited(message, writer) {
	        return this.encode(message, writer).ldelim();
	    };

	    /**
	     * Decodes a Person message from the specified reader or buffer.
	     * @function
	     * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
	     * @param {number} [length] Message length if known beforehand
	     * @returns {Person} Person
	     */
	    Person.decode = (function(Reader) { return function decode(r, l) {
	        if(!(r instanceof Reader))
	            r=Reader.create(r)
	        var c=l===undefined?r.len:r.pos+l,m=new $root.Person
	        while(r.pos<c){
	            var t=r.uint32()
	            switch(t>>>3){
	                case 1:
	                    m["firstName"]=r.string()
	                    break
	                case 2:
	                    m["lastName"]=r.string()
	                    break
	                default:
	                    r.skipType(t&7)
	                    break
	            }
	        }
	        return m
	    };})($protobuf.Reader);

	    /**
	     * Decodes a Person message from the specified reader or buffer, length delimited.
	     * @param {$protobuf.Reader|Uint8Array} readerOrBuffer Reader or buffer to decode from
	     * @returns {Person} Person
	     */
	    Person.decodeDelimited = function decodeDelimited(readerOrBuffer) {
	        readerOrBuffer = readerOrBuffer instanceof $protobuf.Reader ? readerOrBuffer : $protobuf.Reader(readerOrBuffer);
	        return this.decode(readerOrBuffer, readerOrBuffer.uint32());
	    };

	    return Person;
	})();

	// Resolve lazy types
	$lazyTypes.forEach(function(types) {
	    types.forEach(function(path, i) {
	        if (!path)
	            return;
	        path = path.split(".");
	        var ptr = $root;
	        while (path.length)
	            ptr = ptr[path.shift()];
	        types[i] = ptr;
	    });
	});

	$protobuf.roots["default"] = $root;

	module.exports = $root;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {// This file exports just the bare minimum required to work with statically generated code.
	// Can be used as a drop-in replacement for the full library as it has the same general structure.
	"use strict";
	var protobuf = global.protobuf = exports;

	protobuf.Writer       = __webpack_require__(3);
	protobuf.BufferWriter = __webpack_require__(10);
	protobuf.Reader       = __webpack_require__(11);
	protobuf.BufferReader = __webpack_require__(12);
	protobuf.converters   = __webpack_require__(13);
	protobuf.util         = __webpack_require__(4);
	protobuf.roots        = {};
	protobuf.configure    = configure;

	function configure() {
	    protobuf.Reader._configure();
	}

	// Be nice to AMD
	if (true)
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = function(Long) {
	        if (Long) {
	            protobuf.util.Long = Long;
	            configure();
	        }
	        return protobuf;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = Writer;

	var util      = __webpack_require__(4);

	var BufferWriter; // cyclic

	var LongBits  = util.LongBits,
	    base64    = util.base64,
	    utf8      = util.utf8;

	/**
	 * Constructs a new writer operation instance.
	 * @classdesc Scheduled writer operation.
	 * @memberof Writer
	 * @constructor
	 * @param {function(*, Uint8Array, number)} fn Function to call
	 * @param {number} len Value byte length
	 * @param {*} val Value to write
	 * @private
	 * @ignore
	 */
	function Op(fn, len, val) {

	    /**
	     * Function to call.
	     * @type {function(Uint8Array, number, *)}
	     */
	    this.fn = fn;

	    /**
	     * Value byte length.
	     * @type {number}
	     */
	    this.len = len;

	    /**
	     * Next operation.
	     * @type {Writer.Op|undefined}
	     */
	    this.next = undefined;

	    /**
	     * Value to write.
	     * @type {*}
	     */
	    this.val = val; // type varies
	}

	/* istanbul ignore next */
	function noop() {} // eslint-disable-line no-empty-function

	/**
	 * Constructs a new writer state instance.
	 * @classdesc Copied writer state.
	 * @memberof Writer
	 * @constructor
	 * @param {Writer} writer Writer to copy state from
	 * @private
	 * @ignore
	 */
	function State(writer) {

	    /**
	     * Current head.
	     * @type {Writer.Op}
	     */
	    this.head = writer.head;

	    /**
	     * Current tail.
	     * @type {Writer.Op}
	     */
	    this.tail = writer.tail;

	    /**
	     * Current buffer length.
	     * @type {number}
	     */
	    this.len = writer.len;

	    /**
	     * Next state.
	     * @type {?State}
	     */
	    this.next = writer.states;
	}

	/**
	 * Constructs a new writer instance.
	 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
	 * @constructor
	 */
	function Writer() {

	    /**
	     * Current length.
	     * @type {number}
	     */
	    this.len = 0;

	    /**
	     * Operations head.
	     * @type {Object}
	     */
	    this.head = new Op(noop, 0, 0);

	    /**
	     * Operations tail
	     * @type {Object}
	     */
	    this.tail = this.head;

	    /**
	     * Linked forked states.
	     * @type {?Object}
	     */
	    this.states = null;

	    // When a value is written, the writer calculates its byte length and puts it into a linked
	    // list of operations to perform when finish() is called. This both allows us to allocate
	    // buffers of the exact required size and reduces the amount of work we have to do compared
	    // to first calculating over objects and then encoding over objects. In our case, the encoding
	    // part is just a linked list walk calling linked operations with already prepared values.
	}

	/**
	 * Creates a new writer.
	 * @function
	 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
	 */
	Writer.create = util.Buffer
	    ? function create_buffer_setup() {
	        if (!BufferWriter)
	            BufferWriter = __webpack_require__(10);
	        return (Writer.create = function create_buffer() {
	            return new BufferWriter();
	        })();
	    }
	    /* istanbul ignore next */
	    : function create_array() {
	        return new Writer();
	    };

	/**
	 * Allocates a buffer of the specified size.
	 * @param {number} size Buffer size
	 * @returns {Uint8Array} Buffer
	 */
	Writer.alloc = function alloc(size) {
	    return new util.Array(size);
	};

	// Use Uint8Array buffer pool in the browser, just like node does with buffers
	if (util.Array !== Array)
	    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

	/** @alias Writer.prototype */
	var WriterPrototype = Writer.prototype;

	/**
	 * Pushes a new operation to the queue.
	 * @param {function(Uint8Array, number, *)} fn Function to call
	 * @param {number} len Value byte length
	 * @param {number} val Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.push = function push(fn, len, val) {
	    this.tail = this.tail.next = new Op(fn, len, val);
	    this.len += len;
	    return this;
	};

	function writeByte(val, buf, pos) {
	    buf[pos] = val & 255;
	}

	function writeVarint32(val, buf, pos) {
	    while (val > 127) {
	        buf[pos++] = val & 127 | 128;
	        val >>>= 7;
	    }
	    buf[pos] = val;
	}

	/**
	 * Writes an unsigned 32 bit value as a varint.
	 * @param {number} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.uint32 = function write_uint32(value) {
	    value = value >>> 0;
	    return this.push(writeVarint32,
	          value < 128       ? 1
	        : value < 16384     ? 2
	        : value < 2097152   ? 3
	        : value < 268435456 ? 4
	        :                     5
	    , value);
	};

	/**
	 * Writes a signed 32 bit value as a varint.
	 * @function
	 * @param {number} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.int32 = function write_int32(value) {
	    return value < 0
	        ? this.push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
	        : this.uint32(value);
	};

	/**
	 * Writes a 32 bit value as a varint, zig-zag encoded.
	 * @param {number} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.sint32 = function write_sint32(value) {
	    return this.uint32((value << 1 ^ value >> 31) >>> 0);
	};

	function writeVarint64(val, buf, pos) {
	    while (val.hi) {
	        buf[pos++] = val.lo & 127 | 128;
	        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
	        val.hi >>>= 7;
	    }
	    while (val.lo > 127) {
	        buf[pos++] = val.lo & 127 | 128;
	        val.lo = val.lo >>> 7;
	    }
	    buf[pos++] = val.lo;
	}

	/**
	 * Writes an unsigned 64 bit value as a varint.
	 * @param {Long|number|string} value Value to write
	 * @returns {Writer} `this`
	 * @throws {TypeError} If `value` is a string and no long library is present.
	 */
	WriterPrototype.uint64 = function write_uint64(value) {
	    var bits = LongBits.from(value);
	    return this.push(writeVarint64, bits.length(), bits);
	};

	/**
	 * Writes a signed 64 bit value as a varint.
	 * @function
	 * @param {Long|number|string} value Value to write
	 * @returns {Writer} `this`
	 * @throws {TypeError} If `value` is a string and no long library is present.
	 */
	WriterPrototype.int64 = WriterPrototype.uint64;

	/**
	 * Writes a signed 64 bit value as a varint, zig-zag encoded.
	 * @param {Long|number|string} value Value to write
	 * @returns {Writer} `this`
	 * @throws {TypeError} If `value` is a string and no long library is present.
	 */
	WriterPrototype.sint64 = function write_sint64(value) {
	    var bits = LongBits.from(value).zzEncode();
	    return this.push(writeVarint64, bits.length(), bits);
	};

	/**
	 * Writes a boolish value as a varint.
	 * @param {boolean} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.bool = function write_bool(value) {
	    return this.push(writeByte, 1, value ? 1 : 0);
	};

	function writeFixed32(val, buf, pos) {
	    buf[pos++] =  val         & 255;
	    buf[pos++] =  val >>> 8   & 255;
	    buf[pos++] =  val >>> 16  & 255;
	    buf[pos  ] =  val >>> 24;
	}

	/**
	 * Writes a 32 bit value as fixed 32 bits.
	 * @param {number} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.fixed32 = function write_fixed32(value) {
	    return this.push(writeFixed32, 4, value >>> 0);
	};

	/**
	 * Writes a 32 bit value as fixed 32 bits, zig-zag encoded.
	 * @param {number} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.sfixed32 = function write_sfixed32(value) {
	    return this.push(writeFixed32, 4, value << 1 ^ value >> 31);
	};

	/**
	 * Writes a 64 bit value as fixed 64 bits.
	 * @param {Long|number|string} value Value to write
	 * @returns {Writer} `this`
	 * @throws {TypeError} If `value` is a string and no long library is present.
	 */
	WriterPrototype.fixed64 = function write_fixed64(value) {
	    var bits = LongBits.from(value);
	    return this.push(writeFixed32, 4, bits.lo).push(writeFixed32, 4, bits.hi);
	};

	/**
	 * Writes a 64 bit value as fixed 64 bits, zig-zag encoded.
	 * @param {Long|number|string} value Value to write
	 * @returns {Writer} `this`
	 * @throws {TypeError} If `value` is a string and no long library is present.
	 */
	WriterPrototype.sfixed64 = function write_sfixed64(value) {
	    var bits = LongBits.from(value).zzEncode();
	    return this.push(writeFixed32, 4, bits.lo).push(writeFixed32, 4, bits.hi);
	};

	var writeFloat = typeof Float32Array !== "undefined"
	    ? (function() {
	        var f32 = new Float32Array(1),
	            f8b = new Uint8Array(f32.buffer);
	        f32[0] = -0;
	        return f8b[3] // already le?
	            ? function writeFloat_f32(val, buf, pos) {
	                f32[0] = val;
	                buf[pos++] = f8b[0];
	                buf[pos++] = f8b[1];
	                buf[pos++] = f8b[2];
	                buf[pos  ] = f8b[3];
	            }
	            /* istanbul ignore next */
	            : function writeFloat_f32_le(val, buf, pos) {
	                f32[0] = val;
	                buf[pos++] = f8b[3];
	                buf[pos++] = f8b[2];
	                buf[pos++] = f8b[1];
	                buf[pos  ] = f8b[0];
	            };
	    })()
	    /* istanbul ignore next */
	    : function writeFloat_ieee754(value, buf, pos) {
	        var sign = value < 0 ? 1 : 0;
	        if (sign)
	            value = -value;
	        if (value === 0)
	            writeFixed32(1 / value > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
	        else if (isNaN(value))
	            writeFixed32(2147483647, buf, pos);
	        else if (value > 3.4028234663852886e+38) // +-Infinity
	            writeFixed32((sign << 31 | 2139095040) >>> 0, buf, pos);
	        else if (value < 1.1754943508222875e-38) // denormal
	            writeFixed32((sign << 31 | Math.round(value / 1.401298464324817e-45)) >>> 0, buf, pos);
	        else {
	            var exponent = Math.floor(Math.log(value) / Math.LN2),
	                mantissa = Math.round(value * Math.pow(2, -exponent) * 8388608) & 8388607;
	            writeFixed32((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
	        }
	    };

	/**
	 * Writes a float (32 bit).
	 * @function
	 * @param {number} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.float = function write_float(value) {
	    return this.push(writeFloat, 4, value);
	};

	var writeDouble = typeof Float64Array !== "undefined"
	    ? (function() {
	        var f64 = new Float64Array(1),
	            f8b = new Uint8Array(f64.buffer);
	        f64[0] = -0;
	        return f8b[7] // already le?
	            ? function writeDouble_f64(val, buf, pos) {
	                f64[0] = val;
	                buf[pos++] = f8b[0];
	                buf[pos++] = f8b[1];
	                buf[pos++] = f8b[2];
	                buf[pos++] = f8b[3];
	                buf[pos++] = f8b[4];
	                buf[pos++] = f8b[5];
	                buf[pos++] = f8b[6];
	                buf[pos  ] = f8b[7];
	            }
	            /* istanbul ignore next */
	            : function writeDouble_f64_le(val, buf, pos) {
	                f64[0] = val;
	                buf[pos++] = f8b[7];
	                buf[pos++] = f8b[6];
	                buf[pos++] = f8b[5];
	                buf[pos++] = f8b[4];
	                buf[pos++] = f8b[3];
	                buf[pos++] = f8b[2];
	                buf[pos++] = f8b[1];
	                buf[pos  ] = f8b[0];
	            };
	    })()
	    /* istanbul ignore next */
	    : function writeDouble_ieee754(value, buf, pos) {
	        var sign = value < 0 ? 1 : 0;
	        if (sign)
	            value = -value;
	        if (value === 0) {
	            writeFixed32(0, buf, pos);
	            writeFixed32(1 / value > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + 4);
	        } else if (isNaN(value)) {
	            writeFixed32(4294967295, buf, pos);
	            writeFixed32(2147483647, buf, pos + 4);
	        } else if (value > 1.7976931348623157e+308) { // +-Infinity
	            writeFixed32(0, buf, pos);
	            writeFixed32((sign << 31 | 2146435072) >>> 0, buf, pos + 4);
	        } else {
	            var mantissa;
	            if (value < 2.2250738585072014e-308) { // denormal
	                mantissa = value / 5e-324;
	                writeFixed32(mantissa >>> 0, buf, pos);
	                writeFixed32((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + 4);
	            } else {
	                var exponent = Math.floor(Math.log(value) / Math.LN2);
	                if (exponent === 1024)
	                    exponent = 1023;
	                mantissa = value * Math.pow(2, -exponent);
	                writeFixed32(mantissa * 4503599627370496 >>> 0, buf, pos);
	                writeFixed32((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + 4);
	            }
	        }
	    };

	/**
	 * Writes a double (64 bit float).
	 * @function
	 * @param {number} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.double = function write_double(value) {
	    return this.push(writeDouble, 8, value);
	};

	var writeBytes = util.Array.prototype.set
	    ? function writeBytes_set(val, buf, pos) {
	        buf.set(val, pos);
	    }
	    /* istanbul ignore next */
	    : function writeBytes_for(val, buf, pos) {
	        for (var i = 0; i < val.length; ++i)
	            buf[pos + i] = val[i];
	    };

	/**
	 * Writes a sequence of bytes.
	 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.bytes = function write_bytes(value) {
	    var len = value.length >>> 0;
	    if (typeof value === "string" && len) {
	        var buf = Writer.alloc(len = base64.length(value));
	        base64.decode(value, buf, 0);
	        value = buf;
	    }
	    return len
	        ? this.uint32(len).push(writeBytes, len, value)
	        : this.push(writeByte, 1, 0);
	};

	/**
	 * Writes a string.
	 * @param {string} value Value to write
	 * @returns {Writer} `this`
	 */
	WriterPrototype.string = function write_string(value) {
	    var len = utf8.length(value);
	    return len
	        ? this.uint32(len).push(utf8.write, len, value)
	        : this.push(writeByte, 1, 0);
	};

	/**
	 * Forks this writer's state by pushing it to a stack.
	 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
	 * @returns {Writer} `this`
	 */
	WriterPrototype.fork = function fork() {
	    this.states = new State(this);
	    this.head = this.tail = new Op(noop, 0, 0);
	    this.len = 0;
	    return this;
	};

	/**
	 * Resets this instance to the last state.
	 * @returns {Writer} `this`
	 */
	WriterPrototype.reset = function reset() {
	    if (this.states) {
	        this.head   = this.states.head;
	        this.tail   = this.states.tail;
	        this.len    = this.states.len;
	        this.states = this.states.next;
	    } else {
	        this.head = this.tail = new Op(noop, 0, 0);
	        this.len  = 0;
	    }
	    return this;
	};

	/**
	 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
	 * @returns {Writer} `this`
	 */
	WriterPrototype.ldelim = function ldelim() {
	    var head = this.head,
	        tail = this.tail,
	        len  = this.len;
	    this.reset()
	        .uint32(len)
	        .tail.next = head.next; // skip noop
	    this.tail = tail;
	    this.len += len;
	    return this;
	};

	/**
	 * Finishes the write operation.
	 * @returns {Uint8Array} Finished buffer
	 */
	WriterPrototype.finish = function finish() {
	    var head = this.head.next, // skip noop
	        buf  = this.constructor.alloc(this.len),
	        pos  = 0;
	    while (head) {
	        head.fn(head.val, buf, pos);
	        pos += head.len;
	        head = head.next;
	    }
	    // this.head = this.tail = null;
	    return buf;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	var util = exports;

	util.base64   = __webpack_require__(5);
	util.inquire  = __webpack_require__(6);
	util.utf8     = __webpack_require__(7);
	util.pool     = __webpack_require__(8);

	util.LongBits = __webpack_require__(9);

	/**
	 * Whether running within node or not.
	 * @memberof util
	 * @type {boolean}
	 */
	util.isNode = Boolean(global.process && global.process.versions && global.process.versions.node);

	/**
	 * Node's Buffer class if available.
	 * @type {?function(new: Buffer)}
	 */
	util.Buffer = (function() {
	    try {
	        var Buffer = util.inquire("buffer").Buffer;

	        /* istanbul ignore next */
	        if (!Buffer.prototype.utf8Write) // refuse to use non-node buffers (performance)
	            return null;

	        /* istanbul ignore next */
	        if (!Buffer.from)
	            Buffer.from = function from(value, encoding) { return new Buffer(value, encoding); };

	        /* istanbul ignore next */
	        if (!Buffer.allocUnsafe)
	            Buffer.allocUnsafe = function allocUnsafe(size) { return new Buffer(size); };

	        return Buffer;

	    /* istanbul ignore next */
	    } catch (e) {
	        return null;
	    }
	})();

	/**
	 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
	 * @type {?function(new: Uint8Array, *)}
	 */
	util.Array = typeof Uint8Array === "undefined" ? Array : Uint8Array;

	/**
	 * Long.js's Long class if available.
	 * @type {?function(new: Long)}
	 */
	util.Long = global.dcodeIO && global.dcodeIO.Long || util.inquire("long");

	/**
	 * Tests if the specified value is an integer.
	 * @function
	 * @param {*} value Value to test
	 * @returns {boolean} `true` if the value is an integer
	 */
	util.isInteger = Number.isInteger || function isInteger(value) {
	    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
	};

	/**
	 * Tests if the specified value is a string.
	 * @param {*} value Value to test
	 * @returns {boolean} `true` if the value is a string
	 */
	util.isString = function isString(value) {
	    return typeof value === "string" || value instanceof String;
	};

	/**
	 * Tests if the specified value is a non-null object.
	 * @param {*} value Value to test
	 * @returns {boolean} `true` if the value is a non-null object
	 */
	util.isObject = function isObject(value) {
	    return value && typeof value === "object";
	};

	/**
	 * Converts a number or long to an 8 characters long hash string.
	 * @param {Long|number} value Value to convert
	 * @returns {string} Hash
	 */
	util.longToHash = function longToHash(value) {
	    return value
	        ? util.LongBits.from(value).toHash()
	        : util.LongBits.zeroHash;
	};

	/**
	 * Converts an 8 characters long hash string to a long or number.
	 * @param {string} hash Hash
	 * @param {boolean} [unsigned=false] Whether unsigned or not
	 * @returns {Long|number} Original value
	 */
	util.longFromHash = function longFromHash(hash, unsigned) {
	    var bits = util.LongBits.fromHash(hash);
	    if (util.Long)
	        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
	    return bits.toNumber(Boolean(unsigned));
	};

	/**
	 * Tests if a possibily long value equals the specified low and high bits.
	 * @param {number|string|Long} val Value to test
	 * @param {number} lo Low bits to test against
	 * @param {number} hi High bits to test against
	 * @returns {boolean} `true` if not equal
	 */
	util.longNe = function longNe(val, lo, hi) {
	    if (typeof val === "object") // Long-like, null is invalid and throws
	        return val.low !== lo || val.high !== hi;
	    var bits = util.LongBits.from(val);
	    return bits.lo !== lo || bits.hi !== hi;
	};

	/**
	 * An immuable empty array.
	 * @memberof util
	 * @type {Array.<*>}
	 */
	util.emptyArray = Object.freeze ? Object.freeze([]) : [];

	/**
	 * An immutable empty object.
	 * @type {Object}
	 */
	util.emptyObject = Object.freeze ? Object.freeze({}) : {};

	/**
	 * Tests if two arrays are not equal.
	 * @param {Array.<*>} a Array 1
	 * @param {Array.<*>} b Array 2
	 * @returns {boolean} `true` if not equal, otherwise `false`
	 */
	util.arrayNe = function arrayNe(a, b) {
	    if (a.length === b.length)
	        for (var i = 0; i < a.length; ++i)
	            if (a[i] !== b[i])
	                return true;
	    return false;
	};

	/**
	 * Merges the properties of the source object into the destination object.
	 * @param {Object.<string,*>} dst Destination object
	 * @param {Object.<string,*>} src Source object
	 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
	 * @returns {Object.<string,*>} Destination object
	 */
	util.merge = function merge(dst, src, ifNotSet) {
	    if (src) {
	        var keys = Object.keys(src);
	        for (var i = 0; i < keys.length; ++i)
	            if (dst[keys[i]] === undefined || !ifNotSet)
	                dst[keys[i]] = src[keys[i]];
	    }
	    return dst;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * A minimal base64 implementation for number arrays.
	 * @memberof util
	 * @namespace
	 */
	var base64 = exports;

	/**
	 * Calculates the byte length of a base64 encoded string.
	 * @param {string} string Base64 encoded string
	 * @returns {number} Byte length
	 */
	base64.length = function length(string) {
	    var p = string.length;
	    if (!p)
	        return 0;
	    var n = 0;
	    while (--p % 4 > 1 && string.charAt(p) === "=")
	        ++n;
	    return Math.ceil(string.length * 3) / 4 - n;
	};

	// Base64 encoding table
	var b64 = new Array(64);

	// Base64 decoding table
	var s64 = new Array(123);

	// 65..90, 97..122, 48..57, 43, 47
	for (var i = 0; i < 64;)
	    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

	/**
	 * Encodes a buffer to a base64 encoded string.
	 * @param {Uint8Array} buffer Source buffer
	 * @param {number} start Source start
	 * @param {number} end Source end
	 * @returns {string} Base64 encoded string
	 */
	base64.encode = function encode(buffer, start, end) {
	    var string = []; // alt: new Array(Math.ceil((end - start) / 3) * 4);
	    var i = 0, // output index
	        j = 0, // goto index
	        t;     // temporary
	    while (start < end) {
	        var b = buffer[start++];
	        switch (j) {
	            case 0:
	                string[i++] = b64[b >> 2];
	                t = (b & 3) << 4;
	                j = 1;
	                break;
	            case 1:
	                string[i++] = b64[t | b >> 4];
	                t = (b & 15) << 2;
	                j = 2;
	                break;
	            case 2:
	                string[i++] = b64[t | b >> 6];
	                string[i++] = b64[b & 63];
	                j = 0;
	                break;
	        }
	    }
	    if (j) {
	        string[i++] = b64[t];
	        string[i  ] = 61;
	        if (j === 1)
	            string[i + 1] = 61;
	    }
	    return String.fromCharCode.apply(String, string);
	};

	var invalidEncoding = "invalid encoding";

	/**
	 * Decodes a base64 encoded string to a buffer.
	 * @param {string} string Source string
	 * @param {Uint8Array} buffer Destination buffer
	 * @param {number} offset Destination offset
	 * @returns {number} Number of bytes written
	 * @throws {Error} If encoding is invalid
	 */
	base64.decode = function decode(string, buffer, offset) {
	    var start = offset;
	    var j = 0, // goto index
	        t;     // temporary
	    for (var i = 0; i < string.length;) {
	        var c = string.charCodeAt(i++);
	        if (c === 61 && j > 1)
	            break;
	        if ((c = s64[c]) === undefined)
	            throw Error(invalidEncoding);
	        switch (j) {
	            case 0:
	                t = c;
	                j = 1;
	                break;
	            case 1:
	                buffer[offset++] = t << 2 | (c & 48) >> 4;
	                t = c;
	                j = 2;
	                break;
	            case 2:
	                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
	                t = c;
	                j = 3;
	                break;
	            case 3:
	                buffer[offset++] = (t & 3) << 6 | c;
	                j = 0;
	                break;
	        }
	    }
	    if (j === 1)
	        throw Error(invalidEncoding);
	    return offset - start;
	};

	/**
	 * Tests if the specified string appears to be base64 encoded.
	 * @param {string} string String to test
	 * @returns {boolean} `true` if probably base64 encoded, otherwise false
	 */
	base64.test = function test(string) {
	    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	module.exports = inquire;

	/**
	 * Requires a module only if available.
	 * @memberof util
	 * @param {string} moduleName Module to require
	 * @returns {?Object} Required module if available and not empty, otherwise `null`
	 */
	function inquire(moduleName) {
	    try {
	        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
	        if (mod && (mod.length || Object.keys(mod).length))
	            return mod;
	    } catch (e) {} // eslint-disable-line no-empty
	    return null;
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * A minimal UTF8 implementation for number arrays.
	 * @memberof util
	 * @namespace
	 */
	var utf8 = exports;

	/**
	 * Calculates the UTF8 byte length of a string.
	 * @param {string} string String
	 * @returns {number} Byte length
	 */
	utf8.length = function length(string) {
	    var len = 0,
	        c = 0;
	    for (var i = 0; i < string.length; ++i) {
	        c = string.charCodeAt(i);
	        if (c < 128)
	            len += 1;
	        else if (c < 2048)
	            len += 2;
	        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
	            ++i;
	            len += 4;
	        } else
	            len += 3;
	    }
	    return len;
	};

	/**
	 * Reads UTF8 bytes as a string.
	 * @param {Uint8Array} buffer Source buffer
	 * @param {number} start Source start
	 * @param {number} end Source end
	 * @returns {string} String read
	 */
	utf8.read = function(buffer, start, end) {
	    var len = end - start;
	    if (len < 1)
	        return "";
	    var parts = null,
	        chunk = [],
	        i = 0, // char offset
	        t;     // temporary
	    while (start < end) {
	        t = buffer[start++];
	        if (t < 128)
	            chunk[i++] = t;
	        else if (t > 191 && t < 224)
	            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
	        else if (t > 239 && t < 365) {
	            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
	            chunk[i++] = 0xD800 + (t >> 10);
	            chunk[i++] = 0xDC00 + (t & 1023);
	        } else
	            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
	        if (i > 8191) {
	            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
	            i = 0;
	        }
	    }
	    if (parts) {
	        if (i)
	            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
	        return parts.join("");
	    }
	    return i ? String.fromCharCode.apply(String, chunk.slice(0, i)) : "";
	};

	/**
	 * Writes a string as UTF8 bytes.
	 * @param {string} string Source string
	 * @param {Uint8Array} buffer Destination buffer
	 * @param {number} offset Destination offset
	 * @returns {number} Bytes written
	 */
	utf8.write = function(string, buffer, offset) {
	    var start = offset,
	        c1, // character 1
	        c2; // character 2
	    for (var i = 0; i < string.length; ++i) {
	        c1 = string.charCodeAt(i);
	        if (c1 < 128) {
	            buffer[offset++] = c1;
	        } else if (c1 < 2048) {
	            buffer[offset++] = c1 >> 6       | 192;
	            buffer[offset++] = c1       & 63 | 128;
	        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
	            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
	            ++i;
	            buffer[offset++] = c1 >> 18      | 240;
	            buffer[offset++] = c1 >> 12 & 63 | 128;
	            buffer[offset++] = c1 >> 6  & 63 | 128;
	            buffer[offset++] = c1       & 63 | 128;
	        } else {
	            buffer[offset++] = c1 >> 12      | 224;
	            buffer[offset++] = c1 >> 6  & 63 | 128;
	            buffer[offset++] = c1       & 63 | 128;
	        }
	    }
	    return offset - start;
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	module.exports = pool;

	/**
	 * An allocator as used by {@link util.pool}.
	 * @typedef PoolAllocator
	 * @type {function}
	 * @param {number} size Buffer size
	 * @returns {Uint8Array} Buffer
	 */

	/**
	 * A slicer as used by {@link util.pool}.
	 * @typedef PoolSlicer
	 * @type {function}
	 * @param {number} start Start offset
	 * @param {number} end End offset
	 * @returns {Uint8Array} Buffer slice
	 * @this {Uint8Array}
	 */

	/**
	 * A general purpose buffer pool.
	 * @memberof util
	 * @function
	 * @param {PoolAllocator} alloc Allocator
	 * @param {PoolSlicer} slice Slicer
	 * @param {number} [size=8192] Slab size
	 * @returns {PoolAllocator} Pooled allocator
	 */
	function pool(alloc, slice, size) {
	    var SIZE   = size || 8192;
	    var MAX    = SIZE >>> 1;
	    var slab   = null;
	    var offset = SIZE;
	    return function pool_alloc(size) {
	        if (size < 1 || size > MAX)
	            return alloc(size);
	        if (offset + size > SIZE) {
	            slab = alloc(SIZE);
	            offset = 0;
	        }
	        var buf = slice.call(slab, offset, offset += size);
	        if (offset & 7) // align to 32 bit
	            offset = (offset | 7) + 1;
	        return buf;
	    };
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = LongBits;

	var util = __webpack_require__(4);

	/**
	 * Any compatible Long instance.
	 * @typedef Long
	 * @type {Object}
	 * @property {number} low Low bits
	 * @property {number} high High bits
	 * @property {boolean} unsigned Whether unsigned or not
	 */

	/**
	 * Constructs new long bits.
	 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
	 * @memberof util
	 * @constructor
	 * @param {number} lo Low bits
	 * @param {number} hi High bits
	 */
	function LongBits(lo, hi) { // make sure to always call this with unsigned 32bits for proper optimization

	    /**
	     * Low bits.
	     * @type {number}
	     */
	    this.lo = lo;

	    /**
	     * High bits.
	     * @type {number}
	     */
	    this.hi = hi;
	}

	/** @alias util.LongBits.prototype */
	var LongBitsPrototype = LongBits.prototype;

	/**
	 * Zero bits.
	 * @memberof util.LongBits
	 * @type {util.LongBits}
	 */
	var zero = LongBits.zero = new LongBits(0, 0);

	zero.toNumber = function() { return 0; };
	zero.zzEncode = zero.zzDecode = function() { return this; };
	zero.length = function() { return 1; };

	/**
	 * Zero hash.
	 * @memberof util.LongBits
	 * @type {string}
	 */
	var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

	/**
	 * Constructs new long bits from the specified number.
	 * @param {number} value Value
	 * @returns {util.LongBits} Instance
	 */
	LongBits.fromNumber = function fromNumber(value) {
	    if (value === 0)
	        return zero;
	    var sign = value < 0;
	    if (sign)
	        value = -value;
	    var lo = value >>> 0,
	        hi = (value - lo) / 4294967296 >>> 0; 
	    if (sign) {
	        hi = ~hi >>> 0;
	        lo = ~lo >>> 0;
	        if (++lo > 4294967295) {
	            lo = 0;
	            if (++hi > 4294967295)
	                hi = 0;
	        }
	    }
	    return new LongBits(lo, hi);
	};

	/**
	 * Constructs new long bits from a number, long or string.
	 * @param {Long|number|string} value Value
	 * @returns {util.LongBits} Instance
	 */
	LongBits.from = function from(value) {
	    if (typeof value === "number")
	        return LongBits.fromNumber(value);
	    if (typeof value === "string") {
	        /* istanbul ignore else */
	        if (util.Long)
	            value = util.Long.fromString(value);
	        else
	            return LongBits.fromNumber(parseInt(value, 10));
	    }
	    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
	};

	/**
	 * Converts this long bits to a possibly unsafe JavaScript number.
	 * @param {boolean} [unsigned=false] Whether unsigned or not
	 * @returns {number} Possibly unsafe number
	 */
	LongBitsPrototype.toNumber = function toNumber(unsigned) {
	    if (!unsigned && this.hi >>> 31) {
	        var lo = ~this.lo + 1 >>> 0,
	            hi = ~this.hi     >>> 0;
	        if (!lo)
	            hi = hi + 1 >>> 0;
	        return -(lo + hi * 4294967296);
	    }
	    return this.lo + this.hi * 4294967296;
	};

	/**
	 * Converts this long bits to a long.
	 * @param {boolean} [unsigned=false] Whether unsigned or not
	 * @returns {Long} Long
	 */
	LongBitsPrototype.toLong = function toLong(unsigned) {
	    return util.Long
	        ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
	        /* istanbul ignore next */
	        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
	};

	var charCodeAt = String.prototype.charCodeAt;

	/**
	 * Constructs new long bits from the specified 8 characters long hash.
	 * @param {string} hash Hash
	 * @returns {util.LongBits} Bits
	 */
	LongBits.fromHash = function fromHash(hash) {
	    if (hash === zeroHash)
	        return zero;
	    return new LongBits(
	        ( charCodeAt.call(hash, 0)
	        | charCodeAt.call(hash, 1) << 8
	        | charCodeAt.call(hash, 2) << 16
	        | charCodeAt.call(hash, 3) << 24) >>> 0
	    ,
	        ( charCodeAt.call(hash, 4)
	        | charCodeAt.call(hash, 5) << 8
	        | charCodeAt.call(hash, 6) << 16
	        | charCodeAt.call(hash, 7) << 24) >>> 0
	    );
	};

	/**
	 * Converts this long bits to a 8 characters long hash.
	 * @returns {string} Hash
	 */
	LongBitsPrototype.toHash = function toHash() {
	    return String.fromCharCode(
	        this.lo        & 255,
	        this.lo >>> 8  & 255,
	        this.lo >>> 16 & 255,
	        this.lo >>> 24      ,
	        this.hi        & 255,
	        this.hi >>> 8  & 255,
	        this.hi >>> 16 & 255,
	        this.hi >>> 24
	    );
	};

	/**
	 * Zig-zag encodes this long bits.
	 * @returns {util.LongBits} `this`
	 */
	LongBitsPrototype.zzEncode = function zzEncode() {
	    var mask =   this.hi >> 31;
	    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
	    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
	    return this;
	};

	/**
	 * Zig-zag decodes this long bits.
	 * @returns {util.LongBits} `this`
	 */
	LongBitsPrototype.zzDecode = function zzDecode() {
	    var mask = -(this.lo & 1);
	    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
	    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
	    return this;
	};

	/**
	 * Calculates the length of this longbits when encoded as a varint.
	 * @returns {number} Length
	 */
	LongBitsPrototype.length = function length() {
	    var part0 =  this.lo,
	        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
	        part2 =  this.hi >>> 24;
	    return part2 === 0
	         ? part1 === 0
	           ? part0 < 16384
	             ? part0 < 128 ? 1 : 2
	             : part0 < 2097152 ? 3 : 4
	           : part1 < 16384
	             ? part1 < 128 ? 5 : 6
	             : part1 < 2097152 ? 7 : 8
	         : part2 < 128 ? 9 : 10;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = BufferWriter;

	// extends Writer
	var Writer = __webpack_require__(3);
	/** @alias BufferWriter.prototype */
	var BufferWriterPrototype = BufferWriter.prototype = Object.create(Writer.prototype);
	BufferWriterPrototype.constructor = BufferWriter;

	var util = __webpack_require__(4);

	var Buffer = util.Buffer;

	/**
	 * Constructs a new buffer writer instance.
	 * @classdesc Wire format writer using node buffers.
	 * @extends Writer
	 * @constructor
	 */
	function BufferWriter() {
	    Writer.call(this);
	}

	/**
	 * Allocates a buffer of the specified size.
	 * @param {number} size Buffer size
	 * @returns {Uint8Array} Buffer
	 */
	BufferWriter.alloc = function alloc_buffer(size) {
	    return (BufferWriter.alloc = Buffer.allocUnsafe)(size);
	};

	var writeBytesBuffer = Buffer && Buffer.prototype instanceof Uint8Array && Buffer.prototype.set.name === "set"
	    ? function writeBytesBuffer_set(val, buf, pos) {
	        buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
	    }
	    /* istanbul ignore next */
	    : function writeBytesBuffer_copy(val, buf, pos) {
	        val.copy(buf, pos, 0, val.length);
	    };

	/**
	 * @override
	 */
	BufferWriterPrototype.bytes = function write_bytes_buffer(value) {
	    if (typeof value === "string")
	        value = Buffer.from(value, "base64"); // polyfilled
	    var len = value.length >>> 0;
	    this.uint32(len);
	    if (len)
	        this.push(writeBytesBuffer, len, value);
	    return this;
	};

	function writeStringBuffer(val, buf, pos) {
	    if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
	        util.utf8.write(val, buf, pos);
	    else
	        buf.utf8Write(val, pos);
	}

	/**
	 * @override
	 */
	BufferWriterPrototype.string = function write_string_buffer(value) {
	    var len = Buffer.byteLength(value);
	    this.uint32(len);
	    if (len)
	        this.push(writeStringBuffer, len, value);
	    return this;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = Reader;

	var util      = __webpack_require__(4);

	var BufferReader; // cyclic

	var LongBits  = util.LongBits,
	    utf8      = util.utf8;

	/* istanbul ignore next */
	function indexOutOfRange(reader, writeLength) {
	    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
	}

	/**
	 * Constructs a new reader instance using the specified buffer.
	 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
	 * @constructor
	 * @param {Uint8Array} buffer Buffer to read from
	 */
	function Reader(buffer) {

	    /**
	     * Read buffer.
	     * @type {Uint8Array}
	     */
	    this.buf = buffer;

	    /**
	     * Read buffer position.
	     * @type {number}
	     */
	    this.pos = 0;

	    /**
	     * Read buffer length.
	     * @type {number}
	     */
	    this.len = buffer.length;
	}

	/**
	 * Creates a new reader using the specified buffer.
	 * @function
	 * @param {Uint8Array} buffer Buffer to read from
	 * @returns {BufferReader|Reader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
	 */
	Reader.create = util.Buffer
	    ? function create_buffer_setup(buffer) {
	        if (!BufferReader)
	            BufferReader = __webpack_require__(12);
	        return (Reader.create = function create_buffer(buffer) {
	            return util.Buffer.isBuffer(buffer)
	                ? new BufferReader(buffer)
	                : new Reader(buffer);
	        })(buffer);
	    }
	    /* istanbul ignore next */
	    : function create_array(buffer) {
	        return new Reader(buffer);
	    };

	/** @alias Reader.prototype */
	var ReaderPrototype = Reader.prototype;

	ReaderPrototype._slice = util.Array.prototype.subarray || util.Array.prototype.slice;

	/**
	 * Reads a varint as an unsigned 32 bit value.
	 * @function
	 * @returns {number} Value read
	 */
	ReaderPrototype.uint32 = (function read_uint32_setup() {
	    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
	    return function read_uint32() {
	        value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
	        value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
	        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
	        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
	        value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

	        /* istanbul ignore next */
	        if ((this.pos += 5) > this.len) {
	            this.pos = this.len;
	            throw indexOutOfRange(this, 10);
	        }
	        return value;
	    };
	})();

	/**
	 * Reads a varint as a signed 32 bit value.
	 * @returns {number} Value read
	 */
	ReaderPrototype.int32 = function read_int32() {
	    return this.uint32() | 0;
	};

	/**
	 * Reads a zig-zag encoded varint as a signed 32 bit value.
	 * @returns {number} Value read
	 */
	ReaderPrototype.sint32 = function read_sint32() {
	    var value = this.uint32();
	    return value >>> 1 ^ -(value & 1) | 0;
	};

	/* eslint-disable no-invalid-this */

	function readLongVarint() {
	    // tends to deopt with local vars for octet etc.
	    var bits = new LongBits(0 >>> 0, 0 >>> 0);
	    var i = 0;
	    if (this.len - this.pos > 4) { // fast route (lo)
	        for (i = 0; i < 4; ++i) {
	            // 1st..4th
	            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
	            if (this.buf[this.pos++] < 128)
	                return bits;
	        }
	        // 5th
	        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
	        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
	        if (this.buf[this.pos++] < 128)
	            return bits;
	    } else {
	        for (i = 0; i < 4; ++i) {
	            /* istanbul ignore next */
	            if (this.pos >= this.len)
	                throw indexOutOfRange(this);
	            // 1st..4th
	            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
	            if (this.buf[this.pos++] < 128)
	                return bits;
	        }
	        /* istanbul ignore next */
	        if (this.pos >= this.len)
	            throw indexOutOfRange(this);
	        // 5th
	        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
	        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
	        if (this.buf[this.pos++] < 128)
	            return bits;
	    }
	    if (this.len - this.pos > 4) { // fast route (hi)
	        for (i = 0; i < 5; ++i) {
	            // 6th..10th
	            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
	            if (this.buf[this.pos++] < 128)
	                return bits;
	        }
	    } else {
	        for (i = 0; i < 5; ++i) {
	            /* istanbul ignore next */
	            if (this.pos >= this.len)
	                throw indexOutOfRange(this);
	            // 6th..10th
	            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
	            if (this.buf[this.pos++] < 128)
	                return bits;
	        }
	    }
	    throw Error("invalid varint encoding");
	}

	function read_int64_long() {
	    return readLongVarint.call(this).toLong();
	}

	/* istanbul ignore next */
	function read_int64_number() {
	    return readLongVarint.call(this).toNumber();
	}

	function read_uint64_long() {
	    return readLongVarint.call(this).toLong(true);
	}

	/* istanbul ignore next */
	function read_uint64_number() {
	    return readLongVarint.call(this).toNumber(true);
	}

	function read_sint64_long() {
	    return readLongVarint.call(this).zzDecode().toLong();
	}

	/* istanbul ignore next */
	function read_sint64_number() {
	    return readLongVarint.call(this).zzDecode().toNumber();
	}

	/* eslint-enable no-invalid-this */

	/**
	 * Reads a varint as a signed 64 bit value.
	 * @name Reader#int64
	 * @function
	 * @returns {Long|number} Value read
	 */

	/**
	 * Reads a varint as an unsigned 64 bit value.
	 * @name Reader#uint64
	 * @function
	 * @returns {Long|number} Value read
	 */

	/**
	 * Reads a zig-zag encoded varint as a signed 64 bit value.
	 * @name Reader#sint64
	 * @function
	 * @returns {Long|number} Value read
	 */

	/**
	 * Reads a varint as a boolean.
	 * @returns {boolean} Value read
	 */
	ReaderPrototype.bool = function read_bool() {
	    return this.uint32() !== 0;
	};

	function readFixed32(buf, end) {
	    return (buf[end - 4]
	          | buf[end - 3] << 8
	          | buf[end - 2] << 16
	          | buf[end - 1] << 24) >>> 0;
	}

	/**
	 * Reads fixed 32 bits as a number.
	 * @returns {number} Value read
	 */
	ReaderPrototype.fixed32 = function read_fixed32() {

	    /* istanbul ignore next */
	    if (this.pos + 4 > this.len)
	        throw indexOutOfRange(this, 4);

	    return readFixed32(this.buf, this.pos += 4);
	};

	/**
	 * Reads zig-zag encoded fixed 32 bits as a number.
	 * @returns {number} Value read
	 */
	ReaderPrototype.sfixed32 = function read_sfixed32() {
	    var value = this.fixed32();
	    return value >>> 1 ^ -(value & 1);
	};

	/* eslint-disable no-invalid-this */

	function readFixed64(/* this: Reader */) {

	    /* istanbul ignore next */
	    if (this.pos + 8 > this.len)
	        throw indexOutOfRange(this, 8);

	    return new LongBits(readFixed32(this.buf, this.pos += 4), readFixed32(this.buf, this.pos += 4));
	}

	function read_fixed64_long() {
	    return readFixed64.call(this).toLong(true);
	}

	/* istanbul ignore next */
	function read_fixed64_number() {
	    return readFixed64.call(this).toNumber(true);
	}

	function read_sfixed64_long() {
	    return readFixed64.call(this).zzDecode().toLong();
	}

	/* istanbul ignore next */
	function read_sfixed64_number() {
	    return readFixed64.call(this).zzDecode().toNumber();
	}

	/* eslint-enable no-invalid-this */

	/**
	 * Reads fixed 64 bits.
	 * @name Reader#fixed64
	 * @function
	 * @returns {Long|number} Value read
	 */

	/**
	 * Reads zig-zag encoded fixed 64 bits.
	 * @name Reader#sfixed64
	 * @function
	 * @returns {Long|number} Value read
	 */

	var readFloat = typeof Float32Array !== "undefined"
	    ? (function() {
	        var f32 = new Float32Array(1),
	            f8b = new Uint8Array(f32.buffer);
	        f32[0] = -0;
	        return f8b[3] // already le?
	            ? function readFloat_f32(buf, pos) {
	                f8b[0] = buf[pos    ];
	                f8b[1] = buf[pos + 1];
	                f8b[2] = buf[pos + 2];
	                f8b[3] = buf[pos + 3];
	                return f32[0];
	            }
	            /* istanbul ignore next */
	            : function readFloat_f32_le(buf, pos) {
	                f8b[3] = buf[pos    ];
	                f8b[2] = buf[pos + 1];
	                f8b[1] = buf[pos + 2];
	                f8b[0] = buf[pos + 3];
	                return f32[0];
	            };
	    })()
	    /* istanbul ignore next */
	    : function readFloat_ieee754(buf, pos) {
	        var uint = readFixed32(buf, pos + 4),
	            sign = (uint >> 31) * 2 + 1,
	            exponent = uint >>> 23 & 255,
	            mantissa = uint & 8388607;
	        return exponent === 255
	            ? mantissa
	              ? NaN
	              : sign * Infinity
	            : exponent === 0 // denormal
	              ? sign * 1.401298464324817e-45 * mantissa
	              : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
	    };

	/**
	 * Reads a float (32 bit) as a number.
	 * @function
	 * @returns {number} Value read
	 */
	ReaderPrototype.float = function read_float() {

	    /* istanbul ignore next */
	    if (this.pos + 4 > this.len)
	        throw indexOutOfRange(this, 4);

	    var value = readFloat(this.buf, this.pos);
	    this.pos += 4;
	    return value;
	};

	var readDouble = typeof Float64Array !== "undefined"
	    ? (function() {
	        var f64 = new Float64Array(1),
	            f8b = new Uint8Array(f64.buffer);
	        f64[0] = -0;
	        return f8b[7] // already le?
	            ? function readDouble_f64(buf, pos) {
	                f8b[0] = buf[pos    ];
	                f8b[1] = buf[pos + 1];
	                f8b[2] = buf[pos + 2];
	                f8b[3] = buf[pos + 3];
	                f8b[4] = buf[pos + 4];
	                f8b[5] = buf[pos + 5];
	                f8b[6] = buf[pos + 6];
	                f8b[7] = buf[pos + 7];
	                return f64[0];
	            }
	            /* istanbul ignore next */
	            : function readDouble_f64_le(buf, pos) {
	                f8b[7] = buf[pos    ];
	                f8b[6] = buf[pos + 1];
	                f8b[5] = buf[pos + 2];
	                f8b[4] = buf[pos + 3];
	                f8b[3] = buf[pos + 4];
	                f8b[2] = buf[pos + 5];
	                f8b[1] = buf[pos + 6];
	                f8b[0] = buf[pos + 7];
	                return f64[0];
	            };
	    })()
	    /* istanbul ignore next */
	    : function readDouble_ieee754(buf, pos) {
	        var lo = readFixed32(buf, pos + 4),
	            hi = readFixed32(buf, pos + 8);
	        var sign = (hi >> 31) * 2 + 1,
	            exponent = hi >>> 20 & 2047,
	            mantissa = 4294967296 * (hi & 1048575) + lo;
	        return exponent === 2047
	            ? mantissa
	              ? NaN
	              : sign * Infinity
	            : exponent === 0 // denormal
	              ? sign * 5e-324 * mantissa
	              : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
	    };

	/**
	 * Reads a double (64 bit float) as a number.
	 * @function
	 * @returns {number} Value read
	 */
	ReaderPrototype.double = function read_double() {

	    /* istanbul ignore next */
	    if (this.pos + 8 > this.len)
	        throw indexOutOfRange(this, 4);

	    var value = readDouble(this.buf, this.pos);
	    this.pos += 8;
	    return value;
	};

	/**
	 * Reads a sequence of bytes preceeded by its length as a varint.
	 * @returns {Uint8Array} Value read
	 */
	ReaderPrototype.bytes = function read_bytes() {
	    var length = this.uint32(),
	        start  = this.pos,
	        end    = this.pos + length;

	    /* istanbul ignore next */
	    if (end > this.len)
	        throw indexOutOfRange(this, length);

	    this.pos += length;
	    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
	        ? new this.buf.constructor(0)
	        : this._slice.call(this.buf, start, end);
	};

	/**
	 * Reads a string preceeded by its byte length as a varint.
	 * @returns {string} Value read
	 */
	ReaderPrototype.string = function read_string() {
	    var bytes = this.bytes();
	    return utf8.read(bytes, 0, bytes.length);
	};

	/**
	 * Skips the specified number of bytes if specified, otherwise skips a varint.
	 * @param {number} [length] Length if known, otherwise a varint is assumed
	 * @returns {Reader} `this`
	 */
	ReaderPrototype.skip = function skip(length) {
	    if (typeof length === "number") {
	        /* istanbul ignore next */
	        if (this.pos + length > this.len)
	            throw indexOutOfRange(this, length);
	        this.pos += length;
	    } else {
	        do {
	            /* istanbul ignore next */
	            if (this.pos >= this.len)
	                throw indexOutOfRange(this);
	        } while (this.buf[this.pos++] & 128);
	    }
	    return this;
	};

	/**
	 * Skips the next element of the specified wire type.
	 * @param {number} wireType Wire type received
	 * @returns {Reader} `this`
	 */
	ReaderPrototype.skipType = function(wireType) {
	    switch (wireType) {
	        case 0:
	            this.skip();
	            break;
	        case 1:
	            this.skip(8);
	            break;
	        case 2:
	            this.skip(this.uint32());
	            break;
	        case 3:
	            do { // eslint-disable-line no-constant-condition
	                if ((wireType = this.uint32() & 7) === 4)
	                    break;
	                this.skipType(wireType);
	            } while (true);
	            break;
	        case 5:
	            this.skip(4);
	            break;

	        /* istanbul ignore next */
	        default:
	            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
	    }
	    return this;
	};

	function configure() {
	    /* istanbul ignore else */
	    if (util.Long) {
	        ReaderPrototype.int64 = read_int64_long;
	        ReaderPrototype.uint64 = read_uint64_long;
	        ReaderPrototype.sint64 = read_sint64_long;
	        ReaderPrototype.fixed64 = read_fixed64_long;
	        ReaderPrototype.sfixed64 = read_sfixed64_long;
	    } else {
	        ReaderPrototype.int64 = read_int64_number;
	        ReaderPrototype.uint64 = read_uint64_number;
	        ReaderPrototype.sint64 = read_sint64_number;
	        ReaderPrototype.fixed64 = read_fixed64_number;
	        ReaderPrototype.sfixed64 = read_sfixed64_number;
	    }
	}

	Reader._configure = configure;

	configure();


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = BufferReader;

	// extends Reader
	var Reader = __webpack_require__(11);
	/** @alias BufferReader.prototype */
	var BufferReaderPrototype = BufferReader.prototype = Object.create(Reader.prototype);
	BufferReaderPrototype.constructor = BufferReader;

	var util = __webpack_require__(4);

	/**
	 * Constructs a new buffer reader instance.
	 * @classdesc Wire format reader using node buffers.
	 * @extends Reader
	 * @constructor
	 * @param {Buffer} buffer Buffer to read from
	 */
	function BufferReader(buffer) {
	    Reader.call(this, buffer);
	}

	if (util.Buffer)
	    BufferReaderPrototype._slice = util.Buffer.prototype.slice;

	/**
	 * @override
	 */
	BufferReaderPrototype.string = function read_string_buffer() {
	    var len = this.uint32(); // modifies pos
	    return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len));
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var converters = exports;

	var util = __webpack_require__(4);

	/**
	 * JSON conversion options as used by {@link Message#asJSON}.
	 * @typedef JSONConversionOptions
	 * @type {Object}
	 * @property {boolean} [fieldsOnly=false] Keeps only properties that reference a field
	 * @property {*} [longs] Long conversion type. Only relevant with a long library.
	 * Valid values are `String` and `Number` (the global types).
	 * Defaults to a possibly unsafe number without, and a `Long` with a long library.
	 * @property {*} [enums=Number] Enum value conversion type.
	 * Valid values are `String` and `Number` (the global types).
	 * Defaults to the numeric ids.
	 * @property {*} [bytes] Bytes value conversion type.
	 * Valid values are `Array` and `String` (the global types).
	 * Defaults to return the underlying buffer type.
	 * @property {boolean} [defaults=false] Also sets default values on the resulting object
	 * @property {boolean} [arrays=false] Sets empty arrays for missing repeated fields even if `defaults=false`
	 */

	/**
	 * Converter implementation producing JSON.
	 * @type {ConverterImpl}
	 */
	converters.json = {
	    create: function(value, typeOrCtor, options) {
	        if (!value) // inner messages
	            return null;
	        return options.fieldsOnly
	            ? {}
	            : util.merge({}, value);
	    },
	    enums: function(value, defaultValue, values, options) {
	        if (value === undefined)
	            value = defaultValue;
	        return options.enums === String && typeof value === "number"
	            ? values[value]
	            : value;
	    },
	    longs: function(value, defaultLow, defaultHigh, unsigned, options) {
	        if (value === undefined || value === null)
	            value = { low: defaultLow, high: defaultHigh };
	        if (options.longs === Number)
	            return typeof value === "number"
	                ? value
	                : util.LongBits.from(value).toNumber(unsigned);
	        if (options.longs === String) {
	            if (typeof value === "number")
	                return util.Long.fromNumber(value, unsigned).toString();
	            value = util.Long.fromValue(value); // has no unsigned option
	            value.unsigned = unsigned;
	            return value.toString();
	        }
	        return value;
	    },
	    bytes: function(value, defaultValue, options) {
	        if (!value) {
	            value = defaultValue;
	        } else if (!value.length && !options.defaults)
	            return undefined;
	        return options.bytes === String
	            ? util.base64.encode(value, 0, value.length)
	            : options.bytes === Array
	            ? Array.prototype.slice.call(value)
	            : options.bytes === util.Buffer && !util.Buffer.isBuffer(value)
	            ? util.Buffer.from(value) // polyfilled
	            : value;
	    }
	};

	/**
	 * Message conversion options as used by {@link Message.from} and {@link Type#from}.
	 * @typedef MessageConversionOptions
	 * @type {Object}
	 * @property {boolean} [fieldsOnly=false] Keeps only properties that reference a field
	 */
	// Note that options.defaults and options.arrays also affect the message converter.
	// As defaults are already on the prototype, usage is not recommended and thus undocumented.

	/**
	 * Converter implementation producing runtime messages.
	 * @type {ConverterImpl}
	 */
	converters.message = {
	    create: function(value, typeOrCtor, options) {
	        if (!value)
	            return null;
	        // can't use instanceof Type here because converters are also part of the minimal runtime
	        return new (typeOrCtor.ctor ? typeOrCtor.ctor : typeOrCtor)(options.fieldsOnly ? undefined : value);
	    },
	    enums: function(value, defaultValue, values) {
	        if (typeof value === "string")
	            return values[value];
	        return value;
	    },
	    longs: function(value, defaultLow, defaultHigh, unsigned) {
	        if (typeof value === "string")
	            return util.Long.fromString(value, unsigned);
	        if (typeof value === "number")
	            return util.Long.fromNumber(value, unsigned);
	        return value;
	    },
	    bytes: function(value/*, defaultValue*/) {
	        if (util.Buffer)
	            return util.Buffer.isBuffer(value)
	                ? value
	                : util.Buffer.from(value, "base64"); // polyfilled
	        if (typeof value === "string") {
	            var buf = util.newBuffer(util.base64.length(value));
	            util.base64.decode(value, buf, 0);
	            return buf;
	        }
	        return value instanceof util.Array
	            ? value
	            : new util.Array(value);
	    }
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*
	 Copyright 2013 Daniel Wirtz <dcode@dcode.io>
	 Copyright 2009 The Closure Library Authors. All Rights Reserved.

	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS-IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	 */

	/**
	 * @license long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
	 * Released under the Apache License, Version 2.0
	 * see: https://github.com/dcodeIO/long.js for details
	 */
	(function(global, factory) {

	    /* AMD */ if ("function" === 'function' && __webpack_require__(16)["amd"])
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    /* CommonJS */ else if ("function" === 'function' && typeof module === "object" && module && module["exports"])
	        module["exports"] = factory();
	    /* Global */ else
	        (global["dcodeIO"] = global["dcodeIO"] || {})["Long"] = factory();

	})(this, function() {
	    "use strict";

	    /**
	     * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
	     *  See the from* functions below for more convenient ways of constructing Longs.
	     * @exports Long
	     * @class A Long class for representing a 64 bit two's-complement integer value.
	     * @param {number} low The low (signed) 32 bits of the long
	     * @param {number} high The high (signed) 32 bits of the long
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @constructor
	     */
	    function Long(low, high, unsigned) {

	        /**
	         * The low 32 bits as a signed value.
	         * @type {number}
	         */
	        this.low = low | 0;

	        /**
	         * The high 32 bits as a signed value.
	         * @type {number}
	         */
	        this.high = high | 0;

	        /**
	         * Whether unsigned or not.
	         * @type {boolean}
	         */
	        this.unsigned = !!unsigned;
	    }

	    // The internal representation of a long is the two given signed, 32-bit values.
	    // We use 32-bit pieces because these are the size of integers on which
	    // Javascript performs bit-operations.  For operations like addition and
	    // multiplication, we split each number into 16 bit pieces, which can easily be
	    // multiplied within Javascript's floating-point representation without overflow
	    // or change in sign.
	    //
	    // In the algorithms below, we frequently reduce the negative case to the
	    // positive case by negating the input(s) and then post-processing the result.
	    // Note that we must ALWAYS check specially whether those values are MIN_VALUE
	    // (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
	    // a positive number, it overflows back into a negative).  Not handling this
	    // case would often result in infinite recursion.
	    //
	    // Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
	    // methods on which they depend.

	    /**
	     * An indicator used to reliably determine if an object is a Long or not.
	     * @type {boolean}
	     * @const
	     * @private
	     */
	    Long.prototype.__isLong__;

	    Object.defineProperty(Long.prototype, "__isLong__", {
	        value: true,
	        enumerable: false,
	        configurable: false
	    });

	    /**
	     * @function
	     * @param {*} obj Object
	     * @returns {boolean}
	     * @inner
	     */
	    function isLong(obj) {
	        return (obj && obj["__isLong__"]) === true;
	    }

	    /**
	     * Tests if the specified object is a Long.
	     * @function
	     * @param {*} obj Object
	     * @returns {boolean}
	     */
	    Long.isLong = isLong;

	    /**
	     * A cache of the Long representations of small integer values.
	     * @type {!Object}
	     * @inner
	     */
	    var INT_CACHE = {};

	    /**
	     * A cache of the Long representations of small unsigned integer values.
	     * @type {!Object}
	     * @inner
	     */
	    var UINT_CACHE = {};

	    /**
	     * @param {number} value
	     * @param {boolean=} unsigned
	     * @returns {!Long}
	     * @inner
	     */
	    function fromInt(value, unsigned) {
	        var obj, cachedObj, cache;
	        if (unsigned) {
	            value >>>= 0;
	            if (cache = (0 <= value && value < 256)) {
	                cachedObj = UINT_CACHE[value];
	                if (cachedObj)
	                    return cachedObj;
	            }
	            obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
	            if (cache)
	                UINT_CACHE[value] = obj;
	            return obj;
	        } else {
	            value |= 0;
	            if (cache = (-128 <= value && value < 128)) {
	                cachedObj = INT_CACHE[value];
	                if (cachedObj)
	                    return cachedObj;
	            }
	            obj = fromBits(value, value < 0 ? -1 : 0, false);
	            if (cache)
	                INT_CACHE[value] = obj;
	            return obj;
	        }
	    }

	    /**
	     * Returns a Long representing the given 32 bit integer value.
	     * @function
	     * @param {number} value The 32 bit integer in question
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromInt = fromInt;

	    /**
	     * @param {number} value
	     * @param {boolean=} unsigned
	     * @returns {!Long}
	     * @inner
	     */
	    function fromNumber(value, unsigned) {
	        if (isNaN(value) || !isFinite(value))
	            return unsigned ? UZERO : ZERO;
	        if (unsigned) {
	            if (value < 0)
	                return UZERO;
	            if (value >= TWO_PWR_64_DBL)
	                return MAX_UNSIGNED_VALUE;
	        } else {
	            if (value <= -TWO_PWR_63_DBL)
	                return MIN_VALUE;
	            if (value + 1 >= TWO_PWR_63_DBL)
	                return MAX_VALUE;
	        }
	        if (value < 0)
	            return fromNumber(-value, unsigned).neg();
	        return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
	    }

	    /**
	     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
	     * @function
	     * @param {number} value The number in question
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromNumber = fromNumber;

	    /**
	     * @param {number} lowBits
	     * @param {number} highBits
	     * @param {boolean=} unsigned
	     * @returns {!Long}
	     * @inner
	     */
	    function fromBits(lowBits, highBits, unsigned) {
	        return new Long(lowBits, highBits, unsigned);
	    }

	    /**
	     * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
	     *  assumed to use 32 bits.
	     * @function
	     * @param {number} lowBits The low 32 bits
	     * @param {number} highBits The high 32 bits
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromBits = fromBits;

	    /**
	     * @function
	     * @param {number} base
	     * @param {number} exponent
	     * @returns {number}
	     * @inner
	     */
	    var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

	    /**
	     * @param {string} str
	     * @param {(boolean|number)=} unsigned
	     * @param {number=} radix
	     * @returns {!Long}
	     * @inner
	     */
	    function fromString(str, unsigned, radix) {
	        if (str.length === 0)
	            throw Error('empty string');
	        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
	            return ZERO;
	        if (typeof unsigned === 'number') {
	            // For goog.math.long compatibility
	            radix = unsigned,
	            unsigned = false;
	        } else {
	            unsigned = !! unsigned;
	        }
	        radix = radix || 10;
	        if (radix < 2 || 36 < radix)
	            throw RangeError('radix');

	        var p;
	        if ((p = str.indexOf('-')) > 0)
	            throw Error('interior hyphen');
	        else if (p === 0) {
	            return fromString(str.substring(1), unsigned, radix).neg();
	        }

	        // Do several (8) digits each time through the loop, so as to
	        // minimize the calls to the very expensive emulated div.
	        var radixToPower = fromNumber(pow_dbl(radix, 8));

	        var result = ZERO;
	        for (var i = 0; i < str.length; i += 8) {
	            var size = Math.min(8, str.length - i),
	                value = parseInt(str.substring(i, i + size), radix);
	            if (size < 8) {
	                var power = fromNumber(pow_dbl(radix, size));
	                result = result.mul(power).add(fromNumber(value));
	            } else {
	                result = result.mul(radixToPower);
	                result = result.add(fromNumber(value));
	            }
	        }
	        result.unsigned = unsigned;
	        return result;
	    }

	    /**
	     * Returns a Long representation of the given string, written using the specified radix.
	     * @function
	     * @param {string} str The textual representation of the Long
	     * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to `false` for signed
	     * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromString = fromString;

	    /**
	     * @function
	     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
	     * @returns {!Long}
	     * @inner
	     */
	    function fromValue(val) {
	        if (val /* is compatible */ instanceof Long)
	            return val;
	        if (typeof val === 'number')
	            return fromNumber(val);
	        if (typeof val === 'string')
	            return fromString(val);
	        // Throws for non-objects, converts non-instanceof Long:
	        return fromBits(val.low, val.high, val.unsigned);
	    }

	    /**
	     * Converts the specified value to a Long.
	     * @function
	     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
	     * @returns {!Long}
	     */
	    Long.fromValue = fromValue;

	    // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
	    // no runtime penalty for these.

	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_16_DBL = 1 << 16;

	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_24_DBL = 1 << 24;

	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

	    /**
	     * @type {!Long}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var ZERO = fromInt(0);

	    /**
	     * Signed zero.
	     * @type {!Long}
	     */
	    Long.ZERO = ZERO;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var UZERO = fromInt(0, true);

	    /**
	     * Unsigned zero.
	     * @type {!Long}
	     */
	    Long.UZERO = UZERO;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var ONE = fromInt(1);

	    /**
	     * Signed one.
	     * @type {!Long}
	     */
	    Long.ONE = ONE;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var UONE = fromInt(1, true);

	    /**
	     * Unsigned one.
	     * @type {!Long}
	     */
	    Long.UONE = UONE;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var NEG_ONE = fromInt(-1);

	    /**
	     * Signed negative one.
	     * @type {!Long}
	     */
	    Long.NEG_ONE = NEG_ONE;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

	    /**
	     * Maximum signed value.
	     * @type {!Long}
	     */
	    Long.MAX_VALUE = MAX_VALUE;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

	    /**
	     * Maximum unsigned value.
	     * @type {!Long}
	     */
	    Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var MIN_VALUE = fromBits(0, 0x80000000|0, false);

	    /**
	     * Minimum signed value.
	     * @type {!Long}
	     */
	    Long.MIN_VALUE = MIN_VALUE;

	    /**
	     * @alias Long.prototype
	     * @inner
	     */
	    var LongPrototype = Long.prototype;

	    /**
	     * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
	     * @returns {number}
	     */
	    LongPrototype.toInt = function toInt() {
	        return this.unsigned ? this.low >>> 0 : this.low;
	    };

	    /**
	     * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
	     * @returns {number}
	     */
	    LongPrototype.toNumber = function toNumber() {
	        if (this.unsigned)
	            return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
	        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
	    };

	    /**
	     * Converts the Long to a string written in the specified radix.
	     * @param {number=} radix Radix (2-36), defaults to 10
	     * @returns {string}
	     * @override
	     * @throws {RangeError} If `radix` is out of range
	     */
	    LongPrototype.toString = function toString(radix) {
	        radix = radix || 10;
	        if (radix < 2 || 36 < radix)
	            throw RangeError('radix');
	        if (this.isZero())
	            return '0';
	        if (this.isNegative()) { // Unsigned Longs are never negative
	            if (this.eq(MIN_VALUE)) {
	                // We need to change the Long value before it can be negated, so we remove
	                // the bottom-most digit in this base and then recurse to do the rest.
	                var radixLong = fromNumber(radix),
	                    div = this.div(radixLong),
	                    rem1 = div.mul(radixLong).sub(this);
	                return div.toString(radix) + rem1.toInt().toString(radix);
	            } else
	                return '-' + this.neg().toString(radix);
	        }

	        // Do several (6) digits each time through the loop, so as to
	        // minimize the calls to the very expensive emulated div.
	        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
	            rem = this;
	        var result = '';
	        while (true) {
	            var remDiv = rem.div(radixToPower),
	                intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
	                digits = intval.toString(radix);
	            rem = remDiv;
	            if (rem.isZero())
	                return digits + result;
	            else {
	                while (digits.length < 6)
	                    digits = '0' + digits;
	                result = '' + digits + result;
	            }
	        }
	    };

	    /**
	     * Gets the high 32 bits as a signed integer.
	     * @returns {number} Signed high bits
	     */
	    LongPrototype.getHighBits = function getHighBits() {
	        return this.high;
	    };

	    /**
	     * Gets the high 32 bits as an unsigned integer.
	     * @returns {number} Unsigned high bits
	     */
	    LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
	        return this.high >>> 0;
	    };

	    /**
	     * Gets the low 32 bits as a signed integer.
	     * @returns {number} Signed low bits
	     */
	    LongPrototype.getLowBits = function getLowBits() {
	        return this.low;
	    };

	    /**
	     * Gets the low 32 bits as an unsigned integer.
	     * @returns {number} Unsigned low bits
	     */
	    LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
	        return this.low >>> 0;
	    };

	    /**
	     * Gets the number of bits needed to represent the absolute value of this Long.
	     * @returns {number}
	     */
	    LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
	        if (this.isNegative()) // Unsigned Longs are never negative
	            return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
	        var val = this.high != 0 ? this.high : this.low;
	        for (var bit = 31; bit > 0; bit--)
	            if ((val & (1 << bit)) != 0)
	                break;
	        return this.high != 0 ? bit + 33 : bit + 1;
	    };

	    /**
	     * Tests if this Long's value equals zero.
	     * @returns {boolean}
	     */
	    LongPrototype.isZero = function isZero() {
	        return this.high === 0 && this.low === 0;
	    };

	    /**
	     * Tests if this Long's value is negative.
	     * @returns {boolean}
	     */
	    LongPrototype.isNegative = function isNegative() {
	        return !this.unsigned && this.high < 0;
	    };

	    /**
	     * Tests if this Long's value is positive.
	     * @returns {boolean}
	     */
	    LongPrototype.isPositive = function isPositive() {
	        return this.unsigned || this.high >= 0;
	    };

	    /**
	     * Tests if this Long's value is odd.
	     * @returns {boolean}
	     */
	    LongPrototype.isOdd = function isOdd() {
	        return (this.low & 1) === 1;
	    };

	    /**
	     * Tests if this Long's value is even.
	     * @returns {boolean}
	     */
	    LongPrototype.isEven = function isEven() {
	        return (this.low & 1) === 0;
	    };

	    /**
	     * Tests if this Long's value equals the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.equals = function equals(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
	            return false;
	        return this.high === other.high && this.low === other.low;
	    };

	    /**
	     * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.eq = LongPrototype.equals;

	    /**
	     * Tests if this Long's value differs from the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.notEquals = function notEquals(other) {
	        return !this.eq(/* validates */ other);
	    };

	    /**
	     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.neq = LongPrototype.notEquals;

	    /**
	     * Tests if this Long's value is less than the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lessThan = function lessThan(other) {
	        return this.comp(/* validates */ other) < 0;
	    };

	    /**
	     * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lt = LongPrototype.lessThan;

	    /**
	     * Tests if this Long's value is less than or equal the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
	        return this.comp(/* validates */ other) <= 0;
	    };

	    /**
	     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lte = LongPrototype.lessThanOrEqual;

	    /**
	     * Tests if this Long's value is greater than the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.greaterThan = function greaterThan(other) {
	        return this.comp(/* validates */ other) > 0;
	    };

	    /**
	     * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.gt = LongPrototype.greaterThan;

	    /**
	     * Tests if this Long's value is greater than or equal the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
	        return this.comp(/* validates */ other) >= 0;
	    };

	    /**
	     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.gte = LongPrototype.greaterThanOrEqual;

	    /**
	     * Compares this Long's value with the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
	     *  if the given one is greater
	     */
	    LongPrototype.compare = function compare(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        if (this.eq(other))
	            return 0;
	        var thisNeg = this.isNegative(),
	            otherNeg = other.isNegative();
	        if (thisNeg && !otherNeg)
	            return -1;
	        if (!thisNeg && otherNeg)
	            return 1;
	        // At this point the sign bits are the same
	        if (!this.unsigned)
	            return this.sub(other).isNegative() ? -1 : 1;
	        // Both are positive if at least one is unsigned
	        return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
	    };

	    /**
	     * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
	     *  if the given one is greater
	     */
	    LongPrototype.comp = LongPrototype.compare;

	    /**
	     * Negates this Long's value.
	     * @returns {!Long} Negated Long
	     */
	    LongPrototype.negate = function negate() {
	        if (!this.unsigned && this.eq(MIN_VALUE))
	            return MIN_VALUE;
	        return this.not().add(ONE);
	    };

	    /**
	     * Negates this Long's value. This is an alias of {@link Long#negate}.
	     * @function
	     * @returns {!Long} Negated Long
	     */
	    LongPrototype.neg = LongPrototype.negate;

	    /**
	     * Returns the sum of this and the specified Long.
	     * @param {!Long|number|string} addend Addend
	     * @returns {!Long} Sum
	     */
	    LongPrototype.add = function add(addend) {
	        if (!isLong(addend))
	            addend = fromValue(addend);

	        // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

	        var a48 = this.high >>> 16;
	        var a32 = this.high & 0xFFFF;
	        var a16 = this.low >>> 16;
	        var a00 = this.low & 0xFFFF;

	        var b48 = addend.high >>> 16;
	        var b32 = addend.high & 0xFFFF;
	        var b16 = addend.low >>> 16;
	        var b00 = addend.low & 0xFFFF;

	        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
	        c00 += a00 + b00;
	        c16 += c00 >>> 16;
	        c00 &= 0xFFFF;
	        c16 += a16 + b16;
	        c32 += c16 >>> 16;
	        c16 &= 0xFFFF;
	        c32 += a32 + b32;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c48 += a48 + b48;
	        c48 &= 0xFFFF;
	        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
	    };

	    /**
	     * Returns the difference of this and the specified Long.
	     * @param {!Long|number|string} subtrahend Subtrahend
	     * @returns {!Long} Difference
	     */
	    LongPrototype.subtract = function subtract(subtrahend) {
	        if (!isLong(subtrahend))
	            subtrahend = fromValue(subtrahend);
	        return this.add(subtrahend.neg());
	    };

	    /**
	     * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
	     * @function
	     * @param {!Long|number|string} subtrahend Subtrahend
	     * @returns {!Long} Difference
	     */
	    LongPrototype.sub = LongPrototype.subtract;

	    /**
	     * Returns the product of this and the specified Long.
	     * @param {!Long|number|string} multiplier Multiplier
	     * @returns {!Long} Product
	     */
	    LongPrototype.multiply = function multiply(multiplier) {
	        if (this.isZero())
	            return ZERO;
	        if (!isLong(multiplier))
	            multiplier = fromValue(multiplier);
	        if (multiplier.isZero())
	            return ZERO;
	        if (this.eq(MIN_VALUE))
	            return multiplier.isOdd() ? MIN_VALUE : ZERO;
	        if (multiplier.eq(MIN_VALUE))
	            return this.isOdd() ? MIN_VALUE : ZERO;

	        if (this.isNegative()) {
	            if (multiplier.isNegative())
	                return this.neg().mul(multiplier.neg());
	            else
	                return this.neg().mul(multiplier).neg();
	        } else if (multiplier.isNegative())
	            return this.mul(multiplier.neg()).neg();

	        // If both longs are small, use float multiplication
	        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
	            return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

	        // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
	        // We can skip products that would overflow.

	        var a48 = this.high >>> 16;
	        var a32 = this.high & 0xFFFF;
	        var a16 = this.low >>> 16;
	        var a00 = this.low & 0xFFFF;

	        var b48 = multiplier.high >>> 16;
	        var b32 = multiplier.high & 0xFFFF;
	        var b16 = multiplier.low >>> 16;
	        var b00 = multiplier.low & 0xFFFF;

	        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
	        c00 += a00 * b00;
	        c16 += c00 >>> 16;
	        c00 &= 0xFFFF;
	        c16 += a16 * b00;
	        c32 += c16 >>> 16;
	        c16 &= 0xFFFF;
	        c16 += a00 * b16;
	        c32 += c16 >>> 16;
	        c16 &= 0xFFFF;
	        c32 += a32 * b00;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c32 += a16 * b16;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c32 += a00 * b32;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
	        c48 &= 0xFFFF;
	        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
	    };

	    /**
	     * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
	     * @function
	     * @param {!Long|number|string} multiplier Multiplier
	     * @returns {!Long} Product
	     */
	    LongPrototype.mul = LongPrototype.multiply;

	    /**
	     * Returns this Long divided by the specified. The result is signed if this Long is signed or
	     *  unsigned if this Long is unsigned.
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Quotient
	     */
	    LongPrototype.divide = function divide(divisor) {
	        if (!isLong(divisor))
	            divisor = fromValue(divisor);
	        if (divisor.isZero())
	            throw Error('division by zero');
	        if (this.isZero())
	            return this.unsigned ? UZERO : ZERO;
	        var approx, rem, res;
	        if (!this.unsigned) {
	            // This section is only relevant for signed longs and is derived from the
	            // closure library as a whole.
	            if (this.eq(MIN_VALUE)) {
	                if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
	                    return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
	                else if (divisor.eq(MIN_VALUE))
	                    return ONE;
	                else {
	                    // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
	                    var halfThis = this.shr(1);
	                    approx = halfThis.div(divisor).shl(1);
	                    if (approx.eq(ZERO)) {
	                        return divisor.isNegative() ? ONE : NEG_ONE;
	                    } else {
	                        rem = this.sub(divisor.mul(approx));
	                        res = approx.add(rem.div(divisor));
	                        return res;
	                    }
	                }
	            } else if (divisor.eq(MIN_VALUE))
	                return this.unsigned ? UZERO : ZERO;
	            if (this.isNegative()) {
	                if (divisor.isNegative())
	                    return this.neg().div(divisor.neg());
	                return this.neg().div(divisor).neg();
	            } else if (divisor.isNegative())
	                return this.div(divisor.neg()).neg();
	            res = ZERO;
	        } else {
	            // The algorithm below has not been made for unsigned longs. It's therefore
	            // required to take special care of the MSB prior to running it.
	            if (!divisor.unsigned)
	                divisor = divisor.toUnsigned();
	            if (divisor.gt(this))
	                return UZERO;
	            if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
	                return UONE;
	            res = UZERO;
	        }

	        // Repeat the following until the remainder is less than other:  find a
	        // floating-point that approximates remainder / other *from below*, add this
	        // into the result, and subtract it from the remainder.  It is critical that
	        // the approximate value is less than or equal to the real value so that the
	        // remainder never becomes negative.
	        rem = this;
	        while (rem.gte(divisor)) {
	            // Approximate the result of division. This may be a little greater or
	            // smaller than the actual value.
	            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

	            // We will tweak the approximate result by changing it in the 48-th digit or
	            // the smallest non-fractional digit, whichever is larger.
	            var log2 = Math.ceil(Math.log(approx) / Math.LN2),
	                delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

	            // Decrease the approximation until it is smaller than the remainder.  Note
	            // that if it is too large, the product overflows and is negative.
	                approxRes = fromNumber(approx),
	                approxRem = approxRes.mul(divisor);
	            while (approxRem.isNegative() || approxRem.gt(rem)) {
	                approx -= delta;
	                approxRes = fromNumber(approx, this.unsigned);
	                approxRem = approxRes.mul(divisor);
	            }

	            // We know the answer can't be zero... and actually, zero would cause
	            // infinite recursion since we would make no progress.
	            if (approxRes.isZero())
	                approxRes = ONE;

	            res = res.add(approxRes);
	            rem = rem.sub(approxRem);
	        }
	        return res;
	    };

	    /**
	     * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
	     * @function
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Quotient
	     */
	    LongPrototype.div = LongPrototype.divide;

	    /**
	     * Returns this Long modulo the specified.
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Remainder
	     */
	    LongPrototype.modulo = function modulo(divisor) {
	        if (!isLong(divisor))
	            divisor = fromValue(divisor);
	        return this.sub(this.div(divisor).mul(divisor));
	    };

	    /**
	     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
	     * @function
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Remainder
	     */
	    LongPrototype.mod = LongPrototype.modulo;

	    /**
	     * Returns the bitwise NOT of this Long.
	     * @returns {!Long}
	     */
	    LongPrototype.not = function not() {
	        return fromBits(~this.low, ~this.high, this.unsigned);
	    };

	    /**
	     * Returns the bitwise AND of this Long and the specified.
	     * @param {!Long|number|string} other Other Long
	     * @returns {!Long}
	     */
	    LongPrototype.and = function and(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
	    };

	    /**
	     * Returns the bitwise OR of this Long and the specified.
	     * @param {!Long|number|string} other Other Long
	     * @returns {!Long}
	     */
	    LongPrototype.or = function or(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
	    };

	    /**
	     * Returns the bitwise XOR of this Long and the given one.
	     * @param {!Long|number|string} other Other Long
	     * @returns {!Long}
	     */
	    LongPrototype.xor = function xor(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
	    };

	    /**
	     * Returns this Long with bits shifted to the left by the given amount.
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shiftLeft = function shiftLeft(numBits) {
	        if (isLong(numBits))
	            numBits = numBits.toInt();
	        if ((numBits &= 63) === 0)
	            return this;
	        else if (numBits < 32)
	            return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
	        else
	            return fromBits(0, this.low << (numBits - 32), this.unsigned);
	    };

	    /**
	     * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
	     * @function
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shl = LongPrototype.shiftLeft;

	    /**
	     * Returns this Long with bits arithmetically shifted to the right by the given amount.
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shiftRight = function shiftRight(numBits) {
	        if (isLong(numBits))
	            numBits = numBits.toInt();
	        if ((numBits &= 63) === 0)
	            return this;
	        else if (numBits < 32)
	            return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
	        else
	            return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
	    };

	    /**
	     * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
	     * @function
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shr = LongPrototype.shiftRight;

	    /**
	     * Returns this Long with bits logically shifted to the right by the given amount.
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
	        if (isLong(numBits))
	            numBits = numBits.toInt();
	        numBits &= 63;
	        if (numBits === 0)
	            return this;
	        else {
	            var high = this.high;
	            if (numBits < 32) {
	                var low = this.low;
	                return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
	            } else if (numBits === 32)
	                return fromBits(high, 0, this.unsigned);
	            else
	                return fromBits(high >>> (numBits - 32), 0, this.unsigned);
	        }
	    };

	    /**
	     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
	     * @function
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shru = LongPrototype.shiftRightUnsigned;

	    /**
	     * Converts this Long to signed.
	     * @returns {!Long} Signed long
	     */
	    LongPrototype.toSigned = function toSigned() {
	        if (!this.unsigned)
	            return this;
	        return fromBits(this.low, this.high, false);
	    };

	    /**
	     * Converts this Long to unsigned.
	     * @returns {!Long} Unsigned long
	     */
	    LongPrototype.toUnsigned = function toUnsigned() {
	        if (this.unsigned)
	            return this;
	        return fromBits(this.low, this.high, true);
	    };

	    /**
	     * Converts this Long to its byte representation.
	     * @param {boolean=} le Whether little or big endian, defaults to big endian
	     * @returns {!Array.<number>} Byte representation
	     */
	    LongPrototype.toBytes = function(le) {
	        return le ? this.toBytesLE() : this.toBytesBE();
	    }

	    /**
	     * Converts this Long to its little endian byte representation.
	     * @returns {!Array.<number>} Little endian byte representation
	     */
	    LongPrototype.toBytesLE = function() {
	        var hi = this.high,
	            lo = this.low;
	        return [
	             lo         & 0xff,
	            (lo >>>  8) & 0xff,
	            (lo >>> 16) & 0xff,
	            (lo >>> 24) & 0xff,
	             hi         & 0xff,
	            (hi >>>  8) & 0xff,
	            (hi >>> 16) & 0xff,
	            (hi >>> 24) & 0xff
	        ];
	    }

	    /**
	     * Converts this Long to its big endian byte representation.
	     * @returns {!Array.<number>} Big endian byte representation
	     */
	    LongPrototype.toBytesBE = function() {
	        var hi = this.high,
	            lo = this.low;
	        return [
	            (hi >>> 24) & 0xff,
	            (hi >>> 16) & 0xff,
	            (hi >>>  8) & 0xff,
	             hi         & 0xff,
	            (lo >>> 24) & 0xff,
	            (lo >>> 16) & 0xff,
	            (lo >>>  8) & 0xff,
	             lo         & 0xff
	        ];
	    }

	    return Long;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }
/******/ ]);