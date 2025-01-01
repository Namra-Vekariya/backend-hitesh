import { timeStamp } from "console";
import { channel } from "diagnostics_channel";
import { mongoose, schema } from "mongoose";
const subscriptionSchema = new schema(
    {
        subscriber: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        channel: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timeStamp: true }
);
export const Subscription = mongoose.model("Subscription", subcriptionSchema);
