import { business, webmcpTools } from "../data/business";

const modelContext = document.modelContext ?? navigator.modelContext;
if (modelContext) {
  const texts: Record<(typeof webmcpTools)[number]["name"], string> = {
    get_services: business.services
      .map((service) => `${service.name}: ${service.description}`)
      .join("\n"),
    get_contact: [
      business.name,
      business.founder,
      business.locality,
      `Y-tunnus: ${business.businessId}`,
      `Sähköposti: ${business.email}`,
    ].join("\n"),
  };
  for (const tool of webmcpTools) {
    try {
      const registration = modelContext.registerTool({
        ...tool,
        annotations: { readOnlyHint: true },
        execute: () => ({ content: [{ type: "text", text: texts[tool.name] }] }),
      });
      void Promise.resolve(registration).catch(() => {});
    } catch {
      /* Unsupported or unavailable tool registration is silent. */
    }
  }
}
