import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import Layout from "@components/Layout";
import bookImg from "../public/img/banner.jpg";
import sponsors from "../data/sponsors.json";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { registerForm } from "models/forms";
import * as ga from "../lib/ga";
import { useForm } from "react-hook-form";
import TextField from "@components/FormFields/TextField";
import { useMetadata } from "context/metadata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightLong,
    faShop,
    faTicket,
    faHandshake,
    faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Home = () => {
    const goldSponsors = sponsors.filter((sponsor) => sponsor.type === "GOLD");

    const { register, handleSubmit } = useForm<registerForm>({
        defaultValues: { email: "", name: "" },
    });

    const router = useRouter();

    const { setMetadata } = useMetadata();
    useEffect(() => {
        setMetadata({
            title: "Have you heard about Book Fair Australia?",
            content: "I just discovered Book Fair Australia, check it out",
            useHome: true,
        });
    }, [setMetadata]);

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: registerForm) => {
        setIsLoading(true);
        const rawResponse = await fetch("/api/applications/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const status = await rawResponse.status;
        if (status === 201) {
            ga.event({ action: "user_registration", params: {} });
            router.push("/applications/registered");
        } else {
            router.push("/applications/failed");
        }
    };
    return (
        <>
            <NextSeo
                title="Home"
                description="Event organiser based in Sydney Australia all about matching local authors with book lovers."
                canonical="https://bookfairaustralia.com/"
                openGraph={{
                    title: "Home",
                    description:
                        "Event organiser based in Sydney Australia all about matching local authors with book lovers.",
                }}
            />
            <div
                id="myCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                </div>
                <Image
                    priority={true}
                    placeholder="blur"
                    className="bd-placeholder-img"
                    src={bookImg}
                    aria-hidden="true"
                    alt=""
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}
                ></Image>
                <div
                    className="position-absolute text-light m-1"
                    style={{ bottom: 0, left: 0, opacity: 0.7 }}
                >
                    Photo by{" "}
                    <a
                        className="text-light"
                        rel="nofollow"
                        href="https://unsplash.com/photos/McX3XuJRsUM"
                    >
                        Robert Anasch
                    </a>{" "}
                    on{" "}
                    <a
                        className="text-light"
                        rel="nofollow"
                        href="https://unsplash.com/"
                    >
                        Unsplash
                    </a>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="carousel-caption blue text-center shadow rounded">
                                <h1 className="text-white">
                                    Thank you for a successful 2022!
                                </h1>
                                <p className="text-white">
                                    Book Fair Australia is a new book festival.
                                    It celebrates books of all genres as well as
                                    providing a platform for authors of both
                                    traditional and independent publishers to
                                    connect with readers.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="carousel-item">
                        <div className="container">
                            <div className="carousel-caption green text-center shadow rounded">
                                <h1 className="text-white">
                                    Become a sponsor!
                                </h1>
                                <p>
                                    We have a variety of sponsorship options to
                                    meet all budgets to get your business in
                                    front of avid book readers, authors and
                                    publishers.
                                </p>
                                <Link
                                    href="/sponsor-us"
                                    className="btn btn-outline-light"
                                >
                                    Sponsorship
                                </Link>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="carousel-item">
                    <div className="container">
                        <div className="carousel-caption blue text-center shadow rounded">
                            <h1 className="text-white">
                                Applications are open!
                            </h1>
                            <p>
                                Authors and vendors are invited to apply to
                                be a part of our festival and make it an
                                amazing experience for readers.
                            </p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <Link href="/applications">
                                    <a className="btn btn-outline-light btn-lg px-4">
                                        Apply now
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> */}
                    <div className="carousel-item">
                        <div className="container">
                            <div className="carousel-caption green text-center shadow rounded">
                                <h1 className="text-white">
                                    Want to get the latest news?
                                </h1>
                                <p>
                                    We are very actively involved in our{" "}
                                    <a
                                        className="link-light"
                                        target={"_blank"}
                                        title="Discord"
                                        rel="noreferrer"
                                        href="https://discord.gg/MV8gQJE6rs"
                                    >
                                        Discord
                                    </a>
                                    , and make regular posts on our{" "}
                                    <a
                                        className="link-light"
                                        target={"_blank"}
                                        title="Instagram"
                                        rel="noreferrer"
                                        href="https://www.instagram.com/bookfairaus/"
                                    >
                                        Instagram
                                    </a>
                                    .
                                </p>
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <a
                                        href="https://discord.gg/MV8gQJE6rs"
                                        target={"_blank"}
                                        rel="noreferrer"
                                        className="btn btn-outline-light btn-lg px-4"
                                    >
                                        Discord
                                    </a>
                                    <a
                                        href="https://www.instagram.com/bookfairaus/"
                                        target={"_blank"}
                                        rel="noreferrer"
                                        className="btn btn-outline-light btn-lg px-4"
                                    >
                                        Instagram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <div className="bg-light">
                <div className="mx-4 row g-4 py-5 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-primary fs-2 mb-3">
                            <FontAwesomeIcon icon={faTicket} />
                        </div>
                        <h2>Tickets & Event Info</h2>
                        <p>
                            Join us and a range of traditionally and
                            independently published authors on the 26th-27th of
                            November for a thrilling weekend fit for any book
                            lover as we celebrate books of all genres and
                            explore a world of storytelling right at the Sydney
                            Showground.
                        </p>
                        <Link href="/events/sydney" legacyBehavior>
                            <button className="btn btn-primary" type="button">
                                View event
                            </button>
                        </Link>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-primary fs-2 mb-3">
                            <FontAwesomeIcon icon={faShop} />
                        </div>
                        <h2>Exhibitors</h2>
                        <p>
                            More than 100 attending exhibitors can be found on
                            our website today! Take a peek at who you will meet
                            at Book Fair Australia and start collating your
                            lists for who to visit.
                        </p>
                        <Link href="/exhibitors" legacyBehavior>
                            <button className="btn btn-primary" type="button">
                                Browse Exhibitors
                            </button>
                        </Link>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-primary fs-2 mb-3">
                            <FontAwesomeIcon icon={faHandshake} />
                        </div>
                        <h2>Sponsorship</h2>
                        <p>
                            We have a variety of sponsorship options to meet all
                            budgets to get your business in front of avid book
                            readers, authors and publishers.
                        </p>
                        <Link href="/sponsor-us" legacyBehavior>
                            <button className="btn btn-primary" type="button">
                                Sponsor us
                            </button>
                        </Link>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-primary fs-2 mb-3">
                            <FontAwesomeIcon icon={faFolderOpen} />
                        </div>
                        <h2>Volunteers</h2>
                        <p>
                            If you love books and would like to be involved in
                            the inaugural Book Fair Australia event, please
                            express your interest to be one of our amazing
                            volunteers!
                        </p>
                        <Link href="/volunteers" legacyBehavior>
                            <button className="btn btn-primary" type="button">
                                Apply now
                            </button>
                        </Link>
                    </div>
                </div>
            </div> */}

            <div
                className="px-4 py-5 my-5 mx-auto text-center"
                style={{ maxWidth: "700px" }}
            >
                {/* <Image className="d-block mx-auto" src="/Book_Fair_Australia.png" alt="" width="100%" height="100%" /> */}
                <h1 id="register" className="display-5 fw-bold">
                    Join our mailing list
                </h1>
                <p className="lead mb-4">
                    To get the latest news on our current and future fairs,
                    please fill out your details to stay in the loop.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row gy-4">
                        <div className="col-md-6">
                            <TextField
                                register={register}
                                name="name"
                                friendlyName="Name"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <TextField
                                register={register}
                                name="email"
                                friendlyName="Email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button
                                type="submit"
                                className="btn btn-outline-primary btn-lg px-4 gap-3"
                                disabled={isLoading}
                            >
                                {isLoading && (
                                    <>
                                        <div
                                            className="spinner-border spinner-border-sm"
                                            role="status"
                                        ></div>
                                        <strong>Submitting...</strong>
                                    </>
                                )}
                                {!isLoading && "Register"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {goldSponsors.length > 0 && (
                <div className="d-flex">
                    <div
                        className="px-4 py-3 mb-4 text-center mx-auto"
                        style={{
                            border: "1px solid #0376bd",
                        }}
                    >
                        <div className="d-flex gap-4 d-sm-flex align-items-center flex-column flex-md-row">
                            <p className="lead text-start mb-0">
                                Proudly sponsored by
                            </p>
                            {goldSponsors.map((sponsor, index) => (
                                <div key={index} className="">
                                    <a
                                        href={sponsor.link}
                                        target={"_blank"}
                                        rel="noreferrer"
                                    >
                                        <img
                                            height="50"
                                            src={sponsor.Image}
                                            alt={sponsor.Name}
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
