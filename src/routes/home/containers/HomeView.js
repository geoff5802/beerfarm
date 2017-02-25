const Connect = require('react-redux').connect;
const HomeView = require('../components/HomeView');
const BeerMath = require('actions/beer-math');

const internals = {};

internals.connect = Connect(
    (state) => ({
    }),{
        calculateHopFarm: BeerFarm.calculateHopFarm
    }
);

// Hook them up to the project
module.exports = internals.connect(HomeView);
