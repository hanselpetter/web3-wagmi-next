import OpenAI from "openai";

const openaiApiKey: string | undefined = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

const openaiAPI = new OpenAI({
  apiKey: openaiApiKey,
  dangerouslyAllowBrowser: true,
});

interface TextProps {
  prompt: string;
  topic?: string;
}

export const generateText = async ({
  prompt,
  topic,
}: {
  prompt: string;
  topic?: string;
}) => {
  try {
    const completion = await openaiAPI.chat.completions.create({
      messages: [
        { role: "system", content: topic ? topic : "" },
        {
          role: "user",
          content: prompt,
        },
      ],

      model: "gpt-3.5-turbo",
    });

    return completion.choices[0].message.content;
  } catch (error: any) {
    // Specify the type of 'error' as 'any'
    // Handle OpenAI API errors
    console.log(error);
  }
};
