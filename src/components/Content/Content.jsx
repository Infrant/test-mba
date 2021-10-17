import ContentElement from './ContentElement/ContentElement';
import style from './Content.module.scss';

const Content = ({ data }) => {
  const contentElements = data.map(({ title, specializedSubjects }, idx) => (
    <ContentElement
      className={style.element}
      key={idx}
      title={title}
      specializedSubjects={specializedSubjects}
    />
  ));

  return <div className={style.wrapper}>{contentElements}</div>;
};

export default Content;
