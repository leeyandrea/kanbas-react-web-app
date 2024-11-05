import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";


const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: payload.name,
                course: payload.course,
                description: payload.description,
                points: payload.points,
                due: payload.dueDate,
                available: payload.startDate,
                end: payload.endDate
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a) => a._id !== assignmentId
            );
        },
        updateAssignment: (state, { payload }) => {
            state.assignments = state.assignments.map((a) =>
                a._id === payload._id ? { ...a, ...payload } : a
            );
        }
    },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;