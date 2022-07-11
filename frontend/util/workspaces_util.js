export const fetchUserWorkspaces= (id) => {
  return $.ajax({
    url: `/api/workspaces/${id}`,
    method: "GET"
  })
}

export const fetchInitialMessages = (id) => {
  return $.ajax({
    url: `/api/initial_messages/${id}`,
    method: "GET"
  })
}