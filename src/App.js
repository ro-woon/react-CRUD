import { useState } from 'react';
import './App.css';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([
    {id: 1, charge: '렌트비', amount: 1000},
    {id: 2, charge: '주유비', amount: 2000},
    {id: 3, charge: '식비', amount: 3000}
  ]);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState('');

  const handleCharge = (e) => {
    setCharge(e.target.value);
  }

  const handleEdit = (id) => {
    const currentItem = expenses.find(item => item.id === id);
    const {charge, amount} = currentItem;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  }

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (charge !== "" && amount > 0) {
      if (edit) {
        const updatedExpenses = expenses.map(expense => 
          expense.id === id ? { ...expense, charge, amount } : expense
        );
        setExpenses(updatedExpenses);
      } else {
        const newExpense = {
          id: crypto.randomUUID(),
          charge,
          amount
        }
        setExpenses([...expenses, newExpense]);
      }
      setCharge('');
      setAmount(0);
      setEdit(false);
      setId('');
    } else {
      window.alert("올바른 값을 입력해주세요");
    }
  }

  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(newExpenses);
  }

  return (
    <main className='main-container'>
      <h1>예산 계산기</h1>

      <div className='form-container'>
        <ExpenseForm charge={charge} amount={amount} handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit} edit={edit} />
      </div>
      <div className='list-container'>
        <ExpenseList handleDelete={handleDelete} expenses={expenses} handleEdit={handleEdit} />
      </div>
      <div className='total-container'>
        <p>
          총지출 : {expenses.reduce((acc, curr) => {
            return (acc + curr.amount);
          }, 0)}
          <span>원</span>
        </p>
      </div>
    </main>
  );
}

export default App;
