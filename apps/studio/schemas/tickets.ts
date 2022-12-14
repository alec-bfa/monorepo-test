export default {
  name: 'ticket',
  type: 'document',
  title: 'Tickets',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule: any) => Rule.min(0).integer().positive(),
    },
    {
      name: 'saturday',
      type: 'boolean', // type is required
      title: 'Saturday',
    },
    {
      name: 'sunday',
      type: 'boolean',
      title: 'Sunday',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: ['child', 'adult', 'vip'],
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'fees',
      type: 'number',
      title: 'Fees',
    },
    {
      name: 'vouchers',
      type: 'number',
      title: 'Vouchers',
    },
  ],
}
