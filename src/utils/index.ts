export const fetchUsers = async () => {
  const URL = `https://jsonplaceholder.typicode.com/users`;
  const response: Response = await fetch(URL);
  const result = await response.json();
  return result;
};
