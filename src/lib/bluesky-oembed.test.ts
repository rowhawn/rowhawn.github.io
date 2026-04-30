import { describe, expect, it } from "vitest";
import { parseBlueskyOembedJson } from "./bluesky-oembed";

describe("parseBlueskyOembedJson", () => {
  it("returns html when present", () => {
    const r = parseBlueskyOembedJson(JSON.stringify({ html: "<blockquote>x</blockquote>" }));
    expect(r).toEqual({ html: "<blockquote>x</blockquote>" });
  });

  it("returns null for empty html", () => {
    expect(parseBlueskyOembedJson(JSON.stringify({ html: "" }))).toBeNull();
    expect(parseBlueskyOembedJson(JSON.stringify({}))).toBeNull();
  });

  it("returns null for invalid JSON", () => {
    expect(parseBlueskyOembedJson("not json")).toBeNull();
  });
});
