import PropTypes from "prop-types";
import React from "react";
import { capitalizeFirstLetter } from "utils/capitalizeFirstLetter";

export type Ticket = {
    days: ("saturday" | "sunday")[];
    type: "adult" | "child" | "vip";
    price: number;
    fees: number;
    vouchers: number;
    terms?: string[];
};

type props = { ticket: Ticket };

const dayText = (days: Ticket["days"]) => {
    if (!days) return;
    if (days.includes("saturday") && days.includes("sunday")) {
        return "weekend";
    }

    return days[0];
};

const ExhibitorCard = ({
    ticket: { days, type, price, fees, vouchers, terms },
}: props) => {
    return (
        <div
            className={
                "card mb-4 rounded-3 shadow-sm flex-fill" +
                (days.length > 1 ? " border-primary" : "")
            }
        >
            <div
                className={
                    "card-header py-3 " +
                    (days.length > 1 ? "border-primary " : "") +
                    (type == "vip" ? "text-white bg-primary" : "")
                }
            >
                <h4 className="my-0 fw-normal text-capitalize">
                    {type == "vip" ? type.toUpperCase() : type} -{" "}
                    {dayText(days)}
                </h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">
                    ${(price + fees).toFixed(2)}
                </h1>
                <small className="text-muted fw-light">
                    <span className="fw-bold">${price} ticket</span> + $
                    {fees.toFixed(2)} fees
                </small>
                <ul className="list-unstyled mt-3 mb-4">
                    {days.length > 1 && (
                        <li>
                            - <span className="fw-bold">Full access</span> for
                            the entire weekend
                        </li>
                    )}
                    {days.length == 1 && (
                        <li>
                            -{" "}
                            <span className="fw-bold">1x full day access</span>{" "}
                            for {capitalizeFirstLetter(days[0])}
                        </li>
                    )}

                    <li>
                        <span className="fw-bold">
                            - {vouchers}x $5 voucher{vouchers > 1 && "s"}
                        </span>{" "}
                        to spend at any stall or booth
                    </li>
                    {terms?.map((term) => (
                        <li key={term.length}>- {term}</li>
                    ))}
                </ul>
            </div>
            <div className="card-footer bg-light ">
                <button
                    type="button"
                    className={
                        "w-100 btn btn-lg" +
                        (days.length > 1
                            ? " btn-primary"
                            : " btn-outline-primary")
                    }
                    onClick={() => {
                        const buttons = document.getElementsByClassName(
                            "eventbrite-widget-modal-trigger"
                        );
                        if (!buttons.length) return;

                        const button = buttons[0] as HTMLElement;

                        button.click();
                    }}
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

ExhibitorCard.propTypes = {
    ticket: PropTypes.object.isRequired,
};

export default ExhibitorCard;
