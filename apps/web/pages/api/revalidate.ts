import { isValidRequest } from "@sanity/webhook";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    message: string;
};

// const secret = process.env.SANITY_WEBHOOK_SECRET ?? "";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== "POST") {
        console.error("Must be a POST request");
        return res.status(401).json({ message: "Must be a POST request" });
    }

    // if (!isValidRequest(req, secret)) {
    //     res.status(401).json({ message: "Invalid signature" });
    //     return;
    // }

    try {
        const {
            body: { type },
        } = req;

        switch (type) {
            case "team":
                await res.revalidate(`/about-us`);
                return res.json({
                    message: `Revalidated ${type}`,
                });
            case "contact_us":
                await res.revalidate(`/contact-us`);
                return res.json({
                    message: `Revalidated ${type}`,
                });
        }

        return res.json({ message: "No managed type" });
    } catch (err) {
        return res.status(500).send({ message: "Error revalidating" });
    }
}
