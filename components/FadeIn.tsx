type FadeInProps = React.HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export default function FadeIn({ children, className = '', delay = 0, style, ...props }: FadeInProps) {
  return (
    <div
      className={`fade-in ${className}`}
      style={{ ...(style || {}), animationDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}
