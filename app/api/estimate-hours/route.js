// app/api/estimate-hours/route.js

export async function POST(req) {
  try {
    const { description, projectType } = await req.json();

    if (!description) {
      return Response.json({ hours: null, error: "No description provided" });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return Response.json({
        hours: null,
        error: "Groq API key not configured",
      });
    }

    const prompt = `You are an expert project estimator. Estimate total hours required for this project in numbers only (like 40 or 120). 
    Project type: ${projectType || "General"}.
    Project Description: ${description}
    Return ONLY a number, no text, no explanation.`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content:
                "You are an expert project estimator. Return ONLY a single number representing total hours.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.1,
          max_tokens: 10,
        }),
      },
    );

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(
        `Groq API error: ${response.status} - ${errData?.error?.message || response.statusText}`,
      );
    }

    const data = await response.json();
    const text = data?.choices?.[0]?.message?.content?.trim();

    if (text) {
      const matched = text.match(/\d+/);
      const hours = matched ? parseInt(matched[0]) : null;
      console.log(`Estimation successful with Groq, hours: ${hours}`);
      return Response.json({ hours });
    }

    return Response.json({ hours: null, error: "Could not parse estimation" });
  } catch (error) {
    console.error("Groq error:", error);
    return Response.json({ hours: null, error: error.message });
  }
}
