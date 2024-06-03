import React, { useState } from 'react';
import './Card.css';

function Card(props) {
    const theme = props.theme;
    const nameClass = `${theme.name} tariff__name `;
    const costClass = `${theme.cost} tariff__cost `;
    const [checked, setChecked] = useState(false);
    let tarriffClass;
    const handleChange = () => {
        setChecked(!checked);
    };
    checked ? (tarriffClass = 'tariff checked') : (tarriffClass = 'tariff');
    return (
        <div className={tarriffClass} checked={checked} onClick={handleChange}>
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
