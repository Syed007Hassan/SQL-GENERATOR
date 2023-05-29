import { Configuration, OpenAIApi } from "openai";
import { Request, Response } from "express";

const apiKey: string = process.env.OPEN_API_KEY;

const configuration = new Configuration({
  apiKey: apiKey,
});

const openapi = new OpenAIApi(configuration);

const getCompletions = async (req: Request, res: Response) => {
  try {
    const completion = await openapi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: "Give SQL statement for: " + req.body.message,
        },
      ],
    });

    res.status(200).json({ message: completion.data.choices[0].message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getCompletions };
