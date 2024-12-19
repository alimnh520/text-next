import React, { useContext } from 'react'
import { AnimationProvider } from './ContextAnimation'

const CustomContext = () => {
    const getContext = useContext(AnimationProvider);
    return getContext;
}

export default CustomContext