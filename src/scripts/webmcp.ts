import { business, fullPriceText, priceSummary, webmcpTools } from "../data/business";
const modelContext = document.modelContext ?? navigator.modelContext;
if (modelContext) {
  const texts: Record<(typeof webmcpTools)[number]["name"], string> = {
    get_services: `${business.services.map((s) => `${s.name}: ${s.description}`).join("\n")}\n${priceSummary}`,
    get_prices: fullPriceText,
    get_contact: [
      business.name,
      business.founder,
      business.locality,
      `Y-tunnus: ${business.businessId}`,
      `Sähköposti: ${business.email}`,
      `Instagram: ${business.instagram}`,
      `Facebook: ${business.facebook}`,
    ].join("\n"),
  };
  for (const tool of webmcpTools) {
    try {
      const result = modelContext.registerTool({
        ...tool,
        annotations: { readOnlyHint: true },
        execute: () => ({ content: [{ type: "text", text: texts[tool.name] }] }),
      });
      void Promise.resolve(result).catch(() => {});
    } catch {
      /* Unsupported WebMCP is silent. */
    }
  }
}
