import { useState } from 'react';

const useFormData = (editData) => {
  const [formData, setData] = useState({ ...editData });

  const onFormChange = (e) => {
    setData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onCheckBoxChange = (e) => {
    setData((prevData) => ({
        ...prevData,
        [e.target.name]: !prevData[e.target.name],
    }));
  }

  const setFormData = (newData) => {
    setData({...newData});
  }
  return {
    formData,
    onFormChange,
    onCheckBoxChange,
    setFormData
  };
};

export default useFormData;