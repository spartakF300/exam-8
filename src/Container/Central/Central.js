import React, {Component} from 'react';
import axiosApi from "../../axiosApi";
import {Button, Card, CardBody, CardText, CardTitle, Col, Row} from "reactstrap";
import {Link, NavLink} from "react-router-dom";
import {CATEGORIES} from "../../Category";

class Central extends Component {
    state = {
        quotes: null,
        category: ''

    };
    requestData = async () => {
        let url = '/quote.json';
        const name = this.props.match.params.name;
        if (name) {
            url += `?orderBy="category"&equalTo="${name}"`;
        }
        const response = await axiosApi.get(url);
        this.setState({quotes: response.data, category: name})
    };
    deletePost = async (event,id) => {
        event.preventDefault();
        await axiosApi.delete('/quote/' + id + '.json');
        this.requestData();
        this.props.history.push('/');


    };

    async componentDidMount() {
        this.requestData()
    }

   async componentDidUpdate(prevProps) {
        if (prevProps.match.params.name !== this.props.match.params.name  ) {
            this.requestData()
        }
    }

    render() {

        return  (
            <Row>
                <Col xs="3">
                    <ul className="list-group">
                        <NavLink to={'/'} className="list-group-item bg-dark">All quotes</NavLink>
                        {CATEGORIES.map(name => {
                            return <NavLink to={'/categories/' + name.id} key={name.id}
                                            className="list-group-item">{name.title}</NavLink>
                        })}

                    </ul>
                </Col>
                <Col xs="9">
                    <h1>{this.state.category}</h1>
                    {this.state.quotes &&  Object.keys(this.state.quotes).map(id => {
                     return   (
                            <Card className={'mb-3'} key={id} color="success">
                            <CardBody>
                                <CardText className="border-bottom">Quote: {this.state.quotes[id].quote}</CardText>
                                <CardTitle>-Author:{this.state.quotes[id].author}</CardTitle>
                                <Button className="mr-3" onClick={(event)=>this.deletePost(event,id)}>delete</Button>
                                <Button tag={Link} to={'/edit/' + id} className="mr-3">edit</Button>
                            </CardBody>
                        </Card>)

                    })}
                </Col>
            </Row>
        );
    }
}

export default Central;