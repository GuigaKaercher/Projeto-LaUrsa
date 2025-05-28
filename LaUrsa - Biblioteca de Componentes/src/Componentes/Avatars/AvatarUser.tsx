import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { CSSProperties } from "react"

interface AvatarUserProps {
    size?: "sm" | "md" | "large" | "xl";
    src?: string;
    fallback?: string;
    hasNotification?: boolean;
}

export function AvatarUser({ size = "md", src = '../public/user-off.png', fallback = "User", hasNotification = false }: AvatarUserProps) {
    
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
        <div className="relative inline-block">
            <Avatar className="bg-blue-600" style={avatarStyle}>
                <AvatarImage src={src}/>
                <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
            {hasNotification && (
                <div 
                    className="absolute rounded-full bg-red-500" 
                    style={{
                        width: `${Math.max(sizeMap[size] * 0.2, 10)}px`,
                        height: `${Math.max(sizeMap[size] * 0.2, 10)}px`,
                        top: '5%',
                        right: '5%',
                        border: '2px solid white'
                    }}
                />
            )}
        </div>
    )
}


export default AvatarUser
