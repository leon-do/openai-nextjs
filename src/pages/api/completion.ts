import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi, CreateCompletionResponseChoicesInner } from "openai";

type Response = {
  response: CreateCompletionResponseChoicesInner["text"];
};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// https://platform.openai.com/docs/api-reference/completions
export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Say this is a test",
      temperature: 0,
      max_tokens: 7,
    });
    const text = response.data.choices[0].text ? response.data.choices[0].text.replace(/(\r\n|\n|\r)/gm, "") : "error";
    res.status(200).json({ response: text });
  } catch (error) {
    console.error("/api/completion", error);
    res.status(500).json({ response: "error" });
  }
}
