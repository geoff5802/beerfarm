const React = require('react');
const Classes = require('./HomeView.scss');
const RaisedButton = require('material-ui/RaisedButton').default;
const DropDownMenu = require('material-ui/DropDownMenu').default;
const MenuItem = require('material-ui/MenuItem').default;
const TextField = require('material-ui/TextField').default;
const HopForm = require('../containers/HopForm');

const styles = {
    customWidth: {
        width: 200
    }
};

class HomeView extends React.Component {

    constructor(props) {

        super(props);
        this.state = { beerStyle: 1 };
        this._boundOnClickBuildFarm = this.onClickBuildFarm.bind(this);
        
    }

    handleStyleChange = (event, index, value) => {

        this.setState({
          style: value
        });
        console.log(this.state);
    }
    handleQuantityChange = (event) => {

      this.setState({
        quantity: event.target.value
      });
      console.log(this.state);
    };


    onClickBuildFarm(){

      console.log("BUIKD FARM")
      console.log(this.state);
    }

    render (){
        return (
            <div>
                <div>
                <HopForm />
                    <h2>What type of beer to you typically drink?</h2>
                    <div>
                        <DropDownMenu
                            value={this.state.beerStyle}
                            onChange={this.handleStyleChange}
                            style={styles.customWidth}
                            autoWidth={false}
                        >
                            <MenuItem value={1} primaryText="Select Style" />
                            <MenuItem value={2} primaryText="IPA" />
                            <MenuItem value={3} primaryText="Belgian Whit" />
                            <MenuItem value={4} primaryText="Porter" />
                            <MenuItem value={5} primaryText="Stout" />
                        </DropDownMenu>
                    </div>
                </div>
                <div>
                    <h2>How many beers do you drink</h2>
                    <TextField
                        hintText="Hint Text"
                        floatingLabelText="Just round to the nearest beer"
                        onChange={this.handleQuantityChange}
                    />
                </div>
                <RaisedButton
                    label='BUILD FARM'
                    onTouchTap={this._boundOnClickBuildFarm}
                />
            </div>
        );
    }
}

module.exports = HomeView;
