// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var clientstreaming_pb = require('./clientstreaming_pb.js');

function serialize_clientstreaming_Message(arg) {
  if (!(arg instanceof clientstreaming_pb.Message)) {
    throw new Error('Expected argument of type clientstreaming.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientstreaming_Message(buffer_arg) {
  return clientstreaming_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientstreaming_Number(arg) {
  if (!(arg instanceof clientstreaming_pb.Number)) {
    throw new Error('Expected argument of type clientstreaming.Number');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientstreaming_Number(buffer_arg) {
  return clientstreaming_pb.Number.deserializeBinary(new Uint8Array(buffer_arg));
}


var ClientStreamingService = exports.ClientStreamingService = {
  // A Client streaming RPC.
getServerResponse: {
    path: '/clientstreaming.ClientStreaming/GetServerResponse',
    requestStream: true,
    responseStream: false,
    requestType: clientstreaming_pb.Message,
    responseType: clientstreaming_pb.Number,
    requestSerialize: serialize_clientstreaming_Message,
    requestDeserialize: deserialize_clientstreaming_Message,
    responseSerialize: serialize_clientstreaming_Number,
    responseDeserialize: deserialize_clientstreaming_Number,
  },
};

exports.ClientStreamingClient = grpc.makeGenericClientConstructor(ClientStreamingService);
