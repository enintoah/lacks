export const signup = (data) => {
  return $.ajax({
    method: "POST",
    url: `/api/users`,
    data,
  }).then(message => console.log(message)) 
}

export const login = (data) => {
  return $.ajax({
    method: "POST",
    url: `/api/session`,
    data,
  }).then(message => console.log(message)) 
}

export const logout = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/session/${id}`
  }).then(message => console.log(message))
}