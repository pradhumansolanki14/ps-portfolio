import api from "./axios";

export const sendContact = (data) =>
  api.post("/contacts", data);

export const getAllContacts = () =>
  api.get("/contacts");


export const updateContactStatus = (id, status) =>
  api.put(`/contacts/${id}`, {
    status,
  });

export const deleteContact = (id) =>
  api.delete(`/contacts/${id}`);