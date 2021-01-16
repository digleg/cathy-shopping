import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import treemallGreen from '../../img/treemall-green.png';
import treemallGray from '../../img/treemall-gray.png';
import truncate from '../../utils/truncate';

function Row({ item, status }) {
  const [windowWidth, setWindowWidth] = useState(null);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="row row__border">
      <img className="row__img" src={status ? treemallGreen : treemallGray} alt="treemall-green" />
      <div className="row__middle">
        <div className="row__middle-first">
          <div className="row__middle-first-left">{item.status.type}</div>
          <div className="row__middle-first-right">
            {`預計出貨 ：${item.date.replace(/\//g, ' / ')}`}
          </div>
        </div>
        <div className="row__middle-second">
          {windowWidth < 530 ? truncate(item.name, 20) : item.name}
        </div>
      </div>
      <div className="row__left">
        <ArrowForwardIosIcon className="row__left--icon" />
      </div>
    </div>
  );
}

Row.propTypes = {
  item: PropTypes.object,
  status: PropTypes.bool,
};

export default Row;
