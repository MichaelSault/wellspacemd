import React from "react";

const src = "https://www.youtube.com/embed/_55YmblG9YM";

export default class ConcussionTip extends React.Component {
    render(){
        return (
            <>
                <h1>Concussion Assessment</h1>
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