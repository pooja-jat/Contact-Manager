import { createContext, useReducer } from "react";
import { ContactReducer } from "./ContactReducer";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const initialState = {
    contacts: [],
    edit: { contact: {}, isEdit: false },
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  return (
    <ContactContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};
export default ContactContext;
