import React from 'react';
import loginImg from '../../login.svg';

export class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>

                <div className="image">
                    <img src={loginImg}/>
                </div>

                <form>
                    <fieldset>
                        <div className="field">
                            <label htmlFor="name">Name: </label>
                            <input type="text" name="name" id="name" required={true}/>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" required={true}/>
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password: </label>
                            <input type="password" name="password" id="password" required={true}/>
                        </div>
                    </fieldset>

                    <button type="submit" title="Submit" className="button submit">
                        <span>Register</span>
                    </button>
                </form>
            </div>
        )
    }
}