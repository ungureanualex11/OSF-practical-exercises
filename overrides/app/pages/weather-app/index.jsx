import React, {useState} from 'react'
import {Box, Input, Button, Flex, Text} from '@chakra-ui/react'

const WeatherApp = () => {
    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const API_KEY = '0469b851cb8151b3bf3de255f3230a8b'

    const fetchWeatherData = () => {
        setIsLoading(true)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setWeatherData(data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching weather data: ', error)
                setIsLoading(true)
            })

        setCity('')
    }

    const getForecastColor = (weatherDescription) => {
        switch (weatherDescription.toLowerCase()) {
            case 'clear sky':
                return 'yellow.200'
            case 'few clouds':
                return 'blue.200'
            case 'scattered clouds':
                return 'gray.400'
            case 'moderate rain':
                return 'cyan'
            case 'haze':
                return 'yellow.500'
            case 'overcast clouds':
                return 'gray.400'
            default:
                return 'white'
        }
    }

    const renderContent = () => {
        switch (true) {
            case isLoading:
                return <Text mt={2}>Loading...</Text>
            case !weatherData:
                return <Text mt={2}>No data...</Text>
            case !weatherData.main:
                return <Text mt={2}>No data...</Text>
            default:
                const temperature = (weatherData.main.temp - 273.15).toFixed(1)
                const iconUrl = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`

                return (
                    <Box mt={4} bg={getForecastColor(weatherData.weather[0].description)}>
                        <Text fontSize="2xl">{weatherData.name}</Text>
                        <img src={iconUrl} alt="Weather Icon" />
                        <Text fontSize="lg">
                            {weatherData.weather[0].description.toUpperCase()}
                        </Text>
                        <Text fontSize="lg">Temperature: {temperature}°C</Text>
                    </Box>
                )
        }
    }

    return (
        <Box mt="5" ml="5">
            <Flex>
                <Input
                    w="10%"
                    placeholder="Enter city"
                    mb="4"
                    mr="2"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <Button colorScheme="teal" onClick={fetchWeatherData}>
                    Search
                </Button>
            </Flex>
            {renderContent()}
        </Box>
    )
}

export default WeatherApp
