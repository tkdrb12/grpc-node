var parseArgs = require('minimist');
var messages = require('./hello_grpc_pb');
var services = require('./hello_grpc_grpc_pb');
var grpc = require('@grpc/grpc-js');

function main() {
  const client = new services.MyServiceClient(
    'localhost:50051',
    grpc.credentials.createInsecure()
  );

  const value = 4;
  const request = new messages.MyNumber();
  request.setValue(value);
  console.log(`전송된 값: ${value}`);

  client.myFunction(request, function (err, response) {
    console.log(`계산 결과: ${response.getValue()}`);
  });
}

main();
