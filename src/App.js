import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import RowWrapper from './components/RowWrapper';
import orderData from './orderData';
import { setProcessingOrder, setCompleteOrder } from './components/RowWrapper/RowWrapperSlice';

function App() {
  const dispatch = useDispatch();
  const ORDER_STATUS = {
    PROCESSING: 1,
    ESTABILISH: 2,
    CANCEL: 3,
    ARRIVAL: 4,
  };
  const ROWWRAPPER_STATUS = {
    PROCESSING: true,
    COMPLETE: false,
  };

  useEffect(() => {
    dispatch(
      setProcessingOrder(
        orderData.orders.filter(
          (el) =>
            el.status?.code === ORDER_STATUS.PROCESSING ||
            el.status?.code === ORDER_STATUS.ESTABILISH,
        ),
      ),
    );
    dispatch(
      setCompleteOrder(
        orderData.orders.filter(
          (el) =>
            el.status?.code === ORDER_STATUS.CANCEL || el.status?.code === ORDER_STATUS.ARRIVAL,
        ),
      ),
    );
  }, []);

  return (
    <div className="app">
      <RowWrapper status={ROWWRAPPER_STATUS.PROCESSING} />
      <RowWrapper status={ROWWRAPPER_STATUS.COMPLETE} />
    </div>
  );
}

export default App;
