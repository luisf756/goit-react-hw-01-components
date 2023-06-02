import style from './Statistics.module.css'
export const Statistics = ({stats}) => {
  const primero=stats[0];
  const seg=stats[1];
  const ter=stats[2];
  const cuar=stats[3];
  const quin=stats[4];
    return (
        <section className={style.statistics}>
        <h2 className={style.title}>Upload stats</h2>
      
        <ul className={style.statlist}>
          <li className={style.item} key={primero.id} style={{ backgroundColor: '#178AE4' }}>
            <span className={style.label}> {primero.label}</span>
            <span className={style.percentage}>{primero.percentage}%</span>
          </li>
          <li className={style.item} key={seg.id} style={{ backgroundColor: '#B31CD1' }}>
            <span className={style.label}>{seg.label}</span>
            <span className={style.percentage}>{seg.percentage}%</span>
          </li>
          <li className={style.item} key={ter.id} style={{ backgroundColor: '#B01D1D' }}>
            <span className={style.label}>{ter.label}</span>
            <span className={style.percentage}>{ter.percentage}%</span>
          </li>
          <li className={style.item} key={cuar.id} style={{ backgroundColor: '#1FC5D8' }}>
            <span className={style.label}>{cuar.label}</span>
            <span className={style.percentage}>{cuar.percentage}%</span>
          </li>
          <li className={style.item} key={quin.id} style={{ backgroundColor: '#1FD84C' }}>
            <span className={style.label}>{quin.label}</span>
            <span className={style.percentage}>{quin.percentage}%</span>
          </li>
        </ul>
      </section>
    );
  };
  