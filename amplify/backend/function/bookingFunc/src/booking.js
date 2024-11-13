/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient();
const tableName = process.env.tableName;

function getRandomPrice() {
  return (Math.random() * (500 - 100) + 100).toFixed(2); // generates price between 100 and 500, rounded to 2 decimals
}

// Function to generate a random seat number in format like A1, B12, C15
function getRandomSeat() {
  const seats = ["A", "B", "C", "D", "E"]; // seat sections
  const row = Math.floor(Math.random() * 30) + 1; // random row between 1 and 30
  const seat = seats[Math.floor(Math.random() * seats.length)]; // randomly select a section
  return `${seat}${row}`;
}

// Function to generate a random terminal
function getRandomTerminal() {
  const terminals = ["Terminal 1", "Terminal 2", "Terminal 3"]; // list of terminals
  return terminals[Math.floor(Math.random() * terminals.length)];
}

// Function to generate a random gate, like A1, B15, etc.
function getRandomGate() {
  const gates = ["A", "B", "C", "D", "E"]; // gate sections
  const gate = Math.floor(Math.random() * 20) + 1; // gate number between 1 and 20
  const section = gates[Math.floor(Math.random() * gates.length)]; // randomly select section
  return `${section}${gate}`;
}

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  try {
    // Parse form data from the event body
    const formData = JSON.parse(event.body);

    formData.price = getRandomPrice();
    formData.seat = getRandomSeat();
    formData.terminal = getRandomTerminal();
    formData.gate = getRandomGate();

    // Create DynamoDB command parameters
    const params = {
      TableName: tableName,
      Item: {
        userId: { S: formData.userId },
        // Map each property in formData to DynamoDB's format
        details: { S: JSON.stringify(formData) },
      },
    };

    // Use the PutItemCommand to insert the item into DynamoDB
    await client.send(new PutItemCommand(params));

    // Return success response
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify({
        message: "Booking saved successfully",
      }),
    };
  } catch (error) {
    console.error(error);

    // Return error response
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
    };
  }
};
