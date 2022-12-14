import { registerAuthorForm } from "models/forms";
import type { NextApiRequest, NextApiResponse } from "next";
import { appendToSheet } from "services/gSheet";
import { sendRegisterConfirmation } from "services/mailer";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).send({ message: "Only POST requests allowed" });
    }

    const data = req.body as registerAuthorForm;

    try {
        const body = [data.name, data.authorName, data.email];

        await appendToSheet("REGISTER_AUTHOR", body);

        await sendRegisterConfirmation({ name: data.name, email: data.email });

        return res.status(201).end();
    } catch (error: any) {
        let message: string;
        if (error instanceof Error) message = error.message;
        else message = String(error);

        let code: number;
        if ("code" in error) code = error.code;
        else code = 500;
        return res.status(code).send({ message });
    }
}
