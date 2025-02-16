import {css} from '@emotion/react'
import styled from '@emotion/styled'

const Hello = styled.h2`
    color: ${ props => props.blue ? 'blue' : 'red' };
`

/**  @jsxImportSource @emotion/react */
const EmotionComponent = () => {

    const largeFont = css`
        font-size: 54px;
    `

    const fontRed = css`
        ${largeFont}
        color: red;
    `

    return (<>
        <h2 css={css`font-size: 80px;`}>
            エモーションのテスト
        </h2>
        <h2 css={fontRed}>赤いフォントが表示されます</h2>
        <Hello>スタイル用コンポーネント</Hello>
    </>)
}

export default EmotionComponent

