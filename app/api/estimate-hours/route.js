// app/api/estimate-hours/route.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(req) {
  try {
    const { description, projectType } = await req.json();

    if (!description) {
      return Response.json({ hours: null, error: "No description provided" });
    }

    const prompt = `You are an expert project estimator. Estimate total hours required for this project in numbers only (like 40 or 120). 
    Project type: ${projectType || "General"}.
    Project Description: ${description}
    Return ONLY a number, no text, no explanation.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();

    // Extract only digits in case AI returns something like "40 hours"
    const matched = text.match(/\d+/);
    const hours = matched ? parseInt(matched[0]) : null;

    return Response.json({ hours });
  } catch (error) {
    console.error("Gemini error:", error);
    return Response.json({ hours: null, error: error.message });
  }
}
