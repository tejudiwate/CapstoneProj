export const fetchUser = () => {
  const userInfo =
    sessionStorage.getItem("user") !== "undefined"
      ? JSON.parse(sessionStorage.getItem("user"))
      : sessionStorage.clear();

  return userInfo;
};

export const fetchCart = () => {
  const cartInfo =
    sessionStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(sessionStorage.getItem("cartItems"))
      : sessionStorage.clear();

  return cartInfo ? cartInfo : [];
};
