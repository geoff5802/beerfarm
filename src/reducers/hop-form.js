const ActionTypes = require('../action-types/beer-math');
const Deeply = require('../utils/deeply');

const internals =  {
    initial: () => ({
        numBeers: '500',
        beerStyle: '0'
    })
};

module.exports = (state, action) => {

    state = state || internals.initial();

    switch (action.type) {

        case ActionTypes.CACULATE_HOP_FARM_SUCCESS:

        return Deeply(state)

          .set('numBeers', 'testval')
          .value();
    }

    return state;
};
