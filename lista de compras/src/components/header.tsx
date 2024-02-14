type HeaderProps = {
  title: string;
  subtitle?: string;
};

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <div>
      <h1>{title}</h1>
      <span style={{ fontSize: 25 }}>{subtitle}</span>
    </div>
  );
}
