import { ReactElement, useEffect } from "react";
import Header from "@components/Header";
import Layout from "@components/Layout";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useMetadata } from "context/metadata";

const Success = () => {
    const { setMetadata } = useMetadata();
    useEffect(() => {
        setMetadata({
            title: "Have you heard about Book Fair Australia?",
            content: "I just discovered Book Fair Australia, check it out",
            useHome: false,
        });
    }, [setMetadata]);

    return (
        <>
            <NextSeo title="Failed!" nofollow={true} noindex={true} />
            <div className="container">
                <Header
                    title="Failed"
                    subtitle="Your application failed to be submitted."
                />
                <main
                    className="container"
                    style={{ maxWidth: 900, marginBottom: 48 }}
                >
                    <div className="mb-5 text-center">
                        <p>
                            Something went wrong with your submission. Please{" "}
                            <Link href="/contact-us">contact us</Link> via email
                            to manually apply.
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Success;

Success.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
