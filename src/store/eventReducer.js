import { createSlice } from "@reduxjs/toolkit";

const eventReducerSlice = createSlice({
    name: 'eventReducerSlice',
    initialState: {
        parent: null,
        matched: [],
        matchAlert:false,
        alertImg1:'',
        alertImg2:'',
        completed:false
    },
    reducers: {
        setParent: (state, action) => {
            state.parent = action.payload;
        },
        setMatched: (state, action) => {
            const val = action.payload;
            if (!state.matched.includes(val) && val !== 'empty') {
                state.matched.push(val);
            }else if(val === 'empty'){
                state.matched = [];
            }
        },
        setMatchAlert:(state , action) => {
            state.matchAlert = action.payload;
        },
        setAlertImg1:(state , action) => {
            state.alertImg1 = action.payload;
        },
        setAlertImg2:(state , action) => {
            state.alertImg2 = action.payload;
        },
        setComp:(state, action) => {
            state.completed = action.payload;
        }   
    }
});

export const { setParent, setMatched , setMatchAlert , setAlertImg1 , setAlertImg2 , setComp } = eventReducerSlice.actions;

export default eventReducerSlice.reducer;
