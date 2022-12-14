export default {
  name: 'contact_info',
  type: 'document',
  title: 'Contact Info',
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
      name: 'email',
      type: 'string',
      title: 'email',
    },
    {
      name: 'content',
      type: 'string',
      title: 'Content',
    },
  ],
}
