
import { GoogleGenAI } from "@google/genai";

// Fix: Per coding guidelines, the API key must be read directly from
// `process.env.API_KEY` and assumed to be present. All checks for the API key
// and the intermediate `API_KEY` variable have been removed.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const askGemini = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            systemInstruction: "Você é um especialista na floresta amazônica. Seu objetivo é fornecer respostas concisas, informativas e envolventes sobre sua ecologia, biodiversidade, as ameaças que enfrenta, como o desmatamento, e os esforços de conservação. Responda sempre em português do Brasil.",
            temperature: 0.7,
            topP: 0.9,
            topK: 40,
        }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error("Failed to fetch response from Gemini.");
  }
};
