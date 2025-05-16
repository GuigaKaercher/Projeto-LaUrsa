import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import {ButtonPrimaryMedium} from './Buttons/ButtonPrimaryMedium.tsx'
import {ButtonPrimaryMediumIcon} from './Buttons/ButtonPrimaryMediumIcon.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    {/*<ButtonPrimaryMedium /> */} 
    <ButtonPrimaryMediumIcon />    
    
    
    
    
    

    {/*<App />*/}
  </StrictMode>,
)
