import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import {ButtonPrimaryMedium} from './Buttons/ButtonPrimaryMedium.tsx'
import {ButtonPrimaryMediumIcon} from './Buttons/ButtonPrimaryMediumIcon.tsx'
import { ButtonSecondaryMedium } from './Buttons/ButtonSecondaryMedium.tsx'

import {AvatarImg} from './Avatars/AvatarImg.tsx'
import {AvatarUser} from './Avatars/AvatarUser.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    {/*<ButtonPrimaryMedium /> */}  
    
    {/*<ButtonPrimaryMediumIcon /> */}
    
    {/*<ButtonSecondaryMedium /> */} 
    

    {/*<AvatarImg/> */} 
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <AvatarUser size="sm" hasNotification={true} />
    </div>

      
    
    

    {/*<App />*/}
  </StrictMode>,
)
