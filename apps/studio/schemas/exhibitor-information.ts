import ExternalLinkRenderer from '../components/ExternalLinkRenderer'

export default {
  name: 'exhibitor_information',
  type: 'document',
  title: 'Exhibitor Information',
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
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'link',
                blockEditor: {
                  render: ExternalLinkRenderer,
                },
                fields: [
                  {
                    name: 'url',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
        },
      ],
      title: 'Content',
    },
    {
      name: 'updated',
      type: 'datetime',
      title: 'Updated',
    },
  ],
}
