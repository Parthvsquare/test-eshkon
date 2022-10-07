import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";

let currentOTPIndex: number = 0;

interface IProps {
  show: boolean;
  handleClose: () => void;
}

function OTPBox({ show, handleClose }: IProps) {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  const handleOnChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);
    if (!value) {
      setActiveOTPIndex(currentOTPIndex - 1);
    } else {
      setActiveOTPIndex(currentOTPIndex + 1);
    }
    setOtp(newOTP);
  };

  const handleOnKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    key === "Backspace" && setActiveOTPIndex(currentOTPIndex - 1);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Verification</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex ">
          <div className="container height-100 d-flex justify-content-center align-items-center">
            <div className="position-relative">
              <div className="card p-2 text-center">
                <div>
                  <span>A code has been sent to</span>
                  <small> mail</small>
                </div>
                <div
                  id="otp"
                  className="inputs d-flex flex-row justify-content-center mt-2">
                  {otp.map((_, index) => {
                    return (
                      <React.Fragment key={index}>
                        <input
                          className="m-2 text-center form-control rounded"
                          type="text"
                          ref={index === activeOTPIndex ? inputRef : null}
                          onChange={handleOnChange}
                          onKeyDown={(e) => handleOnKeyDown(e, index)}
                          value={otp[index]}
                        />
                        {index === otp.length - 1 ? null : (
                          <span className="w-2 py-0.5 bg-gray-400" />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OTPBox;
