import React from "react";
class Welcome extends React.Component
{
    render()
    {
        return(
            <div>
                <h2>{this.props.text}</h2>
            </div>
        )
    }
}
export default Welcome;
