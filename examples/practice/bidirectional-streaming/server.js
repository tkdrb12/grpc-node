var { Message } = require('./bidirectional_pb');
const { BidirectionalService } = require('./bidirectional_grpc_pb');
const grpc = require('@grpc/grpc-js');

function makeMessage(message) {
  const msg = new Message();
  msg.setMessage(message);
  return msg;
}

function getServerResponse(call) {
  console.log('Server processing gRPC bidirectional-streaming.');

  let count = 0;
  call.on('data', async (response) => {
    count++;
    console.log(`[server to client] message #${count}`);
    const reply = makeMessage(response.getMessage());
    call.write(reply);
  });

  call.on('end', () => {
    call.end();
  });
}

function main() {
  const server = new grpc.Server();
  server.addService(BidirectionalService, { getServerResponse });
  const port = '0.0.0.0:50051';
  server.bindAsync(port, grpc.ServerCredentials.createInsecure(), (_, port) => {
    console.log(`Server running at ${port}`);
  });
}

main();
