import "yet-another-react-lightbox/styles.css";

import { ReactElement, useEffect, useState } from "react";
import Header from "@components/Header";
import Layout from "@components/Layout";
import { NextSeo } from "next-seo";
import { useMetadata } from "context/metadata";
import Link from "next/link";
import Image from "next/image";
import eventBannerImg from "@public/img/event/event_banner.jpg";
import childrensBannerImg from "@public/img/event/childrens_banner.jpg";
import cosplayBannerImg from "@public/img/event/cosplay_banner.jpg";
import dndBannerImg from "@public/img/event/dnd_banner.jpg";
import ticketsBannerImg from "@public/img/event/tickets_banner.png";
import generalBannerImg from "@public/img/event/general_banner.jpg";
import { useMediaQuery } from "usehooks-ts";
import { useRouter } from "next/router";
import ExhibitorList from "@components/ExhibitorList/ExhibitorList";
import exhibitorInfo from "@data/events/sydney/2022/exhibitors.json";
import { Exhibitor } from "@components/ExhibitorCard/ExhibitorCard";

const exhibitors: Exhibitor[] = exhibitorInfo as Exhibitor[];

type tabs = "details" | "exhibitors";

const Sydney2022 = () => {
    const router = useRouter();

    const { setMetadata } = useMetadata();
    useEffect(() => {
        setMetadata({
            title: "Book Fair Australia Sydney 2022 Festival",
            content:
                "Thank you for making our inaugural Sydney festival a success!",
            useHome: false,
        });
    }, [setMetadata]);

    const [currentTab, setCurrentTab] = useState<tabs>(
        router.query.tab as tabs
    );

    useEffect(() => {
        if (typeof window !== `undefined`) {
            const triggerEl = document?.querySelector(
                `#myTab button[aria-controls="#${currentTab}"]`
            ) as HTMLElement | null;
            if (triggerEl) {
                triggerEl.click();
            }
        }
    }, [currentTab]);

    useEffect(() => {
        setCurrentTab((router.query.tab as tabs) ?? "details");
    }, [router.query.tab]);

    const onTabClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const tab = (e.target as HTMLButtonElement)
            .getAttribute("aria-controls")
            ?.replace("#", "") as tabs;
        if (tab !== currentTab) {
            router.push(`/events/sydney/2022?tab=${tab}`, undefined, {
                shallow: true,
            });
        }
    };

    const isDesktop = useMediaQuery("(min-width: 1199px)");
    return (
        <>
            <NextSeo
                title="Sydney 2022 Festival"
                description="Thank you for making our inaugural Sydney festival a success!"
                canonical="https://bookfairaustralia.com/events/sydney/2022"
                openGraph={{
                    title: "Book Fair Australia Sydney 2022 Festival",
                    description:
                        "Thank you for making our inaugural Sydney festival a success!",
                }}
            />
            <div className="container">
                <main>
                    <Header
                        title="Sydney 2022 Festival"
                        subtitle="Thank you for making our inaugural Sydney festival a success!"
                    />
                    <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className={
                                    "nav-link " +
                                    (currentTab == "details" ? "active" : "")
                                }
                                id="details-tab"
                                type="button"
                                role="tab"
                                aria-controls="details"
                                aria-selected={
                                    currentTab == "details" ? "true" : "false"
                                }
                                onClick={(e) => onTabClick(e)}
                            >
                                Details
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={
                                    "nav-link " +
                                    (currentTab == "exhibitors" ? "active" : "")
                                }
                                id="exhibitors-tab"
                                type="button"
                                role="tab"
                                aria-controls="exhibitors"
                                aria-selected={
                                    currentTab == "exhibitors"
                                        ? "true"
                                        : "false"
                                }
                                onClick={(e) => onTabClick(e)}
                            >
                                Exhibitors
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content mb-3" id="myTabContent">
                        <div
                            className={
                                "tab-pane fade " +
                                (currentTab == "details" ? "show active" : "")
                            }
                            id="details"
                            role="tabpanel"
                            aria-labelledby="details-tab"
                        >
                            <div className="row mb-3">
                                <div className="col-12 col-md-6">
                                    <h3>What</h3>
                                    <p>
                                        Book Fair Australia presents a literary
                                        festival that celebrates stories of all
                                        genres. The weekend will be jam packed
                                        with activities including:
                                    </p>
                                    <ul>
                                        <li>
                                            meet your favourite Australian
                                            Authors;
                                        </li>
                                        <li>
                                            children&apos;s corner and
                                            activities;
                                        </li>
                                        <li>Dungeons & Dragons;</li>
                                        <li>a plethora of workshops;</li>
                                        <li>
                                            cool stuff from local businesses;
                                        </li>
                                        <li>raffles for fun giveaways;</li>
                                        <li>panels and talks; and</li>
                                        <li>make new friends!</li>
                                    </ul>
                                    <h3>When</h3>
                                    <p>26th - 27th November 2022, 10AM - 6PM</p>
                                    <h3>Where</h3>
                                    <p>
                                        <a
                                            target="_blank"
                                            href="https://www.google.com/maps/dir/?api=1&destination=Exhibition+Hall+5%2CSydney+Olympic+Park&destination_place_id=ChIJYwAQBrekEmsR0V4gMt9l1G4"
                                            rel="noreferrer"
                                        >
                                            Exhibition Hall 5 - 1 Showground Rd,
                                            Sydney Olympic Park NSW 2127
                                        </a>
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="google-map">
                                        <iframe
                                            style={{
                                                border: 0,
                                                width: "100%",
                                                minHeight: 450,
                                            }}
                                            loading="lazy"
                                            allowFullScreen
                                            src="https://www.google.com/maps/embed/v1/place?q=exhibit%20hall%205%20sydney%20showground%20sydney%20olympic%20park&key=AIzaSyDRHHsiArmTsh29eQhknTV9W55IRGMnUh0"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div
                                        className="mb-3"
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            height: isDesktop ? "20vw" : "25vw",
                                        }}
                                    >
                                        <Image
                                            src={eventBannerImg}
                                            alt=""
                                            fill
                                            sizes="100vw"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        ></Image>
                                    </div>
                                    <div className="mb-3">
                                        <p>
                                            We welcome traditionally and
                                            independently published authors
                                            alike to share their diverse range
                                            through dedicated stalls, discussion
                                            panels, workshops and more. A
                                            thrilling weekend fit for any book
                                            lover, come by with friends and
                                            family to get your books signed and
                                            explore a world of storytelling
                                            right in Sydney.
                                        </p>
                                        <p>
                                            The team at Book Fair Australia
                                            commit ourselves to bringing the fun
                                            back into a timeless hobby through
                                            engaging with local authors,
                                            focusing on our love for books, and
                                            connecting readers and writers.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div
                                        className="mb-3"
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            height: isDesktop ? "15vw" : "25vw",
                                        }}
                                    >
                                        <Image
                                            src={childrensBannerImg}
                                            alt=""
                                            fill
                                            sizes="100vw"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        ></Image>
                                    </div>
                                    <div className="mb-3">
                                        <p>
                                            <strong>
                                                Children&apos;s corner
                                            </strong>
                                        </p>
                                        <p>
                                            A dedicated children&apos;s section
                                            will include free face painting, fun
                                            workshops and storytelling sessions.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div
                                        className="mb-3"
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            height: isDesktop ? "15vw" : "25vw",
                                        }}
                                    >
                                        <Image
                                            src={cosplayBannerImg}
                                            alt=""
                                            fill
                                            sizes="100vw"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        ></Image>
                                    </div>
                                    <div className="mb-3">
                                        <p>
                                            <strong>Cosplay parades</strong>
                                        </p>
                                        <p>
                                            Book Fair Australia not only
                                            celebrates books, but we also love
                                            pop culture and invite you to join
                                            our Cosplay Parades during the
                                            weekend. Take this chance to put on
                                            your best head gear and get together
                                            your most snazzy custom outfits to
                                            show off your hard work.
                                        </p>
                                        <p>
                                            Whether it’s your first cosplay or
                                            your tenth one, cosplayers of all
                                            ages can take part in our Adult
                                            Cosplay Parade on Saturday or
                                            Children Cosplay Parade on Sunday.
                                            Even if you’re attending on a day
                                            other than your designated parade,
                                            we’d still love to see your designs.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div
                                        className="mb-3"
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            height: isDesktop ? "15vw" : "25vw",
                                        }}
                                    >
                                        <Image
                                            src={dndBannerImg}
                                            alt=""
                                            fill
                                            sizes="100vw"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        ></Image>
                                    </div>
                                    <div className="mb-3">
                                        <p>
                                            <strong>
                                                DnD 1 shot campaigns
                                            </strong>
                                        </p>
                                        <p>
                                            Become immersed in worlds of magical
                                            creatures and gripping adventures
                                            through our Dungeons and Dragons
                                            campaigns run throughout the
                                            weekend. You can watch the action of
                                            ongoing sessions or take a seat as a
                                            party is about to depart on their
                                            quest. Roleplayers of all experience
                                            levels are encouraged to join and
                                            bring their best voices, or choices,
                                            to the table.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div
                                        className="mb-3"
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            height: isDesktop ? "15vw" : "25vw",
                                        }}
                                    >
                                        <Image
                                            src={ticketsBannerImg}
                                            alt=""
                                            fill
                                            sizes="100vw"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        ></Image>
                                    </div>
                                    <div className="mb-3">
                                        <p>
                                            <strong>Raffle giveaway</strong>
                                        </p>
                                        <p>
                                            During the weekend, we will be
                                            running afternoon raffles each day.
                                            Some of our exhibitors will be
                                            donating books, swag and other cool
                                            items for this raffle. But to tell
                                            you too many details now would spoil
                                            the surprise! There are multiple
                                            prize bundles to be won every day.
                                        </p>
                                        <p>
                                            80% proceeds of the raffle will be
                                            donated to World Literacy Foundation
                                            (Australia).
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div
                                        className="mb-3"
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            height: isDesktop ? "20vw" : "25vw",
                                        }}
                                    >
                                        <Image
                                            src={generalBannerImg}
                                            alt=""
                                            fill
                                            sizes="100vw"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        ></Image>
                                    </div>
                                    <div className="mb-3">
                                        <p>
                                            For a detailed list of our
                                            exhibitors, please visit our{" "}
                                            <Link href="/exhibitors">
                                                Exhibitors
                                            </Link>{" "}
                                            page.
                                        </p>
                                        <p>
                                            We respectfully acknowledge that
                                            Book Fair Australia takes place on
                                            the traditional lands of the Wangal
                                            people. We pay our respects to
                                            Elders past and present.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={
                                "tab-pane fade " +
                                (currentTab == "exhibitors"
                                    ? "show active"
                                    : "")
                            }
                            id="exhibitors"
                            role="tabpanel"
                            aria-labelledby="exhibitors-tab"
                        >
                            <ExhibitorList
                                exhibitors={exhibitors}
                                baseUrl="/events/sydney/2022?tab=exhibitors&"
                            />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Sydney2022;

Sydney2022.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
