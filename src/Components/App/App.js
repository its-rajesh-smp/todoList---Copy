import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import InputField from "../InputField/InputField";
import ContainerCard from "../Card/ContainerCard";
import Items from "../Items/Items";
import DataSetter_Context from "../../Context/DataSetter_Context";


// =============Context=========

function App(props) {

    const context_dataSetter=useContext(DataSetter_Context)



    return (
        <div className=" App-div ">
            <InputField />
            <ContainerCard>
                {context_dataSetter.SETDATA.map((val) => {
                    return <Items name={val.name.stringValue} key={Math.random()} />;
                })}
            </ContainerCard>
        </div>
    );
}

export default App;
