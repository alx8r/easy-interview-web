export default function Home() {
  return (
    <div><p>{process.env.PORT} | {process.env.NEXT_PUBLIC_API_URL}</p></div>
  );
}
