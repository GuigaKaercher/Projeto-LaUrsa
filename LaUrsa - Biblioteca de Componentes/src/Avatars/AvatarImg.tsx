import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { CSSProperties } from "react"

interface AvatarImgProps {
    size?: "sm" | "md" | "large" | "xl";
    src?: string;
    fallback?: string;
}

export function AvatarImg({ size = "md", src = '../public/bear.png', fallback = "Bear" }: AvatarImgProps) {
    
    const sizeMap: Record<string, number> = {
        sm: 40,
        md: 64,
        large: 80,
        xl: 120
    }
    
    const avatarStyle: CSSProperties = {
        width: `${sizeMap[size]}px`,
        height: `${sizeMap[size]}px`
    }
    
    return ( 
        <Avatar style={avatarStyle}>
            <AvatarImage src={src}/>
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    )
}


export default AvatarImg

