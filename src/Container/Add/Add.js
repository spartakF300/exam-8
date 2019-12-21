import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axiosApi from "../../axiosApi";
import {CATEGORIES} from "../../Category";

class Add extends Component {
    state = {
        author: '',
        quote: '',
        category: CATEGORIES[0].id
    };
    inputChange = (e) => this.setState({[e.target.name]: e.target.value});
    formSubmit = async (e) => {
        e.preventDefault();
        const quote = {
            author: this.state.author,
            quote: this.state.quote,
            category: this.state.category
        };
        await axiosApi.post('/quote.json', quote);
        this.props.history.push('/')
    };

    render() {
        return (
            <div>
                <h1>New quote</h1>
                <Form onSubmit={this.formSubmit}>
                    <FormGroup>
                        <Label for="author">title</Label>
                        <Input value={this.state.author} onChange={this.inputChange} type="text" name="author" id="title"
                               placeholder="author"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="quote">text</Label>
                        <Input value={this.state.quote} onChange={this.inputChange} type="textarea" name="quote" id="quote"
                               placeholder="quote"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="category">Select</Label>
                        <Input value={this.state.category} onChange={this.inputChange} type="select" name="category"
                               id="category">
                            {CATEGORIES.map(c => {
                                return <option key={c.id}>{c.id}</option>
                            })}


                        </Input>
                    </FormGroup>
                    <Button>Add</Button>
                </Form>

            </div>

        );
    }
}

export default Add;