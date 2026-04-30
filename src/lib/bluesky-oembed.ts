export type BlueskyOembedOk = { html: string };

/** Parse Bluesky oEmbed JSON body; returns null if invalid. */
export function parseBlueskyOembedJson(text: string): BlueskyOembedOk | null {
  try {
    const j = JSON.parse(text) as { html?: unknown };
    if (typeof j.html === "string" && j.html.length > 0) {
      return { html: j.html };
    }
    return null;
  } catch {
    return null;
  }
}

export async function fetchBlueskyOembedHtml(postUrl: string): Promise<string | null> {
  const endpoint = `https://embed.bsky.app/oembed?url=${encodeURIComponent(postUrl)}`;
  let res: Response;
  try {
    res = await fetch(endpoint);
  } catch (e) {
    console.error("[Bluesky oEmbed] fetch failed", { postUrl, error: e });
    return null;
  }
  if (!res.ok) {
    console.warn(`[Bluesky oEmbed] HTTP ${res.status} for ${postUrl}`);
    return null;
  }
  const text = await res.text();
  const parsed = parseBlueskyOembedJson(text);
  if (!parsed) {
    console.warn(`[Bluesky oEmbed] missing or invalid html in response for ${postUrl}`);
    return null;
  }
  return parsed.html;
}
