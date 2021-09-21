import React from 'react';
import './style.css';
import ComponentA from './componentA';
export const data = React.createContext();
export const jsonD = React.createContext();
export default function App() {
  const Ddata = [
    {
      color: 'red',
      value: '#f00',
    },
    {
      color: 'green',
      value: '#0f0',
    },
    {
      color: 'blue',
      value: '#00f',
    },
    {
      color: 'cyan',
      value: '#0ff',
    },
    {
      color: 'magenta',
      value: '#f0f',
    },
    {
      color: 'yellow',
      value: '#ff0',
    },
    {
      color: 'black',
      value: '#000',
    },
  ];
  const Ddata2 = {
    id: '0001',
    type: 'donut',
    name: 'Cake',
    ppu: 0.55,
    batters: {
      batter: [
        { id: '1001', type: 'Regular' },
        { id: '1002', type: 'Chocolate' },
        { id: '1003', type: 'Blueberry' },
        { id: '1004', type: "Devil's Food" },
      ],
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5005', type: 'Sugar' },
      { id: '5007', type: 'Powdered Sugar' },
      { id: '5006', type: 'Chocolate with Sprinkles' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' },
    ],
  };
  return (
    <div>
      <data.Provider value={Ddata}>
        <jsonD.Provider value={Ddata2}>
          <ComponentA />
        </jsonD.Provider>
      </data.Provider>
    </div>
  );
}
