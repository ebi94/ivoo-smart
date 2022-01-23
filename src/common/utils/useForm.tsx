import { useState, useEffect } from "react";
import { notification, message } from "antd";
import axios from "axios";
import ContactForm from "../../services/contactForm";

export const useForm = (validate: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Pesan anda berhasil dikirim ",
    });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
    const res = await ContactForm(values);
    console.log('res contact form', res)
    if (res && res.status === "OK") {
      setShouldSubmit(true);
      // message.success('Pesan anda berhasil dikirim');
    } else {
      // message.error('Ooops ada kesalahan server !');
    }
    // if (Object.keys(values).length === 3) {
    //   axios
    //     .post(url, {
    //       ...values,
    //     })
    //     .then(() => {
    //       setShouldSubmit(true);
    //     });
    // }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
