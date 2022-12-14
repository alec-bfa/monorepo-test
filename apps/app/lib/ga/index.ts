export const pageview = (url: string) => {
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string, {
        page_path: url,
    });
};

// log specific events happening.
export const event = ({
    action,
    params,
}: {
    action: string;
    params?:
        | Gtag.CustomParams
        | Gtag.ControlParams
        | Gtag.EventParams
        | undefined;
}) => {
    window.gtag("event", action, params);
};
