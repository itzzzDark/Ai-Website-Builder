import { mutation } from "./_generated/server";

export const CreateWorkspace = mutation(async (ctx, args) => {
  const { name, description } = args;
  return await ctx.db.insert("workspaces", {
    name,
    description,
    createdAt: Date.now(),
  });
});
