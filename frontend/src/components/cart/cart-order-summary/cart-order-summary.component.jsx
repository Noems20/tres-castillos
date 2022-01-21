import React from 'react';

// REDUX
import { createOrder } from '../../../redux/orders/orders-actions';
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import CustomButton from '../../custom-button/custom-button.component';

// STYLES
import {
  Container,
  Title,
  OrderInfo,
  OrderInfoTitle,
  ItemsContainer,
  ItemName,
  ItemQuantity,
  ItemPrice,
  TotalContainer,
} from './cart-order-summary.styles';

const OrderInfoItem = ({ name, price, quantity = null }) => {
  return (
    <>
      <ItemName>{name}</ItemName>
      {quantity && <ItemQuantity>x {quantity}</ItemQuantity>}
      <ItemPrice>{`$${price}`}</ItemPrice>
    </>
  );
};

const CartOrderSummary = ({ cart, productsAmmount, totalPrice }) => {
  // ------------------------ STATE AND CONSTANTS -------------------
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  // ------------------------ HANDLERS -------------------
  const checkout = () => {
    dispatch(createOrder());
  };

  return (
    <Container>
      <Title>Resumen de orden</Title>
      <OrderInfo>
        {cart.length > 0 ? (
          <>
            <OrderInfoTitle>Productos</OrderInfoTitle>
            <ItemsContainer>
              {cart.map((cartItem) => {
                return (
                  <OrderInfoItem
                    name={cartItem.name}
                    price={cartItem.totalprice}
                    quantity={cartItem.quantity}
                    key={cartItem._id}
                  />
                );
              })}
            </ItemsContainer>
            <OrderInfoTitle>Total</OrderInfoTitle>
            <TotalContainer>
              <OrderInfoItem
                name={`Subtotal(${productsAmmount})`}
                price={totalPrice}
              />
              <OrderInfoItem name="Envio" price="50" />
              <OrderInfoItem name="Precio total" price={totalPrice + 50} />
            </TotalContainer>
            <CustomButton
              primary
              onClick={checkout}
              loading={loading.firstLoader}
              disabled={loading.firstLoader}
            >
              Proceder al pago
            </CustomButton>
          </>
        ) : (
          <OrderInfoTitle style={{ textAlign: 'center' }}>
            Tu carrito esta vacío
          </OrderInfoTitle>
        )}
      </OrderInfo>
    </Container>
  );
};

export default CartOrderSummary;
