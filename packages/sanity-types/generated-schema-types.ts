import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Contact Info
 *
 *
 */
export interface ContactInfo extends SanityDocument {
  _type: "contact_info";

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Order — `number`
   *
   *
   */
  order?: number;

  /**
   * email — `string`
   *
   *
   */
  email?: string;

  /**
   * Content — `string`
   *
   *
   */
  content?: string;
}

/**
 * Team
 *
 *
 */
export interface Team extends SanityDocument {
  _type: "team";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Order — `number`
   *
   *
   */
  order?: number;

  /**
   * Job Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Image — `image`
   *
   *
   */
  img?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Website — `url`
   *
   *
   */
  website?: string;

  /**
   * Blog — `url`
   *
   *
   */
  blog?: string;

  /**
   * Store — `url`
   *
   *
   */
  store?: string;

  /**
   * Patreon — `url`
   *
   *
   */
  patreon?: string;

  /**
   * Instagram — `url`
   *
   *
   */
  instagram?: string;

  /**
   * Facebook — `url`
   *
   *
   */
  facebook?: string;

  /**
   * Twitter — `url`
   *
   *
   */
  twitter?: string;

  /**
   * LinkedIn — `url`
   *
   *
   */
  linkedIn?: string;
}

/**
 * Tickets
 *
 *
 */
export interface Ticket extends SanityDocument {
  _type: "ticket";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Order — `number`
   *
   *
   */
  order?: number;

  /**
   * Saturday — `boolean`
   *
   *
   */
  saturday?: boolean;

  /**
   * Sunday — `boolean`
   *
   *
   */
  sunday?: boolean;

  /**
   * Type — `string`
   *
   *
   */
  type?: "child" | "adult" | "vip";

  /**
   * Price — `number`
   *
   *
   */
  price?: number;

  /**
   * Fees — `number`
   *
   *
   */
  fees?: number;

  /**
   * Vouchers — `number`
   *
   *
   */
  vouchers?: number;
}

/**
 * Sponsors
 *
 *
 */
export interface Sponsors extends SanityDocument {
  _type: "sponsors";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Type — `string`
   *
   *
   */
  type?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Link — `url`
   *
   *
   */
  link?: string;
}

/**
 * Sponsor FAQs
 *
 *
 */
export interface SponsorFaq extends SanityDocument {
  _type: "sponsor_faq";

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Order — `number`
   *
   *
   */
  order?: number;

  /**
   * Content — `string`
   *
   *
   */
  content?: string;
}

/**
 * Exhibitors
 *
 *
 */
export interface Exhibitors extends SanityDocument {
  _type: "exhibitors";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Order — `number`
   *
   *
   */
  order?: number;

  /**
   * Job Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Primary Genre — `string`
   *
   *
   */
  primary_genre?: string;

  /**
   * Other Genre — `array`
   *
   *
   */
  other_genres?: Array<SanityKeyed<string>>;

  /**
   * Sponsor Type — `string`
   *
   *
   */
  sponsor_type?: string;

  /**
   * Type — `string`
   *
   *
   */
  type?: string;

  /**
   * Website — `url`
   *
   *
   */
  website?: string;

  /**
   * Good Reads — `url`
   *
   *
   */
  goodreads?: string;

  /**
   * Instagram — `url`
   *
   *
   */
  instagram?: string;

  /**
   * Facebook — `url`
   *
   *
   */
  facebook?: string;

  /**
   * Twitter — `url`
   *
   *
   */
  twitter?: string;
}

/**
 * Exhibitor Information
 *
 *
 */
export interface ExhibitorInformation extends SanityDocument {
  _type: "exhibitor_information";

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Order — `number`
   *
   *
   */
  order?: number;

  /**
   * Content — `array`
   *
   *
   */
  content?: Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<{
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      }>
  >;

  /**
   * Updated — `datetime`
   *
   *
   */
  updated?: string;
}

export type Documents =
  | ContactInfo
  | Team
  | Ticket
  | Sponsors
  | SponsorFaq
  | Exhibitors
  | ExhibitorInformation;
