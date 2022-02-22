import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";


const Spinner = () => {
    const vision = useSelector(state => {
        const { additionalReducer } = state;
        return additionalReducer.loading
    })
    return (
        <div className="spinner">
            <TailSpin color="rgb(204, 134, 134)" height={100} width={100} allign visible={vision} />
        </div>
    )
}

export default Spinner;