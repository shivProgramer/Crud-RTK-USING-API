import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, {rejectWithValue }) => {
    const response = await fetch(
      "https://65435af301b5e279de2037dc.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Read Action 
export const showUser = createAsyncThunk("showUser", async (rejectWithValue)=>{
    const response = await fetch("https://65435af301b5e279de2037dc.mockapi.io/crud");

    try {
        const result = await response.json();
        return result;
    } catch (error) {
       return rejectWithValue(error);
    }
})



export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
   extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users=(action.payload);
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userDetail.reducer;

  