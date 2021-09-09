import React from 'react';
import { Fetchdata } from '../components/Fetchdata';
import { Fetchdata2 } from '../components/Fetchdata2';
import { useState } from 'react';

export const Home = () => {

    const [mode, setMode] = useState("");

    const setVoice = () => {
        setMode("voice");
    }
    const setText = () => {
        setMode("text");
    }
    console.log(mode);
    if (mode === "voice") {
        return (
            <>
                <button className="button" onClick={setVoice}>Voice</button>
                <button className="button" onClick={setText}>Text</button>
                <br/><br/>
                <Fetchdata />
            </>
        )
    }
    else {
        return (
            <>
                <button className="button" onClick={setVoice}>Voice</button>
                <button className="button" onClick={setText}>Text</button>
                <br/>
                <Fetchdata2 />
            </>
        )
    }
}