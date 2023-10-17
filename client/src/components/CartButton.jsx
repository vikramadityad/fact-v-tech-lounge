import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import SideBar from "./SideBar";

const CartButton = ({
  //deconstruct props

  itemCounter,
  setItemCounter,
  cartItems,
  setCartItems,
}) => {
  // set initial values to useState's

  const [isOpen, setIsOpen] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [thankYou, setThankYou] = useState("Cart Empty");

  //open button for cart logo/Icon
  const cartBtnHandler = () => {
    if (!isOpen) {
      setIsOpen(true);
      setThankYou("Cart Empty");
    }
  };

  //Closes Cart
  const closeCart = () => {
    setIsOpen(false);
    console.log("clicked");
  };

  // Function to remove an item from the cart
  const removeCartItem = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item !== itemToRemove);
    setItemCounter(itemCounter - 1); // Decrement itemCounter
    setCartItems(updatedCart); // Update cartItems state
  };

  // Cart layout and styling
  return (
    <>
      {/* icon/button for cart  */}
      <Button
        onClick={cartBtnHandler}
        style={{
          width: "3rem",
          height: "3rem",
          position: "relative",
          marginRight: "30px",
        }}
        variant="outline-primary"
        className="rounded-circle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          fill="currentColor"
        >
          <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
        </svg>

        {/* item counter icon for cart items  */}
        <div
          className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
          style={{
            color: "white",
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            bottom: 0,
            right: 0,
            transform: "translate(25%,25%)",
          }}
        >
          {itemCounter}
        </div>
      </Button>

      {/* //Display for cart popout  */}
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length > 0 ? (
            <SideBar
              key={cartItems._id}
              cartItems={cartItems}
              setItemCounter={setItemCounter}
              itemCounter={itemCounter}
              setCartItems={setCartItems}
              removeCartItem={removeCartItem}
              setPurchaseComplete={setPurchaseComplete}
              setThankYou={setThankYou}
            />
          ) : (
            <h2 style={{ textAlign: "center", marginTop: "50px" }}>
              {thankYou}
            </h2>
          )}
          {purchaseComplete === false ? (
            ""
          ) : (
            <span style={{ fontSize: "1.5rem", marginTop: "60px" }}>
              Thank you for your purchase!
            </span>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartButton;
