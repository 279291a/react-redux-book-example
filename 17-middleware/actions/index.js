function fetchUser(login) {
  return {
    [CALL_API]: {
      types: [USER_REQUEST, USER_SUCCESS, USER_FAILURE],
      endpoint: `users/${login}`,
      schema: Schemas.USER,
    },
  };
}
