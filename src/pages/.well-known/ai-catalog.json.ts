import type { APIRoute } from "astro";
import { aiCatalog } from "../../data/business";

export const prerender = true;
export const GET: APIRoute = () =>
  new Response(JSON.stringify(aiCatalog, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
