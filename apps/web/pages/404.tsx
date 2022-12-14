import Head from "next/head";
import { ReactElement, useEffect } from "react";
import Image from "next/image";

import Layout from "@components/Layout";
import Header from "@components/Header";

import errorArt from "../public/error_art.png";
import { useMetadata } from "context/metadata";
import { NextSeo } from "next-seo";

const Custom404 = () => {
    const { setMetadata } = useMetadata();
    useEffect(() => {
        setMetadata({
            title: "Have you heard about Book Fair Australia?",
            content: "I just discovered Book Fair Australia, check it out",
            useHome: true,
        });
    }, [setMetadata]);
    return (
        <>
            <NextSeo
                title="Oops!"
                description="We couldn't find this page."
                nofollow={true}
                noindex={true}
            />
            <div className="container">
                <Header title="Oops!" subtitle="We couldn't find this page." />
                <div className="my-4 d-flex justify-content-center align-items-center">
                    <Image
                        src={errorArt}
                        alt=""
                        width="250"
                        height="200"
                        placeholder="blur"
                    />
                </div>
            </div>
        </>
    );
};

export default Custom404;

Custom404.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
