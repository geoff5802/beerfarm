const React = require('react');
const DropDownMenu = require('material-ui/DropDownMenu').default;
const MenuItem = require('material-ui/MenuItem').default;
const TextField = require('material-ui/TextField').default;
const StrangeForm = require('utils/strange-forms');

const styles = {
  customWidth: {
    width: 200,
  },
};

module.exports = class extends StrangeForm(React.Component) {

    static propTypes = {
        numBeers: React.PropTypes.string.isRequired,
        beerStyle: React.PropTypes.number.isRequired,
        updateFieldAction: React.PropTypes.func.isRequired,
        getBeerStyles: React.PropTypes.func.isRequired,
        beerStyleList: React.PropTypes.array
    }

    constructor(props) {

        super(props);

        this.strangeForm({
            // Declare the interesting fields.
            fields: ['numBeers', 'beerStyle'],
            // Obtain a form field value from props.
            // Can also be a single string, single function, or null (see API docs).
            get: {
                numBeers: (someProps) => someProps.numBeers,
                beerStyle: (someProps) => someProps.beerStyle
            },
            // Also takes per-field format similar to get.
            act: this.act.bind(this),
            // Defaults to (e) => e.target.value.  Also takes per-field format similar to get.
            getFormValue: this.getFormValue.bind(this)
        });
    }

    componentWillMount() {

      this.props.getBeerStyles();
    }

    getFormValue(e) {

        // Just an example of a custom handler that applies a default.
        return e.target.value || '';
    }

    act(field, value) {

        // You'll probably end-up calling an action
        // here to try to update a field with a value.
        // The value comes from getFormValue when the
        // proposeNew()-generated handler is called.
        this.props.updateFieldAction(field, value);
    }

    invalid() {

        return ['numBeers'].some((field) => {

            // By default returns true if the field is invalid.
            return this.fieldError(field);
        });
    }
    
    handleStyleChange = (index, value) => {

        /* 
        calling this through onChange={this.proposeNew('beerStyle')}
        was failing, couldn't find the value
        */
        this.act('beerStyle',value);
    }

    render() {

        const { beerStyleList } = this.props;

        return <div>

            {this.invalid() && <span>Bad value somewhere!</span>}

            <h2>How many beers do you drink</h2>
            <TextField
                hintText="Hint Text"
                // Reflects in local component state.
                value={this.fieldValue('numBeers')}
                type='number'
                floatingLabelText="Just round to the nearest beer"
                // Updates local component state and calls act, all using getFormValue option.
                onChange={this.proposeNew('numBeers')}
            />
            <h2>What beer style do you typically drink?</h2>
            <DropDownMenu
                value={this.fieldValue('beerStyle')}
                onChange={this.handleStyleChange}
                style={styles.customWidth}
                autoWidth={false}
            >
                {beerStyleList.hopsByStyle.map((beerStyle, i) => {

                    return (
                        <MenuItem value={i} label={beerStyle.style} primaryText={beerStyle.style} />
                    );
                })}
            </DropDownMenu>
        </div>;
    }
}