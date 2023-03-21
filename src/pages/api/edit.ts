import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi, CreateCompletionResponseChoicesInner } from "openai";

type Response = {
  response: CreateCompletionResponseChoicesInner["text"];
};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// https://platform.openai.com/docs/api-reference/edits
export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  try {
    const response = await openai.createEdit({
      model: "text-davinci-edit-001",
      input: "What day of the wek is it?",
      instruction: "Fix the spelling mistakes",
    });
    res.status(200).json({ response: response.data.choices[0].text ? response.data.choices[0].text.replace(/(\r\n|\n|\r)/gm, "") : "error" });
  } catch (error) {
    console.error("/api/edit", error);
    res.status(500).json({ response: "error" });
  }
}
