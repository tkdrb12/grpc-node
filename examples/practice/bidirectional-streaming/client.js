const grpc = require('@grpc/grpc-js');
const { Message } = require('./bidirectional_pb');
const { BidirectionalClient } = require('./bidirectional_grpc_pb');

function makeMessage(message) {
  const msg = new Message();
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

  // df
  let index = 0;
  const intervalId = setInterval(() => {
    if (index < messages.length) {
      console.log(`[client to server] ${messages[index].getMessage()}`);
      call.write(messages[index]);
      index++;
    } else {
      clearInterval(intervalId);
      call.end();
    }
  }, 500);

  call.on('data', (response) => {
    console.log(`[server to client] ${response.getMessage()}`);
  });

  call.on('end', () => {
    console.log('Stream ended.');
  });

  call.on('error', (err) => {
    console.error('Stream error:', err);
  });
}

function sendMessage(client) {
  const call = client.getServerResponse((error, response) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log(`[server to client] ${response.getMessage()}`);
    }
  });

  generateMessages(call);
}

function main() {
  const client = new BidirectionalClient(
    'localhost:50051',
    grpc.credentials.createInsecure()
  );

  sendMessage(client);
}

main();
