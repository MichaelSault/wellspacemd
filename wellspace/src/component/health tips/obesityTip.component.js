import React from "react";

const src = "https://www.youtube.com/embed/VEJ6c5emPE8";

export default class ObesityTip extends React.Component {
    render(){
        return (
            <>
                <h1>Weight Loss & Obesity</h1>
                <iframe
                    width="1080px"
                    height='720px'
                    src={src}
                    title="Youtube Player"
                    frameborder="0"
                    allowFullScreen
                />
            </>
        )
    }
}