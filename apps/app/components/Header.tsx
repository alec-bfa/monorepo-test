import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { ReactElement } from "react";

export default function Header({
    title,
    subtitle,
    titleIcon,
    ...props
}: {
    title: string;
    titleIcon?: ReactElement<FontAwesomeIconProps>;
    subtitle?: string;
}) {
    return (
        <header {...props}>
            <div className="p-3 pb-md-4 mx-auto text-center">
                {titleIcon && (
                    <h1 className="display-4 fw-normal">
                        {titleIcon} {title}
                    </h1>
                )}
                {!titleIcon && <h1 className="display-4 fw-normal">{title}</h1>}
                {subtitle && <p className="fs-5 text-muted">{subtitle}</p>}
            </div>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
};
