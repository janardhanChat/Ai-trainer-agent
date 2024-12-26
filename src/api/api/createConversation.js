import { TAVUS_API_KEY } from "@/config";

export const createConversation = async (personaId) => {
  try {
    const response = await fetch("https://tavusapi.com/v2/conversations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": personaId?.apiKey ?? TAVUS_API_KEY,
      },
      body: JSON.stringify({
        persona_id: personaId?.persona_id ?? "p9a95912",
        callback_url:
          "https://63d2-2405-201-200d-1932-443a-b911-87e7-e29f.ngrok-free.app/api/v1/persona/webhook",
        properties: {
          enable_transcription: true
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
