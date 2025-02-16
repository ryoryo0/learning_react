import React, {useState} from "react";
import styled from "styled-components";

const StyledUseStateProps = () => {
    const [isRed, setIsRed] = useState(false)

    return (<>
        <StyledComponent a={isRed}>
            <p>props.useStateのテスト</p>
            <button onClick={() => setIsRed(!isRed)}>色を変更する</button>    
        </StyledComponent>
    </>)
}

const StyledComponent = styled.div`
    width: 200px;
    height: 100px;
    background-color: ${(props) => (props.a ? 'red' : 'green')};
`

export default StyledUseStateProps