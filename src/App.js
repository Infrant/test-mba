import { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { api } from './api/api';
import style from './App.module.scss';
import Bottom from './components/Bottom/Bottom';
import Content from './components/Content/Content';
import Heading from './components/Heading/Heading';

function App() {
  const [data, setData] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await api.getData();

    let data = [];
    response.data.filter(el => {
      const i = data.findIndex(x => x.title === el.title);
      if (i === -1 && el.specializedSubjects?.length === 10) {
        data.push(el);
      }
      return null;
    });
    data.length = 5;

    setData(data);
    if (response.success) setIsInitialized(response.success);
  };

  return (
    <div className={style.wrapper}>
      {!isInitialized ? (
        <CircularProgress
          style={{
            display: 'flex',
            height: '100vh',
            margin: 'auto',
          }}
        />
      ) : (
        <>
          <Heading />
          <Content data={data} />
          <Bottom />
        </>
      )}
    </div>
  );
}

export default App;
