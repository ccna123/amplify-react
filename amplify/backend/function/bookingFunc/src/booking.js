/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const {
  getRandomSeat,
  getRandomTerminal,
  getRandomGate,
  getRandomPrice,
} = require("./helper/addExtraInfo");

const client = new DynamoDBClient();
let tableName = process.env.tableName;
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + "-" + process.env.ENV;
}

// Function to generate a random seat number in format like A1, B12, C15

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  console.log("Bookinghandler:", tableName);

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
        statusCode: 201,
        data: formData,
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
