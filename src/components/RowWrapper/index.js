import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import Row from '../Row';
import { selectGetCompleteOrder, selectGetProcessingOrder } from './RowWrapperSlice';
import './styles.css';

function RowWrapper({ status }) {
  console.log('status:', status);

  const processingOrder = useSelector(selectGetProcessingOrder);
  const completeOrder = useSelector(selectGetCompleteOrder);
  const showOrder = status ? processingOrder : completeOrder;

  console.log('processingOrder:', processingOrder);
  console.log('completeOrder:', completeOrder);
  console.log('showOrder:', showOrder);
  return (
    <div className="row-wrapper">
      <div className="row-wrapper__title-wrapper">
        <div className="row-wrapper__title-text">{status ? '進行中' : '已完成'}</div>
      </div>
      {!isEmpty(showOrder) &&
        showOrder.map((item, index) => <Row key={`item${index}`} item={item} status={status} />)}
    </div>
  );
}

RowWrapper.propTypes = {
  status: PropTypes.bool,
};

export default RowWrapper;
