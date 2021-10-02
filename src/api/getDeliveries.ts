const getDeliveries = () => {
  return fetch('https://60e84194673e350017c21844.mockapi.io/api/deliveries', {
    method: 'GET',
  });
};

export default getDeliveries;
