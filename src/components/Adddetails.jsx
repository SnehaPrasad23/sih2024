import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import UploadIcon from '@mui/icons-material/Upload';
import { Editor } from '@tinymce/tinymce-react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top:10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 100px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 1400px;
`;
const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 200px;
`;

const Section = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Container2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const LabelContainer = styled.div`
  width: 120px;
  text-align: right;
  margin-right: 10px;
`;

const Title = styled.h2`
  font-size: 14px;
`;

const InputContainer = styled.div`
  flex: 1;
  max-width: calc(100% - 120px);
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const SelectField = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  width: 300px;
`;

const SelectWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const ImageUpload = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UploadButton = styled.label`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FileInput = styled.input`
  display: none;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const ResetButton = styled(Button)`
  background-color: #ffa500;
  color: #fff;
`;

const AddProductButton = styled(Button)`
  background-color: #28a745;
  color: #fff;
`;

const VariantContainer = styled.div`
  margin-bottom: 20px;
`;

const VariantInputField = styled(InputField)`
  width: 250px;
`;

const AddVariantButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const Adddetails = () => {
  const [address,setAddress] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState(null);
  const [zip, setzip] = useState([]);
  const [phone, setphone] = useState([]);
  const [email, setemail] = useState([]);

  const [name, setName] = useState('');
  const [companyname, setcompanyName] = useState('');
  const [address2,setAddress2] = useState('');
  const [city2, setcity2] = useState('');
  const [state2, setstate2] = useState(null);
  const [zip2, setzip2] = useState([]);
  const [phone2, setphone2] = useState([]);
  

  

//   const handleSubcategoryChange = (e) => {
//     setSelectedSubcategory(e.target.value);
//   };

//   const handleAddVariant = () => {
//     setVariants([...variants, { type: '', options: '' }]);
//   };

//   const handlePriceChange = (e) => {
//     setPrice(e.target.value);
//   };

//   const handleVariantChange = (index, field, value) => {
//     const newVariants = [...variants];
//     newVariants[index][field] = value;
//     setVariants(newVariants);
//   };

//   const handleRemoveVariant = (index) => {
//     const newVariants = variants.filter((_, i) => i !== index);
//     setVariants(newVariants);
//   };

//   const handleFileChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', encodeURIComponent(name));
//     formData.append('description', description);
//     formData.append('variants', JSON.stringify(variants));
//     formData.append('category', selectedCategory);
//     formData.append('subcategory', selectedSubcategory);
//     formData.append('price', price);
//     formData.append('myfile', image);
    

//     try {
//       const response = await axios.post('http://localhost:5005/apu/addProduct', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.status === 200) {
//         setName('');
//         setDescription('');
//         setImage(null);
//         setVariants([]);
//         setSelectedCategory('');
//         setSelectedSubcategory('');
//         setPrice('');
//         alert("Product added successfully");
//         document.getElementById('file-upload').value = ''; 
//       }

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleReset = () => {
//     setName('');
//     setDescription('');
//     setImage(null);
//     setVariants([]);
//     setSelectedCategory('');
//     setSelectedSubcategory('');
//     setPrice('');
//     document.getElementById('file-upload').value = ''; 

//   };

  return (
    <Wrapper>
      <Container>
      <SectionTitle>INVOICE</SectionTitle>
      <SectionContainer>
        <Section>
        <SectionTitle>BILLED FROM:</SectionTitle>
        <Container2>
        <LabelContainer>
          <Title>Street Address</Title>
        </LabelContainer>
        <InputContainer>
          <InputField
          type="text"
          placeholder="Enter Street Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        </InputContainer>
        </Container2>
        <Container2>
        <LabelContainer>
        <Title>City</Title>
        </LabelContainer>
        <InputContainer>
        <InputField
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setcity(e.target.value)}
          required
        />
        </InputContainer>
        </Container2>
        <Container2>
        <LabelContainer>
        <Title>State</Title>
        </LabelContainer>
        <InputContainer>
        <InputField
          type="text"
          placeholder="Enter State"
          value={state}
          onChange={(e) => setstate(e.target.value)}
          required
        />
        </InputContainer>
        </Container2>
        <Container2>
        <LabelContainer>
        <Title>Zip</Title>
        </LabelContainer>
        <InputContainer>
        <InputField
          type="text"
          placeholder="Enter Zip"
          value={zip}
          onChange={(e) => setzip(e.target.value)}
          required
        />
        </InputContainer>
        </Container2>

        <Container2>
        <LabelContainer>
        <Title>Phone</Title>
        </LabelContainer>
        <InputContainer>
        <InputField
          type="text"
          placeholder="Enter price (in ₹ Rupees)"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          required
        />
        </InputContainer>
        </Container2>
        <Container2>
        <LabelContainer>
        <Title>Email</Title>
        </LabelContainer>
        <InputContainer>
        <InputField
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />
        </InputContainer>
        </Container2>

        </Section>
        <Section>
        <SectionTitle>BILL TO:</SectionTitle>
        <Container2>
        <LabelContainer>
        <Title>Name</Title>
        </LabelContainer>
        <InputContainer>
        <InputField
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        </InputContainer>
        </Container2>
        <Container2>
        <LabelContainer>
        <Title>Company Name</Title>
        </LabelContainer>
        <InputContainer>
        <InputField
          type="text"
          placeholder="Enter Company Name"
          value={companyname}
          onChange={(e) => setcompanyName(e.target.value)}
          required
        />
        </InputContainer>
        </Container2>
        <Container2>
        <LabelContainer>
        <Title>Street Address</Title>
        </LabelContainer>
        <InputContainer>
        <InputField
          type="text"
          placeholder="Enter Street Address"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          required
        />
        </InputContainer>
        </Container2>
        <Container2>
        <LabelContainer>
        <Title>City</Title>
        </LabelContainer>
        <InputContainer>
        <InputField
          type="text"
          placeholder="Enter City"
          value={city2}
          onChange={(e) => setcity2(e.target.value)}
          required
        />
        </InputContainer>
        </Container2>
        <Container2>
        <LabelContainer>
        <Title>State</Title>
        </LabelContainer>
        <InputContainer>
        <InputField
          type="text"
          placeholder="Enter State"
          value={state2}
          onChange={(e) => setstate2(e.target.value)}
          required
        />
        </InputContainer>
        </Container2>
        <Container2>
        <LabelContainer>
        <Title>Zip</Title>
        </LabelContainer>
        <InputContainer>
        <InputField
          type="text"
          placeholder="Enter Zip"
          value={zip2}
          onChange={(e) => setzip2(e.target.value)}
          required
        />
        </InputContainer>
        </Container2>

        <Container2>
        <LabelContainer>
        <Title>Phone</Title>
        </LabelContainer>
        <InputContainer>
        <InputField
          type="text"
          placeholder="Enter price (in ₹ Rupees)"
          value={phone2}
          onChange={(e) => setphone2(e.target.value)}
          required
        />
        </InputContainer>
        </Container2>  
        </Section>
      </SectionContainer>
      </Container>
    </Wrapper>
  );
};

export default Adddetails;
