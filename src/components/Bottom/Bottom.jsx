import style from './Bottom.module.scss';

const Bottom = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <h2 className={style.heading}>Практические модули</h2>
        <p className={style.text}>
          Работа над собственными проектами: практика групповых взаимодействий,
          кейс-методы, эссе
        </p>
      </div>
      <div className={style.right}>
        <h2 className={style.heading}>Итоговая аттестация</h2>
        <ul className={style.list}>
          <li>
            Бизнес-проектирование (подготовка итоговой аттестационной работы,
            консультирование по бизнес-проектированию)
          </li>
          <li>Защита итоговой аттестационной работы</li>
        </ul>
      </div>
    </div>
  );
};

export default Bottom;
