import initializeBasicAuth from "nextjs-basic-auth";
const users = [
    {
        user: "exhibitor",
        password: process.env.NEXT_PUBLIC_EXHIBITOR_PASSWORD as string,
    },
];
export const basicAuthCheck = initializeBasicAuth({
    users: users,
});
