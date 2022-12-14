export default {
  name: 'team',
  type: 'document',
  title: 'Team',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule: any) => Rule.min(0).integer().positive(),
    },
    {name: 'title', type: 'string', title: 'Job Title'},
    {name: 'description', type: 'string', title: 'Description'},
    {name: 'img', type: 'image', title: 'Image'},
    {name: 'website', type: 'url', title: 'Website'},
    {name: 'blog', type: 'url', title: 'Blog'},
    {name: 'store', type: 'url', title: 'Store'},
    {name: 'patreon', type: 'url', title: 'Patreon'},
    {name: 'instagram', type: 'url', title: 'Instagram'},
    {name: 'facebook', type: 'url', title: 'Facebook'},
    {name: 'twitter', type: 'url', title: 'Twitter'},
    {name: 'linkedIn', type: 'url', title: 'LinkedIn'},
  ],
}
