// tests/sendMessage.test.js
const { sendMessage } = require('../path/to/sendMessage');
const { Message } = require('../path/to/Message'); // Assuming Message is imported as a module or class

describe('sendMessage function', () => {
  // Mocking req and res objects
  const req = {
    body: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      message: 'Test message',
    },
  };

  let res;
  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  test('should send message successfully', async () => {
    // Mocking Message.create method
    Message.create = jest.fn().mockResolvedValueOnce({});

    await sendMessage(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Message sent successfully',
    });
  });

  test('should handle missing form fields', async () => {
    const invalidReq = {
      body: {
        // Simulating missing fields
        // firstName: 'John',
        // lastName: 'Doe',
        // email: 'john.doe@example.com',
        // phone: '1234567890',
        message: 'Test message',
      },
    };

    const next = jest.fn(); // Mocking next function

    await sendMessage(invalidReq, res, next);

    expect(next).toHaveBeenCalledWith(expect.any(Error));
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  test('should handle message creation failure', async () => {
    const errorMessage = 'Database connection error'; // Simulated error message
    Message.create = jest.fn().mockRejectedValueOnce(new Error(errorMessage));

    await sendMessage(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'Failed to send message',
      error: errorMessage,
    });
  });
});
