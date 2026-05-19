export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='flex justify-center items-center bg-background-tertiary'><div className='max-w-300 w-full'>{children}</div></div>;
}
