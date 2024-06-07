// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var serverstreaming_pb = require('./serverstreaming_pb.js');

function serialize_serverstreaming_Message(arg) {
  if (!(arg instanceof serverstreaming_pb.Message)) {
    throw new Error('Expected argument of type serverstreaming.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serverstreaming_Message(buffer_arg) {
  return serverstreaming_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serverstreaming_Number(arg) {
  if (!(arg instanceof serverstreaming_pb.Number)) {
    throw new Error('Expected argument of type serverstreaming.Number');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serverstreaming_Number(buffer_arg) {
  return serverstreaming_pb.Number.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServerStreamingService = exports.ServerStreamingService = {
  // A Client streaming RPC.
getServerResponse: {
    path: '/serverstreaming.ServerStreaming/GetServerResponse',
    requestStream: false,
    responseStream: true,
    requestType: serverstreaming_pb.Number,
    responseType: serverstreaming_pb.Message,
    requestSerialize: serialize_serverstreaming_Number,
    requestDeserialize: deserialize_serverstreaming_Number,
    responseSerialize: serialize_serverstreaming_Message,
    responseDeserialize: deserialize_serverstreaming_Message,
  },
};

exports.ServerStreamingClient = grpc.makeGenericClientConstructor(ServerStreamingService);
