import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  events: defineTable({
    name: v.string(),
    description: v.string(),
    date: v.string(),
    time: v.string(),
    location: v.object({
      city: v.string(),
      state: v.string(),
    }),
  }),
});
