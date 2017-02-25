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
        numBeers: React.PropTypes.number.isRequired,
        beerStyle: React.PropTypes.number.isRequired
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

    render() {

        return <div>

            {this.invalid() && <span>Bad value somewhere!</span>}

            <h2>How many beers do you drink</h2>
            <TextField
                hintText="Hint Text"
                // Reflects in local component state.
                value={this.fieldValue('numBeers')}
                floatingLabelText="Just round to the nearest beer"
                // Updates local component state and calls act, all using getFormValue option.
                onChange={this.proposeNew('numBeers')}
            />
            
            <DropDownMenu
                value={this.fieldValue('beerStyle')}
                onChange={this.proposeNew('beerStyle')}
                style={styles.customWidth}
                autoWidth={false}
            >
                <MenuItem value={1} primaryText="Select Style" />
                <MenuItem value={2} primaryText="IPA" />
                <MenuItem value={3} primaryText="Belgian Whit" />
                <MenuItem value={4} primaryText="Porter" />
                <MenuItem value={5} primaryText="Stout" />
            </DropDownMenu>
        </div>;
    }
}