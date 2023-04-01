import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from './Components/App/App';


// Provider
import DataSetter_Provider from './Context/DataSetter_State';



ReactDOM.render(
    <DataSetter_Provider>
        <App/>
    </DataSetter_Provider>,
    document.querySelector("#root")
)

