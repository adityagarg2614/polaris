import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { handler } from "next/dist/build/templates/app-page";

export const create = mutation({
    args:{
        name: v.string(),
    },
    handler: async (ctx,args) => {
        await ctx.db.insert("projects",{
            name: args.name,
            ownerId:"123"
        })
    }
});

export const get =  query({
    args:{},
    handler:async (ctx)=>{
       return await ctx.db.query("projects").collect();
    },
})