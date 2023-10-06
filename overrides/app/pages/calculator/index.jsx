import React from 'react'
import {useState, useEffect} from 'react'
import {
    Container,
    Flex,
    Heading,
    Center,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Select,
    Button
} from '@chakra-ui/react'
const Calculator = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [operation, setOperation] = useState('+')
    const [result, setResult] = useState(0)

    useEffect(() => {
        switch (operation) {
            case '+':
                setResult(num1 + num2)
                break
            case '-':
                setResult(num1 - num2)
                break
            case '*':
                setResult(num1 * num2)
                break
            case '/':
                setResult(num1 / num2)
                break
            default:
                setResult(0)
                break
        }
    }, [num1, num2, operation])

    const handleNum1Change = (value) => {
        setNum1(Number(value))
    }

    const handleNum2Change = (value) => {
        setNum2(Number(value))
    }

    const handleOperationChange = (e) => {
        setOperation(e.target.value)
    }

    const handleClear = () => {
        setNum1(0)
        setNum2(0)
        setOperation('+')
    }

    return (
        <Container mt="100">
            <Center mb="5">
                <Heading>Calculator</Heading>
            </Center>

            <Center>
                <Flex>
                    <NumberInput
                        defaultValue={0}
                        colorScheme="cyan"
                        mr="3"
                        value={num1}
                        onChange={handleNum1Change}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>

                    <NumberInput
                        defaultValue={0}
                        colorScheme="cyan"
                        value={num2}
                        onChange={handleNum2Change}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>

                    <Select value={operation} onChange={handleOperationChange}>
                        <option value="+"> + </option>
                        <option value="-"> - </option>
                        <option value="*"> * </option>
                        <option value="/"> / </option>
                    </Select>

                    <Button colorScheme="blue" onClick={handleClear}>
                        Clear
                    </Button>
                </Flex>
            </Center>
            <Center mt="5">
                <Heading size="md">{result}</Heading>
            </Center>
        </Container>
    )
}

export default Calculator
