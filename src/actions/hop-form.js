const ActionTypes = require('../action-types/hop-form');
const BeerMath = require('../actions/beer-math');

const actions = exports;

actions.updateFieldAction = (field, value) => {

    if (field == 'beerStyle'){
      return {
          type: ActionTypes.UPDATE_BEER_STYLE_BEGIN,
          payload: value
      };
    }
    else if (field == 'numBeers'){
      return {
          type: ActionTypes.UPDATE_BEER_QUANTITY_BEGIN,
          payload: value
      };
    }
};

actions.getBeerStyles = () => {

  // in theory this could be managed remotely
  const beerStyleHopsUsage = {
      "hopsByStyle": [
          { "style":"IPA", "hopsPerBBL": "3" },
          { "style":"Stout", "hopsPerBBL": "1" },
          { "style":"pilz", "hopsPerBBL": "2" },
          { "style":"Sour", "hopsPerBBL": ".25" }
      ]
   }
   
  return{
    type: ActionTypes.GET_BEER_STYLES,
    payload: beerStyleHopsUsage
  }
}
/*

actions.updateFieldAction = (field, value) => {
    
    return (dispatch) => {

        let calculateFarmSize = Promise.resolve();
        calculateFarmSize = dispatch(BeerMath.calculateHopFarm());
        // look to src/actions/projects ln 149
        
        return calculateFarmSize.then(() => {
console.log("how about here?")
            //return dispatch(actions.populateProject(projectId));
        })
        calculateFarmSize.then(() => {

            console.log("inside a thing 1");
            // dispatch(AppActions.messageSnackbar('Project deleted'));
        })
        .catch((error) => {

            console.log("inside a thing 2");
            // dispatch(AppActions.messageSnackbar('Sorry, we had some trouble deleting your project'));
        });

        return calculateFarmSize;
        
    };
};
*/