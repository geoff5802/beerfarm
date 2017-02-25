const actions = exports;

actions.updateBeerStyle = () => {

    return {
        type: ActionTypes.UPDATE_BEER_STYLE_SUCCESS
    };
};

actions.updateBeerQuantity = () => {

    return {
        type: ActionTypes.UPDATE_BEER_QUANTITY_SUCCESS
    };
};

actions.calculateHopFarm = () => {

// put regex in here testing

    return {
        type: ActionTypes.CACULATE_HOP_FARM_SUCCESS
    };
};
