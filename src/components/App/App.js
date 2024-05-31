import React from 'react';
import Card from '../Card/Card';
import './App.css';
import theme300 from '../Card/theme-300.module.css';
import theme450 from '../Card/theme-450.module.css';
import theme550 from '../Card/theme-550.module.css';
import theme1000 from '../Card/theme-1000.module.css';

function App() {
    return (
        <div className="App">
            <Card
                theme={theme300}
                name="Безлимитный 300"
                cost={300}
                force={10}
                traffic="Объем включенного трафика не ограничен"
            />
            <Card
                theme={theme450}
                name="Безлимитный 450"
                cost={450}
                force={50}
                traffic="Объем включенного трафика не ограничен"
            />
            <Card
                theme={theme550}
                name="Безлимитный 550"
                cost={550}
                force={100}
                traffic="Объем включенного трафика не ограничен"
            />
            <Card
                theme={theme1000}
                name="Безлимитный 1000"
                cost={1000}
                force={200}
                traffic="Объем включенного трафика не ограничен"
            />
        </div>
    );
}
export default App;
