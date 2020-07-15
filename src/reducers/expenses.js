//expenseReducer
const expenceReduserDefaultState = [];

const expenceReduser = (state = expenceReduserDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENCE':
            return [
                ...state,
                action.expence
            ];
        case 'REMOVE_EXPENCE':
            return state.filter((expence) => expence.id !== action.id); 
        case 'EDIT_EXPENCE':
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