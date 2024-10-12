import { ZodTypeAny, z } from "zod";

export function emptyAsUndefined<I extends ZodTypeAny>(schema: I) {
    return z.preprocess(arg => {
        if (typeof arg === "string" && arg === "") {
            return undefined;
        } else {
            return arg;
        }
    }, schema);
}
