import React from "react";
import { Link } from "react-router-dom";

const Subpage = ({ formData, handleDelete }) => {
  return (
    <div>
      <div>
        <nav className="flex w-full bg-gradient-to-r from-teal-600 to-green-600  h-15 justify-stretch">
          <h1 className="flex">
            <p className="underline text-white decoration-emerald-900 hover:decoration-emerald-400">
              PIZZA{" "}
            </p>
            <p className="truncate text-white md:text-clip">EVENT</p>
          </h1>
          <ul>
            <li>
              <Link
                className="mt-10 text-center text-white text-2xl font-bold leading-9 tracking-tight text-gray-900 decoration-emerald-600 hover:bg-emerald-00"
                to="/"
              >
                Strona Główna
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h2 className="flex justify-center "> Zamówienia:</h2>
      <div className="flex flex-wrap justify-center h-full w-full">
        {formData.length > 0 ? (
          formData.map((data, index) => (
            <div
              className="flex flex-col  flex-wrap border-green-700 border-4 w-1/5 m-3 p-3"
              key={index}
            >
              <div>
                <strong>Imię:</strong> {data.firstName}
              </div>
              <div>
                <strong>Nazwisko:</strong> {data.lastName}
              </div>
              <div>
                <strong>Email:</strong> {data.email}
              </div>

              <div>
                <strong>Wybierz pizze:</strong> {data.selectValue}
              </div>
              <div>
                <strong>VIP:</strong> {data.checkboxValue ? "VIP" : "Lamus"}
              </div>
              <div>
                <strong>Dodatkowe Informację:</strong> {data.message}
              </div>
              <Link
                className="flex w-1/ justify-center rounded-md bg-pink-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                to={`/subpage/${index}`}
              >
                Edytuj zamówienie
              </Link>
              <button
                className="flex w-1/ justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => handleDelete(index)}
              >
                Usuń
              </button>
              <hr />
            </div>
          ))
        ) : (
          <p>Brak zamówień.</p>
        )}
      </div>
    </div>
  );
};

export default Subpage;
