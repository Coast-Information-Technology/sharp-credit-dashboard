
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
    return (
        <TooltipComponent content={title} position="BottomCenter">
            <button type="button" onClick={customFunc} style={{ color }} className="relative tet-xl rounded-full p-3 hover:bg-light-gray">
                <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-3 w-3 right-2 top-2" />
                {icon}
            </button>
        </TooltipComponent>
    )
}

export default NavButton