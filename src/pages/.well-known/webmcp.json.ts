import type { APIRoute } from "astro";
import { business, webmcpTools } from "../../data/business";

export const prerender = true;
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify(
      {
        name: business.name,
        url: business.url,
        version: "1.0.0",
        tools: webmcpTools.map((tool) => ({ ...tool, annotations: { readOnlyHint: true } })),
      },
      null,
      2,
    ),
    { headers: { "Content-Type": "application/json; charset=utf-8" } },
  );
