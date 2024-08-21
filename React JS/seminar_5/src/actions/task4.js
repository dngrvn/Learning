export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_EMAIL = "UPDATE_EMAIL";

export const updateName = (newName) => ({
  type: UPDATE_NAME,
  payload: newName,
});

export const updateEmail = (newEmail) => ({
  type: UPDATE_EMAIL,
  payload: newEmail,
});
