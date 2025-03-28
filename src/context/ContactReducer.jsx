export const ContactReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
     
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };

    case "REMOVE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== action.payload),
      };

    case "EDIT_CONTACT":
      return {
        ...state,
        edit: { contact: action.payload, isEdit: true },
      };

    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        edit: { contact: {}, isEdit: false },
      };
    default:
      return state;
  }
};
