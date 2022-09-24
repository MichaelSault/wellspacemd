import React from "react";

const src = "https://youtube.com/embed/GXd1gLwTEPY";

export default class videoPlayer extends React.Component {
    render(){
        return (
            <iframe
                width="1080px"
                height='720px'
                src={src}
                title="Youtube Player"
                frameborder="0"
                allowFullScreen
            />
        )
    }
}