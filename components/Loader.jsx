import React from 'react';
import {Spinner} from "@chakra-ui/react";

const Loader = () => {
    return (
        <Spinner
            size="xl"
            speed="0.75s"
            color="green"
            thickness="3px"
        />
    );
};

export default Loader;