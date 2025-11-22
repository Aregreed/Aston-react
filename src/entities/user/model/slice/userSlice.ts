import {createSlice, createEntityAdapter, PayloadAction} from "@reduxjs/toolkit";
import { User } from "../../api/usersApi";

const usersAdapter = createEntityAdapter<User>({
    sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const userSlice = createSlice({
    name: "user",
    initialState: usersAdapter.getInitialState({
        loading: false,
        error: null as string | null,
        selectedUserId: 1,
    }),
    reducers: {
        userAdded: usersAdapter.addOne,
        userUpdated: usersAdapter.updateOne,
        userDeleted: usersAdapter.removeOne,
        usersReceived: (state, action: PayloadAction<User[]>) => {
            usersAdapter.setAll(state, action.payload);
        },
        setSelectedUser: (state, action: PayloadAction<number>) => {
            state.selectedUserId = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUserIds,
} = usersAdapter.getSelectors();

export const {
    userAdded,
    userUpdated,
    userDeleted,
    usersReceived,
    setSelectedUser,
    setLoading,
    setError,
} = userSlice.actions;
export default userSlice.reducer;