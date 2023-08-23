import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPEN_API_KEY,
    dangerouslyAllowBrowser: true,
});

export const getResult = async (question: string, cb: any) => {
    openai.chat.completions
        .create({
            messages: [{ role: "user", content: question }],
            model: "gpt-3.5-turbo",
        })
        .then((result) => {
            cb(result.choices[0].message.content, null);
        })
        .catch((error) => {
            cb(null, error);
        });
};
