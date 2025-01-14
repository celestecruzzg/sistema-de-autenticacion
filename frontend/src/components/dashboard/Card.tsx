
export default function Card({ title, description }: { title: string; description: string }) {
    return (
      <div className="bg-[var(--color-gray)] shadow-md rounded-lg p-6 w-full md:w-64">
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    );
  }
  