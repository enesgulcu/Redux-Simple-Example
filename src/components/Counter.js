import React from 'react'
// "useSelector" Slice'lara erişim sağlar ve veriye erişiriz.
//"useDispatch" Slice içindeki reducers'lara erişim sağlar.tanımlı hazır fonksiyonları bununla kullanacağız.
import { useSelector, useDispatch } from 'react-redux'
//fonksiyonumuzu kullanmak için çağırdık. (dispatch içinde çalıştırmamız yeterli olacak)
import {increment, decrement, icrementByAmount}  from '../redux/counter/counterSlice'

function Counter() {
    //dispatch tanımladık
    const dispatch = useDispatch();

    // ana Slice içindeki değerimize "useSelector" ile eriştik.
    const countValue = useSelector((state)=>state.counter.value)    

  return (
    <div>
        <h1>{countValue}</h1>
        <button onClick={()=> dispatch(decrement())}>Decrement -1</button>
        <button onClick={()=> dispatch(increment())}>Increment +1</button>
        <button onClick={()=> dispatch(icrementByAmount(5))}>Increment +5</button>
    </div>
  )
}
export default Counter