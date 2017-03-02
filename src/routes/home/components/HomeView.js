const React = require('react');
//const Classes = require('./HomeView.scss');
const RaisedButton = require('material-ui/RaisedButton').default;
const HopForm = require('../containers/HopForm');

class HomeView extends React.Component {

    static propTypes = {
        calculateHopFarm: React.PropTypes.func.isRequired
    }

    constructor(props) {

        super(props);
    }

    render (){

        const { calculateHopFarm } = this.props;
        
        return (
            <div>
                <HopForm />
                <RaisedButton
                    label='BUILD FARM'
                    onTouchTap={calculateHopFarm}
                />
            </div>
        );
    }
}

module.exports = HomeView;
