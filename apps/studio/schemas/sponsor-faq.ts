export default {
  name: 'sponsor_faq',
  type: 'document',
  title: 'Sponsor FAQs',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule: any) => Rule.min(0).integer().positive(),
    },
    {
      name: 'content',
      type: 'string',
      title: 'Content',
    },
  ],
}
