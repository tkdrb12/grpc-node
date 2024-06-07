// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var bidirectional_pb = require('./bidirectional_pb.js');

function serialize_bidirectional_Message(arg) {
  if (!(arg instanceof bidirectional_pb.Message)) {
    throw new Error('Expected argument of type bidirectional.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bidirectional_Message(buffer_arg) {
  return bidirectional_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}


var BidirectionalService = exports.BidirectionalService = {
  // A Bidirectional streaming RPC.
//
// Accepts a stream of Message sent while a route is being traversed,
getServerResponse: {
    path: '/bidirectional.Bidirectional/GetServerResponse',
    requestStream: true,
    responseStream: true,
    requestType: bidirectional_pb.Message,
    responseType: bidirectional_pb.Message,
    requestSerialize: serialize_bidirectional_Message,
    requestDeserialize: deserialize_bidirectional_Message,
    responseSerialize: serialize_bidirectional_Message,
    responseDeserialize: deserialize_bidirectional_Message,
  },
};

exports.BidirectionalClient = grpc.makeGenericClientConstructor(BidirectionalService);
