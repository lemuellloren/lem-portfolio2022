import { stack } from '@/data/config';
import LogoWall from './LogoWall';

export default function Stack() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max text-2xl md:text-4xl">
          {stack.title}
        </h2>
      </div>
      <div className="w-full flex flex-wrap -m-2">
        <LogoWall
          items={stack.stack}
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(5rem, 1rem + 5vmin, 25rem)"
          duration="60s"
        />
      </div>
    </div>
  );
}
