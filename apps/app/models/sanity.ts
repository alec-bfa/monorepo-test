import type * as Schema from 'sanity-types';
export type TeamInfoWithUrl = Array<
  Schema.Team & {
    imageUrl: string;
  }
>;
export type ContactInfo = Array<Schema.ContactInfo>;
