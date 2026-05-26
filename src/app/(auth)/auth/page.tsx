import { Surface } from '@heroui/react';
import { AuthTabsWidget } from '@/widgets';

export default function AuthPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Surface className="w-xl min-w-80 rounded-3xl p-6" variant="default">
        <AuthTabsWidget />
      </Surface>
    </div>
  );
}
