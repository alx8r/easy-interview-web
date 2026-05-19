import { ModeCards } from '@/src/ui/composites';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <h1>Topics:</h1>
        <ModeCards />
      </div>
      <div/>
    </div>
  );
}
