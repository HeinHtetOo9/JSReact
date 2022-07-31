import React from "react";
import "./Tab.css";
import * as PropTypes from "prop-types";

class TabHeader extends React.Component {
    render() {
        console.log('TabHeader render');
        return (
            <span className={"tab-header"}
                  onClick={this.props.headerClick}>
                  {this.props.header}
            </span>);
    }
}

class TabBody extends React.Component {
    render() {
        return <div className={"tab-body"}>
            {this.props.children}
        </div>;
    }
}

TabBody.propTypes = {children: PropTypes.any};

class Tab extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex : 0
        };
    }
    headerClick(index) {
        this.setState({
            activeTabIndex: index
        })
    }
    render() {
        return(
            <div>
                <div>
                    {this.props.headers.map((header, index) => {
                        return (
                            <TabHeader key={index}
                                       headerClick={() => this.headerClick(index)}
                                       header={header}/>
                        );
                    })}
                </div>
                <TabBody>
                    {this.props.children[this.state.activeTabIndex]}
                </TabBody>
            </div>
        )
    }

}

export default Tab