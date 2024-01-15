import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const getEvents = query({
  handler: async (ctx) => {
    const events = await ctx.db.query('events').collect();

    return events;
  },
});

export const createEvent = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    location: v.object({
      city: v.string(),
      state: v.string(),
    }),
    time: v.string(),
    date: v.string(),
  },
  handler: async (ctx, args) => {
    const newEventId = await ctx.db.insert('events', {
      name: args.name,
      description: args.description,
      location: args.location,
      date: args.date,
      time: args.time,
    });

    return newEventId;
  },
});

export const deleteEvent = mutation({
  args: { id: v.id('events') },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
