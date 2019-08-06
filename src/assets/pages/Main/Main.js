import React, { Component } from "react";
import InputField from "../../components/Input";
import Results from "../../components/Results";
import { Container, Row, Col } from "../../components/Grid";
import "./Main.css";

class Main extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleInputSubmit = this.handleInputSubmit.bind(this);

        this.state = {
            inputField: "",
            inputFieldList: [],
        }
    }

    handleInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        // console.log(event.target.value)
    }

    handleInputSubmit = event => {
        event.preventDefault();
        // console.log("Input Field: ", this.state.inputField);
        this.setState({
            inputField: "",
            inputFieldList: this.state.inputFieldList.concat(this.state.inputField),
        })
        // console.log("Input array test in submit handler: ", this.state.inputFieldList)
    }

    renderInfo() {
        return (
            // console.log("Array test in render function: " + this.state.inputFieldList);

            <ul>
                {this.state.inputFieldList.map(item => (
                    <Results 
                    key={item.id}
                    id={item.id}>
                        Title: {item}
                    </Results>
                ))}
            </ul>

        )
    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-8" />
                        <Col size="md-4">
                            <InputField
                                inputField={this.state.inputField}
                                handleInput={this.handleInput}
                                handleInputSubmit={this.handleInputSubmit}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <div id="group">
                                <h1>Subject List</h1>
                                <div id="renderGroup">
                                    {this.renderInfo()}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Main;