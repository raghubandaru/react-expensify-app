const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':     // return state.concat(action.expense); 
            return [
                ...state, 
                action.expense
            ];
        
        case 'REMOVE_EXPENSE':
            // return state.filter(s => s.id !== action.expense.id);   // s represents each expense object
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    // update
                    return {
                        ...expense, 
                        ...action.updates
                    }
                } else {
                    // preserve the same
                    return expense;
                }
            });

        default: 
            return state;
    }
};