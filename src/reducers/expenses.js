//expenseReducer
const expenceReduserDefaultState = [];

const expenceReduser = (state = expenceReduserDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter((expence) => expence.id !== action.id); 
        case 'EDIT_EXPENSE':
            return state.map((expence) =>{
                if(expence.id === action.id){
                    return {
                        ...expence,
                        ...action.update
                    }
                }
                else return expence
            });
        default:
            return state;
    }

};

export default expenceReduser;