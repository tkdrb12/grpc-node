var parseArgs = require('minimist');
var messages = require('./hello_grpc_pb');
var services = require('./hello_grpc_grpc_pb');

var grpc = require('@grpc/grpc-js');

function main() {
  const target = 'localhost:50051';

  var client = new services.MyServiceClient(
    target,
    grpc.credentials.createInsecure()
  );
  var request = new messages.MyNumber();
  request.setValue(4);

  client.myFunction(request, function (err, response) {
    console.log(response.getValue());
  });
}

main();
