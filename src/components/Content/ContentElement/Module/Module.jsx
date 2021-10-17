import style from './Module.module.scss';
import useWidth from '../../../../hooks/useWidth';
import { useEffect, useState } from 'react';

const Module = ({ specializedSubjects, moduleNum, title }) => {
  const hookWidth = useWidth();

  const [width, setWidth] = useState(hookWidth);
  const [listToggle, setListToggle] = useState([]);

  useEffect(() => setWidth(hookWidth), [hookWidth]);

  const handleModule = () => {
    const idx = listToggle.indexOf(`${title}${moduleNum}`);
    if (idx === -1) setListToggle([...listToggle, `${title}${moduleNum}`]);
    else {
      const clone = [...listToggle];
      clone.splice(idx, 1);
      setListToggle(clone);
    }
  };

  const elements = specializedSubjects.map((subject, idx) => (
    <li className={style.li} key={idx}>
      {subject}
    </li>
  ));

  return (
    <div>
      {width > 767 ? (
        <>
          <div className={style.line}></div>
          <div className={style.wrapper}>
            <div className={style.heading}>{moduleNum}</div>
            <ul className={style.list}>{elements}</ul>
          </div>
        </>
      ) : (
        <>
          <div className={style.wrapper}>
            {listToggle.find(el => el === `${title}${moduleNum}`) ? (
              <div className={style.headingOpen} onClick={() => handleModule()}>
                <i className='fas fa-minus'></i> {moduleNum}
              </div>
            ) : (
              <div
                className={style.headingClose}
                onClick={() => handleModule()}
              >
                <i className='fas fa-plus'></i> {moduleNum}
              </div>
            )}
            {listToggle.find(el => el === `${title}${moduleNum}`) && (
              <ul className={style.list}>{elements}</ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Module;
