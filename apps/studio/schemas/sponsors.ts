export default {
  name: 'sponsors',
  type: 'document',
  title: 'Sponsors',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {name: 'type', type: 'string', title: 'Type', list: ['BRONZE', 'SILVER', 'GOLD']},
    {name: 'image', type: 'image', title: 'Image'},
    {name: 'link', type: 'url', title: 'Link'},
  ],
}
