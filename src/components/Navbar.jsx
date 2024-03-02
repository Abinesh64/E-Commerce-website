import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { mobile } from "../responsive";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
  flex:1;  
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size:14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`
const SeachContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
`
const Input=styled.input`
  border:none;
  ${mobile({ width: "50px" })}
`
const Center = styled.div`  
  flex:1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`
const Right = styled.div`  
  flex:1;  
  display:flex;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`
const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`


const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SeachContainer>
              <Input/>
              <Search style={{color:"gray",fontSize:"16"}}/>
            </SeachContainer>
          </Left>
          <Center>
            <Logo>AMAZON.</Logo>
          </Center>
          <Right>
            <Menu>REGISTER</Menu>
            <Menu>SIGN IN</Menu>
            <Link to="/cart">
            <Menu>
              <Badge badgeContent={quantity} color='primary'> 
                 <ShoppingCartOutlined/>
              </Badge>
            </Menu>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Navbar