const grpc = require('@grpc/grpc-js');
const messages = require('./serverstreaming_pb');
const services = require('./serverstreaming_grpc_pb');

function recvMessage(client) {
  const request = new messages.Number();
  request.setValue(5);

  const call = client.getServerResponse(request);

  call.on('data', (response) => {
    console.log(`[server to client] ${response.getMessage()}`);
  });

  call.on('end', () => {
    console.log('Streaming ended!!');
  });

  call.on('error', (error) => {
    console.error('something was wrong!', error);
  });
}

function main() {
  const client = new services.ServerStreamingClient(
    'localhost:50051',
    grpc.credentials.createInsecure()
  );
  recvMessage(client);
}

main();
