// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var hello_grpc_pb = require('./hello_grpc_pb.js');

function serialize_MyNumber(arg) {
  if (!(arg instanceof hello_grpc_pb.MyNumber)) {
    throw new Error('Expected argument of type MyNumber');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MyNumber(buffer_arg) {
  return hello_grpc_pb.MyNumber.deserializeBinary(new Uint8Array(buffer_arg));
}


var MyServiceService = exports.MyServiceService = {
  myFunction: {
    path: '/MyService/MyFunction',
    requestStream: false,
    responseStream: false,
    requestType: hello_grpc_pb.MyNumber,
    responseType: hello_grpc_pb.MyNumber,
    requestSerialize: serialize_MyNumber,
    requestDeserialize: deserialize_MyNumber,
    responseSerialize: serialize_MyNumber,
    responseDeserialize: deserialize_MyNumber,
  },
};

exports.MyServiceClient = grpc.makeGenericClientConstructor(MyServiceService);
