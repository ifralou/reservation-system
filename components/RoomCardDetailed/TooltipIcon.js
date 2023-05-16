import React, {forwardRef} from 'react';
import {Icon, Tooltip} from "@chakra-ui/react";

const TooltipIcon = ({active, textTooltip, icon}) => {
    return <Tooltip label={textTooltip}>
       <span>
        <Icon as={icon} boxSize={25} color={active ? "green" : "red"}/>
       </span>
    </Tooltip>
}

export default TooltipIcon;