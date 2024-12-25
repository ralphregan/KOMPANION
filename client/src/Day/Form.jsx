import { useState } from "react";

export default function FormCOmp({ typeOfForm = "login", dispatch, onSubmit, dataType }) {
  const [valueAdd, setValueAdd] = useState({
    user: {
      email: "",
      password: "",
      username: "",
      age: "",
    },

    arthur: "",
    about: "",
    text: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) onSubmit(valueAdd);
    if (dispatch) dispatch({ type: dataType, payload: valueAdd });
    console.log(valueAdd);
  }

  function handleChanges(e) {
    const { name, value, id } = e.target;
    setValueAdd((prevState) => {
      if (Object.keys(prevState.user).includes(name)) {
        return {
          ...prevState,
          user: {
            ...prevState.user,
            [name]: value,
          },
        };
      }

      return {
        ...prevState,
        [name]: value,
        [id]: id,
      };
    });
    console.log([name, value, id]);
  }

  return (
    <form
      name=""
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-2xl rounded-lg p-6 space-y-6"
    >
      <h1 className="text-2xl font-bold text-gray-700 text-center">
        {typeOfForm === "login"
          ? "Login to Your Account"
          : typeOfForm === "register"
          ? "Register an Account"
          : typeOfForm === "note"
          ? "Create a New Note"
          : "Write in Your Journal"}
      </h1>

      {typeOfForm === "login" && (
        <>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={valueAdd.user.email}
              onChange={handleChanges}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={valueAdd.user.password}
              onChange={handleChanges}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </>
      )}

      {typeOfForm === "register" && (
        <>
          <div>
            <label
              htmlFor="Remail"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="Remail"
              value={valueAdd.user.email}
              onChange={handleChanges}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={valueAdd.user.password}
              onChange={handleChanges}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={valueAdd.user.username}
              onChange={handleChanges}
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-600"
            >
              Date of Birth
            </label>
            <input
              type="date"
              name="age"
              id="age"
              value={valueAdd.user.age}
              onChange={handleChanges}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </>
      )}

      {typeOfForm === "note" && (
        <>
          <div>
            <label
              htmlFor="NAbout"
              className="block text-sm font-medium text-gray-600"
            >
              About
            </label>
            <input
              placeholder="Enter a short description"
              name="about"
              id="NAbout"
              value={valueAdd.about}
              onChange={handleChanges}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label
              htmlFor="note"
              className="block text-sm font-medium text-gray-600"
            >
              Note Text
            </label>
            <textarea
              name="text"
              id="note"
              cols="30"
              rows="5"
              value={valueAdd.text}
              onChange={handleChanges}
              placeholder="Write your note here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>
        </>
      )}

      {typeOfForm === "journal" && (
        <>
          <div>
            <label
              htmlFor="JAbout"
              className="block text-sm font-medium text-gray-600"
            >
              Journal Title
            </label>
            <input
              type="text"
              placeholder="Give your journal a name"
              name="about"
              id="JAbout"
              value={valueAdd.about}
              onChange={handleChanges}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label
              htmlFor="JArthur"
              className="block text-sm font-medium text-gray-600"
            >
              Written By
            </label>
            <input
              type="text"
              placeholder="Your name"
              id="JArthur"
              name="arthur"
              value={valueAdd.arthur}
              onChange={handleChanges}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label
              htmlFor="Journal"
              className="block text-sm font-medium text-gray-600"
            >
              Journal Content
            </label>
            <textarea
              name="text"
              id="Journal"
              cols="30"
              rows="10"
              value={valueAdd.text}
              onChange={handleChanges}
              placeholder="Write your journal entry here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>
        </>
      )}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        {typeOfForm === "note" || typeOfForm === "journal"
          ? "Post"
          : typeOfForm === "login"
          ? "Login"
          : typeOfForm === "register"
          ? "Register"
          : "Submit"}
      </button>
    </form>

    // <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-6 ">
    //   {typeOfForm === "login" ? (
    //     <>
    //       {" "}
    //       <input
    //         type="email"
    //         name="email"
    //         id="email"
    //         value={valueAdd.user.email}
    //         onChange={handleChanges}
    //       ></input>
    //       <input
    //         type="password"
    //         name="password"
    //         id="password"
    //         value={valueAdd.user.password}
    //         onChange={handleChanges}
    //       />
    //     </>
    //   ) : typeOfForm === "note" ? (
    //     <>
    //       {" "}
    //       <input
    //         placeholder="About"
    //         name="about"
    //         id="NAbout"
    //         value={valueAdd.about}
    //         onChange={handleChanges}
    //       >
    //         {" "}
    //       </input>
    //       <textarea
    //         name="text"
    //         id="note"
    //         cols="30"
    //         rows="10"
    //         value={valueAdd.text}
    //         onChange={handleChanges}
    //       ></textarea>
    //     </>
    //   ) : typeOfForm === "Register" ? (
    //     <>
    //       <input
    //         type="email"
    //         name="email"
    //         id="Remail"
    //         value={valueAdd.user.email}
    //         onChange={handleChanges}
    //       />
    //       <input
    //         type="password"
    //         name="password"
    //         id="password"
    //         value={valueAdd.user.password}
    //         onChange={handleChanges}
    //       />
    //       <input
    //         type="text"
    //         name="username"
    //         id="username"
    //         value={valueAdd.user.username}
    //         onChange={handleChanges}
    //       ></input>
    //       <input
    //         type="date"
    //         name="age"
    //         id="age"
    //         value={valueAdd.user.age}
    //         onChange={handleChanges}
    //       />
    //     </>
    //   ) : (
    //     typeOfForm === "journal" && (
    //       <>
    //         <input
    //           type="text"
    //           placeholder="give your journal a Name"
    //           name="about"
    //           id="JAbout"
    //           value={valueAdd.about}
    //           onChange={handleChanges}
    //         ></input>
    //         <input
    //           type="text"
    //           placeholder="Written by"
    //           id="JArthur"
    //           name="arthur"
    //           value={valueAdd.text}
    //           onChange={handleChanges}
    //         ></input>
    //         <textarea
    //           name="text"
    //           id="Journal"
    //           cols="50"
    //           rows="10"
    //           value={valueAdd.text}
    //           onChange={handleChanges}
    //         ></textarea>
    //       </>
    //     )
    //   )}

    //   <button type="submit">
    //     {typeOfForm === "note" || typeOfForm === "journal"
    //       ? "post"
    //       : typeOfForm === "login"
    //       ? "Login"
    //       : typeOfForm === "register"
    //       ? "Register"
    //       : "Submit"}{" "}
    //   </button>
    // </form>
  );
}
