const { createSlice } = require("@reduxjs/toolkit");

export const customerSlice = createSlice({
  name: "customerSlice",

  initialState: {
    customer: {
      userId: "",
      name: "",
      username: "",
      address: "",
      country: "",
      state: "",
      email: "",
      pan: "",
      contactnumber: "",
      dob: "",
      accounttype: "",
    //   branchName: "",
    //   amount: "",
    //   proofType: "",
    //   documentNo: "",
    },
  },

  reducers: {
    addCustomerAction: (currentSlice, action) => {
      currentSlice.customer = action.payload;
    },

    removeCustomerAction: (currentSlice, action) => {
      currentSlice.customer = customerSlice.initialState;
    },
  },
});

export const { addCustomerAction, removeCustomerAction } = customerSlice.actions;
