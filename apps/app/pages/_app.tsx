import "../styles/custom.scss";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { useEffect } from "react";
import { NextPage } from "next/types";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

import * as ga from "../lib/ga";
import seoConfig from "../next-seo.config";
import Head from "next/head";
import { MetadataProvider } from "context/metadata";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            ga.pageview(url);
        };
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on("routeChangeComplete", handleRouteChange);

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    useEffect(() => {
        let handleRouteChange: () => void;
        import("react-facebook-pixel")
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init(
                    process.env.NEXT_PUBLIC_FACEBOOK_PIXEL as string
                );
                ReactPixel.pageView();
                handleRouteChange = () => {
                    ReactPixel.pageView();
                };
                //When the component is mounted, subscribe to router changes
                //and log those page views
                router.events.on("routeChangeComplete", handleRouteChange);
            });

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        import("bootstrap/dist/js/bootstrap.bundle.min");
        document?.querySelector("html")?.classList.add("h-100");
        document?.querySelector("body")?.classList.add("h-100");
        document
            ?.querySelector("#__next")
            ?.classList.add("d-flex", "flex-column", "h-100");
    }, []);
    const getLayout = Component.getLayout || ((page: ReactNode) => page);
    return (
        <MetadataProvider>
            {getLayout(
                <>
                    <DefaultSeo {...seoConfig} />
                    <Head>
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1"
                        />

                        <meta
                            name="facebook-domain-verification"
                            content="f7wvnjfrr0ucfv3cddiozpv9pzaj14"
                        />
                    </Head>
                    <Component {...pageProps} />
                </>
            )}
        </MetadataProvider>
    );
};

export default MyApp;
