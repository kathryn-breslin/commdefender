import React, { Component } from "react";
import InputField from "../../components/Input";
import Results from "../../components/Results";
import { Container, Row, Col } from "../../components/Grid";
import "./Main.css";

class Main extends Component {
    constructor(props) {
        super(props);

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
        const {inputFieldList, inputField} = this.state;

        event.preventDefault();
        // console.log("Input Field: ", this.state.inputField);
        this.setState({
            inputField: "",
            inputFieldList: inputFieldList.concat(inputField),
        })
        // console.log("Input array test in submit handler: ", this.state.inputFieldList)

    }

    renderInfo() {
        const {inputFieldList} = this.state;
        return (
            // console.log("Array test in render function: " + this.state.inputFieldList);

            <ul>
                {inputFieldList.map((item, index) => (
                    <Results 
                    key={index}
                    id={item.id}>
                        Title: {item}
                    </Results>
                ))}
            </ul>

        )
    }
    render() {
        const {inputField} = this.state;
    
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-8" />
                        <Col size="md-4">
                            <InputField
                                inputField={inputField}
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