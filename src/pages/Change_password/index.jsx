import React from "react";
import './style.css'
import {
    Button,
    Form,
    Input,
} from 'antd';
import { useState } from "react";
import Slide_bar from "../../components/Slider_bar";
import ChangePassword from "../../components/ChangePassword";

function Change_pw_page() {
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 12,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 24,
            },
        },
    };
    return (
        <div className="Change_pw_page">
            <div className="Change_pw_page_box">
            <p style={{ color: 'gray' }}>Now you can create a new Password for your account  </p>
            <Form {...formItemLayout} layout="vertical">
                <Form.Item
                    name="password"
                    label="Current Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            min: 6,
                            message: 'Password must be at least 6 characters long',

                        }
                    ]}
                    hasFeedback
                >


                    <Input.Password placeholder="Enter current password" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="New Password"

                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            min: 6,
                            message: 'Password must be at least 6 characters long',

                        }
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="Enter New Password" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Enter confirm Password" />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit" style={{ width: '15%', height: '48px', margin: '15px 30px', }}>Save</Button>
                    <Button style={{ width: '15%', height: '48px', border: "2px solid #8767E1", paddingLeft: "8px" }}>Cancel</Button>
                </Form.Item>
            </Form>
            </div>
        </div>
    );
}

export default Change_pw_page;