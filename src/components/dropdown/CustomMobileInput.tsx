"use client";
import React from "react";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./styles.css";

type CustomMobileInputProps = {
  selectedCountryCode?: string;
  setSelectedCountryCode: (value: string) => void;
  mobileNumber: string;
  setMobileNumber: (value: string) => void;
  setMobileNumberValid: (isValid: boolean) => void;
  dropdownCSS: string;
  inputCSS: string;
  onCountryChange?: (countryCode: string) => void;
  dropdownWidth: string;
};

const CustomMobileInput: React.FC<CustomMobileInputProps> = ({
  mobileNumber,
  setMobileNumber,
  setMobileNumberValid,
  inputCSS,
  onCountryChange,
  setSelectedCountryCode,
}) => {
  return (
    <div className="flex items-center">
    <PhoneInput
        value={mobileNumber}
        onChange={(value, country: CountryData) => {
          const currentDialCode = mobileNumber.startsWith('+')
          ? mobileNumber.slice(1, 1 + country.dialCode.length) 
          : '';
          if (currentDialCode !== country.dialCode) {
            const newFullNumber = `+${country.dialCode}`;
            setMobileNumber(newFullNumber);
          }else{
            const numericPart = value.replace(country.dialCode, '');
            const newFullNumber = `+${country.dialCode}${numericPart}`;
            setMobileNumber(newFullNumber);
          }

          if (typeof onCountryChange === "function") {
            onCountryChange(country?.countryCode?.toUpperCase() || "");
          }

          if (typeof setSelectedCountryCode === "function") {
            setSelectedCountryCode(country?.countryCode?.toUpperCase() || "");
          }

          // Validate phone number
          const numericPart = value.replace(country.dialCode, '');
          const isValid =
            numericPart.length >= 7 &&
            numericPart.length <= 15;
          
          setMobileNumberValid(isValid);
        }}
        placeholder="Enter phone number"
        inputProps={{ className: inputCSS }}
        country={"cn"}
        autoFormat={true}
      />
    </div>
  );
};

export default CustomMobileInput;
