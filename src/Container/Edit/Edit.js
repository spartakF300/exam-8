import React,{Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {CATEGORIES} from "../../Category";
import axiosApi from "../../axiosApi";

class Edit extends Component {
    state = {
        author: '',
        quote: '',
        category: ''
    };
    inputChange = (e) => this.setState({[e.target.name]: e.target.value});
    formSubmit = async (e) => {
        e.preventDefault();
        const quote = {
            author: this.state.author,
            quote: this.state.quote,
            category: this.state.category
        };
        await axiosApi.put('/quote/'+this.props.match.params.id+ '.json', quote);
        alert('Edited!!!');
        this.props.history.replace('/')
    };
   async componentDidMount() {
       const response =   await axiosApi.get(`/quote/${this.props.match.params.id}.json`);
       if(response.data){
           this.setState({author:response.data.author,quote:response.data.quote,category:response.data.category})
       }
}

    render() {
        return (
            <div>
                <h1>Edit</h1>
                <Form onSubmit={this.formSubmit}>
                    <FormGroup>
                        <Label for="author">author</Label>
                        <Input defaultValue={this.state.author} onChange={this.inputChange} type="text" name="author" id="author"
                               placeholder="author"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="quote">quote</Label>
                        <Input defaultValue={this.state.quote} onChange={this.inputChange} type="textarea" name="quote" id="quote"
                               placeholder="quote"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="category">category</Label>
                        <Input value={this.state.category} onChange={this.inputChange} type="select" name="category"
                               id="category">
                            {CATEGORIES.map(c => {
                                return <option key={c.id}>{c.title}</option>
                            })}
                        </Input>
                    </FormGroup>
                    <Button>Edit</Button>
                </Form>

            </div>

        );
    }
};

export default Edit;