import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import RowWrapper from './components/RowWrapper';
import orderData from './orderData';
import { setProcessingOrder, setCompleteOrder } from './components/RowWrapper/RowWrapperSlice';

function App() {
  const dispatch = useDispatch();
  // const processingOrder = useSelector(selectGetProcessingOrder);
  // const completeOrder = useSelector(selectGetCompleteOrder);
  // console.log('processingOrder:', processingOrder);
  // console.log('completeOrder:', completeOrder);

  useEffect(() => {
    dispatch(setProcessingOrder({ orderData }));
    dispatch(setCompleteOrder({ orderData }));
  }, []);

  return (
    <div className="app">
      <RowWrapper status="true" />
      <RowWrapper status="false" />
    </div>
  );
}

export default App;
