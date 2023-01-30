import React from 'react';
import { useState } from 'react';
import '../styles/Calculadora.css';

export default function Calculadora() {

   const [calc, setCalc] = useState("");
   const [result, setResult] = useState("");

   const ops = ["/", "*", "+", "-", "."];

   const dataCalc = value => {

      if (ops.includes(value) && calc === "" ||
         ops.includes(value) && ops.includes(calc.slice(-1))) {
         return;
      }
      setCalc(calc + value);
      if (!ops.includes(value)) {
         setResult(eval(calc + value).toString());
      }
   }

   const createDigits = () => {
      const digits = [];
      for (let i = 1; i < 10; i++) {
         digits.push(
            <button
               onClick={() => dataCalc(i.toString())}
               key={i}>{i}</button>
         )
      }
      return digits;
   }
   const calculo = () => {
      setCalc(eval(calc).toString());
   }
   const deleteCalc = () => {
      if (calc == '') {
         return;
      }
      const value = calc.slice(0, -1);
      setCalc(value);
   }

   const addDelete = () => {
      if(calc == '')return ; 
      const borrado = "";
      setCalc(borrado)
   }


   return (
      <div className="App">
         <div className="calculadora">
            <div className="display">
               {result ? <span>({result})</span> : ''}
               {calc || "0"}
            </div>
            <div className="operador">
               <button onClick={() => dataCalc("/")}>/</button>
               <button onClick={() => dataCalc("*")}>*</button>
               <button onClick={() => dataCalc("+")}>+</button>
               <button onClick={() => dataCalc("-")}>-</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={() => dataCalc("-")}>FEDE</button>
               <button onClick={deleteCalc}>DEL</button>
            </div>
            <div className="digits">
               {createDigits()}
               <button onClick={() => dataCalc(".")}>.</button>
               <button onClick={() => dataCalc("0")}>0</button>
               <button onClick={addDelete}>C</button>
               <button onClick={calculo}>=</button>
            </div>
         </div>
      </div>
   )
}