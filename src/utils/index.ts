const fetchUsers = async () => {
  const URL = `https://jsonplaceholder.typicode.com/users`;
  const response: Response = await fetch(URL);
  const result = await response.json();
  return result;
};

const sortUsers = (users, sortBy) => {
  return users.sort((a, b) => {
    if (sortBy === 'name') {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    }
    if (sortBy === 'city') {
      if (a['address'][sortBy] < b['address'][sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    }
  });
};

export { fetchUsers, sortUsers };
