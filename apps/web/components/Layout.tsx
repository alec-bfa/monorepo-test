import {
    faDiscord,
    faFacebookF,
    faInstagram,
    faLinkedin,
    faReddit,
    faTwitter,
    faTelegram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import logoThin from "../public/logo-long.png";
import {
    faClose,
    faCopy,
    faEnvelope,
    faLock,
    faShare,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import { useMetadata } from "context/metadata";
import { useCopyToClipboard } from "usehooks-ts";
import Script from "next/script";
import * as ga from "../lib/ga";

const ACT_DISMISS = "acknowledgementDismissed";

export default function Layout({ children }: { children: any }) {
    const [acknowledgementDismissed, setAcknowledgementDismissed] =
        useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const value = !!localStorage.getItem(ACT_DISMISS);
        if (value !== acknowledgementDismissed) {
            setAcknowledgementDismissed(value);
        }
    });

    const onDismiss = () => {
        localStorage.setItem(ACT_DISMISS, JSON.stringify(true));
        setAcknowledgementDismissed(true);
    };
    const [currentUrl, setCurrentUrl] = useState<string>("");

    const { title, content, useHome } = useMetadata();

    useEffect(() => {
        if (typeof window !== `undefined`) {
            if (useHome) {
                setCurrentUrl(
                    window.location.protocol + "//" + window.location.host + "/"
                );
            } else {
                setCurrentUrl(window.location.href);
            }
        }
    }, [useHome]);

    const [value, copy] = useCopyToClipboard();

    const onShare = (platform: string) => {
        ga.event({ action: `share_${platform}`, params: {} });
    };

    return (
        <>
            {/* <Script
                id="eventbrite-modal-scripting"
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: `
                    var exampleCallback = function() {
                        window.gtag("event", "ticket_purchase", {});
                    };

                    window.EBWidgets.createWidget({
                        widgetType: 'checkout',
                        eventId: '356162470537',
                        modal: true,
                        modalTriggerElementId: 'eventbrite-widget-modal-trigger-356162470537-1',
                        onOrderComplete: exampleCallback
                    });

                    window.EBWidgets.createWidget({
                        widgetType: 'checkout',
                        eventId: '356162470537',
                        modal: true,
                        modalTriggerElementId: 'eventbrite-widget-modal-trigger-356162470537-2',
                        onOrderComplete: exampleCallback
                    });

                    window.EBWidgets.createWidget({
                        widgetType: 'checkout',
                        eventId: '356162470537',
                        modal: true,
                        modalTriggerElementId: 'eventbrite-widget-modal-trigger-356162470537-3',
                        onOrderComplete: exampleCallback
                    });
                    `,
                }}
            ></Script> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white bg-light py-0">
                <div className="container-fluid">
                    <Link
                        href={"/"}
                        className="navbar-brand"
                        title="Book Fair Australia"
                    >
                        <Image
                            src={logoThin}
                            alt="Book Fair Australia Logo"
                            height="91"
                            width="256"
                            placeholder="blur"
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                            }}
                        />
                    </Link>
                    {/* <div className="d-none d-md-flex d-lg-none">
                        <button
                            className="btn btn-secondary"
                            id="eventbrite-widget-modal-trigger-356162470537-1"
                            type="button"
                        >
                            Buy Tickets
                        </button>
                    </div> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarCollapse"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item ">
                                <ActiveLink
                                    href="/"
                                    activeClassName="text-primary active"
                                >
                                    <a className="nav-link">Home</a>
                                </ActiveLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="navbarDropdown"
                                    role="button"
                                >
                                    Events
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <h6 className="dropdown-header">
                                            Future Events
                                        </h6>
                                    </li>
                                    <li>
                                        <h6 className="dropdown-item disabled">
                                            Coming soon!
                                        </h6>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <h6 className="dropdown-header">
                                            Past Events
                                        </h6>
                                    </li>
                                    <li>
                                        <ActiveLink
                                            href="/events/sydney/2022"
                                            activeClassName="active"
                                        >
                                            <a className="dropdown-item">
                                                Sydney 2022
                                            </a>
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <ActiveLink
                                    href="/applications"
                                    activeClassName="text-primary active"
                                >
                                    <a className="nav-link">Applications</a>
                                </ActiveLink>
                            </li>
                            {/* <li className="nav-item">
                                <ActiveLink
                                    href="/sponsor-us"
                                    activeClassName="text-primary active"
                                >
                                    <a className="nav-link">Sponsors</a>
                                </ActiveLink>
                            </li> */}
                            <li className="nav-item">
                                <ActiveLink
                                    href="/about-us"
                                    activeClassName="text-primary active"
                                >
                                    <a className="nav-link">About us</a>
                                </ActiveLink>
                            </li>
                            <li className="nav-item">
                                <ActiveLink
                                    href="/contact-us"
                                    activeClassName="text-primary active"
                                >
                                    <a className="nav-link">Contact</a>
                                </ActiveLink>
                            </li>
                        </ul>{" "}
                        {/* <div className="d-none d-lg-flex">
                            <button
                                className="btn btn-secondary"
                                id="eventbrite-widget-modal-trigger-356162470537-2"
                                type="button"
                            >
                                Buy Tickets
                            </button>
                        </div> */}
                    </div>
                </div>
            </nav>
            <div>{children}</div>
            <button
                className="btn btn-secondary py-2 px-3 social-button btn-floating-right"
                style={{ width: "unset" }}
                data-bs-toggle="modal"
                data-bs-target="#socialModal"
            >
                <FontAwesomeIcon icon={faShare} /> Share
            </button>
            {/* <button
                className="btn btn-secondary py-2 px-3 social-button btn-floating-left d-md-none eventbrite-widget-modal-trigger"
                style={{ width: "unset" }}
                id="eventbrite-widget-modal-trigger-356162470537-3"
            >
                Buy Tickets
            </button> */}
            <footer className="footer mt-auto bg-dark text-center text-white">
                {!acknowledgementDismissed && (
                    <div className="alert-secondary text-center mb-0 py-3 px-2 d-flex align-items-center">
                        <div className="flex-fill">
                            In the spirit of reconciliation we acknowledge the
                            Traditional Custodians of country throughout
                            Australia and their connections to land, sea and
                            community. We pay our respect to their Elders past
                            and present and extend that respect to all
                            Aboriginal and Torres Strait Islander peoples today.
                        </div>

                        <button
                            className="btn btn-link"
                            onClick={onDismiss}
                            aria-label="Close Acknowledgement of Country"
                        >
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                    </div>
                )}
                <div className="container p-4 pb-0 mb-4">
                    <section className="mb-2">
                        <a
                            target={"_blank"}
                            title="Facebook"
                            rel="noreferrer"
                            className="btn btn-secondary m-1 p-2 social-button"
                            style={{
                                backgroundColor: "#3b5998",
                            }}
                            href="https://www.facebook.com/bookfairaus"
                            role="button"
                        >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a
                            target={"_blank"}
                            title="Twitter"
                            rel="noreferrer"
                            className="btn btn-secondary m-1 p-2 social-button"
                            style={{
                                backgroundColor: "#55acee",
                            }}
                            href="https://twitter.com/bookfairaus"
                            role="button"
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a
                            target={"_blank"}
                            title="Discord"
                            rel="noreferrer"
                            className="btn btn-secondary m-1 p-2 social-button"
                            style={{
                                backgroundColor: "#2C2F33",
                            }}
                            href="https://discord.gg/MV8gQJE6rs"
                            role="button"
                        >
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>

                        <a
                            target={"_blank"}
                            title="Instagram"
                            rel="noreferrer"
                            className="btn btn-secondary m-1 p-2 social-button"
                            style={{
                                backgroundColor: "#ac2bac",
                            }}
                            href="https://www.instagram.com/bookfairaus/"
                            role="button"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </section>
                    {/* <div>
                        <FontAwesomeIcon icon={faLock} />{" "}
                        <Link
                            href={"/private/exhibitors_information"}
                            className="footer-link"
                        >
                            Exhibitor access
                        </Link>
                    </div> */}
                </div>
                <div
                    className="text-center p-3"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                    }}
                >
                    Book Fair Australia Pty Ltd © 2022
                </div>
            </footer>
            <div
                className="modal fade"
                id="socialModal"
                tabIndex={-1}
                aria-labelledby="socialModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="socialModalLabel">
                                Share
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row g-3 row-cols-auto justify-content-center">
                                    <div className="col">
                                        <EmailShareButton
                                            url={currentUrl}
                                            data-bs-dismiss="modal"
                                            className="btn btn-secondary p-2 social-button"
                                            style={{
                                                backgroundColor: "#2C2F33",
                                                color: "white",
                                            }}
                                            beforeOnClick={() =>
                                                onShare("email")
                                            }
                                            subject={title}
                                            body={content}
                                            separator=": "
                                        >
                                            <FontAwesomeIcon
                                                icon={faEnvelope}
                                            />
                                        </EmailShareButton>
                                    </div>
                                    <div className="col">
                                        <TwitterShareButton
                                            url={currentUrl}
                                            data-bs-dismiss="modal"
                                            className="btn btn-secondary p-2 social-button"
                                            style={{
                                                backgroundColor: "#55acee",
                                                color: "white",
                                            }}
                                            onShareWindowClose={() =>
                                                onShare("twitter")
                                            }
                                            title={title}
                                            via="bookfairaus"
                                            hashtags={["BookFairAustralia"]}
                                        >
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </TwitterShareButton>
                                    </div>
                                    <div className="col">
                                        <FacebookShareButton
                                            url={currentUrl}
                                            data-bs-dismiss="modal"
                                            className="btn btn-secondary p-2 social-button"
                                            style={{
                                                backgroundColor: "#3b5998",
                                                color: "white",
                                            }}
                                            onShareWindowClose={() =>
                                                onShare("facebook")
                                            }
                                            quote={content}
                                            hashtag="BookFairAustralia"
                                        >
                                            <FontAwesomeIcon
                                                icon={faFacebookF}
                                            />
                                        </FacebookShareButton>
                                    </div>
                                    <div className="col">
                                        <LinkedinShareButton
                                            url={currentUrl}
                                            data-bs-dismiss="modal"
                                            className="btn btn-secondary p-2 social-button"
                                            style={{
                                                backgroundColor: "#0077B5",
                                                color: "white",
                                            }}
                                            onShareWindowClose={() =>
                                                onShare("linkedin")
                                            }
                                        >
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                            />
                                        </LinkedinShareButton>
                                    </div>
                                    <div className="col">
                                        <TelegramShareButton
                                            url={currentUrl}
                                            data-bs-dismiss="modal"
                                            className="btn btn-secondary p-2 social-button"
                                            style={{
                                                backgroundColor: "#0088CC",
                                                color: "white",
                                            }}
                                            onShareWindowClose={() =>
                                                onShare("telegram")
                                            }
                                            title={title}
                                        >
                                            <FontAwesomeIcon
                                                icon={faTelegram}
                                            />
                                        </TelegramShareButton>
                                    </div>
                                    <div className="col">
                                        <WhatsappShareButton
                                            url={currentUrl}
                                            data-bs-dismiss="modal"
                                            className="btn btn-secondary p-2 social-button"
                                            style={{
                                                backgroundColor: "#4FCE5D",
                                                color: "white",
                                            }}
                                            onShareWindowClose={() =>
                                                onShare("whatsapp")
                                            }
                                            title={title}
                                        >
                                            <FontAwesomeIcon
                                                icon={faWhatsapp}
                                            />
                                        </WhatsappShareButton>
                                    </div>
                                    <div className="col">
                                        <RedditShareButton
                                            url={currentUrl}
                                            data-bs-dismiss="modal"
                                            className="btn btn-secondary p-2 social-button"
                                            style={{
                                                backgroundColor: "#FF4500",
                                                color: "white",
                                            }}
                                            onShareWindowClose={() =>
                                                onShare("reddit")
                                            }
                                        >
                                            <FontAwesomeIcon icon={faReddit} />
                                        </RedditShareButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-start">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <label
                                            htmlFor="pageUrl"
                                            className="form-label"
                                        >
                                            Or copy the link below
                                        </label>
                                        <div className="input-group mb-3">
                                            <input
                                                type="url"
                                                className="form-control"
                                                readOnly
                                                value={currentUrl}
                                                id="pageUrl"
                                            />
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                                data-bs-dismiss="modal"
                                                onClick={() => {
                                                    copy(currentUrl);
                                                }}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faCopy}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
