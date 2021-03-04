import React, {Component} from 'react';


class Authentication extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:{
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placholder: 'Mail Address'
                },
                value: '',
                validation:{
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password:{
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placholder: 'Password'
                },
                value: '',
                validation:{
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    }
    
    
    render(){
        return(
            <form>

            </form>
        );
    };
}


export default Authentication;