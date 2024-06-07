var messages = require('./hello_grpc_pb');
var services = require('./hello_grpc_grpc_pb');
var grpc = require('@grpc/grpc-js');
const { square } = require('./my_func');

function myFunction(call, callback) {
  var reply = new messages.MyNumber();
  const replyValue = square(call.request.getValue());
  reply.setValue(replyValue);
  callback(null, reply);
}

function main() {
  var server = new grpc.Server();
  server.addService(services.MyServiceService, { myFunction });
  server.bindAsync(
    '0.0.0.0:50051',
    grpc.ServerCredentials.createInsecure(),
    (_, port) => {
      console.log(`Listening on port (${port})`);
    }
  );
}

main();
