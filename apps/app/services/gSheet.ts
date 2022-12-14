import { google } from "googleapis";

export const appendToSheet = async (
    type:
        | "VENDOR"
        | "AUTHOR"
        | "REGISTER"
        | "REGISTER_AUTHOR"
        | "REGISTER_VOLUNTEER_EOI",
    data: (string | boolean)[]
) => {
    const google_key = process.env.GOOGLE_PRIVATE_KEY;
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            // eslint-disable-next-line prettier/prettier
            private_key: google_key?.replace(/\\n/g, "\n"),
        },
        scopes: [
            "https://www.googleapis.com/auth/drive",
            "https://www.googleapis.com/auth/drive.file",
            "https://www.googleapis.com/auth/spreadsheets",
        ],
    });

    const sheets = google.sheets({
        auth,
        version: "v4",
    });

    let spreadsheetId: string | undefined;
    let range: string;

    switch (type) {
        case "AUTHOR":
            spreadsheetId = process.env.GOOGLE_SHEET_AUTHOR_ID;
            range = "A1:T1";
            break;
        case "VENDOR":
            spreadsheetId = process.env.GOOGLE_SHEET_VENDOR_ID;
            range = "A1:Q1";
            break;
        case "REGISTER":
            spreadsheetId = process.env.GOOGLE_SHEET_REGISTER_ID;
            range = "A1:B1";
            break;
        case "REGISTER_AUTHOR":
            spreadsheetId = process.env.GOOGLE_SHEET_REGISTER_AUTHOR_ID;
            range = "A1:B1";
            break;
        case "REGISTER_VOLUNTEER_EOI":
            spreadsheetId = process.env.GOOGLE_SHEET_REGISTER_VOLUNTEER_EOI_ID;
            range = "A1:B1";
            break;
    }

    const response = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values: [data],
        },
    });

    return response.data;
};
