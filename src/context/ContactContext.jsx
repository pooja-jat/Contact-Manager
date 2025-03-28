import { createContext, useReducer } from "react";
import { ContactReducer } from "./contactReducer";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const initialState = {
    contacts: [{ name: "aman", email: "aman@aman", phone: "90" }],
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
