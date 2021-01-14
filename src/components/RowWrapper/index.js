import React from 'react';
import { useSelector } from 'react-redux';
import Row from '../Row';
import { selectGetCompleteOrder, selectGetProcessingOrder } from './RowWrapperSlice';

function RowWrapper() {
  const processingOrder = useSelector(selectGetProcessingOrder);
  const completeOrder = useSelector(selectGetCompleteOrder);
  console.log('processingOrder:', processingOrder);
  console.log('completeOrder:', completeOrder);
  return (
    <div>
      進行中
      <Row />
      <Row />
      <Row />
    </div>
  );
}

export default RowWrapper;
