import { Form } from "./components/Form/Form";
import { SvgWrap, Wrapper } from "./wrapper";
import { ReactComponent as ShapeIcon } from "./assets/icons/shape.svg";

export const App = () => (
  <Wrapper>
    <SvgWrap>
      <ShapeIcon />
    </SvgWrap>
    <Form />
  </Wrapper>
);
