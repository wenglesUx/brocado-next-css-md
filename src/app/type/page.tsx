export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold text-blue-600">Bem-vindo ao Brocado Next!</h1>
      <p className="text-lg text-gray-700">Esta é uma página de teste para verificar as fontes e o Tailwind CSS.</p>
      <div className="bg-green-200 p-4 rounded-lg shadow-md">
        <p className="text-green-800">Tailwind CSS está funcionando!</p>
      </div>
    </main>
  );
}

