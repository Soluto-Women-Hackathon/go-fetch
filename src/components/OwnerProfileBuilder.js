import React, { Component } from 'react';
import './OwnerProfileBuilder.css';


const otherAnimals = [
    { label: 'No Animals', value: 'noAnimals' },
    { label: 'Dogs', value: 'dog' },
    { label: 'Cats', value: 'cat' },
    { label: 'Dogs And Cats', value: 'both' },
];


class ownerProfileBuilder extends Component {
    animalsOptions = otherAnimals.map(function(option) {
        return (
            <option key={option.label} value={option.value}>
                {option.label}
            </option>
        )
    });


    render() {
        return (
            <div className="owner-profile-builder">
                <div className="profile-wrapper">
                    <label htmlFor="fullName" className={"lable-field"}>Full Name</label>
                    <br/>
                    <input type="text" id="fullName" className={"input-field"} name={"fullName"}/>
                    <br/>
                    <br/>
                    <label htmlFor="birth" className={"lable-field"}>Date Of Birth</label>
                    <br/>
                    <input type="date" id="birth" className={"input-field"} name={"birth"}/>
                    <br/>
                    <br/>
                    <label htmlFor="city" className={"lable-field"}>Living Area</label>
                    <br/>
                    <input type="text" id="city" className={"input-field"} name={"city"}/>
                    <br/>
                    <br/>
                    <label htmlFor="otherAnimals" className={"lable-field"}>Other Animals</label>
                    <br/>
                    {/*<input type="text" id="otherAnimals" className={"input-field"} name={"otherAnimals"}/>*/}
                    <select name="otherAnimals" id="otherAnimals">
                        {this.animalsOptions}
                    </select>
                    <br/>
                    <br/>
                    <label htmlFor="place" className={"lable-field"}>Your Place</label>
                    <br/>
                    <input type="text" id="place" className={"input-field"} name={"place"}/>
                    <br/>
                    <br/>
                    <label htmlFor="shared" className={"lable-field"}>Shared Place</label>
                    <br/>
                    <input type="text" id="shared" className={"input-field"} name={"shared"}/>
                    <br/>
                    <br/>
                    <label className={"lable-field"}>Activity Level</label>
                    <br/>
                    <input type="text" className={"input-field"}/>
                    <br/>
                    <br/>
                    <label className={"lable-field"}>Free Time</label>
                    <br/>
                    <input id="shared" className={"input-field"}/>
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
}

export default ownerProfileBuilder;
