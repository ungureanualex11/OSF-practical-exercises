import React, {useState} from 'react'
import {Box, ChakraProvider} from '@chakra-ui/react'
import Child from '../child/child'

const Parent = () => {
    const [Value, setValue] = useState('')

    return (
        <ChakraProvider>
            <Box p={4}>
                <h2>
                    {Value === 'First'
                        ? '1'
                        : Value === 'Second'
                        ? '2'
                        : Value === 'Third'
                        ? '3'
                        : 'Change me'}
                </h2>
                <Child Value={Value} setValue={setValue} />
            </Box>
        </ChakraProvider>
    )
}

export default Parent
