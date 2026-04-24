// import api from "./axios";

// // GET
// export const getProjects = () => api.get("/projects");

// // CREATE
// export const createProject = (data) =>
//   api.post("/projects", data, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });

// // UPDATE
// export const updateProject = (id, data) =>
//   api.put(`/projects/${id}`, data, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });

// // DELETE
// export const deleteProject = (id) =>
//   api.delete(`/projects/${id}`);



import api from "./axios";

// GET
export const getProjects = () => api.get("/projects");

// CREATE
export const createProject = (data) =>
  api.post("/projects", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// UPDATE
export const updateProject = (id, data) =>
  api.put(`/projects/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// DELETE (by project id)
export const deleteProject = (id) =>
  api.delete(`/projects/${id}`);


export const toggleProject = (id) =>
  api.patch(`/projects/toggle/${id}`);