import { ReactElement, useEffect } from "react";

import ProfileCard from "@components/ProfileCard/ProfileCard";
import Header from "@components/Header";
import Layout from "@components/Layout";
import SubHeader from "@components/SubHeader";
import { NextSeo } from "next-seo";
import { useMetadata } from "context/metadata";
import sanityClient from "services/sanityClient";
import { TeamInfoWithUrl } from "@models/sanity";
import { staticPropsType } from "utils/getPropTypeFromStaticProps";

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export const getStaticProps = async () => {
    const team = await sanityClient.fetch<TeamInfoWithUrl>(`
    *[_type == "team"] | order(order asc){
        'imageUrl': img.asset->url,
          ...}
  `);

    return {
        props: {
            teamInfo: team,
        },
    };
};


const Team = ({ teamInfo }: staticPropsType<typeof getStaticProps>) => {
    const { setMetadata } = useMetadata();

    useEffect(() => {
        setMetadata({
            title: "Meet the team working tirelessly on Book Fair Australia!",
            content:
                "The team is working hard to bring you Book Fair Australia's inaugural event",
            useHome: false,
        });
    }, [setMetadata]);
    return (
        <>
            <NextSeo
                title="About us"
                description="Meet our team who has been working tirelessly to make Book Fair Australia a reality!"
                canonical="https://bookfairaustralia.com/about-us"
                openGraph={{
                    title: "About us",
                    description:
                        "Meet our team who has been working tirelessly to make Book Fair Australia a reality!",
                }}
            />
            <div
                className="container"
                style={{ maxWidth: 900, marginBottom: 48 }}
            >
                <Header title="About us" />
                <SubHeader title="What brings us together?" />

                <p className="mb-4">
                    After years of attending conventions and exhibitions that
                    put book fans last, we conceived of a celebration of reading
                    that promotes both traditional writers and self-published
                    authors and focuses on our love of books. We want to present
                    a book festival that appeals to all, drawing in readers and
                    authors from across Australia to discuss everything from new
                    releases to cherished classics and bring the fun back into a
                    timeless hobby. Beginning with establishing the fair in
                    Sydney, we intend to bring the event to other cities within
                    the first five years of operation.
                </p>
                <SubHeader title="Who we are" />
                {teamInfo.length > 0 &&
                    teamInfo.map(
                        (
                            { imageUrl, name, title, description, ...socials },
                            index
                        ) => (
                            <div
                                className="row g-4 justify-content-center"
                                key={index}
                            >
                                <div className="col-11 col-sm-8 col-md-12">
                                    <ProfileCard
                                        img={imageUrl}
                                        name={name}
                                        title={title}
                                        description={description}
                                        socials={{
                                            Website: socials.website ?? "",
                                            Blog: socials.blog ?? "",
                                            Store: socials.store ?? "",
                                            Patreon: socials.patreon ?? "",
                                            Instagram: socials.instagram ?? "",
                                            Facebook: socials.facebook ?? "",
                                            Twitter: socials.twitter ?? "",
                                            LinkedIn: socials.linkedIn ?? "",
                                        }}
                                    />
                                </div>
                            </div>
                        )
                    )}
            </div>
        </>
    );
};

export default Team;

Team.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
