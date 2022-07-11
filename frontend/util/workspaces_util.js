export const fetchUserWorkspaces= (id) => {
  return $.ajax({
    url: `/api/workspaces/${id}`,
    method: "GET"
  })
}