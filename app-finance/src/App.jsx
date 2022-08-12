 import React, { useState, useEffect } from "react"
import GlobalStyle from "./styles/global"
import Header from './components/Header'
import Resume from "./components/Resume"
import Form from "./components/Form"
import Grid from "./components/Grid"


const App = () => {

    const data = localStorage.getItem('transactions')
    const [transactionsList, setTransactions] = useState(
        data ? JSON.parse(data) : []
    )

    const [income, setIcome] = useState(0)
    const [expense, setExpense] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const amountExpense = transactionsList
            .filter((item) => item.expense)
            .map((transaction) => Number(transaction.amount))
        
        const amountIcome = transactionsList
            .filter((item) => !item.expense)
            .map((transaction) => Number(transaction.amount))
        
        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2)
        const income = amountIcome.reduce((acc, cur) => acc + cur, 0).toFixed(2)

        const total = Math.abs(income - expense).toFixed(2)

        setIcome(`R$ ${income}`)
        setExpense(`R$ ${income}`)
        setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`)

    }, [transactionsList])

    return (
        <>
            <Header />
            <Resume income={income} expense={expense} total={total} />
            <Form />
            <Grid />
            <GlobalStyle />
        </>
       
    )
}

export default App