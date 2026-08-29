import { json } from "@tanstack/react-start";

interface ContactFormData {
  name: string;
  email: string;
  type: string;
  budget: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("type", data.type);
    formData.append("budget", data.budget);
    formData.append("message", data.message);

    const response = await fetch("https://formspree.io/f/xkjnnldl", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Formspree error: ${response.statusText}`);
    }

    return json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    throw new Error("Failed to send message. Please try again.");
  }
}
