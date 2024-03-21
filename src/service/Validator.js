import { useState } from "react";

//age calc by dob
      const App = () => {
        const [birthDate, setBirthDate] = useState("");
        const [years, setYears] = useState(null);
        const [months, setMonths] = useState(null);
        const [days, setDays] = useState(null);

        const calculateAge = (birthDate) => {
          if (!birthDate) return;

          const currentDate = new Date();
          if (new Date(birthDate) > currentDate) {
            setBirthDate("");
            setYears(null);
            setMonths(null);
            setDays(null);
            alert("Invalid Date of Birth");
            return;
          }

          const diffTime = currentDate - new Date(birthDate);
          const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
          setYears(Math.floor(totalDays / 365.25));
          setMonths(Math.floor((totalDays % 365.25) / 30.4375));
          setDays(Math.floor((totalDays % 365.25) % 30.4375));
        };

        return (
          <div className="container">
            <h3>Reactjs Calculate age from given date</h3>
            <form>
              <label>Enter your birthdate:</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => {
                  setBirthDate(e.target.value);
                  calculateAge(e.target.value);
                }}
              />
            </form>
            {birthDate && (
              <p>
                Your age is {years} years, {months} months, and {days} days
              </p>
            )}
          </div>
        );
      };

export default App;



//validation date

// import { useState } from "react"; 
// import validator  from "validator";

// const [errorMessage, setErrorMessage] = useState('') 
    
  // const validateDate = (value) => { 
    
  //   if (validator.isDate(value)) { 
  //     setErrorMessage('Valid Date :)') 
  //   } else { 
  //     setErrorMessage('Enter Valid Date!') 
  //   } 
     
 // onChange={(e) => validateDate(e.target.value)} // inside return -> form group -> form control


                
// ph num validation

// import React, { useState } from "react";

// const App = () => {
//   const [phoneNumber, setPhoneNumber] = useState("0123456789");
//   const [errorMessage, setErrorMessage] = useState(
//     "Your phone number is not valid!"
//   );
//   function handlePhoneNumber(event) {
//     let new_Number = event.target.value;
//     setPhoneNumber(new_Number);
//     // Match phone number with a regular expression to check if the length is 10 digits.
//     if (!new_Number.match("^[0-9]{10}$")) {
//       setErrorMessage("Your phone number is not valid!");
//     } else {
//       setErrorMessage("Phone Number is valid!");
//     }
//   }
//   return (
//     <div>
//       <h2>
//         {" "}
//         Validate the length of the mobile number using{" "}
//         <i> Regular expression </i> in ReactJS.{" "}
//       </h2>
//       <div> {errorMessage} </div>
//       <input
//         type = "number"
//         value = {phoneNumber}
//         onChange = {handlePhoneNumber}
//         maxLength = "10"
//       />
//       <div> The phone number is +91 {phoneNumber} </div>
//     </div>
//   );
// };

// export default App;


// country, state filter

// const data = {
//     countries: [
//       {
//         name: "Germany",
//         states: [
//           {
//             name: "A",
//             cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"]
//           }
//         ]
//       },
//       { name: "Spain", states: [{ name: "B", cities: ["Barcelona"] }] },
  
//       { name: "USA", states: [{ name: "C", cities: ["Downers Grove"] }] },
//       {
//         name: "Mexico",
//         states: [{ name: ["D", "F", "H"], cities: ["Puebla"] }]
//       },
//       {
//         name: "India",
//         states: [
//           { name: "E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] }
//         ]
//       }
//     ]
//   };

//   const [selectedCountry, setSelectedCountry] = React.useState();
//   const [selectedState, setSelectedState] = React.useState();
//   const [selectedCity, setSelectedCity] = React.useState();

//   const availableState = data.countries.find((c) => c.name === selectedCountry);
//   const availableCities = availableState?.states?.find(
//     (s) => s.name === selectedState
//   );

//   return (
//     <div id="container">
//       <h2>Cascading or Dependent Dropdown using React</h2>

//       <div>
//         <label>Country</label>
//         <select
//           placeholder="Country"
//           value={selectedCountry}
//           onChange={(e) => setSelectedCountry(e.target.value)}
//         >
//           <option>--Choose Country--</option>
//           {data.countries.map((value, key) => {
//             return (
//               <option value={value.name} key={key}>
//                 {value.name}
//               </option>
//             );
//           })}
//         </select>
//       </div>

//       <div>
//         <label>State</label>
//         <select
//           placeholder="State"
//           value={selectedState}
//           onChange={(e) => setSelectedState(e.target.value)}
//         >
//           <option>--Choose State--</option>
//           {availableState?.states.map((e, key) => {
//             return (
//               <option value={e.name} key={key}>
//                 {e.name}
//               </option>
//             );
//           })}
//         </select>
//       </div>

//       <div>
//         <label>City</label>
//         <select
//           placeholder="City"
//           value={selectedCity}
//           onChange={(e) => setSelectedCity(e.target.value)}
//         >
//           <option>--Choose City--</option>
//           {availableCities?.cities.map((e, key) => {
//             return (
//               <option value={e.name} key={key}>
//                 {e}
//               </option>
//             );
//           })}
//         </select>
//       </div>
//     </div>
//   );