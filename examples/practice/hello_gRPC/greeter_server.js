var messages = require('./hello_grpc_pb');
var services = require('./hello_grpc_grpc_pb');

var grpc = require('@grpc/grpc-js');
const { square } = require('./my_func');

/**
 * Implements the SayHello RPC method.
 */
function myFunction(call, callback) {
  var reply = new messages.MyNumber();
  const replyValue = square(call.request.getValue());
  reply.setValue(replyValue);
  callback(null, reply);
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  var server = new grpc.Server();
  server.addService(services.MyServiceService, { myFunction: myFunction });
  const port = '0.0.0.0:50051';
  server.bindAsync(port, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`Listening on port (${port})`);
  });
}

main();
