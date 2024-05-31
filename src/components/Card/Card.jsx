import './Card.css';

function Card(props) {
    const theme = props.theme;
    const nameClass = `${theme.name} tariff__name `;
    const costClass = `${theme.cost} tariff__cost `;
    let tarriffClass;
    Number(props.cost === 550)
        ? (tarriffClass = 'tariff bigger')
        : (tarriffClass = 'tariff');
    return (
        <div className={tarriffClass}>
            <div className={nameClass}>{props.name}</div>
            <div className={costClass}>
                {props.cost} <span className="tariff__unit"> руб/мес</span>
            </div>
            <div className="tariff__force text">до {props.force} Мбит/сек</div>
            <div className="tariff__traffic text">{props.traffic}</div>
        </div>
    );
}
export default Card;
