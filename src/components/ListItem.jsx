import React, { useContext } from "react";

import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { FaEdit, FaTrash } from "react-icons/fa";
import ContactContext from "../context/ContactContext";

const ListItem = ({ contact }) => {
  const { dispatch } = useContext(ContactContext);

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_CONTACT",
      payload: id,
    });
  };

  const handleEdit = (contact) => {
    dispatch({
      type: "EDIT_CONTACT",
      payload: contact,
    });
  };

  return (
    <li className="  my-1 border border-gray-300 rounded-md p-4 bg-yellow-50">
      <div>
        <p className="text-xl my-2 font-semibold">{contact.name}</p>
        <p className="text-sm font-semibold">{contact.email}</p>
        <p className="text-sm font-semibold">{contact.phone}</p>
      </div>
      <div className="flex space-x-2 py-4">
        <a
          href={`tel:${contact.phone}`}
          className=" py-1 rounded text-green-600  text-2xl "
        >
          <MdCall className="mr-1" />
        </a>
        <a
          href={`https://wa.me/${contact.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="  py-1 text-green-600  rounded text-2xl "
        >
          <FaWhatsapp className="mr-1" />
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="text-blue-500  py-1 rounded  text-2xl "
        >
          <FaEnvelope className="mr-1" />
        </a>
      </div>

      <div>
        <button
          onClick={() => handleEdit(contact)}
          className=" px-3 py-1 cursor-pointer rounded"
        >
          <FaEdit className="text-yellow-500 text-2xl" />
        </button>
        <button
          onClick={() => handleRemove(contact.id)}
          className=" px-3 py-4 cursor-pointer rounded"
        >
          <FaTrash className="text-red-500 text-2xl" />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
