import React from 'react'
import {RadioGroup, Radio, Stack, Flex} from '@chakra-ui/react'

const Child = ({Value, setValue}) => {
    return (
        <RadioGroup
            onChange={(val) => {
                setValue(val)
            }}
            value={Value}
        >
            <Stack direction="row">
                <Radio value="First">First</Radio>
                <Radio value="Second">Second</Radio>
                <Radio value="Third">Third</Radio>
            </Stack>
        </RadioGroup>
    )
}

export default Child
