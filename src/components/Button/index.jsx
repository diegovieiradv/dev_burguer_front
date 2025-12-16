import { ContainerButton } from "./styles.js";
import PropTypes from "prop-types";

export function Button({ children, ...rest }) {
return <ContainerButton {...rest}>
{children}
</ContainerButton>
}

Button.propTypes = {
  children: PropTypes.string,
};