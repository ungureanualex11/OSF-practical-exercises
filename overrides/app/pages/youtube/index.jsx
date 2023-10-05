import React from 'react'
import {AspectRatio, Container} from '@chakra-ui/react'

function Youtube() {
    return (
        <Container>
            <AspectRatio mt="10" maxW="980px" ratio={4 / 3}>
                <iframe
                    title="Smoothed Brown Noise 8-Hours - Remastered, for Relaxation, Sleep, Studying and Tinnitus ☯108"
                    src="https://www.youtube.com/embed/RqzGzwTY-6w"
                    allowFullScreen
                />
            </AspectRatio>
        </Container>
    )
}

export default Youtube
