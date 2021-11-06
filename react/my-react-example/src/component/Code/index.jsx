import React from "react";

// antd
import { Button } from 'antd';
import { message } from 'antd';


// api
import { GetCode } from "../../api/account";
import { email_validator } from "../../utils/validator";


let timer = {};
export default class Code extends React.Component {


    input_username_ref = React.createRef()

    constructor(props) {
        super(props)
        let { username } = props
        this.state = {
            control_button_loading: false,
            control_button_dissable: true,
            control_button_text: '获取验证码',
            username
        }
    }

    static getDerivedStateFromProps(props, state) {
        let { username } = props
        if (username !== state.username) {
            return {
                username
            }
        }
        return null
    }

    componentWillUnmount() {
        clearInterval(timer)
    }

    getCode = async () => {
        let { username } = this.state
        try {
            let {status, data:{message: msg}} = await GetCode({username, module: 'register'})
            this.setState({
                control_button_dissable: true,
                control_button_loading: true,
                control_button_text: "发送中"
            })
            message.success(msg);
            if (status === 200) {
                let num = 5
                timer = setInterval(() => {
                    num--;
                    if (num <= 0) {
                        this.setState({
                            control_button_loading: false,
                            control_button_text: '重新获取'
                        }, () => {
                            timer = clearInterval(timer)
                        })
                        return;
                    }
                    this.setState({ control_button_text: `${num}S` });
                }, 1000);
            }
        } catch (error) {
            message.warning('获取验证码失败,请重新获取');
            this.setState({
                control_button_loading: false,
                control_button_text: '重新获取'
            })
        }
    }

    render() {
        let { control_button_dissable, control_button_text, control_button_loading } = this.state
        let { username } = this.props
        return (
            <Button 
                loading={control_button_loading} 
                onClick={this.getCode} 
                disabled={ email_validator(username) ? !control_button_dissable: control_button_dissable} 
                block 
                type="danger" >
                {control_button_text}
            </Button>
        )

    }
}