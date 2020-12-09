import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from "../constants/Color";

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === "android" ? Color.primaryColor : Color.primaryColor}
        />
    );
};

export default CustomHeaderButton;
