import{useState,React } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {decrement,increment,incrementByAmount} from './features/counter/counterSlice'
const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const[amount,setAmount] = useState();
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800">

      <div className="w-80 rounded-2xl bg-slate-400 p-8 text-center shadow-xl">

        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          Counter
        </h1>

        {/* Count */}
        <div className="mb-8 text-6xl font-bold text-indigo-600">
          {count}
        </div>

        {/* Buttons */}
        <div className="mb-6 flex justify-center gap-4">

          <button
            className="h-12 w-12 rounded-xl bg-red-500 text-2xl font-bold text-white transition hover:bg-red-600 active:scale-95"
            onClick={() => dispatch(decrement())}
          >
            −
          </button>

          <button
            className="h-12 w-12 rounded-xl bg-green-500 text-2xl font-bold text-white transition hover:bg-green-600 active:scale-95"
            onClick = {() => dispatch(increment())}
          >
            +
          </button>

        </div>

        {/* Increment By Amount */}
        <div className="border-t border-slate-500 pt-5">

          <p className="mb-3 text-sm font-semibold text-gray-700">
            Increment by amount
          </p>

          <div className="flex gap-2">

            <input
              type="number"
              placeholder="Enter amount"
              className="w-full rounded-xl border-0 bg-white px-4 py-3 text-center outline-none focus:ring-2 focus:ring-indigo-500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button
              className="rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
              onClick={() => dispatch(incrementByAmount(amount))}
            >
              Add
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default App;