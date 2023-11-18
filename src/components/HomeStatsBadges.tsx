import useElementIsVisible from "../hooks/useElementIsVisible";
import BookLocationsBadge from "./BookLocationsBadge"
import BookLoversBadge from "./BookLoversBadge"
import CuratedLibrariesBadge from "./CuratedLibrariesBadge"
import { useRef } from 'react'

export default function HomeStatsBadges(){
    const badgesRef = useRef<HTMLDivElement>(null);
    const isVisible = useElementIsVisible(badgesRef);

    return(
        <div ref={badgesRef} className="bg-logo flex md:justify-center items-center h-80">
            <div className="flex md:justify-around w-full md:w-3/5">
                <BookLocationsBadge startValue={124} endValue={125} elementIsVisible={isVisible}/>
                <BookLoversBadge startValue={15345} endValue={16587} elementIsVisible={isVisible}/>
                <CuratedLibrariesBadge startValue={32234} endValue={34386} elementIsVisible={isVisible}/>
            </div>
        </div>
    )
}