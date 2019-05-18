import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as solc from 'solc';

export default class SolInput extends Component {
    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = () => {
        const solcInput = {
            language: 'Solidity',
            sources: {
                'main.sol': {
                    content: this.state.value
                }
            }
        }
        const output = JSON.parse(solc.compile(JSON.stringify(solcInput)));
        this.props.onSubmit(output);
    }

    render = () => <div>
        <TextField multiline value={this.state.value} onChange={this.handleChange} />
        <Button onClick={this.handleSubmit}>Compile!</Button>
    </div>
}