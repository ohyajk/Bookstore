export const sendData = async (url, data = {}) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const deleteData = async (url, id) => {
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
  });
};

export const getData = async (url) => {
  const res = await fetch(url);
  const data = res.json();
  return data;
};
