import PropTypes from "prop-types";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faLinkedin,
    faPatreon,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHouse, faStore, faBlog } from "@fortawesome/free-solid-svg-icons";
import { SocialProfileJsonLd } from "next-seo";

const ProfileCard = ({
    img,
    name,
    title,
    description,
    socials,
}: {
    img: string;
    name: string;
    title: string;
    description: string;
    socials: Record<
        | "Website"
        | "Blog"
        | "Store"
        | "Patreon"
        | "Instagram"
        | "Facebook"
        | "Twitter"
        | "LinkedIn",
        string
    >;
}) => {
    return (
        <section id={name.replace(/ /g, "_")} className="card mb-3">
            <div className="row g-0">
                <div className="col-md-5">
                    <Image
                        src={img}
                        className="card-img-top"
                        alt="Picture of author"
                        width="400"
                        height="400"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                    />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <SocialProfileJsonLd
                            keyOverride={name}
                            type="Person"
                            name={name}
                            url={socials.Website}
                            sameAs={[
                                socials.Facebook,
                                socials.Instagram,
                                socials.LinkedIn,
                                socials.Patreon,
                                socials.Twitter,
                                socials.Store,
                            ]}
                        />
                        <h3 className="h6 card-subtitle mb-2 text-muted">
                            {title}
                        </h3>
                        <p className="card-text">{description}</p>
                        <div>
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
                            {socials.Blog && (
                                <a
                                    target={"_blank"}
                                    rel="noreferrer"
                                    className={`mx-3`}
                                    href={socials.Blog}
                                >
                                    <FontAwesomeIcon
                                        icon={faBlog}
                                        title={`${name}'s Blog`}
                                    />
                                </a>
                            )}
                            {socials.Store && (
                                <a
                                    target={"_blank"}
                                    rel="noreferrer"
                                    className={`mx-3`}
                                    href={socials.Store}
                                >
                                    <FontAwesomeIcon
                                        icon={faStore}
                                        title={`${name}'s store`}
                                    />
                                </a>
                            )}
                            {socials.Patreon && (
                                <a
                                    target={"_blank"}
                                    rel="noreferrer"
                                    className={`mx-3`}
                                    href={socials.Patreon}
                                >
                                    <FontAwesomeIcon
                                        icon={faPatreon}
                                        title={`${name}'s Patreon`}
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
                            {socials.LinkedIn && (
                                <a
                                    target={"_blank"}
                                    rel="noreferrer"
                                    className={`mx-3`}
                                    href={socials.LinkedIn}
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        title={`${name}'s Linkedin`}
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

ProfileCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    socials: PropTypes.object.isRequired,
};

export default ProfileCard;
