const grpc = require('@grpc/grpc-js');
const messages = require('./clientstreaming_pb');
const services = require('./clientstreaming_grpc_pb');

function makeMessage(message) {
  const msg = new messages.Message();
  msg.setMessage(message);
  return msg;
}

function generateMessages(call) {
  const messages = [
    makeMessage('message #1'),
    makeMessage('message #2'),
    makeMessage('message #3'),
    makeMessage('message #4'),
    makeMessage('message #5'),
  ];

  messages.forEach((msg) => {
    console.log(`[client to server] ${msg.getMessage()}`);
    call.write(msg);
  });

  call.end();
}

function sendMessage(client) {
  const call = client.getServerResponse((error, response) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log(`[server to client] ${response.getValue()}`);
    }
  });

  generateMessages(call);
}

function main() {
  const client = new services.ClientStreamingClient(
    'localhost:50051',
    grpc.credentials.createInsecure()
  );

  sendMessage(client);
}

main();
