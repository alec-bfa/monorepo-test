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
            <NextSeo title="Registered!" nofollow={true} noindex={true} />
            <div className="container">
                <Header
                    title="Registered"
                    subtitle="Your interest has been successfully registered."
                />
                <main
                    className="container"
                    style={{ maxWidth: 900, marginBottom: 48 }}
                >
                    <div className="mb-5 text-center">
                        <p>
                            You should receive an email from us confirming your
                            interest was successfully registered. If you do not
                            receive this email, please check your spam box and
                            whitelist admin@bookfairaustralia.com for future
                            communications.
                        </p>
                    </div>
                    {/* <div className="px-4 py-5 my-5 text-center">
                        <h1 id="register" className="display-5 fw-bold">
                            We need your help.
                        </h1>
                        <p className="lead mb-4">
                            To make Book Fair Australia as successful as
                            possible, we encourage you to show your support by
                            completing our Reader EOI form below.
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSePcF1ktIM9W7bF2DFGMJiS11SxR7Y1dlLyY7muivxvGaeySg/viewform"
                                target={"_blank"}
                                rel="noreferrer"
                                className="btn btn-outline-primary btn-lg px-4"
                            >
                                Reader EOI
                            </a>
                        </div>
                    </div> */}
                </main>
            </div>
        </>
    );
};

export default Success;

Success.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
