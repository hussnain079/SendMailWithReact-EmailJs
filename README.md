Email-Js With React-Js Youtube Tutorial
Link to video: https://youtu.be/Hr53jsEwc3k

There are multiple methods to getting emails to send through React.

But We are going to be using EmailJs!

This does not include saving information via form to your backend

Step 1- Create new react project with vite https://vitejs.dev/

Step 2- Create account on Email-Js https://www.emailjs.com/

Step 3- Verify Email-Js email on gmail

Step 4- Add Gmail Service

Step 5- Add New Template

Step 6- Install Email-Js in React App

Step 7- Install Ant Design in React App https://ant.design/docs/react/introduce

Step 8- Create new component & use the following code for creating a new function

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

Step 9- Use this function in your Form

Step 10- Send Email :smile:🔹