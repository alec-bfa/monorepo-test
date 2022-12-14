const seoConfig = {
    defaultTitle: "Home",
    titleTemplate: "%s | Book Fair Australia",
    description:
        "Event organiser based in Sydney Australia all about matching local authors with book lovers.",
    openGraph: {
        type: "website",
        locale: "en_AU",
        url: "https://bookfairaustralia.com/",
        title: "Book Fair Australia",
        description:
            "Event organiser based in Sydney Australia all about matching local authors with book lovers.",
        site_name: "Book Fair Australia",
        images: [
            {
                url: "https://bookfairaustralia.com/img/bfa-stacked.jpg",
                width: 1297,
                height: 1297,
                alt: "Og Image Alt",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        site: "@BookfairAus",
        cardType: "summary_large_image",
    },
};

export default seoConfig;
