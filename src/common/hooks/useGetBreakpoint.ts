import { useState, useEffect } from 'react';

export enum BreakPoint {
    XL, LG, MD, SM, XS
}

export function useGetBreakpoint() {
    const [breakpoint, setBreakpoint] = useState(BreakPoint.XS);
    useEffect(() => {
        if (window.matchMedia("(min-width: 1280px)")?.matches) {
            setBreakpoint(BreakPoint.XL);
        } else if (window.matchMedia("(min-width: 1024px)")?.matches) {
            setBreakpoint(BreakPoint.LG);
        } else if (window.matchMedia("(min-width: 768px)")?.matches) {
            setBreakpoint(BreakPoint.MD);
        } else if (window.matchMedia("(min-width: 640px)")?.matches) {
            setBreakpoint(BreakPoint.SM);
        } else {
            setBreakpoint(BreakPoint.XS);
        }
    }, []);

    return { breakpoint };
}
