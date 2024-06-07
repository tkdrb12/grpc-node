var messages = require('./hello_grpc_pb');
var services = require('./hello_grpc_grpc_pb');

var grpc = require('@grpc/grpc-js');

function main() {
  const target = 'localhost:50051';
  const client = new services.MyServiceClient(
    target,
    grpc.credentials.createInsecure()
  );

  const request = new messages.MyNumber();
  request.setValue(4);

  client.myFunction(request, function (err, response) {
    console.log(response.getValue());
  });
}

main();
