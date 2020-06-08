export default function select(planet, searchCount) {
  return (dispatch, getState) => {
    const user = getState().authentication.user;
    dispatch({
      type: "SELECTED_PLANET",
      payload: {
        planet: planet[0] ? planet[0] : {},
        userSearchCount: {
          user: user,
          count: searchCount,
        },
      },
    });
  };
}
