import type { Quote } from '@/types/book';

interface QuoteCardProps {
  quote: Quote;
}

export default function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <figure className="relative rounded-2xl bg-gradient-to-br from-surface-50 to-surface-100 border border-surface-200 p-6 md:p-8 overflow-hidden">
      {/* Decorative quotation mark */}
      <div
        className="absolute -top-2 -left-1 text-[8rem] leading-none font-display font-bold text-brand-100 select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <blockquote className="relative z-10">
        <p className="text-lg md:text-xl font-medium leading-relaxed text-surface-800 italic">
          &ldquo;{quote.text}&rdquo;
        </p>
      </blockquote>

      {quote.context && (
        <figcaption className="relative z-10 mt-4 flex items-center gap-2">
          <div className="h-px flex-1 max-w-[40px] bg-surface-300" />
          <span className="text-sm text-surface-500 font-medium">
            {quote.context}
          </span>
        </figcaption>
      )}

      {/* Subtle decorative element */}
      <div
        className="absolute -bottom-4 -right-4 text-[6rem] leading-none font-display font-bold text-brand-50 select-none pointer-events-none rotate-180"
        aria-hidden="true"
      >
        &ldquo;
      </div>
    </figure>
  );
}
