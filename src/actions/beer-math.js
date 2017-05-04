const ActionTypes = require('../action-types/beer-math');
const actions = exports;

actions.calculateHopFarm = () => {

    return (dispatch, getState) => {

        // Begin loading saved products
        // dispatch(actions.beginSavedProductsLoad());

        const state = getState();
  console.log("MATH TIME!", state.hopForm.beerStyle, state.hopForm.numBeers);
        if(state.hopForm.numBeers){
            // if our form has valid values in state for both fields
            const pintsPerBarrel = 124;
            const poundsPerPlants = 2;
            const plantsPerAcre = 900;
            let poundsPerBarrel;
            //console.log('beerStyleHopsUsage',beerStyleHopsUsage, beerStyleHopsUsage.hopsByStyle[state.hopForm.beerStyle].hopsPerBBL);
          
        }

        return {
            type: ActionTypes.CACULATE_HOP_FARM_SUCCESS
        };
    }
};
