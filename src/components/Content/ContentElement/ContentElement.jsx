import Module from './Module/Module';
import style from './ContentElement.module.scss';

const ContentElement = ({ title, specializedSubjects }) => {
  return (
    <section className={style.section}>
      <h2 className={style.heading}>{title}</h2>
      <div className={style.wrapper}>
        <Module
          specializedSubjects={specializedSubjects.slice(0, 5)}
          moduleNum={'1 модуль'}
          title={title}
        />
        <Module
          specializedSubjects={specializedSubjects.slice(5)}
          moduleNum={'2 модуль'}
          title={title}
        />
      </div>
    </section>
  );
};

export default ContentElement;
