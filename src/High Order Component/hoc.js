import React, { useState } from 'react'

function hoc(Arg) {
    function New() {
        const [money, SetMoney] = useState(10);
        const increaseBid = () => {
            SetMoney(money * 2);
        }
        return <Arg money={money} func={increaseBid}/>       
    }
    return New
}

export default hoc