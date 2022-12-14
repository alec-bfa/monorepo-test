import PropTypes from "prop-types";
import React, { useEffect, useMemo, useState } from "react";
import {
    categories,
    Categories,
    exhibitorTypes,
    ExhibitorTypes,
} from "models/common";
import ExhibitorCard, {
    Exhibitor,
} from "@components/ExhibitorCard/ExhibitorCard";
import { stringify } from "query-string";
import { useRouter } from "next/router";

type Filters = {
    category?: Categories;
    text?: string;
    type?: ExhibitorTypes;
};

const sponsorHeirachy: Record<Exhibitor["sponsorType"], number> = {
    gold: 3,
    silver: 2,
    bronze: 1,
    none: 0,
};

type props = { exhibitors: Exhibitor[]; baseUrl: string };

const ExhibitorList = ({ exhibitors, baseUrl }: props) => {
    const router = useRouter();
    const [currentCategory, setCurrentCategory] = useState<Categories>();
    const [searchTerm, setSearchTerm] = useState<string>();
    const [currentExhibitorType, setCurrentExhibitorType] =
        useState<ExhibitorTypes>();

    const updateFilter = (filters: Filters): void => {
        const stringifiedParams = stringify(
            {
                category: filters.category,
                text: filters.text,
                type: filters.type,
            },
            { skipNull: true }
        );
        if (stringifiedParams) {
            router.push(`${baseUrl}${stringifiedParams}`, undefined, {
                shallow: true,
            });
        } else {
            router.push(baseUrl, undefined, {
                shallow: true,
            });
        }
    };

    const filterExhibitors = useMemo(() => {
        let results: Exhibitor[] = [];
        for (const val of exhibitors) {
            results.push(Object.assign({}, val));
        }

        if (currentCategory) {
            results = results.filter(
                (result) =>
                    result.primaryGenre === currentCategory ||
                    result.otherGenres.some((og) => og === currentCategory)
            );
        }
        if (searchTerm) {
            results = results.filter(
                (result) =>
                    result.name
                        .toLowerCase()
                        .indexOf(searchTerm.toLowerCase()) > -1
            );
        }

        if (currentExhibitorType) {
            results = results.filter(
                (result) =>
                    result.type.toLowerCase() ===
                    currentExhibitorType.toLowerCase()
            );
        }

        return results.sort((a, b) => {
            const aSponsorRating = sponsorHeirachy[a.sponsorType];
            const bSponsorRating = sponsorHeirachy[b.sponsorType];
            if (aSponsorRating == bSponsorRating) {
                const textA = a.name.toUpperCase();
                const textB = b.name.toUpperCase();
                return textA < textB ? -1 : textA > textB ? 1 : 0;
            }
            return bSponsorRating - aSponsorRating;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [exhibitors, currentCategory, searchTerm, currentExhibitorType]);

    useEffect(() => {
        setCurrentCategory(router.query.category as Categories);
    }, [router.query.category]);

    useEffect(() => {
        setSearchTerm(router.query.text as Categories);
    }, [router.query.text]);

    useEffect(() => {
        setCurrentExhibitorType(router.query.type as ExhibitorTypes);
    }, [router.query.type]);
    return (
        <>
            <div className="accordion mb-4" id="sponsor-faqs">
                <div className="accordion-item">
                    <h3 className="accordion-header" id={`heading`}>
                        <button
                            className="accordion-button collapsed"
                            style={{ fontSize: "1.25rem" }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse`}
                            aria-expanded="false"
                            aria-controls={`collapse`}
                        >
                            Filters
                        </button>
                    </h3>
                    <div
                        id={`collapse`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading`}
                        data-bs-parent="#sponsor-faq"
                    >
                        <div className="accordion-body">
                            <div className="row gy-1 ">
                                <div className="col-md-2 text-md-end">
                                    Category
                                </div>
                                <div className="col-md-10">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            type="button"
                                            onClick={() =>
                                                updateFilter({
                                                    category:
                                                        !currentCategory ||
                                                        currentCategory !=
                                                            category
                                                            ? category
                                                            : undefined,
                                                    text: searchTerm,
                                                    type: currentExhibitorType,
                                                })
                                            }
                                            className={
                                                currentCategory &&
                                                currentCategory == category
                                                    ? "btn btn-sm me-2 mb-2 btn-primary"
                                                    : "btn btn-sm me-2 mb-2 btn-outline-primary"
                                            }
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                                <div className="col-md-2 text-md-end">Type</div>
                                <div className="col-md-10">
                                    {exhibitorTypes.map((exhibitorType) => (
                                        <button
                                            key={exhibitorType}
                                            type="button"
                                            onClick={() =>
                                                updateFilter({
                                                    category: currentCategory,
                                                    text: searchTerm,
                                                    type:
                                                        !currentExhibitorType ||
                                                        currentExhibitorType !=
                                                            exhibitorType
                                                            ? exhibitorType
                                                            : undefined,
                                                })
                                            }
                                            className={
                                                currentExhibitorType &&
                                                currentExhibitorType ==
                                                    exhibitorType
                                                    ? "btn btn-sm me-2 mb-2 btn-primary"
                                                    : "btn btn-sm me-2 mb-2 btn-outline-primary"
                                            }
                                        >
                                            {exhibitorType}
                                        </button>
                                    ))}
                                </div>
                                <div className="col-md-2 text-md-end">
                                    By Name
                                </div>
                                <div className="col-md-5">
                                    <input
                                        className="form-control "
                                        onChange={(event) =>
                                            updateFilter({
                                                category: currentCategory,
                                                text:
                                                    event.target.value ??
                                                    undefined,
                                                type: currentExhibitorType,
                                            })
                                        }
                                        value={searchTerm || ""}
                                        type="text"
                                    />
                                </div>
                                <div className="col-md-5 text-md-end">
                                    <button
                                        className="btn btn-sm btn-secondary"
                                        onClick={() => updateFilter({})}
                                    >
                                        Clear
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-4 justify-content-center align-items-stretch">
                {filterExhibitors.map((ei, index) => (
                    <div
                        className="d-flex col-12 col-md-6 col-xl-4 align-items-stretch"
                        key={index}
                    >
                        <ExhibitorCard exhibitor={ei as Exhibitor} />
                    </div>
                ))}
            </div>
        </>
    );
};

ExhibitorList.propTypes = {
    exhibitors: PropTypes.object.isRequired,
    baseUrl: PropTypes.string.isRequired,
};

export default ExhibitorList;
