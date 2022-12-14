import Head from "next/head";
import { ReactElement, useEffect } from "react";
import Image from "next/image";

import Layout from "@components/Layout";
import Header from "@components/Header";

import errorArt from "../public/error_art.png";
import { useMetadata } from "context/metadata";
import { NextSeo } from "next-seo";

const Custom500 = () => {
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
                description="Something went wrong."
                nofollow={true}
                noindex={true}
            />
            <div className="container">
                <Header
                    title="Oops!"
                    subtitle="Something went wrong. Please check back later."
                />
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

export default Custom500;

Custom500.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
