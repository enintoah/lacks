export const signup = (data) => {
  return $.ajax({
    method: "POST",
    url: `/api/users`,
    data,
  })
}

export const login = (data) => {
  return $.ajax({
    method: "POST",
    url: `/api/session`,
    data,
  })
}

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: `/api/session`
  })
}