interface ModelContext {
  registerTool(tool: {
    name: string;
    description: string;
    inputSchema: { type: string; properties: Record<string, never>; additionalProperties: boolean };
    annotations: { readOnlyHint: boolean };
    execute: () => { content: { type: string; text: string }[] };
  }): unknown;
}
interface Document {
  modelContext?: ModelContext;
}
interface Navigator {
  modelContext?: ModelContext;
}
