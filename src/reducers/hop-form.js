const ActionTypes = require('../action-types/hop-form');
const Deeply = require('../utils/deeply');

const internals =  {
    initial: () => ({
        numBeers: '500',
        beerStyle: 0
    })
};

module.exports = (state, action) => {

    state = state || internals.initial();

    switch (action.type) {

        case ActionTypes.UPDATE_BEER_QUANTITY_BEGIN:

            const numBeers = action.payload;

            var rx = new RegExp(/^\d+$/);

            if (!rx.test(numBeers)){
                // input is not a whole number
                // don't change app state with new input
                return state;
            }
            
            return Deeply(state)

              .set('numBeers', numBeers)
              .value();
          
        case ActionTypes.UPDATE_BEER_STYLE_BEGIN:

            const beerStyle = action.payload;

            return Deeply(state)

              .set('beerStyle', beerStyle)
              .value();
              
        case ActionTypes.GET_BEER_STYLES:

          const beerStyles = action.payload;

          return Deeply(state)
          .set('beerStyleList', beerStyles)
          .value();
    }

    return state;
};
