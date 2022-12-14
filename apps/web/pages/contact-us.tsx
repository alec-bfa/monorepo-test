import { ReactElement, useEffect } from "react";
import Header from "@components/Header";
import Layout from "@components/Layout";
import { NextSeo } from "next-seo";
import { useMetadata } from "context/metadata";

import { ContactInfo } from "models/sanity";
import sanityClient from "services/sanityClient";
import { staticPropsType } from "utils/getPropTypeFromStaticProps";

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export const getStaticProps = async () => {
    const contactInfo= await sanityClient.fetch<ContactInfo>(
        `*[_type == "contact_info"] | order(order asc)`
    );

    return {
        props: {
            contactInfo,
        },
    };
};

const SponsorUs = ({
    contactInfo,
}: staticPropsType<typeof getStaticProps>) => {
    const { setMetadata } = useMetadata();

    useEffect(() => {
        setMetadata({
            title: "Have any questions about Book Fair Australia?",
            content:
                "Contact the team to answer any questions you have on our inugural event",
            useHome: false,
        });
    }, [setMetadata]);
    return (
        <>
            <NextSeo
                title="Contact us"
                description="Email contact information top get in touch with our event organisers."
                canonical="https://bookfairaustralia.com/contact-us"
                openGraph={{
                    title: "Contact us",
                    description:
                        "Email contact information top get in touch with our event organisers.",
                }}
            />
            <div className="container">
                <Header
                    title="Contact us"
                    subtitle="Want to get in touch? Find out how to reach us!"
                />
                <main>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-3 text-center justify-content-center">
                        {contactInfo.length > 0 &&
                            contactInfo.map(
                                ({ heading, email, content }, index) => (
                                    <div className="col" key={index}>
                                        <div className="card mb-4 rounded-3 shadow-sm">
                                            <div className="card-header py-3">
                                                <h2 className="h4 my-0 fw-normal">
                                                    {heading}
                                                </h2>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled mt-3 mb-4">
                                                    <li className="fw-bold">
                                                        {email}
                                                    </li>
                                                    <li>{content}</li>
                                                </ul>
                                                <a
                                                    href={`mailto:${email}`}
                                                    className="w-100 btn btn-lg btn-outline-primary"
                                                >
                                                    Email Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h2 className="h4 my-0 fw-normal">
                                        General
                                    </h2>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li className="fw-bold">
                                            admin@bookfairaustralia.com
                                        </li>
                                        <li>
                                            General enquires about our
                                            organisation, events and tickets
                                        </li>
                                    </ul>
                                    <a
                                        href="mailto:admin@bookfairaustralia.com"
                                        className="w-100 btn btn-lg btn-outline-primary"
                                    >
                                        Email Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <h2 className="text-center h3">Or join us at our discord community!</h2>
                    <div className="my-4 d-flex justify-content-center align-items-center">
                        <div >
                            <iframe src="https://discord.com/widget?id=924498157386203186&theme=dark" width="350" height="500" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                        </div>
                    </div> */}
                </main>
            </div>
        </>
    );
};

export default SponsorUs;

SponsorUs.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
