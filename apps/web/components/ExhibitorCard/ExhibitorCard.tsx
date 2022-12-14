import PropTypes from "prop-types";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faGoodreads,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import defaultAuthorBadge from "../../public/img/exhibitors/default_author_badge.jpg";
import defaultVendorBadge from "../../public/img/exhibitors/default_vendor_badge.jpg";
import { exhibitorImages } from "./exhibitorImages";

export type Exhibitor = {
    name: string;
    bio: string;
    primaryGenre: string;
    otherGenres: Array<string>;
    adultContent: boolean;
    sponsorType: "none" | "bronze" | "silver" | "gold";
    type: "author" | "vendor";
    cta: { title: string; content: string };
    socials: Record<
        "Website" | "GoodReads" | "Instagram" | "Facebook" | "Twitter",
        string
    >;
};

type props = { exhibitor: Exhibitor };

const ExhibitorCard = ({
    exhibitor: {
        name,
        bio,
        primaryGenre,
        otherGenres,
        sponsorType,
        type,
        cta,
        socials,
    },
}: props) => {
    const imgSrc = exhibitorImages.get(name.toLowerCase().replace(/ /g, "_"));
    return (
        <section
            id={name.replace(/ /g, "_")}
            className={`card exhibitor-card flex-fill ${
                sponsorType != "none"
                    ? `sponsor-card shadow ${sponsorType}`
                    : ""
            }`}
        >
            {sponsorType != "none" && (
                <div
                    className={
                        "card-header text-center text-capitalize py-3 " + type
                    }
                >
                    <h4 className="my-0 fw-normal">{sponsorType} Sponsor</h4>
                </div>
            )}
            <Image
                alt=""
                src={
                    imgSrc?.data ??
                    (type == "author" ? defaultAuthorBadge : defaultVendorBadge)
                }
                height="422"
                width="422"
                objectPosition={imgSrc?.position}
                className="card-img-top"
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover",
                }}
            />
            <div className={"ribbon ribbon-top-right " + type}>
                <span>{type}</span>
            </div>
            <div className="card-body">
                <div className="card-inline mb-2">
                    <h2 className="card-title">{name}</h2>
                    <h3 className="h6 card-subline fw-bold">
                        {" "}
                        {primaryGenre}{" "}
                        {!!otherGenres.length && (
                            <span className="text-muted fw-normal">
                                | {otherGenres.join(" | ")}
                            </span>
                        )}
                    </h3>
                </div>
                <p className="card-text">{bio}</p>
                {cta && cta.title && cta.content && (
                    <a
                        target="_blank"
                        className="btn btn-primary"
                        href={cta.content}
                        rel="noreferrer"
                    >
                        {cta.title}
                    </a>
                )}
            </div>
            <div className="card-footer">
                {socials.Website && (
                    <a
                        target={"_blank"}
                        rel="noreferrer"
                        className={`mx-3`}
                        href={socials.Website}
                    >
                        <FontAwesomeIcon
                            icon={faHouse}
                            title={`${name}'s website`}
                        />
                    </a>
                )}
                {socials.GoodReads && (
                    <a
                        target={"_blank"}
                        rel="noreferrer"
                        className={`mx-3`}
                        href={socials.GoodReads}
                    >
                        <FontAwesomeIcon
                            icon={faGoodreads}
                            title={`${name}'s Goodreads`}
                        />
                    </a>
                )}
                {socials.Instagram && (
                    <a
                        target={"_blank"}
                        rel="noreferrer"
                        className={`mx-3`}
                        href={socials.Instagram}
                    >
                        <FontAwesomeIcon
                            icon={faInstagram}
                            title={`${name}'s Instagram`}
                        />
                    </a>
                )}
                {socials.Facebook && (
                    <a
                        target={"_blank"}
                        rel="noreferrer"
                        className={`mx-3`}
                        href={socials.Facebook}
                    >
                        <FontAwesomeIcon
                            icon={faFacebookF}
                            title={`${name}'s Facebook`}
                        />
                    </a>
                )}
                {socials.Twitter && (
                    <a
                        target={"_blank"}
                        rel="noreferrer"
                        className={`mx-3`}
                        href={socials.Twitter}
                    >
                        <FontAwesomeIcon
                            icon={faTwitter}
                            title={`${name}'s Twitter`}
                        />
                    </a>
                )}
            </div>
        </section>
    );
};

ExhibitorCard.propTypes = {
    exhibitor: PropTypes.object.isRequired,
};

export default ExhibitorCard;
