import { LucideProps } from 'lucide-react'

export const Icons = {
  logo: (props: LucideProps) => (
    <svg {...props} viewBox='0 0 512 512'>
      <circle cx='256' cy='256' r='256' fill='#3498db' />
      <rect x='0' y='0' width='512' height='256' fill='#6c757d' />
      <path d='M0 0h256v512H0z' fill='#2b6cb0' />
      <circle cx='256' cy='256' r='128' fill='#fff' />
    </svg>
  ),
}
