export type authorForm = {
    name: string;
    email: string;
    phone: string;
    authorName: string;
    goodReads: string;
    authorWebsite: string;
    instagram: string;
    facebook: string;
    twitter: string;
    authorBio: string;
    genres: string;
    otherGenres?: string[];
    booksOnSale: string;
    otherMerchandise?: string[];
    eighteenPlus: string;
    stallType: string;
    preferredStall: string;
    spotlight: string;
    publicLibalityAgreement: boolean;
    safetyVestAgreement: boolean;
    booksReleased: string;
    panelConsent: string;
    specialNeeds: string;
    referrer: string;
    source: string;
    whsAgreement: boolean;
    venueTermsAgreement: boolean;
};

export type vendorForm = {
    companyName: string;
    email: string;
    phone: string;
    tradingName: string;
    abn: string;
    contactName: string;
    vendorWebsite: string;
    instagram: string;
    facebook: string;
    twitter: string;
    vendorBio: string;
    otherMerchandise: string[];
    eighteenPlus: string;
    stallType: string;
    publicLibalityAgreement: boolean;
    safetyVestAgreement: boolean;
    opportunities: string[];
    specialNeeds: string;
    referrer: string;
    source: string;
    whsAgreement: boolean;
    venueTermsAgreement: boolean;
};

export type registerForm = {
    name: string;
    email: string;
};

export type registerAuthorForm = {
    name: string;
    authorName: string;
    email: string;
};

export type registerVolunteerEoiForm = {
    name: string;
    email: string;
    age: string;
    phone: string;
    why: string;
    wwcc: string;
    firstAid: string;
    availabilities: string[];
    areas: string[];
};
