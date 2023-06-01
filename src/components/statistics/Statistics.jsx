import style from './Statistics.module.css'
export const Statistics = ({stats}) => {
    return (
        <section className={style.statistics}>
        <h2 className={style.title}>Upload stats</h2>
      
        <ul className={style.statlist}>
          <li className={style.item} key={stats.id="id-1"} style={{ backgroundColor: '#178AE4' }}>
            <span className={style.label}> {stats.label=".docx"}</span>
            <span className={style.percentage}>4%</span>
          </li>
          <li className={style.item} key={stats.id="id-2"} style={{ backgroundColor: '#B31CD1' }}>
            <span className={style.label}>.mp3</span>
            <span className={style.percentage}>14%</span>
          </li>
          <li className={style.item} key={stats.id="id-3"} style={{ backgroundColor: '#B01D1D' }}>
            <span className={style.label}>.pdf</span>
            <span className={style.percentage}>41%</span>
          </li>
          <li className={style.item} key={stats.id="id-4"} style={{ backgroundColor: '#1FC5D8' }}>
            <span className={style.label}>.mp4</span>
            <span className={style.percentage}>12%</span>
          </li>
        </ul>
      </section>
    );
  };
  