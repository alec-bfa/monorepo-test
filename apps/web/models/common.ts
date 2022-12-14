export const categories = [
    "Fiction",
    "Science Fiction",
    "Non-Fiction",
    "Romance",
    "Fantasy",
    "Childrens",
    "Graphic Novel",
    "Young Adult",
    "Bilingual",
    "Historical Fiction",
    "Suspense",
    "Western",
    "Mystery",
] as const;

export type Categories = typeof categories[number];

export const exhibitorTypes = ["Author", "Vendor"] as const;
export type ExhibitorTypes = typeof exhibitorTypes[number];
