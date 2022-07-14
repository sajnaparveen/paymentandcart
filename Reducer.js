const Reducer = (carts = [], action) => {
  if (action.type === "ADD") {
    let tempcarts = carts.filter((item) => item._id === action.payload._id);
    if (tempcarts < 1) {
      return [...carts, action.payload];
    } else {
      return carts;
    }
  }
  if (action.type === "REMOVE") {
    return carts.filter((item) => item._id !== action.payload._id);
  }
  if (action.type === "INCREASE") {
    let tempcarts = carts.map((item) => {
      if (item._id === action.payload._id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return tempcarts;
  }
  if (action.type === "DECREASE") {
    let tempcarts = carts.map((item) => {
      if (item._id === action.payload._id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    return tempcarts;
  }
  return carts;
};
export default Reducer;
