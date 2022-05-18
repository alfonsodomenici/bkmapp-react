import React, { useState, useEffect } from 'react';
import { searchBkm } from './service/userStore.js';

const Home = (props) => {

  const [bkms, setBkms] = useState('');

  useEffect(() => {
    searchBkm()
        .then(data => {
            setBkms(data.data);
            console.log(bkms);
        })
  });

  const renderBkm= (bkm) => {
    return (
        <tr>
            <td>{bkm.id}</td>
            <td>{bkm.url}</td>
            <td>{bkm.description}</td>
        </tr>
    )
  }

  return (
    <div>
      <h1>Elenco bkm</h1>
      <table class="table is-fullwidth is-hoverable">
          <thead>
              <tr>
                  <th>id</th>
                  <th>link</th>
                  <th>descrizione</th>
              </tr>
          </thead>
          <tbody>
              {bkms.map(b => renderBkm(b))}
          </tbody>
      </table>
    </div>
  );
}

export { Home };