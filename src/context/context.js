import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
const initialState = JSON.parse(localStorage.getItem("transaction")) || [
  {
    amount: 20,
    category: "Bills",
    type: "Expense",
    date: "2021-03-09",
    id: "15fe699a-07fe-47fc-b129-4fc90bcc8c70",
  },
  {
    amount: 300,
    category: "Investments",
    type: "Income",
    date: "2021-03-09",
    id: "c6ccb1c8-3085-4992-8ee0-6ecff0ff4cb7",
  },
  {
    amount: 100,
    category: "House",
    type: "Expense",
    date: "2021-03-09",
    id: "fc99af60-c6b0-41c6-9b3b-02237f21bfd1",
  },
];
export const ExpenseTrackerContext = createContext(initialState);
export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };
  const balance = transactions.reduce((acc, currVal) => {
    return currVal.type === "Expense"
      ? acc - currVal.amount
      : acc + currVal.amount;
  }, 0);

  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
