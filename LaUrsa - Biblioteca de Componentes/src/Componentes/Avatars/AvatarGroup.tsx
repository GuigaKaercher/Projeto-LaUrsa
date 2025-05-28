import type { CSSProperties } from 'react';
import AvatarImg from '../../Componentes/Avatars/AvatarImg';

interface AvatarGroupProps {
  users?: string[];
  size?: 'sm' | 'md' | 'large' | 'xl';
  max?: number;
}

function AvatarGroup({ users = ['user5.png', 'user4.png', 'user3.png', 'user2.png', 'user1.png'], size = 'large', max = 5 }: AvatarGroupProps) {
 
  const displayUsers = users.slice(0, max);
  
 
  const getOffset = () => {
    switch(size) {
      case 'sm': return 20;
      case 'md': return 25;
      case 'large': return 30;
      case 'xl': return 40;
      default: return 30;
    }
  };

  return (
    <div className="relative flex items-center">
      {displayUsers.map((_, index) => {
        const avatarStyle: CSSProperties = {
          position: 'relative',
          zIndex: displayUsers.length - index,
          marginLeft: index === 0 ? 0 : `-${getOffset()}px`,
          border: '2px',
          borderRadius: '50%'
        };

        return (
          <div key={index} style={avatarStyle}>
            <AvatarImg 
              size={size} 
              src={`/user${index + 1}.png`} 
              fallback={`U${index + 1}`} 
            />
          </div>
        );
      })}
      
      {users.length > max && (
        <div 
          className="flex items-center justify-center text-white rounded-full ml-2"
          style={{
            width: '80px',
            height: '80px',
            fontSize: '14px',
            marginLeft: `-${getOffset()}px`,
            position: 'relative',
            zIndex: 0,
            border: '3px solid white'
          }}
        >
          +{users.length - max}
        </div>
      )}
      
      
      <div className="absolute right-0 bottom-0 bg-purple-600 text-white text-xs px-1 py-0.5 rounded-md" style={{ transform: 'translate(80%, 80%)' }}>
        80 × 80
      </div>
    </div>
  );
}

export default AvatarGroup;
