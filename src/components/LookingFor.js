import React, { Component } from 'react';
import './LookingFor.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class LookingFor extends Component {
    render() {
        return (
            <div className="owner-profile-builder">
                <div className="profile-wrapper">
                    <label htmlFor="animalSpecie" className={"lable-field"}>Pet</label>
                    <RadioGroup horizontal>
                        <RadioButton value="dog">
                            Dog
                        </RadioButton>
                        <RadioButton value="cat">
                            Cat
                        </RadioButton>
                    </RadioGroup>
                    <br/>
                    <br/>
                    <label htmlFor="animalGender" className={"lable-field"}>Sex</label>
                    <RadioGroup horizontal>
                        <RadioButton value="male">
                            Male
                        </RadioButton>
                        <RadioButton value="female">
                            Female
                        </RadioButton>
                    </RadioGroup>
                    <br/>
                    <br/>
                    <div className={"age-wrapper"}>
                        <div>
                            <label htmlFor="ageYear" className={"lable-field"}>Age Year</label>
                            <br/>
                            <select className={"selection"} name="ageYear" id="ageYear">
                                <option value="0">0</option>
                                <option value="0">1</option>
                                <option value="0">2</option>
                                <option value="0">3</option>
                                <option value="0">4</option>
                                <option value="0">5</option>
                                <option value="0">6</option>
                                <option value="0">7</option>
                                <option value="0">8</option>
                                <option value="0">9</option>
                                <option value="0">10</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="ageMonth" className={"lable-field"}>Age Month</label>
                            <br/>
                            <select name="ageMonth" id="ageMonth" className={"selection"}>
                                <option value="0">0</option>
                                <option value="0">1</option>
                                <option value="0">2</option>
                                <option value="0">3</option>
                                <option value="0">4</option>
                                <option value="0">5</option>
                                <option value="0">6</option>
                                <option value="0">7</option>
                                <option value="0">8</option>
                                <option value="0">9</option>
                                <option value="0">10</option>
                                <option value="0">11</option>
                                <option value="0">12</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <label htmlFor="size" className={"lable-field"}>Size</label>
                    <br/>
                    <select name="size" id="size" className={"selection"}>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
}

export default LookingFor;
