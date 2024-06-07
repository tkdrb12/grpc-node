var parseArgs = require('minimist');
var messages = require('./hello_grpc_pb');
var services = require('./hello_grpc_grpc_pb');
var grpc = require('@grpc/grpc-js');

function main() {
  const client = new services.MyServiceClient(
    'localhost:50051',
    grpc.credentials.createInsecure()
  );

  const request = new messages.MyNumber();
  request.setValue(4);

  client.myFunction(request, function (err, response) {
    console.log(response.getValue());
  });
}

main();
