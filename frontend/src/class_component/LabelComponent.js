import React from "react";
class LabelComponent extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h3 className={"App-header"}>
                    Label    {this.props.text}
                </h3>
            </div>
        );
    }
}
export default LabelComponent;