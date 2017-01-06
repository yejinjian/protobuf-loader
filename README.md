## 安装

```
    npm i --save-dev protobuf-loader
```

## 使用说明

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

### webpack config
```javascript
module.exports = {
  module: {
    loaders: [
      {
        test: /\.proto$/,
        loader: "protobuf-loader"
      }
    ]
  }
};
```
支持的参数配置以及默认值

``` javascript
    var defaultOpts = {
        create: false,   // create 方法
        encode: true,  // encode 方法
        decode: true,  // decode 方法
        verify: false,  // verify 方法
        convert: false,  // convert 方法
        delimited: true, // encodeDelimited 方法
        beautify: false, // 是否美化生成的代码 默认false
        comments: true, // 注释 uglify会删除所以打包是默认保留
        wrap:"commonjs", // 默认使用了commonjs
        target:'static'  // 默认编译为js, 如果传json 支持解析为json
    };
```
使用方法

```javascript

var proto = require('./test.proto');
//get message
var Array_msg = proto.js.Array;

var tt = new Array_msg({values: ['1','2','3']});
console.log(tt.values);

//pb encode
var buffer = Array_msg.encode(tt).finish();
console.log(buffer);

//pb decode
var ret = Array_msg.decode(buffer).values;
console.log(ret);


//...
```
该版本支持protobuf.js 6.4.4+
当使用static编译js时 依赖的 protobuf/runtime 该包会小很多
如果使用编译为json时 需要依赖 protobuf 包会变大，当使用pb包很多时 json会推荐。

##感谢
* 这个包是借鉴了 [proto-loader](https://github.com/brianchirls/proto-loader) 特别感谢
* 感谢[Daniel Wirtz](https://github.com/dcodeIO) 的解惑
