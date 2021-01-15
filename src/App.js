import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import RowWrapper from './components/RowWrapper';
import {
  setProcessingOrder,
  setCompleteOrder,
  selectGetProcessingOrder,
  selectGetCompleteOrder,
} from './components/RowWrapper/RowWrapperSlice';
import db from './firebase';

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
  const processingOrder = useSelector(selectGetProcessingOrder);
  const completeOrder = useSelector(selectGetCompleteOrder);

  const isDataEmpty = isEmpty(processingOrder) || isEmpty(completeOrder);

  useEffect(() => {
    // 至firebase db撈取order資料
    db.collection('orders')
      .orderBy('date', 'desc')
      .onSnapshot((snapshot) => {
        // 進行中項目
        dispatch(
          setProcessingOrder(
            snapshot.docs
              .map((doc) => doc.data())
              .filter(
                (el) =>
                  el.status?.code === ORDER_STATUS.PROCESSING ||
                  el.status?.code === ORDER_STATUS.ESTABILISH,
              ),
          ),
        );
        // 已完成項目
        dispatch(
          setCompleteOrder(
            snapshot.docs
              .map((doc) => doc.data())
              .filter(
                (el) =>
                  el.status?.code === ORDER_STATUS.CANCEL ||
                  el.status?.code === ORDER_STATUS.ARRIVAL,
              ),
          ),
        );
      });
  }, []);

  return (
    <div className={`app ${isDataEmpty && 'app__mask'}`}>
      {isDataEmpty && <CircularProgress size={80} />}
      <RowWrapper status={ROWWRAPPER_STATUS.PROCESSING} />
      <RowWrapper status={ROWWRAPPER_STATUS.COMPLETE} />
    </div>
  );
}

export default App;
