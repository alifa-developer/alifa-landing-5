export const fetchWithRetry = async (url: string, options: RequestInit, retries = 2): Promise<Response> => {
  try {
    return await fetch(url, options);
  } catch (err: any) {
    if (retries > 0 && err.message === "Failed to fetch") {
      console.warn("Retrying due to network issue...");
      return fetchWithRetry(url, options, retries - 1);
    }
    throw err;
  }
};
