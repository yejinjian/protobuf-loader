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