
import emailjs from "@emailjs/browser"
import {  Button, Input, message, Form } from "antd"
const Forms = () => {
    const { TextArea } = Input;
    const [form] = Form.useForm();
    const onFinish = (values) => {
        let templateParams = {
            user_name: values.user_name,
            user_email: values.user_email,
            message: values.message, 
        }
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
      .then(() => {
          message.success("Mail Send SuccessFully");
          form.resetFields()
      }, () => {
        message.error("Mail Not Send SuccessFully");
      });
    }

  return (
    <>
     <Form
     onFinish={onFinish}
     form={form}
     name='userform'>
        <Form.Item
        tyep="text"
        name="user_name"
        rules={[
            {
                required: true,
                message: "User Name Is Required"
            }
        ]}
        >
            <Input placeholder='User Name' size='large' />
        </Form.Item>
        <Form.Item
        tyep="email"
        name="user_email"
        rules={[
            {
                required: true,
                message: "User Email Is Required"
            }
        ]}
        >
            <Input placeholder='User Email' size='large' />
        </Form.Item>
        <Form.Item
        tyep="text"
        name="message"
        rules={[
            {
                required: true,
                message: "Message Is Required"
            }
        ]}
        >
            <TextArea rows="3" placeholder='Message' size='large' />
        </Form.Item>
        <Form.Item>
            <Button htmlType='submit' type='primary'>
                Send Mail
            </Button>
        </Form.Item>
      </Form> 
    </>
  )
}

export default Forms
