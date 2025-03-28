import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../context/ContactContext";

const Form = () => {
  const { dispatch, edit } = useContext(ContactContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reference, setReference] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    !edit.isEdit
      ? //Add Contact

        dispatch({
          type: "ADD_CONTACT",
          payload: {
            id: crypto.randomUUID(),
            name,
            email,
            phone,
            reference,
          },
        })
      : //UPDATE CONTACT
        dispatch({
          type: "UPDATE_CONTACT",
          payload: {
            id: edit.contact.id,
            name,
            email,
            phone,
            reference,
          },
        });

    setName("");
    setEmail("");
    setPhone("");
    setReference("");
  };

  useEffect(() => {
    if (edit.isEdit) {
      setName(edit.contact.name);
      setPhone(edit.contact.phone);
      setEmail(edit.contact.email);
      setReference(edit.contact.reference);
    }
  }, [edit]);

  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <h1 className="text-center text-xl font-semibold">Enter Your Details </h1>
      <form onSubmit={(e) => handleSubmit(e)} className="my-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Name"
          className="w-full border border-indigo-800 p-1 my-1 rounded-sm"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full border border-indigo-800  p-1 my-1 rounded-sm"
        />

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          placeholder="Phone"
          className="w-full border border-indigo-800  p-1 my-1 rounded-sm"
        />

        <select
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          className="w-full border border-indigo-800  p-1 my-1 rounded-sm"
        >
          <option value="">Select Reference</option>
          <option value="Family">Family</option>
          <option value="Friend">Friend</option>
          <option value="Other">Other</option>
        </select>

        <button className=" bg-indigo-800 text-white  py-2 w-full rounded-md my-2 font-semibold cursor-pointer hover:bg-indigo-600 duration-150 ">
          SAVE
        </button>
      </form>
    </div>
  );
};

export default Form;
