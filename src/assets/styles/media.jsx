import { css } from 'styled-components'

const screenSizes = {
    large: 1170,
    desktop: 992,
    tablet: 768,
    mobile: 420
}

export const media = label => {
    return css` @media (max-width:${screenSizes[label]}px)`
}