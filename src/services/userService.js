export const getAll = () => {
  return fetch(`http://localhost:5000/api/v1/users`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "failed") {
        console.log("failed...");
      }

      return data.users;
    })
    .catch(error => { console.log(error); });
}

export const getOneById = (user_id) => {
  return fetch(`http://localhost:5000/api/v1/users/${user_id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "failed") {
        console.log("failed...");
      }

      return data.user;
    })
    .catch(error => { console.log(error); });
}

export const editEmailById = (user_id, email) => {
  const data = {
    email: email
  }

  return fetch(`http://localhost:5000/api/v1/users/edit_email/${user_id}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "failed") {
        console.log("failed...");
      }

      return data;
    })
    .catch(error => { console.log(error); });
}

export const editAvatarById = (user_id, img_url) => {
  const data = {
    img_url: img_url
  }

  return fetch(`http://localhost:5000/api/v1/users/edit_img_url/${user_id}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "failed") {
        console.log("failed...");
      }

      return data;
    })
    .catch(error => { console.log(error); });
}

export const editPasswordById = (user_id, password) => {
  const data = {
    password: password
  }

  return fetch(`http://localhost:5000/api/v1/users/edit_password/${user_id}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "failed") {
        console.log("failed...");
      }

      return data;
    })
    .catch(error => { console.log(error); });
}


export const getAllGroups = () => {
  return fetch(`http://localhost:5000/api/v1/groups`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "failed") {
        console.log("failed...");
      }

      return data.groups;
    })
    .catch(error => { console.log(error); });
}
