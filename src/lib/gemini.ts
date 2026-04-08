import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export interface ApplicationData {
  name: string;
  email: string;
  linkedin: string;
  contactInfo: string;
  companyUrl: string;
  goals: string;
}

export interface EvaluationResult {
  status: "selected" | "rejected";
  reason: string;
  feedback: string;
}

export async function evaluateApplication(data: ApplicationData): Promise<EvaluationResult> {
  const prompt = `
    Evaluate this sales company application based on the following criteria:
    - Professionalism of the goals.
    - Clarity of what they want to accomplish.
    - Alignment with a high-performance sales environment.
    
    Application Details:
    Name: ${data.name}
    Email: ${data.email}
    LinkedIn: ${data.linkedin}
    Company URL: ${data.companyUrl}
    Goals: ${data.goals}
    
    Return a JSON object with:
    - status: "selected" or "rejected"
    - reason: A brief internal reason for the decision.
    - feedback: A polite message to the applicant.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            status: { type: Type.STRING, enum: ["selected", "rejected"] },
            reason: { type: Type.STRING },
            feedback: { type: Type.STRING },
          },
          required: ["status", "reason", "feedback"],
        },
      },
    });

    const result = JSON.parse(response.text || "{}");
    return result as EvaluationResult;
  } catch (error) {
    console.error("AI Evaluation Error:", error);
    return {
      status: "rejected",
      reason: "Error during evaluation process.",
      feedback: "We encountered an issue processing your application. Please try again later.",
    };
  }
}
