import Link from "next/link";

export default function ServiceCard({ href, title, description }) {
  return (
    <Link
      href={href}
      className="bg-[var(--sage)] text-[var(--ivory)] rounded-lg px-6 py-4 text-center
        shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
    >
      <h3 className="text-lg mb-1 tracking-wide">
        {title}
      </h3>

      <p className="text-xs opacity-90">
        {description}
      </p>
    </Link>
  );
}