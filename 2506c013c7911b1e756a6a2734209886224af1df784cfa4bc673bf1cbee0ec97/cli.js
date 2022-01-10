const users = new Array(10).fill(true).map((_, index) => ({
  id: index,
  name: chance.name(),
  email: chance.email(),
}));
