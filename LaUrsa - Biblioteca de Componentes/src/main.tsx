import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import {ButtonPrimaryMedium} from './Componentes/Buttons/ButtonPrimaryMedium.tsx'
import {ButtonPrimaryMediumIcon} from './Componentes/Buttons/ButtonPrimaryMediumIcon.tsx'
import { ButtonSecondaryMedium } from './Componentes/Buttons/ButtonSecondaryMedium.tsx'

import {AvatarImg} from './Componentes/Avatars/AvatarImg.tsx'
import {AvatarUser} from './Componentes/Avatars/AvatarUser.tsx'
import AvatarGroup from './Componentes/Avatars/AvatarGroup.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    {/*<ButtonPrimaryMedium />  */} 
    
    {/*<ButtonPrimaryMediumIcon /> */}   
    
    {/*<ButtonSecondaryMedium />*/}   
    


    {/*<AvatarImg/>*/}
    
    {/*<AvatarUser size="xl" hasNotification={true} />*/}
    
    {/*<div style={{ display: 'flex', gap: '20px', padding: '10px' }}>
      <AvatarUser size="xl" hasNotification={true} />  
    </div>*/}

    {/*<div style={{ padding: '10px' }}>
      <AvatarGroup />
    </div>*/}
      

      
    
    

    {/*<App />*/}
  </StrictMode>,
)
