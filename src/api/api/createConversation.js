import { TAVUS_API_KEY } from "@/config";
import { API_BASE_URL } from "./constantsKey";

/**
 * Creates a new conversation with the specified persona.
 *
 * This function sends a POST request to the Tavus API to create a conversation
 * using the given persona ID. It includes the API key in the request headers
 * and constructs the request body with the persona ID, a callback URL, a replica ID,
 * and additional properties to enable transcription.
 *
 * @param {Object} personaId - An object containing persona details.
 * @param {string} personaId.apiKey - The API key for authentication.
 * @param {string} personaId.persona_id - The ID of the persona to be used in the conversation.
 * @returns {Promise<Object>} - A promise that resolves to the response data from the API.
 * @throws {Error} - Throws an error if the request fails or the response status is not ok.
 */

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
          `${API_BASE_URL}/persona/webhook`,
        replica_id : personaId?.default_replica_id ?? "r8bfa69a42",
        properties: {
          enable_transcription: true
        },
      }),
      cache: 'no-store'
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
