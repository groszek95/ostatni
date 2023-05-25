import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

const Form = ({ handleSubmit }) => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    selectValue: "",
    checkboxValue: false,
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormValue((prevValue) => ({
        ...prevValue,
        [name]: checked,
      }));
    } else {
      setFormValue((prevValue) => ({
        ...prevValue,
        [name]: value,
      }));
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formValue);
    setFormValue({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      selectValue: "",
      checkboxValue: false,
    });
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className=" ">
      <div className="flex">
        <nav className="flex w-full bg-gradient-to-r from-teal-600 to-green-600  h-15 justify-stretch">
          <h1 className="flex">
            <p className="underline text-white decoration-emerald-900 hover:decoration-emerald-400">
              PIZZA{" "}
            </p>
            <p className="truncate text-white md:text-clip">EVENT</p>
          </h1>
          <ul className="flex">
            <li>
              <Link
                className="mt-10 text-center text-white text-2xl font-bold leading-9 tracking-tight text-gray-900 decoration-emerald-600 hover:bg-emerald-00"
                to="/subpage"
                ZZA
                EVE
              >
                Zamówienia
              </Link>
            </li>
          </ul>
        </nav>
      </div>{" "}
      {showNotification && <div>Dane zostały zapisane.</div>}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <img
              className="mx-auto h-12 w-auto"
              src="https://media.istockphoto.com/id/1330768290/pl/wektor/kreatywna-czarna-pizza-logo-wektor-projekt.jpg?s=170667a&w=0&k=20&c=aZSELXhPWHTPYFVLJ71JKnv_kE6XFwu-o7lINiAxro0="
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Złóż zamówienie
            </h2>
          </div>
        </div>
        <div className="mt-0 mx-auto w-96 border-2 border-green-600 px-10 py-10 rounded-lg bg-green-100">
          <form className="space-y-1 " onSubmit={onSubmit}>
            <label className="block w-full">
              Imię
              <input
                type="text"
                name="firstName"
                value={formValue.firstName}
                onChange={handleInputChange}
                placeholder="Imię"
                className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </label>
            <br />
            <label className="block w-full">
              Nazwisko
              <input
                cla
                type="text"
                name="lastName"
                value={formValue.lastName}
                onChange={handleInputChange}
                placeholder="Nazwisko"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </label>
            <br />
            <label className="block w-full">
              Email
              <input
                type="email"
                name="email"
                value={formValue.email}
                onChange={handleInputChange}
                placeholder="Emial"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </label>
            <br />
            <label className="block w-full">
              Wybierz Pizze
              <select
                name="selectValue"
                value={formValue.selectValue}
                onChange={handleInputChange}
                className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">-- Wybierz pizze --</option>
                <option value="option1">Sam Ser</option>
                <option value="option2">Kurczak</option>
                <option value="option3">Vege</option>
              </select>
            </label>
            <br />
            <label>
              Vip
              <input
                type="checkbox"
                name="checkboxValue"
                checked={formValue.checkboxValue}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </label>
            <br />
            <label className="block w-full">
              Dodatkowe Informację
              <textarea
                className="flex w-full justify-center rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="message"
                value={formValue.message}
                onChange={handleInputChange}
                placeholder="Tu wpisz infromację dodatkowe"
              ></textarea>
            </label>
            <br />
            <button
              className="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              Zapisz
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
