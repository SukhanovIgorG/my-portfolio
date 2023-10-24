import { ReactNode, Suspense } from 'react'


interface CSprops { children: ReactNode}
const CustomSuspense = ({ children }: CSprops) => {
  return <Suspense fallback={<p>Loading...</p>}>{ children }</Suspense>
} 

export default CustomSuspense