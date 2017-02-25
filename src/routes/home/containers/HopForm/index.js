const Connect = require('react-redux').connect;
const HopForm = require('../../components/HopForm');

const internals = {};

internals.connect = Connect(
    (state) => ({
        numBeers: state.hopForm.numBeers,
        beerStyle: state.hopForm.beerStyle
    }),{
    }
);

// Hook them up to the project
module.exports = internals.connect(HopForm);
