// burada bir Slice (State) ve bunu değiştirecek fonksiyonlar tanımlarız.
import { createSlice } from "@reduxjs/toolkit";
// bu veriyi store 'da kullanmak üzere export ediyoruz.
export const counterSlice = createSlice({
    //State İsmi
    name:'counter',

    initialState:{
        //State değeri (burası obje - array gibi yapıalra da sahip olabilir)
        value: 4,
    },
    // state'i değiştirecek hazır fonksiyonların bulunduğu yer .
    reducers:{
        //incerement diye bir fonksiyon oluşturduk
        //state içindeki veriye git ve 1 arttır işlemi uyguluyor.
        increment:(state)=>{state.value += 1},
        decrement:(state)=>{state.value -= 1},
        icrementByAmount:(state, action)=>{
          // fonksiyona gönderilen parametre (action.payload) olarak yakalanır.
          state.value += action.payload
        }
    }
});
// fonksiyonlarımızı başka yerlerde kullanabilmek için export ile dışa aktarırız.
export const {increment, decrement, icrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;


