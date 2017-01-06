'use strict';

var ProtoBuf = require('protobufjs');
var staticTarget = require('protobufjs/cli/targets/static-module');
var jsonTarget = require('protobufjs/cli/targets/json-module'); //6.4.4 版本 作者修复了这个问题
var loaderUtils = require('loader-utils');

module.exports = function (source) {

  var defaultOpts = {
    create: false,   // create 方法
    encode: true,  // encode 方法
    decode: true,  // decode 方法
    verify: false,  // verify 方法
    convert: false,  // convert 方法
    delimited: true, // encodeDelimited 方法
    beautify: false, // 是否美化生成的代码 默认false
    comments: true, // 注释 uglify会删除所以打包是默认保留
    wrap:"commonjs" // 默认使用了commonjs
  };

	var options = Object.assign(defaultOpts, loaderUtils.parseQuery(this.query));
	var resource = this.resourcePath;
	var root = new ProtoBuf.Root();
  var callback = this.async();
  var targetMethod = staticTarget;
  if (this.cacheable()) {
    this.cacheable();
	}

  try {
		root.loadSync(resource, {
			"keepCase": options["keep-case"] || false
		}); // sync is deterministic while async is not
	} catch (err) {
    callback(err);
		throw err;
	}

	//json 的解析
	if(options.target === 'json') {
    targetMethod = jsonTarget;
  }

  targetMethod(root, options, function (error, output) {
    callback(error, output);
  });
};
