// SET_TEXT_FILTER
export const setTextFilter = (text="") =>({
    type:"SET_TEXT_FILTER",
    text
});
// SORT_BY_DATE
export const sortByDate = () => ({
    type: "SORT_BY_DATE",
});
// SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
});
// SET_START_DATE
export const setStartDate = (startDate = undefined) => ({
    //even if we dont give undefined as default value, 
    //it works as arguments are assigend undefined by default implicitly
    type:"SET_START_DATE",
    startDate 
});
// SET_END_DATE
export const setEndDate = (endDate = undefined) => ({
    type:"SET_END_DATE",
    endDate 
});