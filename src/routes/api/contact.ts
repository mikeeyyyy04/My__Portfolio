import { json } from "@tanstack/react-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/contact")({
  methods: ["POST"],
  async handler({ request }) {
    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, { status: 405 });
    }

    try {
      const formData = await request.formData();
      
      const response = await fetch("https://formspree.io/f/xkjnnldl", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        return json(
          { error: `Formspree error: ${response.statusText}` },
          { status: 500 }
        );
      }

      return json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      return json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }
  },
});
