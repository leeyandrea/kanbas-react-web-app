import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const storedEnrollments = localStorage.getItem('enrollments');
const initialState = {
    enrollments: enrollments,
};

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
            localStorage.setItem('enrollments', JSON.stringify(action.payload));
        },
        addEnrollment: (state, action) => {
            state.enrollments.push(action.payload);
            localStorage.setItem('enrollments', JSON.stringify(state.enrollments));
        },
        removeEnrollment: (state, action) => {
            state.enrollments = state.enrollments.filter(
                (enrollment: { _id: any; }) => enrollment._id !== action.payload
            );
            localStorage.setItem('enrollments', JSON.stringify(state.enrollments));
        },
        // Add this action to reset to database enrollments
        resetToDatabase: (state) => {
            state.enrollments = enrollments;
            localStorage.setItem('enrollments', JSON.stringify(enrollments));
        },
    },
});
export const { setEnrollments, addEnrollment, removeEnrollment, resetToDatabase } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;