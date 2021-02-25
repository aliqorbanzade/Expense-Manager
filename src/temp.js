// import { createStore, combineReducers } from "redux";
// import uuid from "uuid";










// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

// const expenseOne = store.dispatch(
//     addExpense({ description: "rent", amount: 100, createdAt: 2100 })
// );
// const expenseTwo = store.dispatch(
//     addExpense({ description: "coffe", amount: 500, createdAt: -1000 })
// );

// // store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// // store.dispatch(editExpense(expenseTwo.expense.id, { amount: 5023 }));
// // store.dispatch(setTextFilter("rent"));
// store.dispatch(sortByAmount("amount"));
// // store.dispatch(sortByDate("date"));

// // store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());
// // store.dispatch(setEndDate(999));

// const demoState = {
//     expenses: [
//         {
//             id: "poijasdfhwer",
//             description: "January Rent",
//             note: "This was the final payment for that address",
//             amount: 54500,
//             createdAt: 0,
//         },
//     ],
//     filters: {
//         text: "rent",
//         sortBy: "amount", // date or amount
//         startDate: undefined,
//         endDate: undefined,
//     },
// };



import React from 'react'
import ReactDOM from 'react-dom'

const Info =(props)=> {
    return (
        <div>
            <h1>Info Component {props.name}</h1>
            <p>{props.info}</p>
        </div>
    )
}

const withAuth = (WrappedComponent)=>{
    return (props)=> (
        <div>
            {props.isAuth ? <p>this is privete </p> : <p>this is public</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const Auth = withAuth(Info)

ReactDOM.render(<Auth name='ali' isAuth={true} info='infooo messageee'/> , document.body)