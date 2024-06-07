const grpc = require('@grpc/grpc-js');
const messages = require('./clientstreaming_pb');
const { ClientStreamingService } = require('./clientstreaming_grpc_pb');

const getServerResponse = (call, callback) => {
  console.log('Server processing gRPC client-streaming.');

  let count = 0;
  call.on('data', () => {
    count++;
  });

  call.on('end', () => {
    var reply = new messages.Number();
    reply.setValue(count);

    callback(null, reply);
  });
};

function main() {
  // Create a new gRPC server
  const server = new grpc.Server();

  server.addService(ClientStreamingService, { getServerResponse });
  const port = '0.0.0.0:50051';

  server.bindAsync(
    port,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error('Error starting server:', err);
        return;
      }
      console.log(`Server running at ${port}`);
      server.start();
    }
  );
}

main();
