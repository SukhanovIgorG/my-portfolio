interface WrapperProps {
    children: React.ReactElement
}
import './Wrapper.css'

export const Wrapper = ({children}: WrapperProps) => <div className="wrapper">{children}</div>