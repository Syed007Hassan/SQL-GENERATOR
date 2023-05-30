import { Configuration, OpenAIApi } from "openai";
import { Request, Response } from "express";

const apiKey: string = process.env.OPEN_API_KEY;

const configuration = new Configuration({
  apiKey: apiKey,
});

const openapi = new OpenAIApi(configuration);

const getCompletions = async (req: Request, res: Response) => {
  try {
    console.log(req.body.message);
    const completion = await openapi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: "Give a SQL statement query for: " + req.body.message + "\n",
        },
      ],
    });

    res.status(200).json({ message: completion.data.choices[0].message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getCompletions };
