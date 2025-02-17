import Image from 'next/image';

export default function FlagImage({ alt, src }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-10/6 h-8 drop-shadow-xs rounded-xs overflow-hidden">
      <Image src={src} alt={alt} fill={true} />
    </div>
  );
}
