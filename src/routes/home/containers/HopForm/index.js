const Connect = require('react-redux').connect;
const HopForm = require('../../components/HopForm');
const HopFormActions = require('../../../../actions/hop-form');
const BeerMath = require('../../../../actions/beer-math')

const internals = {};

internals.connect = Connect(
    (state) => ({
        numBeers: state.hopForm.numBeers,
        beerStyle: state.hopForm.beerStyle,
        beerStyleList: state.hopForm.beerStyleList
    }),{
        updateFieldAction: HopFormActions.updateFieldAction,
        getBeerStyles: HopFormActions.getBeerStyles
    }
);

// Hook them up to the project
module.exports = internals.connect(HopForm);
