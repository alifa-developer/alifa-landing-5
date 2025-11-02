import { Translate } from "@google-cloud/translate/build/src/v2"

// Initialize the Google Translate API client
const translate = new Translate({
  projectId: "alifa-435906",
  keyFilename: "src/google-credentials/Alifa-google-translate.json",
})

export async function translateText(text: string, target = "en") {
  try {
    const [translation] = await translate.translate(text, target)
    return translation
  } catch (error) {
    console.error("Error translating text:", error)
    throw error
  }
}
