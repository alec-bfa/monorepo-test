import PropTypes from "prop-types";
import React from "react";

export default function SubHeader({ title, ...props }: { title: string }) {
    return (
        <header {...props}>
            <div className="p-3 pb-md-4 mx-auto text-center">
                <h2 className="fw-normal">{title}</h2>
            </div>
        </header>
    );
}

SubHeader.propTypes = {
    title: PropTypes.string.isRequired,
};
