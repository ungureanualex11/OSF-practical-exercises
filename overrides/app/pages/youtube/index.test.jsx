import React from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Youtube from './index'

test('Youtube component renders with the correct video URL', () => {
    const {getByTitle} = render(
        <Youtube />
      );
    const videoPlayer = getByTitle(
        'Smoothed Brown Noise 8-Hours - Remastered, for Relaxation, Sleep, Studying and Tinnitus ☯108'
    )

    expect(videoPlayer).toBeInTheDocument()
    expect(videoPlayer).toHaveAttribute('src', 'https://www.youtube.com/embed/RqzGzwTY-6w')
})

test('Youtube component renders an iframe element', () => {
    const {container} = render(
        <Youtube />
      );
    const iframeElement = container.querySelector('iframe')

    expect(iframeElement).toBeInTheDocument()
})
