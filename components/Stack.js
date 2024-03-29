import { stack } from '@/data/config';

export default function Stack() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max text-2xl md:text-4xl">
          {stack.title}
        </h2>
      </div>
      <div className="w-full flex flex-wrap -m-2">
        {stack.stack.map((item, index) => (
          <span
            className="bg-gray-200 rounded-lg dark:bg-zinc-900 flex items-center justify-center rounded-lg m-2 px-3 py-1"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
