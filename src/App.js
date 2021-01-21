import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClientList from './components/client-list';
import { getClients } from './features/clients/clientsSlice';

import './styles/App.scss';

const App = () => {
  const clients = useSelector((state) => state.clients.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, []);

  return (
    <div className='container'>
      <ClientList data={clients} />
    </div>
  );
};

export default App;
