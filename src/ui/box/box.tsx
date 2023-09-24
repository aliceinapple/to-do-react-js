import { ReactNode, CSSProperties } from "react";

interface BoxProps {
    children: ReactNode;
    className?: string;
    display?: CSSProperties['display'];
    flexDirection?: CSSProperties['flexDirection'];
    alignItems?: CSSProperties['alignItems'];
    justifyContent?: CSSProperties['justifyContent'];
    gap?: CSSProperties['gap'];
    style?: CSSProperties;
}

const Box: React.FC<BoxProps> = ({ children, className, flexDirection, alignItems, justifyContent, gap, style }) => {
    const customStyles: CSSProperties = {
        display: 'flex',
        flexDirection: flexDirection || 'row',
        alignItems: alignItems || 'stretch',
        justifyContent: justifyContent || 'flex-start',
        gap: `${gap}px` || '0',
        ...style,
    };

    return (
        <div className={className} style={customStyles}>
            {children}
        </div>
    );
}

export default Box;
