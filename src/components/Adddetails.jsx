import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
// import UploadIcon from '@mui/icons-material/Upload';
import { Editor } from "@tinymce/tinymce-react";

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 10px 0 70px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
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

const ItemContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  // padding-bottom: 60px;
`;

const ItemRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const ItemInput = styled(InputField)`
  flex: 1;
`;


const AddItemButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Adddetails = () => {
  const [address, setAddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState(null);
  const [zip, setzip] = useState([]);
  const [phone, setphone] = useState([]);
  const [email, setemail] = useState([]);

  const [name, setName] = useState("");
  const [companyname, setcompanyName] = useState("");
  const [address2, setAddress2] = useState("");
  const [city2, setcity2] = useState("");
  const [state2, setstate2] = useState(null);
  const [zip2, setzip2] = useState([]);
  const [phone2, setphone2] = useState([]);

  const [items, setItems] = useState([
    { item: "", description: "", amount: "", cost: "" },
  ]);
  const itemsEndRef = useRef(null); 
  // const addItemButtonRef = React.useRef(null);
  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };
  const handleAddItem = () => {
    setItems([...items, { item: "", description: "", amount: "", cost: "" }]);
  };
  useEffect(() => {
    if (items.length > 0) {
      itemsEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [items.length]);

  return (
    <PageWrapper>
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
        <ItemContainer>
          <SectionTitle>Item Details</SectionTitle>
          {items.map((item, index) => (
            <ItemRow key={index}>
              <ItemInput
                type="text"
                placeholder="Item"
                value={item.item}
                onChange={(e) => handleItemChange(index, 'item', e.target.value)}
              />
              <ItemInput
                type="text"
                placeholder="Description"
                value={item.description}
                onChange={(e) => handleItemChange(index, 'description', e.target.value)}
              />
              <ItemInput
                type="text"
                placeholder="Amount"
                value={item.amount}
                onChange={(e) => handleItemChange(index, 'amount', e.target.value)}
              />
              <ItemInput
                type="text"
                placeholder="Cost"
                value={item.cost}
                onChange={(e) => handleItemChange(index, 'cost', e.target.value)}
              />
            </ItemRow>
          ))}
          <div ref={itemsEndRef} />
          <AddItemButton onClick={handleAddItem} >Add Item</AddItemButton>
        </ItemContainer>
      </Container>
    </Wrapper>
    </PageWrapper>
  );
};

export default Adddetails;
