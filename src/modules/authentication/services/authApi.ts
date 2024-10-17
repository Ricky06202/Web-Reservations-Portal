export function login(username: string, password: string) {
  return fetch(`http://localhost:8000/api/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function register(username: string, email: string, password: string) {
  return fetch(`http://localhost:8000/api/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
      return null;
    });
}
