var { Message } = require('./serverstreaming_pb');
const { ServerStreamingService } = require('./serverstreaming_grpc_pb');

const grpc = require('@grpc/grpc-js');

function makeMessage(message) {
  const msg = new Message();
  msg.setMessage(message);
  return msg;
}

function getServerResponse(call) {
  const messages = [
    makeMessage('message #1'),
    makeMessage('message #2'),
    makeMessage('message #3'),
    makeMessage('message #4'),
    makeMessage('message #5'),
  ];
  console.log(
    `Server processing gRPC server-streaming {${call.request.getValue()}}.`
  );
  messages.forEach((msg) => call.write(msg));
  call.end();
}

function main() {
  const server = new grpc.Server();
  server.addService(ServerStreamingService, { getServerResponse });
  server.bindAsync(
    '0.0.0.0:50051',
    grpc.ServerCredentials.createInsecure(),
    (_, port) => {
      console.log(`Server running at ${port}`);
    }
  );
}

main();
