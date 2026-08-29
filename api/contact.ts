import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const formData = new FormData();
    
    // Add form fields to FormData
    formData.append("name", request.body.name);
    formData.append("email", request.body.email);
    formData.append("type", request.body.type);
    formData.append("budget", request.body.budget);
    formData.append("message", request.body.message);

    const formspreeResponse = await fetch("https://formspree.io/f/xkjnnldl", {
      method: "POST",
      body: formData,
    });

    if (!formspreeResponse.ok) {
      console.error("Formspree error:", formspreeResponse.status, formspreeResponse.statusText);
      return response.status(500).json({
        error: "Failed to send message to Formspree",
      });
    }

    return response.status(200).json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return response.status(500).json({
      error: "Failed to process form submission",
    });
  }
}
