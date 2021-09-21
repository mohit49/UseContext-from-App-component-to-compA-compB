import React, { useContext } from 'react';

import './style.css';
import { data, jsonD } from './App';

export default function ComponentB() {
  const datad = useContext(data),
    jsndata = useContext(jsonD);

  return (
    <div>
      <p>
        sucessfully fetch Data one <br /> <br /> {JSON.stringify(datad)}
      </p>
      <p>
        {' '}
        sucessfully fetch data two <br /> <br />
        {JSON.stringify(jsndata)}
      </p>
    </div>
  );
}
