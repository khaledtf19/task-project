export default function Card({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow border border-slate-200 flex flex-col w-full padding items-center max-w-[30rem] p-6 gap-5">
      <h2 className="font-bold text-xl">{title}</h2>
      {children}
    </div>
  );
}
