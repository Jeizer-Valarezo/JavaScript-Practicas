const order = {};

const { customer: { address: { city } = {} } = {} } = order;

if (!city) {
  console.log('City is required');
}
