const ActionTypes = require('../action-types/beer-math');
const Deeply = require('../utils/deeply');

const internals =  {
    initial: () => ({
    })
};

module.exports = (state, action) => {

    state = state || internals.initial();

    switch (action.type) {

        case ActionTypes.CACULATE_HOP_FARM_SUCCESS:

            return Deeply(state)
                .set('hopFarmSize', '.2 acre')
                .set('hopFarmPlantCount', '100');

        case ActionTypes.UPDATE_BEER_STYLE_SUCCESS:

        case ActionTypes.UPDATE_BEER_QUANTITY_SUCCESS:

    }
    return state;
};
