
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIAssistantResponse = async (userPrompt: string, history: {role: string, content: string}[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: `You are 'The Vault Intelligence', an AI assistant for a high-tech digital library focused on Aerospace, AI, Recycling, Solar Energy, Programming, and Life Helper topics. 
        Keep your answers technical, concise, and professional. 
        A founder who values deep technical insight is using this app. 
        If asked about the library, mention we have curated resources in these core areas.`,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I apologize, but I am unable to process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Vault Intelligence is currently offline. Please check your neural link.";
  }
};
