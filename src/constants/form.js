const categories = [
  {
    id: 1,
    value: 'food',
    label: 'Food',
  },
  {
    id: 2,
    value: 'bills',
    label: 'Bills/Utilities',
  },
  {
    id: 3,
    value: 'rent',
    label: 'Rent',
  },
  {
    id: 4,
    value: 'shopping',
    label: 'Shopping',
  },
  {
    id: 5,
    value: 'travel',
    label: 'Travel',
  },
];

const formConstants = [
  {
    id: 'description',
    label: 'Description',
    type: 'text',
  },
  {
    id: 'amount',
    label: 'Amount',
    type: 'number',
    placeholder: '0.00',
    required: true,
  },
  {
    id: 'notes',
    label: 'Notes',
    type: 'textarea',
  },
  {
    id: 'category',
    label: 'Category',
    type: 'select',
    options: categories,
  }
];

export { categories, formConstants };