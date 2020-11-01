export const pdtReducer = (state, action) => {
  switch (action.type) {
    case "addProduct":
      if (!state.productItems.find((item) => item.id === action.payload.id)) {
        state.productItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        productItems: [...state.productItems],
      };
    case "removeProduct":
      return {
        ...state,
        productItems: [
          ...state.productItems.filter((item) => item.id !== action.payload.id),
        ],
      };
    case "increaseProduct":
      return {
        ...state,
        productItems: [
          ...state.productItems.map((el) => {
            if (el.id === action.payload.id) {
              el.quantity++;
            }
            return el;
          }),
        ],
      };
    case "decreaseProduct":
      if (
        state.productItems[
          state.productItems.findIndex((item) => item.id === action.payload.id)
        ].quantity > 0
      ) {
        return {
          ...state,
          productItems: [
            ...state.productItems.map((el) => {
              if (el.id === action.payload.id) {
                el.quantity--;
              }
              return el;
            }),
          ],
        };
      } else {
        return {
          productItems: [...state.productItems],
        };
      }
    default:
      return state;
  }
};
