//actions
export const LOGIN = "LOGIN";

export const users = (data) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: {
        data: data
      }
    })
  }
}